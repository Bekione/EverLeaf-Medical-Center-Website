
import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  { id: 1, title: 'New Breakthrough in Diabetes Management Using AI Technology', category: 'Research', date: 'Nov 12, 2023', read: '5 min read', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80', author: 'Dr. Mark Johnson' },
  { id: 2, title: '5 Superfoods to Boost Your Immune System This Winter', category: 'Health Tips', date: 'Nov 08, 2023', read: '4 min read', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80', author: 'Emily Lewis, RD' },
  { id: 3, title: 'MediCare Opens New Pediatric Wing in West Wing', category: 'Announcements', date: 'Nov 01, 2023', read: '2 min read', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80', author: 'Admin Team' },
  { id: 4, title: 'Recognizing the Early Signs of Anxiety in Teenagers', category: 'Medical Awareness', date: 'Oct 28, 2023', read: '6 min read', img: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=800&q=80', author: 'Dr. James Wilson' },
  { id: 5, title: 'Flu Season 2023: Why the Vaccine is More Important Than Ever', category: 'Health Tips', date: 'Oct 15, 2023', read: '3 min read', img: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&q=80', author: 'Karen Lee, RN' },
  { id: 6, title: 'Mobility in Seniors: The Link Between Walking and Cognitive Health', category: 'Research', date: 'Oct 10, 2023', read: '7 min read', img: 'https://images.unsplash.com/photo-1555814965-74d430d12197?w=800&q=80', author: 'Dr. Robert Turner' },
];

const Blog: React.FC = () => {
  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      {/* Featured Article Hero */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80" alt="Featured Article" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-20 lg:py-28 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span> Featured Article
            </span>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              Understanding Preventive Cardiology: <br/> <span className="text-primary">A Guide to Heart Health</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Heart disease remains the leading cause of death globally. Learn about the latest preventive measures, dietary changes, and screening protocols recommended by our top cardiologists.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">DR</div>
                <div>
                  <p className="text-sm font-semibold text-white">Dr. Sarah Reynolds</p>
                  <p className="text-xs text-slate-400">Chief of Cardiology</p>
                </div>
              </div>
              <div className="h-8 w-px bg-slate-700"></div>
              <div className="text-sm text-slate-400 flex items-center gap-2">
                <span className="material-icons text-base">calendar_today</span> October 24, 2023
              </div>
              <div className="text-sm text-slate-400 flex items-center gap-2">
                <span className="material-icons text-base">schedule</span> 8 min read
              </div>
            </div>
            <Link to="/blog/preventive-cardiology" className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors border-b-2 border-primary pb-0.5">
              Read Full Article <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 md:mb-0">Latest Health Insights</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-md">All Articles</button>
            <button className="px-4 py-2 rounded-full bg-white text-slate-600 hover:bg-slate-100 hover:text-primary transition-colors text-sm font-medium border border-slate-200">Health Tips</button>
            <button className="px-4 py-2 rounded-full bg-white text-slate-600 hover:bg-slate-100 hover:text-primary transition-colors text-sm font-medium border border-slate-200">Announcements</button>
            <button className="px-4 py-2 rounded-full bg-white text-slate-600 hover:bg-slate-100 hover:text-primary transition-colors text-sm font-medium border border-slate-200">Research</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group border border-slate-100 flex flex-col h-full">
              <div className="relative h-56 overflow-hidden">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-wider rounded-md shadow-sm ${
                    article.category === 'Research' ? 'text-primary' : 
                    article.category === 'Health Tips' ? 'text-secondary' : 
                    article.category === 'Announcements' ? 'text-red-500' : 'text-purple-600'
                  }`}>
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
                      {article.author.split(' ').map(n => n[0]).join('').slice(0,2)}
                    </div>
                    <span className="text-xs font-medium text-slate-700">{article.author}</span>
                  </div>
                  <Link to={`/blog/${article.id}`} className="text-primary hover:text-primary-dark p-2 rounded-full hover:bg-blue-50 transition-colors">
                    <span className="material-icons text-xl">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">
              <span className="material-icons text-sm">chevron_left</span>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white shadow-md">1</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">2</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">3</button>
            <span className="px-2 text-slate-400">...</span>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">8</button>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors">
              <span className="material-icons text-sm">chevron_right</span>
            </button>
          </nav>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-3xl p-10 md:p-16 relative overflow-hidden text-center md:text-left shadow-2xl">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-blue-900 opacity-20 rounded-full blur-2xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Informed, Stay Healthy</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Subscribe to our monthly newsletter for the latest medical news, health tips, and upcoming events at MediCare Center.
                </p>
              </div>
              <div className="md:w-1/2 w-full max-w-md">
                <form className="flex flex-col sm:flex-row gap-3">
                  <input type="email" className="w-full px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300 border-none shadow-lg placeholder:text-slate-400" placeholder="Enter your email address" />
                  <button type="button" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
                <p className="text-blue-200 text-xs mt-4 text-center sm:text-left">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
