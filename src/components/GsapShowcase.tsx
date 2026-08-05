'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Cpu, Code2, Compass } from 'lucide-react';

export default function GsapShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !cardsRef.current) return;

    const cards = Array.from(cardsRef.current.children);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      // Animate card scale, rotation, and slide sequence
      cards.forEach((card, index) => {
        if (index === 0) return;
        tl.fromTo(
          card,
          { opacity: 0, scale: 0.8, y: 100 },
          { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power2.out' },
          index * 0.8
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Cpu size={36} color="var(--accent-cyan)" />,
      title: "01. Ultra High Performance",
      desc: "Hardware accelerated transformations running directly on GPU layer for silk smooth 60fps frame rates.",
      tag: "GSAP Engine"
    },
    {
      icon: <Code2 size={36} color="var(--accent-blue)" />,
      title: "02. ScrollTrigger Scrubbing",
      desc: "Link animation timelines directly to user scroll position with elastic physics and momentum control.",
      tag: "Scroll Sync"
    },
    {
      icon: <ShieldCheck size={36} color="var(--accent-purple)" />,
      title: "03. Pinned Multi-Stage Scenes",
      desc: "Create immersive storytelling components with pinned viewports and sequential parallax reveals.",
      tag: "Viewport Pin"
    }
  ];

  return (
    <section 
      id="gsap-section" 
      ref={containerRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px 24px',
        background: 'linear-gradient(180deg, var(--bg-dark) 0%, #0d121d 50%, var(--bg-dark) 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Scroll Progress Bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'rgba(255, 255, 255, 0.05)',
        zIndex: 10
      }}>
        <div 
          ref={progressBarRef}
          style={{
            height: '100%',
            width: '0%',
            background: 'var(--gradient-primary)',
            transition: 'width 0.1s linear'
          }}
        />
      </div>

      <div style={{ maxWidth: '1000px', width: '100%', textAlign: 'center', marginBottom: '48px' }}>
        <span className="glass-pill" style={{ marginBottom: '16px' }}>
          <Compass size={14} color="var(--accent-amber)" /> GSAP ScrollTrigger Sequence
        </span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
          Scroll-Driven <span className="gradient-text">Interactive Timeline</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Keep scrolling down to witness GSAP ScrollTrigger pinning the section and scrubbing through feature cards sequentially.
        </p>
      </div>

      {/* Stacked Cards Container */}
      <div 
        ref={cardsRef}
        style={{
          position: 'relative',
          maxWidth: '850px',
          width: '100%',
          minHeight: '340px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {features.map((feat, idx) => (
          <div 
            key={idx}
            className="glass-panel"
            style={{
              position: idx === 0 ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              right: 0,
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: 'rgba(15, 20, 32, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
              zIndex: idx + 1
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>{feat.icon}</div>
              <span className="glass-pill" style={{ fontSize: '0.75rem', borderColor: 'var(--accent-blue)' }}>
                {feat.tag}
              </span>
            </div>
            <h3 style={{ fontSize: '1.75rem', color: '#fff' }}>{feat.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              {feat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
