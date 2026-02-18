import React from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "../../components/NewsletterForm";
import SEO from "../../components/SEO";
import RelatedArticles from "../../components/RelatedArticles";

const PediatricWing: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "EverLeaf Medical Center Opens New Pediatric Wing",
          text: "Exciting news from EverLeaf Medical Center!",
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
        title="New Pediatric Wing Opening"
        description="Announcing the opening of our new West Wing facility dedicated to family-centered pediatric care."
        type="article"
        canonical="https://everleaf-medical.com/blog/pediatric-wing"
        image="/images/articles/article-4-hero.jpg"
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
            <span className="text-slate-700 font-medium">
              New Pediatric Wing
            </span>
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
                    Announcements
                  </span>
                  <span className="text-sm text-slate-500 flex items-center gap-1">
                    <span className="material-icons text-sm">schedule</span> 2
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
                EverLeaf Medical Center Opens New Pediatric Wing in West Wing
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-serif italic border-l-4 border-red-500 pl-4">
                Designed with our youngest patients in mind, the new wing
                features state-of-the-art technology in a comforting
                environment.
              </p>
            </header>

            <div className="rounded-2xl overflow-hidden mb-12 shadow-card">
              <img
                src="/images/articles/article-4-hero.jpg"
                alt="New Pediatric Wing"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <article className="prose prose-lg prose-slate max-w-none">
              <p>
                We are thrilled to announce the official opening of the new
                Pediatric Wing located in the hospital's West Wing. This
                expansion represents a significant investment in the health and
                well-being of the children in our community.
              </p>
              <p>
                The new facility includes 50 private patient rooms, a dedicated
                pediatric emergency department, and specialized play therapy
                zones designed to reduce anxiety during hospital stays. Every
                room allows for parent overnight stays, recognizing that family
                presence is key to a child's recovery.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">
                Features of the New Wing
              </h2>
              <ul className="space-y-4 list-none pl-0 my-6">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-red-500 mt-1">
                    check_circle
                  </span>{" "}
                  <span>
                    <strong>Family-Centered Rooms:</strong> Spacious suites with
                    sleeping accommodations for parents.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-red-500 mt-1">
                    check_circle
                  </span>{" "}
                  <span>
                    <strong>Interactive Play Areas:</strong> Technology-free
                    zones to encourage imaginative play.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-red-500 mt-1">
                    check_circle
                  </span>{" "}
                  <span>
                    <strong>Advanced Monitoring:</strong> The latest in
                    non-invasive pediatric monitoring systems.
                  </span>
                </li>
              </ul>

              <p>
                "This new wing allows us to provide the highest level of medical
                care while acknowledging that children need a different kind of
                environment to heal effectively. Every detail, from the art on
                the walls to the lighting, was chosen to comfort our patients,"
                says Dr. Emily Chen.
              </p>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400 my-8">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Visit Us
                </h4>
                <p className="mb-0 text-sm">
                  The new Pediatric Wing is now open and accepting patients.
                  Tours for families are available every Saturday morning.
                  Contact our pediatrics department to schedule a visit.
                </p>
              </div>
            </article>

            <hr className="border-slate-200 my-12" />

            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <img
                src="/images/doctors/team-dr-emily-chen.jpg"
                alt="Dr. Emily Chen"
                className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Dr. Emily Chen
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  Head of Pediatrics
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dr. Chen has been advocating for child-friendly healthcare
                  environments for over a decade. She oversaw the design and
                  implementation of the new pediatric wing from the ground up.
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
              currentId="pediatric-wing"
              currentCategory="Announcements"
            />

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">
                Subscribe to Updates
              </h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">
                Stay updated with hospital news and community events.
              </p>
              <NewsletterForm variant="sidebar" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PediatricWing;
