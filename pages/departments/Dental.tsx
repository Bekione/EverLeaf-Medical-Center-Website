import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
import { CldImg } from "../../components/CldImg";

const Dental: React.FC = () => {
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
        title={t("pages.departments.dental.seo.title", "Dental Clinic")}
        description={t(
          "pages.departments.dental.seo.description",
          "Comprehensive dental and oral healthcare. From routine cleanings to complex oral surgeries and orthodontics.",
        )}
        canonical="https://everleaf-medical.com/departments/dental"
      />
      <HeroSection
        variant="info"
        badge={t("pages.departments.dental.hero.badge")}
        badgeIcon="medical_services"
        titlePart1={t("pages.departments.dental.hero.titlePart1")}
        titleHighlight={t("pages.departments.dental.hero.titleHighlight")}
        description={t("pages.departments.dental.hero.description")}
        image="/images/hero/dental-hero.jpg"
        accentColor="blue"
        primaryButton={{
          label: t("pages.departments.dental.hero.buttons.appointment"),
          onClick: () => openAppointment({ department: "Dental" }),
          icon: "calendar_today",
        }}
        secondaryButton={{
          label: t("pages.departments.dental.hero.buttons.team"),
          onClick: (e: any) => scrollToSection(e, "specialists"),
          variant: "outline",
          icon: "groups",
        }}
        statsCard={{
          value: t("pages.departments.dental.stats.painless.value"),
          label: t("pages.departments.dental.stats.painless.label"),
          icon: "sentiment_satisfied",
        }}
      />

      <FeaturesSection
        badge={t("pages.departments.dental.conditions.badge")}
        title={t("pages.departments.dental.conditions.title")}
        description={t("pages.departments.dental.conditions.description")}
        items={[
          {
            title: t("pages.departments.dental.conditions.items.0.title"),
            icon: "sentiment_dissatisfied",
            color: "orange",
            description: t(
              "pages.departments.dental.conditions.items.0.description",
            ),
          },
          {
            title: t("pages.departments.dental.conditions.items.1.title"),
            icon: "opacity",
            color: "red",
            description: t(
              "pages.departments.dental.conditions.items.1.description",
            ),
          },
          {
            title: t("pages.departments.dental.conditions.items.2.title"),
            icon: "mood_bad",
            color: "slate",
            description: t(
              "pages.departments.dental.conditions.items.2.description",
            ),
          },
          {
            title: t("pages.departments.dental.conditions.items.3.title"),
            icon: "grid_on",
            color: "purple",
            description: t(
              "pages.departments.dental.conditions.items.3.description",
            ),
          },
        ]}
      />

      <ServicesSection
        badge={t("pages.departments.dental.expertise.badge")}
        title={t("pages.departments.dental.expertise.title")}
        description={t("pages.departments.dental.expertise.description")}
        services={[
          {
            title: t("pages.departments.dental.expertise.items.0.title"),
            description: t(
              "pages.departments.dental.expertise.items.0.description",
            ),
            icon: "brush",
          },
          {
            title: t("pages.departments.dental.expertise.items.1.title"),
            description: t(
              "pages.departments.dental.expertise.items.1.description",
            ),
            icon: "brightness_high",
          },
          {
            title: t("pages.departments.dental.expertise.items.2.title"),
            description: t(
              "pages.departments.dental.expertise.items.2.description",
            ),
            icon: "build",
          },
          {
            title: t("pages.departments.dental.expertise.items.3.title"),
            description: t(
              "pages.departments.dental.expertise.items.3.description",
            ),
            icon: "linear_scale",
          },
        ]}
      />

      <TeamSection
        badge={t("pages.departments.dental.team.badge")}
        title={t("pages.departments.dental.team.title")}
        viewAllLabel={t("pages.departments.dental.team.viewAll")}
        onBookAppointment={(name) =>
          openAppointment({ doctorName: name, department: "Dental" })
        }
        members={[
          {
            name: t("pages.departments.dental.team.members.sarah.name"),
            role: t("pages.departments.dental.team.members.sarah.role"),
            img: "/images/doctors/team-dr-sarah-johnson.jpg",
          },
          {
            name: t("pages.departments.dental.team.members.mark.name"),
            role: t("pages.departments.dental.team.members.mark.role"),
            img: "/images/doctors/team-dr-mark-williams.jpg",
          },
          {
            name: t("pages.departments.dental.team.members.emily.name"),
            role: t("pages.departments.dental.team.members.emily.role"),
            img: "/images/doctors/team-dr-emily-chen.jpg",
          },
        ]}
      />

      <TechnologySection
        title={t(
          "pages.departments.dental.technology.title",
          "Cutting-Edge Technology",
        )}
        description={t(
          "pages.departments.dental.technology.description",
          "We invest in the latest dental technologies to provide accurate diagnoses and effective treatments. Our modern facility is equipped to handle all your dental needs with precision.",
        )}
        items={[
          {
            icon: "radio_button_checked",
            title: t(
              "pages.departments.dental.technology.items.x-rays.title",
              "Digital X-Rays",
            ),
            description: t(
              "pages.departments.dental.technology.items.x-rays.description",
              "Low-radiation imaging for detailed views of teeth and jaw structure instantly.",
            ),
            iconTextColor: "text-blue-400",
          },
          {
            icon: "photo_camera",
            title: t(
              "pages.departments.dental.technology.items.cameras.title",
              "Intraoral Cameras",
            ),
            description: t(
              "pages.departments.dental.technology.items.cameras.description",
              "High-resolution cameras that allow you to see what the dentist sees in real-time.",
            ),
            iconTextColor: "text-emerald-400",
          },
        ]}
        rightContent={
          <div className="relative w-full min-h-[400px] h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-border transform lg:rotate-2 hover:rotate-0 transition-all duration-500 group">
            <CldImg
              src="/images/hero/dental-hero.jpg"
              alt={t("common.imgAlt.dentalTechnology")}
              transform="w_900,q_auto,f_auto,c_fill"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
          </div>
        }
      />

      <CTASection
        badge={t("pages.departments.dental.cta.badge")}
        titlePart1={t("pages.departments.dental.cta.titlePart1")}
        titleHighlight={t("pages.departments.dental.cta.titleHighlight")}
        description={t("pages.departments.dental.cta.description")}
        primaryButton={{
          label: t("pages.departments.dental.cta.buttons.appointment"),
          onClick: () => openAppointment({ department: "Dental" }),
        }}
        secondaryButton={{
          label: t("pages.departments.dental.cta.buttons.contact"),
          to: "/contact",
        }}
        iconName="sentiment_satisfied"
      />
    </div>
  );
};

export default Dental;
