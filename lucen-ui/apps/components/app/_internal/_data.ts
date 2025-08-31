// This is a mock database used to simplify parts of the app not
// relevant to the demo. In a real app, this data would live in
// a relational database like PostgreSQL or MySQL, accessed through
// a database client or ORM.

export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
};

export type Section = {
  id: string;
  name: string;
  slug: string;
  categories: string[];
};

export type Category = {
  id: string;
  name: string;
  section: string;
  slug: string;
  products: string[];
};

export type Demo = {
  slug: string;
  name: string;
  nav_title?: string;
  description: string;
};

export type DemoCategory = { name: string; items: Demo[] };

// Simplified data structure for LucenUI components
const sections: Section[] = [];
const categories: Category[] = [];
const products: Product[] = [];

const demos = [
  {
    name: "Navigation",
    items: [
      {
        slug: "accordion-blur",
        name: "Accordion Blur",
        description: "Accessible accordion showcasing subtle blur-to-clear text reveals with glassmorphism effects and smooth animations."
      }
    ]
  }
] as const satisfies DemoCategory[];

export type DemoSlug = string;

export const data = { sections, categories, products, demos };
