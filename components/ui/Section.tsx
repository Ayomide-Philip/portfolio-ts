import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  size?: "sm" | "md" | "lg";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ size = "md", className = "", children }, ref) => {
    const paddingClasses = {
      sm: "py-10 px-4",
      md: "py-15 px-4",
      lg: "py-24 px-4",
    };

    return (
      <section ref={ref} className={`${paddingClasses[size]} ${className}`}>
        <div className="mx-auto max-w-6xl">{children}</div>
      </section>
    );
  },
);

Section.displayName = "Section";
