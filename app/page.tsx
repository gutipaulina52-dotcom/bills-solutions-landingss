'use client';

import { useState, useEffect } from 'react';

const PHONE = '+16892985282';
const PHONE_DISPLAY = '+1 689-298-5282';
const EMAIL = 'billserviceamerican@gmail.com';
const WA_LINK = `https://wa.me/${PHONE}?text=Hello!%20I%20am%20interested%20in%20your%20exclusive%20payment%20services.`;
const LOGO_URL = 'https://cdn.abacus.ai/images/f11c3fe6-53c1-406a-bda1-d436aa6093cc.png';
const HERO_BG = 'https://cdn.abacus.ai/images/d8091bb1-21a4-4318-90a3-79f28701c995.png';
const ABOUT_IMG = 'https://cdn.abacus.ai/images/0450aa1b-0a8f-49dc-9596-054004ea6a67.png';
const CTA_BG = 'https://cdn.abacus.ai/images/a9ff284b-f874-43e2-bc0f-645b1847ff6e.png';
const GALLERY_IMAGES = [
  'https://cdn.abacus.ai/images/1ccac92e-6ade-4155-a545-5ee4ab0c641a.png',
  'https://cdn.abacus.ai/images/1ed5b67e-4942-4233-9c9a-ef217ef3b6f2.png',
  'https://cdn.abacus.ai/images/547ef55f-e836-42de-815a-c32cc4847fbe.png',
  'https://cdn.abacus.ai/images/4a14e0f6-ae5b-4362-bc07-44da905b4426.png',
];

