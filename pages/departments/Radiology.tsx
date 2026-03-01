import React from "react";
import { useTranslation } from "react-i18next";
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

const Radiology: React.FC = () => {
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
        title={t("pages.departments.radiology.seo.title")}
        description={t("pages.departments.radiology.seo.description")}
        canonical="https://everleaf-medical.com/departments/radiology"
      />
      <HeroSection
        variant="info"
        badge={t("pages.departments.radiology.hero.badge")}
        badgeIcon="scanner"
        titlePart1={t("pages.departments.radiology.hero.titlePart1")}
        titleHighlight={t("pages.departments.radiology.hero.titleHighlight")}
        description={t("pages.departments.radiology.hero.description")}
        image="/images/hero/radiology-hero.jpg"
        accentColor="indigo"
        primaryButton={{
          label: t("pages.departments.radiology.hero.buttons.appointment"),
          onClick: () => openAppointment({ department: "Radiology" }),
          icon: "calendar_today",
        }}
        secondaryButton={{
          label: t("pages.departments.radiology.hero.buttons.specialists"),
          onClick: (e: any) => scrollToSection(e, "specialists"),
          variant: "outline",
          icon: "groups",
        }}
        statsCard={{
          value: t("pages.departments.radiology.stats.imaging.value"),
          label: t("pages.departments.radiology.stats.imaging.label"),
          icon: "history",
        }}
      />
      <FeaturesSection
        badge={t("pages.departments.radiology.intro.badge")}
        title={t("pages.departments.radiology.intro.title")}
        description={t("pages.departments.radiology.intro.description")}
        items={[
          {
            key: "fracture",
            icon: "accessibility",
            color: "orange",
          },
          {
            key: "tumor",
            icon: "science",
            color: "purple",
          },
          {
            key: "cardiovascular",
            icon: "favorite",
            color: "red",
          },
          {
            key: "organ",
            icon: "healing",
            color: "blue",
          },
        ].map((item) => {
          const treatment = t(
            `pages.departments.radiology.treatments.${item.key}`,
            {
              returnObjects: true,
            },
          ) as { title: string; description: string };
          return {
            title: treatment.title,
            description: treatment.description,
            icon: item.icon,
            color: item.color,
          };
        })}
      />
      <ServicesSection
        badge={t("pages.departments.radiology.procedures.badge")}
        title={t("pages.departments.radiology.procedures.title")}
        description={t("pages.departments.radiology.procedures.description")}
        id="services"
        services={[
          {
            key: "xray",
            icon: "image",
          },
          {
            key: "mammography",
            icon: "face",
          },
          {
            key: "mri",
            icon: "donut_large",
          },
          {
            key: "ct",
            icon: "data_usage",
          },
        ].map((item) => {
          const procedure = t(
            `pages.departments.radiology.procedures.items.${item.key}`,
            {
              returnObjects: true,
            },
          ) as {
            title: string;
            description: string;
            features: { [key: string]: string };
          };
          return {
            title: procedure.title,
            description: procedure.description,
            icon: item.icon,
            features: Object.values(procedure.features),
          };
        })}
      />
      <TeamSection
        className="py-20 bg-bg-alt relative"
        badge={t("pages.departments.radiology.team.badge")}
        title={t("pages.departments.radiology.team.title")}
        viewAllLabel={t("pages.departments.radiology.team.viewAll")}
        onBookAppointment={(name) =>
          openAppointment({ doctorName: name, department: "Radiology" })
        }
        members={[
          {
            ...(t("pages.departments.radiology.team.members.sarah", {
              returnObjects: true,
            }) as any),
            img: "/images/doctors/team-dr-sarah-jenkins.jpg",
          },
          {
            ...(t("pages.departments.radiology.team.members.michael", {
              returnObjects: true,
            }) as any),
            img: "/images/doctors/team-dr-mark-williams.jpg",
          },
          {
            ...(t("pages.departments.radiology.team.members.emily", {
              returnObjects: true,
            }) as any),
            img: "/images/doctors/team-dr-emily-chen.jpg",
          },
        ]}
      />
      <TechnologySection
        title={t("pages.departments.radiology.technology.title")}
        description={t("pages.departments.radiology.technology.description")}
        items={[
          {
            icon: "psychology",
            title: t("pages.departments.radiology.technology.ai.title"),
            description: t(
              "pages.departments.radiology.technology.ai.description",
            ),
            iconTextColor: "text-blue-400",
          },
          {
            icon: "security",
            title: t("pages.departments.radiology.technology.lowRad.title"),
            description: t(
              "pages.departments.radiology.technology.lowRad.description",
            ),
            iconBgColor: "bg-secondary/20",
            iconTextColor: "text-emerald-400",
          },
        ]}
        rightContent={
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
              <span className="text-4xl font-bold text-primary block mb-2">
                24/7
              </span>
              <span className="text-sm text-blue-100">
                {t("pages.departments.radiology.technology.stats.emergency")}
              </span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
              <span className="text-4xl font-bold text-emerald-400 block mb-2">
                4k+
              </span>
              <span className="text-sm text-blue-100">
                {t("pages.departments.radiology.technology.stats.scans")}
              </span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center col-span-2">
              <span className="text-4xl font-bold text-purple-400 block mb-2">
                100%
              </span>
              <span className="text-sm text-blue-100">
                {t("pages.departments.radiology.technology.stats.archives")}
              </span>
            </div>
          </div>
        }
      />
      <CTASection
        badge={t("pages.departments.radiology.cta.badge")}
        titlePart1={t("pages.departments.radiology.cta.titlePart1")}
        titleHighlight={t("pages.departments.radiology.cta.titleHighlight")}
        description={t("pages.departments.radiology.cta.description")}
        primaryButton={{
          label: t("pages.departments.radiology.cta.buttons.appointment"),
          onClick: () => openAppointment({ department: "Radiology" }),
        }}
        secondaryButton={{
          label: t("pages.departments.radiology.cta.buttons.referrals"),
          to: "/contact",
        }}
        iconName="scanner"
      />
    </div>
  );
};

export default Radiology;
