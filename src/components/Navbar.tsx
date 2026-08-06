'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, ShoppingBag, Crown, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
  onOpenSearch?: () => void;
}

export default function Navbar({ cartCount = 2, onOpenCart, onOpenSearch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 90,
      backgroundColor: 'rgba(250, 247, 242, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-light)',
      transition: 'background 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo matching reference circular emblem style */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-dark-espresso)',
            border: '2px solid var(--accent-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-gold)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <Crown size={24} />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.45rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: 'var(--text-dark)',
              lineHeight: 1
            }}>
              MASIB <span style={{ color: 'var(--accent-saddle)' }}>FOOTWEAR</span>
            </span>
            <p style={{
              fontSize: '0.65rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginTop: '2px',
              fontWeight: 600
            }}>
              Artisanal Boots & Leather Atelier
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#hero" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}>HOME</a>
          <a href="#collection" style={{ textDecoration: 'none', color: 'var(--text-medium)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}>COLLECTION</a>
          <a href="#craftsmanship" style={{ textDecoration: 'none', color: 'var(--text-medium)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}>CRAFTMANSHIP</a>
          <a href="#testimonials" style={{ textDecoration: 'none', color: 'var(--text-medium)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}>REVIEWS</a>
          <a href="#contact" style={{ textDecoration: 'none', color: 'var(--text-medium)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'color 0.2s' }}>CONTACT</a>
        </nav>

        {/* Icon Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button 
            onClick={onOpenSearch}
            aria-label="Search" 
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-dark)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              transition: 'color 0.2s'
            }}
          >
            <Search size={20} />
          </button>

          <button 
            aria-label="Account" 
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-dark)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              transition: 'color 0.2s'
            }}
          >
            <User size={20} />
          </button>

          <button 
            onClick={onOpenCart}
            aria-label="Shopping Bag" 
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-dark)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              position: 'relative'
            }}
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '0',
                right: '0',
                backgroundColor: 'var(--accent-saddle)',
                color: '#FFFFFF',
                fontSize: '0.65rem',
                fontWeight: 700,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(140, 98, 57, 0.4)'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--text-dark)',
              cursor: 'pointer',
              padding: '6px'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: 'var(--bg-parchment)',
              borderTop: '1px solid var(--border-light)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 600 }}>HOME</a>
            <a href="#collection" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 600 }}>COLLECTION</a>
            <a href="#craftsmanship" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 600 }}>CRAFTMANSHIP</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 600 }}>REVIEWS</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: 600 }}>CONTACT</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
