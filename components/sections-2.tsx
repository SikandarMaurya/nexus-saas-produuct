'use client';

import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HowItWorks() {
  const steps = [
    { num: '01', title: 'Create Account', desc: 'Sign up in seconds and get instant access to your workspace.' },
    { num: '02', title: 'Connect Data', desc: 'Securely sync your tools with our native integrations.' },
    { num: '03', title: 'Grow Business', desc: 'Watch your metrics improve with actionable AI insights.' },
  ];

  return (
    <section id="solutions" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight"
            >
              Built for teams who <br />
              <span className="text-gradient">move fast.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg mb-12"
            >
              We&apos;ve engineered a platform that eliminates friction, letting you focus on what really matters—building great products.
            </motion.p>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (idx * 0.1) }}
                  className="flex gap-4 relative"
                >
                  {idx !== steps.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-[-2rem] w-px bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                  <div className="w-12 h-12 rounded-full glass border border-primary/30 flex items-center justify-center text-primary font-display font-bold shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl rounded-full" />
            <div className="glass-card rounded-2xl border border-white/10 p-2 relative overflow-hidden">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-[#060913]">
                <Image 
                  src="https://picsum.photos/seed/workflow/800/600"
                  alt="Workflow"
                  fill
                  className="object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  const stats = [
    { label: 'Active Users', value: '500K+' },
    { label: 'Uptime', value: '99.99%' },
    { label: 'Countries', value: '150+' },
    { label: 'Support', value: '24/7' },
  ];

  return (
    <section className="py-20 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      desc: 'Perfect for small teams and startups.',
      features: ['Up to 5 team members', 'Basic analytics', '24-hour support response time', 'API access'],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$99',
      desc: 'Advanced tools for growing companies.',
      features: ['Up to 20 team members', 'Advanced custom analytics', '1-hour support response time', 'Custom integrations', 'Team roles & permissions'],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'For large-scale organizations.',
      features: ['Unlimited team members', 'Dedicated account manager', '24/7 phone support', 'Custom contract & invoicing', 'On-premise deployment options'],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Simple, transparent pricing
          </motion.h2>
          <p className="text-slate-400 text-lg">No hidden fees. No surprise charges. Just pay for what you use.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl transition-transform hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-primary/20 to-primary/5 border border-primary/30 shadow-2xl shadow-primary/20' 
                  : 'glass-card'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-display font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-5xl font-display font-bold text-white">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-400">/mo</span>}
              </div>
              <button className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${
                plan.highlighted ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white/10 text-white hover:bg-white/20'
              }`}>
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
