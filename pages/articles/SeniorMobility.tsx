import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "../../components/NewsletterForm";
import SEO from "../../components/SEO";
import RelatedArticles from "../../components/RelatedArticles";

const SeniorMobility: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Mobility and Cognitive Health in Seniors",
          text: "New research on the link between walking and brain health.",
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
        title="Mobility & Cognitive Health in Seniors"
        description="New research highlights the vital link between walking speed, physical activity, and brain health in older adults."
        type="article"
        canonical="https://everleaf-medical.com/blog/senior-mobility"
        image="/images/articles/article-7-hero.jpg"
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
            <span className="text-slate-700 font-medium">Senior Mobility</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <header className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                    Research
                  </span>
                  <span className="text-sm text-slate-500 flex items-center gap-1">
                    <span className="material-icons text-sm">schedule</span> 7
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
                Mobility in Seniors: The Link Between Walking and Cognitive
                Health
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-serif italic border-l-4 border-blue-500 pl-4">
                New studies suggest that maintaining physical mobility may be a
                key factor in preserving memory and cognitive function in older
                adults.
              </p>
            </header>

            <div className="rounded-2xl overflow-hidden mb-12 shadow-card">
              <img
                src="/images/articles/article-7-hero.jpg"
                alt="Senior Walking"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <article className="prose prose-lg prose-slate max-w-none">
              <p>
                For years, doctors have known that exercise is good for the
                brain. However, recent research specifically highlights the
                connection between gait speed (how fast you walk) and the onset
                of dementia.
              </p>
              <p>
                The study, published in the Journal of Geriatric Medicine,
                followed 1,000 seniors over five years. It found that those who
                maintained a brisk walking pace were 40% less likely to develop
                cognitive impairment compared to those whose gait slowed
                significantly.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                Why Movement Matters
              </h2>
              <p>
                Walking requires complex coordination between the brain, nervous
                system, and muscles. A decline in this ability often signals
                underlying neurological changes before memory loss becomes
                apparent.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-400 my-8">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Doctor's Advice
                </h4>
                <p className="mb-0 text-sm">
                  "Don't stop moving. Even a 20-minute daily walk can stimulate
                  neurogenesis—the creation of new brain cells," says Dr. Robert
                  Turner.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                Practical Steps to Stay Mobile
              </h2>
              <ul className="space-y-3 my-6">
                <li>
                  <strong>Daily walks:</strong> Aim for at least 20–30 minutes
                  of brisk walking each day.
                </li>
                <li>
                  <strong>Balance exercises:</strong> Yoga and tai chi improve
                  coordination and reduce fall risk.
                </li>
                <li>
                  <strong>Strength training:</strong> Light resistance exercises
                  preserve muscle mass critical for mobility.
                </li>
                <li>
                  <strong>Regular check-ups:</strong> Gait speed assessments at
                  EverLeaf can detect early decline.
                </li>
              </ul>
            </article>

            <hr className="border-slate-200 my-12" />

            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <img
                src="/images/doctors/team-dr-sarah-johnson.jpg"
                alt="Dr. Sarah Johnson"
                className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Dr. Sarah Johnson
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Senior Neurologist
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dr. Johnson specializes in complex neurological disorders with
                  over 15 years of experience. Her research focuses on the
                  connection between physical mobility and cognitive health in
                  aging adults.
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
              currentId="senior-mobility"
              currentCategory="Research"
            />

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">
                Subscribe to Updates
              </h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">
                Get the latest research delivered to your inbox.
              </p>
              <NewsletterForm variant="sidebar" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default SeniorMobility;
