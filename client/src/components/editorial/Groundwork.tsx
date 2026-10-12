import { motion } from "framer-motion";
import { Eyebrow, ease } from "./Eyebrow";
import { awards, education } from "@/lib/content";

const splitYear = (year: string) => {
  const m = year.match(/^(Q\d)\s+(\d{4})$/);
  return m ? { quarter: m[1], year: m[2] } : { quarter: undefined, year };
};

export function Groundwork() {
  return (
    <section id="roots" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <Eyebrow index="05">Where it started</Eyebrow>

        <div className="mt-8 grid gap-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
          >
            <h2 className="font-display text-[clamp(3.9rem,17vw,8.75rem)] italic leading-[0.86]">
              The
              <br />
              groundwork
            </h2>
            <p className="font-display mt-10 max-w-xl text-[1.75rem] italic leading-tight text-plum lg:text-[2.1rem]">
              {education.degree}
            </p>
            <p className="label mt-3 max-w-md leading-[1.9]">{education.university}</p>
            <p className="font-display mt-2 italic text-ink-soft">{education.period.replace(" - ", " – ")}</p>
            <p className="mt-6 max-w-lg text-[1.04rem] leading-[1.75] text-ink-soft">{education.description}</p>

            <ol className="mt-9 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5">
              {education.courses.map((course, i) => (
                <li key={course} className="border-t border-ink/15 pt-3">
                  <span className="font-display text-[0.75rem] italic text-ink-soft">
                    ({String(i + 1).padStart(2, "0")})
                  </span>
                  <span className="font-display mt-1 block text-[1.12rem] leading-snug">{course}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <div className="lg:pt-4">
            <p className="label">Certifications &amp; awards</p>
            <ul className="mt-6 border-t border-ink/15">
              {awards.map((award, i) => {
                const { quarter, year } = splitYear(award.year);
                return (
                  <motion.li
                    key={award.name}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                    className="flex items-start gap-5 border-b border-ink/15 py-6"
                  >
                    <span className="w-20 shrink-0">
                      <span className="font-display block text-[1.9rem] leading-none lining-nums">{year}</span>
                      {quarter && <span className="label mt-1.5 block">{quarter}</span>}
                    </span>
                    <span>
                      <span className="font-display block text-[1.25rem] leading-snug lg:text-[1.35rem]">
                        {award.name.replace(" - ", " — ")}
                      </span>
                      <span className="label mt-1.5 block">{award.issuer}</span>
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
