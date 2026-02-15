import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";

const Dental: React.FC = () => {
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
        title="Dental Clinic"
        description="Comprehensive dental and oral healthcare. From routine cleanings to complex oral surgeries and orthodontics."
        canonical="https://everleaf-medical.com/departments/dental"
      />
      <header className="bg-white border-b border-slate-100 py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-cyan-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-cyan-600 uppercase bg-cyan-50 rounded-full">
                Dental Clinic
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Comprehensive Dental & <br />
                <span className="text-primary">Oral Healthcare</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
                Our specialized dental clinic combines advanced technology with
                compassionate care to ensure your smile is healthy and
                beautiful. From routine check-ups to complex oral surgeries.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => openAppointment({ department: "Dental" })}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 hover:-translate-y-0.5"
                >
                  Book Dental Exam
                </button>
                <button
                  onClick={(e) => scrollToSection(e, "specialists")}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Meet Our Dentists
                </button>
              </div>
            </div>
            <div className="relative hidden lg:flex w-full justify-center">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[450px] w-full max-w-lg">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&q=80"
                  alt="Modern Dental Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-fade-in hidden lg:block">
                <div className="flex items-center gap-4">
                  <div className="bg-cyan-50 p-3 rounded-full text-cyan-600">
                    <span className="material-icons text-2xl">
                      sentiment_satisfied
                    </span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">Painless</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">
                      Dentistry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Conditions We Treat
            </h2>
            <p className="text-slate-600">
              We provide specialized treatments for a wide range of dental and
              oral health issues, restoring function and aesthetics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cavities & Decay",
                icon: "sentiment_dissatisfied",
                color: "orange",
                desc: "Treatment of tooth decay with fillings, inlays, and onlays to restore tooth integrity.",
              },
              {
                title: "Gum Disease",
                icon: "opacity",
                color: "red",
                desc: "Periodontal therapy to treat gingivitis and periodontitis, protecting your gum health.",
              },
              {
                title: "Tooth Loss",
                icon: "mood_bad",
                color: "slate",
                desc: "Restoration options including bridges, dentures, and implants for missing teeth.",
              },
              {
                title: "Misalignment",
                icon: "grid_on",
                color: "purple",
                desc: "Orthodontic solutions to correct crooked teeth and bite issues for children and adults.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-${item.color}-100 text-${item.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <span className="material-icons">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="w-full md:w-1/3">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                Our Expertise
              </span>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Services & Procedures
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We offer a comprehensive suite of dental services tailored to
                your individual needs. Our goal is to provide pain-free,
                effective treatments using the latest techniques.
              </p>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Routine Cleaning",
                  desc: "Professional scaling and polishing to remove plaque and tartar buildup, preventing gum disease.",
                  icon: "brush",
                  color: "cyan",
                },
                {
                  title: "Teeth Whitening",
                  desc: "Professional bleaching treatments to brighten your smile safely and effectively.",
                  icon: "brightness_high",
                  color: "yellow",
                },
                {
                  title: "Dental Implants",
                  desc: "Permanent, natural-looking replacements for missing teeth that function just like your own.",
                  icon: "build",
                  color: "blue",
                },
                {
                  title: "Orthodontics",
                  desc: "Braces and clear aligners to correct bite issues and align teeth for a perfect smile.",
                  icon: "linear_scale",
                  color: "indigo",
                },
              ].map((service, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full bg-${service.color}-50 text-${service.color}-600 flex items-center justify-center`}
                  >
                    <span className="material-icons">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 relative" id="specialists">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                Our Team
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                Meet Our Dentists
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Senior Orthodontist",
                icon: "person",
              },
              {
                name: "Dr. Michael Chen",
                role: "Oral Surgeon",
                icon: "person_2",
              },
              {
                name: "Dr. Emily Davis",
                role: "Pediatric Dentist",
                icon: "person_3",
              },
            ].map((doc, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-64 overflow-hidden relative bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <span className="material-icons text-6xl">{doc.icon}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button
                      onClick={() =>
                        openAppointment({
                          doctorName: doc.name,
                          department: "Dental",
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

      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Cutting-Edge Technology
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We invest in the latest dental technologies to provide accurate
                diagnoses and effective treatments. Our modern facility is
                equipped to handle all your dental needs with precision.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-icons">radio_button_checked</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Digital X-Rays</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Low-radiation imaging for detailed views of teeth and jaw
                      structure instantly.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    <span className="material-icons">photo_camera</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Intraoral Cameras</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      High-resolution cameras that allow you to see what the
                      dentist sees in real-time.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden flex items-center justify-center">
              <span className="material-icons text-9xl text-slate-700">
                medical_services
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" id="appointment">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 to-slate-900"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">
            sentiment_satisfied
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Your Smile Matters
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready for a <br />
              <span className="text-cyan-300">Brighter Smile?</span>
            </h2>
            <p className="text-cyan-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Your oral health is our priority. Schedule your visit with our
              expert dental team today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openAppointment({ department: "Dental" })}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-cyan-900 bg-white rounded-full hover:bg-cyan-50 shadow-xl shadow-cyan-900/20 transition-all hover:scale-105"
              >
                Request Appointment
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Contact Dental Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dental;
