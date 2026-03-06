import React from "react";
import { useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../Layout";
import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import { useTranslation } from "react-i18next";
import { departments } from "../data/departments";
import CTASection from "../components/CTASection";
import { useLangPath } from "../hooks/useLang";

const Departments: React.FC = () => {
  const { t } = useTranslation();
  const buildPath = useLangPath();
  const { openAppointment } = useOutletContext<{
    openAppointment: OpenAppointmentFunc;
  }>();

  return (
    <div className="animate-fade-in">
      <SEO
        title={t("nav.departments")}
        description={t("pages.home.infoCards.departments.desc")}
        canonical="https://everleaf-medical.com/departments"
      />

      <HeroSection
        variant="centered"
        badge={t("pages.home.services.badge")}
        title={t("pages.home.infoCards.departments.title")}
        description={t("pages.home.infoCards.departments.desc")}
      />

      {/* Departments Grid Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-primary) 0.5px, transparent 0.5px), radial-gradient(var(--color-primary) 0.5px, transparent 0.5px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, idx) => (
              <ServiceCard
                key={dept.id}
                title={t(`data.departments.${dept.id}.name`)}
                description={t(`data.departments.${dept.id}.desc`)}
                icon={dept.icon}
                color={dept.color}
                to={buildPath(`/departments/${dept.id}`)}
                delay={idx * 70}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        badge={t("pages.about.hero.badge")}
        titlePart1={t("pages.home.cta.titleStart")}
        titleHighlight={t("pages.home.cta.titleHighlight")}
        description={t("pages.home.cta.subtitle")}
        primaryButton={{
          label: t("common.buttons.bookAppointment"),
          onClick: () => openAppointment(),
        }}
        secondaryButton={{
          label: t("pages.home.infoCards.specialist.search"),
          to: buildPath("/doctors"),
        }}
        iconName="event"
      />
    </div>
  );
};

export default Departments;
