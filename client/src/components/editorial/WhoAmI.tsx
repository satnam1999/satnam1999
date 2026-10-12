import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Figure } from "./Figure";
import { Eyebrow, ease } from "./Eyebrow";
import { about } from "@/lib/content";

export function WhoAmI() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  // "Who" rises first, "am I?" follows — scrubbed by scroll like the reel.
  const { scrollYProgress } = useScroll({ target: headingRef, offset: ["start 0.95", "start 0.35"] });
  const whoY = useTransform(scrollYProgress, [0, 0.75], [70, 0]);
  const whoOpacity = useTransform(scrollYProgress, [0, 0.55], [0, 1]);
  const amY = useTransform(scrollYProgress, [0.2, 1], [90, 0]);
  const amOpacity = useTransform(scrollYProgress, [0.3, 0.9], [0, 1]);

  return (
    <section id="who" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <Eyebrow index="02">The short version</Eyebrow>

        <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] gap-x-3 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-16">
          <h2
            ref={headingRef}
            className="font-display col-start-1 row-start-1 self-end text-[clamp(4.6rem,22vw,10rem)] italic leading-[0.84] lg:col-start-2 lg:self-start"
          >
            <motion.span style={{ y: whoY, opacity: whoOpacity }} className="block">
              Who
            </motion.span>
            <motion.span style={{ y: amY, opacity: amOpacity }} className="block pl-[0.5em]">
              am I?
            </motion.span>
          </h2>

          <div className="col-start-2 row-start-1 self-end lg:sticky lg:top-[9svh] lg:col-start-1 lg:row-span-2 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease }}
              className="lg:flex lg:justify-center"
            >
              <Figure className="h-[min(38svh,300px)] sm:h-[min(44svh,420px)] lg:h-[min(82svh,800px)]" />
            </motion.div>
          </div>

          <div className="col-span-2 row-start-2 lg:col-span-1 lg:col-start-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease }}
              className="mt-12 max-w-[38rem] lg:mt-14"
            >
              <p className="font-display text-[2rem] leading-tight lg:text-[2.6rem]">
                Hi, I'm <em className="italic">{about.greeting}</em>.
              </p>
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 16)} className="mt-4 text-[1.04rem] leading-[1.75] text-ink-soft lg:text-[1.08rem]">
                  {p}
                </p>
              ))}
            </motion.div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 lg:mt-16 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-9">
              {about.facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, ease, delay: (i % 3) * 0.08 }}
                  className="border-t border-ink/15 pt-3"
                >
                  <dt className="label">
                    <span className="font-display mr-1.5 text-[0.72rem] normal-case italic tracking-normal">
                      ({String(i + 1).padStart(2, "0")})
                    </span>
                    {fact.label}
                  </dt>
                  <dd className="font-display mt-1.5 text-[1.18rem] leading-snug lg:text-[1.35rem]">{fact.value}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
