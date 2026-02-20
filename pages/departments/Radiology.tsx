import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const Radiology: React.FC = () => {
  const { openAppointment } = useOutletContext<{
    openAppointment: OpenAppointmentFunc;
  }>();

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="animate-fade-in">
      <SEO
        title="Radiology Department"
        description="Diagnostic imaging excellence including MRI, CT Scans, Ultrasound, and X-Rays with low-dose radiation protocols."
        canonical="https://everleaf-medical.com/departments/radiology"
      />
      <header className="bg-white border-b border-slate-100 py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Reveal delay={0}>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-blue-50 rounded-full">
                  Department of Radiology
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                  State-of-the-Art <br />
                  <span className="text-primary">Diagnostic Imaging</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                  Our Radiology Department utilizes advanced imaging technology
                  to provide precise diagnoses. We prioritize patient comfort
                  and safety while delivering high-quality visual data.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => openAppointment({ department: "Radiology" })}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-blue-500/30 hover:-translate-y-1"
                  >
                    Book Imaging Appointment
                  </button>
                  <button
                    onClick={(e) => scrollToSection(e, "specialists")}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all"
                  >
                    Meet Our Radiologists
                  </button>
                </div>
              </Reveal>
            </div>
            <Reveal
              from="right"
              threshold={0.1}
              className="relative hidden lg:flex w-full justify-center"
            >
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[450px] w-full max-w-lg">
                  <img
                    src="/images/hero/radiology-hero.jpg"
                    alt="Advanced Radiology"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-fade-in hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full text-blue-600">
                      <span className="material-icons text-2xl">biotech</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-900">
                        High-Res
                      </p>
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">
                        Imaging
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                Conditions We Treat
              </h2>
              <p className="text-slate-600">
                Our imaging capabilities allow us to detect and monitor a wide
                range of medical conditions with exceptional clarity.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fracture Detection",
                icon: "accessibility",
                color: "orange",
                desc: "Precise identification of bone fractures, dislocations, and joint abnormalities using high-resolution X-rays.",
              },
              {
                title: "Tumor Screening",
                icon: "science",
                color: "purple",
                desc: "Early detection and staging of tumors in soft tissues and organs through advanced MRI and CT scanning.",
              },
              {
                title: "Cardiovascular Imaging",
                icon: "favorite",
                color: "red",
                desc: "Detailed visualization of heart structure and blood flow to identify blockages and heart conditions.",
              },
              {
                title: "Organ Health",
                icon: "healing",
                color: "teal",
                desc: "Comprehensive assessment of internal organs including liver, kidneys, and lungs for function and pathology.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 h-full">
                  <div
                    className={`w-12 h-12 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-500 mb-4`}
                  >
                    <span className="material-icons text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal threshold={0.1}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                  Our Expertise
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mt-2">
                  Services & Procedures
                </h2>
              </div>
              <Link
                to="/services/imaging"
                className="hidden md:inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors mt-4 md:mt-0"
              >
                View Full Service List{" "}
                <span className="material-icons ml-2">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Digital X-Ray",
                icon: "image",
                color: "primary",
                desc: "High-resolution digital radiography for quick and accurate assessment of bones and chest with minimal radiation exposure.",
                features: ["Instant Results", "Low Dose Radiation"],
              },
              {
                title: "3D Mammography",
                icon: "face",
                color: "pink-500",
                desc: "Advanced tomosynthesis technology that provides a three-dimensional view of breast tissue for earlier cancer detection.",
                features: ["Increased Accuracy", "Comfortable Design"],
              },
              {
                title: "MRI (Magnetic Resonance Imaging)",
                icon: "donut_large",
                color: "indigo-500",
                desc: "Detailed imaging of soft tissues, organs, and the nervous system using strong magnetic fields and radio waves.",
                features: ["Wide-Bore Options", "Contrast Enhanced"],
              },
              {
                title: "CT Scans (Computed Tomography)",
                icon: "data_usage",
                color: "blue-500",
                desc: "Cross-sectional images of the body used to diagnose complex conditions, guide biopsies, and monitor treatment effectiveness.",
                features: ["64-Slice Technology", "Low-Dose Protocols"],
              },
            ].map((service, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-soft transition-all duration-300 bg-white group h-full">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-${service.color} group-hover:bg-primary group-hover:text-white transition-colors duration-300`}
                    >
                      <span className="material-icons text-3xl">
                        {service.icon}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="text-sm space-y-1 text-slate-500">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="material-icons text-green-500 text-xs">
                            check
                          </span>{" "}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" id="specialists">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                  Our Team
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                  Meet Our Radiologists
                </h2>
              </div>
              <Link
                to="/doctors"
                className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                View All Doctors{" "}
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Jenkins",
                role: "Chief Radiologist",
                img: "/images/doctors/team-dr-sarah-jenkins.jpg",
              },
              {
                name: "Dr. Michael Chen",
                role: "Interventional Radiologist",
                img: "/images/doctors/team-dr-mark-williams.jpg",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Pediatric Radiologist",
                img: "/images/doctors/team-dr-emily-chen.jpg",
              },
            ].map((doc, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <button
                        onClick={() =>
                          openAppointment({
                            doctorName: doc.name,
                            department: "Radiology",
                          })
                        }
                        className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-full text-sm font-medium"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-slate-900">
                      {doc.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {doc.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl border border-slate-700">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <Reveal from="left" threshold={0.1} className="lg:w-1/2">
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Advanced Technology
                  </h2>
                  <p className="text-slate-300 mb-8 leading-relaxed">
                    We invest in the latest imaging technology to ensure the
                    highest quality results with the lowest possible risk to our
                    patients. Our facility is equipped with next-generation
                    scanners and software.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg text-primary-light">
                        <span className="material-icons text-2xl text-blue-400">
                          psychology
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white mb-1">
                          AI-Assisted Imaging Analysis
                        </h4>
                        <p className="text-sm text-slate-400">
                          Utilizing artificial intelligence to assist
                          radiologists in detecting subtle abnormalities earlier
                          and more accurately.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary/20 p-3 rounded-lg">
                        <span className="material-icons text-2xl text-emerald-400">
                          security
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white mb-1">
                          Low-Radiation Equipment
                        </h4>
                        <p className="text-sm text-slate-400">
                          Our CT and X-ray systems are optimized to reduce
                          radiation dose by up to 60% without compromising image
                          quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal from="right" threshold={0.1} className="lg:w-1/2 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                    <span className="text-4xl font-bold text-primary block mb-2">
                      24/7
                    </span>
                    <span className="text-sm text-slate-300">
                      Emergency Imaging
                    </span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                    <span className="text-4xl font-bold text-emerald-400 block mb-2">
                      4k+
                    </span>
                    <span className="text-sm text-slate-300">
                      Scans Monthly
                    </span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center col-span-2">
                    <span className="text-4xl font-bold text-purple-400 block mb-2">
                      100%
                    </span>
                    <span className="text-sm text-slate-300">
                      Digital Archives
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" id="appointment">
        <div className="absolute inset-0 bg-linear-to-br from-blue-950 to-slate-900"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">
            scanner
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                Precise Diagnostics
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Ready for Your <br />
                <span className="text-blue-300">Scan?</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                Whether you need a routine screening or a complex diagnostic
                procedure, our radiology team is here to provide exceptional
                care.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openAppointment({ department: "Radiology" })}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-blue-950 bg-white rounded-full hover:bg-blue-50 shadow-xl shadow-blue-900/20 transition-all hover:scale-105"
                >
                  Request Appointment
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  Doctor Referrals
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Radiology;
