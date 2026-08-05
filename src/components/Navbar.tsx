'use client';

import { motion } from 'framer-motion';
import { Sparkles, Layers, Zap, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px 24px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <nav style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 24px',
        background: 'rgba(7, 9, 14, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '9999px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)'
          }}>
            <Sparkles size={20} />
          </div>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            fontWeight: 800,
            letterSpacing: '-0.03em'
          }}>
            KINETIC<span className="gradient-text">.JS</span>
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#hero" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Home</a>
          <a href="#gsap-section" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>GSAP Scroll</a>
          <a href="#framer-section" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }}>Framer Motion</a>
        </div>

        <motion.a 
          href="#gsap-section"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
          style={{ padding: '8px 20px', fontSize: '0.875rem', borderRadius: '9999px' }}
        >
          Explore Demo <ArrowRight size={14} />
        </motion.a>
      </nav>
    </motion.header>
  );
}
