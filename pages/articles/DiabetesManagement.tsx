
import React from 'react';
import { Link } from 'react-router-dom';

const DiabetesManagement: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'New Breakthrough in Diabetes Management',
          text: 'Check out this article about AI in diabetes management!',
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
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="inline-flex items-center hover:text-primary transition-colors">
                  <span className="material-icons text-sm mr-1">home</span>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="material-icons text-slate-400 text-sm">chevron_right</span>
                  <Link to="/blog" className="ml-1 md:ml-2 hover:text-primary transition-colors">Articles</Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="material-icons text-slate-400 text-sm">chevron_right</span>
                  <span className="ml-1 md:ml-2 text-slate-700 font-medium">Diabetes Management...</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <header className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase bg-blue-50 rounded-full border border-blue-100">
                    Research
                  </span>
                  <span className="text-sm text-slate-500 flex items-center gap-1">
                    <span className="material-icons text-sm">schedule</span> 7 min read
                  </span>
                </div>
                <button onClick={handleShare} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
                  <span className="material-icons text-lg">share</span>
                  <span className="text-sm font-medium hidden sm:inline">Share</span>
                </button>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                New Breakthrough in Diabetes Management Using AI Technology
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-serif italic">
                Artificial intelligence is revolutionizing how we approach chronic disease management, offering new hope for Type 2 diabetes patients through personalized care.
              </p>
            </header>

            <div className="rounded-2xl overflow-hidden mb-12 shadow-card">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHD5LjxZo6DK-gc1m-XNR3K5I9AvGznl1MN578ewmgDH3bYN9qIdnk8hKi_N_sH9E5VhqkFyzZr0V5CpofOcjJtfRiK3xRPjpLTwhsVFA-2i-0NLgTNrRdYb8U4FsWKzFnvwTJNIWBhac-ad4nj65nAkxNhZJ2IIPOFOF1yH4N4mcJb18Cgkmpthdam7-eXt-NNKXiiw0VoMBpRuzEjdqnv_9mwRoxEDguAQzEIiHVq7du3HO5-cnq3NQKano-mABGpDd6SfuAvNw" alt="Medical AI Research" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            <article className="prose prose-lg prose-slate max-w-none">
              <p>
                In a landmark development for endocrinology, MediCare Research Center has announced promising results from its latest clinical trial involving AI-driven diabetes management systems. This new technology leverages machine learning algorithms to predict blood sugar fluctuations before they happen, allowing for preemptive insulin adjustments.
              </p>
              <p>
                For decades, patients with Type 2 diabetes have relied on reactive measures—testing blood sugar and then administering medication. This new AI approach shifts the paradigm to proactive care, significantly reducing the risk of dangerous hypoglycemic events.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">How the AI Technology Works</h2>
              <p>
                The system integrates with standard continuous glucose monitors (CGMs) and insulin pumps. However, unlike traditional loops, this AI model analyzes a patient's historical data, dietary habits, and even sleep patterns to forecast glucose levels up to 60 minutes in advance.
              </p>
              <ul className="space-y-4 list-none pl-0 my-6">
                {[
                  { title: 'Predictive Analysis', desc: 'Anticipates spikes after meals based on food composition analysis.', icon: 'analytics' },
                  { title: 'Automated Dosing', desc: 'Micro-adjustments to insulin delivery every 5 minutes.', icon: 'smart_toy' },
                  { title: 'Real-time Doctor Alerts', desc: 'Seamlessly shares critical anomalies with your MediCare endocrinologist.', icon: 'cloud_sync' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="material-icons text-blue-500 mt-1">{item.icon}</span>
                    <span><strong>{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Clinical Trial Results at MediCare</h2>
              <p>
                Our recent 12-month study followed 500 patients with uncontrolled Type 2 diabetes. The results were statistically significant and clinically transformative.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-primary my-8">
                <h4 className="text-lg font-bold text-slate-900 mb-2">Key Findings</h4>
                <p className="mb-2 text-sm">The group using the AI-assisted management system saw a <strong>2.5% reduction in A1C levels</strong> on average compared to the control group.</p>
                <p className="mb-0 text-sm">Furthermore, time-in-range (the percentage of time blood sugar is within healthy limits) increased from 55% to <strong>78%</strong>.</p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Benefits for Type 2 Patients</h2>
              <p>
                This technology isn't just about numbers; it's about quality of life. Patients reported significantly less "diabetes burnout"—the emotional exhaustion that comes from constant self-management.
              </p>
              <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi8sckMzeel2TKzkxpRLW4h0bY-CXz8YGfQ6GuyWFmGquyjMWc3iFRrGiRN7tGo8fdwdLv7F4uziH2tIoFsoGvrzlG6vIMTDY8JhsgDSalL7mi4Mgy_CThF4_cle8rDWSs0h9fXSSEeetZF1LqNmqMDZQwKNk1wjIOWl_q8IrCHn_QBjuCxu3eSCZ0lt4igBw2lXB61R0GjiumAEtGmPuIV0x4URjQhs93ybFSL0bGRoc9Q2enHs_07MbtssuCOQ8qvjyg7MPDURA" alt="Patient using app" className="rounded-xl shadow-md object-cover h-64 w-full" />
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlFjjpPkZuPmGn_DWzxakEnDEayMJLRdZ6bFiddE91zMLTj7j-B316nVmbHuzt78lCw5kS9u00JAmVWKXJdMfYRQBND1LGt7dwaIQP7dxw3s6krW8q4aHl8pxo7BL74LvTZlRtdp5-97kKIzEFqAebbq1Nb5C7ZGfxFFGH-D_kcsCzML0VVgDlyUYyBgaeA9xX5KDNP9NklCIrlc7evMWlmCQNzdAT2eQOEJc1ZtxkbeOGgwdmghmwCPoMyZ14SVGwgBVKC3p1_FM" alt="Data visualization" className="rounded-xl shadow-md object-cover h-64 w-full" />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">The Future of Personalized Medicine</h2>
              <p>
                "This is just the beginning," says Dr. Mark Johnson. "As our datasets grow, the AI becomes smarter and more personalized for each individual. We are moving towards a future where diabetes management is nearly invisible to the patient."
              </p>
              <p>
                MediCare is currently expanding this program to all eligible patients within our network starting next month.
              </p>
            </article>

            <hr className="border-slate-200 my-12" />

            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuADGr580ge61fkfsxwBrM7N1TZyAY9Z-GTpjBUo_xK5lWfakoEU_qOziiT-so6DMVRYMjRbu0nVW-k1DcZ572-UwSxJBbHFxL921KxZ6v5xbrKCJfSDGPfGIKJ2lnbzJo8rsumPzZ1VnlvNztje35dbZ8OjoskrJoJWMwL2xyEuWVfFxTxZWLkj3322_nwECoDQOhnBsfJT-uJdBuBYvHW7tZFnkW3TihhkEKyTi4ionW16tPVhP7_Msgmo2tYXI-H3mW5DhYbZYTk" alt="Dr. Mark Williams" className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Dr. Mark Williams</h3>
                <p className="text-primary font-medium text-sm mb-3">Chief of Cardiology</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dr. Williams is also a leading researcher in the field of endocrinology, exploring the intersections between heart health and metabolic disorders like diabetes.
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

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Subscribe to Updates</h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">Get the latest health research and diabetes care tips delivered to your inbox.</p>
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

export default DiabetesManagement;
