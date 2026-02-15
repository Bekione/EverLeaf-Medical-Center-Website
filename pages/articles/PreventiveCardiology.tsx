import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "../../components/NewsletterForm";
import SEO from "../../components/SEO";

const PreventiveCardiology: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "5 Essential Tips for Heart Health",
          text: "Check out these preventive cardiology tips for a healthier heart!",
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      <SEO
        title="Preventive Cardiology: 5 Essential Tips for Heart Health"
        description="Expert cardiologist advice on preventing heart disease through lifestyle changes, regular screenings, and proactive care."
        type="article"
        canonical="https://everleaf-medical.com/blog/preventive-cardiology"
        image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80"
      />
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center hover:text-primary transition-colors"
                >
                  <span className="material-icons text-sm mr-1">home</span>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="material-icons text-slate-400 text-sm">
                    chevron_right
                  </span>
                  <Link
                    to="/blog"
                    className="ml-1 md:ml-2 hover:text-primary transition-colors"
                  >
                    Articles
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="material-icons text-slate-400 text-sm">
                    chevron_right
                  </span>
                  <span className="ml-1 md:ml-2 text-slate-700 font-medium">
                    Preventive Cardiology...
                  </span>
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
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
                    Cardiology
                  </span>
                  <span className="text-sm text-slate-500 flex items-center gap-1">
                    <span className="material-icons text-sm">schedule</span> 6
                    min read
                  </span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors"
                >
                  <span className="material-icons text-lg">share</span>
                  <span className="text-sm font-medium hidden sm:inline">
                    Share
                  </span>
                </button>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                5 Essential Tips for Preventive Heart Health
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-serif italic">
                Taking proactive steps today can significantly reduce your risk
                of heart disease tomorrow. Our cardiologists share
                evidence-based strategies for maintaining cardiovascular
                wellness.
              </p>
            </header>

            <div className="rounded-2xl overflow-hidden mb-12 shadow-card">
              <img
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"
                alt="Heart Health Concept"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <article className="prose prose-lg prose-slate max-w-none">
              <p>
                Heart disease remains the leading cause of death globally, yet
                up to 80% of cardiovascular diseases are preventable through
                lifestyle modifications and early intervention. At EverLeaf
                Medical Center, our cardiology department emphasizes proactive
                care to help you maintain a healthy heart for life.
              </p>
              <p>
                "The best time to start caring for your heart was 20 years ago.
                The second best time is now," says Dr. Rebecca Martinez, Chief
                of Cardiology. Here are five evidence-based strategies to
                protect your cardiovascular health.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                1. Know Your Numbers
              </h2>
              <p>
                Regular health screenings are the foundation of preventive
                cardiology. Understanding your key health metrics enables early
                detection and intervention.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-primary my-8">
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  Essential Metrics to Monitor:
                </h4>
                <ul className="space-y-2 list-none pl-0 mb-0">
                  {[
                    {
                      metric: "Blood Pressure",
                      target: "Below 120/80 mmHg",
                      icon: "favorite",
                    },
                    {
                      metric: "Total Cholesterol",
                      target: "Below 200 mg/dL",
                      icon: "bloodtype",
                    },
                    {
                      metric: "Blood Sugar",
                      target: "Fasting below 100 mg/dL",
                      icon: "water_drop",
                    },
                    {
                      metric: "Body Mass Index (BMI)",
                      target: "18.5 - 24.9",
                      icon: "monitor_weight",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-icons text-red-500 mt-0.5 text-sm">
                        {item.icon}
                      </span>
                      <span className="text-sm">
                        <strong>{item.metric}:</strong> Target {item.target}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                2. Adopt a Heart-Healthy Diet
              </h2>
              <p>
                Nutrition plays a crucial role in cardiovascular health. The
                Mediterranean diet, rich in fruits, vegetables, whole grains,
                and healthy fats, has been shown to reduce heart disease risk by
                up to 30%.
              </p>
              <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80"
                  alt="Healthy Mediterranean Diet"
                  className="rounded-xl shadow-md object-cover h-64 w-full"
                />
                <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Foods to Emphasize:
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Fatty fish
                      (salmon, mackerel) 2-3x/week
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Leafy greens and
                      colorful vegetables
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Nuts, seeds, and
                      olive oil
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> Whole grains
                      over refined carbs
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                3. Exercise Regularly
              </h2>
              <p>
                The American Heart Association recommends at least 150 minutes
                of moderate-intensity aerobic activity or 75 minutes of vigorous
                activity per week. Exercise strengthens your heart muscle,
                improves circulation, and helps manage weight.
              </p>
              <p>
                Start small if you're new to exercise. Even a 10-minute daily
                walk can make a difference. Gradually increase duration and
                intensity as your fitness improves.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                4. Manage Stress Effectively
              </h2>
              <p>
                Chronic stress contributes to high blood pressure, inflammation,
                and unhealthy coping behaviors. Incorporate stress-reduction
                techniques into your daily routine:
              </p>
              <ul className="space-y-3 my-6">
                <li>
                  <strong>Mindfulness meditation:</strong> Just 10 minutes daily
                  can lower cortisol levels
                </li>
                <li>
                  <strong>Quality sleep:</strong> Aim for 7-9 hours per night
                </li>
                <li>
                  <strong>Social connections:</strong> Strong relationships
                  buffer against stress
                </li>
                <li>
                  <strong>Professional support:</strong> Don't hesitate to seek
                  counseling if needed
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                5. Quit Smoking and Limit Alcohol
              </h2>
              <p>
                Smoking is one of the most significant risk factors for heart
                disease. Within just one year of quitting, your heart attack
                risk drops by 50%. EverLeaf offers comprehensive smoking
                cessation programs with proven success rates.
              </p>
              <p>
                If you drink alcohol, do so in moderation: up to one drink per
                day for women and two for men. Excessive alcohol can raise blood
                pressure and contribute to heart failure.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 my-10">
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="material-icons text-red-500">warning</span>
                  Know the Warning Signs
                </h4>
                <p className="text-sm mb-3">
                  Seek immediate medical attention if you experience:
                </p>
                <ul className="text-sm space-y-1 mb-0">
                  <li>• Chest pain or discomfort</li>
                  <li>• Shortness of breath</li>
                  <li>• Pain in arms, back, neck, jaw, or stomach</li>
                  <li>• Sudden dizziness or lightheadedness</li>
                </ul>
                <p className="text-sm font-bold mt-3 mb-0">
                  Call 911 immediately for these symptoms.
                </p>
              </div>
            </article>

            <hr className="border-slate-200 my-12" />

            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop"
                alt="Dr. Rebecca Martinez"
                className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Dr. Rebecca Martinez
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Chief of Cardiology
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dr. Martinez is a board-certified cardiologist with over 15
                  years of experience in preventive cardiology and
                  interventional procedures. She leads our comprehensive heart
                  health program.
                </p>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <a
                    href="mailto:r.martinez@everleaf.com"
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    <span className="material-icons text-sm">email</span>
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    <span className="material-icons text-sm">link</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl shadow-card p-6 border border-slate-100 sticky top-28">
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">
                Related Articles
              </h3>
              <div className="space-y-6">
                <Link
                  to="/blog/diabetes-management"
                  className="group flex gap-4 items-start"
                >
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=150&h=150&fit=crop"
                      alt="Diabetes Management"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-1 block">
                      Research
                    </span>
                    <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">
                      AI in Diabetes Management
                    </h4>
                  </div>
                </Link>
                <Link
                  to="/blog/immune-system"
                  className="group flex gap-4 items-start"
                >
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=150&h=150&fit=crop"
                      alt="Immune System"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-1 block">
                      Health Tips
                    </span>
                    <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">
                      5 Superfoods for Immunity
                    </h4>
                  </div>
                </Link>
                <Link
                  to="/blog/senior-mobility"
                  className="group flex gap-4 items-start"
                >
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1555814965-74d430d12197?w=150&h=150&fit=crop"
                      alt="Senior Mobility"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-purple-600 font-semibold uppercase tracking-wider mb-1 block">
                      Wellness
                    </span>
                    <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">
                      Mobility and Cognitive Health
                    </h4>
                  </div>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900 to-pink-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">
                Subscribe to Updates
              </h3>
              <p className="text-pink-100 text-sm mb-6 relative z-10">
                Get the latest heart health tips and cardiology news delivered
                to your inbox.
              </p>
              <NewsletterForm variant="sidebar" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PreventiveCardiology;
