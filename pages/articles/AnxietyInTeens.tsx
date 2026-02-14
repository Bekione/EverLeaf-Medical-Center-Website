
import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from '../../components/NewsletterForm';
import SEO from '../../components/SEO';

const AnxietyInTeens: React.FC = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Recognizing Anxiety in Teenagers',
          text: 'Important read for parents and guardians.',
          url: window.location.href,
        });
      } catch (err) { console.error('Error sharing:', err); }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      <SEO
        title="Recognizing Anxiety in Teenagers"
        description="A guide for parents on spotting the physical and emotional signs of anxiety disorders in adolescents."
        type="article"
        canonical="https://everleaf-medical.com/blog/anxiety-in-teens"
        image="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=1200&q=80"
      />
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500">
            <Link to="/" className="hover:text-primary transition-colors flex items-center"><span className="material-icons text-sm mr-1">home</span> Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Articles</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700 font-medium">Anxiety in Teens</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <header className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-purple-600 uppercase bg-purple-50 rounded-full border border-purple-100">Medical Awareness</span>
                  <span className="text-sm text-slate-500 flex items-center gap-1"><span className="material-icons text-sm">schedule</span> 6 min read</span>
                </div>
                <button onClick={handleShare} className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors"><span className="material-icons text-lg">share</span> Share</button>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">Recognizing the Early Signs of Anxiety in Teenagers</h1>
              <p className="text-xl text-slate-600 leading-relaxed font-serif italic border-l-4 border-purple-500 pl-4">Mental health is just as important as physical health. Learn how to spot the subtle signs of anxiety in adolescents.</p>
            </header>

            <div className="rounded-2xl overflow-hidden mb-12 shadow-card">
              <img src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=1200&q=80" alt="Teenager deep in thought" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            <article className="prose prose-lg prose-slate max-w-none">
              <p>Adolescence is a time of significant change, and some moodiness is normal. However, anxiety disorders are becoming increasingly common among teenagers. Identifying the symptoms early can lead to better outcomes and prevent long-term struggles.</p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Physical vs. Emotional Symptoms</h2>
              <p>Anxiety doesn't just manifest as worry. In teens, it often presents physically. Parents should look out for unexplained complaints such as:</p>
              <ul className="space-y-4 list-none pl-0 my-6">
                <li className="flex items-start gap-3"><span className="material-icons text-purple-500 mt-1">lens</span> <span>Frequent headaches or stomach aches without a medical cause.</span></li>
                <li className="flex items-start gap-3"><span className="material-icons text-purple-500 mt-1">lens</span> <span>Changes in sleep patterns (insomnia or oversleeping).</span></li>
                <li className="flex items-start gap-3"><span className="material-icons text-purple-500 mt-1">lens</span> <span>Sudden drop in grades or avoidance of social situations.</span></li>
              </ul>

              <p>Emotional signs might include irritability, restlessness, or an intense fear of making mistakes.</p>

              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400 my-8">
                <h4 className="text-lg font-bold text-slate-900 mb-2">When to Seek Help</h4>
                <p className="mb-0 text-sm">If anxiety interferes with daily activities, school work, or relationships for more than two weeks, it is advisable to consult a professional psychologist or psychiatrist.</p>
              </div>
            </article>

            <hr className="border-slate-200 my-12" />

            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop" alt="Dr. Rachel Green" className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Dr. Rachel Green</h3>
                <p className="text-primary font-medium text-sm mb-3">Clinical Psychologist</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dr. Green specializes in adolescent mental health and cognitive behavioral therapy. She works closely with families to create supportive environments for teens facing anxiety and depression.
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
                <Link to="/blog/pediatric-wing" className="group flex gap-4 items-start">
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&h=150&fit=crop" alt="Pediatric Wing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <span className="text-xs text-red-600 font-semibold uppercase tracking-wider mb-1 block">News</span>
                    <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">New Pediatric Wing Opens</h4>
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
                <Link to="/blog/immune-system" className="group flex gap-4 items-start">
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=150&h=150&fit=crop" alt="Immune System" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <span className="text-xs text-green-600 font-semibold uppercase tracking-wider mb-1 block">Health Tips</span>
                    <h4 className="font-bold text-slate-800 leading-snug group-hover:text-primary transition-colors text-sm font-serif">5 Superfoods for Immunity</h4>
                  </div>
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Subscribe to Updates</h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">Get mental health resources delivered to your inbox.</p>
              <NewsletterForm variant="sidebar" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AnxietyInTeens;
