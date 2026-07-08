'use client';

import { useState, useEffect } from 'react';

const PHONE = '+16892985282';
const PHONE_DISPLAY = '+1 689-298-5282';
const EMAIL = 'billserviceamerican@gmail.com';
const WA_LINK = `https://wa.me/${PHONE}?text=Hello!%20I%20am%20interested%20in%20your%20payment%20services.%20I%20would%20like%20to%20get%20an%20exclusive%20offer.`;

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main style={{ 
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', 
      background: '#050a12', 
      color: '#ffffff', 
      overflowX: 'hidden',
      lineHeight: '1.6' 
    }}>

      {/* NAVIGATION BAR - CORPORATE GLASS */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(5, 10, 18, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(16, 185, 129, 0.15)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        height: scrolled ? '70px' : '90px',
        display: 'flex', alignItems: 'center', padding: '0 5%'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
             <div style={{ width: '50px', height: '50px', background: '#10b981', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}>🏛️</div>
             <div>
               <div style={{ fontWeight: '800', fontSize: '18px', letterSpacing: '1px', lineHeight: '1.1' }}>BILLS SOLUTIONS</div>
               <div style={{ fontWeight: '600', fontSize: '13px', color: '#10b981', letterSpacing: '3px' }}>CENTER</div>
             </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <div className="nav-links" style={{ display: 'flex', gap: '30px', fontWeight: '500', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              <a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a>
              <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
              <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Support</a>
            </div>
            <a href={WA_LINK} target="_blank" style={{
              background: '#10b981', color: '#fff', padding: '12px 28px', borderRadius: '8px',
              fontWeight: '700', textDecoration: 'none', fontSize: '14px', transition: '0.3s',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.2)'
            }}>GET STARTED</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - HIGH END PHOTOGRAPHY LOOK */}
      <section style={{
        position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 5%',
        background: 'linear-gradient(rgba(5, 10, 18, 0.7), rgba(5, 10, 18, 0.7)), url("https://cdn.abacus.ai/images/d8091bb1-21a4-4318-90a3-79f28701c995.png")',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', paddingTop: '50px' }}>
          <div style={{ maxWidth: '700px', animation: 'fadeInUp 1s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{ width: '40px', height: '2px', background: '#10b981' }}></span>
              <span style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: '800', letterSpacing: '4px', color: '#10b981' }}>United States #1 Choice</span>
            </div>
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 75px)', fontWeight: '900', lineHeight: '1.05', marginBottom: '30px', letterSpacing: '-2px' }}>
              Expert Payment <br />Solutions for <span style={{ color: '#10b981' }}>Rent & Bills</span>
            </h1>
            <p style={{ fontSize: '22px', color: 'rgba(255,255,255,0.8)', marginBottom: '45px', maxWidth: '600px', fontWeight: '400' }}>
              We negotiate and process your payments with exclusive rates. Join thousands of satisfied clients who gain financial relief today.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href={WA_LINK} target="_blank" style={{
                background: '#10b981', color: '#fff', padding: '20px 45px', borderRadius: '12px',
                fontSize: '18px', fontWeight: '800', textDecoration: 'none', display: 'flex', 
                alignItems: 'center', gap: '15px', boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)',
                transition: '0.3s transform'
              }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Claim Your Exclusive Deal 🚀
              </a>
            </div>
          </div>
        </div>

        {/* TRUST BADGE BAR */}
        <div style={{
          position: 'absolute', bottom: '40px', left: '5%', right: '5%', display: 'flex', 
          justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px',
          borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px'
        }}>
          {['Instant Processing', 'Certified Security', 'U.S. Licensed Service', '24/7 Priority Support'].map(text => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: '600' }}>
               <span style={{ color: '#10b981' }}>✓</span> {text}
            </div>
          ))}
        </div>
      </section>

      {/* WHY US - REAL HUMAN CONNECTION */}
      <section id="about" style={{ padding: '120px 5%', background: '#050a12' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ 
            borderRadius: '30px', overflow: 'hidden', height: '600px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
            background: 'url("https://cdn.abacus.ai/images/0450aa1b-0a8f-49dc-9596-054004ea6a67.png")',
            backgroundSize: 'cover', backgroundPosition: 'center'
          }}></div>
          <div>
            <h2 style={{ fontSize: '50px', fontWeight: '800', color: '#fff', marginBottom: '30px', lineHeight: '1.2' }}>
              The Most Successful Way to <span style={{ color: '#10b981' }}>Settle Your Debt</span>
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', marginBottom: '35px' }}>
              At Bills Solutions Center, we don't just pay bills; we maximize your budget. Our bilingual experts work directly with utility companies and landlords to ensure the best possible outcome for you.
            </p>
            <div style={{ display: 'grid', gap: '25px' }}>
              {[
                { title: 'Exclusive Partner Rates', desc: 'Access discounts and offers not available to the general public.', icon: '⭐' },
                { title: 'Hyper-Fast Execution', desc: 'Most payments are finalized in under 30 minutes.', icon: '⚡' },
                { title: 'Total Transparency', desc: 'Direct WhatsApp communication with your personal dedicated advisor.', icon: '🔒' }
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '20px', background: 'rgba(255,255,255,0.03)', padding: '25px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '30px' }}>{item.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>{item.title}</h4>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - GRID OF SOLUTIONS */}
      <section id="services" style={{ padding: '120px 5%', background: '#080f1a', textAlign: 'center' }}>
        <h3 style={{ fontSize: '14px', fontWeight: '800', color: '#10b981', letterSpacing: '5px', marginBottom: '15px' }}>OUR SPECIALTIES</h3>
        <h2 style={{ fontSize: '45px', fontWeight: '800', marginBottom: '60px' }}>One Center. All Solutions.</h2>

        <div style={{ 
          maxWidth: '1400px', margin: '0 auto', display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' 
        }}>
          {[
            { name: 'Monthly Rent', icon: '🏠', desc: 'Secure and verified payments to landlords and leasing offices.' },
            { name: 'Electricity (FPL/Duke)', icon: '⚡', desc: 'Instant restoration and debt settlement for utility providers.' },
            { name: 'Water & Gas', icon: '💧', desc: 'Keep your home running smoothly with our priority processing.' },
            { name: 'Mobile & Internet', icon: '📶', desc: 'T-Mobile, AT&T, Spectrum, and more at exclusive rates.' },
            { name: 'Insurance & Taxes', icon: '🛡️', desc: 'Protect your assets with our professional document handling.' },
            { name: 'Emergency Payments', icon: '🚨', desc: 'Last-minute processing for critical bills and late notices.' }
          ].map(s => (
            <div key={s.name} style={{
              padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(16, 185, 129, 0.1)',
              borderRadius: '25px', transition: '0.4s', textAlign: 'left', cursor: 'pointer'
            }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(16, 185, 129, 0.05)'; e.currentTarget.style.transform = 'translateY(-10px)' }} onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{s.icon}</div>
              <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px' }}>{s.name}</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', marginBottom: '25px' }}>{s.desc}</p>
              <a href={WA_LINK} target="_blank" style={{ color: '#10b981', fontWeight: '700', textDecoration: 'none', fontSize: '14px' }}>CONSULT EXPERT →</a>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA - CONVERSION FOCUS */}
      <section id="contact" style={{ 
        padding: '150px 5%', textAlign: 'center',
        background: 'linear-gradient(rgba(16, 185, 129, 0.9), rgba(5, 96, 69, 0.9)), url("https://cdn.abacus.ai/images/a9ff284b-f874-43e2-bc0f-645b1847ff6e.png")',
        backgroundSize: 'cover', backgroundPosition: 'center center'
      }}>
          <h2 style={{ fontSize: 'clamp(30px, 5vw, 60px)', fontWeight: '900', marginBottom: '20px', color: '#fff' }}>Don't Overpay Your Bills.</h2>
          <p style={{ fontSize: '24px', marginBottom: '50px', opacity: '0.9k', maxWidth: '800px', margin: '0 auto 50px auto' }}>
            Our team is waiting to provide your exclusive rate right now. Connect via WhatsApp for Masive Financial Benefits.
          </p>
          <a href={WA_LINK} target="_blank" style={{
            background: '#fff', color: '#056045', padding: '25px 60px', borderRadius: '15px',
            fontSize: '22px', fontWeight: '900', textDecoration: 'none', display: 'inline-block',
            boxShadow: '0 15px 50px rgba(0,0,0,0.3)', transition: '0.3s'
          }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
             CHAT WITH US NOW
          </a>
          <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px', fontWeight: '700' }}>
            <span>📞 {PHONE_DISPLAY}</span>
            <span>|</span>
            <span>✉️ {EMAIL}</span>
          </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '80px 5%', background: '#050a12', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
           <div style={{ maxWidth: '400px' }}>
             <div style={{ fontWeight: '800', fontSize: '22px', marginBottom: '15px' }}>BILLS SOLUTIONS CENTER</div>
             <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>
               Licensed payment facilitation in New York, USA. Providing premium financial relief and bill settlement services for households and business owners nationwide.
             </p>
           </div>
           <div style={{ display: 'flex', gap: '80px' }}>
             <div>
               <h5 style={{ color: '#10b981', marginBottom: '20px', fontSize: '14px', letterSpacing: '2px' }}>PLATFORM</h5>
               <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
                 <li>Verify License</li>
                 <li>Security Protocol</li>
                 <li>Affiliate Program</li>
               </ul>
             </div>
             <div>
               <h5 style={{ color: '#10b981', marginBottom: '20px', fontSize: '14px', letterSpacing: '2px' }}>LEGAL</h5>
               <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
                 <li>Terms of Service</li>
                 <li>Privacy Policy</li>
                 <li>Cookie Policy</li>
               </ul>
             </div>
           </div>
        </div>
        <div style={{ maxWidth: '1400px', margin: '60px auto 0 auto', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
          © 2026 Bills Solutions Center. Professional Financial Assistance. Serving all 50 states.
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a href={WA_LINK} target="_blank" style={{
        position: 'fixed', bottom: '40px', right: '40px', zIndex: '2000',
        width: '70px', height: '70px', background: '#25d366', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '35px',
        boxShadow: '0 10px 30px rgba(37,211,102,0.4)', textDecoration: 'none',
        animation: 'pulse 2s infinite'
      }}>💬</a>

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(37,211,102,0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        html { scroll-behavior: smooth; }
      `}</style>

    </main>
  );
}
