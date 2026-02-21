import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const Pediatrics: React.FC = () => {
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
        title={t("pages.departments.pediatrics.seo.title")}
        description={t("pages.departments.pediatrics.seo.description")}
        canonical="https://everleaf-medical.com/departments/pediatrics"
      />
      <header className="relative bg-bg border-b border-border py-12 lg:py-16 overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-50 blur-3xl opacity-60"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal delay={0}>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                  {t("pages.departments.pediatrics.hero.badge")}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-txt mb-6 leading-tight">
                  {t("pages.departments.pediatrics.hero.titlePart1")}{" "}
                  <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-dark">
                    {t("pages.departments.pediatrics.hero.titleHighlight")}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  {t("pages.departments.pediatrics.hero.description")}
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
                    {t("pages.departments.pediatrics.hero.buttons.visit")}
                  </button>
                  <button
                    onClick={(e) => scrollToSection(e, "specialists")}
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-txt bg-bg border border-border rounded-lg hover:bg-bg-alt hover:border-muted transition-all"
                  >
                    {t("pages.departments.pediatrics.hero.buttons.team")}
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
                <div className="absolute -bottom-6 -left-6 z-20 bg-surface p-4 rounded-xl shadow-xl border border-border max-w-xs animate-fade-in hidden lg:block">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 w-12 h-12 flex items-center justify-center rounded-full text-orange-600">
                      <span className="material-icons text-2xl">toys</span>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-txt">
                        {t("pages.departments.pediatrics.stats.friendly.value")}
                      </p>
                      <p className="text-xs text-muted uppercase tracking-wide font-semibold">
                        {t("pages.departments.pediatrics.stats.friendly.label")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="py-20 bg-bg-alt relative">
        <div className="container mx-auto px-6 relative z-10">
          <Reveal threshold={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                {t("pages.departments.pediatrics.intro.badge")}
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-txt mb-4">
                {t("pages.departments.pediatrics.intro.title")}
              </h2>
              <p className="text-muted">
                {t("pages.departments.pediatrics.intro.description")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t(
                  "pages.departments.pediatrics.conditions.illness.title",
                ),
                icon: "coronavirus",
                color: "red",
                desc: t(
                  "pages.departments.pediatrics.conditions.illness.description",
                ),
              },
              {
                title: t(
                  "pages.departments.pediatrics.conditions.vaccination.title",
                ),
                icon: "vaccines",
                color: "blue",
                desc: t(
                  "pages.departments.pediatrics.conditions.vaccination.description",
                ),
              },
              {
                title: t(
                  "pages.departments.pediatrics.conditions.development.title",
                ),
                icon: "trending_up",
                color: "orange",
                desc: t(
                  "pages.departments.pediatrics.conditions.development.description",
                ),
              },
              {
                title: t(
                  "pages.departments.pediatrics.conditions.nutrition.title",
                ),
                icon: "restaurant",
                color: "purple",
                desc: t(
                  "pages.departments.pediatrics.conditions.nutrition.description",
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

      <section className="py-16 bg-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-10 lg:col-start-2 space-y-16">
              <section>
                <Reveal threshold={0.1}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary">
                      <span className="material-icons">medical_services</span>
                    </div>
                    <h2 className="text-2xl font-bold text-txt">
                      {t("pages.departments.pediatrics.procedures.title")}
                    </h2>
                  </div>
                </Reveal>
                <Reveal threshold={0.1}>
                  <div className="bg-surface rounded-2xl border border-border overflow-hidden shadow-card">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                      <div className="p-6 md:p-8 hover:bg-bg-alt transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="material-icons text-primary text-2xl">
                            child_friendly
                          </span>
                          <h3 className="text-lg font-bold text-txt">
                            {t(
                              "pages.departments.pediatrics.procedures.items.newborn.title",
                            )}
                          </h3>
                        </div>
                        <p className="text-muted text-sm leading-relaxed mb-4">
                          {t(
                            "pages.departments.pediatrics.procedures.items.newborn.description",
                          )}
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm text-muted">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            {t(
                              "pages.departments.pediatrics.procedures.items.newborn.features.checkup",
                            )}
                          </li>
                          <li className="flex items-center gap-2 text-sm text-muted">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            {t(
                              "pages.departments.pediatrics.procedures.items.newborn.features.lactation",
                            )}
                          </li>
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 hover:bg-bg-alt transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="material-icons text-primary text-2xl">
                            calendar_month
                          </span>
                          <h3 className="text-lg font-bold text-txt">
                            {t(
                              "pages.departments.pediatrics.procedures.items.wellchild.title",
                            )}
                          </h3>
                        </div>
                        <p className="text-muted text-sm leading-relaxed mb-4">
                          {t(
                            "pages.departments.pediatrics.procedures.items.wellchild.description",
                          )}
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm text-muted">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            {t(
                              "pages.departments.pediatrics.procedures.items.wellchild.features.physicals",
                            )}
                          </li>
                          <li className="flex items-center gap-2 text-sm text-muted">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            {t(
                              "pages.departments.pediatrics.procedures.items.wellchild.features.school",
                            )}
                          </li>
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 hover:bg-bg-alt transition-colors border-t border-border">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="material-icons text-primary text-2xl">
                            content_cut
                          </span>
                          <h3 className="text-lg font-bold text-txt">
                            {t(
                              "pages.departments.pediatrics.procedures.items.surgery.title",
                            )}
                          </h3>
                        </div>
                        <p className="text-muted text-sm leading-relaxed mb-4">
                          {t(
                            "pages.departments.pediatrics.procedures.items.surgery.description",
                          )}
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm text-muted">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            {t(
                              "pages.departments.pediatrics.procedures.items.surgery.features.invasive",
                            )}
                          </li>
                          <li className="flex items-center gap-2 text-sm text-muted">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            {t(
                              "pages.departments.pediatrics.procedures.items.surgery.features.recovery",
                            )}
                          </li>
                        </ul>
                      </div>
                      <div className="p-6 md:p-8 hover:bg-slate-50 transition-colors border-t border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="material-icons text-primary text-2xl">
                            face_3
                          </span>
                          <h3 className="text-lg font-bold text-slate-900">
                            {t(
                              "pages.departments.pediatrics.procedures.items.adolescent.title",
                            )}
                          </h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {t(
                            "pages.departments.pediatrics.procedures.items.adolescent.description",
                          )}
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            {t(
                              "pages.departments.pediatrics.procedures.items.adolescent.features.mental",
                            )}
                          </li>
                          <li className="flex items-center gap-2 text-sm text-slate-500">
                            <span className="material-icons text-green-500 text-xs">
                              check_circle
                            </span>{" "}
                            {t(
                              "pages.departments.pediatrics.procedures.items.adolescent.features.reproductive",
                            )}
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
                      {t("pages.departments.pediatrics.facility.title")}
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
                        {t("pages.departments.pediatrics.facility.subtitle")}
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {t("pages.departments.pediatrics.facility.description")}
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-slate-700">
                          <span className="w-6 h-6 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-xs">
                            <span className="material-icons text-sm">
                              check
                            </span>
                          </span>
                          {t(
                            "pages.departments.pediatrics.facility.features.playrooms",
                          )}
                        </li>
                        <li className="flex items-center gap-3 text-slate-700">
                          <span className="w-6 h-6 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-xs">
                            <span className="material-icons text-sm">
                              check
                            </span>
                          </span>
                          {t(
                            "pages.departments.pediatrics.facility.features.entertainment",
                          )}
                        </li>
                        <li className="flex items-center gap-3 text-slate-700">
                          <span className="w-6 h-6 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-xs">
                            <span className="material-icons text-sm">
                              check
                            </span>
                          </span>
                          {t(
                            "pages.departments.pediatrics.facility.features.parents",
                          )}
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

      <section className="py-20 bg-bg-alt" id="specialists">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                  {t("pages.departments.pediatrics.team.badge")}
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-txt">
                  {t("pages.departments.pediatrics.team.title")}
                </h2>
              </div>
              <Link
                to="/doctors"
                className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                {t("pages.departments.pediatrics.team.viewAll")}{" "}
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "ashley",
                img: "/images/doctors/team-dr-ashley-johnson.jpg",
              },
              {
                id: "john",
                img: "/images/doctors/team-dr-john-chen.jpg",
              },
              {
                id: "emily",
                img: "/images/doctors/team-dr-emily-rodriguez.jpg",
              },
            ].map((doc, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={doc.img}
                      alt={t(
                        `pages.departments.pediatrics.team.members.${doc.id}.name`,
                      )}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <button
                        onClick={() =>
                          openAppointment({
                            doctorName: t(
                              `pages.departments.pediatrics.team.members.${doc.id}.name`,
                            ),
                            department: "Pediatrics",
                          })
                        }
                        className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {t(
                          "pages.departments.pediatrics.cta.buttons.appointment",
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-txt">
                      {t(
                        `pages.departments.pediatrics.team.members.${doc.id}.name`,
                      )}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {t(
                        `pages.departments.pediatrics.team.members.${doc.id}.role`,
                      )}
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
            child_care
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.departments.pediatrics.cta.badge")}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.departments.pediatrics.cta.titlePart1")} <br />
                <span className="text-cta-accent">
                  {t("pages.departments.pediatrics.cta.titleHighlight")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.departments.pediatrics.cta.description")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openAppointment({ department: "Pediatrics" })}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:bg-white/90 shadow-xl shadow-black/20 transition-all hover:scale-105"
                >
                  {t("pages.departments.pediatrics.cta.buttons.appointment")}
                </button>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t("pages.departments.pediatrics.cta.buttons.call")}
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
