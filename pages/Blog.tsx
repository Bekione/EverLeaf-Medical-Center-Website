import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewsletterForm from "../components/NewsletterForm";
import SEO from "../components/SEO";
import { articles as articlesData } from "../data/articles";

const ITEMS_PER_PAGE = 3;

const Blog: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter Logic
  const filteredArticles =
    filter === "All"
      ? articlesData
      : articlesData.filter((article) => article.category === filter);

  // Pagination Logic
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Research":
        return "text-primary bg-blue-50";
      case "Health Tips":
        return "text-secondary bg-green-50";
      case "Announcements":
        return "text-red-500 bg-red-50";
      case "Medical Awareness":
        return "text-purple-600 bg-purple-50";
      default:
        return "text-slate-600 bg-slate-100";
    }
  };

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <SEO
        title="Health Blog & News"
        description="Read the latest medical insights, health tips, and hospital announcements from the experts at Everleaf Medical Center."
        canonical="https://everleaf-medical.com/blog"
      />
      {/* Featured Article Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/blog-hero.jpg"
            alt="Featured Article"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>{" "}
              Featured Article
            </span>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              Understanding Preventive Cardiology: <br />{" "}
              <span className="text-primary">A Guide to Heart Health</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Heart disease remains the leading cause of death globally. Learn
              about the latest preventive measures, dietary changes, and
              screening protocols recommended by our top cardiologists.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                  DR
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Dr. Sarah Reynolds
                  </p>
                  <p className="text-xs text-slate-400">Chief of Cardiology</p>
                </div>
              </div>
              <div className="h-8 w-px bg-slate-700"></div>
              <div className="text-sm text-slate-400 flex items-center gap-2">
                <span className="material-icons text-base">calendar_today</span>{" "}
                October 24, 2023
              </div>
              <div className="text-sm text-slate-400 flex items-center gap-2">
                <span className="material-icons text-base">schedule</span> 8 min
                read
              </div>
            </div>
            <Link
              to="/blog/preventive-cardiology"
              className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors border-b-2 border-primary pb-0.5"
            >
              Read Full Article{" "}
              <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 md:mb-0">
            Latest Health Insights
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "All",
              "Health Tips",
              "Announcements",
              "Research",
              "Medical Awareness",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-primary border border-slate-200"
                }`}
              >
                {cat === "All" ? "All Articles" : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col h-full animate-fade-in"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 backdrop-blur-md text-xs font-bold uppercase tracking-wider rounded-md shadow-sm ${getCategoryColor(article.category)} bg-white/90`}
                  >
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-500 mb-3 space-x-2">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{article.read}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="pt-4 mt-auto border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold">
                      {article.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <span className="text-xs font-medium text-slate-700">
                      {article.author}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${article.id}`}
                    className="text-primary hover:text-primary-dark p-2 rounded-full hover:bg-blue-50 transition-colors"
                  >
                    <span className="material-icons text-xl">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {paginatedArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">
              No articles found in this category.
            </p>
            <button
              onClick={() => setFilter("All")}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              View All
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {filteredArticles.length > ITEMS_PER_PAGE && (
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="material-icons text-sm">chevron_left</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primary text-white shadow-md"
                        : "border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="material-icons text-sm">chevron_right</span>
              </button>
            </nav>
          </div>
        )}
      </section>

      {/* Revamped Newsletter Section */}
      <section className="py-24 relative overflow-hidden" id="newsletter">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Stay Connected
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Health Insights <br />
              <span className="text-blue-300">Delivered to You</span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Join over 50,000 subscribers who receive our latest medical news,
              health tips, and exclusive event invitations directly in their
              inbox.
            </p>
            <NewsletterForm variant="section" />
            <p className="text-blue-300 text-xs mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
