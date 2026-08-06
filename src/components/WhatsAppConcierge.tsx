'use client';

import { motion } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function WhatsAppConcierge() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/2348000000000?text=Hello%20Masib%20Collection!%20I%20am%20interested%20in%20ordering%20custom%20footwear/boots.";

  return (
    <div style={{
      position: 'fixed',
      bottom: '28px',
      right: '28px',
      zIndex: 120,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px'
    }}>
      {/* Back to Top Button matching Screenshot 2/3/4 */}
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-light)',
          color: 'var(--accent-saddle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-md)'
        }}
      >
        <ArrowUp size={20} />
      </motion.button>

      {/* Floating WhatsApp Concierge Button matching Screenshots */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp Concierge"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          textDecoration: 'none',
          position: 'relative'
        }}
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
}
