'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Star } from 'lucide-react';
import Image from 'next/image';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Nexus has completely transformed how our engineering team operates. We've cut our deployment times by 70% and haven't looked back.",
      author: "Sarah Chen",
      role: "CTO at TechFlow",
      image: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      quote: "The cleanest UI I've ever used. It feels like a product built by designers, for developers. Absolutely unmatched in the space.",
      author: "Marcus Rhodes",
      role: "Lead Architect, Vanguard",
      image: "https://picsum.photos/seed/marcus/100/100"
    },
    {
      quote: "We switched from a competitor 6 months ago and the difference in performance and reliability is night and day.",
      author: "Elena Rodriguez",
      role: "VP Engineering, Quantum",
      image: "https://picsum.photos/seed/elena/100/100"
    }
  ];

  return (
    <section id="customers" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Loved by top teams</h2>
          <p className="text-slate-400 text-lg">Don&apos;t just take our word for it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 flex-grow">&quot;{t.quote}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src={t.image} alt={t.author} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{t.author}</h4>
                  <p className="text-slate-400 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: 'How does the free trial work?', a: 'You get full access to all Pro features for 14 days. No credit card required. At the end of the trial, you can choose a plan or automatically downgrade to the free tier.' },
    { q: 'Can I change my plan later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time. Prorated charges or credits will be applied automatically.' },
    { q: 'What kind of support do you offer?', a: 'All plans include email support. Pro plans get priority response within 1 hour, and Enterprise plans include a dedicated account manager and 24/7 phone support.' },
    { q: 'Is my data secure?', a: 'Yes. We use bank-grade AES-256 encryption at rest and TLS 1.3 in transit. We are fully SOC2 Type II compliant and undergo regular third-party security audits.' },
  ];

  return (
    <section className="py-24 max-w-3xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.q} answer={faq.a} idx={idx} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer, idx }: { question: string, answer: string, idx: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="glass rounded-xl overflow-hidden"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-medium text-white">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-6"
        >
          Ready to build the future?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-300 mb-10"
        >
          Join thousands of modern teams building next-generation software on Nexus.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg hover:scale-105 transition-transform">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto glass-button px-8 py-4 rounded-full text-white font-semibold text-lg">
            Talk to Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
}
