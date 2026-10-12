import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Eyebrow, ease } from "./Eyebrow";
import { Figure } from "./Figure";
import { contact, links } from "@/lib/content";

const socials = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
];

export function SayHello() {
  return (
    <section id="contact" className="pb-32 pt-24 lg:pb-28 lg:pt-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <Eyebrow index="07">Say hello</Eyebrow>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-x-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease }}
              className="font-display mt-8 text-[clamp(4.8rem,24vw,12rem)] italic leading-[0.84]"
            >
              {contact.heading[0]}
              <br />
              <span className="pl-[0.45em]">{contact.heading[1]}</span>
            </motion.h2>

            <p className="text-balance mt-10 max-w-lg text-[1.08rem] leading-relaxed text-ink-soft">{contact.line}</p>

            <a
              href={`mailto:${links.email}`}
              className="font-display group mt-8 inline-flex max-w-full items-center gap-2 break-words text-[clamp(1.35rem,6vw,3.25rem)] italic underline decoration-ink/25 decoration-1 underline-offset-[0.2em] transition-colors hover:text-plum hover:decoration-plum"
            >
              {links.email}
              <ArrowUpRight
                aria-hidden
                className="h-[0.8em] w-[0.8em] shrink-0 stroke-[1.25] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label group inline-flex items-center gap-1.5 !text-[0.7rem] !text-ink transition-colors hover:!text-plum"
                  >
                    {s.label}
                    <ArrowUpRight
                      aria-hidden
                      className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop bookend: he's back to wave you off */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease }}
            className="relative hidden lg:block lg:pr-[8%]"
          >
            <Figure className="h-[min(70svh,680px)]" />
            <div aria-hidden className="pointer-events-none absolute right-full top-[30%] mr-1 w-48">
              <p className="font-display text-right text-[1.15rem] italic text-ink-soft">see you on the court</p>
              <svg viewBox="0 0 120 70" className="ml-auto mt-1 h-14 w-24 overflow-visible" fill="none">
                <path
                  d="M18 6 C 46 4, 86 16, 108 50"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  className="text-ink/60"
                />
                <path
                  d="M96 46 L108 50 L109 37"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ink/60"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        <footer className="mt-24 flex flex-col gap-4 border-t border-ink/15 pt-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between lg:mt-32">
          <p>© {new Date().getFullYear()} Satnam Singh Pahwa</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 self-start transition-colors hover:text-ink sm:self-auto"
          >
            Back to top <ArrowUp aria-hidden className="h-4 w-4" />
          </a>
        </footer>
      </div>
    </section>
  );
}
