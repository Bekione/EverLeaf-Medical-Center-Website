
import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { OpenAppointmentFunc } from '../../Layout';
import SEO from '../../components/SEO';

const Rehabilitation: React.FC = () => {
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
        title="Rehabilitation & Physical Therapy"
        description="Helping patients regain mobility and independence through personalized physical and occupational therapy."
        canonical="https://everleaf-medical.com/departments/rehabilitation"
      />
      <header className="relative bg-white border-b border-slate-100 overflow-hidden py-12 lg:py-16">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
                Department of Rehabilitation
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">Expert Rehabilitation & <br />Physical Therapy</h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                Our dedicated team of therapists and specialists help you regain strength, mobility, and independence. We create personalized recovery plans tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={(e) => scrollToSection(e, 'specialists')}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-soft hover:shadow-lg hover:-translate-y-0.5"
                >
                  Meet Our Specialists
                </button>
                <button
                  onClick={(e) => scrollToSection(e, 'services')}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary transition-all duration-200 bg-white border border-primary/20 rounded-lg hover:bg-primary/5"
                >
                  View Services
                </button>
              </div>
            </div>
            <div className="relative hidden lg:flex w-full justify-center">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[450px] w-full max-w-lg">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtbvZ3wCBMdO-ezXbqhqa5-aUcje5kFiTO_D8Aq-E-j8KTKz8fTexjNNre_Fk0c6KSLGN7Zbfv_fcm5OvPKV3JPiQXYRHNI65nuxDc3GfDI1bO-OsvLbo5DCmdI1onrNnsb4qUgtLZ-KqEU_T8o24JwdqtUZGo9W4kdYIi3RsQwiNJquKiU6cg6HriF3vG_2-pa5MVA21beOMSZ0k3dAC5VdRmyyC6swnSmS6BZuyq_kAcbPcZPl3etjqudVdhPzWszwdyFy5vKWA" alt="Rehabilitation Session" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-fade-in hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <span className="material-icons text-xl">verified</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-xl">98%</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Recovery Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Conditions We Treat</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We specialize in treating a wide range of conditions to help you return to your daily activities pain-free.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Sports Injuries', icon: 'fitness_center', color: 'blue', desc: 'Comprehensive rehabilitation for ACL tears, rotator cuff injuries, and sprains to get athletes back in the game safely.' },
              { title: 'Stroke Recovery', icon: 'favorite', color: 'red', desc: 'Neurological rehabilitation focused on relearning skills and improving mobility after a stroke event.' },
              { title: 'Post-Surgical Rehab', icon: 'healing', color: 'teal', desc: 'Guided recovery programs following joint replacements, spinal surgeries, and other major procedures.' },
              { title: 'Chronic Pain', icon: 'spa', color: 'purple', desc: 'Management strategies and therapies for back pain, arthritis, fibromyalgia, and other long-term pain conditions.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-card transition-all duration-300 group">
                <div className={`w-14 h-14 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-500 mb-6 group-hover:bg-${item.color}-500 group-hover:text-white transition-colors duration-300`}>
                  <span className="material-icons text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Services & Procedures</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our department is equipped with modern facilities and expert staff to provide a full spectrum of rehabilitation services designed for your unique recovery journey.
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <div className="space-y-6">
                {[
                  { title: 'Physical Therapy', desc: 'Focuses on improving movement, strength, and function through exercise, manual therapy, and education.', icon: 'directions_walk', color: 'orange' },
                  { title: 'Occupational Therapy', desc: 'Helps patients develop, recover, or maintain the daily living and work skills ensuring independence.', icon: 'accessibility_new', color: 'green' },
                  { title: 'Pain Management', desc: 'Multidisciplinary approach to diagnose, prevent, and treat chronic pain using various therapeutic techniques.', icon: 'sentiment_satisfied', color: 'blue' }
                ].map((service, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className={`shrink-0 w-12 h-12 rounded-full bg-${service.color}-100 text-${service.color}-600 flex items-center justify-center`}>
                      <span className="material-icons">{service.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-slate-600 text-sm">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 relative">
        <div className="absolute inset-0 bg-slate-900/5 skew-y-3 transform origin-bottom-right translate-y-20 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Advanced Technology</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We utilize cutting-edge equipment to accelerate your recovery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7k9a_wM8rvsPY745bEvTj-g3gWpikZ2rehLbCVgU6D1ytYKUtNzBYLPSdsZ6id0v_nuG0MXHItPzaJ5oUTVLAWWAXkHT77cr43uPM_OeXxPl3uk7c2edowXFIi-T65MzrdK0zx-k6yrKAujZDCevXqn8LbZqAclz_VfVWMX6qInk8EXsD0cthE9g_6PJCZs7IF8lKJ_7bH_-4cExgR5X-f6CJLFjMLJ1u9sw86zMQCrmnviGC5FGIphOrKFFb4zU4rTkpgvq8xw" alt="Advanced Mobility Aids" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Mobility Aids</h3>
                <p className="text-slate-600 text-sm">State-of-the-art robotic exoskeletons and computerized gait trainers to assist in walking re-education.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8owibyrpEr_o1QDtI1yPTk_TsmVU_UGL_BY5PG0R146zXAFTR-btWBN6R9G56-c_aCsD0QbWB-6Xn7pQ2GZ2bGtObX_uDM62AW7h_TZKjpLXrPTrxM1Ok6JOFx7VNWvvbjKmXQqnE5RueOlzlhdHa83OQ8bkC-emXiapvhCEKIkR8HbsraxMnCPiEdu7CZRMmnDDhFl65UjTIjwOb3xLsaxCSZeBc-Q564M7OwA1YTbNVmqM9ot6qjVpYZbo0K9uilMVzH3YmX14" alt="Therapeutic Equipment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Therapeutic Equipment</h3>
                <p className="text-slate-600 text-sm">Specialized hydrotherapy pools, electrical stimulation devices, and ultrasound therapy units.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="specialists">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">Our Team</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">Meet Our Specialists</h2>
            </div>
            <Link to="/doctors" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
              View All Doctors <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Jenkins', role: 'Lead Physical Therapist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa9ex7Ww4CUP6_xP9bxUUOYl0Dpz6IkTAYHkME4SHfiL9e-z4ms83PoWx4pHrIiMmU5d9qiY1ePXnFfEKPXYfsyDU0dx8qQCXC2e9w_hoNwLC6vCq_cJqjGzfyODDjr-F7uAL9At-2CA_i6MUWBRth8wn7nAEro_yLgMbsxQR-o8d_CPZOFZfU_1rvFIM6qhgJ0mVekOvZ3kE96-w0e1yWVfJa2J0vk_z1frpzFMnha-khWMQWyoYIFfvMDaBnJxO4T-8MGkDnBBk' },
              { name: 'Dr. Marcus Chen', role: 'Occupational Therapist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2I2LuUK6hJausdvetWlNpaStCjH0T7kOkWxFUKdrVdoMDOwpwgOzN5Oc4hFzC5yXzVofaJbrncReaWPYParDWOuQDQmjfQg2CM-JbYCNViVVPeNFqCag03AGtvSk8802_mqu8TYknTCWwns3022e08K9DWVKZf1UA-T15EA8gcrKIoeow_vtadlPfcbn7JBn2yNjVWHLvN1rWqUgAYlVolG4d4Q3Atp4HWrJc6XZKpM3bMArASaVW2bjjrrg4sArayOhLP24q0b0' },
              { name: 'Dr. Emily Ross', role: 'Pain Management Specialist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYK4_eT0_ZZiEYlhWEYQ04ZPfOpuvbP5L0Zy-AgHPF586vw6ccWs5tXPKF5vp054vHftPdBn_NyuSYwjokC-rWNZNgUA-8Tnz00AmCX-xe2Wk-Rl-0w3Y7kxHhWixKb2nY844tiszzyfD5HTyG7s3a_i5RY6DK0l3EbmOElEJPAAIIwYwfEjdjawIrTkuzzKThg1hjJ-bXTfHdftGLUwBycosEnKZvt5DFkm4pdodvosXH_eUfR9V-tKJCp0ojHF7X3f1JMflvJ04' }
            ].map((doc, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden relative">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button
                      onClick={() => openAppointment({ doctorName: doc.name, department: 'Rehabilitation' })}
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">accessibility_new</span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Regain Your Independence
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Start Your <br /><span className="text-teal-300">Recovery Journey</span> Today
            </h2>
            <p className="text-teal-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Take the first step towards a pain-free life. Schedule a consultation with our rehabilitation experts and get back to doing what you love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openAppointment({ department: 'Rehabilitation' })}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-teal-900 bg-white rounded-full hover:bg-teal-50 shadow-xl shadow-teal-900/20 transition-all hover:scale-105"
              >
                Book Consultation
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

export default Rehabilitation;
