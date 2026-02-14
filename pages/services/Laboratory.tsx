
import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { OpenAppointmentFunc } from '../../Layout';
import SEO from '../../components/SEO';

const Laboratory: React.FC = () => {
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
        title="Clinical Laboratory"
        description="24/7 automated pathology lab services. Accurate blood work, microbiology, and biochemistry results."
        canonical="https://everleaf-medical.com/services/laboratory"
      />
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_pz0LkLId6ZtK8txAyerpvUQ732I3XINGlxdNS2skUDdAcJbuO2zDCmYG0KgOzEQea9eCBt2ZOMuvhQ8WXR-sIAkS3pSFFZO61729sWktvqksqsAWsh3Pf6uHyPOzwgdrbS_0pTEB14D0Vx17WY5FUUirSL9l4hMJP9hhAdCtWJccKk1-p9urwJQefmVEzwx_PlqVo0eSn33-QyfXkBUO8jVW5eCK0P-hkhis4DJ7IxQo9-kOewUkBR3yFCPyb4I_u7FFlol2Qjc" alt="Modern medical laboratory environment" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-blue-300 font-semibold tracking-wide uppercase text-sm">
              <span className="material-icons text-lg">biotech</span>
              <span>Advanced Diagnostics</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">Precision Laboratory <br />Services You Can Trust</h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Our ISO-certified laboratory operates 24/7, delivering accurate diagnostic results with speed and precision. From routine blood work to complex genetic testing, your health is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openAppointment({ department: 'Laboratory' })}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5"
              >
                Book a Test
              </button>
              <button
                onClick={(e) => scrollToSection(e, 'collection')}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
              >
                Home Collection
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Comprehensive Clinical Testing</h2>
            <p className="text-slate-600">
              We offer a wide spectrum of diagnostic tests across multiple disciplines to support accurate diagnosis and effective treatment plans.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-card border border-slate-100 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl">biotech</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Biochemistry</h3>
              <p className="text-slate-500 mb-4 leading-relaxed">
                Advanced analysis of chemical components in blood and body fluids. Liver function, kidney profiles, and lipid panels with high precision.
              </p>
              <ul className="space-y-2 mb-6">
                {['Liver Function Tests', 'Kidney Profiles', 'Diabetic Screening'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-card border border-slate-100 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-500 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl">coronavirus</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Microbiology</h3>
              <p className="text-slate-500 mb-4 leading-relaxed">
                Identification of infectious agents including bacteria, viruses, fungi, and parasites to guide appropriate antimicrobial therapy.
              </p>
              <ul className="space-y-2 mb-6">
                {['Culture & Sensitivity', 'Viral Serology', 'Molecular Testing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-card border border-slate-100 group hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl">bloodtype</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hematology</h3>
              <p className="text-slate-500 mb-4 leading-relaxed">
                Detailed study of blood and blood-forming tissues to diagnose anemia, infections, leukemia, and clotting disorders.
              </p>
              <ul className="space-y-2 mb-6">
                {['Complete Blood Count', 'Coagulation Studies', 'Anemia Profile'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="collection">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-bl-full opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <span className="material-icons">speed</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Fast & Accurate Results</h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Time is critical in healthcare. Our automated laboratory systems operate 24/7 to ensure turnaround times are minimized without compromising quality. Most routine test results are available within 4-6 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-primary">24/7</span>
                      <span className="text-sm text-slate-500 leading-tight">Operation<br />Hours</span>
                    </div>
                    <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-primary">99.9%</span>
                      <span className="text-sm text-slate-500 leading-tight">Accuracy<br />Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4 text-primary font-semibold">
                <span className="material-icons text-lg">home_work</span>
                <span>Convenience First</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Home Collection Services</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Can't make it to the lab? We bring the laboratory to your doorstep. Our trained phlebotomists follow strict safety protocols to collect samples from the comfort of your home or office.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Easy online or phone booking',
                  'Safe, hygienic sample collection',
                  'Digital reports delivered to your email/app'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5">
                      <span className="material-icons text-sm">check</span>
                    </div>
                    <span className="text-slate-700">{text}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openAppointment({ department: 'Laboratory', doctorName: 'Home Collection Service' })}
                className="text-primary font-bold hover:text-primary-dark inline-flex items-center gap-2 group text-left"
              >
                Book Home Collection
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFaOwNC4YW7AzoDJywjgxJU9ucnUaL2HbVWSj644j17mvHBSRZP5GBK-z82bqZuV_56jCHXzaw-FCnyhdHZJpuYP_iANTTE8cot78SgO1NKN-6nwIswxOM7N9Q3QGa-icoNIFq8_WKwrvzjiDotzXhblHsH4rjy0y0_Lrb6-jc6rYqBroWWhkXV7XK3tcghLht4bAesBaMtih5Fm3GCc9pUnNDTRANgDGs3-YDOQlBzkUfzmmecpfbyyG1Qeuonj2Yklc5dHWAKaA" alt="Advanced laboratory equipment microscope" className="rounded-2xl shadow-xl w-full object-cover h-[400px]" />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">State-of-the-art Equipment</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our commitment to accuracy drives our investment in the latest laboratory technology. We utilize fully automated analyzers from world-leading manufacturers to eliminate human error and ensure consistency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Roche Cobas', desc: 'High-throughput immunology analyzers' },
                  { name: 'Sysmex XN', desc: 'Advanced automated hematology' },
                  { name: 'BD Bactec', desc: 'Rapid blood culture systems' },
                  { name: 'PCR Labs', desc: 'Molecular diagnostic suites' }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-slate-800 mb-2">{item.name}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">science</span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Fast & Reliable
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to Take Charge <br /><span className="text-blue-300">of Your Health?</span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Book your lab test today. Choose from our wide range of individual tests and health checkup packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openAppointment({ department: 'Laboratory' })}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-900 bg-white rounded-full hover:bg-blue-50 shadow-xl shadow-blue-900/20 transition-all hover:scale-105"
              >
                Request a Test
              </button>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all">
                Contact for Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Laboratory;
