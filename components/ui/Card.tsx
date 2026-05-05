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
    const baseClasses = "rounded-2xl overflow-hidden";

    const variantClasses = {
      default: "bg-white dark:bg-zinc-900 shadow-sm",
      bordered:
        "bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 backdrop-blur-sm",
      elevated:
        "bg-white dark:bg-zinc-900 shadow-lg hover:shadow-xl transition-shadow duration-300",
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
