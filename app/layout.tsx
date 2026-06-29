import type {Metadata} from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Nexus | Premium SaaS Platform',
  description: 'A world-class SaaS company website featuring premium animations and glassmorphism.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-[#0B1120] text-white antialiased selection:bg-indigo-500/30 selection:text-indigo-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
