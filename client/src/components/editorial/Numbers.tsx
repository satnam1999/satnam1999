import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { Heart } from "lucide-react";
import { Eyebrow, ease } from "./Eyebrow";
import { stats, type Stat } from "@/lib/content";
import { cn } from "@/lib/utils";

function useCountUp(target: number, start: boolean) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (reduce) {
      setValue(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, target, reduce]);
  return value;
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useCountUp(stat.kind === "count" ? stat.value : 0, inView);

  return (
    <div ref={ref} className={cn("border-t border-ink/15 pt-5", index % 3 === 1 && "lg:translate-y-16")}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, ease, delay: (index % 3) * 0.08 }}
      >
        {stat.kind === "count" ? (
          <p className="font-display text-[clamp(4.2rem,18vw,8.75rem)] leading-[0.85] tabular-nums lining-nums">
            <span className="sr-only">
              {stat.value}
              {stat.suffix}
            </span>
            <span aria-hidden>{count}</span>
            {stat.suffix && (
              <span aria-hidden className="ml-1 align-[0.42em] text-[0.5em]">
                {stat.suffix}
              </span>
            )}
          </p>
        ) : (
          <motion.span
            className="inline-block origin-bottom"
            animate={inView ? { scale: [1, 1.14, 1, 1.08, 1] } : undefined}
            transition={{ duration: 1.1, delay: 0.5, ease: "easeInOut" }}
          >
            <Heart aria-hidden className="h-[clamp(3.6rem,15vw,7.25rem)] w-[clamp(3.6rem,15vw,7.25rem)] stroke-[0.9]" />
          </motion.span>
        )}
        <p className="label mt-5">{stat.label}</p>
        <p className="font-display mt-1.5 text-[1.02rem] italic leading-snug text-ink/80 lg:text-[1.12rem]">
          {stat.note}
        </p>
      </motion.div>
    </div>
  );
}

export function Numbers() {
  return (
    <section id="numbers" className="py-24 lg:pb-48 lg:pt-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <Eyebrow index="03">By the numbers</Eyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease }}
          className="font-display mt-6 text-[clamp(3.1rem,13vw,7.25rem)] italic leading-[0.9]"
        >
          A few things
          <br />
          <span className="pl-[0.9em]">about me</span>
        </motion.h2>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 lg:mt-24 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
