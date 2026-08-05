'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowUp, Github, Twitter, Layers } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      background: '#040609',
      padding: '64px 24px 32px',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--gradient-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                <Sparkles size={18} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800 }}>
                KINETIC<span className="gradient-text">.JS</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px' }}>
              Next.js + TypeScript starter configured with GSAP ScrollTrigger, Framer Motion, and Lenis smooth scrolling.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <motion.button 
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="glass-panel"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
              title="Scroll to Top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '24px',
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <p>© {new Date().getFullYear()} Kinetic Web Engine. Built for Next.js & Modern Web Animations.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Next.js 14+</span>
            <span>TypeScript</span>
            <span>GSAP 3</span>
            <span>Framer Motion</span>
            <span>Lenis</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
