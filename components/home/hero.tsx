"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button"; // Updated path
import { cn } from "@/lib/utils"; // Updated path
import Link from "next/link";
import { HeroBadge } from "@/components/ui/hero-badge"; // Updated path
import { logo as Logo, component as Component } from "@/components/icons"; // Import icons here

const ease = [0.16, 1, 0.3, 1];

// Define the data directly in this file
const heroData = {
  pill: {
    text: "New! Next-Forge v2.0",
    href: "/blogs/introducing-next-forge-v2",
    icon: <Logo className="h-4 w-4" />,
    variant: "default" as const,
    size: "md" as const,
  },
  content: {
    title: "Build beautiful apps",
    titleHighlight: "with ease",
    description:
      "A modern component library with beautiful defaults and endless customization options. Start building your next project faster.",
    primaryAction: {
      href: "/docs/getting-started",
      text: "Get Started",
      icon: <Logo className="h-4 w-4" />,
    },
    secondaryAction: {
      href: "/components",
      text: "Browse Components",
      icon: <Component className="h-4 w-4" />,
    },
  },
};

interface HeroContentProps {
  title: string;
  titleHighlight?: string;
  description: string;
  primaryAction?: {
    href: string;
    text: string;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    href: string;
    text: string;
    icon?: React.ReactNode;
  };
}

function HeroContent({
  title,
  titleHighlight,
  description,
  primaryAction,
  secondaryAction,
}: HeroContentProps) {
  return (
    <div className="flex flex-col space-y-4">
      <motion.h1
        className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-primary">{titleHighlight}</span>
        )}
      </motion.h1>
      <motion.p
        className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease }}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row gap-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease }}
      >
        {primaryAction && (
          <Link
            href={primaryAction.href}
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 w-full sm:w-auto justify-center"
            )}
          >
            {primaryAction.icon}
            {primaryAction.text}
          </Link>
        )}
        {secondaryAction && (
          <Link
            href={secondaryAction.href}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 w-full sm:w-auto justify-center"
            )}
          >
            {secondaryAction.icon}
            {secondaryAction.text}
          </Link>
        )}
      </motion.div>
    </div>
  );
}

interface HeroProps {
  pill?: {
    href?: string;
    text: string;
    icon?: React.ReactNode;
    endIcon?: React.ReactNode;
    variant?: "default" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
  };
  content: HeroContentProps;
  preview?: React.ReactNode;
}

const Hero = ({ pill, content, preview }: HeroProps) => {
  return (
    <div className="container relative overflow-hidden">
      <div className="flex min-h-[calc(100vh-64px)] flex-col lg:flex-row items-center py-8 px-4 md:px-8 lg:px-12">
        <div className="flex flex-col gap-4 w-full lg:max-w-2xl">
          {pill && <HeroBadge {...pill} />}
          <HeroContent {...content} />
        </div>
        {preview && (
          <div className="w-full lg:max-w-xl lg:pl-16 mt-12 lg:mt-0">
            {preview}
          </div>
        )}
      </div>
    </div>
  );
};

// Original Hero component definition remains the same
// ... (HeroContent and Hero component code as before) ...

// Create and export a new component that uses the predefined data
const HomePageHero = () => {
  return <Hero {...heroData} />;
};

export { HomePageHero }; // Export the new wrapper component
