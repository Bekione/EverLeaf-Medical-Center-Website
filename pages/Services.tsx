import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../Layout";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { services } from "../data/services";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  const { t } = useTranslation();
  const { openAppointment } = useOutletContext<{
    openAppointment: OpenAppointmentFunc;
  }>();

  return (
    <div className="animate-fade-in">
      <SEO
        title={t("nav.services")}
        description={t("pages.home.services.subtitle")}
        canonical="https://everleaf-medical.com/services"
      />

      {/* Page Header */}
      <header
        className="border-b py-16"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <Reveal delay={0}>
            <span
              className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full"
              style={{
                color: "var(--color-primary-dark)",
                backgroundColor: "var(--color-primary-light)",
              }}
            >
              {t("pages.home.services.badge")}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="text-4xl lg:text-5xl font-serif font-bold mb-6"
              style={{ color: "var(--color-text)" }}
            >
              {t("nav.services")}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p
              className="text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--color-text-muted)" }}
            >
              {t("pages.home.services.subtitle")}
            </p>
          </Reveal>
        </div>
      </header>

      {/* Services Grid */}
      <section
        className="py-20 relative"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Reveal key={idx} delay={idx * 70}>
                <div
                  className="rounded-2xl p-8 shadow-card border hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className={`w-16 h-16 bg-${service.color}-50 rounded-2xl flex items-center justify-center text-${service.color}-500 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="material-icons text-3xl">
                      {service.icon}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t(`data.services.${service.id}.title`)}
                  </h3>
                  <p
                    className="mb-6 leading-relaxed grow"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {t(`data.services.${service.id}.desc`)}
                  </p>
                  <Link
                    to={service.link}
                    aria-label={t("common.buttons.learnMore")}
                    className="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors group/link mt-auto"
                  >
                    {t("common.buttons.learnMore")}{" "}
                    <span className="material-icons text-sm ml-1 group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-cta-from), var(--color-cta-to))",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.about.hero.badge")}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.home.cta.titleStart")} <br />
                <span className="text-blue-300">
                  {t("pages.home.cta.titleHighlight")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.home.cta.subtitle")}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => openAppointment()}
                  className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/30 hover:scale-105 flex items-center gap-2"
                >
                  {t("common.buttons.bookAppointment")}{" "}
                  <span className="material-icons">calendar_today</span>
                </button>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  {t("common.buttons.contactUs")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
