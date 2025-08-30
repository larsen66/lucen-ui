import './globals.css';

import { data } from '#/app/_internal/_data';
import { GlobalNav } from '#/ui/global-nav';
import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: { default: 'LucenUI Components', template: '%s | LucenUI Components' },
  metadataBase: new URL('https://lucenui.vercel.app'),
  description:
    'Beautiful and modern UI components library featuring accordions, animations, and interactive elements.',
  openGraph: {
    title: 'LucenUI Components',
    description:
      'Beautiful and modern UI components library featuring accordions, animations, and interactive elements.',
    images: [`/api/og?title=LucenUI Components`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const demos = data.demos;
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`overflow-y-scroll bg-gray-950 font-sans ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-b-0 lg:border-gray-800">
          <GlobalNav items={demos} />
        </div>

        <div className="lg:pl-72">
          <div className="mx-auto mt-12 mb-24 max-w-4xl -space-y-[1px] lg:px-8 lg:py-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
