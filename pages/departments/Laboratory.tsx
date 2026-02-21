import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const Laboratory: React.FC = () => {
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
        title={t("pages.departments.laboratory.seo.title")}
        description={t("pages.departments.laboratory.seo.description")}
        canonical="https://everleaf-medical.com/departments/laboratory"
      />
      <header className="bg-bg border-b border-border py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal delay={0}>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                  {t("pages.departments.laboratory.hero.badge")}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-txt mb-6 leading-tight">
                  {t("pages.departments.laboratory.hero.titlePart1")}{" "}
                  <span className="text-primary">
                    {t("pages.departments.laboratory.hero.titleHighlight")}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  {t("pages.departments.laboratory.hero.description")}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() =>
                      openAppointment({ department: "Laboratory" })
                    }
                    className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/20 hover:-translate-y-0.5"
                  >
                    {t("pages.departments.laboratory.hero.buttons.appointment")}
                  </button>
                  <button
                    onClick={(e) => scrollToSection(e, "services")}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-txt bg-theme border border-border rounded-lg hover:bg-bg-alt transition-colors"
                  >
                    {t("pages.departments.laboratory.hero.buttons.viewTests")}
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
                    src="/images/hero/laboratory-dept-hero.jpg"
                    alt="Modern Laboratory"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 z-20 bg-surface p-4 rounded-xl shadow-xl border border-border max-w-xs animate-fade-in hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-light w-12 h-12 flex items-center justify-center rounded-full text-primary">
                      <span className="material-icons text-2xl">science</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-txt">
                        {t(
                          "pages.departments.laboratory.stats.available.value",
                        )}
                      </p>
                      <p className="text-xs text-muted uppercase tracking-wide font-semibold">
                        {t(
                          "pages.departments.laboratory.stats.available.label",
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
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                {t("pages.departments.laboratory.intro.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-txt mb-6">
                {t("pages.departments.laboratory.intro.title")}
              </h2>
              <p className="text-lg text-muted">
                {t("pages.departments.laboratory.intro.description")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t(
                  "pages.departments.laboratory.disciplines.biochemistry.title",
                ),
                icon: "bloodtype",
                color: "red",
                desc: t(
                  "pages.departments.laboratory.disciplines.biochemistry.description",
                ),
              },
              {
                title: t(
                  "pages.departments.laboratory.disciplines.hematology.title",
                ),
                icon: "water_drop",
                color: "blue",
                desc: t(
                  "pages.departments.laboratory.disciplines.hematology.description",
                ),
              },
              {
                title: t(
                  "pages.departments.laboratory.disciplines.microbiology.title",
                ),
                icon: "coronavirus",
                color: "green",
                desc: t(
                  "pages.departments.laboratory.disciplines.microbiology.description",
                ),
              },
              {
                title: t(
                  "pages.departments.laboratory.disciplines.molecular.title",
                ),
                icon: "biotech",
                color: "purple",
                desc: t(
                  "pages.departments.laboratory.disciplines.molecular.description",
                ),
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="bg-surface p-8 rounded-2xl shadow-card border border-border hover:-translate-y-2 transition-all duration-300 h-full">
                  <div
                    className={`w-14 h-14 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-500 mb-6`}
                  >
                    <span className="material-icons text-3xl">{item.icon}</span>
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

      <section className="py-20 bg-bg border-y border-border" id="services">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal from="left" threshold={0.1}>
              <div>
                <h2 className="text-3xl font-serif font-bold text-txt mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-primary rounded-full"></span>
                  {t("pages.departments.laboratory.tests.title")}
                </h2>
                <div className="space-y-6">
                  {Object.keys(
                    t("pages.departments.laboratory.tests.items", {
                      returnObjects: true,
                    }) as object,
                  ).map((key, i) => {
                    const test = t(
                      `pages.departments.laboratory.tests.items.${key}`,
                      {
                        returnObjects: true,
                      },
                    ) as { title: string; description: string };
                    const icons = [
                      "favorite",
                      "local_hospital",
                      "monitor_heart",
                    ];
                    return (
                      <Reveal key={i} delay={i * 100} threshold={0.1}>
                        <div className="flex gap-4 group">
                          <div className="shrink-0 w-12 h-12 bg-bg-alt rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-icons">
                              {icons[i % icons.length]}
                            </span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-txt mb-2">
                              {test.title}
                            </h4>
                            <p className="text-muted leading-relaxed">
                              {test.description}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </Reveal>
            <Reveal from="right" threshold={0.1}>
              <div className="bg-bg-alt rounded-3xl p-8 lg:p-10 border border-border h-full">
                <div className="flex items-center gap-3 mb-8">
                  <span className="material-icons text-3xl text-primary">
                    speed
                  </span>
                  <h2 className="text-2xl font-bold text-txt">
                    {t("pages.departments.laboratory.features.title")}
                  </h2>
                </div>
                <div className="space-y-8">
                  <div className="relative overflow-hidden rounded-xl bg-surface p-6 shadow-sm border border-border">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-light/50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                    <h4 className="text-lg font-bold text-txt mb-2 relative z-10">
                      {t(
                        "pages.departments.laboratory.features.automated.title",
                      )}
                    </h4>
                    <p className="text-muted text-sm relative z-10">
                      {t(
                        "pages.departments.laboratory.features.automated.description",
                      )}
                    </p>
                  </div>
                  <div className="relative overflow-hidden rounded-xl bg-surface p-6 shadow-sm border border-border">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-light/50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                    <h4 className="text-lg font-bold text-txt mb-2 relative z-10">
                      {t("pages.departments.laboratory.features.home.title")}
                    </h4>
                    <p className="text-muted text-sm relative z-10">
                      {t(
                        "pages.departments.laboratory.features.home.description",
                      )}
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <p className="text-muted text-sm italic">
                    "{t("pages.departments.laboratory.features.quote")}"
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-alt" id="specialists">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                  {t("pages.departments.laboratory.team.badge")}
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-txt">
                  {t("pages.departments.laboratory.team.title")}
                </h2>
              </div>
              <Link
                to="/doctors"
                className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                {t("pages.departments.laboratory.team.viewAll")}{" "}
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(
              [
                {
                  key: "rachel",
                  img: "/images/doctors/team-dr-rachel-anderson.jpg",
                },
                {
                  key: "michael",
                  img: "/images/doctors/team-dr-michael-torres.jpg",
                },
                {
                  key: "lisa",
                  img: "/images/doctors/team-dr-lisa-chen.jpg",
                },
              ] as const
            ).map((doc, i) => {
              const member = t(
                `pages.departments.laboratory.team.members.${doc.key}`,
                {
                  returnObjects: true,
                },
              ) as { name: string; role: string };
              return (
                <Reveal key={i} delay={i * 100} threshold={0.1}>
                  <div className="bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group h-full">
                    <div className="h-64 overflow-hidden relative">
                      <img
                        src={doc.img}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <button
                          onClick={() =>
                            openAppointment({
                              doctorName: member.name,
                              department: "Laboratory",
                            })
                          }
                          className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {t("common.buttons.bookAppointment")}
                        </button>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-txt">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-3">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
            science
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.departments.laboratory.cta.badge")}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.departments.laboratory.cta.titlePart1")} <br />
                <span className="text-cta-accent">
                  {t("pages.departments.laboratory.cta.titleHighlight")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.departments.laboratory.cta.description")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openAppointment({ department: "Laboratory" })}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:bg-white/90 shadow-xl shadow-black/20 transition-all hover:scale-105"
                >
                  {t("pages.departments.laboratory.cta.buttons.appointment")}
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t("pages.departments.laboratory.cta.buttons.contact")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Laboratory;
