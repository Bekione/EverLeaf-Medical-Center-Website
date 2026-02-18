import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "../../components/NewsletterForm";
import SEO from "../../components/SEO";
import RelatedArticles from "../../components/RelatedArticles";

const FluSeason: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Flu Season 2025 Guide",
          text: "Why the vaccine matters this year.",
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
        title="Flu Season 2025 Guide"
        description="Everything you need to know about this year's flu strain and why vaccination is critical for community health."
        type="article"
        canonical="https://everleaf-medical.com/blog/flu-season"
        image="/images/articles/article-6-hero.jpg"
      />
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500">
            <Link
              to="/"
              className="hover:text-primary transition-colors flex items-center"
            >
              <span className="material-icons text-sm mr-1">home</span> Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">
              Articles
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">Flu Season 2025</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <header className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-green-600 uppercase bg-green-50 rounded-full border border-green-100">
                    Health Tips
                  </span>
                  <span className="text-sm text-slate-500 flex items-center gap-1">
                    <span className="material-icons text-sm">schedule</span> 3
                    min read
                  </span>
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors"
                >
                  <span className="material-icons text-lg">share</span> Share
                </button>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Flu Season 2025: Why the Vaccine is More Important Than Ever
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-serif italic border-l-4 border-green-500 pl-4">
                Protect yourself and your community. Here is everything you need
                to know about this year's flu strain.
              </p>
            </header>

            <div className="rounded-2xl overflow-hidden mb-12 shadow-card">
              <img
                src="/images/articles/article-6-hero.jpg"
                alt="Flu Vaccine"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <article className="prose prose-lg prose-slate max-w-none">
              <p>
                With winter fast approaching, health experts are predicting a
                potentially severe flu season. The relaxation of pandemic-era
                precautions means viruses are circulating more freely than in
                previous years.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                Who Should Get Vaccinated?
              </h2>
              <p>
                The CDC recommends that everyone 6 months of age and older get a
                flu vaccine every season. It is particularly crucial for:
              </p>
              <ul className="list-disc pl-5 my-4 space-y-2">
                <li>Adults 65 years and older</li>
                <li>Children younger than 5</li>
                <li>Pregnant people</li>
                <li>
                  People with chronic health conditions (asthma, heart disease,
                  diabetes)
                </li>
              </ul>
              <p>
                Vaccination not only reduces your risk of getting sick but also
                prevents hospitalization and death. It creates a community
                immunity barrier that protects those who cannot be vaccinated.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                What's Different This Year?
              </h2>
              <p>
                This season's vaccine has been updated to better match the
                circulating strains. EverLeaf Medical Center is offering flu
                shots at all our locations with no appointment needed. Our
                pharmacists and nurses are available to answer any questions
                about the vaccine's safety and efficacy.
              </p>

              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400 my-8">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  EverLeaf Flu Clinic Hours
                </h4>
                <p className="mb-0 text-sm">
                  Walk-in flu shots are available Monday–Saturday, 8am–6pm at
                  all EverLeaf locations. No appointment required. Most
                  insurance plans cover the cost at 100%.
                </p>
              </div>
            </article>

            <hr className="border-slate-200 my-12" />

            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <img
                src="/images/doctors/team-dr-bereket-kinfe.jpg"
                alt="Dr. Bereket Kinfe"
                className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Dr. Bereket Kinfe
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Infectious Disease Specialist
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dr. Kinfe is an expert in diagnosing and treating complex
                  infectious diseases. He leads EverLeaf's annual community
                  vaccination program and advises on seasonal flu prevention
                  strategies.
                </p>
                <div className="flex gap-3 justify-center sm:justify-start">
                  <a
                    href="#"
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
            <RelatedArticles
              currentId="flu-season"
              currentCategory="Health Tips"
            />

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">
                Subscribe to Updates
              </h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">
                Get seasonal health alerts delivered to your inbox.
              </p>
              <NewsletterForm variant="sidebar" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default FluSeason;
