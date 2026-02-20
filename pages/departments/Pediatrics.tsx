import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const Pediatrics: React.FC = () => {
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
        title="Pediatrics Department"
        description="Compassionate medical care for infants, children, and adolescents. Child-friendly environment and expert pediatricians."
        canonical="https://everleaf-medical.com/departments/pediatrics"
      />
      <header className="relative bg-white border-b border-slate-100 py-12 lg:py-16 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-sky-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-50 blur-3xl opacity-60"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal delay={0}>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-sky-600 uppercase bg-sky-50 rounded-full">
                  Department of Pediatrics
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                  Compassionate Care for <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-blue-600">
                    Your Little Ones
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                  From newborns to adolescents, our dedicated team of
                  pediatricians provides comprehensive medical care in a warm,
                  child-friendly environment.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() =>
                      openAppointment({ department: "Pediatrics" })
                    }
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30"
                  >
                    Book a Visit
                  </button>
                  <button
                    onClick={(e) => scrollToSection(e, "specialists")}
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all"
                  >
                    Meet Our Team
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
                    alt="Pediatrician examining a child"
                    className="w-full h-full object-cover"
                    src="/images/hero/home-hero-4.jpg"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-fade-in hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full text-orange-600">
                      <span className="material-icons text-2xl">toys</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-900">
                        Child-Friendly
                      </p>
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">
                        Environment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-6 relative z-10">
          <Reveal threshold={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                Diagnosis & Care
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">
                Conditions We Treat
              </h2>
              <p className="text-slate-600">
                We specialize in diagnosing and treating a wide range of
                childhood conditions, ensuring your child grows up healthy and
                strong. Our approach focuses on preventive care and early
                intervention.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Childhood Illnesses",
                icon: "coronavirus",
                color: "red",
                desc: "Diagnosis and treatment of common infections, fevers, flu, and chronic conditions like asthma.",
              },
              {
                title: "Vaccinations",
                icon: "vaccines",
                color: "blue",
                desc: "Comprehensive immunization schedules to protect your child from serious preventable diseases.",
              },
              {
                title: "Developmental Delays",
                icon: "trending_up",
                color: "orange",
                desc: "Monitoring growth milestones and providing early intervention for developmental concerns.",
              },
              {
                title: "Nutrition & Diet",
                icon: "restaurant",
                color: "purple",
                desc: "Expert guidance on breastfeeding, formula, introduction to solids, and healthy eating habits.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-10 lg:col-start-2 space-y-16">
              <section>
                <Reveal threshold={0.1}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                      <span className="material-icons">medical_services</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Services & Procedures
                    </h2>
                  </div>
                </Reveal>
                <Reveal threshold={0.1}>
                  <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-card">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                      <div className="p-6 md:p-8 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="material-icons text-primary text-2xl">
                            child_friendly
                          </span>
                          <h3 className="text-lg font-bold text-slate-900">
                            Newborn Care
                          </h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          Complete physical exams, screening tests, and care for
                          newborns immediately after delivery and in the first
                          few weeks of life.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            First check-up within 48 hours
                          </li>
                          <li className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            Lactation support
                          </li>
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="material-icons text-primary text-2xl">
                            calendar_month
                          </span>
                          <h3 className="text-lg font-bold text-slate-900">
                            Well-Child Visits
                          </h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          Regular health supervision visits to track growth,
                          development, behavior, and general well-being at key
                          ages.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            Annual physicals
                          </li>
                          <li className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            School & sports physicals
                          </li>
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 hover:bg-slate-50 transition-colors border-t border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="material-icons text-primary text-2xl">
                            content_cut
                          </span>
                          <h3 className="text-lg font-bold text-slate-900">
                            Pediatric Surgery
                          </h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          Surgical care for children ranging from minor
                          procedures to complex operations, performed by
                          specialized pediatric surgeons.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            Minimally invasive techniques
                          </li>
                          <li className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            Post-op recovery care
                          </li>
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 hover:bg-slate-50 transition-colors border-t border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="material-icons text-primary text-2xl">
                            face_3
                          </span>
                          <h3 className="text-lg font-bold text-slate-900">
                            Adolescent Medicine
                          </h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          Specialized care addressing the physical,
                          psychological, and social needs of teenagers and young
                          adults.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            Mental health support
                          </li>
                          <li className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            Reproductive health
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </section>

              <section>
                <Reveal threshold={0.1}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                      <span className="material-icons">toys</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      Child-Friendly Facility
                    </h2>
                  </div>
                </Reveal>
                <Reveal threshold={0.1}>
                  <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2">
                      <img
                        alt="Child friendly hospital room"
                        className="rounded-xl shadow-lg w-full h-64 object-cover"
                        src="/images/pediatrics-body-1.jpg"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        Designed for Comfort
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Our pediatric wing is distinct from the main hospital,
                        featuring bright colors, play areas, and patient rooms
                        designed to reduce anxiety. We believe that a healing
                        environment is just as important as the medical care we
                        provide.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-slate-700">
                          <span className="w-6 h-6 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-xs">
                            <span className="material-icons text-sm">
                              check
                            </span>
                          </span>
                          Dedicated playrooms with supervision
                        </li>
                        <li className="flex items-center gap-3 text-slate-700">
                          <span className="w-6 h-6 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-xs">
                            <span className="material-icons text-sm">
                              check
                            </span>
                          </span>
                          In-room entertainment systems
                        </li>
                        <li className="flex items-center gap-3 text-slate-700">
                          <span className="w-6 h-6 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-xs">
                            <span className="material-icons text-sm">
                              check
                            </span>
                          </span>
                          Overnight facilities for parents
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </section>
            </div>
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
                  Meet Our Pediatricians
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
                name: "Dr. Ashley Johnson",
                role: "Pediatrician",
                img: "/images/doctors/team-dr-ashley-johnson.jpg",
              },
              {
                name: "Dr. John Chen",
                role: "Pediatric Surgeon",
                img: "/images/doctors/team-dr-john-chen.jpg",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Adolescent Specialist",
                img: "/images/doctors/team-dr-emily-rodriguez.jpg",
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
                            department: "Pediatrics",
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

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 to-blue-900"></div>
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
            child_care
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                Taking New Patients
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Schedule Your <br />
                <span className="text-blue-300">Child's Visit</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                Give your child the gift of good health. Our expert
                pediatricians provide compassionate care in a warm,
                child-friendly environment. Book your visit today.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openAppointment({ department: "Pediatrics" })}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:bg-blue-50 shadow-xl shadow-blue-900/20 transition-all hover:scale-105"
                >
                  Book Appointment Now
                </button>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  Call (555) 123-4567
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pediatrics;
