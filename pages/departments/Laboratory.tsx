import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";

const Laboratory: React.FC = () => {
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
        title="Laboratory Department"
        description="Advanced clinical laboratory with 24/7 operation. Comprehensive diagnostic testing and accurate results you can trust."
        canonical="https://everleaf-medical.com/departments/laboratory"
      />
      <header className="bg-white border-b border-slate-100 py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-teal-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-teal-600 uppercase bg-teal-50 rounded-full">
                Department of Laboratory Medicine
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Precision Diagnostics &{" "}
                <span className="text-primary">Laboratory Services</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                Our ISO-certified laboratory operates 24/7 to deliver fast,
                accurate diagnostic results. From routine blood work to advanced
                molecular testing, we support your health journey with
                precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => openAppointment({ department: "Laboratory" })}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
                >
                  Request Lab Test
                </button>
                <button
                  onClick={(e) => scrollToSection(e, "services")}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  View Tests
                </button>
              </div>
            </div>
            <div className="relative hidden lg:flex w-full justify-center">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[450px] w-full max-w-lg">
                <img
                  src="/images/hero/laboratory-dept-hero.jpg"
                  alt="Modern Laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-fade-in hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-teal-50 w-12 h-12 flex items-center justify-center rounded-full text-teal-600">
                    <span className="material-icons text-2xl">science</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">24/7</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">
                      Available
                    </p>
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
              Clinical Testing
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              Our Laboratory Services
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive diagnostic testing across multiple disciplines to
              support accurate diagnosis and treatment monitoring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Biochemistry",
                icon: "bloodtype",
                color: "red",
                desc: "Liver function, kidney profiles, lipid panels, and metabolic screening with high precision.",
              },
              {
                title: "Hematology",
                icon: "water_drop",
                color: "blue",
                desc: "Complete blood counts, coagulation studies, and anemia profiling for blood disorders.",
              },
              {
                title: "Microbiology",
                icon: "coronavirus",
                color: "green",
                desc: "Culture & sensitivity, viral serology, and infectious disease identification.",
              },
              {
                title: "Molecular",
                icon: "biotech",
                color: "purple",
                desc: "PCR testing, genetic screening, and cancer biomarkers for precision medicine.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-card border border-slate-100 hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-500 mb-6`}
                >
                  <span className="material-icons text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-white border-y border-slate-100"
        id="services"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary rounded-full"></span>
                Common Tests & Panels
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Complete Blood Count (CBC)",
                    desc: "Essential screening for anemia, infections, and blood disorders. Provides detailed analysis of red cells, white cells, and platelets.",
                    icon: "favorite",
                  },
                  {
                    title: "Comprehensive Metabolic Panel",
                    desc: "Evaluates kidney and liver function, electrolyte balance, and blood sugar levels for overall health assessment.",
                    icon: "local_hospital",
                  },
                  {
                    title: "Lipid Profile",
                    desc: "Measures cholesterol levels (LDL, HDL, triglycerides) to assess cardiovascular disease risk.",
                    icon: "monitor_heart",
                  },
                ].map((service, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="material-icons">{service.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        {service.title}
                      </h4>
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
                <span className="material-icons text-3xl text-primary">
                  speed
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Fast & Accurate Results
                </h2>
              </div>
              <div className="space-y-8">
                <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-slate-200">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 relative z-10">
                    Automated Systems
                  </h4>
                  <p className="text-slate-600 text-sm relative z-10">
                    State-of-the-art analyzers from leading manufacturers ensure
                    consistent, error-free results with rapid turnaround times.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-slate-200">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 relative z-10">
                    Home Collection
                  </h4>
                  <p className="text-slate-600 text-sm relative z-10">
                    Professional phlebotomy service at your doorstep. Book
                    online and receive digital reports directly to your email.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-slate-500 text-sm italic">
                  "Most routine test results available within 4-6 hours. 99.9%
                  accuracy rate with ISO certification."
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
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                Our Team
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                Laboratory Specialists
              </h2>
            </div>
            <Link
              to="/doctors"
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View All Team{" "}
              <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rachel Anderson",
                role: "Chief Pathologist",
                img: "/images/doctors/team-dr-rachel-anderson.jpg",
              },
              {
                name: "Dr. Michael Torres",
                role: "Clinical Biochemist",
                img: "/images/doctors/team-dr-michael-torres.jpg",
              },
              {
                name: "Dr. Lisa Chen",
                role: "Microbiologist",
                img: "/images/doctors/team-dr-lisa-chen.jpg",
              },
            ].map((doc, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button
                      onClick={() =>
                        openAppointment({
                          doctorName: doc.name,
                          department: "Laboratory",
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-slate-900"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">
            science
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Book Your Test
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Need Laboratory <br />
              <span className="text-teal-300">Testing?</span>
            </h2>
            <p className="text-teal-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Fast, accurate results you can trust. Request your lab test today
              or schedule a home collection for your convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openAppointment({ department: "Laboratory" })}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-teal-900 bg-white rounded-full hover:bg-teal-50 shadow-xl shadow-teal-900/20 transition-all hover:scale-105"
              >
                Request Lab Test
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Contact Department
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Laboratory;
