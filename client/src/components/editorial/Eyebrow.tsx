import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** "01 —— THE ORBIT" style section marker. */
export function Eyebrow({ index, children, className }: { index: string; children: string; className?: string }) {
  return (
    <motion.p
      className={cn("eyebrow flex items-center gap-3", className)}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="font-display text-[0.8rem] italic tracking-normal normal-case">{index}</span>
      <span aria-hidden className="h-px w-10 bg-ink/40" />
      <span>{children}</span>
    </motion.p>
  );
}

export const ease = [0.22, 1, 0.36, 1] as const;
