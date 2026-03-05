import React from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";
import Button from "../../components/Button";
import CTASection from "../../components/CTASection";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import { CldImg } from "../../components/CldImg";

const Laboratory: React.FC = () => {
  const { t } = useTranslation();
  const { openAppointment } = useOutletContext<{
    openAppointment: OpenAppointmentFunc;
  }>();

  return (
    <div className="animate-fade-in">
      <SEO
        title={t("pages.services.laboratory.seo.title")}
        description={t("pages.services.laboratory.seo.description")}
        canonical="https://everleaf-medical.com/services/laboratory"
      />
      <HeroSection
        variant="impact"
        badge={t("pages.services.laboratory.hero.badge")}
        badgeIcon="science"
        titlePart1={t("pages.services.laboratory.hero.titlePart1")}
        titleHighlight={t("pages.services.laboratory.hero.titlePart2")}
        description={t("pages.services.laboratory.hero.description")}
        image="/images/hero/laboratory-hero-1.jpg"
        primaryButton={{
          label: t("pages.services.laboratory.hero.buttons.book"),
          onClick: () => openAppointment({ department: "Laboratory" }),
          icon: "calendar_today",
        }}
        secondaryButton={{
          label: t("pages.services.laboratory.hero.buttons.homeCollection"),
          onClick: () =>
            openAppointment({
              department: "Laboratory",
              serviceName: "Home Collection",
            }),
          variant: "secondary",
          icon: "home_work",
        }}
      />

      <FeaturesSection
        className="py-20 bg-bg-alt"
        badge={t("pages.services.laboratory.intro.badge")}
        title={t("pages.services.laboratory.intro.title")}
        description={t("pages.services.laboratory.intro.description")}
        columns={3}
        items={[
          {
            title: t(
              "pages.services.laboratory.departments.biochemistry.title",
            ),
            icon: "biotech",
            color: "blue",
            description: t(
              "pages.services.laboratory.departments.biochemistry.description",
            ),
            items: [
              t("pages.services.laboratory.departments.biochemistry.items.0"),
              t("pages.services.laboratory.departments.biochemistry.items.1"),
              t("pages.services.laboratory.departments.biochemistry.items.2"),
            ],
          },
          {
            title: t(
              "pages.services.laboratory.departments.microbiology.title",
            ),
            icon: "coronavirus",
            color: "teal",
            description: t(
              "pages.services.laboratory.departments.microbiology.description",
            ),
            items: [
              t("pages.services.laboratory.departments.microbiology.items.0"),
              t("pages.services.laboratory.departments.microbiology.items.1"),
              t("pages.services.laboratory.departments.microbiology.items.2"),
            ],
          },
          {
            title: t("pages.services.laboratory.departments.hematology.title"),
            icon: "bloodtype",
            color: "red",
            description: t(
              "pages.services.laboratory.departments.hematology.description",
            ),
            items: [
              t("pages.services.laboratory.departments.hematology.items.0"),
              t("pages.services.laboratory.departments.hematology.items.1"),
              t("pages.services.laboratory.departments.hematology.items.2"),
            ],
          },
        ]}
      />

      <section
        className="py-20 overflow-hidden"
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
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
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
                  <span className="material-icons text-lg shrink-0">
                    home_work
                  </span>
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
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5 shrink-0">
                        <span className="material-icons text-sm">check</span>
                      </div>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() =>
                    openAppointment({
                      department: "Laboratory",
                      doctorName: "Home Collection Service",
                    })
                  }
                  variant="action"
                  size="sm"
                >
                  {t("pages.services.laboratory.homeCollection.button")}
                  <span className="material-icons text-sm ml-2 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-alt overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal from="left" threshold={0.1}>
              <div className="order-2 lg:order-1">
                <CldImg
                  src="/images/laboratory-body-image-1.jpg"
                  alt={t("common.imgAlt.laboratoryMicroscope")}
                  transform="w_1000,h_400,q_auto,f_auto,c_fill"
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

      <CTASection
        badge={t("pages.services.laboratory.cta.badge")}
        titlePart1={t("pages.services.laboratory.cta.titlePart1")}
        titleHighlight={t("pages.services.laboratory.cta.titlePart2")}
        description={t("pages.services.laboratory.cta.description")}
        primaryButton={{
          label: t("pages.services.laboratory.cta.buttons.request"),
          onClick: () => openAppointment({ department: "Laboratory" }),
        }}
        secondaryButton={{
          label: t("pages.services.laboratory.cta.buttons.pricing"),
          to: "/contact",
        }}
        iconName="science"
      />
    </div>
  );
};

export default Laboratory;
