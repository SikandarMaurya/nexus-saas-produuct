import { Navbar, Footer } from '@/components/layout';
import { Hero, Features, TrustLogos } from '@/components/sections-1';
import { HowItWorks, Stats, Pricing } from '@/components/sections-2';
import { Testimonials, FAQ, CTA } from '@/components/sections-3';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <Hero />
      <TrustLogos />
      <Features />
      <HowItWorks />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