export default function Home() {
  const [loading, setLoading] = useState(true);
const [fillLevel, setFillLevel] = useState(0);
const [scrolled, setScrolled] = useState(false);
const [scrollY, setScrollY] = useState(0);
const [activeGallery, setActiveGallery] = useState(0);

  useEffect(() => {
    // Water fill animation
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
  const onScroll = () => {
    setScrolled(window.scrollY > 50);
    setScrollY(window.scrollY);
  };

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

  const reviews = [
    { name: 'Maria G.', city: 'Miami, FL', stars: 5, text: 'I was about to get my electricity cut off. Bills Solutions Center paid my FPL bill in under 20 minutes. Absolutely incredible service. I recommend them to everyone in my family.', avatar: 'MG', color: '#ef4444', date: 'March 2025' },
    { name: 'Carlos R.', city: 'New York, NY', stars: 5, text: 'I pay my Spectrum internet and Con Edison every single month through them. Never had a single issue. The WhatsApp response is instant and the rates they offer are unbeatable.', avatar: 'CR', color: '#3b82f6', date: 'April 2025' },
    { name: 'Jennifer L.', city: 'Houston, TX', stars: 5, text: 'As a landlord with 12 rental units, I needed a reliable partner. Bills Solutions Center handles all my tenant utility payments professionally. They saved me hours every month.', avatar: 'JL', color: '#10b981', date: 'February 2025' },
    { name: 'Roberto M.', city: 'Los Angeles, CA', stars: 5, text: 'I was skeptical at first but after the first payment I was completely convinced. They are fast, transparent and the exclusive rates they negotiate are real. 100% trustworthy.', avatar: 'RM', color: '#8b5cf6', date: 'May 2025' },
    { name: 'Ana P.', city: 'Orlando, FL', stars: 5, text: 'My rent was 3 days late and I was panicking. One WhatsApp message and they handled everything within the hour. I cannot imagine managing my bills without them now.', avatar: 'AP', color: '#f59e0b', date: 'January 2025' },
    { name: 'David T.', city: 'Chicago, IL', stars: 5, text: 'Professional, bilingual, and incredibly fast. They paid my gas, water and phone bill all in one session. The team is friendly and always available. Best service I have used.', avatar: 'DT', color: '#06b6d4', date: 'June 2025' },
  ];

  if (loading) {
    return (
      <div style={{
        position: 'fixed', inset: 0, background: '#050a12',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 9999, transition: 'opacity 0.6s', opacity: loading ? 1 : 0
      }}>
        {/* Circular logo with water fill */}
        <div style={{ position: 'relative', width: '200px', height: '200px', marginBottom: '40px' }}>
          {/* Outer glow ring */}
          <div style={{
            position: 'absolute', inset: '-8px', borderRadius: '50%',
            background: 'conic-gradient(from 0deg, #10b981, #059669, #10b981)',
            animation: 'spin 3s linear infinite', opacity: 0.6
          }} />
          {/* Logo circle with water fill */}
          <div style={{
            position: 'relative', width: '200px', height: '200px',
            borderRadius: '50%', overflow: 'hidden',
            border: '3px solid rgba(16,185,129,0.5)',
            boxShadow: '0 0 40px rgba(16,185,129,0.3)'
          }}>
            {/* Logo image */}
            <img src={LOGO_URL} alt="Bills Solutions Center" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
            {/* Water fill overlay */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: `${fillLevel}%`,
              background: 'linear-gradient(to top, rgba(16,185,129,0.85), rgba(5,150,105,0.6))',
              transition: 'height 0.1s linear',
              mixBlendMode: 'multiply'
            }}>
              {/* Wave effect */}
              <div style={{
                position: 'absolute', top: '-10px', left: '-50%', width: '200%', height: '20px',
                background: 'rgba(16,185,129,0.4)',
                borderRadius: '50%',
                animation: 'wave 1.5s ease-in-out infinite'
              }} />
            </div>
          </div>
        </div>

        {/* Company name */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ fontSize: '22px', fontWeight: '800', color: '#fff', letterSpacing: '2px' }}>BILLS SOLUTIONS CENTER</div>
          <div style={{ fontSize: '13px', color: '#10b981', letterSpacing: '4px', marginTop: '5px' }}>NEW YORK, USA</div>
        </div>

        {/* Progress bar */}
        <div style={{ width: '200px', height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{
            height: '100%', width: `${fillLevel}%`,
            background: 'linear-gradient(90deg, #10b981, #34d399)',
            transition: 'width 0.1s linear', borderRadius: '2px'
          }} />
        </div>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '12px' }}>
          {fillLevel < 100 ? 'Loading your experience...' : 'Welcome ✓'}
        </div>

        <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes wave { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-25%); } }
        `}</style>
      </div>
    );
  }

  return (
    <main style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', background: '#050a12', color: '#fff', overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(5,10,18,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(16,185,129,0.15)' : 'none',
        transition: 'all 0.5s', height: scrolled ? '70px' : '90px',
        display: 'flex', alignItems: 'center', padding: '0 5%'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={LOGO_URL} alt="Logo" style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #10b981' }} />
            <div>
              <div style={{ fontWeight: '800', fontSize: '16px', letterSpacing: '1px' }}>BILLS SOLUTIONS</div>
              <div style={{ fontWeight: '600', fontSize: '11px', color: '#10b981', letterSpacing: '3px' }}>CENTER</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <div style={{ display: 'flex', gap: '30px', fontSize: '14px', fontWeight: '500', color: 'rgba(255,255,255,0.7)' }}>
              {['#services', '#reviews', '#contact'].map((href, i) => (
                <a key={href} href={href} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {['Services', 'Reviews', 'Contact'][i]}
                </a>
              ))}
            </div>
            <a href={WA_LINK} target="_blank" style={{
              background: '#10b981', color: '#fff', padding: '12px 28px', borderRadius: '8px',
              fontWeight: '700', textDecoration: 'none', fontSize: '14px', boxShadow: '0 4px 15px rgba(16,185,129,0.3)'
            }}>GET STARTED</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 5%',
        background: `linear-gradient(rgba(5,10,18,0.72), rgba(5,10,18,0.72)), url("${HERO_BG}")`,
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', paddingTop: '80px' }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{ width: '40px', height: '2px', background: '#10b981' }} />
              <span style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '4px', color: '#10b981', textTransform: 'uppercase' }}>Trusted by 5,000+ Families Across the U.S.</span>
            </div>
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: '900', lineHeight: '1.05', marginBottom: '28px', letterSpacing: '-2px' }}>
              Expert Payment<br />Solutions for <span style={{ color: '#10b981' }}>Rent & Bills</span>
            </h1>
            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', marginBottom: '45px', maxWidth: '580px' }}>
              We negotiate and process your payments with exclusive rates. Fast, secure, and 100% bilingual support available 24/7 via WhatsApp.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href={WA_LINK} target="_blank" style={{
                background: '#10b981', color: '#fff', padding: '20px 45px', borderRadius: '12px',
                fontSize: '18px', fontWeight: '800', textDecoration: 'none',
                boxShadow: '0 10px 40px rgba(16,185,129,0.4)', transition: '0.3s',
                display: 'flex', alignItems: 'center', gap: '12px'
              }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                💬 Claim Your Exclusive Deal
              </a>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
                <div>⭐⭐⭐⭐⭐ 4.9/5 Rating</div>
                <div>Based on 500+ verified reviews</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute', bottom: '40px', left: '5%', right: '5%',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
          borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px'
        }}>
          {['⚡ Instant Processing', '🔒 Certified Security', '🇺🇸 U.S. Licensed Service', '🎧 24/7 Priority Support'].map(t => (
            <span key={t} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: '600' }}>{t}</span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: '120px 5%', background: '#050a12' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{
            borderRadius: '30px', overflow: 'hidden', height: '600px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
            background: `url("${ABOUT_IMG}")`, backgroundSize: 'cover', backgroundPosition: 'center'
          }} />
          <div>
            <h2 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '25px', lineHeight: '1.2' }}>
              The Most Trusted Way to <span style={{ color: '#10b981' }}>Settle Your Bills</span>
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px', lineHeight: '1.8' }}>
              At Bills Solutions Center, we don't just pay bills — we maximize your budget. Our bilingual experts work directly with utility companies and landlords to ensure the best possible outcome for you.
            </p>
            {[
              { icon: '⭐', title: 'Exclusive Partner Rates', desc: 'Access discounts and offers not available to the general public.' },
              { icon: '⚡', title: 'Hyper-Fast Execution', desc: 'Most payments are finalized in under 30 minutes.' },
              { icon: '🔒', title: 'Total Transparency', desc: 'Direct WhatsApp communication with your personal dedicated advisor.' }
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: '20px', background: 'rgba(255,255,255,0.03)', padding: '22px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '16px' }}>
                <div style={{ fontSize: '28px' }}>{item.icon}</div>
                <div>
                  <h4 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '5px' }}>{item.title}</h4>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '120px 5%', background: '#080f1a', textAlign: 'center' }}>
        <div style={{ color: '#10b981', fontSize: '13px', fontWeight: '800', letterSpacing: '5px', marginBottom: '15px' }}>OUR SPECIALTIES</div>
        <h2 style={{ fontSize: '45px', fontWeight: '800', marginBottom: '60px' }}>One Center. All Solutions.</h2>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {[
            { name: 'Monthly Rent', icon: '🏠', desc: 'Secure and verified payments to landlords and leasing offices.' },
            { name: 'Electricity (FPL/Duke)', icon: '⚡', desc: 'Instant restoration and debt settlement for utility providers.' },
            { name: 'Water & Gas', icon: '💧', desc: 'Keep your home running smoothly with our priority processing.' },
            { name: 'Mobile & Internet', icon: '📶', desc: 'T-Mobile, AT&T, Spectrum, and more at exclusive rates.' },
            { name: 'Insurance & Taxes', icon: '🛡️', desc: 'Protect your assets with our professional document handling.' },
            { name: 'Emergency Payments', icon: '🚨', desc: 'Last-minute processing for critical bills and late notices.' }
          ].map(s => (
            <div key={s.name} style={{
              padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(16,185,129,0.1)',
              borderRadius: '25px', transition: '0.4s', textAlign: 'left', cursor: 'pointer'
            }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(16,185,129,0.06)'; e.currentTarget.style.transform = 'translateY(-10px)'; }} onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{s.icon}</div>
              <h4 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px' }}>{s.name}</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '25px', lineHeight: '1.7' }}>{s.desc}</p>
              <a href={WA_LINK} target="_blank" style={{ color: '#10b981', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>CONSULT EXPERT →</a>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ padding: '120px 5%', background: '#050a12' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <div style={{ color: '#10b981', fontSize: '13px', fontWeight: '800', letterSpacing: '5px', marginBottom: '15px' }}>VERIFIED REVIEWS</div>
            <h2 style={{ fontSize: '45px', fontWeight: '800', marginBottom: '15px' }}>Real People. Real Results.</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#f59e0b', fontSize: '24px' }}>★</span>)}
              </div>
              <span style={{ fontSize: '18px', fontWeight: '700' }}>4.9 out of 5</span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>· 500+ verified reviews</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '25px' }}>
            {reviews.map(r => (
              <div key={r.name} style={{
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '24px', padding: '35px', transition: '0.3s'
              }} onMouseOver={e => { e.currentTarget.style.border = '1px solid rgba(16,185,129,0.3)'; e.currentTarget.style.background = 'rgba(16,185,129,0.04)'; }} onMouseOut={e => { e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#f59e0b', fontSize: '16px' }}>★</span>)}
                  </div>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>{r.date}</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', marginBottom: '25px', fontSize: '15px', fontStyle: 'italic' }}>"{r.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%', background: r.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '800', fontSize: '16px', flexShrink: 0
                  }}>{r.avatar}</div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '15px' }}>{r.name}</div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>📍 {r.city} · Verified Client</div>
                  </div>
                  <div style={{ marginLeft: 'auto', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '20px', padding: '4px 12px', fontSize: '11px', color: '#10b981', fontWeight: '700' }}>✓ VERIFIED</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <a href={WA_LINK} target="_blank" style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              background: '#10b981', color: '#fff', padding: '20px 50px', borderRadius: '12px',
              fontSize: '18px', fontWeight: '800', textDecoration: 'none',
              boxShadow: '0 10px 40px rgba(16,185,129,0.4)', transition: '0.3s'
            }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              💬 Join Our Satisfied Clients
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{
        padding: '150px 5%', textAlign: 'center',
        background: `linear-gradient(rgba(16,185,129,0.88), rgba(5,96,69,0.92)), url("${CTA_BG}")`,
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <img src={LOGO_URL} alt="Logo" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '30px', border: '3px solid rgba(255,255,255,0.4)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} />
        <h2 style={{ fontSize: 'clamp(30px, 5vw, 60px)', fontWeight: '900', marginBottom: '20px' }}>Don't Overpay Your Bills.</h2>
        <p style={{ fontSize: '22px', marginBottom: '50px', opacity: 0.9, maxWidth: '700px', margin: '0 auto 50px auto' }}>
          Our team is ready to provide your exclusive rate right now. One message is all it takes.
        </p>
        <a href={WA_LINK} target="_blank" style={{
          background: '#fff', color: '#056045', padding: '25px 60px', borderRadius: '15px',
          fontSize: '22px', fontWeight: '900', textDecoration: 'none', display: 'inline-block',
          boxShadow: '0 15px 50px rgba(0,0,0,0.3)', transition: '0.3s'
        }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
          💬 CHAT WITH US NOW
        </a>
        <div style={{ marginTop: '35px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', fontWeight: '700', fontSize: '16px' }}>
          <span>📞 {PHONE_DISPLAY}</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>✉️ {EMAIL}</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span>📍 New York, USA</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '80px 5%', background: '#050a12', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
          <div style={{ maxWidth: '380px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img src={LOGO_URL} alt="Logo" style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #10b981' }} />
              <div style={{ fontWeight: '800', fontSize: '18px' }}>BILLS SOLUTIONS CENTER</div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', lineHeight: '1.8' }}>
              Professional payment facilitation services in New York, USA. Providing premium financial relief and bill settlement for households and businesses nationwide.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '80px' }}>
            <div>
              <h5 style={{ color: '#10b981', marginBottom: '20px', fontSize: '13px', letterSpacing: '2px' }}>SERVICES</h5>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                {['Rent Payments', 'Electricity', 'Water & Gas', 'Internet & Phone', 'Emergency Bills'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <h5 style={{ color: '#10b981', marginBottom: '20px', fontSize: '13px', letterSpacing: '2px' }}>LEGAL</h5>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1400px', margin: '50px auto 0', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>
          © 2026 Bills Solutions Center. Professional Financial Assistance. Serving all 50 states.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={WA_LINK} target="_blank" style={{
        position: 'fixed', bottom: '35px', right: '35px', zIndex: 2000,
        width: '70px', height: '70px', background: '#25d366', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '34px',
        boxShadow: '0 10px 30px rgba(37,211,102,0.5)', textDecoration: 'none',
        animation: 'pulse 2s infinite'
      }}>💬</a>

      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 18px rgba(37,211,102,0); }
          100% { transform: scale(1); }
        }
        html { scroll-behavior: smooth; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}</style>
    </main>
  );
}
