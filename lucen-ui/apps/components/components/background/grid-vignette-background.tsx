import React from "react";
import { cn } from "#/lib/utils";

interface GridBackgroundProps {
  size?: number;
}

export function GridVignetteBackground({
  className,
  size = 24,
  ...props
}: React.ComponentProps<"div"> & GridBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 opacity-20 bg-[image:linear-gradient(to_right,var(--muted-foreground),transparent_1px),linear-gradient(to_bottom,var(--muted-foreground),transparent_1px)]",
        className
      )}
      style={{
        backgroundSize: `${size}px ${size}px`,
        maskImage: `linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)`,
        maskComposite: 'intersect',
      }}
      {...props}
    />
  );
}
