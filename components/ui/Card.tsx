import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { variant = "default", interactive = false, className = "", children },
    ref,
  ) => {
    const baseClasses = "relative rounded-3xl overflow-hidden";

    const variantClasses = {
      default:
        "border border-white/50 bg-white/65 backdrop-blur-xl shadow-[0_8px_32px_-16px_rgba(0,0,0,0.2)] dark:border-white/10 dark:bg-zinc-900/60 dark:shadow-[0_8px_32px_-16px_rgba(0,0,0,0.8)]",
      bordered:
        "border border-white/60 bg-white/55 backdrop-blur-xl shadow-[0_8px_32px_-14px_rgba(0,0,0,0.18)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_32px_-14px_rgba(0,0,0,0.7)]",
      elevated:
        "border border-white/50 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-xl transition-shadow duration-300 dark:border-white/10 dark:bg-zinc-900/70",
    };

    const interactiveClasses = interactive
      ? "hover:scale-105 transition-transform duration-300"
      : "";

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${interactiveClasses} ${className}`}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
