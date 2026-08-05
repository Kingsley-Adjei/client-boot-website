import type { Metadata } from 'next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Next.js Animation Suite | GSAP, Framer Motion & Lenis',
  description: 'A high-performance Next.js App Router project powered by TypeScript, GSAP ScrollTrigger, Framer Motion, and Lenis smooth momentum scroll.',
  keywords: ['Next.js', 'TypeScript', 'GSAP', 'ScrollTrigger', 'Framer Motion', 'Lenis', 'Web Animations'],
  authors: [{ name: 'Antigravity AI' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
