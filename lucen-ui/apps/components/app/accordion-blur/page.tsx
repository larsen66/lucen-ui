"use client";

import { Boundary } from '#/ui/boundary';
import { Prose } from '#/ui/prose';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '#/ui/demo-tabs';
import { Sparkles, Heart } from 'lucide-react';
import { CodeBlock } from '#/components/ui/code-block';

import AccordionBlurText from '#/components/accordions/AccordionBlurText';
import { AccordionBento } from '#/components/accordions/AccordionBento';
import { GridVignetteBackground } from '#/components/background/grid-vignette-background';


export default function Page() {
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
                  <CodeBlock filePath="components/accordions/AccordionBlurText.tsx" language="tsx" />
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

      <Boundary
        label="Bento Accordion"
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
              <div className="relative min-h-[600px] rounded-lg overflow-hidden">
                <GridVignetteBackground className="absolute inset-0 z-0" />
                <div className="relative z-10 p-4">
                  <AccordionBento />
                </div>
              </div>
            </TabPanel>
            <TabPanel tabIndex="1">
              <div className="relative min-h-[600px] rounded-lg overflow-hidden">
                <GridVignetteBackground className="absolute inset-0 z-0" />
                <div className="relative z-10">
                  <CodeBlock filePath="components/accordions/AccordionBento.tsx" language="tsx" />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Boundary>

      <Boundary
        label=" Credits"
        animateRerendering={false}
        kind="solid"
      >
        <Prose>
          <p style={{ fontFamily: 'Orbitron, "Space Grotesk", "Exo 2", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }} className="flex items-center gap-2">
            Built with components from shadcn, 21st.dev & meschacirung. Thanks!
            
            <Heart className="w-4 h-4 text-white" />
          </p>
        </Prose>
      </Boundary>
    </div>
  );
}
