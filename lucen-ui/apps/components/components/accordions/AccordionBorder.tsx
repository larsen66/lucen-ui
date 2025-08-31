"use client";

import React, { useState } from 'react';
import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '#/components/ui/accordion';
import { cn } from '#/lib/utils';

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "30%",
  ry = "30%",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);
  const containerRef = useRef<SVGSVGElement>(null);

  useAnimationFrame((time) => {
    const element = pathRef.current;
    if (element) {
      const length = element.getTotalLength();
      if (length) {
        const pxPerMillisecond = length / duration;
        progress.set((time * pxPerMillisecond) % length);
      }
    }
  });

  const x = useTransform(
    progress,
    (val) => {
      const element = pathRef.current;
      if (element) {
        try {
          const point = element.getPointAtLength(val);
          return point.x;
        } catch {
          return 0;
        }
      }
      return 0;
    }
  );
  
  const y = useTransform(
    progress,
    (val) => {
      const element = pathRef.current;
      if (element) {
        try {
          const point = element.getPointAtLength(val);
          return point.y;
        } catch {
          return 0;
        }
      }
      return 0;
    }
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        ref={containerRef}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export function BorderButton({
  borderRadius = "1.75rem",
  children,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration,
  className,
  animate = true,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  animate?: boolean;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative p-[1px] overflow-hidden",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <motion.div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        animate={{
          opacity: animate ? 1 : 0,
          scale: animate ? 1 : 0.95,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1], // ease-out cubic bezier
          delay: animate ? 0 : 0.1, // небольшая задержка при исчезновении
        }}
      >
        <MovingBorder duration={(duration || 3600) * 1.2} rx="30%" ry="30%">
          <motion.div
            style={{
              width: '13rem',
              height: '13rem',
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.5) 80%, rgba(14, 165, 233, 0.17) 80%, transparent 100%)',
              borderRadius: '50%',
              boxShadow: '0 0 11px rgba(14, 165, 233, 0.08), 0 0 22px rgba(14, 165, 233, 0.03)',
              border: '2px solid rgba(14, 165, 233, 0.34)'
            }}
            animate={{
              opacity: [0.8, 1, 0.8],
              scale: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </MovingBorder>
      </motion.div>

      <div
        className={cn(
          "relative bg-white/95 dark:bg-gray-900/95 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl flex items-center justify-center w-full h-full antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

function AnimatedAccordionItem({
  item,
  isExpanded,
  onToggle
}: {
  item: { id: string; title: string; content: string };
  isExpanded: boolean;
  onToggle: (value: string) => void;
}) {
  const borderRadius = "0.5rem";

  return (
    <div
      className={cn(
        "bg-transparent relative p-[1px] overflow-hidden",
        isExpanded && "bg-gradient-to-r from-sky-500/20 via-transparent to-sky-500/20"
      )}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: isExpanded ? 1 : 0,
          scale: isExpanded ? 1 : 0.9,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          delay: isExpanded ? 0.1 : 0,
        }}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
          pointerEvents: isExpanded ? 'auto' : 'none',
        }}
      >
        <MovingBorder duration={4320} rx="30%" ry="30%">
          <motion.div
            style={{
              width: '8rem',
              height: '8rem',
              background: 'radial-gradient(circle, rgba(14, 165, 233, 0.5) 80%, rgba(14, 165, 233, 0.17) 80%, transparent 100%)',
              borderRadius: '50%',
              boxShadow: '0 0 11px rgba(14, 165, 233, 0.08), 0 0 22px rgba(14, 165, 233, 0.03)',
              border: '2px solid rgba(14, 165, 233, 0.34)'
            }}
            animate={{
              opacity: [0.8, 1, 0.8],
              scale: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </MovingBorder>
      </motion.div>

      <div
        className={cn(
          "relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl w-full antialiased",
          isExpanded && "bg-gradient-to-br from-white/98 to-white/90 dark:from-gray-900/98 dark:to-gray-900/90"
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        <AccordionItem value={item.id} className="px-4">
          <AccordionTrigger onClick={() => onToggle(item.id)}>
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="px-0">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      </div>
    </div>
  );
}

function AccordionBorderContent() {
  const [expandedItem, setExpandedItem] = useState<string | undefined>(undefined);

  const accordionData = [
    {
      id: "item-1",
      title: "Clean Design",
      content: "Minimalist and clean interface for better user experience with subtle border styling."
    },
    {
      id: "item-2",
      title: "Flexible Configuration",
      content: "Easily adapts to various needs and design styles while maintaining accessibility standards."
    },
    {
      id: "item-3",
      title: "Accessibility",
      content: "Full keyboard support and screen reader compatibility for all users with semantic HTML structure."
    }
  ];

  const handleToggle = (value: string) => {
    setExpandedItem(expandedItem === value ? undefined : value);
  };

  return (
    <div className="flex items-center justify-center py-[20%] px-4">
      <div className="w-full max-w-xl" style={{ maxWidth: 'calc(36rem * 0.8)', minWidth: 'calc(36rem * 0.8)' }}>
        <BorderButton
          borderRadius="1rem"
          duration={3600}
          borderClassName="opacity-[0.8] bg-[radial-gradient(var(--sky-400)_40%,transparent_60%)]"
          className=""
          animate={!expandedItem}
        >
          <div className="w-full p-6">
            <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100" style={{ fontFamily: 'UberMove, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
              Moving Border Accordion
            </h3>
            <Accordion
              type="single"
              collapsible
              value={expandedItem}
              onValueChange={setExpandedItem}
              style={{ fontFamily: 'UberMove, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
            >
              {accordionData.map((item) => (
                <AnimatedAccordionItem
                  key={item.id}
                  item={item}
                  isExpanded={expandedItem === item.id}
                  onToggle={handleToggle}
                />
              ))}
            </Accordion>
          </div>
        </BorderButton>
      </div>
    </div>
  );
}

export default function AccordionBorder() {
  return <AccordionBorderContent />
}
