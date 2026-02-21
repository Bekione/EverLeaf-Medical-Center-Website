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
        title={t("pages.services.laboratory.seo.title")}
        description={t("pages.services.laboratory.seo.description")}
        canonical="https://everleaf-medical.com/services/laboratory"
      />
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/laboratory-hero-1.jpg"
            alt="Modern medical laboratory environment"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <Reveal delay={0}>
              <div className="flex items-center gap-2 mb-4 text-blue-300 font-semibold tracking-wide uppercase text-sm">
                <span className="material-icons text-lg">biotech</span>
                <span>{t("pages.services.laboratory.hero.badge")}</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                {t("pages.services.laboratory.hero.title")}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                {t("pages.services.laboratory.hero.description")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openAppointment({ department: "Laboratory" })}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5"
                >
                  {t("pages.services.laboratory.hero.buttons.book")}
                </button>
                <button
                  onClick={(e) => scrollToSection(e, "collection")}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
                >
                  {t("pages.services.laboratory.hero.buttons.homeCollection")}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <section
        className="py-20 relative"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2
                className="text-3xl font-serif font-bold mb-4"
                style={{ color: "var(--color-text)" }}
              >
                {t("pages.services.laboratory.intro.title")}
              </h2>
              <p className="text-slate-600">
                {t("pages.services.laboratory.intro.description")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t(
                  "pages.services.laboratory.departments.biochemistry.title",
                ),
                icon: "biotech",
                iconColor: "text-primary",
                iconBg: "bg-blue-50",
                desc: t(
                  "pages.services.laboratory.departments.biochemistry.description",
                ),
                items: [
                  t(
                    "pages.services.laboratory.departments.biochemistry.items.0",
                  ),
                  t(
                    "pages.services.laboratory.departments.biochemistry.items.1",
                  ),
                  t(
                    "pages.services.laboratory.departments.biochemistry.items.2",
                  ),
                ],
              },
              {
                title: t(
                  "pages.services.laboratory.departments.microbiology.title",
                ),
                icon: "coronavirus",
                iconColor: "text-teal-500",
                iconBg: "bg-teal-50",
                desc: t(
                  "pages.services.laboratory.departments.microbiology.description",
                ),
                items: [
                  t(
                    "pages.services.laboratory.departments.microbiology.items.0",
                  ),
                  t(
                    "pages.services.laboratory.departments.microbiology.items.1",
                  ),
                  t(
                    "pages.services.laboratory.departments.microbiology.items.2",
                  ),
                ],
              },
              {
                title: t(
                  "pages.services.laboratory.departments.hematology.title",
                ),
                icon: "bloodtype",
                iconColor: "text-red-500",
                iconBg: "bg-red-50",
                desc: t(
                  "pages.services.laboratory.departments.hematology.description",
                ),
                items: [
                  t("pages.services.laboratory.departments.hematology.items.0"),
                  t("pages.services.laboratory.departments.hematology.items.1"),
                  t("pages.services.laboratory.departments.hematology.items.2"),
                ],
              },
            ].map((service, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div
                  className="p-8 rounded-2xl shadow-card border group hover:-translate-y-1 transition-all duration-300 h-full"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center ${service.iconColor} mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <span className="material-icons text-3xl">
                      {service.icon}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--color-text)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-500 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${service.iconColor.replace("text-", "bg-")}`}
                        ></span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20"
        id="collection"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal from="left" threshold={0.1}>
              <div className="relative">
                <div
                  className="rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-bl-full opacity-50"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <span className="material-icons">speed</span>
                      </div>
                      <h3
                        className="text-2xl font-bold"
                        style={{ color: "var(--color-text)" }}
                      >
                        {t("pages.services.laboratory.results.title")}
                      </h3>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {t("pages.services.laboratory.results.description")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-primary">
                          24/7
                        </span>
                        <span className="text-sm text-slate-500 leading-tight">
                          {t(
                            "pages.services.laboratory.results.stats.operation",
                          )}
                        </span>
                      </div>
                      <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-primary">
                          99.9%
                        </span>
                        <span className="text-sm text-slate-500 leading-tight">
                          {t(
                            "pages.services.laboratory.results.stats.accuracy",
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal from="right" threshold={0.1}>
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-4 text-primary font-semibold">
                  <span className="material-icons text-lg">home_work</span>
                  <span>
                    {t("pages.services.laboratory.homeCollection.badge")}
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-serif font-bold mb-6"
                  style={{ color: "var(--color-text)" }}
                >
                  {t("pages.services.laboratory.homeCollection.title")}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {t("pages.services.laboratory.homeCollection.description")}
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    t("pages.services.laboratory.homeCollection.features.0"),
                    t("pages.services.laboratory.homeCollection.features.1"),
                    t("pages.services.laboratory.homeCollection.features.2"),
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5">
                        <span className="material-icons text-sm">check</span>
                      </div>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    openAppointment({
                      department: "Laboratory",
                      doctorName: "Home Collection Service",
                    })
                  }
                  className="text-primary font-bold hover:text-primary-dark inline-flex items-center gap-2 group text-left"
                >
                  {t("pages.services.laboratory.homeCollection.button")}
                  <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal from="left" threshold={0.1}>
              <div className="order-2 lg:order-1">
                <img
                  src="/images/laboratory-body-image-1.jpg"
                  alt="Advanced laboratory equipment microscope"
                  className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
                />
              </div>
            </Reveal>
            <Reveal from="right" threshold={0.1}>
              <div className="order-1 lg:order-2">
                <h2
                  className="text-3xl font-serif font-bold mb-6"
                  style={{ color: "var(--color-text)" }}
                >
                  {t("pages.services.laboratory.equipment.title")}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t("pages.services.laboratory.equipment.description")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: t(
                        "pages.services.laboratory.equipment.items.0.name",
                      ),
                      desc: t(
                        "pages.services.laboratory.equipment.items.0.description",
                      ),
                    },
                    {
                      name: t(
                        "pages.services.laboratory.equipment.items.1.name",
                      ),
                      desc: t(
                        "pages.services.laboratory.equipment.items.1.description",
                      ),
                    },
                    {
                      name: t(
                        "pages.services.laboratory.equipment.items.2.name",
                      ),
                      desc: t(
                        "pages.services.laboratory.equipment.items.2.description",
                      ),
                    },
                    {
                      name: t(
                        "pages.services.laboratory.equipment.items.3.name",
                      ),
                      desc: t(
                        "pages.services.laboratory.equipment.items.3.description",
                      ),
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg border shadow-sm"
                      style={{
                        backgroundColor: "var(--color-surface)",
                        borderColor: "var(--color-border)",
                      }}
                    >
                      <h4
                        className="font-bold mb-2"
                        style={{ color: "var(--color-text)" }}
                      >
                        {item.name}
                      </h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-cta-from), var(--color-cta-to))",
          }}
        ></div>
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
            science
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.services.laboratory.cta.badge")}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.services.laboratory.cta.titlePart1")} <br />
                <span style={{ color: "var(--color-cta-accent)" }}>
                  {t("pages.services.laboratory.cta.titlePart2")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.services.laboratory.cta.description")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openAppointment({ department: "Laboratory" })}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white rounded-full shadow-xl transition-all hover:scale-105"
                  style={{ color: "var(--color-cta-from)" }}
                >
                  {t("pages.services.laboratory.cta.buttons.request")}
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t("pages.services.laboratory.cta.buttons.pricing")}
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
