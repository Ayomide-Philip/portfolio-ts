import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "glass" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    // Base styles: tactile response, focus ring, font, transition
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full cursor-pointer select-none transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

    // Size variants
    const sizeStyles = {
      sm: "h-8 px-3.5 text-xs gap-1.5",
      md: "h-9 sm:h-10 px-4 sm:px-5 text-xs font-semibold tracking-tight gap-2",
      lg: "h-11 sm:h-12 px-6 text-sm font-semibold tracking-tight gap-2.5",
      icon: "h-9 w-9 p-0 aspect-square",
    };

    // Impeccable Variant system
    const variantStyles = {
      primary:
        "bg-teal-700 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_14px_rgba(15,118,110,0.25)] hover:bg-teal-800 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_6px_20px_rgba(15,118,110,0.35)] hover:-translate-y-0.5 active:translate-y-0 dark:bg-teal-400 dark:text-[#080B11] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_0_24px_-4px_rgba(45,212,191,0.35)] dark:hover:bg-teal-300 dark:hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_0_32px_-2px_rgba(45,212,191,0.55)] dark:hover:-translate-y-0.5 dark:active:translate-y-0",
      glass:
        "backdrop-blur-xl bg-white/65 text-slate-800 border border-slate-200/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(15,23,42,0.04)] hover:bg-white/90 hover:border-slate-300 hover:text-slate-950 hover:-translate-y-0.5 active:translate-y-0 dark:bg-white/[0.06] dark:text-slate-200 dark:border-white/[0.12] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)] dark:hover:bg-white/[0.12] dark:hover:border-white/[0.22] dark:hover:text-white dark:hover:-translate-y-0.5 dark:active:translate-y-0",
      secondary:
        "bg-slate-100/90 text-slate-800 border border-slate-200 hover:bg-slate-200/90 hover:text-slate-900 active:scale-[0.98] dark:bg-[#131926] dark:text-slate-200 dark:border-[#1E283D] dark:hover:bg-[#1B2336] dark:hover:text-slate-100",
      outline:
        "bg-transparent text-slate-700 border border-slate-300/80 hover:bg-slate-100/80 hover:border-slate-400 hover:text-slate-900 active:scale-[0.98] dark:text-slate-300 dark:border-[#1E283D] dark:hover:bg-white/[0.05] dark:hover:border-[#334466] dark:hover:text-slate-100",
      ghost:
        "bg-transparent text-slate-600 hover:bg-slate-100/70 hover:text-slate-900 active:scale-[0.98] dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-slate-100",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
