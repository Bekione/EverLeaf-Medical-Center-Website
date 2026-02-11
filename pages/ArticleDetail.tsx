
import React from 'react';
import { Link } from 'react-router-dom';

const ArticleDetail: React.FC = () => {
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
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase bg-blue-50 rounded-full border border-blue-100">
                  Cardiology
                </span>
                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <span className="material-icons text-sm">schedule</span> 5 min read
                </span>
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
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop" alt="Dr. Sarah Jenkins" className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white" />
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
            <div className="bg-white rounded-2xl shadow-card p-8 border border-slate-100 sticky top-28">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <span className="material-icons text-2xl">calendar_month</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Time for a Check-up?</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Don't wait until it's an emergency. Schedule a preventative screening with our cardiology team today.
              </p>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-primary py-2.5 px-4" />
                <input type="tel" placeholder="Phone Number" className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-primary py-2.5 px-4" />
                <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-soft">
                  Request Appointment
                </button>
              </form>
              <p className="text-xs text-slate-400 mt-4 text-center">
                Or call us directly at <a href="tel:+15551234567" className="text-primary hover:underline font-semibold">555-123-4567</a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Related Articles</h3>
              <div className="space-y-6">
                {[
                  { title: 'Top 10 Superfoods for a Healthy Heart', cat: 'Nutrition', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=150&h=150&fit=crop' },
                  { title: 'Understanding Hypertension: The Silent Killer', cat: 'Prevention', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=150&h=150&fit=crop' },
                  { title: 'How Much Exercise Do You Really Need?', cat: 'Lifestyle', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=150&h=150&fit=crop' }
                ].map((item, i) => (
                  <Link to="#" key={i} className="group flex gap-4 items-start">
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-1 block">{item.cat}</span>
                      <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">{item.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Subscribe to our Newsletter</h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">Get the latest health tips and news delivered to your inbox weekly.</p>
              <div className="relative z-10">
                <input type="email" placeholder="Your email address" className="w-full rounded-lg border-0 bg-white/20 text-white placeholder-blue-100 focus:ring-2 focus:ring-white mb-3 px-4 py-2" />
                <button className="w-full bg-white text-primary font-bold py-2 rounded-lg hover:bg-blue-50 transition-colors">Subscribe</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
