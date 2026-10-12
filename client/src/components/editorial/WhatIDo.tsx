import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Figure } from "./Figure";
import { Eyebrow, ease } from "./Eyebrow";
import { career, shortPeriod } from "@/lib/content";

const tone = {
  base: "text-[#ece7de]",
  dim: "text-[#857f76]",
  type: "text-[#e5c18f]",
  str: "text-[#dcaebf]",
  key: "text-[#b9b2a6]",
};

const { current, earlier } = career;

const CODE: [string, string][] = [
  ["me", tone.base],
  [" = ", tone.dim],
  ["Engineer", tone.type],
  ["(\n", tone.dim],
  ["    name", tone.key],
  ["=", tone.dim],
  ['"Satnam"', tone.str],
  [",\n", tone.dim],
  ["    role", tone.key],
  ["=", tone.dim],
  [`"${current.title}"`, tone.str],
  [",\n", tone.dim],
  ["    at", tone.key],
  ["=", tone.dim],
  [`"${current.company}"`, tone.str],
  [",\n", tone.dim],
  [")\n\n", tone.dim],
  ["me", tone.base],
  [".", tone.dim],
  ["build", tone.base],
  ["(", tone.dim],
  ["s3 ", tone.base],
  [">>", tone.type],
  [" glue ", tone.base],
  [">>", tone.type],
  [" redshift", tone.base],
  [")", tone.dim],
];
const TOTAL = CODE.reduce((n, [text]) => n + text.length, 0);

function useTyped(total: number, start: boolean, charsPerSecond = 34) {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (reduce) {
      setTyped(total);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const next = Math.min(total, Math.floor(((now - t0) / 1000) * charsPerSecond));
      setTyped(next);
      if (next < total) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, total, reduce, charsPerSecond]);
  return typed;
}

const glyphs = [
  { text: "</>", className: "left-[64%] top-[68%] sm:left-[35%] sm:top-[70%]", delay: "0s" },
  { text: "{ }", className: "left-[80%] top-[58%] sm:left-[54%] sm:top-[83%]", delay: "-2s" },
  { text: "SELECT *", className: "left-[54%] top-[86%] sm:left-[76%] sm:top-[64%]", delay: "-4s" },
  { text: "=>", className: "left-[84%] top-[80%] sm:left-[88%] sm:top-[84%]", delay: "-1s" },
];

function CodeCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const typed = useTyped(TOTAL, inView);

  let remaining = typed;
  const visible = CODE.map(([text, cls], i) => {
    if (remaining <= 0) return null;
    const part = text.slice(0, remaining);
    remaining -= text.length;
    return (
      <span key={i} className={cls}>
        {part}
      </span>
    );
  });

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[720px] pb-[13%] lg:max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.9, ease }}
        className="relative aspect-[4/5.2] overflow-hidden rounded-[26px] bg-night shadow-[0_40px_80px_-32px_rgba(29,27,24,0.6)] sm:aspect-[16/11] sm:rounded-[30px]"
      >
        <div className="absolute left-[7%] right-[6%] top-[7%] sm:left-[44%] sm:right-[5%] sm:top-[13%]">
          <div aria-hidden className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d9776a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e2b25e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#8db06c]" />
          </div>
          <pre
            aria-hidden
            className="mt-4 whitespace-pre font-mono text-[11px] leading-[1.8] sm:text-[12px] lg:text-[13.5px] xl:text-[15px]"
          >
            {visible}
            <span className="animate-caret ml-px inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] bg-[#ece7de]/80" />
          </pre>
          <p className="sr-only">
            A code snippet describing Satnam as an engineer: {current.title} at {current.company}, building data
            pipelines from S3 through Glue to Redshift.
          </p>
        </div>

        {glyphs.map((g) => (
          <span
            key={g.text}
            aria-hidden
            style={{ animationDelay: g.delay }}
            className={`animate-drift absolute font-mono text-[12px] text-white/30 sm:text-[14px] ${g.className}`}
          >
            {g.text}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -28 }}
        animate={inView ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 1, ease, delay: 0.25 }}
        className="absolute bottom-0 left-[8%] h-[57%] sm:left-[11%] sm:h-[96%]"
      >
        <Figure className="h-full" imgClassName="sticker-edge" />
      </motion.div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink/80">
          <span aria-hidden className="mt-[0.78em] h-px w-4 shrink-0 bg-plum/70" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function WhatIDo() {
  return (
    <section id="work" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <Eyebrow index="04">Career</Eyebrow>

        <div className="mt-8 grid items-center gap-y-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
          >
            <h2 className="font-display text-[clamp(4.6rem,22vw,10rem)] italic leading-[0.84]">
              What
              <br />
              <span className="pl-[0.15em]">I do</span>
            </h2>
            <p className="font-display mt-10 text-[1.9rem] italic leading-tight text-plum lg:text-[2.2rem]">
              {current.title}
            </p>
            <p className="label mt-3 !text-[0.68rem] !tracking-[0.3em]">{current.company}</p>
            <p className="font-display mt-2 italic text-ink-soft">{shortPeriod(current.period)}</p>
            <p className="mt-6 max-w-md text-[1.04rem] leading-[1.75] text-ink-soft">{current.description}</p>
            <div className="max-w-md">
              <Bullets items={current.responsibilities} />
            </div>
          </motion.div>

          <CodeCard />
        </div>

        <div className="mt-24 lg:mt-36">
          <p className="font-display text-[1.7rem] italic">Before that</p>
          <div className="mt-8 grid gap-14 lg:grid-cols-2 lg:gap-16">
            {earlier.map((role, i) => (
              <motion.article
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease, delay: i * 0.1 }}
                className="border-t border-ink/15 pt-6"
              >
                <p className="font-display italic text-ink-soft">{shortPeriod(role.period)}</p>
                <h3 className="font-display mt-2 text-[1.65rem] leading-tight lg:text-[1.9rem]">
                  {role.title.replace(" - ", " — ")}
                </h3>
                <p className="label mt-2">{role.company}</p>
                <p className="mt-4 max-w-lg leading-[1.7] text-ink-soft">{role.description}</p>
                <div className="max-w-lg">
                  <Bullets items={role.responsibilities} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
