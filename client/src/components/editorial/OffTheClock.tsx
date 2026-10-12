import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Eyebrow, ease } from "./Eyebrow";
import { offTheClock } from "@/lib/content";

const ARC = "M 70 96 C 250 40, 440 150, 566 430";
const START = { x: 70, y: 96, angle: -17 };

/** A smash drawn across the page as you scroll — the shuttle rides the arc and the speed climbs. */
function SmashArc() {
  const wrap = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start 0.85", "end 0.55"] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });
  const [shuttle, setShuttle] = useState({ ...START, speed: 0 });

  useMotionValueEvent(progress, "change", (v) => {
    const el = path.current;
    if (!el) return;
    const t = Math.min(1, Math.max(0, v));
    const length = el.getTotalLength();
    const at = el.getPointAtLength(t * length);
    // Heading = direction between two nearby points (clamped so the end still has one).
    const d0 = Math.min(Math.max(0, t * length), length - 1);
    const p0 = el.getPointAtLength(d0);
    const p1 = el.getPointAtLength(d0 + 1);
    const angle = (Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180) / Math.PI;
    setShuttle({ x: at.x, y: at.y, angle, speed: Math.round(t * offTheClock.fact.speed) });
  });

  return (
    <div ref={wrap} className="relative">
      <svg viewBox="0 0 640 520" className="h-auto w-full overflow-visible" aria-hidden>
        <path
          d={ARC}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="3 9"
          className="text-ink/25"
        />
        <motion.path
          ref={path}
          d={ARC}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="text-ink/70"
          style={{ pathLength: progress }}
        />
        <circle cx={START.x} cy={START.y} r="4" className="fill-plum" />
        <g transform={`translate(${shuttle.x} ${shuttle.y}) rotate(${shuttle.angle})`}>
          <path
            d="M -3 -7.5 L -46 -20 L -46 20 L -3 7.5 Z"
            className="fill-paper stroke-ink"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path
            d="M -3 -3.6 L -46 -9.5 M -3 0 L -46 0 M -3 3.6 L -46 9.5"
            className="stroke-ink/50"
            strokeWidth="0.9"
          />
          <path d="M -18 -11.3 L -18 11.3 M -33 -15.6 L -33 15.6" className="stroke-ink" strokeWidth="1.1" />
          <path d="M -4 -8 C 9 -8, 12.5 -2.5, 12.5 0 C 12.5 2.5, 9 8, -4 8 Z" className="fill-ink" />
        </g>
      </svg>

      <p className="font-display absolute left-[3%] top-[2%] text-[1.05rem] italic text-ink-soft sm:text-[1.2rem]">
        smash.
      </p>

      <div className="absolute bottom-[4%] left-0">
        <p className="font-display text-[clamp(3.6rem,15vw,7rem)] leading-[0.85] tabular-nums lining-nums">
          <span className="sr-only">{offTheClock.fact.speed}</span>
          <span aria-hidden>{shuttle.speed}</span>
        </p>
        <p className="label mt-2">km/h</p>
      </div>
    </div>
  );
}

export function OffTheClock() {
  return (
    <section id="off-the-clock" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <Eyebrow index="06">Off the clock</Eyebrow>

        <div className="mt-8 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
          >
            <h2 className="font-display text-[clamp(4.4rem,20vw,9.5rem)] italic leading-[0.98]">
              Off the
              <br />
              <span className="pl-[0.4em]">clock</span>
            </h2>
            <p className="font-display mt-10 text-[1.8rem] italic leading-tight text-plum lg:text-[2.1rem]">
              Badminton enthusiast
            </p>
            {offTheClock.paragraphs.map((p) => (
              <p key={p.slice(0, 16)} className="mt-4 max-w-lg text-[1.04rem] leading-[1.75] text-ink-soft">
                {p}
              </p>
            ))}
            <dl className="mt-10 grid max-w-md grid-cols-2 gap-6">
              <div className="border-t border-ink/15 pt-3">
                <dt className="label">Favourite shot</dt>
                <dd className="font-display mt-1.5 text-[1.35rem]">{offTheClock.favouriteShot}</dd>
              </div>
              <div className="border-t border-ink/15 pt-3">
                <dt className="label">Playing since</dt>
                <dd className="font-display mt-1.5 text-[1.35rem] lining-nums">{offTheClock.playingSince}</dd>
              </div>
            </dl>
          </motion.div>

          <div>
            <SmashArc />
            <div className="mt-8 border-t border-ink/15 pt-5">
              <p className="label">Did you know?</p>
              <p className="font-display mt-2 max-w-md text-[1.15rem] italic leading-snug text-ink/85">
                {offTheClock.fact.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
