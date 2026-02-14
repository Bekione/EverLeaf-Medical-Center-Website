import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from '../components/NewsletterForm';

const ArticleDetail: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '5 Tips for Heart Health',
          text: 'Check out this guide to cardiovascular wellness!',
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex text-sm text-slate-500">
            <Link to="/" className="hover:text-primary transition-colors flex items-center"><span className="material-icons text-sm mr-1">home</span> Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Articles</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">5 Tips for Heart Health</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8">
            <header className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase bg-blue-50 rounded-full border border-blue-100">
                    Cardiology
                  </span>
                  <span className="text-sm text-slate-500 flex items-center gap-1">
                    <span className="material-icons text-sm">schedule</span> 5 min read
                  </span>
                </div>
                <button onClick={handleShare} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
                  <span className="material-icons text-lg">share</span>
                  <span className="text-sm font-medium hidden sm:inline">Share</span>
                </button>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                5 Tips for Heart Health: A Guide to Cardiovascular Wellness
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-serif italic border-l-4 border-primary pl-4">
                Small lifestyle changes can make a big difference in maintaining a healthy heart and preventing cardiovascular disease.
              </p>
            </header>

            <div className="rounded-2xl overflow-hidden mb-12 shadow-card">
              <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80" alt="Healthy Heart" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            <article className="prose prose-lg prose-slate max-w-none mb-12">
              <p className="mb-6">
                Heart disease remains the leading cause of death worldwide, but the good news is that it is largely preventable. By understanding the risk factors and making conscious choices about your diet, activity, and stress levels, you can significantly improve your heart's longevity.
              </p>
              
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">1. Prioritize a Heart-Healthy Diet</h2>
              <p className="mb-6">
                What you eat directly impacts your blood pressure, cholesterol, and blood sugar levels. A heart-healthy diet focuses on nutrient-dense foods and limits processed items high in saturated fats and added sugars.
              </p>
              <ul className="space-y-4 mb-8 list-none pl-0">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-500 mt-1">check_circle</span>
                  <span><strong>Eat more fruits and vegetables:</strong> Aim for variety to get a wide range of vitamins and minerals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-500 mt-1">check_circle</span>
                  <span><strong>Choose whole grains:</strong> Swap refined carbs like white bread for brown rice, quinoa, and oats.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-green-500 mt-1">check_circle</span>
                  <span><strong>Limit sodium intake:</strong> Reducing salt can help lower blood pressure.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">2. Get Moving with Regular Exercise</h2>
              <p className="mb-6">
                Your heart is a muscle, and like any muscle, it gets stronger when you use it. Regular physical activity improves your heart's ability to pump blood throughout your body.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-primary my-8">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Recommended Activity Levels</h4>
                <p className="mb-0 text-sm">The American Heart Association recommends at least <strong>150 minutes</strong> of moderate-intensity aerobic activity or <strong>75 minutes</strong> of vigorous activity per week.</p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">3. Manage Stress Effectively</h2>
              <p className="mb-6">
                Chronic stress can contribute to high blood pressure and other heart disease risk factors. Finding healthy ways to manage stress is crucial for cardiovascular health. Techniques such as mindfulness meditation, deep breathing exercises, and yoga have been shown to reduce stress hormones.
              </p>
              
              <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src="https://images.unsplash.com/photo-1544367563-121985aa425b?w=600&q=80" alt="Yoga" className="rounded-xl shadow-md object-cover h-48 w-full" />
                <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" alt="Healthy Food" className="rounded-xl shadow-md object-cover h-48 w-full" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">4. Quit Smoking and Limit Alcohol</h2>
              <p className="mb-6">
                Smoking is one of the most significant risk factors for developing heart disease. Chemicals in tobacco can damage your heart and blood vessels. Similarly, excessive alcohol consumption can raise blood pressure and increase the risk of cardiomyopathy.
              </p>
            </article>

            <hr className="border-slate-200 my-12" />

            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBChCNT8erlVF0Jb3YnNa2Jwxeqc_G7B-uiUleBsEICKirjSMrw_SrDb1GtFJYE_2kXVPDvEQ9FZiSq9xDZWlzeXzG8Z_iJXZ0UhjaH0-zMnejmi_arf1Z2AFiTRF47V7ikISqdI30VzxwwefpXmX2B2G2DUYYlTvhQzqZbeC51CkUbkliXD1whIKgHDP6D6Ths5hVIR8Td0ilLpGSPmGvlI5lEcPHmuEZoWiAEk_YQDma6T3G90ZhtBFBD_wV7I7U8Oj9ub5mYqxI" alt="Dr. Sarah Jenkins" className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Dr. Sarah Jenkins</h3>
                <p className="text-primary font-medium text-sm mb-3">Chief of Cardiology</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dr. Jenkins has over 15 years of experience in preventative cardiology and heart failure management. She is dedicated to helping patients live longer, healthier lives through education and advanced care.
                </p>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-sm">email</span></a>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-sm">link</span></a>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Related Articles */}
            <div className="bg-white rounded-2xl shadow-card p-6 border border-slate-100 sticky top-28">
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Related Articles</h3>
              <div className="space-y-6">
                <Link to="/blog/diabetes-management" className="group flex gap-4 items-start">
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=150&h=150&fit=crop" alt="Diabetes Management" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-1 block">Research</span>
                    <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">Breakthrough in Diabetes Management</h4>
                  </div>
                </Link>
                <Link to="/blog/flu-season" className="group flex gap-4 items-start">
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=150&h=150&fit=crop" alt="Flu Season" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <span className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-1 block">Health Tips</span>
                    <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">Flu Season 2023 Guide</h4>
                  </div>
                </Link>
                <Link to="/blog/senior-mobility" className="group flex gap-4 items-start">
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1555814965-74d430d12197?w=150&h=150&fit=crop" alt="Senior Mobility" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1 block">Research</span>
                    <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">Mobility and Cognitive Health</h4>
                  </div>
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Subscribe to Updates</h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">Get the latest heart health tips and research delivered to your inbox.</p>
              <NewsletterForm variant="sidebar" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;