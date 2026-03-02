import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";
import Button from "../../components/Button";
import CTASection from "../../components/CTASection";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import ServicesSection from "../../components/ServicesSection";
import TeamSection from "../../components/TeamSection";

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
      <HeroSection
        variant="impact"
        badge={t("pages.services.imaging.hero.badge")}
        badgeIcon="scanner"
        titlePart1={t("pages.services.imaging.hero.titlePart1")}
        titleHighlight={t("pages.services.imaging.hero.titlePart2")}
        description={t("pages.services.imaging.hero.description")}
        image="/images/hero/imaging-hero.jpg"
        primaryButton={{
          label: t("pages.services.imaging.hero.buttons.schedule"),
          onClick: () => openAppointment({ department: "Imaging" }),
          icon: "calendar_today",
        }}
        secondaryButton={{
          label: t("pages.services.imaging.hero.buttons.procedures"),
          onClick: (e: any) => scrollToSection(e, "procedures"),
          variant: "secondary",
          icon: "visibility",
        }}
      />

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
                  <Button variant="white" to="/contact">
                    {t("pages.services.imaging.results.button")}
                  </Button>
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

      <FeaturesSection
        className="py-20 bg-bg-alt"
        badge={t("pages.services.imaging.conditions.badge")}
        title={t("pages.services.imaging.conditions.title")}
        description={t("pages.services.imaging.conditions.description")}
        items={[
          {
            title: t("pages.services.imaging.conditions.items.0.title"),
            icon: "accessibility_new",
            color: "orange",
            description: t(
              "pages.services.imaging.conditions.items.0.description",
            ),
          },
          {
            title: t("pages.services.imaging.conditions.items.1.title"),
            icon: "biotech",
            color: "purple",
            description: t(
              "pages.services.imaging.conditions.items.1.description",
            ),
          },
          {
            title: t("pages.services.imaging.conditions.items.2.title"),
            icon: "favorite",
            color: "red",
            description: t(
              "pages.services.imaging.conditions.items.2.description",
            ),
          },
          {
            title: t("pages.services.imaging.conditions.items.3.title"),
            icon: "monitor_heart",
            color: "teal",
            description: t(
              "pages.services.imaging.conditions.items.3.description",
            ),
          },
        ]}
      />

      <ServicesSection
        className="py-20 bg-bg"
        badge={t("pages.services.imaging.procedures.subtitle")}
        title={t("pages.services.imaging.procedures.title")}
        variant="split"
        services={[
          {
            title: t("pages.services.imaging.procedures.items.0.title"),
            icon: "image",
            color: "primary",
            description: t(
              "pages.services.imaging.procedures.items.0.description",
            ),
            features: [
              t("common.labels.instantResults"),
              t("common.labels.lowDose"),
            ],
          },
          {
            title: t("pages.services.imaging.procedures.items.1.title"),
            icon: "female",
            color: "pink",
            description: t(
              "pages.services.imaging.procedures.items.1.description",
            ),
            features: [
              t("common.labels.increasedAccuracy"),
              t("common.labels.comfortableDesign"),
            ],
          },
          {
            title: t("pages.services.imaging.procedures.items.2.title"),
            icon: "all_inclusive",
            color: "indigo",
            description: t(
              "pages.services.imaging.procedures.items.2.description",
            ),
            features: [
              t("common.labels.wideBore"),
              t("common.labels.contrastEnhanced"),
            ],
          },
          {
            title: t("pages.services.imaging.procedures.items.3.title"),
            icon: "donut_large",
            color: "blue",
            description: t(
              "pages.services.imaging.procedures.items.3.description",
            ),
            features: [
              t("common.labels.64SliceTech"),
              t("common.labels.lowDoseProtocols"),
            ],
          },
        ]}
      />

      <TeamSection
        className="py-20 bg-surface"
        badge={t("pages.services.imaging.team.badge")}
        title={t("pages.services.imaging.team.title")}
        viewAllLink="/doctors"
        viewAllLabel={t("pages.services.imaging.team.viewAll")}
        onBookAppointment={(doctorName) =>
          openAppointment({ doctorName, department: "Radiology" })
        }
        members={[
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
        ]}
      />

      <CTASection
        badge={t("pages.services.imaging.cta.badge")}
        titlePart1={t("pages.services.imaging.cta.titlePart1")}
        titleHighlight={t("pages.services.imaging.cta.titlePart2")}
        description={t("pages.services.imaging.cta.description")}
        primaryButton={{
          label: t("pages.services.imaging.cta.buttons.appointment"),
          onClick: () => openAppointment({ department: "Radiology" }),
        }}
        secondaryButton={{
          label: t("pages.services.imaging.cta.buttons.referrals"),
          to: "/contact",
        }}
        iconName="scanner"
      />
    </div>
  );
};

export default Imaging;
