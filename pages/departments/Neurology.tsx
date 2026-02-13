
import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { OpenAppointmentFunc } from '../../Layout';

const Neurology: React.FC = () => {
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
        <div className="absolute right-0 top-0 h-full w-1/3 bg-indigo-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
                Department of Neurology
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Advanced Neurological Care & <span className="text-primary">Brain Health</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                Our Neurology Department provides world-class diagnosis and treatment for complex disorders of the nervous system. We combine cutting-edge technology with compassionate care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openAppointment({ department: 'Neurology' })}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Consult a Neurologist
                </button>
                <button 
                  onClick={(e) => scrollToSection(e, 'procedures')}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all duration-200"
                >
                  View Procedures
                </button>
              </div>
            </div>
            <div className="relative hidden lg:flex w-full justify-center">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[450px] w-full max-w-lg">
                <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80" alt="Neurology Center" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-fade-in hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-50 p-3 rounded-full text-indigo-600">
                    <span className="material-icons text-2xl">psychology</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">Center of</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Excellence</p>
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
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Conditions We Treat</h2>
            <p className="text-lg text-slate-600">
              Our specialists have extensive experience in diagnosing and managing a wide range of neurological conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Stroke', icon: 'bolt', color: 'red', desc: 'Rapid response stroke care with thrombolytic therapy and comprehensive rehabilitation programs.' },
              { title: 'Epilepsy', icon: 'insights', color: 'yellow', desc: 'Advanced seizure management, EEG monitoring, and surgical options for epilepsy control.' },
              { title: "Alzheimer's", icon: 'psychology_alt', color: 'blue', desc: 'Compassionate care for memory disorders, early diagnosis, and support for patients and families.' },
              { title: 'Migraine', icon: 'healing', color: 'purple', desc: 'Specialized headache clinic offering personalized treatment plans for chronic migraines and headaches.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-card border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                <div className={`w-14 h-14 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-500 mb-6`}>
                  <span className="material-icons text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <Link to="#" className="text-primary font-medium text-sm hover:underline">Learn more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-slate-100" id="procedures">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Services & Procedures
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'EEG (Electroencephalogram)', desc: 'A non-invasive test that records electrical patterns of the brain, essential for diagnosing epilepsy and other brain disorders.', icon: 'monitor_heart' },
                  { title: 'Nerve Conduction Studies', desc: 'Tests to measure how fast an electrical impulse moves through your nerve, used to identify nerve damage.', icon: 'electrical_services' },
                  { title: 'Neurorehabilitation', desc: 'A complex medical process which aims to aid recovery from a nervous system injury, and to minimize and/or compensate for any functional alterations.', icon: 'accessibility' }
                ].map((service, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="material-icons">{service.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h4>
                      <p className="text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-icons text-3xl text-primary">biotech</span>
                <h2 className="text-2xl font-bold text-slate-900">Advanced Technology</h2>
              </div>
              <div className="space-y-8">
                <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-slate-200">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 relative z-10">3T MRI Scanner</h4>
                  <p className="text-slate-600 text-sm relative z-10">
                    Provides exceptional image quality for detailed brain and spine imaging, allowing for earlier and more accurate diagnoses of neurological conditions.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-slate-200">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 relative z-10">CT Angiography</h4>
                  <p className="text-slate-600 text-sm relative z-10">
                    Combines a CT scan with an injection of dye to produce pictures of blood vessels and tissues, crucial for stroke assessment.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-slate-500 text-sm italic">
                  "We invest in the latest technology to ensure our patients have access to the most precise diagnostic tools available."
                </p>
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
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">Meet Our Neurologists</h2>
            </div>
            <Link to="/doctors" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
              View All Doctors <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Mitchell', role: 'Chief of Neurology', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9BZuqUAA5IOvQMgXBQ8ryTLzC7vKg69xiTlytVe-76cUVW84Bp8VWOapyKoqbwUVVWBuN_FfxCcsqFq1ao_QGijkga86eRCQeYgiaWkGi7WtZIQPN8Q2vpj9P49F7WLoa7Y9f-Oj_nR-hQM4ZVF-Hxf-HLyzlW5kk3Rk-ANh7DNvIi720KTGderseW5cc8dF6H7Wx6PDoI9ce9GfwndlXLLz4CsQbzfWS0_34TQzB04eBNYZK-S8nSZOkgY3aUVNpbGCAWq_I9vs' },
              { name: 'Dr. James Wilson', role: 'Epileptologist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADGr580ge61fkfsxwBrM7N1TZyAY9Z-GTpjBUo_xK5lWfakoEU_qOziiT-so6DMVRYMjRbu0nVW-k1DcZ572-UwSxJBbHFxL921KxZ6v5xbrKCJfSDGPfGIKJ2lnbzJo8rsumPzZ1VnlvNztje35dbZ8OjoskrJoJWMwL2xyEuWVfFxTxZWLkj3322_nwECoDQOhnBsfJT-uJdBuBYvHW7tZFnkW3TihhkEKyTi4ionW16tPVhP7_Msgmo2tYXI-H3mW5DhYbZYTk' },
              { name: 'Dr. Emily Chen', role: 'Movement Disorders', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY7zDqNO2hoPrxpDGZpE92fSZkSGJgJi7hfuXKUusm09nz1u9rNHNBxuJ0N_t6HSXFbSkNan8ZuDt8AkK0PHqzsi4I6ipPzk2q3ALgTZVcC1uboMYQ6dZnjiBkO036p5ErpaA0vAjn6D8TivJDicjayQgEkLrG4PsZURfL7C-lOADFWh45AKVB0WfWyqvzWL5JcVEwzhhuOWO87RBPu2zcdEOcZJloL6qr9YD-oKjiSjrlq9KMwrQ9LL25SFVQnG3ZphZNrYFaNIs' }
            ].map((doc, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden relative">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button 
                      onClick={() => openAppointment({ doctorName: doc.name, department: 'Neurology' })}
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

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        
        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">psychology</span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Expert Consultation
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready for Your <br/><span className="text-indigo-300">Neurology Consultation?</span>
            </h2>
            <p className="text-indigo-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Early diagnosis can make a significant difference. Schedule an appointment with our specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openAppointment({ department: 'Neurology' })}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-900 bg-white rounded-full hover:bg-indigo-50 shadow-xl shadow-indigo-900/20 transition-all hover:scale-105"
              >
                Schedule Appointment
              </button>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all">
                Contact Department
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Neurology;
