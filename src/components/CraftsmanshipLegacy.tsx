'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Scissors, Sparkles, Feather, ShieldCheck, Crown } from 'lucide-react';

export default function CraftsmanshipLegacy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !cardsRef.current) return;

    const cards = Array.from(cardsRef.current.children);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: <Scissors size={44} color="var(--accent-saddle)" />,
      title: "Material Selection",
      desc: "Only the finest full-grain leathers, kangaroo hides, and exotic materials are selected for our shoes, ensuring unmatched durability, flexibility, and premium quality."
    },
    {
      icon: <Sparkles size={44} color="var(--accent-saddle)" />,
      title: "Hand Lasting",
      desc: "Each shoe and boot is carefully stretched and formed over an anatomical last by hand to achieve the perfect foot shape, arch support, and customized athletic fit."
    },
    {
      icon: <Feather size={44} color="var(--accent-saddle)" />,
      title: "Finishing Touches",
      desc: "Master artisans apply the final details by hand, including edge polishing, protective waterproof coating, and burnishing to create a flawless, championship finish."
    }
  ];

  return (
    <section 
      id="craftsmanship"
      ref={sectionRef}
      style={{
        padding: '120px 24px',
        backgroundColor: 'var(--bg-cream-alt)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        {/* Title & Subtitle matching Screenshot 4 */}
        <span style={{
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--accent-saddle)',
          marginBottom: '12px',
          display: 'block'
        }}>
          HERITAGE & MASTERY
        </span>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          color: 'var(--text-dark)',
          marginBottom: '20px',
          letterSpacing: '0.04em',
          textTransform: 'uppercase'
        }}>
          OUR LEGACY
        </h2>

        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.15rem',
          color: 'var(--text-medium)',
          maxWidth: '780px',
          margin: '0 auto 64px',
          lineHeight: 1.6
        }}>
          Each pair of Masib shoes is meticulously handcrafted by master artisans using techniques passed down through generations. We combine traditional Nigerian leathercraft with contemporary athletic engineering to create footwear that is both timeless and modern.
        </p>

        {/* 3 Pillars Grid matching Screenshot 4 */}
        <div 
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            alignItems: 'stretch'
          }}
        >
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-lg)',
                padding: '44px 32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--accent-saddle)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                {pillar.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.65rem',
                fontWeight: 700,
                color: 'var(--text-dark)',
                marginBottom: '14px'
              }}>
                {pillar.title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                color: 'var(--text-medium)',
                lineHeight: 1.6
              }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
