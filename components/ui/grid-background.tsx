import { cn } from "@/lib/utils"; // Use correct alias

interface GridBackgroundProps {
  className?: string;
}

export default function GridBackground({ className }: GridBackgroundProps) {
  return (
    // Fixed positioned background, covering the entire viewport
    <div className={cn("fixed inset-0 -z-10 h-screen w-full", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#303030_1px,transparent_1px),linear-gradient(to_bottom,#303030_1px,transparent_1px)]",
        )}
      />
      {/* Removed the radial gradient mask div */}
    </div>
  );
}
