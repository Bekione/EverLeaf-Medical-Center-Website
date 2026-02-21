import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const Cardiology: React.FC = () => {
  const { t } = useTranslation();
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
        title={t(
          "pages.departments.cardiology.seo.title",
          "Cardiology Department",
        )}
        description={t(
          "pages.departments.cardiology.seo.description",
          "World-class heart care and cardiology services. Expert diagnosis and treatment for cardiovascular conditions.",
        )}
        canonical="https://everleaf-medical.com/departments/cardiology"
      />
      <header className="bg-bg border-b border-border py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal delay={0}>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                  {t(
                    "pages.departments.cardiology.hero.badge",
                    "Department of Cardiology",
                  )}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-txt mb-6 leading-tight">
                  {t(
                    "pages.departments.cardiology.hero.titlePart1",
                    "World-Class",
                  )}{" "}
                  <span className="text-primary">
                    {t(
                      "pages.departments.cardiology.hero.titleHighlight",
                      "Heart Care",
                    )}
                  </span>
                  {t(
                    "pages.departments.cardiology.hero.titlePart2",
                    " & Cardiology",
                  )}
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  {t(
                    "pages.departments.cardiology.hero.description",
                    "Our Cardiology Department provides comprehensive care for heart and vascular conditions. From advanced diagnostics to surgical treatments, we are committed to your heart health.",
                  )}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() =>
                      openAppointment({ department: "Cardiology" })
                    }
                    className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/20 hover:-translate-y-0.5"
                  >
                    {t(
                      "pages.departments.cardiology.hero.buttons.appointment",
                      "Book Consultation",
                    )}
                  </button>
                  <button
                    onClick={(e) => scrollToSection(e, "specialists")}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-txt bg-bg border border-border rounded-lg hover:bg-bg-alt transition-colors"
                  >
                    {t(
                      "pages.departments.cardiology.hero.buttons.team",
                      "Meet Our Team",
                    )}
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
                    src="/images/hero/cardilogy-hero-1.jpg"
                    alt={t(
                      "pages.departments.cardiology.hero.badge",
                      "Cardiology Team",
                    )}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 z-20 bg-surface p-4 rounded-xl shadow-xl border border-border max-w-xs animate-fade-in hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-50 w-12 h-12 flex items-center justify-center rounded-full text-red-500">
                      <span className="material-icons text-2xl">favorite</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-txt">
                        {t(
                          "pages.departments.cardiology.stats.surgeries.value",
                          "5,000+",
                        )}
                      </p>
                      <p className="text-xs text-muted uppercase tracking-wide font-semibold">
                        {t(
                          "pages.departments.cardiology.stats.surgeries.label",
                          "Surgeries Successful",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="py-20 bg-bg-alt">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                {t(
                  "pages.departments.cardiology.conditions.badge",
                  "Diagnosis & Care",
                )}
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-txt mb-4">
                {t(
                  "pages.departments.cardiology.conditions.title",
                  "Conditions We Treat",
                )}
              </h2>
              <p className="text-muted">
                {t(
                  "pages.departments.cardiology.conditions.description",
                  "We specialize in diagnosing and treating a wide range of cardiovascular conditions using the latest medical advancements.",
                )}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t(
                  "pages.departments.cardiology.conditions.items.0.title",
                  "Coronary Artery Disease",
                ),
                icon: "favorite",
                color: "red",
                desc: t(
                  "pages.departments.cardiology.conditions.items.0.description",
                  "Treatment for narrowed or blocked blood vessels that can lead to heart attack.",
                ),
              },
              {
                title: t(
                  "pages.departments.cardiology.conditions.items.1.title",
                  "Heart Failure",
                ),
                icon: "water_drop",
                color: "blue",
                desc: t(
                  "pages.departments.cardiology.conditions.items.1.description",
                  "Comprehensive management plans for chronic heart failure conditions.",
                ),
              },
              {
                title: t(
                  "pages.departments.cardiology.conditions.items.2.title",
                  "Arrhythmia",
                ),
                icon: "show_chart",
                color: "orange",
                desc: t(
                  "pages.departments.cardiology.conditions.items.2.description",
                  "Expert care for irregular heartbeats, including atrial fibrillation.",
                ),
              },
              {
                title: t(
                  "pages.departments.cardiology.conditions.items.3.title",
                  "Valvular Heart Disease",
                ),
                icon: "change_circle",
                color: "purple",
                desc: t(
                  "pages.departments.cardiology.conditions.items.3.description",
                  "Repair and replacement therapies for damaged heart valves.",
                ),
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="bg-surface p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow h-full">
                  <div
                    className={`w-12 h-12 bg-${item.color}-100 text-${item.color}-600 rounded-lg flex items-center justify-center mb-4`}
                  >
                    <span className="material-icons text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-txt mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg" id="specialists">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                  {t("pages.departments.cardiology.team.badge", "Our Team")}
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-txt">
                  {t(
                    "pages.departments.cardiology.team.title",
                    "Meet Our Specialists",
                  )}
                </h2>
              </div>
              <Link
                to="/doctors"
                className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                {t(
                  "pages.departments.cardiology.team.viewAll",
                  "View All Doctors",
                )}{" "}
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: t(
                  "pages.departments.cardiology.team.members.james.name",
                  "Dr. James Wilson",
                ),
                role: t(
                  "pages.departments.cardiology.team.members.james.role",
                  "Chief Cardiologist",
                ),
                img: "/images/doctors/team-dr-james-wilson.jpg",
              },
              {
                name: t(
                  "pages.departments.cardiology.team.members.bereket.name",
                  "Dr. Bereket Kinfe",
                ),
                role: t(
                  "pages.departments.cardiology.team.members.bereket.role",
                  "Cardiothoracic Surgeon",
                ),
                img: "/images/doctors/team-dr-bereket-kinfe.jpg",
              },
              {
                name: t(
                  "pages.departments.cardiology.team.members.michael.name",
                  "Dr. Michael Chen",
                ),
                role: t(
                  "pages.departments.cardiology.team.members.michael.role",
                  "Electrophysiologist",
                ),
                img: "/images/doctors/team-dr-michael-chen.jpg",
              },
              {
                name: t(
                  "pages.departments.cardiology.team.members.emily.name",
                  "Dr. Emily Ross",
                ),
                role: t(
                  "pages.departments.cardiology.team.members.emily.role",
                  "Preventive Cardiologist",
                ),
                img: "/images/doctors/team-dr-emily-ross.jpg",
              },
            ].map((doc, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group h-full">
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
                            department: "Cardiology",
                          })
                        }
                        className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {t("common.bookAppointment", "Book Appointment")}
                      </button>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-txt">{doc.name}</h3>
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
        <div className="absolute inset-0 bg-linear-to-br from-cta-from to-cta-to"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">
            favorite
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t(
                  "pages.departments.cardiology.cta.badge",
                  "Start Your Journey",
                )}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t(
                  "pages.departments.cardiology.cta.titlePart1",
                  "Prioritize Your",
                )}{" "}
                <br />
                <span className="text-cta-accent">
                  {t(
                    "pages.departments.cardiology.cta.titleHighlight",
                    "Heart Health",
                  )}
                </span>{" "}
                {t("pages.departments.cardiology.cta.titlePart2", "Today")}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t(
                  "pages.departments.cardiology.cta.description",
                  "Don't wait for symptoms to worsen. Our expert cardiologists are here to provide the personalized care you deserve. Schedule your consultation now.",
                )}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openAppointment({ department: "Cardiology" })}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:bg-white/90 shadow-xl shadow-black/20 transition-all hover:scale-105"
                >
                  {t(
                    "pages.departments.cardiology.cta.buttons.appointment",
                    "Request an Appointment",
                  )}
                </button>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t(
                    "pages.departments.cardiology.cta.buttons.call",
                    "Call (555) 123-4567",
                  )}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cardiology;
