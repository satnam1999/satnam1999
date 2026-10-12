import { motion, useScroll, useSpring } from "framer-motion";
import { ease } from "./Eyebrow";

/** Thin reading-progress line along the top edge. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div aria-hidden style={{ scaleX }} className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-ink/80" />
  );
}

const items = [
  { href: "#who", label: "About" },
  { href: "#work", label: "Work" },
];

/** Floating pill at the bottom — the reel's little toolbar, as site navigation. */
export function Dock() {
  return (
    <motion.nav
      aria-label="Sections"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.7, duration: 0.7, ease }}
      className="pb-safe pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center"
    >
      <div className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-ink/10 bg-paper/80 p-1.5 shadow-[0_12px_32px_-14px_rgba(29,27,24,0.45)] backdrop-blur-md">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-[0.82rem] text-ink-soft transition-colors hover:bg-ink/5 hover:text-ink"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-2 text-[0.82rem] font-medium text-paper transition-colors hover:bg-plum"
        >
          Say hi
        </a>
      </div>
    </motion.nav>
  );
}
