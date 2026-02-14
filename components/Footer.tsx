
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitForm } from '../utils/formService';
import { EverleafLogo } from './Logo';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('submitting');
    try {
      await submitForm({ email }, 'newsletter');
      setStatus('success');
      setEmail('');
    } catch (error) {
      // In a real app, handle error. For now, we just reset or stay in idle
      setStatus('idle');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                <EverleafLogo className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-brand font-semibold text-white leading-none">Everleaf</span>
                <span className="text-[10px] font-brand text-slate-400 tracking-[0.2em] uppercase mt-1">Medical Center</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Care That Grows With You. Committed to lifelong wellness through compassionate care, innovation, and trust.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><span className="material-icons text-sm">facebook</span></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><span className="material-icons text-sm">public</span></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><span className="material-icons text-sm">camera_alt</span></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Important Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons text-xs">chevron_right</span> About Us</Link></li>
              <li><Link to="/doctors" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons text-xs">chevron_right</span> Our Doctors</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons text-xs">chevron_right</span> Services</Link></li>
              <li><Link to="/departments" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons text-xs">chevron_right</span> Departments</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-2"><span className="material-icons text-xs">chevron_right</span> Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary mt-1">location_on</span>
                <span>123 Health Avenue, Medical District,<br/>Addis Abeba, AA 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary">phone</span>
                <span>+251 954 123-456</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary">email</span>
                <span>info@everleaf.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter to get the latest news and updates.</p>
            {status === 'success' ? (
              <div className="bg-green-500/20 border border-green-500/50 p-4 rounded-lg text-green-300 flex items-center gap-2 animate-fade-in">
                <span className="material-icons text-green-400">check_circle</span>
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-primary transition-colors disabled:opacity-50" 
                />
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 uppercase tracking-wide text-xs disabled:opacity-70 disabled:cursor-wait"
                >
                  {status === 'submitting' ? 'Subscribing...' : 'Subscribe'} 
                  {!status.startsWith('sub') && <span className="material-icons text-sm">send</span>}
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Everleaf Medical Center. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
