'use client';
import { useEffect, useRef } from 'react';

const REVIEWS = [
  { name: 'Maria G.', city: 'Miami, FL', rating: 5, text: "I've been using Bills Solutions Center for 8 months and I couldn't be happier. They paid my FPL bill in minutes and I got confirmation right away. Highly recommend!", avatar: 'MG', color: 'from-pink-400 to-rose-500' },
  { name: 'Carlos R.', city: 'New York, NY', rating: 5, text: 'Super fast and reliable. I pay my Spectrum internet and Con Edison electricity every month through them. Never had a single issue. 5 stars!', avatar: 'CR', color: 'from-blue-400 to-indigo-500' },
  { name: 'Jennifer L.', city: 'Houston, TX', rating: 5, text: "As a landlord with 12 units, I needed a reliable service for bulk payments. Bills Solutions Center handles everything professionally. Best decision I made.", avatar: 'JL', color: 'from-emerald-400 to-teal-500' },
  { name: 'Roberto M.', city: 'Los Angeles, CA', rating: 5, text: 'The WhatsApp support is incredible. I send my bill info and within minutes it\'s paid. The team is always responsive and professional. 100% trustworthy.', avatar: 'RM', color: 'from-purple-400 to-violet-500' }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Join thousands of satisfied customers who trust us with their monthly payments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
              <div className="flex mb-4 text-amber-400">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 flex-grow">"{review.text}"</p>
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-lg mr-4`}>
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-none">{review.name}</h4>
                  <span className="text-sm text-slate-500">{review.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
