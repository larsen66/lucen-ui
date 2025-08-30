"use client";

import { Boundary } from '#/ui/boundary';
import { Prose } from '#/ui/prose';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '#/ui/demo-tabs';
import { Sparkles, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import AccordionBlurText from '#/components/accordions/AccordionBlurText';
import { GridVignetteBackground } from '#/components/background/grid-vignette-background';

// Компонент для блока кода с подсветкой синтаксиса и кнопкой копирования
function CodeBlock({ code, language = 'tsx' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group">
      <div className="absolute top-3 right-3 z-10">
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center w-8 h-8 rounded-md bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white transition-all duration-200"
          title={copied ? "Скопировано!" : "Копировать код"}
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: '0.5rem',
          fontSize: '14px',
          fontFamily: 'Fira Code, Monaco, Consolas, monospace',
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        codeTagProps={{
          style: {
            fontFamily: 'Fira Code, Monaco, Consolas, monospace',
            background: 'transparent'
          }
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default function Page() {
  const codeString = `"use client"

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
  const segments = per === 'line' ? children.split('\\n') : 
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

// Animation variants for blur effect
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

export default function AccordionBlurText() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">Blurred Accordion</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is blur text effect?</AccordionTrigger>
              <AccordionContent>
                <TextEffect
                  per='line'
                  segmentWrapperClassName='overflow-hidden block'
                  variants={blurVariants}
                >
                  {\`A blur text effect creates smooth transitions from blurred to clear text.
It draws attention to content with elegant animations.
Perfect for modern user interfaces.\`}
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
                  {\`It uses CSS filter blur property combined with Framer Motion animations.
Each text segment animates independently for a staggered effect.
The result is a beautiful, smooth transition that enhances user experience.\`}
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
                  {\`Blur effects add sophistication and modern appeal to interfaces.
They create engaging user experiences with smooth animations.
Professional and visually appealing for any application.\`}
                </TextEffect>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}`;

  return (
    <div className="space-y-9">
      <Boundary
        label="Blur Text Accordion"
        animateRerendering={false}
        kind="solid"
      >
        <Prose>
          <h1>Blur Text Accordion</h1>
          <p>Accessible accordion showcasing subtle blur-to-clear text reveals.</p>
          <ul>
            <li>Animated text transitions</li>
            <li>Glassmorphism surface</li>
            <li>Keyboard and screen reader friendly</li>
          </ul>
        </Prose>
      </Boundary>

      <Boundary
        label="Interactive Demo"
        animateRerendering={false}
        kind="solid"
      >
        <TabGroup defaultValue="0">
          <div className="flex items-center justify-between mb-4">
            <TabList>
              <Tab tabIndex="0">Preview</Tab>
              <Tab tabIndex="1">Code</Tab>
            </TabList>
          </div>
                                     <TabPanels>
              <TabPanel tabIndex="0">
                <div className="relative min-h-[300px] rounded-lg overflow-hidden">
                  <GridVignetteBackground className="absolute inset-0 z-0" />
                  <div className="relative z-10">
                    <AccordionBlurText />
                  </div>
                </div>
              </TabPanel>
            <TabPanel tabIndex="1">
              <div className="relative min-h-[300px] rounded-lg overflow-hidden">
                <GridVignetteBackground className="absolute inset-0 z-0" />
                <div className="relative z-10">
                  <CodeBlock code={codeString} language="tsx" />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Boundary>

      <Boundary
        label="Usage"
        animateRerendering={false}
        kind="solid"
      >
        <Prose>
          <h2>Usage</h2>
          <pre><code>npm install framer-motion @radix-ui/react-accordion</code></pre>
          <ul>
            <li><code>per</code>: 'line' | 'word' | 'char'</li>
            <li><code>variants</code>: Framer Motion variants</li>
            <li><code>segmentWrapperClassName</code>: wrapper classes</li>
          </ul>
          <p>Adjust timing and blur intensity as needed.</p>
        </Prose>
      </Boundary>

      <Boundary
        label="Credits"
        animateRerendering={false}
        kind="solid"
      >
        <Prose>
          <p style={{ fontFamily: 'Orbitron, "Space Grotesk", "Exo 2", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }} className="flex items-center gap-2">
            Built using components from shadcn, davidhdev & ibelick. Thanks! 
            <Sparkles className="w-4 h-4 text-white" />
          </p>
        </Prose>
      </Boundary>
    </div>
  );
}
