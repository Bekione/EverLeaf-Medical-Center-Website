
import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { OpenAppointmentFunc } from '../Layout';

const departments = [
  { id: 'cardiology', name: 'Cardiology', icon: 'monitor_heart', color: 'red', desc: 'Comprehensive care for heart and vascular conditions including diagnostic testing and surgery.' },
  { id: 'neurology', name: 'Neurology', icon: 'psychology', color: 'indigo', desc: 'Expert diagnosis and treatment for disorders of the brain, spinal cord, and nerves.' },
  { id: 'pediatrics', name: 'Pediatrics', icon: 'child_care', color: 'yellow', desc: 'Dedicated care for infants, children, and adolescents in a friendly environment.' },
  { id: 'surgery', name: 'Surgery', icon: 'medical_services', color: 'blue', desc: 'Advanced surgical procedures using minimally invasive techniques for faster recovery.' },
  { id: 'dental', name: 'Dental Clinic', icon: 'dentistry', color: 'cyan', desc: 'Complete oral health care from routine cleanings to complex dental surgeries.' },
  { id: 'ophthalmology', name: 'Ophthalmology', icon: 'visibility', color: 'purple', desc: 'State-of-the-art eye care services including vision testing and cataract surgery.' },
  { id: 'laboratory', name: 'Laboratory', icon: 'biotech', color: 'teal', desc: 'Precise diagnostic testing services ensuring accurate results for better treatment plans.' },
  { id: 'radiology', name: 'Radiology', icon: 'camera_roll', color: 'slate', desc: 'Advanced imaging services including MRI, CT scans, X-rays, and ultrasound.' },
  { id: 'rehabilitation', name: 'Rehabilitation', icon: 'accessibility_new', color: 'orange', desc: 'Helping patients regain independence after injury or surgery through physical therapy.' },
];

const Departments: React.FC = () => {
  const { openAppointment } = useOutletContext<{ openAppointment: OpenAppointmentFunc }>();

  return (
    <div className="animate-fade-in">
      <header className="bg-white border-b border-slate-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
            Medical Excellence
          </span>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">Our Specialized Departments</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We offer a wide array of specialized medical departments, each staffed with experienced professionals dedicated to providing top-quality healthcare services.
          </p>
        </div>
      </header>

      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "radial-gradient(#136dec 0.5px, transparent 0.5px), radial-gradient(#136dec 0.5px, #f6f7f8 0.5px)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px"}}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white rounded-2xl p-8 shadow-card border border-slate-100 hover:-translate-y-2 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-${dept.color}-50 rounded-2xl flex items-center justify-center text-${dept.color}-500 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-icons text-3xl">{dept.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{dept.name}</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  {dept.desc}
                </p>
                <Link to={`/departments/${dept.id}`} className="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors group/link">
                  View Details <span className="material-icons text-sm ml-1 group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revamped CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Expert Consultation
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Need Expert <br/><span className="text-blue-300">Medical Advice?</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Our specialists are ready to help you with personalized care plans. Schedule an appointment with one of our departments today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => openAppointment()}
                className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 hover:scale-105 flex items-center gap-2"
              >
                Book Appointment <span className="material-icons">event</span>
              </button>
              <Link to="/doctors" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                Find a Doctor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
