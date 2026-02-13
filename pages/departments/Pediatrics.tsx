
import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { OpenAppointmentFunc } from '../../Layout';

const Pediatrics: React.FC = () => {
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
      <header className="relative bg-white border-b border-slate-100 py-12 lg:py-16 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-sky-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-50 blur-3xl opacity-60"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-sky-600 uppercase bg-sky-50 rounded-full">
                Department of Pediatrics
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Compassionate Care for <br className="hidden md:block" /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Your Little Ones</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                From newborns to adolescents, our dedicated team of pediatricians provides comprehensive medical care in a warm, child-friendly environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openAppointment({ department: 'Pediatrics' })}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
                >
                  Book a Visit
                </button>
                <button 
                  onClick={(e) => scrollToSection(e, 'specialists')}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all"
                >
                  Meet Our Team
                </button>
              </div>
            </div>

            <div className="relative hidden lg:flex w-full justify-center">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[450px] w-full max-w-lg">
                <img alt="Pediatrician examining a child" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcjQvLZLM7D8XM6G-ltI3zOfMe_16SIFhpMOp1bLHVdEjtdYZjpUsBAzQs44cnm4kfRY_CVK8NbXWUDDa4412BSTYonv0G_5AGW8FG8LGQ5z9Q8iNNj1bYp3qx0LnzidCBJ75-kWs_GKuSRxWn3GwuufvYRrgSZsucRIjRvWRRp9uFGGhtcPw20Co03HEIOSv7OnPKZtgv_JaExWODULC0-Zb9HFrFUwFo1v3JpiwWrOf-bEgQn2a6vB2n6-OJV-5Zpy2xjm7jgRo" />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-fade-in hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                    <span className="material-icons text-2xl">toys</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">Child-Friendly</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">Diagnosis & Care</span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Conditions We Treat</h2>
            <p className="text-slate-600">
              We specialize in diagnosing and treating a wide range of childhood conditions, ensuring your child grows up healthy and strong. Our approach focuses on preventive care and early intervention.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                <span className="material-icons text-2xl">coronavirus</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Childhood Illnesses</h3>
              <p className="text-sm text-slate-500">Diagnosis and treatment of common infections, fevers, flu, and chronic conditions like asthma.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="material-icons text-2xl">vaccines</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Vaccinations</h3>
              <p className="text-sm text-slate-500">Comprehensive immunization schedules to protect your child from serious preventable diseases.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                <span className="material-icons text-2xl">trending_up</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Developmental Delays</h3>
              <p className="text-sm text-slate-500">Monitoring growth milestones and providing early intervention for developmental concerns.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="material-icons text-2xl">restaurant</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Nutrition & Diet</h3>
              <p className="text-sm text-slate-500">Expert guidance on breastfeeding, formula, introduction to solids, and healthy eating habits.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-10 lg:col-start-2 space-y-16">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                    <span className="material-icons">medical_services</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Services & Procedures</h2>
                </div>
                <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-card">
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    <div className="p-6 md:p-8 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-icons text-primary text-2xl">child_friendly</span>
                        <h3 className="text-lg font-bold text-slate-900">Newborn Care</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Complete physical exams, screening tests, and care for newborns immediately after delivery and in the first few weeks of life.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="material-icons text-green-500 text-xs">check_circle</span> First check-up within 48 hours
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="material-icons text-green-500 text-xs">check_circle</span> Lactation support
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 md:p-8 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-icons text-primary text-2xl">calendar_month</span>
                        <h3 className="text-lg font-bold text-slate-900">Well-Child Visits</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Regular health supervision visits to track growth, development, behavior, and general well-being at key ages.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="material-icons text-green-500 text-xs">check_circle</span> Annual physicals
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="material-icons text-green-500 text-xs">check_circle</span> School & sports physicals
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 md:p-8 hover:bg-slate-50 transition-colors border-t border-slate-100">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-icons text-primary text-2xl">content_cut</span>
                        <h3 className="text-lg font-bold text-slate-900">Pediatric Surgery</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Surgical care for children ranging from minor procedures to complex operations, performed by specialized pediatric surgeons.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="material-icons text-green-500 text-xs">check_circle</span> Minimally invasive techniques
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="material-icons text-green-500 text-xs">check_circle</span> Post-op recovery care
                        </li>
                      </ul>
                    </div>
                    <div className="p-6 md:p-8 hover:bg-slate-50 transition-colors border-t border-slate-100">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="material-icons text-primary text-2xl">face_3</span>
                        <h3 className="text-lg font-bold text-slate-900">Adolescent Medicine</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Specialized care addressing the physical, psychological, and social needs of teenagers and young adults.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="material-icons text-green-500 text-xs">check_circle</span> Mental health support
                        </li>
                        <li className="flex items-center gap-2 text-sm text-slate-500">
                          <span className="material-icons text-green-500 text-xs">check_circle</span> Reproductive health
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <span className="material-icons">toys</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Child-Friendly Facility</h2>
                </div>
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
                    <img alt="Child friendly hospital room" className="rounded-xl shadow-lg w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIF2STzerflwmafog_SFg87DoUkYzWq7yYtBjoPtXTwxcHNt8WT2ROCAYuESJ6TcFi4Q9rXMjo9WMWxYMBePwZ-KncI7VKy48dNaAi4n7KSyM4ivFvMGy6EfvMdFnaElS0JZ8mQb10Us8Iq7p4Mfm94QXa-BB-6804kKR3QhH9q00Q-teO_4yBC54lfJM-2KdcD9fV1cfEE5MGkezXKlAe4yeONIWYwZ8V39db6cw2I1rh_Y3CSnf8TANcokkZj95PFpIjlnYUDsA" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Designed for Comfort</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Our pediatric wing is distinct from the main hospital, featuring bright colors, play areas, and patient rooms designed to reduce anxiety. We believe that a healing environment is just as important as the medical care we provide.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-slate-700">
                        <span className="w-6 h-6 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-xs"><span className="material-icons text-sm">check</span></span>
                        Dedicated playrooms with supervision
                      </li>
                      <li className="flex items-center gap-3 text-slate-700">
                        <span className="w-6 h-6 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-xs"><span className="material-icons text-sm">check</span></span>
                        In-room entertainment systems
                      </li>
                      <li className="flex items-center gap-3 text-slate-700">
                        <span className="w-6 h-6 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-xs"><span className="material-icons text-sm">check</span></span>
                        Overnight facilities for parents
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" id="specialists">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">Our Team</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">Meet Our Pediatricians</h2>
            </div>
            <Link to="/doctors" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
              View All Doctors <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Johnson', role: 'Pediatrician', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXTpzVkTNCNnyheuB9XSytnIxWK6a1Yr59B3keA_3SMC5BmDM7eu7YEhVBNJMUgCI-DtfJFa679DUVODOytaqm2RHO3roS7_bUXkm1KCAHE2mf6SQVJ3VgbMOK2B9GoVMcYTZuM5YeC2WKSSlUPV4DWdHdOOKsdXvtD3pbzLTjI42RfP74QVP0IU2Li0d10GKZe420HPokQXchEwuXV2jwXdS21ZNOQ-1pY2fxs8HQd4Dy7S-MFX-DnEt3WDCqT9fcMu4_ACjoUJo' },
              { name: 'Dr. Michael Chen', role: 'Pediatric Surgeon', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO-uflM2yEV1XDBHyULJchT8qcPNRWMubYasaPKX6oDGs4-T_1FW6fEbxOEovaGOduXaeiMi-hYHmjYYuCf8S0-Li7ye67yKHjSxy-5WeUwMgC1sUkbzHIWhe1wpBQeJLxOMC6DOuyGMlAtjb8k85hd73U7zCoPPMYljiSodK8flZx5RZlb20HdnT41oqOnMVRxDfj_GYvAirO-cqhOvBDHNN4i-pV2_3P54eBK8VpU-sO-E0eUhjBb5xC70UnJ9OFjdEkIMIup2g' },
              { name: 'Dr. Emily Rodriguez', role: 'Adolescent Specialist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTOVnU3UC9BG8L4mMKfgV6Kyvj0Tznu6eFrJs5-NYnLvMYP3wIXr90r1xRWepiIcsGmAgDTCtOKCXhwhsW6rXjMyP4-EHTHpZ3SOaBDKEdK-cK1iLe7pzMa8bCncczXK5Jbdo7L005nWI3TcrB8lh01XvDAnuJYG5NelPQkzJ5M9E-B_NkrOWt7qP_TwD2wZZJAG1Ot4HC0yc5nNPcbkg4lcJjiDX6c_LrSgFfZOddBMu1CSLUo8gcvPxVC19QiZOiNpxxw_KTCCo' }
            ].map((doc, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden relative">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button 
                      onClick={() => openAppointment({ doctorName: doc.name, department: 'Pediatrics' })}
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

      <section className="py-20 bg-primary text-white relative overflow-hidden" id="schedule">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-300 opacity-10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider bg-white/10 text-white rounded-full uppercase border border-white/20">Taking New Patients</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Schedule Your Child's Visit</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Give your child the gift of good health. Our easy online scheduling makes it convenient to find a time that works for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => openAppointment({ department: 'Pediatrics' })}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary bg-white rounded-lg hover:bg-blue-50 shadow-lg transition-colors"
            >
              Book Appointment Now
            </button>
            <span className="text-blue-200 text-sm font-medium">or call us at <strong className="text-white text-lg ml-1">(555) 123-4567</strong></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pediatrics;
