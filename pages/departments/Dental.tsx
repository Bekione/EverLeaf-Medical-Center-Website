
import React from 'react';
import { Link } from 'react-router-dom';

const Dental: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="bg-white border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-6">
                <Link to="/departments" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Departments</Link>
                <span className="material-icons text-slate-400 text-sm">chevron_right</span>
                <span className="text-sm font-medium text-primary">Dental Clinic</span>
              </div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-cyan-600 uppercase bg-cyan-50 rounded-full">
                World-Class Dentistry
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">Comprehensive Dental & <br/><span className="text-primary">Oral Healthcare</span></h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                Our specialized dental clinic combines advanced technology with compassionate care to ensure your smile is healthy and beautiful. From routine check-ups to complex oral surgeries, we cover all aspects of dental health.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 hover:-translate-y-0.5">
                  Book Dental Exam
                </Link>
                <a href="#specialists" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  Meet Our Dentists
                </a>
              </div>
            </div>
            <div className="flex-1 hidden md:block relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-cyan-100 to-blue-50 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-9xl text-white drop-shadow-lg" style={{fontSize: '12rem'}}>dentistry</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Conditions We Treat</h2>
            <p className="text-slate-600">We provide specialized treatments for a wide range of dental and oral health issues, restoring function and aesthetics.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Cavities & Decay', icon: 'sentiment_dissatisfied', color: 'orange', desc: 'Treatment of tooth decay with fillings, inlays, and onlays to restore tooth integrity.' },
              { title: 'Gum Disease', icon: 'water_drop', color: 'red', desc: 'Periodontal therapy to treat gingivitis and periodontitis, protecting your gum health.' },
              { title: 'Tooth Loss', icon: 'mood_bad', color: 'slate', desc: 'Restoration options including bridges, dentures, and implants for missing teeth.' },
              { title: 'Misalignment', icon: 'grid_4x4', color: 'purple', desc: 'Orthodontic solutions to correct crooked teeth and bite issues for children and adults.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-lg bg-${item.color}-100 text-${item.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Services & Procedures</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We offer a comprehensive suite of dental services tailored to your individual needs. Our goal is to provide pain-free, effective treatments using the latest techniques.
              </p>
              <Link to="#" className="text-primary font-semibold hover:text-primary-dark inline-flex items-center gap-2 group">
                View Full Price List <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: 'Routine Cleaning', desc: 'Professional scaling and polishing to remove plaque and tartar buildup, preventing gum disease.', icon: 'clean_hands', color: 'cyan' },
                { title: 'Teeth Whitening', desc: 'Professional bleaching treatments to brighten your smile safely and effectively.', icon: 'auto_awesome', color: 'yellow' },
                { title: 'Dental Implants', desc: 'Permanent, natural-looking replacements for missing teeth that function just like your own.', icon: 'biotech', color: 'blue' },
                { title: 'Orthodontics', desc: 'Braces and clear aligners to correct bite issues and align teeth for a perfect smile.', icon: 'straighten', color: 'indigo' }
              ].map((service, i) => (
                <div key={i} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-${service.color}-50 text-${service.color}-600 flex items-center justify-center`}>
                    <span className="material-symbols-outlined">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 relative" id="specialists">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Meet Our Specialists</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our team of experienced dentists and hygienists are dedicated to providing you with the highest standard of care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Johnson', role: 'Senior Orthodontist', desc: 'Specializing in corrective dentistry with over 15 years of experience in creating beautiful smiles.', icon: 'person' },
              { name: 'Dr. Michael Chen', role: 'Oral Surgeon', desc: 'Expert in dental implants and complex oral surgeries. Committed to pain-free surgical procedures.', icon: 'person_2' },
              { name: 'Dr. Emily Davis', role: 'Pediatric Dentist', desc: 'Passionate about children\'s oral health, ensuring a fun and comfortable environment for young patients.', icon: 'person_3' }
            ].map((doc, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-64 bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <span className="material-icons text-6xl">{doc.icon}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex gap-2 justify-end text-white">
                      <a href="#" className="hover:text-primary transition-colors"><span className="material-icons text-sm">email</span></a>
                      <a href="#" className="hover:text-primary transition-colors"><span className="material-icons text-sm">calendar_month</span></a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{doc.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{doc.role}</p>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-3">{doc.desc}</p>
                  <Link to="#" className="inline-block text-sm font-semibold text-slate-700 hover:text-primary transition-colors">View Profile</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cutting-Edge Technology</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We invest in the latest dental technologies to provide accurate diagnoses and effective treatments. Our modern facility is equipped to handle all your dental needs with precision.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-symbols-outlined">radio_button_checked</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Digital X-Rays</h4>
                    <p className="text-sm text-slate-400 mt-1">Low-radiation imaging for detailed views of teeth and jaw structure instantly.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Intraoral Cameras</h4>
                    <p className="text-sm text-slate-400 mt-1">High-resolution cameras that allow you to see what the dentist sees in real-time.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-9xl text-slate-700">medical_services</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white relative overflow-hidden" id="appointment">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready for a brighter smile?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Your oral health is our priority. Schedule your visit with our expert dental team today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-primary bg-white rounded-lg hover:bg-blue-50 shadow-lg transition-colors">
              Request a Dental Appointment
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
              Contact Dental Clinic
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dental;
