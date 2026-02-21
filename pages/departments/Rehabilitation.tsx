import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const Rehabilitation: React.FC = () => {
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
        title={t("pages.departments.rehabilitation.seo.title")}
        description={t("pages.departments.rehabilitation.seo.description")}
        canonical="https://everleaf-medical.com/departments/rehabilitation"
      />
      <header className="relative bg-bg border-b border-border overflow-hidden py-12 lg:py-16">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Reveal delay={0}>
                <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                  {t("pages.departments.rehabilitation.hero.badge")}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-txt mb-6 leading-tight">
                  {t("pages.departments.rehabilitation.hero.titlePart1")}{" "}
                  <br className="hidden sm:block" />
                  <span className="text-primary">
                    {t("pages.departments.rehabilitation.hero.titleHighlight")}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-muted leading-relaxed max-w-xl mb-8">
                  {t("pages.departments.rehabilitation.hero.description")}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={(e) => scrollToSection(e, "specialists")}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-soft hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {t(
                      "pages.departments.rehabilitation.hero.buttons.specialists",
                    )}
                  </button>
                  <button
                    onClick={(e) => scrollToSection(e, "services")}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-txt transition-all duration-200 bg-bg border border-border rounded-lg hover:bg-bg-alt"
                  >
                    {t(
                      "pages.departments.rehabilitation.hero.buttons.services",
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
                    src="/images/hero/rehabilitation-hero.jpg"
                    alt="Rehabilitation Session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 z-20 bg-surface p-4 rounded-xl shadow-xl border border-border max-w-xs animate-fade-in hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full text-orange-600">
                      <span className="material-icons text-xl">verified</span>
                    </div>
                    <div>
                      <p className="font-bold text-txt text-xl">
                        {t(
                          "pages.departments.rehabilitation.stats.recovery.value",
                        )}
                      </p>
                      <p className="text-xs text-muted uppercase tracking-wide font-semibold">
                        {t(
                          "pages.departments.rehabilitation.stats.recovery.label",
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
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-txt mb-4">
                {t("pages.departments.rehabilitation.conditions.title")}
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                {t("pages.departments.rehabilitation.conditions.description")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t(
                  "pages.departments.rehabilitation.conditions.items.sports.title",
                ),
                icon: "fitness_center",
                color: "blue",
                desc: t(
                  "pages.departments.rehabilitation.conditions.items.sports.description",
                ),
              },
              {
                title: t(
                  "pages.departments.rehabilitation.conditions.items.stroke.title",
                ),
                icon: "favorite",
                color: "red",
                desc: t(
                  "pages.departments.rehabilitation.conditions.items.stroke.description",
                ),
              },
              {
                title: t(
                  "pages.departments.rehabilitation.conditions.items.surgical.title",
                ),
                icon: "healing",
                color: "teal",
                desc: t(
                  "pages.departments.rehabilitation.conditions.items.surgical.description",
                ),
              },
              {
                title: t(
                  "pages.departments.rehabilitation.conditions.items.chronic.title",
                ),
                icon: "spa",
                color: "purple",
                desc: t(
                  "pages.departments.rehabilitation.conditions.items.chronic.description",
                ),
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border hover:shadow-card transition-all duration-300 group h-full">
                  <div
                    className={`w-14 h-14 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-500 mb-6 group-hover:bg-${item.color}-500 group-hover:text-white transition-colors duration-300`}
                  >
                    <span className="material-icons text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-txt mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg" id="services">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <Reveal from="left" threshold={0.1} className="w-full md:w-1/3">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                  {t("pages.departments.rehabilitation.services.badge")}
                </span>
                <h2 className="text-3xl font-serif font-bold text-txt mb-6">
                  {t("pages.departments.rehabilitation.services.title")}
                </h2>
                <p className="text-muted mb-8 leading-relaxed">
                  {t("pages.departments.rehabilitation.services.description")}
                </p>
              </div>
            </Reveal>
            <div className="w-full md:w-2/3">
              <div className="space-y-6">
                {[
                  {
                    title: t(
                      "pages.departments.rehabilitation.services.items.physical.title",
                    ),
                    desc: t(
                      "pages.departments.rehabilitation.services.items.physical.description",
                    ),
                    icon: "directions_walk",
                    color: "orange",
                  },
                  {
                    title: t(
                      "pages.departments.rehabilitation.services.items.occupational.title",
                    ),
                    desc: t(
                      "pages.departments.rehabilitation.services.items.occupational.description",
                    ),
                    icon: "accessibility_new",
                    color: "green",
                  },
                  {
                    title: t(
                      "pages.departments.rehabilitation.services.items.pain.title",
                    ),
                    desc: t(
                      "pages.departments.rehabilitation.services.items.pain.description",
                    ),
                    icon: "sentiment_satisfied",
                    color: "blue",
                  },
                ].map((service, i) => (
                  <Reveal key={i} delay={i * 100} threshold={0.1}>
                    <div className="flex gap-6 p-6 rounded-xl hover:bg-bg-alt transition-colors border border-transparent hover:border-border group">
                      <div
                        className={`shrink-0 w-12 h-12 rounded-full bg-${service.color}-100 text-${service.color}-600 flex items-center justify-center group-hover:bg-${service.color}-500 group-hover:text-white transition-colors duration-300`}
                      >
                        <span className="material-icons">{service.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-txt mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted text-sm">{service.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-alt relative">
        <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-bottom-right translate-y-20 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal threshold={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-txt mb-4">
                {t("pages.departments.rehabilitation.technology.title")}
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                {t("pages.departments.rehabilitation.technology.description")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal from="left" threshold={0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg group h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
                  <img
                    src="/images/rehabilitation-body-1.jpg"
                    alt="Advanced Mobility Aids"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-txt mb-3">
                    {t(
                      "pages.departments.rehabilitation.technology.items.mobility.title",
                    )}
                  </h3>
                  <p className="text-muted text-sm">
                    {t(
                      "pages.departments.rehabilitation.technology.items.mobility.description",
                    )}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal from="right" threshold={0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg group h-full">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
                  <img
                    src="/images/rehabilitation-body-2.jpg"
                    alt="Therapeutic Equipment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {t(
                      "pages.departments.rehabilitation.technology.items.therapeutic.title",
                    )}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {t(
                      "pages.departments.rehabilitation.technology.items.therapeutic.description",
                    )}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="specialists">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                  {t("pages.departments.rehabilitation.team.badge")}
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-txt">
                  {t("pages.departments.rehabilitation.team.title")}
                </h2>
              </div>
              <Link
                to="/doctors"
                className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                {t("pages.departments.rehabilitation.team.viewAll")}{" "}
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "maya",
                name: t(
                  "pages.departments.rehabilitation.team.members.maya.name",
                ),
                role: t(
                  "pages.departments.rehabilitation.team.members.maya.role",
                ),
                img: "/images/doctors/team-dr-maya-lahan.jpg",
              },
              {
                id: "raymond",
                name: t(
                  "pages.departments.rehabilitation.team.members.raymond.name",
                ),
                role: t(
                  "pages.departments.rehabilitation.team.members.raymond.role",
                ),
                img: "/images/doctors/team-dr-raymond-langston.jpg",
              },
              {
                id: "sandra",
                name: t(
                  "pages.departments.rehabilitation.team.members.sandra.name",
                ),
                role: t(
                  "pages.departments.rehabilitation.team.members.sandra.role",
                ),
                img: "/images/doctors/team-dr-sandra-mornay.jpg",
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
                            department: "Rehabilitation",
                          })
                        }
                        className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {t("pages.departments.rehabilitation.team.button")}
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
            accessibility_new
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.departments.rehabilitation.cta.badge")}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.departments.rehabilitation.cta.titlePart1")} <br />
                <span className="text-cta-accent">
                  {t("pages.departments.rehabilitation.cta.titleHighlight")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.departments.rehabilitation.cta.description")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    openAppointment({ department: "Rehabilitation" })
                  }
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:bg-white/90 shadow-xl shadow-black/20 transition-all hover:scale-105"
                >
                  {t(
                    "pages.departments.rehabilitation.cta.buttons.consultation",
                  )}
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t("pages.departments.rehabilitation.cta.buttons.contact")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rehabilitation;
