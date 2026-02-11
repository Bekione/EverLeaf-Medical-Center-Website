
import React from 'react';
import { Link } from 'react-router-dom';

const DiabetesManagement: React.FC = () => {
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
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-primary uppercase bg-blue-50 rounded-full border border-blue-100">
                  Endocrinology
                </span>
                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <span className="material-icons text-sm">schedule</span> 7 min read
                </span>
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
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0pU1TixRLCmNAENdHN6Y9zcqmWVrA3XeASXYNRJNnR9HYPpmwTUcgevBsL_qtTiGoWjcxsL4iudBAuLmKJghLEjHLsqe23AQNMymceA855u8OQeOyly73YaUj8nSs_A2NQVnVhNZaq-vVtWvwJgCh_Dxxupb2TNuga0QAyCd0SYNZ-7tPc89xSCNWEO-zZHwUHOezrEhi5_3xxJrSjTFKEOekdZ5Nu3hE76LyxLxEoMgO4c49NnQKoPZ5qZoajrR6-JMLda4KeVg" alt="Dr. Mark Johnson" className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Dr. Mark Johnson</h3>
                <p className="text-primary font-medium text-sm mb-3">Head of Endocrinology Research</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dr. Johnson leads the Diabetes Research Initiative at MediCare. His work focuses on integrating artificial intelligence with clinical practice to improve outcomes for patients with chronic metabolic conditions.
                </p>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <Link to="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-sm">email</span></Link>
                  <Link to="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-sm">link</span></Link>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl shadow-card p-8 border border-slate-100 sticky top-28">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-2xl">calendar_month</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Time for a Check-up?</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Manage your diabetes effectively. Schedule a consultation with our endocrinology specialists today.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input type="text" id="name" placeholder="Full Name" className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Phone Number" className="w-full rounded-lg border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:ring-primary" />
                </div>
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
                  { title: 'Best Low-GI Foods for Blood Sugar Control', cat: 'Nutrition', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi8sckMzeel2TKzkxpRLW4h0bY-CXz8YGfQ6GuyWFmGquyjMWc3iFRrGiRN7tGo8fdwdLv7F4uziH2tIoFsoGvrzlG6vIMTDY8JhsgDSalL7mi4Mgy_CThF4_cle8rDWSs0h9fXSSEeetZF1LqNmqMDZQwKNk1wjIOWl_q8IrCHn_QBjuCxu3eSCZ0lt4igBw2lXB61R0GjiumAEtGmPuIV0x4URjQhs93ybFSL0bGRoc9Q2enHs_07MbtssuCOQ8qvjyg7MPDURA' },
                  { title: 'The Evolution of Insulin Pumps', cat: 'Technology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuFBUN7DMvatkuHe2PXk6i7AfNOVLYp7qH75l0IVakiufCcGPlyZMeCJYFtYTOmmY29eJ_URHGrqmz1eC27ZzhfOYg2x-1W0Jy1J2TLqbpOjR8yDO6QpHCpy8v3ZiRe3GGGrPZAnCZrQgQHcPeSMLfofeg9aRNIdUL3CIeScdG-gBaVGkvx0B84weBhyiVElKP-PwmC2ZRZRPs9SpMeBj8xld8u930TFDyLoL7BcIosX3lnwpggL79ZB3dcmJnTNu6vrA3y2S_Th0' },
                  { title: 'Living Active with Type 2 Diabetes', cat: 'Lifestyle', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2N8yNJO2FksSY2VL9aOORd-m7aLBKqwS5B8OVUya4ee0pPbyHbmAT3hU9azuBC7SpfJSUok1yqZQZoS8Jo-m1zgVY8y8eZrSWJe8ZT-ZMWrW0aUS2NgrXnoebEHBOOKRWNBt3WiZLUlxuxhrMRZhJlSy1hj8O0UQnwf8inWRb-1w4H_qHYp59geqyccrjHMhgYiKlPLQTiOPzNwcj7Ly58ovCe0lytrx-z0cTWyLE1YvXPFHc7HP3SXn6bKLnXiGXhIh62LSbBqw' }
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
              <p className="text-blue-100 text-sm mb-6 relative z-10">Get the latest health research and diabetes care tips delivered to your inbox.</p>
              <div className="relative z-10">
                <input type="email" placeholder="Your email address" className="w-full rounded-lg border-0 bg-white/20 text-white placeholder-blue-100 focus:ring-2 focus:ring-white mb-3" />
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
