"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import { useComponentTheme } from "#/components/theme/component-theme-provider"

import { cn } from "#/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  let theme = 'dark';
  try {
    const { theme: contextTheme } = useComponentTheme();
    theme = contextTheme;
  } catch {
    // Fallback если контекст недоступен
  }

  const itemStyle = {
    borderBottomColor: theme === "dark" ? "#475569" : "#e2e8f0", // shadcn border
    borderBottomWidth: "1px", 
    borderBottomStyle: "solid"
  };

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      style={itemStyle}
      className={cn("last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  let theme = 'dark';
  try {
    const { theme: contextTheme } = useComponentTheme();
    theme = contextTheme;
  } catch {
    // Fallback если контекст недоступен
  }

  const triggerStyle = {
    color: theme === "dark" ? "#f8fafc" : "#0f172a" // shadcn foreground
  };

  const iconStyle = {
    color: theme === "dark" ? "#94a3b8" : "#64748b" // shadcn muted-foreground
  };

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        style={triggerStyle}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon 
          style={iconStyle}
          className="h-4 w-4 shrink-0 transition-transform duration-200" 
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  let theme = 'dark';
  try {
    const { theme: contextTheme } = useComponentTheme();
    theme = contextTheme;
  } catch {
    // Fallback если контекст недоступен
  }

  const contentStyle = {
    color: theme === "dark" ? "#cbd5e1" : "#475569" // shadcn muted-foreground
  };

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      style={contentStyle}
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
