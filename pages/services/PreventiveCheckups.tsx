import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const PreventiveCheckups: React.FC = () => {
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
        title={t("pages.services.preventiveCheckups.seo.title")}
        description={t("pages.services.preventiveCheckups.seo.description")}
        canonical="https://everleaf-medical.com/services/preventive-checkups"
      />
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/preventive-checkup-hero.jpg"
            alt="Preventive Health Checkup"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <Reveal delay={0}>
              <div className="flex items-center gap-2 mb-4 text-blue-300 font-semibold tracking-wide uppercase text-sm">
                <span className="material-icons text-lg">
                  health_and_safety
                </span>
                <span>{t("pages.services.preventiveCheckups.hero.badge")}</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                {t("pages.services.preventiveCheckups.hero.title")}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                {t("pages.services.preventiveCheckups.hero.description")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={(e) => scrollToSection(e, "packages")}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5"
                >
                  {t("pages.services.preventiveCheckups.hero.buttons.packages")}
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
                >
                  {t("pages.services.preventiveCheckups.hero.buttons.contact")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2
                className="text-3xl font-serif font-bold mb-4"
                style={{ color: "var(--color-text)" }}
              >
                {t("pages.services.preventiveCheckups.importance.title")}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {t("pages.services.preventiveCheckups.importance.description")}
              </p>
            </div>
          </Reveal>
          {Object.entries(
            t("pages.services.preventiveCheckups.importance.areas", {
              returnObjects: true,
            }),
          ).map(([key, item]: [string, any], i) => {
            const icons: Record<string, string> = {
              heart: "monitor_heart",
              diabetes: "water_drop",
              cancer: "healing",
            };
            const colors: Record<string, string> = {
              heart: "red",
              diabetes: "blue",
              cancer: "purple",
            };

            return (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div
                  className="p-8 rounded-2xl shadow-card border h-full"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className={`w-12 h-12 bg-${colors[key]}-50 rounded-xl flex items-center justify-center text-${colors[key]}-500 mb-6`}
                  >
                    <span className="material-icons text-2xl">
                      {icons[key]}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--color-text)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section
        className="py-20 relative"
        id="packages"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#136dec 0.5px, transparent 0.5px), radial-gradient(#136dec 0.5px, #f6f7f8 0.5px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal threshold={0.1}>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">
                {t("pages.services.preventiveCheckups.packages.badge")}
              </span>
              <h2
                className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4"
                style={{ color: "var(--color-text)" }}
              >
                {t("pages.services.preventiveCheckups.packages.title")}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                {t("pages.services.preventiveCheckups.packages.description")}
              </p>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Reveal from="left" threshold={0.1}>
              <div
                className="rounded-2xl shadow-card border overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 h-full"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="p-8 border-b"
                  style={{
                    backgroundColor: "var(--color-bg-alt)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t(
                      "pages.services.preventiveCheckups.packages.basic.title",
                    )}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    {t(
                      "pages.services.preventiveCheckups.packages.basic.description",
                    )}
                  </p>
                  <div className="flex items-baseline">
                    <span
                      className="text-4xl font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t(
                        "pages.services.preventiveCheckups.packages.basic.price",
                      )}
                    </span>
                  </div>
                </div>
                <div className="p-8 grow">
                  <ul className="space-y-4">
                    {Object.values(
                      t(
                        "pages.services.preventiveCheckups.packages.basic.features",
                        {
                          returnObjects: true,
                        },
                      ),
                    ).map((feat: any, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <span className="material-icons text-green-500 text-lg">
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <button
                    onClick={() =>
                      openAppointment({
                        department: "Preventive Checkups",
                        serviceName: "Basic Wellness Package",
                      })
                    }
                    className="block w-full py-3 px-4 bg-white border-2 border-primary text-primary font-bold text-center rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {t(
                      "pages.services.preventiveCheckups.packages.basic.button",
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal threshold={0.1}>
              <div
                className="rounded-2xl shadow-xl ring-2 ring-primary relative overflow-hidden flex flex-col transform md:-translate-y-4 h-full"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {t(
                    "pages.services.preventiveCheckups.packages.executive.badge",
                  )}
                </div>
                <div
                  className="p-8 border-b"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-primary) 5%, var(--color-surface))",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t(
                      "pages.services.preventiveCheckups.packages.executive.title",
                    )}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    {t(
                      "pages.services.preventiveCheckups.packages.executive.description",
                    )}
                  </p>
                  <div className="flex items-baseline">
                    <span
                      className="text-4xl font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t(
                        "pages.services.preventiveCheckups.packages.executive.price",
                      )}
                    </span>
                  </div>
                </div>
                <div className="p-8 grow">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="material-icons text-green-500 text-lg">
                        check_circle
                      </span>
                      <span className="font-semibold">
                        {t(
                          "pages.services.preventiveCheckups.packages.executive.features.all",
                        )}
                      </span>
                    </li>
                    {Object.entries(
                      t(
                        "pages.services.preventiveCheckups.packages.executive.features",
                        {
                          returnObjects: true,
                        },
                      ),
                    )
                      .filter(([key]) => key !== "all")
                      .map(([_, feat]: [string, any], i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-slate-600"
                        >
                          <span className="material-icons text-green-500 text-lg">
                            check_circle
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <button
                    onClick={() =>
                      openAppointment({
                        department: "Preventive Checkups",
                        serviceName: "Executive Checkup Package",
                      })
                    }
                    className="block w-full py-3 px-4 bg-primary text-white font-bold text-center rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
                  >
                    {t(
                      "pages.services.preventiveCheckups.packages.executive.button",
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            <Reveal from="right" threshold={0.1}>
              <div
                className="rounded-2xl shadow-card border overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300 h-full"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="p-8 border-b"
                  style={{
                    backgroundColor: "var(--color-bg-alt)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t(
                      "pages.services.preventiveCheckups.packages.senior.title",
                    )}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    {t(
                      "pages.services.preventiveCheckups.packages.senior.description",
                    )}
                  </p>
                  <div className="flex items-baseline">
                    <span
                      className="text-4xl font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t(
                        "pages.services.preventiveCheckups.packages.senior.price",
                      )}
                    </span>
                  </div>
                </div>
                <div className="p-8 grow">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="material-icons text-green-500 text-lg">
                        check_circle
                      </span>
                      <span className="font-semibold">
                        {t(
                          "pages.services.preventiveCheckups.packages.senior.features.all",
                        )}
                      </span>
                    </li>
                    {Object.entries(
                      t(
                        "pages.services.preventiveCheckups.packages.senior.features",
                        {
                          returnObjects: true,
                        },
                      ),
                    )
                      .filter(([key]) => key !== "all")
                      .map(([_, feat]: [string, any], i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-slate-600"
                        >
                          <span className="material-icons text-green-500 text-lg">
                            check_circle
                          </span>
                          <span>{feat}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <button
                    onClick={() =>
                      openAppointment({
                        department: "Preventive Checkups",
                        serviceName: "Senior Health Package",
                      })
                    }
                    className="block w-full py-3 px-4 bg-white border-2 border-primary text-primary font-bold text-center rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {t(
                      "pages.services.preventiveCheckups.packages.senior.button",
                    )}
                  </button>
                </div>
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
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "var(--color-text)" }}
          >
            {t("pages.services.preventiveCheckups.comparison.title")}
          </h2>
          <Reveal threshold={0.1}>
            <div
              className="overflow-x-auto rounded-xl shadow-card border"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr
                    className="border-b"
                    style={{
                      backgroundColor: "var(--color-bg-alt)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <th className="p-4 md:p-6 text-sm font-semibold text-slate-500">
                      {t(
                        "pages.services.preventiveCheckups.comparison.header.feature",
                      )}
                    </th>
                    <th
                      className="p-4 md:p-6 text-sm font-bold text-center w-1/5"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t(
                        "pages.services.preventiveCheckups.comparison.header.basic",
                      )}
                    </th>
                    <th className="p-4 md:p-6 text-sm font-bold text-center text-primary w-1/5">
                      {t(
                        "pages.services.preventiveCheckups.comparison.header.executive",
                      )}
                    </th>
                    <th
                      className="p-4 md:p-6 text-sm font-bold text-center w-1/5"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t(
                        "pages.services.preventiveCheckups.comparison.header.senior",
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {Object.entries(
                    t("pages.services.preventiveCheckups.comparison.rows", {
                      returnObjects: true,
                    }),
                  ).map(([key, name]: [string, any], i) => {
                    const rowData = [
                      { basic: true, exec: true, senior: true },
                      { basic: true, exec: true, senior: true },
                      { basic: false, exec: true, senior: true },
                      { basic: false, exec: true, senior: true },
                      { basic: false, exec: false, senior: true },
                      { basic: false, exec: true, senior: true },
                    ];
                    const row = rowData[parseInt(key)];

                    return (
                      <tr key={i}>
                        <td className="p-4 md:p-6 text-sm text-slate-700 font-medium">
                          {name}
                        </td>
                        <td className="p-4 md:p-6 text-center">
                          {row.basic ? (
                            <span className="material-icons text-green-500 text-base">
                              check_circle
                            </span>
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-slate-200 inline-block"></span>
                          )}
                        </td>
                        <td className="p-4 md:p-6 text-center">
                          {row.exec ? (
                            <span className="material-icons text-green-500 text-base">
                              check_circle
                            </span>
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-slate-200 inline-block"></span>
                          )}
                        </td>
                        <td className="p-4 md:p-6 text-center">
                          {row.senior ? (
                            <span className="material-icons text-green-500 text-base">
                              check_circle
                            </span>
                          ) : (
                            <span className="w-2 h-2 rounded-full bg-slate-200 inline-block"></span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <Reveal from="left" threshold={0.1} className="lg:w-1/2">
              <img
                src="/images/preventive-checkup-body-2.jpg"
                alt="Wellness Planning"
                className="rounded-2xl shadow-xl w-full h-auto object-cover border border-slate-100"
              />
            </Reveal>
            <Reveal from="right" threshold={0.1} className="lg:w-1/2">
              <h2
                className="text-3xl font-serif font-bold mb-6"
                style={{ color: "var(--color-text)" }}
              >
                {t("pages.services.preventiveCheckups.wellness.title")}
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {t("pages.services.preventiveCheckups.wellness.description")}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div
                    className="p-1 rounded"
                    style={{
                      backgroundColor: "var(--color-primary-light)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <span className="material-icons text-sm font-bold">
                      restaurant
                    </span>
                  </div>
                  <div>
                    <h4
                      className="font-bold text-sm"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t(
                        "pages.services.preventiveCheckups.wellness.features.nutrition.title",
                      )}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {t(
                        "pages.services.preventiveCheckups.wellness.features.nutrition.description",
                      )}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="p-1 rounded"
                    style={{
                      backgroundColor: "var(--color-primary-light)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <span className="material-icons text-sm font-bold">
                      directions_run
                    </span>
                  </div>
                  <div>
                    <h4
                      className="font-bold text-sm"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t(
                        "pages.services.preventiveCheckups.wellness.features.activity.title",
                      )}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {t(
                        "pages.services.preventiveCheckups.wellness.features.activity.description",
                      )}
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                to="/blog"
                className="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                {t("pages.services.preventiveCheckups.wellness.success")}{" "}
                <span className="material-icons text-sm ml-1">
                  arrow_forward
                </span>
              </Link>
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
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">
            health_and_safety
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal threshold={0.1}>
            <div className="max-w-4xl mx-auto">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.services.preventiveCheckups.cta.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.services.preventiveCheckups.cta.titlePart1")} <br />
                <span style={{ color: "var(--color-cta-accent)" }}>
                  {t("pages.services.preventiveCheckups.cta.titlePart2")}
                </span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.services.preventiveCheckups.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() =>
                    openAppointment({ department: "Preventive Checkups" })
                  }
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white rounded-full shadow-xl transition-all hover:scale-105"
                  style={{ color: "var(--color-cta-from)" }}
                >
                  {t("pages.services.preventiveCheckups.cta.buttons.schedule")}
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t("pages.services.preventiveCheckups.cta.buttons.contact")}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default PreventiveCheckups;
