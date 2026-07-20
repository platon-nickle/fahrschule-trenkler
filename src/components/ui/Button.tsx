import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-inter font-semibold transition-all duration-200 active:scale-95";

    const variants = {
      primary: "bg-accent text-ink hover:bg-accent-hover hover:shadow-[0_0_15px_rgba(245,196,0,0.3)]",
      secondary: "bg-ink text-white hover:bg-ink/90",
      outline: "border border-divider text-ink hover:border-ink",
    };

    const sizes = {
      default: "h-12 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    const buttonClassName = cn(baseClasses, variants[variant], sizes[size], className);

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(buttonClassName, child.props.className),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={buttonClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
