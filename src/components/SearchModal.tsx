'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from './SignatureCollection';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectProduct }: SearchModalProps) {
  const [query, setQuery] = useState('');

  const sampleProducts: Product[] = [
    {
      id: 'prod-1',
      category: 'slides',
      name: 'Luxury Thong Sandals',
      description: 'Luxury black leather thong sandals with a soft cushioned footbed.',
      price: '$185',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80',
      specs: ['Full-Grain Leather']
    },
    {
      id: 'prod-2',
      category: 'slides',
      name: 'Ruby Bloom Slides',
      description: 'Chic women slip-on sandals with a comfy footbed.',
      price: '$210',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      specs: ['Italian Suede']
    },
    {
      id: 'prod-3',
      category: 'slides',
      name: 'Herma Cut-Out Slides',
      description: 'Elegant brown leather slip-on sandals with a bold cut-out design.',
      price: '$195',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1560343776-97cf761a4102?auto=format&fit=crop&w=800&q=80',
      specs: ['Vegetable-Tanned Leather']
    },
    {
      id: 'prod-4',
      category: 'boots',
      name: 'Apex Pitch Pro Football Boots',
      description: 'Handcrafted kangaroo leather football boots engineered for precision.',
      price: '$320',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
      specs: ['K-Leather']
    }
  ];

  const results = query.trim() === ''
    ? sampleProducts
    : sampleProducts.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', inset: 0, zIndex: 170, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '100px', paddingLeft: '24px', paddingRight: '24px' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(24, 17, 11, 0.75)', backdropFilter: 'blur(10px)' }}
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '680px',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 10,
            border: '1px solid var(--border-light)'
          }}
        >
          {/* Search Input Header */}
          <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid var(--border-light)' }}>
            <Search size={22} color="var(--accent-saddle)" />
            <input 
              type="text"
              placeholder="Search handcrafted slides, football boots, or bespoke line..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              style={{
                flexGrow: 1,
                border: 'none',
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: 'var(--text-dark)'
              }}
            />
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
              <X size={22} />
            </button>
          </div>

          {/* Results List */}
          <div style={{ padding: '24px', maxHeight: '420px', overflowY: 'auto' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px', display: 'block' }}>
              {query ? `Search Results (${results.length})` : 'Popular Atelier Selections'}
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '12px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-parchment)',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-cream-alt)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-parchment)')}
                >
                  <img src={product.image} alt={product.name} style={{ width: '54px', height: '54px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                  <div style={{ flexGrow: 1 }}>
                    <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700 }}>{product.name}</h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{product.description}</p>
                  </div>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-saddle)' }}>
                    {product.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
