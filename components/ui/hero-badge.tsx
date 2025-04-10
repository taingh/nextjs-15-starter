import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Define badge variants similar to shadcn/ui Badge, but maybe simplified for this use case
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        ghost: "border-transparent text-foreground hover:bg-accent hover:text-accent-foreground", // Added ghost variant
      },
      size: { // Added size variants
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-sm",
        lg: "px-3 py-1 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md", // Default size
    },
  }
);

export interface HeroBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

function HeroBadge({
  className,
  variant,
  size, // Include size prop
  href,
  text,
  icon,
  endIcon,
  ...props
}: HeroBadgeProps) {
  const content = (
    <div
      className={cn(badgeVariants({ variant, size }), "gap-1", className)} // Apply size variant and add gap
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
      {endIcon && <span className="ml-1">{endIcon}</span>}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}

export { HeroBadge, badgeVariants };
