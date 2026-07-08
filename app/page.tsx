'use client';

import React, { useState, useEffect } from 'react';

const PHONE = '+16892985282';
const PHONE_DISPLAY = '+1 689-298-5282';
const EMAIL = 'billserviceamerican@gmail.com';
const WA_LINK = `https://wa.me/${PHONE}?text=Hello!%20I%20am%20interested%20in%20your%20exclusive%20payment%20services.`;

// ✅ LOGO CON NUEVA URL
const LOGO_URL = 'https://cdn.abacus.ai/images/e7d7dfca-7cb4-478b-a9f5-319bb0efbeb3.png';

const HERO_BG = 'https://cdn.abacus.ai/images/d8091bb1-21a4-4318-90a3-79f28701c995.png';
const ABOUT_IMG = 'https://cdn.abacus.ai/images/0450aa1b-0a8f-49dc-9596-054004ea6a67.png';
const CTA_BG = 'https://cdn.abacus.ai/images/a9ff284b-f874-43e2-bc0f-645b1847ff6e.png';
const GALLERY_IMAGES = [
  'https://cdn.abacus.ai/images/1ccac92e-6ade-4155-a545-5ee4ab0c641a.png',
  'https://cdn.abacus.ai/images/1ed5b67e-4942-4233-9c9a-ef217ef3b6f2.png',
  'https://cdn.abacus.ai/images/547ef55f-e836-42de-815a-c32cc4847fbe.png',
  'https://cdn.abacus.ai/images/4a14e0f6-ae5b-4362-bc07-44da905b4426.png',
];

const reviews = [
  { name: 'Maria G.', city: 'Miami, FL', stars: 5, text: 'I was about to get my electricity cut off. Bills Solutions Center paid my FPL bill in under 20 minutes. Absolutely incredible service.', avatar: 'MG', color: '#ef4444', date: 'March 2025' },
  { name: 'Carlos R.', city: 'New York, NY', stars: 5, text: 'I pay my Spectrum internet and Con Edison every single month through them. Never had a single issue.', avatar: 'CR', color: '#3b82f6', date: 'April 2025' },
  { name: 'Jennifer L.', city: 'Houston, TX', stars: 5, text: 'As a landlord, I needed a reliable partner. Bills Solutions Center handles all my tenant utility payments professionally.', avatar: 'JL', color: '#10b981', date: 'February 2025' }
];

// ✅ CORRECCIÓN CLAVE: EXPORT DEFAULT FUNCTION HOME()
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fillLevel, setFillLevel] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeGallery, setActiveGallery] = useState(0);

  useEffect(() => {
    let level = 0;
    const interval = setInterval(() => {
      level += 1.5;
      setFillLevel(Math.min(level, 100));
      if (level >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 600);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGallery((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div style={{ position: 'fixed', inset: 0, background: '#050a12', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
        <div style={{ position: 'relative', width: '200px', height: '200px', marginBottom: '40px' }}>
          <div style={{ position: 'absolute', inset: '-8px', borderRadius: '50%', background: 'conic-gradient(from 0deg, #10b981, #d7263d, #10b981)', animation: 'spin 3s linear infinite', opacity: 0.6 }} />
          <div style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(16,185,129,0.5)' }}>
            <img src={LOGO_URL} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: `${fillLevel}%`, background: 'linear-gradient(to top, rgba(16,185,129,0.8), rgba(215,38,61,0.5))', transition: 'height 0.1s linear', mixBlendMode: 'multiply' }} />
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '2px' }}>BILLS SOLUTIONS CENTER</div>
        </div>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <main style={{ background: '#040912', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* ── NAV ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: scrolled ? 'rgba(5,10,18,0.97)' : 'transparent', height: '80px', display: 'flex', alignItems: 'center', padding: '0 5%', transition: '0.4s' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={LOGO_URL} alt="Logo" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '2px solid #d7263d' }} />
            <div style={{ fontWeight: '800', fontSize: '15px' }}>BILLS SOLUTIONS CENTER</div>
          </div>
          <a href={WA_LINK} target="_blank" rel="noreferrer" style={{ background: '#10b981', color: '#fff', padding: '10px 20px', borderRadius: '8px', fontWeight: '700', textDecoration: 'none' }}>WHATSAPP</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', padding: '0 5%', background: `linear-gradient(rgba(4,9,18,0.8), rgba(4,9,18,0.8)), url("${HERO_BG}")`, backgroundSize: 'cover' }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(40px,7vw,70px)', fontWeight: '900', marginBottom: '20px' }}>Expert Payment <span style={{ color: '#d7263d' }}>Solutions</span></h1>
          <p style={{ fontSize: '20px', marginBottom: '30px', opacity: 0.8 }}>We negotiate exclusive rates for your monthly bills.</p>
          <a href={WA_LINK} target="_blank" rel="noreferrer" style={{ background: '#10b981', color: '#fff', padding: '18px 40px', borderRadius: '10px', fontSize: '18px', fontWeight: '800', textDecoration: 'none' }}>💬 GET QUOTE NOW</a>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: '80px 5%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', marginBottom: '50px' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {['Monthly Rent', 'Electricity', 'Water & Gas', 'Internet', 'Insurance', 'Emergency'].map(s => (
            <div key={s} style={{ padding: '30px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3>{s}</h3>
              <p style={{ opacity: 0.6, marginTop: '10px' }}>Professional and fast processing at verified rates.</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" style={{ padding: '100px 5%', textAlign: 'center', background: `linear-gradient(rgba(215,38,61,0.9), rgba(215,38,61,0.9)), url("${CTA_BG}")`, backgroundSize: 'cover' }}>
        <h2>Contact Us Today</h2>
        <p style={{ fontSize: '20px', margin: '20px 0 40px' }}>Phone: {PHONE_DISPLAY}</p>
        <a href={WA_LINK} target="_blank" rel="noreferrer" style={{ background: '#fff', color: '#d7263d', padding: '20px 50px', borderRadius: '12px', fontWeight: '900', textDecoration: 'none' }}>CHAT NOW</a>
      </section>

      <footer style={{ padding: '40px 5%', textAlign: 'center', opacity: 0.4, fontSize: '12px' }}>
        © 2026 Bills Solutions Center. Professional Financial Assistance.
      </footer>
    </main>
  );
}
