
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <header className="bg-white border-b border-slate-100 py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
              Legal Documentation
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Privacy Policy & Terms</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              We are committed to protecting your privacy and ensuring transparency in how we handle your data. Please read our terms carefully.
            </p>
            <p className="text-sm text-slate-400 mt-4">Last updated: October 24, 2023</p>
          </div>
        </div>
      </header>

      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="w-full lg:w-1/4">
              <div className="sticky top-32 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="material-icons text-primary text-xl">toc</span> Table of Contents
                </h3>
                <nav className="space-y-1">
                  <a href="#data-protection" className="flex items-center justify-between px-3 py-2 text-sm font-medium text-primary bg-blue-50 rounded-md transition-colors">
                    Data Protection <span className="material-icons text-xs">chevron_right</span>
                  </a>
                  <a href="#patient-rights" className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-md transition-colors">
                    Patient Rights
                  </a>
                  <a href="#info-collection" className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-md transition-colors">
                    Information Collection
                  </a>
                  <a href="#cookies" className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-md transition-colors">
                    Cookies Policy
                  </a>
                  <a href="#contact" className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-md transition-colors">
                    Contact Information
                  </a>
                </nav>
              </div>
            </aside>

            <main className="w-full lg:w-3/4">
              <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-8 md:p-12">
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Welcome to Everleaf Medical Center ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    By using our services, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
                  </p>
                </div>

                <hr className="border-slate-100 mb-12" />

                <div id="data-protection" className="mb-12 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-50 rounded-lg text-primary">
                      <span className="material-icons">shield</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Data Protection Principles</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    We adhere to the principles of data protection as set out in the General Data Protection Regulation (GDPR) and other relevant healthcare privacy laws. Your data will be:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-icons text-green-500 mt-1 text-sm">check_circle</span>
                      <span className="text-slate-600">Processed lawfully, fairly, and in a transparent manner.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-icons text-green-500 mt-1 text-sm">check_circle</span>
                      <span className="text-slate-600">Collected for specified, explicit, and legitimate purposes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-icons text-green-500 mt-1 text-sm">check_circle</span>
                      <span className="text-slate-600">Adequate, relevant, and limited to what is necessary.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-icons text-green-500 mt-1 text-sm">check_circle</span>
                      <span className="text-slate-600">Kept accurate and up to date.</span>
                    </li>
                  </ul>
                </div>

                <div id="patient-rights" className="mb-12 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                      <span className="material-icons">accessibility_new</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Your Rights as a Patient</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Under data protection law, you have rights including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Right of Access</h4>
                      <p className="text-sm text-slate-600">You have the right to ask us for copies of your personal medical information.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Right to Rectification</h4>
                      <p className="text-sm text-slate-600">You have the right to ask us to rectify personal information you think is inaccurate.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Right to Erasure</h4>
                      <p className="text-sm text-slate-600">You have the right to ask us to erase your personal information in certain circumstances.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-2">Right to Restriction</h4>
                      <p className="text-sm text-slate-600">You have the right to ask us to restrict the processing of your personal information.</p>
                    </div>
                  </div>
                </div>

                <div id="cookies" className="mb-12 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-yellow-50 rounded-lg text-yellow-600">
                      <span className="material-icons">cookie</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Cookies Policy</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                  </p>
                </div>

                <div id="contact" className="bg-blue-50 p-8 rounded-xl scroll-mt-32">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Questions about our Privacy Policy?</h3>
                  <p className="text-slate-600 mb-6">
                    If you have any questions about this Privacy Policy, please contact us. Our dedicated data protection officer will be happy to assist you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:privacy@everleaf.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-primary hover:text-primary transition-colors font-medium">
                      <span className="material-icons text-sm">email</span> privacy@everleaf.com
                    </a>
                    <a href="tel:+15551234567" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-primary hover:text-primary transition-colors font-medium">
                      <span className="material-icons text-sm">phone</span> +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
