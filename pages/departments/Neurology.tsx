
import React from 'react';
import { Link } from 'react-router-dom';

const Neurology: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-6">
                <Link to="/departments" className="text-sm text-slate-500 hover:text-primary">Departments</Link>
                <span className="material-icons text-xs text-slate-400">chevron_right</span>
                <span className="text-sm text-primary font-medium">Neurology</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Advanced Neurological Care & <span className="text-primary">Brain Health</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our Neurology Department provides world-class diagnosis and treatment for complex disorders of the nervous system. We combine cutting-edge technology with compassionate care to improve your quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                  Consult a Neurologist
                </Link>
                <a href="#procedures" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all duration-200">
                  View Procedures
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons">psychology</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Brain & Spine Center</h3>
                    <p className="text-sm text-slate-500">Center of Excellence</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-green-500">verified</span>
                      <span className="text-sm font-medium text-slate-700">Award Winning Care</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-blue-500">biotech</span>
                      <span className="text-sm font-medium text-slate-700">Advanced 3T MRI</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-purple-500">groups</span>
                      <span className="text-sm font-medium text-slate-700">Multi-disciplinary Team</span>
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

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Team</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Meet Our Neurologists</h2>
              <p className="text-slate-600 mt-4">
                Highly skilled board-certified neurologists dedicated to providing personalized care.
              </p>
            </div>
            <Link to="/doctors" className="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors">
              View all doctors <span className="material-icons text-sm ml-1">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Mitchell', role: 'Chief of Neurology', icon: 'person', desc: 'Specializes in stroke management and neurocritical care with over 15 years of experience.' },
              { name: 'Dr. James Wilson', role: 'Epileptologist', icon: 'person', desc: 'Expert in epilepsy diagnosis and treatment, including surgical evaluation and management.' },
              { name: 'Dr. Emily Chen', role: 'Movement Disorders Specialist', icon: 'person_3', desc: 'Focuses on Parkinson\'s disease, tremors, and dystonia, utilizing deep brain stimulation therapy.' }
            ].map((doc, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-100 group">
                <div className="p-6 pb-0 flex items-center justify-center bg-slate-50">
                  <div className="w-32 h-32 rounded-full bg-slate-200 overflow-hidden mb-4 relative">
                    <span className="material-icons absolute bottom-0 left-1/2 -translate-x-1/2 text-[8rem] text-slate-300 leading-none translate-y-2">{doc.icon}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{doc.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{doc.role}</p>
                  <p className="text-slate-500 text-sm mb-6">
                    {doc.desc}
                  </p>
                  <button className="inline-flex items-center justify-center w-full px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Neurology;
