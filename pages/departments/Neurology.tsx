import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";
import TechnologySection from "../../components/TechnologySection";
import CTASection from "../../components/CTASection";
import Button from "../../components/Button";
import HeroSection from "../../components/HeroSection";
import TeamSection from "../../components/TeamSection";
import FeaturesSection from "../../components/FeaturesSection";
import ServicesSection from "../../components/ServicesSection";
import { useTranslation } from "react-i18next";

const Neurology: React.FC = () => {
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
        title={t("pages.departments.neurology.seo.title")}
        description={t("pages.departments.neurology.seo.description")}
        canonical="https://everleaf-medical.com/departments/neurology"
      />
      <HeroSection
        variant="info"
        badge={t("pages.departments.neurology.hero.badge")}
        badgeIcon="psychology"
        titlePart1={t("pages.departments.neurology.hero.titlePart1")}
        titleHighlight={t("pages.departments.neurology.hero.titleHighlight")}
        description={t("pages.departments.neurology.hero.description")}
        image="/images/hero/neurology-hero.jpg"
        accentColor="purple"
        primaryButton={{
          label: t("pages.departments.neurology.hero.buttons.consult"),
          onClick: () => openAppointment({ department: "Neurology" }),
          icon: "calendar_today",
        }}
        secondaryButton={{
          label: t("pages.departments.neurology.hero.buttons.procedures"),
          onClick: (e: any) => scrollToSection(e, "procedures"),
          variant: "outline",
          icon: "visibility",
        }}
        statsCard={{
          value: t("pages.departments.neurology.stats.excellence.value"),
          label: t("pages.departments.neurology.stats.excellence.label"),
          icon: "verified",
        }}
      />

      <FeaturesSection
        badge={t("pages.departments.neurology.intro.badge")}
        title={t("pages.departments.neurology.intro.title")}
        description={t("pages.departments.neurology.intro.description")}
        items={[
          {
            title: t("pages.departments.neurology.conditions.stroke.title"),
            icon: "bolt",
            color: "red",
            description: t(
              "pages.departments.neurology.conditions.stroke.description",
            ),
          },
          {
            title: t("pages.departments.neurology.conditions.epilepsy.title"),
            icon: "insights",
            color: "yellow",
            description: t(
              "pages.departments.neurology.conditions.epilepsy.description",
            ),
          },
          {
            title: t("pages.departments.neurology.conditions.alzheimer.title"),
            icon: "psychology_alt",
            color: "blue",
            description: t(
              "pages.departments.neurology.conditions.alzheimer.description",
            ),
          },
          {
            title: t("pages.departments.neurology.conditions.migraine.title"),
            icon: "healing",
            color: "purple",
            description: t(
              "pages.departments.neurology.conditions.migraine.description",
            ),
          },
        ]}
      />

      <ServicesSection
        badge={t("pages.departments.neurology.procedures.badge")}
        title={t("pages.departments.neurology.procedures.title")}
        description={t("pages.departments.neurology.procedures.description")}
        id="procedures"
        services={[
          {
            title: t("pages.departments.neurology.procedures.items.eeg.title"),
            description: t(
              "pages.departments.neurology.procedures.items.eeg.description",
            ),
            icon: "psychology",
          },
          {
            title: t(
              "pages.departments.neurology.procedures.items.nerve.title",
            ),
            description: t(
              "pages.departments.neurology.procedures.items.nerve.description",
            ),
            icon: "bolt",
          },
          {
            title: t(
              "pages.departments.neurology.procedures.items.rehab.title",
            ),
            description: t(
              "pages.departments.neurology.procedures.items.rehab.description",
            ),
            icon: "accessibility_new",
          },
        ]}
      />

      <TechnologySection
        title={t("pages.departments.neurology.technology.title")}
        description={t(
          "pages.departments.neurology.technology.description",
          "Our neurology department is equipped with sophisticated diagnostic tools to provide precise mapping and analysis of neurological conditions.",
        )}
        items={[
          {
            icon: "psychology",
            title: t("pages.departments.neurology.technology.item1.title"),
            description: t(
              "pages.departments.neurology.technology.item1.description",
            ),
            iconTextColor: "text-blue-400",
          },
          {
            icon: "biotech",
            title: t("pages.departments.neurology.technology.item2.title"),
            description: t(
              "pages.departments.neurology.technology.item2.description",
            ),
            iconTextColor: "text-emerald-400",
          },
        ]}
        rightContent={
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 h-full flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-blue-100 text-lg italic leading-relaxed text-center">
                "{t("pages.departments.neurology.technology.quote")}"
              </p>
              <div className="flex justify-center">
                <span className="material-icons text-6xl text-blue-400/50">
                  psychology
                </span>
              </div>
            </div>
          </div>
        }
      />

      <TeamSection
        className="py-20 bg-bg-alt relative"
        badge={t("pages.departments.neurology.team.badge")}
        title={t("pages.departments.neurology.team.title")}
        viewAllLabel={t("pages.departments.neurology.team.viewAll")}
        onBookAppointment={(name) =>
          openAppointment({ doctorName: name, department: "Neurology" })
        }
        members={[
          {
            name: t("pages.departments.neurology.team.members.sarah.name"),
            role: t("pages.departments.neurology.team.members.sarah.role"),
            img: "/images/doctors/team-dr-sarah-mitchell.jpg",
          },
          {
            name: t("pages.departments.neurology.team.members.james.name"),
            role: t("pages.departments.neurology.team.members.james.role"),
            img: "/images/doctors/team-dr-mark-williams.jpg",
          },
          {
            name: t("pages.departments.neurology.team.members.emily.name"),
            role: t("pages.departments.neurology.team.members.emily.role"),
            img: "/images/doctors/team-dr-emily-chen.jpg",
          },
        ]}
      />

      <CTASection
        badge={t("pages.departments.neurology.cta.badge")}
        titlePart1={t("pages.departments.neurology.cta.titlePart1")}
        titleHighlight={t("pages.departments.neurology.cta.titleHighlight")}
        description={t("pages.departments.neurology.cta.description")}
        primaryButton={{
          label: t("pages.departments.neurology.cta.buttons.appointment"),
          onClick: () => openAppointment({ department: "Neurology" }),
        }}
        secondaryButton={{
          label: t("pages.departments.neurology.cta.buttons.contact"),
          to: "/contact",
        }}
        iconName="psychology"
      />
    </div>
  );
};

export default Neurology;
