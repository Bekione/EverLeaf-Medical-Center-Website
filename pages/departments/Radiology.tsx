
import React from 'react';
import { Link } from 'react-router-dom';

const Radiology: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUlv1h4PM_fMPlQ2UqSwrLQGPYZDy7LUEQ3r6RV3YSvFNRsj0oRDqnjf07e89npcMYNnZmWhjjTcA5NlaKk4tkCLEQW8czEw98eOXEJq1KjQm4olbk_kKPDBSR5U5OOa5bFV-QDMVNfJEACEFBw16AfeNHi2sakl0Maitlq4s8H5AbtEyBCZTgRV8CWRc55wYnUGeJsy9_CBSgTlLvYUCyFDogTcGMFHKteYEgiDmg-ttzN1AQQI4gq8m7AETX50ZGJf4-jitGR3I" alt="Advanced MRI Scanner Room" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-blue-300 font-semibold tracking-wide uppercase text-sm">
              <span className="material-symbols-outlined text-lg">radiology</span>
              <span>Department of Radiology</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">Advanced Imaging &<br/>Diagnostics</h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Utilizing state-of-the-art technology to provide crystal-clear insights for precise diagnoses. From routine X-rays to advanced MRI scans, your health is our focus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5">
                Schedule a Scan
              </Link>
              <a href="#procedures" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all">
                View Procedures
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="mb-20" id="procedures">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">High-Resolution Medical Imaging</h2>
              <p className="text-slate-600">Our center is equipped with the latest generation of imaging technology, ensuring high fidelity results and patient comfort.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'MRI Scans', desc: 'Detailed imaging of organs and soft tissues without radiation. Ideal for neurological and musculoskeletal conditions.', tag: '3T MRI', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP3pKyvokGKf6VAGTliLalMjc2zETAwEJDiEXT8XeUJuOp57jdiNBjVYp8h4liOF7LNP4TcZ5oD75GNkn76JnEire6VotSj6Oql6q-oJbPlPzNN4fN9bwRZypIDVAp-LzjMWbMlpkUwM5cfmA0xD_5pQ8Z60vW9KgPJknyi6M50kcZJeHqXfU8FTUUvR811T3JlEPgV2lNnDipoLVpSGuNIQgqoWBzFwL9I8B7OVwafouA57aNC7lWm43k-ZBR_FLJP5mM1mk1Kho', color: 'primary' },
                { title: 'CT Scans', desc: 'Fast, high-resolution cross-sectional images. Essential for trauma assessment, oncology, and vascular analysis.', tag: '64-Slice CT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9AlN3m1ej-3nB9V2mBwigNcxUCMRA9_dNsB7EeTsGFFHjTwWJu1mgbeBvhWKOH08sMAgVtsXre4Ghu06chARbr3T12JiVO-wrpgFMZG9wy0JNg-BJMshyw0qgSE7k_-f-NXifWlfqavBAL8cLpp2fuYvKZ3oriKc6gW9rpOuOb3DO4hevd_s9DpmFQtgAnlf7YBTxeL6CsQE79lutJ9mXvii17Qk_0mH6JZ04LMSC-hdujPhay_3-BSFfJyntgqJn6Yej2Az-3Hs', color: 'teal-600' },
                { title: 'Ultrasound', desc: 'Real-time imaging using sound waves. Used extensively for pregnancy, cardiac health, and abdominal exams.', tag: '4D Ultrasound', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEQa5uz5E_xzc5uKdjOlgl_pQsJ0BODaOiqqKFsNZFCLN85oE32a9wztIIDG-s8F9VpyQo88dbE2FD9nFhgsHj3d8JJV0QXJwrB1HlH2cF2Gs89zP_wzmXZTeXfNqpCLFERrskqroKec6lisifoKH7sjbPJNSC9mvbran7COxtSzvolt7hatXZKU-JkH7KMcQIy1ioKNjUFnJbbbS3eom-C9Osw2PE5JCl7AMdi3N4_H_kZc_UjTjjz0Ip7bu_CHfd0nM3Af41uqc', color: 'indigo-600' },
                { title: 'Digital X-Ray', desc: 'Advanced digital radiography for quick bone assessments and chest imaging with significantly reduced radiation.', tag: 'Low Dose', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoBKTSCOMzjWd8IdiLg3x4jvXKP1OLj5zSVLL-K69LbE7uMq39ROyVcnMcDv94hwyg9-hm_750k9BbIkMVR2h6qLhTBWKwdHLOyz7jwt5T858QqXQG6XYnGSqONtCJeqQYE6VLg8sMDYptiUjcnKlXxGgCc72OQ7SJCZN5A6Z56wCmvuht-hZ3roDSCXZM3UNUAy1do0Z-vcBTbSOWxkOMyo5HKN7P_tkP_wrVz364IRj2TxKZ8vQHZLiAbOeQZXu_QXCGfq1G0uI', color: 'purple-600' }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group">
                  <div className="h-48 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className={`absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-${item.color}`}>{item.tag}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm mb-4">{item.desc}</p>
                    <Link to="#" className="text-primary font-semibold text-sm hover:underline inline-flex items-center">Learn details <span className="material-icons text-sm ml-1">arrow_forward</span></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-slate-100 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">biotech</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Specialized Radiology</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Interventional Radiology</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">Minimally invasive image-guided procedures to diagnose and treat diseases in nearly every organ system.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-slate-600"><span className="material-icons text-secondary text-base mr-2">check_circle</span> Biopsies</li>
                    <li className="flex items-center text-sm text-slate-600"><span className="material-icons text-secondary text-base mr-2">check_circle</span> Angiography</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2">Women's Imaging</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">Dedicated suite for mammography, breast ultrasound, and bone density scanning (DEXA) in a private setting.</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-slate-600"><span className="material-icons text-secondary text-base mr-2">check_circle</span> 3D Mammography</li>
                    <li className="flex items-center text-sm text-slate-600"><span className="material-icons text-secondary text-base mr-2">check_circle</span> DEXA Scans</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-slate-500 italic text-sm">"Our radiologists are board-certified and sub-specialty trained, ensuring the highest level of expertise for your interpretation."</p>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white text-indigo-600 flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-2xl">shield</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900">Safety First</h2>
              </div>
              <h3 className="font-semibold text-slate-800 mb-3">Low-Radiation Protocols</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                We adhere to the ALARA principle (As Low As Reasonably Achievable). Our equipment uses dose-reduction software to ensure you receive the lowest radiation possible without compromising image quality.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <div className="flex items-start gap-3">
                  <span className="material-icons text-secondary mt-1">verified</span>
                  <div>
                    <span className="block font-bold text-sm text-slate-900">ACR Accredited</span>
                    <span className="text-xs text-slate-500">American College of Radiology</span>
                  </div>
                </div>
              </div>
              <Link to="#" className="text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors flex items-center">Read Safety Guidelines <span className="material-icons text-sm ml-1">open_in_new</span></Link>
            </div>
          </div>

          <div className="bg-primary rounded-3xl overflow-hidden relative shadow-lg">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
            <div className="grid md:grid-cols-2 items-center relative z-10">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Accessing Your Results</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Your imaging results and radiologist reports are available securely online through our Patient Portal, usually within 24-48 hours of your exam.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 p-1.5 rounded-full"><span className="material-icons text-sm">lock</span></span>
                    <span>Secure & Private Access</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 p-1.5 rounded-full"><span className="material-icons text-sm">history</span></span>
                    <span>View Exam History</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/20 p-1.5 rounded-full"><span className="material-icons text-sm">share</span></span>
                    <span>Share with Specialists</span>
                  </li>
                </ul>
                <Link to="/portal" className="inline-flex items-center px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors">
                  Login to Portal
                </Link>
              </div>
              <div className="h-64 md:h-full relative bg-slate-800">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Y9XTHx5BFsruCWtx4KsF1_v3m0LRNnWi-FF6vRSfah00rDGcKYMqrkUt1JzuyyhTiETnxeb7xPtokaP3nc_0XUp95n5ViBbIuAHJPmpLYsJOGMZOGQwV2dCUBmRyO7Fn7pgMAz_sPtuTXdWEfV3puV8WTaIMu-BGbylCpdzc8-jlwPpPXzcqOlJJE2cLx37LP_5k8o8gdYyxw8qZAN8SIrIaf5osdvIR73dkHYVbhr8w0dINkWvcEySurQ-EuxgIXw4CIKrolNo" alt="Doctor reviewing digital scan" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/80 md:to-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Radiology;
