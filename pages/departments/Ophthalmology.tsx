import React from "react";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const Ophthalmology: React.FC = () => {
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
        title={t("pages.departments.ophthalmology.seo.title")}
        description={t("pages.departments.ophthalmology.seo.description")}
        canonical="https://everleaf-medical.com/departments/ophthalmology"
      />
      <header className="relative bg-bg border-b border-border py-12 lg:py-16 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Reveal delay={0}>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                  {t("pages.departments.ophthalmology.hero.badge")}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-txt mb-6 leading-tight">
                  {t("pages.departments.ophthalmology.hero.titlePart1")}{" "}
                  <span className="text-primary">
                    {t("pages.departments.ophthalmology.hero.titleHighlight")}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  {t("pages.departments.ophthalmology.hero.description")}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() =>
                      openAppointment({ department: "Ophthalmology" })
                    }
                    className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all"
                  >
                    {t("pages.departments.ophthalmology.hero.buttons.exam")}
                  </button>
                  <button
                    onClick={(e) => scrollToSection(e, "specialists")}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-txt bg-bg border border-border rounded-lg hover:bg-bg-alt transition-all"
                  >
                    {t(
                      "pages.departments.ophthalmology.hero.buttons.specialists",
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
                    alt="Ophthalmologist examining patient"
                    className="w-full h-full object-cover"
                    src="/images/hero/home-hero-2.jpg"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 z-20 bg-surface p-4 rounded-xl shadow-xl border border-border max-w-xs animate-fade-in hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full text-green-600">
                      <span className="material-icons text-2xl">
                        visibility
                      </span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-txt">
                        {t(
                          "pages.departments.ophthalmology.stats.vision.value",
                        )}
                      </p>
                      <p className="text-xs text-muted uppercase tracking-wide font-semibold">
                        {t(
                          "pages.departments.ophthalmology.stats.vision.label",
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

      <section className="py-10 bg-primary-light/30 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                val: t(
                  "pages.departments.ophthalmology.stats.items.surgeries.value",
                ),
                label: t(
                  "pages.departments.ophthalmology.stats.items.surgeries.label",
                ),
              },
              {
                val: t(
                  "pages.departments.ophthalmology.stats.items.success.value",
                ),
                label: t(
                  "pages.departments.ophthalmology.stats.items.success.label",
                ),
              },
              {
                val: t(
                  "pages.departments.ophthalmology.stats.items.doctors.value",
                ),
                label: t(
                  "pages.departments.ophthalmology.stats.items.doctors.label",
                ),
              },
              {
                val: t(
                  "pages.departments.ophthalmology.stats.items.emergency.value",
                ),
                label: t(
                  "pages.departments.ophthalmology.stats.items.emergency.label",
                ),
              },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">
                    {stat.val}
                  </p>
                  <p className="text-sm text-muted font-medium">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-alt">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                {t("pages.departments.ophthalmology.conditions.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-txt mt-2 mb-4">
                {t("pages.departments.ophthalmology.conditions.title")}
              </h2>
              <p className="text-muted">
                {t("pages.departments.ophthalmology.conditions.description")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t(
                  "pages.departments.ophthalmology.conditions.items.cataracts.title",
                ),
                icon: "blur_on",
                color: "blue",
                desc: t(
                  "pages.departments.ophthalmology.conditions.items.cataracts.description",
                ),
              },
              {
                title: t(
                  "pages.departments.ophthalmology.conditions.items.glaucoma.title",
                ),
                icon: "visibility_off",
                color: "teal",
                desc: t(
                  "pages.departments.ophthalmology.conditions.items.glaucoma.description",
                ),
              },
              {
                title: t(
                  "pages.departments.ophthalmology.conditions.items.macular.title",
                ),
                icon: "center_focus_weak",
                color: "orange",
                desc: t(
                  "pages.departments.ophthalmology.conditions.items.macular.description",
                ),
              },
              {
                title: t(
                  "pages.departments.ophthalmology.conditions.items.diabetic.title",
                ),
                icon: "bloodtype",
                color: "red",
                desc: t(
                  "pages.departments.ophthalmology.conditions.items.diabetic.description",
                ),
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="bg-surface rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border group h-full">
                  <div
                    className={`w-14 h-14 bg-${item.color}-50 rounded-full flex items-center justify-center text-${item.color}-500 mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <span className="material-icons text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-txt mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <Reveal
              from="left"
              threshold={0.1}
              className="md:w-1/3 sticky top-24"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold text-txt mb-6">
                  {t("pages.departments.ophthalmology.services.title")}
                </h2>
                <p className="text-muted mb-8 leading-relaxed">
                  {t("pages.departments.ophthalmology.services.description")}
                </p>
                <button
                  onClick={() =>
                    openAppointment({ department: "Ophthalmology" })
                  }
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
                >
                  {t("pages.departments.ophthalmology.services.button")}
                </button>
              </div>
            </Reveal>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[
                {
                  title: t(
                    "pages.departments.ophthalmology.services.items.lasik.title",
                  ),
                  desc: t(
                    "pages.departments.ophthalmology.services.items.lasik.description",
                  ),
                  icon: "remove_red_eye",
                },
                {
                  title: t(
                    "pages.departments.ophthalmology.services.items.exams.title",
                  ),
                  desc: t(
                    "pages.departments.ophthalmology.services.items.exams.description",
                  ),
                  icon: "assignment",
                },
                {
                  title: t(
                    "pages.departments.ophthalmology.services.items.retinal.title",
                  ),
                  desc: t(
                    "pages.departments.ophthalmology.services.items.retinal.description",
                  ),
                  icon: "science",
                },
                {
                  title: t(
                    "pages.departments.ophthalmology.services.items.corneal.title",
                  ),
                  desc: t(
                    "pages.departments.ophthalmology.services.items.corneal.description",
                  ),
                  icon: "biotech",
                },
              ].map((service, i) => (
                <Reveal key={i} delay={i * 100} threshold={0.1}>
                  <div className="flex gap-4 p-4 rounded-lg hover:bg-bg-alt transition-colors h-full">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <span className="material-icons">{service.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-txt mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-muted">{service.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <Reveal from="left" threshold={0.1} className="lg:w-1/2">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                  {t("pages.departments.ophthalmology.technology.badge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t("pages.departments.ophthalmology.technology.title")}
                </h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  {t("pages.departments.ophthalmology.technology.description")}
                </p>
                <div className="space-y-6">
                  <Reveal delay={100} threshold={0.1}>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                        <span className="material-icons text-2xl">scanner</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          {t(
                            "pages.departments.ophthalmology.technology.items.oct.title",
                          )}
                        </h4>
                        <p className="text-blue-200">
                          {t(
                            "pages.departments.ophthalmology.technology.items.oct.description",
                          )}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={200} threshold={0.1}>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                        <span className="material-icons text-2xl">
                          gps_fixed
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          {t(
                            "pages.departments.ophthalmology.technology.items.diagnostic.title",
                          )}
                        </h4>
                        <p className="text-blue-200">
                          {t(
                            "pages.departments.ophthalmology.technology.items.diagnostic.description",
                          )}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Reveal>
            <Reveal from="right" threshold={0.1} className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <img
                  alt="Advanced Eye Scanning Technology"
                  className="w-full h-auto"
                  src="/images/ophthalmology-body-1.jpg"
                />
              </div>
            </Reveal>
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
            visibility
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.departments.ophthalmology.cta.badge")}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.departments.ophthalmology.cta.titlePart1")} <br />
                <span className="text-cta-accent">
                  {t("pages.departments.ophthalmology.cta.titleHighlight")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.departments.ophthalmology.cta.description")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    openAppointment({ department: "Ophthalmology" })
                  }
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:bg-white/90 shadow-xl shadow-black/20 transition-all hover:scale-105"
                >
                  {t("pages.departments.ophthalmology.cta.buttons.exam")}
                </button>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t("pages.departments.ophthalmology.cta.buttons.call")}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ophthalmology;
