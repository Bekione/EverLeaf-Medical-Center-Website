
import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { OpenAppointmentFunc } from '../../Layout';

const Radiology: React.FC = () => {
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
      <header className="bg-white border-b border-slate-100 py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
                Department of Radiology
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                State-of-the-Art <br/><span className="text-primary">Diagnostic Imaging</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                Our Radiology Department utilizes advanced imaging technology to provide precise diagnoses. We prioritize patient comfort and safety while delivering high-quality visual data.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => openAppointment({ department: 'Radiology' })}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-blue-500/30 hover:-translate-y-1"
                >
                  Book Imaging Appointment
                </button>
                <button 
                  onClick={(e) => scrollToSection(e, 'specialists')}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all"
                >
                  Meet Our Radiologists
                </button>
              </div>
            </div>
            <div className="relative hidden lg:flex w-full justify-center">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[450px] w-full max-w-lg">
                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" alt="Advanced Radiology" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-fade-in hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-50 p-3 rounded-full text-blue-600">
                    <span className="material-icons text-2xl">biotech</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">High-Res</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Imaging</p>
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
                <span className="material-icons text-2xl">accessibility</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fracture Detection</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Precise identification of bone fractures, dislocations, and joint abnormalities using high-resolution X-rays.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500 mb-4">
                <span className="material-icons text-2xl">science</span>
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
            <Link to="/services/imaging" className="hidden md:inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors mt-4 md:mt-0">
              View Full Service List <span className="material-icons ml-2">arrow_forward</span>
            </Link>
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
                  <span className="material-icons text-3xl">face</span>
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
                  <span className="material-icons text-3xl">donut_large</span>
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
                  <span className="material-icons text-3xl">data_usage</span>
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
                      <span className="material-icons text-2xl text-blue-400">psychology</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-1">AI-Assisted Imaging Analysis</h4>
                      <p className="text-sm text-slate-400">Utilizing artificial intelligence to assist radiologists in detecting subtle abnormalities earlier and more accurately.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-lg">
                      <span className="material-icons text-2xl text-emerald-400">security</span>
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

      <section className="py-24 relative overflow-hidden" id="appointment">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        
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
              Ready for Your <br/><span className="text-blue-300">Scan?</span>
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

export default Radiology;
