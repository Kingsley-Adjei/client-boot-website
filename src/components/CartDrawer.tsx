'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product } from './SignatureCollection';

interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (id: string, size: string) => void;
}

export default function CartDrawer({ isOpen, onClose, items, onRemoveItem }: CartDrawerProps) {
  const subtotal = items.reduce((acc, item) => {
    const numPrice = parseFloat(item.price.replace('$', '')) || 0;
    return acc + numPrice * item.quantity;
  }, 0);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', inset: 0, zIndex: 160 }}>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(24, 17, 11, 0.65)',
            backdropFilter: 'blur(8px)'
          }}
        />

        {/* Drawer Window */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '460px',
            backgroundColor: '#FFFFFF',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 10
          }}
        >
          {/* Drawer Header */}
          <div style={{
            padding: '24px',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bg-parchment)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShoppingBag size={22} color="var(--accent-saddle)" />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 700 }}>
                Shopping Bag ({items.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dark)' }}
            >
              <X size={22} />
            </button>
          </div>

          {/* Cart Items List */}
          <div style={{ padding: '24px', flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {items.length === 0 ? (
              <div style={{ textAlign: 'center', margin: 'auto 0', color: 'var(--text-muted)' }}>
                <ShoppingBag size={48} style={{ opacity: 0.3, marginBottom: '12px' }} />
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--text-dark)', marginBottom: '6px' }}>Your shopping bag is empty</p>
                <p style={{ fontSize: '0.875rem' }}>Explore our Signature Collection to select artisanal footwear.</p>
              </div>
            ) : (
              items.map((item, idx) => (
                <div 
                  key={`${item.id}-${item.selectedSize}-${idx}`}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '16px',
                    backgroundColor: 'var(--bg-parchment)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    alignItems: 'center'
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
                  />
                  <div style={{ flexGrow: 1 }}>
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700 }}>{item.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Size: {item.selectedSize}</p>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-saddle)', marginTop: '4px' }}>
                      {item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id, item.selectedSize)}
                    aria-label="Remove item"
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '6px' }}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer / Checkout */}
          {items.length > 0 && (
            <div style={{
              padding: '24px',
              borderTop: '1px solid var(--border-light)',
              backgroundColor: 'var(--bg-parchment)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '1.1rem' }}>
                <span style={{ fontWeight: 600 }}>Subtotal</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--accent-saddle)' }}>
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                <ShieldCheck size={16} color="var(--accent-emerald)" />
                <span>Includes global express shipping & craftsmanship guarantee.</span>
              </div>

              <button className="btn-saddle" style={{ width: '100%', padding: '16px' }}>
                PROCEED TO CHECKOUT <ArrowRight size={18} />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
