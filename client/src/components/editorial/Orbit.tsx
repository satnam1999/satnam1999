import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Cloud,
  Database,
  Feather,
  GraduationCap,
  Terminal,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Figure } from "./Figure";
import { Eyebrow, ease } from "./Eyebrow";
import { orbit, type OrbitItem } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  feather: Feather,
  workflow: Workflow,
  cloud: Cloud,
  cap: GraduationCap,
  briefcase: Briefcase,
  terminal: Terminal,
  database: Database,
  chart: BarChart3,
};

// Desktop: items sit on an ellipse around the figure (x%, y% of the stage).
const leftSpots = [
  [31, 31],
  [20, 47],
  [21, 63],
  [32, 79],
];
const rightSpots = [
  [69, 28],
  [80, 44],
  [80, 60],
  [69, 76],
];

function Item({ item, delay, compact }: { item: OrbitItem; delay: number; compact?: boolean }) {
  const Icon = icons[item.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease, delay }}
      className="flex flex-col items-center text-center"
    >
      <Icon aria-hidden className={cn("stroke-[1.25] text-ink/75", compact ? "h-[18px] w-[18px]" : "h-5 w-5")} />
      <p className={cn("label mt-2", compact && "!text-[0.55rem] !tracking-[0.2em]")}>{item.label}</p>
      <p
        className={cn(
          "font-display mt-1 italic leading-snug text-ink/85",
          compact ? "text-[0.84rem]" : "max-w-[13rem] text-[1.08rem]",
        )}
      >
        {item.value}
      </p>
    </motion.div>
  );
}

export function Orbit() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], ["9%", "-11%"]);

  const heading = (
    <>
      <Eyebrow index="01">The orbit</Eyebrow>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease }}
        className="font-display mt-5 text-[clamp(3.6rem,15vw,7.5rem)] italic leading-[0.86]"
      >
        My
        <br />
        world
      </motion.h2>
    </>
  );

  return (
    <section id="world" ref={ref} className="relative overflow-hidden py-20 lg:py-0">
      {/* Giant faded watermark that drifts sideways as you scroll */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center">
        <motion.p
          style={{ x: drift }}
          className="font-display w-full whitespace-nowrap text-center text-[38vw] italic leading-none text-ink/[0.05] lg:text-[23vw]"
        >
          My world
        </motion.p>
      </div>

      {/* Phones and tablets: figure flanked by two columns */}
      <div className="relative px-5 sm:px-8 lg:hidden">
        {heading}
        <div className="mt-12 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-2 sm:gap-x-8">
          <ul className="flex flex-col gap-8">
            {orbit.left.map((item, i) => (
              <li key={item.label} className={cn(i % 3 === 0 ? "translate-x-2" : "-translate-x-1")}>
                <Item item={item} delay={0.1 * i} compact />
              </li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease }}
          >
            <Figure className="h-[min(48svh,400px)] sm:h-[min(52svh,520px)]" />
          </motion.div>
          <ul className="flex flex-col gap-8">
            {orbit.right.map((item, i) => (
              <li key={item.label} className={cn(i % 3 === 0 ? "-translate-x-2" : "translate-x-1")}>
                <Item item={item} delay={0.1 * i + 0.05} compact />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop: an orbit around the figure */}
      <div className="relative mx-auto hidden h-[100svh] min-h-[760px] max-w-[1440px] lg:block">
        <div className="absolute left-14 top-[9%] z-10">{heading}</div>

        <svg
          aria-hidden
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute left-1/2 top-[52%] h-[66%] w-[62%] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        >
          <motion.ellipse
            cx="50"
            cy="50"
            rx="49.5"
            ry="49.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="2 7"
            className="text-ink/25"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease }}
          />
        </svg>

        <div className="absolute bottom-[10%] left-1/2 h-[72%] -translate-x-1/2">
          <motion.div
            className="h-full"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease }}
          >
            <Figure className="h-full" />
          </motion.div>
        </div>

        {[
          ...orbit.left.map((item, i) => [item, leftSpots[i], i] as const),
          ...orbit.right.map((item, i) => [item, rightSpots[i], i + 0.5] as const),
        ].map(([item, [x, y], order]) => (
          <div
            key={item.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <Item item={item} delay={0.25 + order * 0.12} />
          </div>
        ))}
      </div>
    </section>
  );
}
