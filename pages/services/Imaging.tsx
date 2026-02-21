import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const Imaging: React.FC = () => {
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
        title={t("pages.services.imaging.seo.title")}
        description={t("pages.services.imaging.seo.description")}
        canonical="https://everleaf-medical.com/services/imaging"
      />
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/imaging-hero.jpg"
            alt="Advanced MRI Scanner Room"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <Reveal delay={0}>
              <div className="flex items-center gap-2 mb-4 text-blue-300 font-semibold tracking-wide uppercase text-sm">
                <span className="material-icons text-lg">scanner</span>
                <span>{t("pages.services.imaging.hero.badge")}</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                {t("pages.services.imaging.hero.titlePart1")}
                <br />
                {t("pages.services.imaging.hero.titlePart2")}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                {t("pages.services.imaging.hero.description")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openAppointment({ department: "Radiology" })}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5"
                >
                  {t("pages.services.imaging.hero.buttons.schedule")}
                </button>
                <button
                  onClick={(e) => scrollToSection(e, "procedures")}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
                >
                  {t("pages.services.imaging.hero.buttons.procedures")}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="mb-20" id="procedures">
            <Reveal threshold={0.1}>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                  {t("pages.services.imaging.intro.title")}
                </h2>
                <p className="text-slate-600">
                  {t("pages.services.imaging.intro.description")}
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: t("pages.services.imaging.mainProcedures.0.title"),
                  desc: t(
                    "pages.services.imaging.mainProcedures.0.description",
                  ),
                  tag: t("pages.services.imaging.mainProcedures.0.tag"),
                  img: "/images/imaging-body-1.jpg",
                  color: "primary",
                },
                {
                  title: t("pages.services.imaging.mainProcedures.1.title"),
                  desc: t(
                    "pages.services.imaging.mainProcedures.1.description",
                  ),
                  tag: t("pages.services.imaging.mainProcedures.1.tag"),
                  img: "/images/imaging-body-2.jpg",
                  color: "teal-600",
                },
                {
                  title: t("pages.services.imaging.mainProcedures.2.title"),
                  desc: t(
                    "pages.services.imaging.mainProcedures.2.description",
                  ),
                  tag: t("pages.services.imaging.mainProcedures.2.tag"),
                  img: "/images/imaging-body-3.jpg",
                  color: "indigo-600",
                },
                {
                  title: t("pages.services.imaging.mainProcedures.3.title"),
                  desc: t(
                    "pages.services.imaging.mainProcedures.3.description",
                  ),
                  tag: t("pages.services.imaging.mainProcedures.3.tag"),
                  img: "/images/imaging-body-4.jpg",
                  color: "purple-600",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 100} threshold={0.1}>
                  <div
                    className="rounded-xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group h-full"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className={`absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-${item.color}`}
                      >
                        {item.tag}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: "var(--color-text)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <Reveal from="left" threshold={0.1} className="lg:col-span-2">
              <div
                className="rounded-2xl p-8 border shadow-card h-full"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full text-primary flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary-light)" }}
                  >
                    <span className="material-icons text-2xl">biotech</span>
                  </div>
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t("pages.services.imaging.specialized.title")}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4
                      className="font-bold mb-2"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t(
                        "pages.services.imaging.specialized.interventional.title",
                      )}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {t(
                        "pages.services.imaging.specialized.interventional.description",
                      )}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-slate-600">
                        <span className="material-icons text-secondary text-base mr-2">
                          check_circle
                        </span>{" "}
                        {t(
                          "pages.services.imaging.specialized.interventional.items.0",
                        )}
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <span className="material-icons text-secondary text-base mr-2">
                          check_circle
                        </span>{" "}
                        {t(
                          "pages.services.imaging.specialized.interventional.items.1",
                        )}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4
                      className="font-bold mb-2"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t("pages.services.imaging.specialized.women.title")}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {t(
                        "pages.services.imaging.specialized.women.description",
                      )}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-slate-600">
                        <span className="material-icons text-secondary text-base mr-2">
                          check_circle
                        </span>{" "}
                        {t("pages.services.imaging.specialized.women.items.0")}
                      </li>
                      <li className="flex items-center text-sm text-slate-600">
                        <span className="material-icons text-secondary text-base mr-2">
                          check_circle
                        </span>{" "}
                        {t("pages.services.imaging.specialized.women.items.1")}
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="mt-8 pt-8 border-t"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <p className="text-slate-500 italic text-sm">
                    "{t("pages.services.imaging.specialized.quote")}"
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal from="right" threshold={0.1}>
              <div
                className="rounded-2xl p-8 border h-full"
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 rounded-full text-primary flex items-center justify-center shadow-sm"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <span className="material-icons text-2xl">shield</span>
                  </div>
                  <h2
                    className="text-xl font-bold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t("pages.services.imaging.safety.title")}
                  </h2>
                </div>
                <h3 className="font-semibold text-slate-800 mb-3">
                  {t("pages.services.imaging.safety.subtitle")}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {t("pages.services.imaging.safety.description")}
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                  <div className="flex items-start gap-3">
                    <span className="material-icons text-secondary mt-1">
                      verified
                    </span>
                    <div>
                      <span
                        className="block font-bold text-sm"
                        style={{ color: "var(--color-text)" }}
                      >
                        {t("pages.services.imaging.safety.accredited")}
                      </span>
                      <span className="text-xs text-slate-500">
                        {t("pages.services.imaging.safety.accreditedFull")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal threshold={0.1}>
            <div className="bg-primary rounded-3xl overflow-hidden relative shadow-lg">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "url('https://www.transparenttextures.com/patterns/cubes.png')",
                }}
              ></div>
              <div className="grid md:grid-cols-2 items-center relative z-10">
                <div className="p-8 md:p-12 text-white">
                  <h2 className="text-3xl font-bold mb-4">
                    {t("pages.services.imaging.results.title")}
                  </h2>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    {t("pages.services.imaging.results.description")}
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="bg-white/20 p-1.5 rounded-full">
                        <span className="material-icons text-sm">lock</span>
                      </span>
                      <span>{t("pages.services.imaging.results.items.0")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="bg-white/20 p-1.5 rounded-full">
                        <span className="material-icons text-sm">history</span>
                      </span>
                      <span>{t("pages.services.imaging.results.items.1")}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="bg-white/20 p-1.5 rounded-full">
                        <span className="material-icons text-sm">share</span>
                      </span>
                      <span>{t("pages.services.imaging.results.items.2")}</span>
                    </li>
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {t("pages.services.imaging.results.button")}
                  </Link>
                </div>
                <div className="h-64 md:h-full relative bg-slate-800">
                  <img
                    src="/images/imaging-body-5.jpg"
                    alt="Doctor reviewing digital scan"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-linear-to-l from-transparent to-primary/80 md:to-primary"></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                {t("pages.services.imaging.conditions.title")}
              </h2>
              <p className="text-slate-600">
                {t("pages.services.imaging.conditions.description")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t("pages.services.imaging.conditions.items.0.title"),
                icon: "accessibility_new",
                color: "orange",
                desc: t(
                  "pages.services.imaging.conditions.items.0.description",
                ),
              },
              {
                title: t("pages.services.imaging.conditions.items.1.title"),
                icon: "biotech",
                color: "purple",
                desc: t(
                  "pages.services.imaging.conditions.items.1.description",
                ),
              },
              {
                title: t("pages.services.imaging.conditions.items.2.title"),
                icon: "favorite",
                color: "red",
                desc: t(
                  "pages.services.imaging.conditions.items.2.description",
                ),
              },
              {
                title: t("pages.services.imaging.conditions.items.3.title"),
                icon: "teal",
                color: "teal",
                desc: t(
                  "pages.services.imaging.conditions.items.3.description",
                ),
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div
                  className="p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border h-full"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className={`w-12 h-12 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-500 mb-4`}
                  >
                    <span className="material-icons text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                {t("pages.services.imaging.procedures.subtitle")}
              </span>
              <h2
                className="text-3xl lg:text-4xl font-serif font-bold mt-2"
                style={{ color: "var(--color-text)" }}
              >
                {t("pages.services.imaging.procedures.title")}
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t("pages.services.imaging.procedures.items.0.title"),
                icon: "image",
                color: "primary",
                desc: t(
                  "pages.services.imaging.procedures.items.0.description",
                ),
                items: [
                  t("common.labels.instantResults"),
                  t("common.labels.lowDose"),
                ],
              },
              {
                title: t("pages.services.imaging.procedures.items.1.title"),
                icon: "female",
                color: "pink-500",
                desc: t(
                  "pages.services.imaging.procedures.items.1.description",
                ),
                items: [
                  t("common.labels.increasedAccuracy"),
                  t("common.labels.comfortableDesign"),
                ],
              },
              {
                title: t("pages.services.imaging.procedures.items.2.title"),
                icon: "all_inclusive",
                color: "indigo-500",
                desc: t(
                  "pages.services.imaging.procedures.items.2.description",
                ),
                items: [
                  t("common.labels.wideBore"),
                  t("common.labels.contrastEnhanced"),
                ],
              },
              {
                title: t("pages.services.imaging.procedures.items.3.title"),
                icon: "donut_large",
                color: "blue-500",
                desc: t(
                  "pages.services.imaging.procedures.items.3.description",
                ),
                items: [
                  t("common.labels.64SliceTech"),
                  t("common.labels.lowDoseProtocols"),
                ],
              },
            ].map((service, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div
                  className="flex gap-6 p-6 rounded-2xl border hover:border-primary/30 hover:shadow-soft transition-all duration-300 group h-full"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="shrink-0">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-sm text-${service.color === "primary" ? "primary" : service.color} group-hover:bg-primary group-hover:text-white transition-colors duration-300`}
                      style={{ backgroundColor: "var(--color-surface)" }}
                    >
                      <span className="material-icons text-3xl">
                        {service.icon}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "var(--color-text)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="text-sm space-y-1 text-slate-500">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="material-icons text-green-500 text-xs">
                            check
                          </span>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" id="specialists">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                {t("pages.services.imaging.team.badge")}
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                {t("pages.services.imaging.team.title")}
              </h2>
            </div>
            <Link
              to="/doctors"
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              {t("pages.services.imaging.team.viewAll")}{" "}
              <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Jenkins",
                role: "Chief Radiologist",
                img: "/images/doctors/team-dr-sarah-jenkins.jpg",
              },
              {
                name: "Dr. Michael Chen",
                role: "Interventional Radiologist",
                img: "/images/doctors/team-dr-mark-williams.jpg",
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Pediatric Radiologist",
                img: "/images/doctors/team-dr-emily-chen.jpg",
              },
            ].map((doc, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div
                  className="rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group h-full"
                  style={{ backgroundColor: "var(--color-surface)" }}
                >
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
                            department: "Radiology",
                          })
                        }
                        className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {t("pages.services.imaging.team.button")}
                      </button>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
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

      <section className="py-24 relative overflow-hidden" id="appointment">
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
            scanner
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal threshold={0.1}>
            <div className="max-w-4xl mx-auto">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.services.imaging.cta.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.services.imaging.cta.titlePart1")} <br />
                <span style={{ color: "var(--color-cta-accent)" }}>
                  {t("pages.services.imaging.cta.titlePart2")}
                </span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.services.imaging.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openAppointment({ department: "Radiology" })}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white rounded-full shadow-xl transition-all hover:scale-105"
                  style={{ color: "var(--color-cta-from)" }}
                >
                  {t("pages.services.imaging.cta.buttons.appointment")}
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t("pages.services.imaging.cta.buttons.referrals")}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Imaging;
