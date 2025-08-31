"use client";

import { Boundary } from '#/ui/boundary';
import { Prose } from '#/ui/prose';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '#/ui/demo-tabs';
import { Sparkles, Heart } from 'lucide-react';
import { CodeBlock } from '#/components/ui/code-block';

import AccordionBlurText from '#/components/accordions/AccordionBlurText';
import { AccordionBento } from '#/components/accordions/AccordionBento';
import AccordionBorder from '#/components/accordions/AccordionBorder';
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

      <Boundary
        label="Moving Border Accordion"
        animateRerendering={false}
        kind="solid"
      >
        <Prose>
          <h1>Moving Border Accordion</h1>
          <p>An advanced accordion component featuring synchronized animated borders that create a mesmerizing visual experience. When items expand, the main border animation pauses while individual item borders come to life with smooth pulsing effects.</p>
          <ul>
            <li><strong>Synchronized Animations:</strong> Main border pauses when items expand, creating focused attention</li>
            <li><strong>Pulsing Effects:</strong> Subtle breathing animation on expanded items</li>
            <li><strong>Unified Color Scheme:</strong> Consistent sky-blue palette across all animations</li>
            <li><strong>Optimized Transparency:</strong> 30% reduced opacity for comfortable viewing</li>
            <li><strong>Responsive Design:</strong> Adapts seamlessly to all screen sizes</li>
            <li><strong>Accessibility First:</strong> Full keyboard navigation and screen reader support</li>
            <li><strong>Performance Optimized:</strong> Smooth 60fps animations with hardware acceleration</li>
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
              <div className="relative min-h-[500px] rounded-lg overflow-hidden">
                <GridVignetteBackground className="absolute inset-0 z-0" />
                <div className="relative z-10 p-4">
                  <AccordionBorder />
                </div>
              </div>
            </TabPanel>
            <TabPanel tabIndex="1">
              <div className="relative min-h-[500px] rounded-lg overflow-hidden">
                <GridVignetteBackground className="absolute inset-0 z-0" />
                <div className="relative z-10">
                  <CodeBlock filePath="components/accordions/AccordionBorder.tsx" language="tsx" />
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
          <h2>Installation</h2>
          <pre><code>npm install framer-motion @radix-ui/react-accordion</code></pre>

          <h3>Basic Usage</h3>
          <pre><code>{`import AccordionBorder from './components/accordions/AccordionBorder';

export default function MyComponent() {
  return (
    <div className="p-8">
      <AccordionBorder />
    </div>
  );
}`}</code></pre>

          <h3>Advanced Configuration</h3>
          <ul>
            <li><strong>duration:</strong> Border animation speed in milliseconds (default: 3600)</li>
            <li><strong>animate:</strong> Control main border animation (default: true when no items expanded)</li>
            <li><strong>borderRadius:</strong> Container border radius (default: "1rem")</li>
            <li><strong>borderClassName:</strong> Additional CSS classes for border styling</li>
            <li><strong>className:</strong> Additional CSS classes for container</li>
          </ul>

          <h3>Animation Behavior</h3>
          <ul>
            <li><strong>Auto-pause:</strong> Main animation stops when any accordion item expands</li>
            <li><strong>Resume:</strong> Main animation restarts when all items collapse</li>
            <li><strong>Pulsing:</strong> 3-second breathing effect on expanded items</li>
            <li><strong>Synchronized:</strong> All border animations use identical timing</li>
          </ul>

          <h3>Customization Tips</h3>
          <p>The component is designed to work seamlessly with your existing design system. You can customize:</p>
          <ul>
            <li>Color scheme by modifying the <code>rgba(14, 165, 233, ...)</code> values</li>
            <li>Animation timing by adjusting duration values</li>
            <li>Transparency levels by modifying opacity values</li>
            <li>Border radius and sizing through CSS variables</li>
          </ul>

          <h3>Performance Notes</h3>
          <ul>
            <li>Uses hardware-accelerated CSS transforms</li>
            <li>Optimized for 60fps animations</li>
            <li>Minimal layout thrashing with proper z-indexing</li>
            <li>Accessible with proper ARIA attributes</li>
          </ul>
        </Prose>
      </Boundary>

    </div>
  );
}
