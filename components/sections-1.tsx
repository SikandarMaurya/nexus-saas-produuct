'use client';

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { useState, useRef, MouseEvent } from 'react';
import { ChevronRight, Play, Shield, Zap, BarChart3, Lock, Cloud, Workflow, CheckCircle2, X } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="gradient-mesh opacity-60" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-slate-300">Nexus 2.0 is now live</span>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8"
        >
          Ship software <br className="hidden md:block" />
          <span className="text-gradient">faster than ever.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The all-in-one platform for modern product teams. Manage workflows, 
          track analytics, and ship code at the speed of light.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-semibold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
            Start Free Trial
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto glass-button px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center gap-2">
            <Play className="w-4 h-4" />
            Watch Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-[2rem] blur-2xl opacity-20" />
          <div className="relative rounded-[2rem] glass-card overflow-hidden border border-white/10 shadow-2xl">
            <div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
            </div>
            <div className="aspect-[16/9] relative bg-[#060913] w-full">
              <Image 
                src="https://picsum.photos/seed/dashboard/1920/1080"
                alt="Platform Dashboard"
                fill
                className="object-cover opacity-80 mix-blend-lighten"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, idx, isExpanded, onToggle }: { feature: typeof features[0], idx: number, isExpanded: boolean, onToggle: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  // Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Magnetic button effect
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const magneticX = useSpring(btnX, springConfig);
  const magneticY = useSpring(btnY, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    mouseX.set(x);
    mouseY.set(y);

    if (buttonRef.current) {
      const btnRect = buttonRef.current.getBoundingClientRect();
      const btnCenterX = btnRect.left + btnRect.width / 2 - left;
      const btnCenterY = btnRect.top + btnRect.height / 2 - top;
      
      const distanceX = x - btnCenterX;
      const distanceY = y - btnCenterY;
      
      // Magnetic radius
      if (Math.abs(distanceX) < 60 && Math.abs(distanceY) < 60) {
        btnX.set(distanceX * 0.3);
        btnY.set(distanceY * 0.3);
      } else {
        btnX.set(0);
        btnY.set(0);
      }
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    btnX.set(0);
    btnY.set(0);
  };

  const spotlightBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`
  );

  return (
    <motion.div
      layout
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{ 
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 },
        layout: { duration: 0.4, type: "spring", bounce: 0.2 }
      }}
      className={`glass-card p-8 rounded-2xl transition-colors group cursor-pointer relative overflow-hidden ${
        isExpanded ? 'col-span-1 md:col-span-2 lg:col-span-3 bg-white/[0.08]' : 'hover:bg-white/[0.04]'
      }`}
      onClick={onToggle}
    >
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: spotlightBackground as any }}
      />
      
      <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
              <feature.icon className="w-6 h-6 text-slate-300 group-hover:text-primary" />
            </div>
            {isExpanded && (
              <button 
                onClick={(e) => { e.stopPropagation(); onToggle(); }}
                className="w-8 h-8 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <motion.h4 layout="position" className="text-xl font-display font-semibold text-white mb-3">
            {feature.title}
          </motion.h4>
          <motion.p layout="position" className="text-slate-400 text-sm leading-relaxed mb-6">
            {feature.description}
          </motion.p>
          
          {!isExpanded && (
            <motion.div 
              ref={buttonRef}
              style={{ x: magneticX, y: magneticY }}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
            >
              Learn more <ChevronRight className="w-4 h-4" />
            </motion.div>
          )}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex-1 pt-6 md:pt-0 md:pl-6 md:border-l border-white/10 w-full"
            >
              <h5 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Technical Specs</h5>
              <ul className="space-y-3">
                {feature.specs.map((spec, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {spec}
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8">
                <button className="glass-button px-5 py-2.5 rounded-lg text-sm font-semibold text-white w-full sm:w-auto hover:bg-white/10">
                  View Documentation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

const features = [
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade encryption and SOC2 compliance built right into the core platform.', specs: ['AES-256 Encryption at Rest', 'TLS 1.3 for Data in Transit', 'Automated Penetration Testing', 'Role-Based Access Control (RBAC)'] },
  { icon: Zap, title: 'Lightning Fast', description: 'Global edge network ensures sub-50ms latency for all your international users.', specs: ['250+ Edge Locations globally', 'Smart Routing algorithms', 'Intelligent Caching layers', 'HTTP/3 Support'] },
  { icon: BarChart3, title: 'Advanced Analytics', description: 'Real-time metrics and AI-driven insights to help you understand user behavior.', specs: ['Real-time streaming data', 'Custom Dashboard creation', 'Predictive AI Models', 'Data Export API'] },
  { icon: Lock, title: 'Access Control', description: 'Granular RBAC and custom permission sets for your entire organization.', specs: ['SAML & SSO Integration', 'Multi-Factor Authentication', 'Audit Logging', 'Session Management'] },
  { icon: Cloud, title: 'Auto-Scaling', description: 'Infrastructure that scales automatically from 0 to millions of concurrent users.', specs: ['Zero-downtime scaling', 'Serverless execution', 'Automated load balancing', 'Global failover capability'] },
  { icon: Workflow, title: 'Custom Workflows', description: 'Build complex automation pipelines with our visual drag-and-drop editor.', specs: ['Visual Flow Builder', '100+ Native Integrations', 'Custom Webhooks', 'Scheduled Cron Jobs'] },
];

export function Features() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wide text-accent uppercase mb-3"
          >
            Powerful Features
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Everything you need to <span className="text-slate-400">scale</span>
          </motion.h3>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard 
              key={feature.title} 
              feature={feature} 
              idx={idx} 
              isExpanded={expandedId === feature.title}
              onToggle={() => setExpandedId(expandedId === feature.title ? null : feature.title)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function TrustLogos() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">
          Trusted by innovative teams worldwide
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          {/* Using text logos for placeholder since we need to stick to SVGs or Text */}
          {['ACME Corp', 'Quantum', 'Echo', 'Horizon', 'Vanguard'].map((name) => (
            <div key={name} className="font-display font-bold text-2xl tracking-tighter text-white">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
