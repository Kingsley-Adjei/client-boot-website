'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Award } from 'lucide-react';

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section 
      id="hero"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        overflow: 'hidden',
        /* Rich warm leather imagery background overlay matching Screenshot 1 */
        backgroundImage: `linear-gradient(180deg, rgba(24, 17, 11, 0.45) 0%, rgba(140, 98, 57, 0.35) 50%, rgba(24, 17, 11, 0.65) 100%), url('https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=2000&q=85')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#FFFFFF'
      }}
    >
      {/* Background Soft Lighting Radial Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -20%)',
        width: '700px',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.25) 0%, rgba(140, 98, 57, 0.15) 50%, transparent 80%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '960px',
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
          {/* Atelier Badge */}
          <motion.div 
            variants={itemVariants}
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              padding: '8px 24px',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '32px',
              color: '#F4EFE6'
            }}
          >
            <Sparkles size={16} color="var(--accent-gold)" />
            <span>EST. 2025 • NIGERIAN HERITAGE & FOOTBALL BOOT ATELIER</span>
          </motion.div>

          {/* Headline matching screenshot 1 serif style */}
          <motion.h1 
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 6.5vw, 5.25rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              maxWidth: '900px',
              marginBottom: '24px',
              color: '#FFFFFF',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
            }}
          >
            ARTISAN <br />
            <span style={{ color: 'var(--accent-gold)' }}>CRAFTSMANSHIP</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: '#F4EFE6',
              maxWidth: '680px',
              marginBottom: '44px',
              fontWeight: 400,
              lineHeight: 1.6,
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            Handcrafted luxury footwear and elite football boots designed to stand the test of time on and off the pitch.
          </motion.p>

          {/* Primary Action Button */}
          <motion.div variants={itemVariants}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#collection" 
              className="btn-saddle"
              style={{
                padding: '18px 48px',
                fontSize: '1rem',
                backgroundColor: 'var(--accent-saddle)',
                borderColor: 'var(--accent-gold)',
                boxShadow: '0 8px 30px rgba(140, 98, 57, 0.5)'
              }}
            >
              EXPLORE COLLECTION <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div 
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: '64px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F4EFE6', fontSize: '0.875rem' }}>
              <ShieldCheck size={18} color="var(--accent-gold)" />
              <span>Full-Grain Italian Leather</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F4EFE6', fontSize: '0.875rem' }}>
              <Award size={18} color="var(--accent-gold)" />
              <span>Custom Molded Cleat Soles</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F4EFE6', fontSize: '0.875rem' }}>
              <Sparkles size={18} color="var(--accent-gold)" />
              <span>Bespoke Hand Stitching</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
