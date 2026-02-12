
import React from 'react';
import { Link } from 'react-router-dom';

const Ophthalmology: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="relative bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "radial-gradient(#136dec 0.5px, transparent 0.5px), radial-gradient(#136dec 0.5px, #f6f7f8 0.5px)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px"}}></div>
        <div className="container mx-auto px-6 py-16 lg:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-purple-600 bg-purple-50 rounded-full">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                OPHTHALMOLOGY DEPARTMENT
              </div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Advanced Eye Care & <span className="text-primary">Vision Preservation</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our world-class ophthalmology team combines expertise with cutting-edge technology to diagnose, treat, and manage all conditions of the eye. From routine exams to complex surgeries, we help you see the world more clearly.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                  Book Eye Exam
                </Link>
                <a href="#specialists" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
                  Meet Specialists
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img alt="Ophthalmologist examining patient" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAZ72MvKfsAV5eXP0UflP2GrTVhI8MHJWW3Nq1zzKA5556zQOOjLXYQJ-gq0yFKxbDmNV0HhuyBNxpiMBdUiJzr_DTdS6GQPCfAK29_IDLWZUjz3_XAOkeFZDCY4WILVjYqBa4EqekhXnmMw6Rgg_PHaFS6uVdyLRDfFQIFJunA2vLPn4mdo9r6CJYuY8DvTkeKA_93bc76_XBcKU6xBATaw_outxCae_ArnfZNIcHBtr5RF5o6uYwaGVs1cBaBlkrEGnINqSI-Ic" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6 text-white">
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-3xl text-primary">visibility</span>
                    <div>
                      <p className="font-bold">20/20 Vision Goals</p>
                      <p className="text-sm opacity-80">Precision diagnostics & treatments</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-[bounce_3s_infinite]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-icons">check</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Top Rated</p>
                    <p className="text-xs text-slate-500">Eye Care Center</p>
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
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Clouding of the eye's natural lens, leading to decreased vision. We offer advanced laser-assisted cataract surgery.
              </p>
              <Link to="#" className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-icons text-xs">arrow_forward</span></Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-teal-500 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-2xl">visibility_off</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Glaucoma</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                A group of eye conditions that damage the optic nerve. Early detection and treatment are crucial to prevent vision loss.
              </p>
              <Link to="#" className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-icons text-xs">arrow_forward</span></Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-2xl">center_focus_weak</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Macular Degeneration</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Age-related condition affecting the central part of the retina. We provide therapies to slow progression and manage symptoms.
              </p>
              <Link to="#" className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-icons text-xs">arrow_forward</span></Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-2xl">bloodtype</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Diabetic Retinopathy</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                A complication of diabetes that affects the eyes. We offer regular screenings and advanced treatments like laser photocoagulation.
              </p>
              <Link to="#" className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-icons text-xs">arrow_forward</span></Link>
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
              <Link to="#" className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium">
                View All Services
              </Link>
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

      <section className="py-20 bg-slate-50" id="specialists">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Meet Our Ophthalmologists</h2>
              <p className="text-slate-600">Expert care from board-certified vision specialists.</p>
            </div>
            <Link to="/doctors" className="hidden md:flex items-center text-primary font-semibold hover:text-primary-dark">View all doctors <span className="material-icons ml-1">arrow_forward</span></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Chen', role: 'Retina Specialist', desc: 'Specializes in macular degeneration and diabetic retinopathy with 15 years of clinical experience.', availability: 'Mon, Wed, Fri', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp5OP_DPICxgqiLh3hW-lHmjpit3_dzllW3Lva5-KsC2O6cnGYMyGzDH-gHPJV5nr8G8Y6pAFYUURGhwDOv8W5qV7GKBHtvSAx4LDidNRSig3g7CJPjIaNXAY7yNspsdsHVw_7JjNrJKpAdfolWFGgGZOaRbNOSL5vRVcK1scIFVLZcxgkMZ31mRIU5ae6kkGxzeOxMv57DEdMoAlGIKlaAObZcJAH6PHhlujubCHkmoY0MwR7QouhxBUDOYA7KnifkqtmuFRfT3g' },
              { name: 'Dr. James Wilson', role: 'Cornea & Refractive Surgeon', desc: 'Expert in LASIK, PRK, and complex corneal transplantation surgeries.', availability: 'Tue, Thu, Sat', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXJ3xrY4xLh_Sp9KNjIWEoABB2etStOXajA-0gOaqMecCCSjc4zQxc9qrHpY9KyHyBV_ErBrmPlaioQdijzkYdSTZzlLWUd2t_LPlNMiQlWfqI3USj9Pxf4z4p3O-QF28ul_GW8KlAQnRBzkEIJ4CJDl0LEav31K54R9fYsduMZu444H7DBReNZtPjELR5Sy75_fZJfs6w68y9MxeXuizO1Ox4hD1VXtbSRb-hng66fYeNTECoKHTGq4onoabkvmkwNRUOyjmSAg0' },
              { name: 'Dr. Elena Rodriguez', role: 'Pediatric Ophthalmologist', desc: 'Dedicated to children\'s eye health, treating strabismus, amblyopia, and congenital cataracts.', availability: 'Mon - Fri', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlmcnQFxKqkjoEEUCtDlqNUqDMgmxh5IsRbd0v4d7DAbO3dC4cqlLf_wDMweA4sAzarSPpEa6xJ6APbbhXI2_Y3M7aobkaV9NVdng6-XUfss9MmCjk0yyCZzU41mMMDlVwDC4whnop_-C3YhtsB_6TzI8xC9vhiXL1LeE99IMJEExegce8kCdA_qNsdJpwqnQBD605ju7boTithU2h9x2bFvjYrb4_jUHyZhyqvVBPCYzIS-r4R-VF33qkYzCDg6gLix-i5AZ6D_E' }
            ].map((doc, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden relative">
                  <img alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={doc.img} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      <a className="w-8 h-8 rounded-full bg-white/20 hover:bg-white hover:text-primary text-white flex items-center justify-center backdrop-blur-sm transition-colors" href="#"><span className="material-icons text-sm">email</span></a>
                      <a className="w-8 h-8 rounded-full bg-white/20 hover:bg-white hover:text-primary text-white flex items-center justify-center backdrop-blur-sm transition-colors" href="#"><span className="material-icons text-sm">calendar_today</span></a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{doc.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{doc.role}</p>
                  <p className="text-slate-500 text-sm mb-6 border-b border-slate-100 pb-6">
                    {doc.desc}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Availability</span>
                    <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded">{doc.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')"}}></div>
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
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 transition-all hover:-translate-y-1">
              Schedule Appointment
            </Link>
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
