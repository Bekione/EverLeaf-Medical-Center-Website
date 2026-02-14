
import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { OpenAppointmentFunc } from '../../Layout';
import SEO from '../../components/SEO';

const Imaging: React.FC = () => {
  const { openAppointment } = useOutletContext<{ openAppointment: OpenAppointmentFunc }>();

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in">
      <SEO
        title="Diagnostic Imaging Center"
        description="High-resolution medical imaging including MRI, CT, and Ultrasound with rapid reporting."
        canonical="https://everleaf-medical.com/services/imaging"
      />
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUlv1h4PM_fMPlQ2UqSwrLQGPYZDy7LUEQ3r6RV3YSvFNRsj0oRDqnjf07e89npcMYNnZmWhjjTcA5NlaKk4tkCLEQW8czEw98eOXEJq1KjQm4olbk_kKPDBSR5U5OOa5bFV-QDMVNfJEACEFBw16AfeNHi2sakl0Maitlq4s8H5AbtEyBCZTgRV8CWRc55wYnUGeJsy9_CBSgTlLvYUCyFDogTcGMFHKteYEgiDmg-ttzN1AQQI4gq8m7AETX50ZGJf4-jitGR3I" alt="Advanced MRI Scanner Room" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-blue-300 font-semibold tracking-wide uppercase text-sm">
              <span className="material-icons text-lg">scanner</span>
              <span>Medical Imaging Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">Advanced Imaging &<br />Diagnostics</h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Utilizing state-of-the-art technology to provide crystal-clear insights for precise diagnoses. From routine X-rays to advanced MRI scans, your health is our focus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openAppointment({ department: 'Radiology' })}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5"
              >
                Schedule a Scan
              </button>
              <button
                onClick={(e) => scrollToSection(e, 'procedures')}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
              >
                View Procedures
              </button>
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
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-slate-100 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                  <span className="material-icons text-2xl">biotech</span>
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
                  <span className="material-icons text-2xl">shield</span>
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
            </div>
          </div>

          <div className="bg-primary rounded-3xl overflow-hidden relative shadow-lg">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
            <div className="grid md:grid-cols-2 items-center relative z-10">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Accessing Your Results</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Your imaging results and radiologist reports are available securely online. Please contact our reception for access details.
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
                <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors">
                  Request Results
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

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Conditions We Treat</h2>
            <p className="text-slate-600">Our imaging capabilities allow us to detect and monitor a wide range of medical conditions with exceptional clarity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4">
                <span className="material-icons text-2xl">accessibility_new</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fracture Detection</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Precise identification of bone fractures, dislocations, and joint abnormalities using high-resolution X-rays.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500 mb-4">
                <span className="material-icons text-2xl">biotech</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tumor Screening</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Early detection and staging of tumors in soft tissues and organs through advanced MRI and CT scanning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4">
                <span className="material-icons text-2xl">favorite</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cardiovascular Imaging</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Detailed visualization of heart structure and blood flow to identify blockages and heart conditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-500 mb-4">
                <span className="material-icons text-2xl">healing</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Organ Health</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Comprehensive assessment of internal organs including liver, kidneys, and lungs for function and pathology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Expertise</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mt-2">Services & Procedures</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-soft transition-all duration-300 bg-white group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-icons text-3xl">image</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Digital X-Ray</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  High-resolution digital radiography for quick and accurate assessment of bones and chest with minimal radiation exposure.
                </p>
                <ul className="text-sm space-y-1 text-slate-500">
                  <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check</span> Instant Results</li>
                  <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check</span> Low Dose Radiation</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-soft transition-all duration-300 bg-white group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                  <span className="material-icons text-3xl">female</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">3D Mammography</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Advanced tomosynthesis technology that provides a three-dimensional view of breast tissue for earlier cancer detection.
                </p>
                <ul className="text-sm space-y-1 text-slate-500">
                  <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check</span> Increased Accuracy</li>
                  <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check</span> Comfortable Design</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-soft transition-all duration-300 bg-white group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                  <span className="material-icons text-3xl">all_inclusive</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">MRI (Magnetic Resonance Imaging)</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Detailed imaging of soft tissues, organs, and the nervous system using strong magnetic fields and radio waves.
                </p>
                <ul className="text-sm space-y-1 text-slate-500">
                  <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check</span> Wide-Bore Options</li>
                  <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check</span> Contrast Enhanced</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-soft transition-all duration-300 bg-white group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <span className="material-icons text-3xl">donut_large</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">CT Scans (Computed Tomography)</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Cross-sectional images of the body used to diagnose complex conditions, guide biopsies, and monitor treatment effectiveness.
                </p>
                <ul className="text-sm space-y-1 text-slate-500">
                  <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check</span> 64-Slice Technology</li>
                  <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check</span> Low-Dose Protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" id="specialists">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">Our Team</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">Meet Our Radiologists</h2>
            </div>
            <Link to="/doctors" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
              View All Doctors <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Jenkins', role: 'Chief Radiologist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9BZuqUAA5IOvQMgXBQ8ryTLzC7vKg69xiTlytVe-76cUVW84Bp8VWOapyKoqbwUVVWBuN_FfxCcsqFq1ao_QGijkga86eRCQeYgiaWkGi7WtZIQPN8Q2vpj9P49F7WLoa7Y9f-Oj_nR-hQM4ZVF-Hxf-HLyzlW5kk3Rk-ANh7DNvIi720KTGderseW5cc8dF6H7Wx6PDoI9ce9GfwndlXLLz4CsQbzfWS0_34TQzB04eBNYZK-S8nSZOkgY3aUVNpbGCAWq_I9vs' },
              { name: 'Dr. Michael Chen', role: 'Interventional Radiologist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADGr580ge61fkfsxwBrM7N1TZyAY9Z-GTpjBUo_xK5lWfakoEU_qOziiT-so6DMVRYMjRbu0nVW-k1DcZ572-UwSxJBbHFxL921KxZ6v5xbrKCJfSDGPfGIKJ2lnbzJo8rsumPzZ1VnlvNztje35dbZ8OjoskrJoJWMwL2xyEuWVfFxTxZWLkj3322_nwECoDQOhnBsfJT-uJdBuBYvHW7tZFnkW3TihhkEKyTi4ionW16tPVhP7_Msgmo2tYXI-H3mW5DhYbZYTk' },
              { name: 'Dr. Emily Rodriguez', role: 'Pediatric Radiologist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY7zDqNO2hoPrxpDGZpE92fSZkSGJgJi7hfuXKUusm09nz1u9rNHNBxuJ0N_t6HSXFbSkNan8ZuDt8AkK0PHqzsi4I6ipPzk2q3ALgTZVcC1uboMYQ6dZnjiBkO036p5ErpaA0vAjn6D8TivJDicjayQgEkLrG4PsZURfL7C-lOADFWh45AKVB0WfWyqvzWL5JcVEwzhhuOWO87RBPu2zcdEOcZJloL6qr9YD-oKjiSjrlq9KMwrQ9LL25SFVQnG3ZphZNrYFaNIs' }
            ].map((doc, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden relative">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button
                      onClick={() => openAppointment({ doctorName: doc.name, department: 'Radiology' })}
                      className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-full text-sm font-medium"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{doc.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" id="appointment">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">scanner</span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Precise Diagnostics
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready for Your <br /><span className="text-blue-300">Scan?</span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you need a routine screening or a complex diagnostic procedure, our radiology team is here to provide exceptional care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openAppointment({ department: 'Radiology' })}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-950 bg-white rounded-full hover:bg-blue-50 shadow-xl shadow-blue-900/20 transition-all hover:scale-105"
              >
                Request Appointment
              </button>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all">
                Doctor Referrals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imaging;
