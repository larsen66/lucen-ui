"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "#/components/ui/accordion"


interface TextEffectProps {
  per: 'line' | 'word' | 'char'
  as?: React.ElementType
  segmentWrapperClassName?: string
  variants: {
    container: any
    item: any
  }
  children: string
}

function TextEffect({ 
  per, 
  as: Component = 'div', 
  segmentWrapperClassName, 
  variants, 
  children 
}: TextEffectProps) {
  const segments = per === 'line' ? children.split('\n') : 
                   per === 'word' ? children.split(' ') : 
                   children.split('')

  return (
    <motion.div
      variants={variants.container}
      initial="hidden"
      animate="visible"
    >
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          className={segmentWrapperClassName}
          variants={variants.item}
        >
          {segment}
          {per === 'word' && index < segments.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.div>
  )
}

// Единые варианты анимации для всех элементов
const blurVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
      },
    },
  },
}

function AccordionBlurTextContent() {
  return (
    <div className="flex items-center justify-center py-[20%] px-4">
      <div className="w-full max-w-xl" style={{ maxWidth: 'calc(36rem * 0.8)', minWidth: 'calc(36rem * 0.8)' }}>
        <div className="bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-6 ring-1 ring-gray-300/30 dark:ring-gray-600/30 w-full">
          <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100" style={{ fontFamily: 'UberMove, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            Blurred Accordion
          </h3>
          <Accordion type="single" collapsible style={{ fontFamily: 'UberMove, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is blur text effect?</AccordionTrigger>
              <AccordionContent>
                <TextEffect
                  per='line'
                  segmentWrapperClassName='overflow-hidden block'
                  variants={blurVariants}
                >
                  {`A blur text effect creates smooth transitions from blurred to clear text.
It draws attention to content with elegant animations.
Perfect for modern user interfaces.`}
                </TextEffect>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>How does it work?</AccordionTrigger>
              <AccordionContent>
                <TextEffect
                  per='line'
                  segmentWrapperClassName='overflow-hidden block'
                  variants={blurVariants}
                >
                  {`It uses CSS filter blur property combined with Framer Motion animations.
Each text segment animates independently for a staggered effect.
The result is a beautiful, smooth transition that enhances user experience.`}
                </TextEffect>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Why use blur effects?</AccordionTrigger>
              <AccordionContent>
                <TextEffect
                  per='line'
                  segmentWrapperClassName='overflow-hidden block'
                  variants={blurVariants}
                >
                  {`Blur effects add sophistication and modern appeal to interfaces.
They create engaging user experiences with smooth animations.
Professional and visually appealing for any application.`}
                </TextEffect>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default function AccordionBlurText() {
  return <AccordionBlurTextContent />
}
