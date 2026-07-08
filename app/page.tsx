'use client';

import { useState, useEffect } from 'react';

const PHONE = '+16892985282';
const PHONE_DISPLAY = '+1 689-298-5282';
const EMAIL = 'billserviceamerican@gmail.com';
const WA_LINK = `https://wa.me/${PHONE}?text=Hello!%20I%20need%20help%20with%20my%20bill%20payment.`;

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#0a1628', color: '#fff', overflowX: 'hidden' }}>

      {/* HEADER */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(10,22,40,0.97)' : 'rgba(10,22,40,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(16,185,129,0.2)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 24px'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'linear-gradient(135deg, #1a3a6b, #0a1628)',
              border: '2px solid #10b981',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22
            }}>🏠</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, letterSpacing: 1, color: '#fff' }}>BILLS SOLUTIONS</div>
              <div style={{ fontWeight: 700, fontSize: 12, color: '#10b981', letterSpacing: 2 }}>CENTER</div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: 1 }}>WE PAY BILLS · YOU GAIN PEACE OF MIND</div>
            </div>
          </div>

          {/* Nav Desktop */}
          <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
            {['services','how-it-works','testimonials','contact'].map(id => (
              <button key={id} onClick={() => scrollTo(id)} style={{
                background: 'none', border: 'none', color: 'rgba(255,255,255,0.8)',
                cursor: 'pointer', fontSize: 14, fontWeight: 500, textTransform: 'capitalize',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#10b981')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              >{id.replace('-', ' ')}</button>
            ))}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
              background: '#10b981', color: '#fff', padding: '10px 22px',
              borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none',
              transition: 'background 0.2s'
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#059669')}
            onMouseLeave={e => (e.currentTarget.style.background = '#10b981')}
            >Get Started</a>
          </nav>

          {/* Verified badge */}
          <div style={{
            background: 'rgba(16,185,129,0.15)', border: '1px solid #10b981',
            borderRadius: 20, padding: '6px 14px', fontSize: 12, color: '#10b981', fontWeight: 600
          }}>✓ VERIFIED SERVICE</div>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #112244 100%)',
        position: 'relative', overflow: 'hidden', paddingTop: 72
      }}>
        {/* Animated background circles */}
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(16,185,129,0.05)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(26,58,107,0.3)', filter: 'blur(40px)' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', width: '100%' }}>
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <div style={{ width: 32, height: 2, background: '#ef4444' }} />
              <span style={{ color: '#ef4444', fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase' }}>Bill Payment Services</span>
            </div>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              We Pay Your Bills<br />
              <span style={{ color: '#10b981' }}>So You Can Focus</span><br />
              on What Matters
            </h1>
            <div style={{ display: 'flex', gap: 24, marginBottom: 32, flexWrap: 'wrap' }}>
              {['⚡ Fast', '🔒 Secure', '✅ Reliable'].map(t => (
                <span key={t} style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, fontWeight: 500 }}>{t}</span>
              ))}
            </div>

            {/* Service pills */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
              {[
                { icon: '⚡', label: 'Electricity' },
                { icon: '💧', label: 'Water' },
                { icon: '🔥', label: 'Gas' },
                { icon: '📶', label: 'Internet' },
                { icon: '📞', label: 'Phone' },
                { icon: '🏠', label: 'Rent' },
              ].map(s => (
                <div key={s.label} style={{
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 12, padding: '12px 16px', textAlign: 'center', minWidth: 80,
                  cursor: 'pointer', transition: 'all 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(16,185,129,0.2)'; e.currentTarget.style.borderColor = '#10b981'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                >
                  <div style={{ fontSize: 24, marginBottom: 4 }}>{s.icon}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: '#10b981', color: '#fff',
                padding: '16px 28px', borderRadius: 12, fontWeight: 800, fontSize: 16,
                textDecoration: 'none', transition: 'all 0.2s'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#059669'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#10b981'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span style={{ fontSize: 20 }}>💬</span>
                <div>
                  <div style={{ fontSize: 10, opacity: 0.85 }}>CONTÁCTANOS POR WHATSAPP</div>
                  <div>{PHONE_DISPLAY}</div>
                </div>
              </a>
              <div style={{ textAlign: 'center' }}>
                <a href={`mailto:${EMAIL}`} style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none', display: 'block' }}>✉ {EMAIL}</a>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>📍 New York, USA</span>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[
              { num: '5,000+', label: 'Bills Paid', icon: '✅' },
              { num: '98%', label: 'Satisfaction Rate', icon: '⭐' },
              { num: '24/7', label: 'Support Available', icon: '🕐' },
              { num: '< 1hr', label: 'Average Processing', icon: '⚡' },
            ].map(s => (
              <div key={s.label} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(16,185,129,0.2)',
                borderRadius: 16, padding: 28, textAlign: 'center'
              }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 32, fontWeight: 900, color: '#10b981' }}>{s.num}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'rgba(0,0,0,0.3)', padding: '12px 24px',
          display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap'
        }}>
          {['🔒 RELIABLE SERVICE', '💳 TRUSTED PAYMENTS', '🎧 HERE TO HELP'].map(t => (
            <span key={t} style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 600 }}>{t}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '100px 24px', background: '#0d1f3c' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ color: '#10b981', fontSize: 13, fontWeight: 700, letterSpacing: 3, marginBottom: 12 }}>OUR SERVICES</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, marginBottom: 16 }}>Bills We Pay For You</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, maxWidth: 600, margin: '0 auto' }}>
              We handle all your utility and service payments quickly, securely, and reliably.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { icon: '⚡', title: 'Electricity', desc: 'FPL, Con Edison, PECO, Duke Energy and more.', color: '#f59e0b' },
              { icon: '💧', title: 'Water & Sewer', desc: 'Municipal water bills paid on time, every time.', color: '#3b82f6' },
              { icon: '🔥', title: 'Gas', desc: 'National Grid, Peoples Gas, Atmos Energy.', color: '#ef4444' },
              { icon: '📶', title: 'Internet & Cable', desc: 'Spectrum, Comcast, AT&T, Verizon Fios.', color: '#8b5cf6' },
              { icon: '📞', title: 'Phone', desc: 'T-Mobile, AT&T, Verizon, Metro PCS.', color: '#10b981' },
              { icon: '🏠', title: 'Rent', desc: 'Secure rent payments to your landlord or property manager.', color: '#f59e0b' },
            ].map(s => (
              <div key={s.title} style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20, padding: 32, transition: 'all 0.3s', cursor: 'default'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = s.color; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              >
                <div style={{ fontSize: 48, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-block', marginTop: 20, color: s.color, fontSize: 13,
                  fontWeight: 700, textDecoration: 'none'
                }}>Pay Now →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: '100px 24px', background: '#0a1628' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ color: '#10b981', fontSize: 13, fontWeight: 700, letterSpacing: 3, marginBottom: 12 }}>SIMPLE PROCESS</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, marginBottom: 16 }}>How It Works</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, maxWidth: 600, margin: '0 auto' }}>
              3 simple steps to get your bills paid today.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
            {[
              { step: '01', title: 'Contact Us', desc: 'Send us a WhatsApp message with your bill details and amount.', icon: '💬' },
              { step: '02', title: 'We Process', desc: 'Our team verifies and processes your payment securely within minutes.', icon: '⚙️' },
              { step: '03', title: 'Done!', desc: 'You receive confirmation and your bill is paid. Peace of mind guaranteed.', icon: '✅' },
            ].map((s, i) => (
              <div key={s.step} style={{ textAlign: 'center', padding: 40, position: 'relative' }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 36, margin: '0 auto 24px', boxShadow: '0 0 30px rgba(16,185,129,0.3)'
                }}>{s.icon}</div>
                <div style={{ fontSize: 48, fontWeight: 900, color: 'rgba(16,185,129,0.15)', position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)' }}>{s.step}</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#10b981', color: '#fff', padding: '18px 40px',
              borderRadius: 12, fontWeight: 800, fontSize: 18, textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(16,185,129,0.4)', transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(16,185,129,0.5)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(16,185,129,0.4)'; }}
            >💬 Start Now on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ padding: '100px 24px', background: '#0d1f3c' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ color: '#10b981', fontSize: 13, fontWeight: 700, letterSpacing: 3, marginBottom: 12 }}>TESTIMONIALS</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900 }}>What Our Clients Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { name: 'Maria G.', city: 'Miami, FL', text: 'I have been using Bills Solutions Center for 8 months and I could not be happier. They paid my FPL bill in minutes!', avatar: 'MG', color: '#ef4444' },
              { name: 'Carlos R.', city: 'New York, NY', text: 'Super fast and reliable. I pay my Spectrum internet and Con Edison electricity every month. Never had a single issue.', avatar: 'CR', color: '#3b82f6' },
              { name: 'Jennifer L.', city: 'Houston, TX', text: 'As a landlord with 12 units, I needed a reliable service. Bills Solutions Center handles everything professionally.', avatar: 'JL', color: '#10b981' },
              { name: 'Roberto M.', city: 'Los Angeles, CA', text: 'The WhatsApp support is incredible. I send my bill info and within minutes it is paid. 100% trustworthy.', avatar: 'RM', color: '#8b5cf6' },
            ].map(r => (
              <div key={r.name} style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20, padding: 32
              }}>
                <div style={{ display: 'flex', marginBottom: 16 }}>
                  {[1,2,3,4,5].map(i => <span key={i} style={{ color: '#f59e0b', fontSize: 18 }}>★</span>)}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>"{r.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: r.color, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontWeight: 800, fontSize: 16
                  }}>{r.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>{r.name}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '100px 24px', background: '#0a1628' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: '#10b981', fontSize: 13, fontWeight: 700, letterSpacing: 3, marginBottom: 12 }}>CONTACT US</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, marginBottom: 16 }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 18, marginBottom: 48 }}>
            Contact us now via WhatsApp and we will handle your bill payment today.
          </p>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: '#10b981', color: '#fff', padding: '20px 36px',
              borderRadius: 14, fontWeight: 800, fontSize: 18, textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(16,185,129,0.4)', transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span style={{ fontSize: 24 }}>💬</span> WhatsApp: {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', padding: '20px 36px',
              borderRadius: 14, fontWeight: 700, fontSize: 16, textDecoration: 'none',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
            >
              <span style={{ fontSize: 24 }}>✉️</span> {EMAIL}
            </a>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>📍 New York, United States · Available 24/7</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#060e1a', padding: '40px 24px', borderTop: '1px solid rgba(16,185,129,0.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: '#fff' }}>BILLS SOLUTIONS CENTER</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 4 }}>We Pay Bills · You Gain Peace of Mind</div>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
            © 2025 Bills Solutions Center. All rights reserved. · New York, USA
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', fontSize: 13, textDecoration: 'none', fontWeight: 600 }}>WhatsApp</a>
            <a href={`mailto:${EMAIL}`} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none' }}>Email</a>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
        background: '#25d366', color: '#fff',
        width: 64, height: 64, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 32, boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
        textDecoration: 'none', transition: 'all 0.2s'
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      title="Chat on WhatsApp"
      >💬</a>

    </main>
  );
}
