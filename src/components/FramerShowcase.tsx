'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, MousePointerClick, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function FramerShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'spring',
      label: 'Spring Physics',
      title: 'Real-time Spring Dynamics',
      desc: 'Framer Motion spring physics provide natural momentum without artificial easing curves.',
      color: 'var(--accent-cyan)'
    },
    {
      id: 'layout',
      label: 'Shared Layout',
      title: 'Seamless Layout Animations',
      desc: 'Smoothly morph elements across DOM hierarchy changes using layoutId without manual measurements.',
      color: 'var(--accent-blue)'
    },
    {
      id: 'gestures',
      label: 'Gestures & Drag',
      title: 'Touch & Mouse Gestures',
      desc: 'Native support for hover, tap, drag constraints, and 3D tilt interactions.',
      color: 'var(--accent-purple)'
    }
  ];

  return (
    <section 
      id="framer-section"
      style={{
        padding: '120px 24px',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <span className="glass-pill" style={{ marginBottom: '16px' }}>
          <MousePointerClick size={14} color="var(--accent-cyan)" /> Framer Motion Interactive Demo
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
          Declarative <span className="gradient-text">Micro-Interactions</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Click through the tabs below to test Framer Motion's shared layout animations and state morphing.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginBottom: '40px',
        padding: '6px',
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '9999px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        maxWidth: '520px',
        margin: '0 auto 40px'
      }}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(idx)}
            style={{
              position: 'relative',
              padding: '12px 24px',
              border: 'none',
              background: 'transparent',
              color: activeTab === idx ? '#fff' : 'var(--text-secondary)',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              borderRadius: '9999px',
              zIndex: 1,
              transition: 'color 0.2s'
            }}
          >
            {activeTab === idx && (
              <motion.div
                layoutId="activeTabIndicator"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--gradient-primary)',
                  borderRadius: '9999px',
                  zIndex: -1,
                  boxShadow: '0 4px 15px rgba(0, 242, 254, 0.3)'
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Tab Content Card */}
      <div style={{ minHeight: '260px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel"
            style={{
              padding: '48px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center',
              background: 'rgba(18, 24, 38, 0.8)'
            }}
          >
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: tabs[activeTab].color,
                fontWeight: 600,
                fontSize: '0.9rem',
                marginBottom: '12px'
              }}>
                <CheckCircle2 size={18} /> Active Motion Engine
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '16px' }}>{tabs[activeTab].title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
                {tabs[activeTab].desc}
              </p>

              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
                onClick={() => setActiveTab((prev) => (prev + 1) % tabs.length)}
              >
                <RefreshCw size={16} /> Cycle Next State
              </motion.button>
            </div>

            {/* Interactive Motion Graphic Box */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '200px',
              position: 'relative'
            }}>
              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.1, 0.9, 1.1, 1],
                  borderRadius: ['20%', '50%', '30%', '50%', '20%']
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  width: '160px',
                  height: '160px',
                  background: 'var(--gradient-primary)',
                  boxShadow: '0 0 50px rgba(0, 242, 254, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Layers size={56} color="#fff" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
