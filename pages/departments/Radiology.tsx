import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const Radiology: React.FC = () => {
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
        title={t("pages.departments.radiology.seo.title")}
        description={t("pages.departments.radiology.seo.description")}
        canonical="https://everleaf-medical.com/departments/radiology"
      />
      <header className="bg-bg border-b border-border py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Reveal delay={0}>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                  {t("pages.departments.radiology.hero.badge")}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-txt mb-6 leading-tight">
                  {t("pages.departments.radiology.hero.titlePart1")} <br />
                  <span className="text-primary">
                    {t("pages.departments.radiology.hero.titleHighlight")}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  {t("pages.departments.radiology.hero.description")}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => openAppointment({ department: "Radiology" })}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-blue-500/30 hover:-translate-y-1"
                  >
                    {t("pages.departments.radiology.hero.buttons.appointment")}
                  </button>
                  <button
                    onClick={(e) => scrollToSection(e, "specialists")}
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-txt bg-bg border border-border rounded-lg hover:bg-bg-alt transition-all"
                  >
                    {t("pages.departments.radiology.hero.buttons.specialists")}
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
                <div className="absolute -bottom-6 -left-6 z-20 bg-surface p-4 rounded-xl shadow-xl border border-border max-w-xs animate-fade-in hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full text-blue-600">
                      <span className="material-icons text-2xl">biotech</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-txt">
                        {t("pages.departments.radiology.stats.imaging.value")}
                      </p>
                      <p className="text-xs text-muted uppercase tracking-wide font-semibold">
                        {t("pages.departments.radiology.stats.imaging.label")}
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
              <h2 className="text-3xl font-serif font-bold text-txt mb-4">
                {t("pages.departments.radiology.intro.title")}
              </h2>
              <p className="text-muted">
                {t("pages.departments.radiology.intro.description")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                key: "fracture",
                icon: "accessibility",
                color: "orange",
              },
              {
                key: "tumor",
                icon: "science",
                color: "purple",
              },
              {
                key: "cardiovascular",
                icon: "favorite",
                color: "red",
              },
              {
                key: "organ",
                icon: "healing",
                color: "teal",
              },
            ].map((item, i) => {
              const treatment = t(
                `pages.departments.radiology.treatments.${item.key}`,
                {
                  returnObjects: true,
                },
              ) as { title: string; description: string };
              return (
                <Reveal key={i} delay={i * 100} threshold={0.1}>
                  <div className="bg-surface p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border h-full">
                    <div
                      className={`w-12 h-12 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-500 mb-4`}
                    >
                      <span className="material-icons text-2xl">
                        {item.icon}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-txt mb-2">
                      {treatment.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-bg-alt rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary-light/30 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal threshold={0.1}>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                  {t("pages.departments.radiology.procedures.badge")}
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-txt mt-2">
                  {t("pages.departments.radiology.procedures.title")}
                </h2>
              </div>
              <Link
                to="/services/imaging"
                className="hidden md:inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors mt-4 md:mt-0"
              >
                {t("pages.departments.radiology.procedures.viewAll")}{" "}
                <span className="material-icons ml-2">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                key: "xray",
                icon: "image",
                color: "primary",
              },
              {
                key: "mammography",
                icon: "face",
                color: "pink-500",
              },
              {
                key: "mri",
                icon: "donut_large",
                color: "indigo-500",
              },
              {
                key: "ct",
                icon: "data_usage",
                color: "blue-500",
              },
            ].map((item, i) => {
              const procedure = t(
                `pages.departments.radiology.procedures.items.${item.key}`,
                {
                  returnObjects: true,
                },
              ) as {
                title: string;
                description: string;
                features: { [key: string]: string };
              };
              return (
                <Reveal key={i} delay={i * 100} threshold={0.1}>
                  <div className="flex gap-6 p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 bg-surface group h-full">
                    <div className="shrink-0">
                      <div
                        className={`w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-${item.color} group-hover:bg-primary group-hover:text-white transition-colors duration-300`}
                      >
                        <span className="material-icons text-3xl">
                          {item.icon}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-txt mb-2">
                        {procedure.title}
                      </h3>
                      <p className="text-muted text-sm mb-4 leading-relaxed">
                        {procedure.description}
                      </p>
                      <ul className="text-sm space-y-1 text-muted">
                        {Object.values(procedure.features).map(
                          (feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="material-icons text-green-500 text-xs">
                                check
                              </span>{" "}
                              {feature}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-alt" id="specialists">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                  {t("pages.departments.radiology.team.badge")}
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-txt">
                  {t("pages.departments.radiology.team.title")}
                </h2>
              </div>
              <Link
                to="/doctors"
                className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                {t("pages.departments.radiology.team.viewAll")}{" "}
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(
              [
                {
                  key: "sarah",
                  img: "/images/doctors/team-dr-sarah-jenkins.jpg",
                },
                {
                  key: "michael",
                  img: "/images/doctors/team-dr-mark-williams.jpg",
                },
                {
                  key: "emily",
                  img: "/images/doctors/team-dr-emily-chen.jpg",
                },
              ] as const
            ).map((doc, i) => {
              const member = t(
                `pages.departments.radiology.team.members.${doc.key}`,
                {
                  returnObjects: true,
                },
              ) as { name: string; role: string };
              return (
                <Reveal key={i} delay={i * 100} threshold={0.1}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group h-full">
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
                              department: "Radiology",
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

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="bg-linear-to-br from-cta-from to-cta-to rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl border border-white/10">
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
                    {t("pages.departments.radiology.technology.title")}
                  </h2>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    {t("pages.departments.radiology.technology.description")}
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
                          {t("pages.departments.radiology.technology.ai.title")}
                        </h4>
                        <p className="text-sm text-blue-200">
                          {t(
                            "pages.departments.radiology.technology.ai.description",
                          )}
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
                          {t(
                            "pages.departments.radiology.technology.lowRad.title",
                          )}
                        </h4>
                        <p className="text-sm text-blue-200">
                          {t(
                            "pages.departments.radiology.technology.lowRad.description",
                          )}
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
                    <span className="text-sm text-blue-100">
                      {t(
                        "pages.departments.radiology.technology.stats.emergency",
                      )}
                    </span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
                    <span className="text-4xl font-bold text-emerald-400 block mb-2">
                      4k+
                    </span>
                    <span className="text-sm text-blue-100">
                      {t("pages.departments.radiology.technology.stats.scans")}
                    </span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center col-span-2">
                    <span className="text-4xl font-bold text-purple-400 block mb-2">
                      100%
                    </span>
                    <span className="text-sm text-blue-100">
                      {t(
                        "pages.departments.radiology.technology.stats.archives",
                      )}
                    </span>
                  </div>
                </div>
              </Reveal>
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
            scanner
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.departments.radiology.cta.badge")}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.departments.radiology.cta.titlePart1")} <br />
                <span className="text-cta-accent">
                  {t("pages.departments.radiology.cta.titleHighlight")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.departments.radiology.cta.description")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openAppointment({ department: "Radiology" })}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:bg-white/90 shadow-xl shadow-black/20 transition-all hover:scale-105"
                >
                  {t("pages.departments.radiology.cta.buttons.appointment")}
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t("pages.departments.radiology.cta.buttons.referrals")}
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
