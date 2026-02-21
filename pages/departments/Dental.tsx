import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const Dental: React.FC = () => {
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
        title={t("pages.departments.dental.seo.title", "Dental Clinic")}
        description={t(
          "pages.departments.dental.seo.description",
          "Comprehensive dental and oral healthcare. From routine cleanings to complex oral surgeries and orthodontics.",
        )}
        canonical="https://everleaf-medical.com/departments/dental"
      />
      <header className="bg-bg border-b border-border py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Reveal delay={0}>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                  {t("pages.departments.dental.hero.badge", "Dental Clinic")}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-txt mb-6 leading-tight">
                  {t(
                    "pages.departments.dental.hero.titlePart1",
                    "Comprehensive Dental",
                  )}{" "}
                  <br />
                  <span className="text-primary">
                    {t(
                      "pages.departments.dental.hero.titleHighlight",
                      "& Oral Healthcare",
                    )}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-muted leading-relaxed max-w-2xl mb-8">
                  {t(
                    "pages.departments.dental.hero.description",
                    "Our specialized dental clinic combines advanced technology with compassionate care to ensure your smile is healthy and beautiful. From routine check-ups to complex oral surgeries.",
                  )}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => openAppointment({ department: "Dental" })}
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 hover:-translate-y-0.5"
                  >
                    {t(
                      "pages.departments.dental.hero.buttons.appointment",
                      "Book Dental Exam",
                    )}
                  </button>
                  <button
                    onClick={(e) => scrollToSection(e, "specialists")}
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-txt bg-bg border border-border rounded-lg hover:bg-bg-alt transition-colors"
                  >
                    {t(
                      "pages.departments.dental.hero.buttons.team",
                      "Meet Our Dentists",
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
                    src="/images/hero/dental-hero.jpg"
                    alt={t(
                      "pages.departments.dental.hero.badge",
                      "Modern Dental Clinic",
                    )}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 z-20 bg-surface p-4 rounded-xl shadow-xl border border-border max-w-xs animate-fade-in hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-light w-12 h-12 flex items-center justify-center rounded-full text-primary">
                      <span className="material-icons text-2xl">
                        sentiment_satisfied
                      </span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-txt">
                        {t(
                          "pages.departments.dental.stats.painless.value",
                          "Painless",
                        )}
                      </p>
                      <p className="text-xs text-muted uppercase tracking-wide font-semibold">
                        {t(
                          "pages.departments.dental.stats.painless.label",
                          "Dentistry",
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

      <section className="py-20 bg-bg-alt relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <Reveal threshold={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-txt mb-4">
                {t(
                  "pages.departments.dental.conditions.title",
                  "Conditions We Treat",
                )}
              </h2>
              <p className="text-muted">
                {t(
                  "pages.departments.dental.conditions.description",
                  "We provide specialized treatments for a wide range of dental and oral health issues, restoring function and aesthetics.",
                )}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t(
                  "pages.departments.dental.conditions.items.0.title",
                  "Cavities & Decay",
                ),
                icon: "sentiment_dissatisfied",
                color: "orange",
                desc: t(
                  "pages.departments.dental.conditions.items.0.description",
                  "Treatment of tooth decay with fillings, inlays, and onlays to restore tooth integrity.",
                ),
              },
              {
                title: t(
                  "pages.departments.dental.conditions.items.1.title",
                  "Gum Disease",
                ),
                icon: "opacity",
                color: "red",
                desc: t(
                  "pages.departments.dental.conditions.items.1.description",
                  "Periodontal therapy to treat gingivitis and periodontitis, protecting your gum health.",
                ),
              },
              {
                title: t(
                  "pages.departments.dental.conditions.items.2.title",
                  "Tooth Loss",
                ),
                icon: "mood_bad",
                color: "slate",
                desc: t(
                  "pages.departments.dental.conditions.items.2.description",
                  "Restoration options including bridges, dentures, and implants for missing teeth.",
                ),
              },
              {
                title: t(
                  "pages.departments.dental.conditions.items.3.title",
                  "Misalignment",
                ),
                icon: "grid_on",
                color: "purple",
                desc: t(
                  "pages.departments.dental.conditions.items.3.description",
                  "Orthodontic solutions to correct crooked teeth and bite issues for children and adults.",
                ),
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="bg-white p-6 rounded-xl shadow-card border border-slate-100 hover:shadow-lg transition-all duration-300 group h-full">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <Reveal from="left" threshold={0.1} className="w-full md:w-1/3">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                  {t(
                    "pages.departments.dental.expertise.badge",
                    "Our Expertise",
                  )}
                </span>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                  {t(
                    "pages.departments.dental.expertise.title",
                    "Services & Procedures",
                  )}
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {t(
                    "pages.departments.dental.expertise.description",
                    "We offer a comprehensive suite of dental services tailored to your individual needs. Our goal is to provide pain-free, effective treatments using the latest techniques.",
                  )}
                </p>
              </div>
            </Reveal>
            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  title: t(
                    "pages.departments.dental.expertise.items.0.title",
                    "Routine Cleaning",
                  ),
                  desc: t(
                    "pages.departments.dental.expertise.items.0.description",
                    "Professional scaling and polishing to remove plaque and tartar buildup, preventing gum disease.",
                  ),
                  icon: "brush",
                  color: "cyan",
                },
                {
                  title: t(
                    "pages.departments.dental.expertise.items.1.title",
                    "Teeth Whitening",
                  ),
                  desc: t(
                    "pages.departments.dental.expertise.items.1.description",
                    "Professional bleaching treatments to brighten your smile safely and effectively.",
                  ),
                  icon: "brightness_high",
                  color: "yellow",
                },
                {
                  title: t(
                    "pages.departments.dental.expertise.items.2.title",
                    "Dental Implants",
                  ),
                  desc: t(
                    "pages.departments.dental.expertise.items.2.description",
                    "Permanent, natural-looking replacements for missing teeth that function just like your own.",
                  ),
                  icon: "build",
                  color: "blue",
                },
                {
                  title: t(
                    "pages.departments.dental.expertise.items.3.title",
                    "Orthodontics",
                  ),
                  desc: t(
                    "pages.departments.dental.expertise.items.3.description",
                    "Braces and clear aligners to correct bite issues and align teeth for a perfect smile.",
                  ),
                  icon: "linear_scale",
                  color: "indigo",
                },
              ].map((service, i) => (
                <Reveal key={i} delay={i * 100} threshold={0.1}>
                  <div className="flex gap-4">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-full bg-${service.color}-50 text-${service.color}-600 flex items-center justify-center`}
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
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 relative" id="specialists">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                  {t("pages.departments.dental.team.badge", "Our Team")}
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                  {t(
                    "pages.departments.dental.team.title",
                    "Meet Our Dentists",
                  )}
                </h2>
              </div>
              <Link
                to="/doctors"
                className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                {t("pages.departments.dental.team.viewAll", "View All Doctors")}{" "}
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: t(
                  "pages.departments.dental.team.members.sarah.name",
                  "Dr. Sarah Johnson",
                ),
                role: t(
                  "pages.departments.dental.team.members.sarah.role",
                  "Senior Orthodontist",
                ),
                img: "/images/doctors/team-dr-sarah-johnson.jpg",
              },
              {
                name: t(
                  "pages.departments.dental.team.members.mark.name",
                  "Dr. Mark Williams",
                ),
                role: t(
                  "pages.departments.dental.team.members.mark.role",
                  "Oral Surgeon",
                ),
                img: "/images/doctors/team-dr-mark-williams.jpg",
              },
              {
                name: t(
                  "pages.departments.dental.team.members.emily.name",
                  "Dr. Emily Chen",
                ),
                role: t(
                  "pages.departments.dental.team.members.emily.role",
                  "Pediatric Dentist",
                ),
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
                            department: "Dental",
                          })
                        }
                        className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {t("common.bookAppointment", "Book Appointment")}
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
            <Reveal from="left" threshold={0.1}>
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  {t(
                    "pages.departments.dental.technology.title",
                    "Cutting-Edge Technology",
                  )}
                </h2>
                <p className="text-muted mb-8 leading-relaxed">
                  {t(
                    "pages.departments.dental.technology.description",
                    "We invest in the latest dental technologies to provide accurate diagnoses and effective treatments. Our modern facility is equipped to handle all your dental needs with precision.",
                  )}
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                      <span className="material-icons">
                        radio_button_checked
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        {t(
                          "pages.departments.dental.technology.items.x-rays.title",
                          "Digital X-Rays",
                        )}
                      </h4>
                      <p className="text-sm text-muted mt-1">
                        {t(
                          "pages.departments.dental.technology.items.x-rays.description",
                          "Low-radiation imaging for detailed views of teeth and jaw structure instantly.",
                        )}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                      <span className="material-icons">photo_camera</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">
                        {t(
                          "pages.departments.dental.technology.items.cameras.title",
                          "Intraoral Cameras",
                        )}
                      </h4>
                      <p className="text-sm text-muted mt-1">
                        {t(
                          "pages.departments.dental.technology.items.cameras.description",
                          "High-resolution cameras that allow you to see what the dentist sees in real-time.",
                        )}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
            <div className="relative h-80 rounded-2xl bg-bg-alt border border-border overflow-hidden flex items-center justify-center">
              <span className="material-icons text-9xl text-muted/30">
                medical_services
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" id="appointment">
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
            sentiment_satisfied
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.departments.dental.cta.badge", "Your Smile Matters")}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.departments.dental.cta.titlePart1", "Ready for a")}{" "}
                <br />
                <span className="text-cta-accent">
                  {t(
                    "pages.departments.dental.cta.titleHighlight",
                    "Brighter Smile?",
                  )}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t(
                  "pages.departments.dental.cta.description",
                  "Your oral health is our priority. Schedule your visit with our expert dental team today and experience the difference.",
                )}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openAppointment({ department: "Dental" })}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:bg-white/90 shadow-xl shadow-black/20 transition-all hover:scale-105"
                >
                  {t(
                    "pages.departments.dental.cta.buttons.appointment",
                    "Request Appointment",
                  )}
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t(
                    "pages.departments.dental.cta.buttons.contact",
                    "Contact Dental Clinic",
                  )}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dental;
