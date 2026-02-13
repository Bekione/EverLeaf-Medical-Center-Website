
import React from 'react';
import { Link } from 'react-router-dom';

const FluSeason: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Flu Season 2023 Guide',
          text: 'Why the vaccine matters this year.',
          url: window.location.href,
        });
      } catch (err) { console.error('Error sharing:', err); }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500">
            <Link to="/" className="hover:text-primary transition-colors flex items-center"><span className="material-icons text-sm mr-1">home</span> Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Articles</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">Flu Season 2023</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <header className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-green-600 uppercase bg-green-50 rounded-full border border-green-100">Health Tips</span>
                  <span className="text-sm text-slate-500 flex items-center gap-1"><span className="material-icons text-sm">schedule</span> 3 min read</span>
                </div>
                <button onClick={handleShare} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors"><span className="material-icons text-lg">share</span> Share</button>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">Flu Season 2023: Why the Vaccine is More Important Than Ever</h1>
              <p className="text-xl text-slate-600 leading-relaxed font-serif italic border-l-4 border-green-500 pl-4">Protect yourself and your community. Here is everything you need to know about this year's flu strain.</p>
            </header>

            <div className="rounded-2xl overflow-hidden mb-12 shadow-card">
              <img src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=1200&q=80" alt="Flu Vaccine" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            <article className="prose prose-lg prose-slate max-w-none">
              <p>With winter fast approaching, health experts are predicting a potentially severe flu season. The relaxation of pandemic-era precautions means viruses are circulating more freely than in previous years.</p>
              
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Who Should Get Vaccinated?</h2>
              <p>The CDC recommends that everyone 6 months of age and older get a flu vaccine every season. It is particularly crucial for:</p>
              <ul className="list-disc pl-5 my-4 space-y-2">
                <li>Adults 65 years and older</li>
                <li>Children younger than 5</li>
                <li>Pregnant people</li>
                <li>People with chronic health conditions (asthma, heart disease, diabetes)</li>
              </ul>
              <p>Vaccination not only reduces your risk of getting sick but also prevents hospitalization and death. It creates a community immunity barrier that protects those who cannot be vaccinated.</p>
            </article>

            <hr className="border-slate-200 my-12" />

            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                <span className="material-icons text-4xl">medical_services</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Karen Lee, RN</h3>
                <p className="text-primary font-medium text-sm mb-3">Head Nurse - Emergency Department</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Karen has been on the front lines of emergency care for over 20 years. She leads the annual community vaccination drive at MediCare.
                </p>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-sm">email</span></a>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-sm">link</span></a>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl shadow-card p-6 border border-slate-100 sticky top-28">
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Related Articles</h3>
              <div className="space-y-6">
                <Link to="/blog/immune-system" className="group flex gap-4 items-start">
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=150&h=150&fit=crop" alt="Immune System" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <span className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-1 block">Health Tips</span>
                    <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">5 Superfoods for Immunity</h4>
                  </div>
                </Link>
                <Link to="/blog/preventive-cardiology" className="group flex gap-4 items-start">
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=150&h=150&fit=crop" alt="Heart Health" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-1 block">Cardiology</span>
                    <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">5 Tips for Heart Health</h4>
                  </div>
                </Link>
                <Link to="/blog/pediatric-wing" className="group flex gap-4 items-start">
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&h=150&fit=crop" alt="Pediatric Wing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <span className="text-xs text-red-600 font-semibold uppercase tracking-wider mb-1 block">News</span>
                    <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">New Pediatric Wing Opens</h4>
                  </div>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Subscribe to Updates</h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">Get seasonal health alerts delivered to your inbox.</p>
              <div className="relative z-10">
                <input type="email" placeholder="Your email address" className="w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:ring-2 focus:ring-white mb-3 px-4 py-2" />
                <button className="w-full bg-white text-primary font-bold py-2 rounded-lg hover:bg-blue-50 transition-colors">Subscribe</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default FluSeason;
