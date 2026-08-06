'use client';

import { useState } from 'react';
import MarqueeBanner from '@/components/MarqueeBanner';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SignatureCollection, { Product } from '@/components/SignatureCollection';
import CraftsmanshipLegacy from '@/components/CraftsmanshipLegacy';
import VoicesOfExcellence from '@/components/VoicesOfExcellence';
import Footer from '@/components/Footer';
import WhatsAppConcierge from '@/components/WhatsAppConcierge';
import ProductModal from '@/components/ProductModal';
import CartDrawer from '@/components/CartDrawer';
import SearchModal from '@/components/SearchModal';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Array<Product & { selectedSize: string; quantity: number }>>([
    {
      id: 'prod-1',
      category: 'slides',
      name: 'Luxury Thong Sandals',
      description: 'Luxury black leather thong sandals with a soft cushioned footbed.',
      price: '$185',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80',
      specs: ['Full-Grain Calfskin Leather'],
      selectedSize: 'EU 42',
      quantity: 1
    },
    {
      id: 'prod-4',
      category: 'boots',
      name: 'Apex Pitch Pro Football Boots',
      description: 'Handcrafted kangaroo leather football boots.',
      price: '$320',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
      specs: ['K-Leather Forefoot'],
      selectedSize: 'EU 43',
      quantity: 1
    }
  ]);

  const handleAddToCart = (product: Product, size = 'EU 42') => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, selectedSize: size, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id: string, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--bg-parchment)' }}>
      <MarqueeBanner />
      <Navbar 
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setCartOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
      />
      <HeroSection />
      <SignatureCollection 
        onSelectProduct={(product) => setSelectedProduct(product)}
        onAddToCart={(product) => handleAddToCart(product, 'EU 42')}
      />
      <CraftsmanshipLegacy />
      <VoicesOfExcellence />
      <Footer />
      <WhatsAppConcierge />

      {/* Interactive Modals & Drawers */}
      <ProductModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(prod, size) => handleAddToCart(prod, size)}
      />

      <CartDrawer 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
      />

      <SearchModal 
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />
    </main>
  );
}
