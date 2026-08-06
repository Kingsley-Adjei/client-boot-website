'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ShoppingBag, Star, Sparkles, Trophy } from 'lucide-react';

export interface Product {
  id: string;
  category: 'slides' | 'boots' | 'bespoke';
  name: string;
  description: string;
  price: string;
  rating: number;
  image: string;
  tag?: string;
  specs: string[];
}

interface SignatureCollectionProps {
  onSelectProduct?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

export default function SignatureCollection({ onSelectProduct, onAddToCart }: SignatureCollectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'slides' | 'boots' | 'bespoke'>('all');

  const products: Product[] = [
    {
      id: 'prod-1',
      category: 'slides',
      name: 'Luxury Thong Sandals',
      description: 'Luxury black leather thong sandals with a soft cushioned footbed and gold hardware accent.',
      price: '$185',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80',
      tag: 'BESTSELLER',
      specs: ['Full-Grain Calfskin Leather', 'Cushioned Ergonomic Sole', 'Hand-Polished Brass Buckle']
    },
    {
      id: 'prod-2',
      category: 'slides',
      name: 'Ruby Bloom Slides',
      description: 'Chic crimson suede slip-on sandals with an iconic handcrafted bow accent and anatomical cork footbed.',
      price: '$210',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      tag: 'NEW ATELIER',
      specs: ['Italian Velvet Suede', 'Contoured Cork Footbed', 'Non-Slip Rubber Outsole']
    },
    {
      id: 'prod-3',
      category: 'slides',
      name: 'Herma Cut-Out Slides',
      description: 'Elegant brown leather slip-on sandals with a bold architectural cut-out design and burnished finish.',
      price: '$195',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1560343776-97cf761a4102?auto=format&fit=crop&w=800&q=80',
      tag: 'FEATURED',
      specs: ['Vegetable-Tanned Leather', 'Hand-Stitched Welt', 'Ultra-Soft Insole']
    },
    {
      id: 'prod-4',
      category: 'boots',
      name: 'Apex Pitch Pro Football Boots',
      description: 'Handcrafted premium kangaroo leather football boots engineered for surgical touch, traction, and control.',
      price: '$320',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
      tag: 'MATCH PRO',
      specs: ['K-Leather Forefoot', 'Molded Carbon Fiber Plate', 'Conical FG Stud Layout']
    },
    {
      id: 'prod-5',
      category: 'bespoke',
      name: 'Midnight Espresso Loafers',
      description: 'Hand-lasted dark espresso calfskin loafers with subtle woven detailing for formal sophistication.',
      price: '$290',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
      tag: 'BESPOKE',
      specs: ['Midnight Espresso Dye', 'Blake Welt Construction', 'Memory Foam Insole']
    },
    {
      id: 'prod-6',
      category: 'boots',
      name: 'Vanguard Gold Stud Football Boots',
      description: 'Bespoke leather boots customized with gold-tone FG studs and reinforced heel counter for explosive acceleration.',
      price: '$360',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?auto=format&fit=crop&w=800&q=80',
      tag: 'LIMITED EDITION',
      specs: ['Gold Electroplated Studs', 'Anatomical Heel Lock', 'Ultra-Lightweight Upper']
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  return (
    <section 
      id="collection"
      style={{
        padding: '100px 24px',
        backgroundColor: 'var(--bg-parchment)',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header matching Screenshot 2 */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 700,
            color: 'var(--text-dark)',
            marginBottom: '16px',
            lineHeight: 1.1
          }}>
            Signature Collection
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.1rem',
            color: 'var(--text-medium)',
            maxWidth: '640px',
            margin: '0 auto 36px',
            fontWeight: 400
          }}>
            Discover our curated selection of timeless handmade shoes and elite football boots that blend elegance, durability, and comfort.
          </p>

          {/* Category Filter Tabs */}
          <div style={{
            display: 'inline-flex',
            gap: '8px',
            padding: '6px',
            backgroundColor: 'var(--bg-cream-alt)',
            borderRadius: '9999px',
            border: '1px solid var(--border-light)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {[
              { id: 'all', label: 'All Footwear' },
              { id: 'slides', label: 'Luxury Slides & Sandals' },
              { id: 'boots', label: 'Elite Football Boots' },
              { id: 'bespoke', label: 'Bespoke Atelier' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '9999px',
                  border: 'none',
                  backgroundColor: activeTab === tab.id ? 'var(--accent-saddle)' : 'transparent',
                  color: activeTab === tab.id ? '#FFFFFF' : 'var(--text-medium)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === tab.id ? '0 4px 14px rgba(140, 98, 57, 0.3)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid matching Screenshot 2 3-column layout */}
        <motion.div 
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '36px'
          }}
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-light)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'transform 0.3s ease, boxShadow 0.3s ease'
                }}
              >
                {/* Product Image Container */}
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/3',
                  overflow: 'hidden',
                  backgroundColor: '#F9F6F0'
                }}>
                  {product.tag && (
                    <span style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      zIndex: 2,
                      backgroundColor: 'rgba(24, 17, 11, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--accent-gold)',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em'
                    }}>
                      {product.tag}
                    </span>
                  )}

                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: '#FFFFFF',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <Star size={14} fill="var(--accent-amber)" color="var(--accent-amber)" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                {/* Product Card Body matching Screenshot 2 */}
                <div style={{
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  textAlign: 'center',
                  alignItems: 'center'
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.65rem',
                    fontWeight: 700,
                    color: 'var(--text-dark)',
                    marginBottom: '10px'
                  }}>
                    {product.name}
                  </h3>

                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.925rem',
                    color: 'var(--text-medium)',
                    lineHeight: 1.5,
                    marginBottom: '20px',
                    minHeight: '42px'
                  }}>
                    {product.description}
                  </p>

                  <div style={{
                    fontSize: '1.35rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    color: 'var(--accent-saddle)',
                    marginBottom: '24px'
                  }}>
                    {product.price}
                  </div>

                  {/* Rounded saddle button matching Screenshot 2 */}
                  <div style={{ width: '100%', display: 'flex', gap: '12px' }}>
                    <button 
                      onClick={() => onSelectProduct?.(product)}
                      style={{
                        flexGrow: 1,
                        padding: '14px 20px',
                        backgroundColor: 'var(--accent-saddle)',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: 'var(--radius-pill)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'background 0.3s ease, transform 0.2s ease',
                        boxShadow: '0 4px 12px rgba(140, 98, 57, 0.25)'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-saddle-dark)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-saddle)')}
                    >
                      VIEW DETAILS
                    </button>

                    <button 
                      onClick={() => onAddToCart?.(product)}
                      aria-label="Add to cart"
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-cream-alt)',
                        border: '1px solid var(--border-light)',
                        color: 'var(--text-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--accent-saddle)';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--bg-cream-alt)';
                        e.currentTarget.style.color = 'var(--text-dark)';
                      }}
                    >
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
