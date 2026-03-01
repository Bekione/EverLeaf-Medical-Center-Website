import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";
import CTASection from "../../components/CTASection";
import Button from "../../components/Button";
import HeroSection from "../../components/HeroSection";
import TeamSection from "../../components/TeamSection";
import FeaturesSection from "../../components/FeaturesSection";

const Cardiology: React.FC = () => {
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
        title={t(
          "pages.departments.cardiology.seo.title",
          "Cardiology Department",
        )}
        description={t(
          "pages.departments.cardiology.seo.description",
          "World-class heart care and cardiology services. Expert diagnosis and treatment for cardiovascular conditions.",
        )}
        canonical="https://everleaf-medical.com/departments/cardiology"
      />
      <HeroSection
        variant="info"
        badge={t("pages.departments.cardiology.hero.badge")}
        badgeIcon="favorite"
        titlePart1={t("pages.departments.cardiology.hero.titlePart1")}
        titleHighlight={t("pages.departments.cardiology.hero.titleHighlight")}
        titlePart2={t("pages.departments.cardiology.hero.titlePart2")}
        description={t("pages.departments.cardiology.hero.description")}
        image="/images/hero/cardilogy-hero-1.jpg"
        accentColor="red"
        primaryButton={{
          label: t("pages.departments.cardiology.hero.buttons.appointment"),
          onClick: () => openAppointment({ department: "Cardiology" }),
          icon: "calendar_today",
        }}
        secondaryButton={{
          label: t("pages.departments.cardiology.hero.buttons.team"),
          onClick: (e: any) => scrollToSection(e, "specialists"),
          variant: "outline",
          icon: "groups",
        }}
        statsCard={{
          value: t("pages.departments.cardiology.stats.surgeries.value"),
          label: t("pages.departments.cardiology.stats.surgeries.label"),
          icon: "favorite",
        }}
      />

      <FeaturesSection
        badge={t("pages.departments.cardiology.conditions.badge")}
        title={t("pages.departments.cardiology.conditions.title")}
        description={t("pages.departments.cardiology.conditions.description")}
        items={[
          {
            title: t("pages.departments.cardiology.conditions.items.0.title"),
            icon: "favorite",
            color: "red",
            description: t(
              "pages.departments.cardiology.conditions.items.0.description",
            ),
          },
          {
            title: t("pages.departments.cardiology.conditions.items.1.title"),
            icon: "water_drop",
            color: "blue",
            description: t(
              "pages.departments.cardiology.conditions.items.1.description",
            ),
          },
          {
            title: t("pages.departments.cardiology.conditions.items.2.title"),
            icon: "show_chart",
            color: "orange",
            description: t(
              "pages.departments.cardiology.conditions.items.2.description",
            ),
          },
          {
            title: t("pages.departments.cardiology.conditions.items.3.title"),
            icon: "change_circle",
            color: "purple",
            description: t(
              "pages.departments.cardiology.conditions.items.3.description",
            ),
          },
        ]}
      />

      <TeamSection
        className="py-20 bg-bg relative"
        badge={t("pages.departments.cardiology.team.badge")}
        title={t("pages.departments.cardiology.team.title")}
        viewAllLabel={t("pages.departments.cardiology.team.viewAll")}
        onBookAppointment={(name) =>
          openAppointment({ doctorName: name, department: "Cardiology" })
        }
        members={[
          {
            name: t("pages.departments.cardiology.team.members.james.name"),
            role: t("pages.departments.cardiology.team.members.james.role"),
            img: "/images/doctors/team-dr-james-wilson.jpg",
          },
          {
            name: t("pages.departments.cardiology.team.members.bereket.name"),
            role: t("pages.departments.cardiology.team.members.bereket.role"),
            img: "/images/doctors/team-dr-bereket-kinfe.jpg",
          },
          {
            name: t("pages.departments.cardiology.team.members.michael.name"),
            role: t("pages.departments.cardiology.team.members.michael.role"),
            img: "/images/doctors/team-dr-michael-chen.jpg",
          },
          {
            name: t("pages.departments.cardiology.team.members.emily.name"),
            role: t("pages.departments.cardiology.team.members.emily.role"),
            img: "/images/doctors/team-dr-emily-ross.jpg",
          },
        ]}
      />

      <CTASection
        badge={t("pages.departments.cardiology.cta.badge")}
        titlePart1={t("pages.departments.cardiology.cta.titlePart1")}
        titleHighlight={t("pages.departments.cardiology.cta.titleHighlight")}
        titlePart2={t("pages.departments.cardiology.cta.titlePart2")}
        description={t("pages.departments.cardiology.cta.description")}
        primaryButton={{
          label: t("pages.departments.cardiology.cta.buttons.appointment"),
          onClick: () => openAppointment({ department: "Cardiology" }),
        }}
        secondaryButton={{
          label: t("pages.departments.cardiology.cta.buttons.call"),
          href: "tel:+15551234567",
        }}
        iconName="favorite"
      />
    </div>
  );
};

export default Cardiology;
