
import React from 'react';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      <SEO
        title="Privacy Policy & Terms"
        description="Read about how Everleaf Medical Center protects your personal and medical data."
        canonical="https://everleaf-medical.com/privacy"
        type="article"
      />
      <header className="bg-white border-b border-slate-100 py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
              Legal Documentation
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Privacy Policy & Terms of Service</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              We are committed to protecting your privacy and ensuring transparency in how we handle your data. Please read our terms and policies carefully.
            </p>
            <p className="text-sm text-slate-400 mt-4">Last updated: February 13, 2026</p>
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
                  <a href="#terms-of-use" onClick={(e) => scrollToSection(e, 'terms-of-use')} className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors">
                    Terms of Use
                  </a>
                  <a href="#medical-disclaimer" onClick={(e) => scrollToSection(e, 'medical-disclaimer')} className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors">
                    Medical Disclaimer
                  </a>
                  <a href="#data-protection" onClick={(e) => scrollToSection(e, 'data-protection')} className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors">
                    Data Protection
                  </a>
                  <a href="#info-collection" onClick={(e) => scrollToSection(e, 'info-collection')} className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors">
                    Information Collection
                  </a>
                  <a href="#patient-rights" onClick={(e) => scrollToSection(e, 'patient-rights')} className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors">
                    Patient Rights
                  </a>
                  <a href="#cookies" onClick={(e) => scrollToSection(e, 'cookies')} className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors">
                    Cookies Policy
                  </a>
                  <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors">
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
                    Welcome to Everleaf Medical Center ("we," "our," or "us"). This page contains our Terms of Service and Privacy Policy. By accessing our website, booking appointments, or using our services, you agree to comply with these terms and consent to our data practices.
                  </p>
                </div>

                <hr className="border-slate-100 mb-12" />

                <div id="terms-of-use" className="mb-12 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                      <span className="material-icons">gavel</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Terms of Use</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    By accessing this website, you accept these terms and conditions in full. Do not continue to use Everleaf Medical Center's website if you do not accept all of the terms and conditions stated on this page.
                  </p>
                  <ul className="space-y-3 text-slate-600 list-disc pl-5">
                    <li><strong>License:</strong> Unless otherwise stated, Everleaf Medical Center and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.</li>
                    <li><strong>User Conduct:</strong> You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</li>
                    <li><strong>Account Security:</strong> If you create an account or book an appointment, you are responsible for maintaining the confidentiality of your personal information and booking details.</li>
                  </ul>
                </div>

                <div id="medical-disclaimer" className="mb-12 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-50 rounded-lg text-red-600">
                      <span className="material-icons">warning</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Medical Disclaimer</h2>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                    <p className="text-slate-700 font-medium mb-2">Not Medical Advice</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      The content provided on this website, including blog articles, service descriptions, and other materials, is for informational purposes only. It is <strong>not intended to be a substitute for professional medical advice, diagnosis, or treatment.</strong> Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                    </p>
                    <p className="text-slate-600 text-sm mt-4">
                      <strong>In case of a medical emergency, call 911 immediately.</strong>
                    </p>
                  </div>
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
                    We adhere to the principles of data protection as set out in the General Data Protection Regulation (GDPR) and HIPAA guidelines. Your data will be:
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

                <div id="info-collection" className="mb-12 scroll-mt-32">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                      <span className="material-icons">folder_shared</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Information Collection</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We collect several different types of information for various purposes to provide and improve our Service to you.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">Personal Data</h4>
                      <p className="text-sm text-slate-600">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to: Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">Medical Data</h4>
                      <p className="text-sm text-slate-600">When you book an appointment or visit our facility, we collect health information necessary for your care. This is protected under strict medical privacy laws (HIPAA/GDPR).</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">Usage Data</h4>
                      <p className="text-sm text-slate-600">We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                    </div>
                  </div>
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
                      <span className="material-icons text-sm">phone</span> +251 954 123-456
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
