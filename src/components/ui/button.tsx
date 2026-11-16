import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "cn";

const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center justify-center",
    "rounded-lg border border-transparent bg-clip-padding",
    "font-sans font-semibold whitespace-nowrap",
    "transition-all outline-none select-none",
    "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
    "active:not-aria-[haspopup]:translate-y-px",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        // Figma primary button
        default:
          "bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover",

        primary:
          "bg-button-primary text-button-primary-foreground hover:bg-button-primary-hover",

        // Figma secondary button
        secondary:
          "bg-button-secondary text-button-secondary-foreground hover:bg-button-secondary-hover",

        // Soft buttons
        "primary-soft":
          "bg-button-primary-soft text-button-primary-soft-foreground hover:bg-orange-100",

        "secondary-soft":
          "bg-button-secondary-soft text-button-secondary-soft-foreground hover:bg-purple-100",

        outline:
          "border-border bg-background text-foreground hover:bg-muted hover:text-foreground",

        ghost: "text-foreground hover:bg-muted hover:text-foreground",

        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20",

        link: "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default: "h-10 gap-3 px-4 text-button-md",

        lg: "h-12 gap-3 px-4 text-button-lg",

        sm: "h-9 gap-2 px-3 text-sm",

        xs: "h-8 gap-1.5 px-2.5 text-xs",

        icon: "size-10",

        "icon-sm": "size-9",

        "icon-lg": "size-12",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
