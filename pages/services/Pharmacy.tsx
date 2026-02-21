import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const Pharmacy: React.FC = () => {
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
        title={t("pages.services.pharmacy.seo.title")}
        description={t("pages.services.pharmacy.seo.description")}
        canonical="https://everleaf-medical.com/services/pharmacy"
      />
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/pharmacy-hero.jpg"
            alt="Modern Pharmacy"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <Reveal delay={0}>
              <div className="flex items-center gap-2 mb-4 text-green-300 font-semibold tracking-wide uppercase text-sm">
                <span className="material-icons text-lg">local_pharmacy</span>
                <span>{t("pages.services.pharmacy.hero.badge")}</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                {t("pages.services.pharmacy.hero.title")}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                {t("pages.services.pharmacy.hero.description")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={(e) => scrollToSection(e, "services")}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-secondary hover:bg-green-600 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  {t("pages.services.pharmacy.hero.buttons.services")}
                </button>
                <button
                  onClick={() => openAppointment({ department: "Pharmacy" })}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
                >
                  {t("pages.services.pharmacy.hero.buttons.consult")}
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50 relative" id="services">
        <div className="absolute inset-0 hero-pattern pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal threshold={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                {t("pages.services.pharmacy.intro.title")}
              </h2>
              <p className="text-slate-600">
                {t("pages.services.pharmacy.intro.description")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {Object.entries(
              t("pages.services.pharmacy.mainServices", {
                returnObjects: true,
              }),
            ).map(([key, service]: [string, any], i) => {
              const icons = {
                prescription: "receipt_long",
                consultation: "contact_support",
                delivery: "local_shipping",
                otc: "medication",
              };
              const colors = {
                prescription: "blue",
                consultation: "teal",
                delivery: "green",
                otc: "indigo",
              };
              const colorNames = {
                prescription: "primary",
                consultation: "teal-600",
                delivery: "secondary",
                otc: "indigo-600",
              };

              return (
                <Reveal key={i} delay={i * 100} threshold={0.1}>
                  <div
                    className="rounded-2xl p-8 shadow-card border flex flex-col md:flex-row gap-6 items-start group hover:-translate-y-1 transition-all duration-300 h-full"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <div
                      className={`shrink-0 w-16 h-16 bg-${
                        colors[key as keyof typeof colors]
                      }-50 rounded-xl flex items-center justify-center text-${
                        colorNames[key as keyof typeof colorNames]
                      } group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="material-icons text-3xl">
                        {icons[key as keyof typeof icons]}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ color: "var(--color-text)" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-slate-500 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {Object.values(service.items || {}).map(
                          (item: any, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-slate-600"
                            >
                              <span className="material-icons text-secondary text-sm">
                                check_circle
                              </span>{" "}
                              {item}
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

          <Reveal threshold={0.1}>
            <div
              className="rounded-3xl p-8 md:p-12 border overflow-hidden relative"
              style={{
                background:
                  "linear-gradient(to right, var(--color-bg-alt), var(--color-surface))",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase rounded-full"
                    style={{
                      color: "var(--color-text)",
                      backgroundColor: "var(--color-bg-alt)",
                    }}
                  >
                    {t("pages.services.pharmacy.commitment.badge")}
                  </div>
                  <h3
                    className="text-3xl font-serif font-bold mb-6"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t("pages.services.pharmacy.commitment.title")}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {t("pages.services.pharmacy.commitment.description")}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div
                        className="p-2 rounded-lg shadow-sm"
                        style={{ backgroundColor: "var(--color-surface)" }}
                      >
                        <span className="material-icons text-secondary">
                          verified_user
                        </span>
                      </div>
                      <div>
                        <h4
                          className="font-bold"
                          style={{ color: "var(--color-text)" }}
                        >
                          {t(
                            "pages.services.pharmacy.commitment.features.verification.title",
                          )}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {t(
                            "pages.services.pharmacy.commitment.features.verification.description",
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div
                        className="p-2 rounded-lg shadow-sm"
                        style={{ backgroundColor: "var(--color-surface)" }}
                      >
                        <span className="material-icons text-secondary">
                          inventory_2
                        </span>
                      </div>
                      <div>
                        <h4
                          className="font-bold"
                          style={{ color: "var(--color-text)" }}
                        >
                          {t(
                            "pages.services.pharmacy.commitment.features.storage.title",
                          )}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {t(
                            "pages.services.pharmacy.commitment.features.storage.description",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/images/pharmacy-body-1.jpg"
                    alt="Pharmacist checking quality"
                    className="rounded-2xl shadow-xl w-full object-cover h-80"
                  />
                  <div
                    className="absolute -bottom-6 -left-6 p-4 rounded-xl shadow-lg border max-w-xs hidden md:block"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <span className="material-icons text-secondary">
                          thumb_up
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase font-semibold">
                          {t(
                            "pages.services.pharmacy.commitment.accuracy.label",
                          )}
                        </p>
                        <p
                          className="text-lg font-bold"
                          style={{ color: "var(--color-text)" }}
                        >
                          {t(
                            "pages.services.pharmacy.commitment.accuracy.value",
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
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
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">
            medication
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal threshold={0.1}>
            <div className="max-w-4xl mx-auto">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.services.pharmacy.cta.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.services.pharmacy.cta.titlePart1")} <br />
                <span style={{ color: "var(--color-cta-accent)" }}>
                  {t("pages.services.pharmacy.cta.titlePart2")}
                </span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.services.pharmacy.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:5551234567"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white rounded-full shadow-xl transition-all hover:scale-105"
                  style={{ color: "var(--color-cta-from)" }}
                >
                  {t("pages.services.pharmacy.cta.buttons.call")}
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t("pages.services.pharmacy.cta.buttons.visit")}
                </Link>
              </div>
              <p className="mt-8 text-sm text-white/60">
                {t("pages.services.pharmacy.cta.refill.text")}{" "}
                <Link
                  to="/contact"
                  className="text-white font-semibold hover:underline"
                >
                  {t("pages.services.pharmacy.cta.refill.form")}
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Pharmacy;
