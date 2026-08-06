'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Check, Shield, Truck, MessageCircle, ShoppingBag } from 'lucide-react';
import { Product } from './SignatureCollection';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState('EU 42');
  const sizes = ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'];

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Masib Atelier! I would like to inquire about ordering the ${product.name} (Size: ${selectedSize}) priced at ${product.price}.`
  );

  return (
    <AnimatePresence>
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}>
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(24, 17, 11, 0.75)',
            backdropFilter: 'blur(10px)'
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          style={{
            position: 'relative',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-lg)',
            maxWidth: '900px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            zIndex: 10,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            border: '1px solid var(--border-light)'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              zIndex: 20,
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(24, 17, 11, 0.08)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-dark)'
            }}
          >
            <X size={20} />
          </button>

          {/* Left Column: Image */}
          <div style={{
            position: 'relative',
            backgroundColor: '#F9F6F0',
            minHeight: '380px'
          }}>
            <img 
              src={product.image} 
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Right Column: Details */}
          <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent-saddle)',
              marginBottom: '8px'
            }}>
              ATELIER HANDMADE FOOTWEAR
            </span>

            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.25rem',
              fontWeight: 700,
              color: 'var(--text-dark)',
              marginBottom: '12px'
            }}>
              {product.name}
            </h3>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--accent-saddle)'
              }}>
                {product.price}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', fontWeight: 600 }}>
                <Star size={16} fill="var(--accent-amber)" color="var(--accent-amber)" />
                <span>{product.rating} (Verified Order)</span>
              </div>
            </div>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              color: 'var(--text-medium)',
              lineHeight: 1.6,
              marginBottom: '24px'
            }}>
              {product.description}
            </p>

            {/* Specifications */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
                Craftsmanship Specifications
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {product.specs.map((spec, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-medium)' }}>
                    <Check size={14} color="var(--accent-saddle)" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selector */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Select Size</h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-saddle)', fontWeight: 600, cursor: 'pointer' }}>Size Guide</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: selectedSize === size ? '2px solid var(--accent-saddle)' : '1px solid var(--border-light)',
                      backgroundColor: selectedSize === size ? 'var(--bg-cream-alt)' : '#FFFFFF',
                      color: selectedSize === size ? 'var(--accent-saddle)' : 'var(--text-dark)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto' }}>
              <button
                onClick={() => {
                  onAddToCart(product, selectedSize);
                  onClose();
                }}
                className="btn-saddle"
                style={{ width: '100%', padding: '16px' }}
              >
                <ShoppingBag size={18} /> ADD TO SHOPPING BAG
              </button>

              <a
                href={`https://wa.me/2348000000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1.5px solid var(--accent-emerald)',
                  color: 'var(--accent-emerald)',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <MessageCircle size={18} /> INQUIRE ON WHATSAPP
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
