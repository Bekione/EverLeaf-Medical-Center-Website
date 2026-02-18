import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";

const Cardiology: React.FC = () => {
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
        title="Cardiology Department"
        description="World-class heart care and cardiology services. Expert diagnosis and treatment for cardiovascular conditions."
        canonical="https://everleaf-medical.com/departments/cardiology"
      />
      <header className="bg-white border-b border-slate-100 py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                Department of Cardiology
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                World-Class <span className="text-primary">Heart Care</span> &
                Cardiology
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                Our Cardiology Department provides comprehensive care for heart
                and vascular conditions. From advanced diagnostics to surgical
                treatments, we are committed to your heart health.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => openAppointment({ department: "Cardiology" })}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
                >
                  Book Consultation
                </button>
                <button
                  onClick={(e) => scrollToSection(e, "specialists")}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Meet Our Team
                </button>
              </div>
            </div>
            <div className="relative hidden lg:flex w-full justify-center">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[450px] w-full max-w-lg">
                <img
                  src="/images/hero/cardilogy-hero-1.jpg"
                  alt="Cardiology Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-fade-in hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-red-50 p-3 rounded-full text-red-500">
                    <span className="material-icons text-2xl">favorite</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">5,000+</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">
                      Surgeries Successful
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
            <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
              Diagnosis & Care
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
              Conditions We Treat
            </h2>
            <p className="text-slate-600">
              We specialize in diagnosing and treating a wide range of
              cardiovascular conditions using the latest medical advancements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Coronary Artery Disease",
                icon: "favorite",
                color: "red",
                desc: "Treatment for narrowed or blocked blood vessels that can lead to heart attack.",
              },
              {
                title: "Heart Failure",
                icon: "water_drop",
                color: "blue",
                desc: "Comprehensive management plans for chronic heart failure conditions.",
              },
              {
                title: "Arrhythmia",
                icon: "show_chart",
                color: "orange",
                desc: "Expert care for irregular heartbeats, including atrial fibrillation.",
              },
              {
                title: "Valvular Heart Disease",
                icon: "change_circle",
                color: "purple",
                desc: "Repair and replacement therapies for damaged heart valves.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 bg-${item.color}-100 text-${item.color}-600 rounded-lg flex items-center justify-center mb-4`}
                >
                  <span className="material-icons text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="specialists">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                Our Team
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                Meet Our Specialists
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. James Wilson",
                role: "Chief Cardiologist",
                img: "/images/doctors/team-dr-james-wilson.jpg",
              },
              {
                name: "Dr. Bereket Kinfe",
                role: "Cardiothoracic Surgeon",
                img: "/images/doctors/team-dr-bereket-kinfe.jpg",
              },
              {
                name: "Dr. Michael Chen",
                role: "Electrophysiologist",
                img: "/images/doctors/team-dr-michael-chen.jpg",
              },
              {
                name: "Dr. Emily Ross",
                role: "Preventive Cardiologist",
                img: "/images/doctors/team-dr-emily-ross.jpg",
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
                          department: "Cardiology",
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900"></div>
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
            favorite
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Start Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Prioritize Your <br />
              <span className="text-blue-300">Heart Health</span> Today
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Don't wait for symptoms to worsen. Our expert cardiologists are
              here to provide the personalized care you deserve. Schedule your
              consultation now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openAppointment({ department: "Cardiology" })}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:bg-blue-50 shadow-xl shadow-blue-900/20 transition-all hover:scale-105"
              >
                Request an Appointment
              </button>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cardiology;
