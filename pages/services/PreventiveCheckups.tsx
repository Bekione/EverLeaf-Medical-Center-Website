import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";
import { useLangPath } from "../../hooks/useLang";
import Button from "../../components/Button";
import CTASection from "../../components/CTASection";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import { CldImg } from "../../components/CldImg";

const PreventiveCheckups: React.FC = () => {
  const { t } = useTranslation();
  const buildPath = useLangPath();
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
        title={t("pages.services.preventive.seo.title")}
        description={t("pages.services.preventive.seo.description")}
        canonical="https://everleaf-medical.com/services/preventive-checkups"
      />
      <HeroSection
        variant="impact"
        badge={t("pages.services.preventiveCheckups.hero.badge")}
        badgeIcon="health_and_safety"
        titlePart1={t("pages.services.preventiveCheckups.hero.title")}
        description={t("pages.services.preventiveCheckups.hero.description")}
        image="/images/hero/preventive-checkup-hero.jpg"
        primaryButton={{
          label: t("pages.services.preventiveCheckups.hero.buttons.contact"),
          onClick: () => openAppointment({ department: "Preventive Care" }),
          icon: "calendar_today",
        }}
        secondaryButton={{
          label: t("pages.services.preventiveCheckups.hero.buttons.packages"),
          onClick: (e: any) => scrollToSection(e, "packages"),
          variant: "secondary",
          icon: "explore",
        }}
      />

      <FeaturesSection
        className="py-20 bg-bg-alt"
        title={t("pages.services.preventiveCheckups.importance.title")}
        description={t(
          "pages.services.preventiveCheckups.importance.description",
        )}
        columns={3}
        items={[
          {
            title: t(
              "pages.services.preventiveCheckups.importance.areas.heart.title",
            ),
            icon: "monitor_heart",
            color: "red",
            description: t(
              "pages.services.preventiveCheckups.importance.areas.heart.description",
            ),
          },
          {
            title: t(
              "pages.services.preventiveCheckups.importance.areas.diabetes.title",
            ),
            icon: "water_drop",
            color: "blue",
            description: t(
              "pages.services.preventiveCheckups.importance.areas.diabetes.description",
            ),
          },
          {
            title: t(
              "pages.services.preventiveCheckups.importance.areas.cancer.title",
            ),
            icon: "healing",
            color: "purple",
            description: t(
              "pages.services.preventiveCheckups.importance.areas.cancer.description",
            ),
          },
        ]}
      />

      <section
        className="py-20 relative overflow-hidden"
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
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-primary uppercase bg-primary-light rounded-full">
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
                        <span className="material-icons text-green-500 text-lg shrink-0">
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <Button
                    onClick={() =>
                      openAppointment({
                        department: "Preventive Checkups",
                        serviceName: "Basic Wellness Package",
                      })
                    }
                    variant="outline"
                    className="w-full"
                  >
                    {t(
                      "pages.services.preventiveCheckups.packages.basic.button",
                    )}
                  </Button>
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
                  <Button
                    onClick={() =>
                      openAppointment({
                        department: "Preventive Checkups",
                        serviceName: "Executive Checkup Package",
                      })
                    }
                    variant="white"
                    className="w-full"
                  >
                    {t(
                      "pages.services.preventiveCheckups.packages.executive.button",
                    )}
                  </Button>
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
                  <Button
                    onClick={() =>
                      openAppointment({
                        department: "Preventive Checkups",
                        serviceName: "Senior Health Package",
                      })
                    }
                    variant="outline"
                    className="w-full"
                  >
                    {t(
                      "pages.services.preventiveCheckups.packages.senior.button",
                    )}
                  </Button>
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
                    <th className="p-4 md:p-6 text-sm font-semibold text-slate-500 whitespace-nowrap">
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
        className="py-20 overflow-hidden"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <Reveal from="left" threshold={0.1} className="lg:w-1/2">
              <CldImg
                src="/images/preventive-checkup-body-2.jpg"
                alt={t("common.imgAlt.wellnessPlanning")}
                transform="w_900,q_auto,f_auto,c_fill"
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
              <Button to={buildPath("/blog")} variant="action" size="sm">
                {t("pages.services.preventiveCheckups.wellness.success")}
                <span className="material-icons text-sm ml-2 transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        badge={t("pages.services.preventiveCheckups.cta.badge")}
        titlePart1={t("pages.services.preventiveCheckups.cta.titlePart1")}
        titleHighlight={t("pages.services.preventiveCheckups.cta.titlePart2")}
        description={t("pages.services.preventiveCheckups.cta.description")}
        primaryButton={{
          label: t("pages.services.preventiveCheckups.cta.buttons.schedule"),
          onClick: () => openAppointment({ department: "Preventive Checkups" }),
        }}
        secondaryButton={{
          label: t("pages.services.preventiveCheckups.cta.buttons.contact"),
          to: buildPath("/contact"),
        }}
        iconName="health_and_safety"
      />
    </div>
  );
};

export default PreventiveCheckups;
