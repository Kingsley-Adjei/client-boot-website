'use client';

import { Sparkles, ShieldCheck, Truck, Crown } from 'lucide-react';

export default function MarqueeBanner() {
  const items = [
    { icon: <Truck size={14} />, text: "FREE EXPRESS SHIPPING ON ORDERS OVER $200" },
    { icon: <Crown size={14} />, text: "HANDCRAFTED LUXURY FOOTBALL BOOTS & SLIDES" },
    { icon: <Sparkles size={14} />, text: "100% PREMIUM FULL-GRAIN LEATHER ATELIER" },
    { icon: <ShieldCheck size={14} />, text: "BESPOKE FIT & CRAFTSMANSHIP GUARANTEE" },
  ];

  return (
    <div style={{
      backgroundColor: 'var(--bg-dark-espresso)',
      color: 'var(--accent-gold)',
      padding: '10px 0',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-gold)',
      fontSize: '0.8rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      userSelect: 'none'
    }}>
      <div className="animate-marquee">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 32px', whiteSpace: 'nowrap' }}>
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
