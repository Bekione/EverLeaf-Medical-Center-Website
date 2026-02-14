import React, { useState } from 'react';
import { submitForm } from '../utils/formService';

interface NewsletterFormProps {
  variant?: 'sidebar' | 'section';
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ variant = 'sidebar' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('submitting');
    try {
      await submitForm({ email }, 'newsletter');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className={`rounded-lg p-4 text-center ${variant === 'section' ? 'bg-blue-500/20' : 'bg-white/10'} backdrop-blur-sm animate-fade-in`}>
        <span className="material-icons text-3xl mb-2 block text-white">check_circle</span>
        <p className="font-bold text-white">Thanks for subscribing!</p>
        <p className="text-xs text-blue-100 opacity-90">Watch your inbox for our latest updates.</p>
        <button onClick={() => setStatus('idle')} className="text-xs text-white underline mt-2 hover:opacity-80">Subscribe another email</button>
      </div>
    );
  }

  const inputClasses = variant === 'section'
    ? "w-full rounded-lg border-0 backdrop-blur-sm focus:ring-2 focus:ring-white mb-0 px-6 py-4 text-slate-900 shadow-xl placeholder:text-slate-400 bg-white/95 focus:ring-blue-500/30"
    : "w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:ring-2 focus:ring-white mb-3 px-4 py-2";

  const buttonClasses = variant === 'section'
    ? "px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/30 whitespace-nowrap hover:scale-105 disabled:opacity-70 disabled:cursor-wait"
    : "w-full bg-white text-primary font-bold py-2 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-70 disabled:cursor-wait";

  const containerClasses = variant === 'section' ? "max-w-lg mx-auto flex flex-col sm:flex-row gap-4 relative z-10" : "relative z-10";

  return (
    <form onSubmit={handleSubmit} className={containerClasses}>
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === 'submitting'}
        className={inputClasses}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={buttonClasses}
      >
        {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
};

export default NewsletterForm;