
import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { OpenAppointmentFunc } from '../../Layout';
import SEO from '../../components/SEO';

const Ophthalmology: React.FC = () => {
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
        title="Ophthalmology Department"
        description="Advanced eye care and vision preservation. Treating cataracts, glaucoma, and offering LASIK surgery."
        canonical="https://everleaf-medical.com/departments/ophthalmology"
      />
      <header className="relative bg-white border-b border-slate-100 py-12 lg:py-16 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
                Ophthalmology Department
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Advanced Eye Care & <span className="text-primary">Vision Preservation</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                Our world-class ophthalmology team combines expertise with cutting-edge technology to diagnose, treat, and manage all conditions of the eye.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => openAppointment({ department: 'Ophthalmology' })}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all"
                >
                  Book Eye Exam
                </button>
                <button
                  onClick={(e) => scrollToSection(e, 'specialists')}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all"
                >
                  Meet Specialists
                </button>
              </div>
            </div>
            <div className="relative hidden lg:flex w-full justify-center">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[450px] w-full max-w-lg">
                <img alt="Ophthalmologist examining patient" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAZ72MvKfsAV5eXP0UflP2GrTVhI8MHJWW3Nq1zzKA5556zQOOjLXYQJ-gq0yFKxbDmNV0HhuyBNxpiMBdUiJzr_DTdS6GQPCfAK29_IDLWZUjz3_XAOkeFZDCY4WILVjYqBa4EqekhXnmMw6Rgg_PHaFS6uVdyLRDfFQIFJunA2vLPn4mdo9r6CJYuY8DvTkeKA_93bc76_XBcKU6xBATaw_outxCae_ArnfZNIcHBtr5RF5o6uYwaGVs1cBaBlkrEGnINqSI-Ic" />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-fade-in hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <span className="material-icons text-2xl">visibility</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">20/20</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Vision Goals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-10 bg-primary/5 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-1">15k+</p>
              <p className="text-sm text-slate-500 font-medium">Surgeries Performed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-1">98%</p>
              <p className="text-sm text-slate-500 font-medium">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-1">20+</p>
              <p className="text-sm text-slate-500 font-medium">Specialized Doctors</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-1">24/7</p>
              <p className="text-sm text-slate-500 font-medium">Emergency Care</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">Conditions We Treat</h2>
            <p className="text-slate-600">We provide comprehensive diagnosis and treatment for a wide range of ocular conditions affecting patients of all ages.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-2xl">blur_on</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cataracts</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Clouding of the eye's natural lens, leading to decreased vision. We offer advanced laser-assisted cataract surgery.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-teal-500 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-2xl">visibility_off</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Glaucoma</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                A group of eye conditions that damage the optic nerve. Early detection and treatment are crucial to prevent vision loss.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-2xl">center_focus_weak</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Macular Degeneration</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Age-related condition affecting the central part of the retina. We provide therapies to slow progression and manage symptoms.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-2xl">bloodtype</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Diabetic Retinopathy</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                A complication of diabetes that affects the eyes. We offer regular screenings and advanced treatments like laser photocoagulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 sticky top-24">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Services & Procedures</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We utilize the latest surgical techniques and technology to ensure the best possible outcomes for our patients. Our facilities are equipped for both outpatient procedures and complex surgeries.
              </p>
              <button
                onClick={() => openAppointment({ department: 'Ophthalmology' })}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
              >
                Book a Service
              </button>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[
                { title: 'Laser Eye Surgery (LASIK)', desc: 'Correct vision problems such as nearsightedness, farsightedness, and astigmatism using precision lasers.', icon: 'remove_red_eye' },
                { title: 'Routine Eye Exams', desc: 'Comprehensive vision testing and health checks to maintain optimal eye health and detect issues early.', icon: 'assignment' },
                { title: 'Retinal Procedures', desc: 'Advanced treatments for retinal detachments, tears, and other complex back-of-the-eye conditions.', icon: 'science' },
                { title: 'Corneal Transplants', desc: 'Surgical replacement of damaged corneal tissue to restore vision in patients with corneal disease.', icon: 'biotech' }
              ].map((service, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <span className="material-icons">{service.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-sm text-slate-500">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Technology</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Diagnostic Systems</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Precision is everything in eye care. We invest in the latest optical technologies to ensure accurate diagnoses and successful treatment outcomes.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-2xl">scanner</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Optical Coherence Tomography (OCT)</h4>
                    <p className="text-slate-400">Non-invasive imaging that uses light waves to take cross-section pictures of your retina, allowing us to see each distinct layer.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-2xl">gps_fixed</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Laser Diagnostic Systems</h4>
                    <p className="text-slate-400">State-of-the-art laser mapping tools that create a detailed 3D map of your eye's surface for perfectly customized treatments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <img alt="Advanced Eye Scanning Technology" className="w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiPrnvFdUjLNXpciYqxHqHa81iZUl7_kY2qlDKCy3xVZeXN9QuEzIDlkuwWYdnVaRKQr0L3ZwVh_ox-w03vDt0FFlpm43uRVENKBy6UYzysXkPc8O9Hy6rgVZDhUTH8bUVATOVYBg_jK0YLYUFpgsqHpDJPRgCZAbFUeMRGMwGFsjD9DI-ILX8YrPUGtfkZ5XLcq-qUWe5mnawQiaKYokzMIdm9GewUgsg2c5zWVw4Io3-OtA6kSfBpZbUeRzKnU1fzqzwt6PMrqI" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden" id="appointment">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">See the World Clearly</h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't let vision problems limit your life. Schedule your comprehensive eye exam today and experience the difference expert care makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openAppointment({ department: 'Ophthalmology' })}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 transition-all hover:-translate-y-1"
            >
              Schedule Appointment
            </button>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
              Contact Department
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ophthalmology;
