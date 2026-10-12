import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Figure } from "./Figure";
import { ease } from "./Eyebrow";
import { opening } from "@/lib/content";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

export function Opening() {
  const reduce = useReducedMotion();
  // He walks in from the side the figure sits on: left on desktop, right on phones.
  const [desktop] = useState(() => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches);
  const sway = desktop ? 1 : -1;

  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:grid lg:min-h-[100svh] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-x-10 lg:px-14">
        {/* Phones: text + figure share the first screen. Desktop: both join the 3-column grid. */}
        <div className="grid min-h-[100svh] grid-cols-[minmax(0,1fr)_auto] gap-x-1 lg:contents">
          <div className="relative z-10 flex flex-col justify-center pb-24 pt-10 lg:pb-[12vh] lg:pt-16">
            <motion.p
              {...rise(0.15)}
              className="eyebrow whitespace-nowrap !tracking-[0.24em] max-[359px]:whitespace-normal sm:!tracking-[0.32em]"
            >
              {opening.eyebrow}
            </motion.p>

            <h1 className="mt-6 lg:mt-8">
              <motion.span
                {...rise(0.3)}
                className="font-display block text-[clamp(4.9rem,22vw,11rem)] leading-[0.86] lg:text-[clamp(7rem,10.5vw,11.5rem)]"
              >
                Meet
              </motion.span>
              <motion.span
                {...rise(0.45)}
                className="font-display mt-5 block text-[clamp(2rem,8.6vw,3.9rem)] leading-[1] lg:mt-7"
              >
                {opening.firstName}
                <br />
                {opening.lastName}
              </motion.span>
            </h1>

            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.7 }}
              className="mt-6 block h-px w-12 origin-left bg-ink/50"
            />

            <motion.p {...rise(0.75)} className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft lg:text-base">
              <span className="block sm:inline">{opening.role}</span>
              <span aria-hidden className="hidden px-1.5 text-ink/40 sm:inline">
                •
              </span>
              <span className="sr-only sm:hidden">, </span>
              <span className="block sm:inline">{opening.company}</span>
            </motion.p>

            <motion.ul {...rise(0.85)} className="mt-4 flex flex-wrap gap-2">
              {opening.badges.map((badge, i) => (
                <li
                  key={badge}
                  className="label inline-flex items-center gap-1.5 rounded-full border border-ink/25 px-3 py-1.5 !text-[0.58rem] !tracking-[0.2em] text-ink/80 sm:!text-[0.62rem]"
                >
                  {i === 0 && <Check aria-hidden className="h-3 w-3 stroke-[2]" />}
                  {badge}
                </li>
              ))}
            </motion.ul>

            <motion.p
              {...rise(1)}
              className="font-display mt-7 text-[1.3rem] italic leading-[1.22] text-ink/90 sm:text-[1.55rem] lg:text-[1.9rem]"
            >
              {opening.tagline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </motion.p>
          </div>

          <div className="relative self-end justify-self-end pb-24 lg:justify-self-center lg:pb-[5.5rem]">
            <motion.div
              initial={reduce ? { opacity: 0 } : { x: desktop ? "-36vw" : "62vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ x: { duration: 1.7, ease: [0.3, 0.75, 0.35, 1] }, opacity: { duration: 0.35 } }}
            >
              <motion.div
                style={{ transformOrigin: "50% 100%" }}
                animate={
                  reduce
                    ? undefined
                    : {
                        y: [0, -9, 0, -9, 0, -7, 0, -3, 0],
                        rotate: [-1.4, 1.4, -1.4, 1.4, -1, 0.8, -0.4, 0.2, 0].map((r) => r * sway),
                      }
                }
                transition={{ duration: 1.7, ease: "easeInOut" }}
              >
                <Figure
                  decorative={false}
                  eager
                  className="h-[min(62svh,520px)] sm:h-[min(64svh,640px)] lg:h-[min(80svh,800px)]"
                />
              </motion.div>
            </motion.div>

            {/* A hand-drawn aside, standing in for the reel's pointing gesture */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.6 }}
              className="pointer-events-none absolute right-full top-[29%] mr-1 hidden w-44 lg:block"
            >
              <p className="font-display text-right text-[1.15rem] italic text-ink-soft">hi, that's me</p>
              <svg viewBox="0 0 120 70" className="ml-auto mt-1 h-14 w-24 overflow-visible" fill="none">
                <motion.path
                  d="M18 6 C 46 4, 86 16, 108 50"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  className="text-ink/60"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 2.1, duration: 0.8, ease }}
                />
                <motion.path
                  d="M96 46 L108 50 L109 37"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ink/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8, duration: 0.3 }}
                />
              </svg>
            </motion.div>
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 1.25 }}
          className="border-t border-ink/15 pb-6 pt-10 lg:self-start lg:border-0 lg:pb-0 lg:pt-[14vh] lg:text-right"
        >
          <p className="label">{opening.sideLabel}</p>
          <span aria-hidden className="mt-3 block h-px w-12 bg-ink/40 lg:ml-auto" />
          <p className="font-display mt-4 text-[1.6rem] italic lg:text-[1.75rem]">{opening.sideValue}</p>
          <p aria-hidden className="font-display mt-8 text-5xl leading-none text-ink/25">
            “
          </p>
          <blockquote className="font-display mt-1 max-w-[23rem] text-[1.25rem] italic leading-snug text-ink/85 lg:ml-auto lg:text-[1.35rem]">
            {opening.quote}
          </blockquote>
          <p className="label mt-5">
            {opening.signature[0]} <span className="px-1 text-ink/30">·</span> {opening.signature[1]}
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
