'use client';

import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle2 } from 'lucide-react';

export default function VoicesOfExcellence() {
  const testimonials = [
    {
      quote: "The comfort level of these slides is unmatched. I've never had handmade shoes fit so perfectly from day one.",
      author: "Fatima S.",
      location: "Lagos, Nigeria",
      role: "Verified Atelier Buyer"
    },
    {
      quote: "A true blend of Nigerian heritage and modern luxury. The attention to detail in the leatherwork and football boot studs is stunning.",
      author: "Ibrahim K.",
      location: "Kano, Nigeria",
      role: "Professional Athlete"
    },
    {
      quote: "Fast delivery and exceptional customer service. Masib Collection is now my go-to for artisanal footwear and custom pitch boots.",
      author: "Chidi O.",
      location: "Abuja, Nigeria",
      role: "Luxury Collector"
    }
  ];

  return (
    <section 
      id="testimonials"
      style={{
        padding: '110px 24px',
        backgroundColor: 'var(--bg-parchment)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        {/* Title matching Screenshot 3 */}
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
          fontWeight: 700,
          color: 'var(--text-dark)',
          marginBottom: '56px',
          letterSpacing: '0.02em'
        }}>
          Voices of Excellence
        </h2>

        {/* Testimonials 3 Card Layout matching Screenshot 3 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center',
                alignItems: 'center',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
                position: 'relative'
              }}
            >
              <div style={{
                color: 'var(--accent-saddle)',
                marginBottom: '16px',
                opacity: 0.8
              }}>
                <Quote size={32} />
              </div>

              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--accent-amber)" color="var(--accent-amber)" />
                ))}
              </div>

              {/* Quote text matching screenshot 3 italic style */}
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: 'var(--text-dark)',
                lineHeight: 1.5,
                marginBottom: '32px'
              }}>
                "{item.quote}"
              </p>

              {/* Author name matching screenshot 3 */}
              <div>
                <h4 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--accent-saddle)',
                  marginBottom: '4px'
                }}>
                  — {item.author}
                </h4>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  justifyContent: 'center'
                }}>
                  <CheckCircle2 size={12} color="var(--accent-emerald)" /> {item.role} • {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
