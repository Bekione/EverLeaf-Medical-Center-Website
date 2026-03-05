import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../Layout";
import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import Reveal from "../components/Reveal";
import { services } from "../data/services";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import { useLangPath } from "@/hooks/useLang";

const Services: React.FC = () => {
  const { t } = useTranslation();
  const buildPath = useLangPath();
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

      <HeroSection
        variant="centered"
        badge={t("pages.home.services.badge")}
        title={t("nav.services")}
        description={t("pages.home.services.subtitle")}
      />

      {/* Services List Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                title={t(`data.services.${service.id}.title`)}
                description={t(`data.services.${service.id}.desc`)}
                icon={service.icon}
                color={service.color}
                to={buildPath(service.link)}
                delay={idx * 70}
              />
            ))}
          </div>
        </div>
      </section>

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
          label: t("common.buttons.contactUs"),
          to: buildPath("/contact"),
        }}
        iconName="medical_services"
      />
    </div>
  );
};

export default Services;
