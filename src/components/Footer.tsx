'use client';

import { motion } from 'framer-motion';
import { Crown, MessageCircle, ArrowRight, Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      id="contact"
      style={{
        backgroundColor: 'var(--bg-dark-espresso)',
        color: '#F9F6F0',
        padding: '80px 24px 40px',
        borderTop: '1px solid var(--border-gold)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* 4 Column Layout matching Screenshot 5 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '64px'
        }}>
          {/* Column 1: The Atelier & Social Circles */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-gold)'
              }}>
                <Crown size={20} />
              </div>
              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '0.04em'
              }}>
                The Atelier
              </h3>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.6 }}>
              Crafting bespoke luxury footwear and handmade football boots with authentic Nigerian heritage and Italian leather precision.
            </p>

            {/* Social Circles matching Screenshot 5 */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="#"
                aria-label="TikTok"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'background 0.3s ease'
                }}
              >
                <span style={{ fontWeight: 800, fontSize: '0.85rem' }}>𝞟</span>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'background 0.3s ease'
                }}
              >
                <Camera size={18} />
              </a>

              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  transition: 'background 0.3s ease'
                }}
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Collections matching Screenshot 5 */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--accent-gold)',
              marginBottom: '20px',
              borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
              paddingBottom: '8px',
              display: 'inline-block'
            }}>
              Collections
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#collection" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>The Heritage Line</a></li>
              <li><a href="#collection" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>Midnight Espresso</a></li>
              <li><a href="#collection" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>Artisanal Slides</a></li>
              <li><a href="#collection" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>Luxe Suede & Thong Sandals</a></li>
              <li><a href="#collection" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>Elite Pitch Football Boots</a></li>
            </ul>
          </div>

          {/* Column 3: Experience matching Screenshot 5 */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--accent-gold)',
              marginBottom: '20px',
              borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
              paddingBottom: '8px',
              display: 'inline-block'
            }}>
              Experience
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#craftsmanship" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>The Craft & Hand Lasting</a></li>
              <li><a href="#craftsmanship" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>Our Nigerian Story</a></li>
              <li><a href="#collection" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>Bespoke Orders & Custom Studs</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>Kano Store Locator</a></li>
            </ul>
          </div>

          {/* Column 4: Concierge matching Screenshot 5 */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--accent-gold)',
              marginBottom: '20px',
              borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
              paddingBottom: '8px',
              display: 'inline-block'
            }}>
              Concierge
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
              <li><a href="#contact" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>Size Advisor & Fit Guide</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>Leather Care Guide</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>Global Express Shipping Policy</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-light)', textDecoration: 'none', opacity: 0.8 }}>Contact Us Direct</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright matching Screenshot 5 */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '32px',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.85rem'
        }}>
          <p>© {new Date().getFullYear()} Masib Collection. Curating steps of elegance in Kano and beyond.</p>
        </div>
      </div>
    </footer>
  );
}
