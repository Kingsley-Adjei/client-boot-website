'use client';

import { motion } from 'framer-motion';
import { Sparkles, Layers, Zap, ArrowUpRight, PlayCircle } from 'lucide-react';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section 
      id="hero" 
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '140px 24px 80px',
        background: 'radial-gradient(ellipse at 50% 30%, rgba(0, 242, 254, 0.08) 0%, rgba(127, 0, 255, 0.03) 50%, transparent 80%)'
      }}
    >
      <div style={{
        maxWidth: '1100px',
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Top Pill Badge */}
          <motion.div variants={itemVariants} className="glass-pill" style={{ marginBottom: '24px' }}>
            <Sparkles size={16} color="var(--accent-cyan)" />
            <span>Next.js 14+ & High Performance Motion Pipeline</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
              fontWeight: 800,
              maxWidth: '900px',
              marginBottom: '24px',
              lineHeight: 1.08,
            }}
          >
            Craft Stunning Web Experiences with <span className="gradient-text">GSAP & Framer Motion</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              marginBottom: '40px',
              fontWeight: 400
            }}
          >
            Pre-configured Next.js template integrated with TypeScript, GSAP ScrollTrigger, Lenis momentum smooth scrolling, and Framer Motion layout physics.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '64px' }}
          >
            <motion.a 
              whileHover={{ scale: 1.04 }} 
              whileTap={{ scale: 0.96 }} 
              href="#gsap-section" 
              className="btn-primary"
            >
              <Zap size={18} /> Test GSAP Animations
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.04 }} 
              whileTap={{ scale: 0.96 }} 
              href="#framer-section" 
              className="btn-secondary"
            >
              <PlayCircle size={18} /> View Framer Cards
            </motion.a>
          </motion.div>

          {/* Key Tech Cards */}
          <motion.div 
            variants={itemVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              width: '100%',
              marginTop: '20px'
            }}
          >
            <motion.div 
              whileHover={{ y: -8, borderColor: 'var(--accent-cyan)' }}
              className="glass-panel" 
              style={{ padding: '32px 24px', textAlign: 'left' }}
            >
              <div style={{ color: 'var(--accent-cyan)', marginBottom: '16px' }}><Zap size={32} /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>GSAP 3 & ScrollTrigger</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Full timeline control, complex SVG morphing, and pinned scroll sequences optimized for 60FPS.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, borderColor: 'var(--accent-blue)' }}
              className="glass-panel" 
              style={{ padding: '32px 24px', textAlign: 'left' }}
            >
              <div style={{ color: 'var(--accent-blue)', marginBottom: '16px' }}><Layers size={32} /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Framer Motion</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Spring physics, declarative gesture controls, shared layout transitions, and exit animations.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8, borderColor: 'var(--accent-purple)' }}
              className="glass-panel" 
              style={{ padding: '32px 24px', textAlign: 'left' }}
            >
              <div style={{ color: 'var(--accent-purple)', marginBottom: '16px' }}><Sparkles size={32} /></div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Lenis Smooth Scroll</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Inertia momentum scrolling synchronized directly with GSAP ticker loop without main thread lag.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
