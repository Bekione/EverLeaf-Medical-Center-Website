
import React from 'react';
import { Link } from 'react-router-dom';

const Radiology: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="bg-white border-b border-slate-100 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: "radial-gradient(#136dec 0.5px, transparent 0.5px), radial-gradient(#136dec 0.5px, #f6f7f8 0.5px)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px"}}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
                Department of Radiology
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                State-of-the-Art <br/><span className="text-primary">Diagnostic Imaging</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our Radiology Department utilizes advanced imaging technology to provide precise diagnoses and guide effective treatment plans. We prioritize patient comfort and safety while delivering high-quality visual data to your care team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-blue-500/30 hover:-translate-y-1">
                  Book Imaging Appointment
                </Link>
                <a href="#specialists" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
                  Meet Our Radiologists
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-sm mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                    <div className="bg-blue-50 p-3 rounded-xl text-primary">
                      <span className="material-icons text-3xl">biotech</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Precision Diagnostics</h3>
                      <p className="text-xs text-slate-500">Advanced AI Analysis</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Scan Accuracy</span>
                      <span className="font-bold text-green-500">99.8%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '99%'}}></div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Processing Speed</span>
                      <span className="font-bold text-primary">Real-time</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Conditions We Treat</h2>
            <p className="text-slate-600">Our imaging capabilities allow us to detect and monitor a wide range of medical conditions with exceptional clarity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4">
                <span className="material-symbols-outlined text-2xl">orthopedics</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fracture Detection</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Precise identification of bone fractures, dislocations, and joint abnormalities using high-resolution X-rays.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500 mb-4">
                <span className="material-symbols-outlined text-2xl">oncology</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tumor Screening</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Early detection and staging of tumors in soft tissues and organs through advanced MRI and CT scanning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4">
                <span className="material-symbols-outlined text-2xl">cardiology</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Cardiovascular Imaging</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Detailed visualization of heart structure and blood flow to identify blockages and heart conditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-500 mb-4">
                <span className="material-symbols-outlined text-2xl">gastroenterology</span>
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
            <Link to="#" className="hidden md:inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors mt-4 md:mt-0">
              View Full Service List <span className="material-icons ml-2">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-soft transition-all duration-300 bg-white group">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">sensor_door</span>
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
                  <span className="material-symbols-outlined text-3xl">woman</span>
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
                  <span className="material-symbols-outlined text-3xl">all_inclusive</span>
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
                  <span className="material-symbols-outlined text-3xl">donut_large</span>
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
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Experts</span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mt-2">Meet Our Radiologists</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <span className="material-icons text-6xl opacity-20">person</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900">Dr. Sarah Jenkins</h3>
                <p className="text-primary font-medium text-sm mb-4">Chief Radiologist</p>
                <p className="text-slate-500 text-sm mb-6">Specializes in neuroradiology and advanced MRI diagnostics with over 15 years of experience.</p>
                <div className="flex justify-center gap-3">
                  <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons">email</span></button>
                  <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons">calendar_today</span></button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <span className="material-icons text-6xl opacity-20">person</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900">Dr. Michael Chen</h3>
                <p className="text-primary font-medium text-sm mb-4">Interventional Radiologist</p>
                <p className="text-slate-500 text-sm mb-6">Expert in minimally invasive image-guided procedures for vascular and oncologic conditions.</p>
                <div className="flex justify-center gap-3">
                  <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons">email</span></button>
                  <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons">calendar_today</span></button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <span className="material-icons text-6xl opacity-20">person</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-slate-900">Dr. Emily Rodriguez</h3>
                <p className="text-primary font-medium text-sm mb-4">Pediatric Radiologist</p>
                <p className="text-slate-500 text-sm mb-6">Dedicated to providing safe and gentle imaging services specifically tailored for children.</p>
                <div className="flex justify-center gap-3">
                  <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons">email</span></button>
                  <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons">calendar_today</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl border border-slate-700">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "24px 24px"}}></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Advanced Technology</h2>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  We invest in the latest imaging technology to ensure the highest quality results with the lowest possible risk to our patients. Our facility is equipped with next-generation scanners and software.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg text-primary-light">
                      <span className="material-symbols-outlined text-2xl text-blue-400">psychology</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-1">AI-Assisted Imaging Analysis</h4>
                      <p className="text-sm text-slate-400">Utilizing artificial intelligence to assist radiologists in detecting subtle abnormalities earlier and more accurately.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <span className="material-symbols-outlined text-2xl text-emerald-400">security</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-1">Low-Radiation Equipment</h4>
                      <p className="text-sm text-slate-400">Our CT and X-ray systems are optimized to reduce radiation dose by up to 60% without compromising image quality.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                    <span className="text-4xl font-bold text-primary block mb-2">24/7</span>
                    <span className="text-sm text-slate-300">Emergency Imaging</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                    <span className="text-4xl font-bold text-emerald-400 block mb-2">4k+</span>
                    <span className="text-sm text-slate-300">Scans Monthly</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center col-span-2">
                    <span className="text-4xl font-bold text-purple-400 block mb-2">100%</span>
                    <span className="text-sm text-slate-300">Digital Archives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white relative overflow-hidden" id="appointment">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready for your scan?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you need a routine screening or a complex diagnostic procedure, our radiology team is here to provide exceptional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-primary bg-white rounded-lg hover:bg-blue-50 shadow-lg transition-colors">
              Request Your Imaging Appointment
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
              Doctor Referrals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Radiology;
