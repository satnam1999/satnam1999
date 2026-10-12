import cutout from "@/assets/satnam-cutout.webp";
import { cn } from "@/lib/utils";

type FigureProps = {
  /** Size the figure by giving this wrapper a height, e.g. "h-[70svh]". */
  className?: string;
  imgClassName?: string;
  flip?: boolean;
  shadow?: boolean;
  /** Only the opening figure is announced to screen readers. */
  decorative?: boolean;
  eager?: boolean;
};

export function Figure({ className, imgClassName, flip, shadow = true, decorative = true, eager }: FigureProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      {shadow && (
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-[-1.5%] left-1/2 h-[4.5%] w-[85%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(29,27,24,0.28),rgba(29,27,24,0))]"
        />
      )}
      <img
        src={cutout}
        alt={decorative ? "" : "Satnam Singh Pahwa"}
        aria-hidden={decorative || undefined}
        width={423}
        height={1500}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        draggable={false}
        className={cn("relative block h-full w-auto max-w-none select-none", flip && "-scale-x-100", imgClassName)}
      />
    </div>
  );
}
