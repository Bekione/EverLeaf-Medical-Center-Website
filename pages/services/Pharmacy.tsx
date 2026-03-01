import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";
import Button from "../../components/Button";
import CTASection from "../../components/CTASection";
import HeroSection from "../../components/HeroSection";

const Pharmacy: React.FC = () => {
  const { t } = useTranslation();
  // The openAppointment context and scrollToSection function are no longer directly used by the HeroSection buttons.
  // If they are not used elsewhere in this component, they can be removed.
  // For now, keeping them as the instruction only specified replacing the header.
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
      <HeroSection
        variant="impact"
        badge={t("pages.services.pharmacy.hero.badge")}
        badgeIcon="medication"
        titlePart1={t("pages.services.pharmacy.hero.title")}
        description={t("pages.services.pharmacy.hero.description")}
        image="/images/hero/pharmacy-hero.jpg"
        primaryButton={{
          label: t("pages.services.pharmacy.hero.buttons.services"),
          onClick: (e: any) => scrollToSection(e, "services"),
          icon: "medical_services",
        }}
        secondaryButton={{
          label: t("pages.services.pharmacy.hero.buttons.consult"),
          to: "/contact",
          variant: "secondary",
          icon: "chat",
        }}
      />

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

      <CTASection
        badge={t("pages.services.pharmacy.cta.badge")}
        titlePart1={t("pages.services.pharmacy.cta.titlePart1")}
        titleHighlight={t("pages.services.pharmacy.cta.titlePart2")}
        description={t("pages.services.pharmacy.cta.description")}
        primaryButton={{
          label: t("pages.services.pharmacy.cta.buttons.call"),
          href: "tel:5551234567",
        }}
        secondaryButton={{
          label: t("pages.services.pharmacy.cta.buttons.visit"),
          to: "/contact",
        }}
        iconName="medication"
      />
    </div>
  );
};

export default Pharmacy;
