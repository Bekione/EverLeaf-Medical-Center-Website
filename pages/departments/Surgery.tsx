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
import { CldImg } from "../../components/CldImg";

import { useTranslation } from "react-i18next";

const Surgery: React.FC = () => {
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
        title={t("pages.departments.surgery.seo.title")}
        description={t("pages.departments.surgery.seo.description")}
        canonical="https://everleaf-medical.com/departments/surgery"
      />
      <HeroSection
        variant="info"
        badge={t("pages.departments.surgery.hero.badge")}
        badgeIcon="medical_services"
        titlePart1={t("pages.departments.surgery.hero.titlePart1")}
        titleHighlight={t("pages.departments.surgery.hero.titleHighlight")}
        description={t("pages.departments.surgery.hero.description")}
        image="/images/hero/home-hero-3.jpg"
        accentColor="cyan"
        primaryButton={{
          label: t("pages.departments.surgery.hero.buttons.consultation"),
          onClick: () => openAppointment({ department: "Surgery" }),
          icon: "calendar_today",
        }}
        secondaryButton={{
          label: t("pages.departments.surgery.hero.buttons.team"),
          onClick: (e: any) => scrollToSection(e, "specialists"),
          variant: "outline",
          icon: "groups",
        }}
        statsCard={{
          value: t("pages.departments.surgery.stats.success.value"),
          label: t("pages.departments.surgery.stats.success.label"),
          icon: "verified",
        }}
      />

      <FeaturesSection
        className="py-20 bg-bg-alt"
        badge={t("pages.departments.surgery.conditions.intro.badge")}
        title={t("pages.departments.surgery.conditions.intro.title")}
        description={t(
          "pages.departments.surgery.conditions.intro.description",
        )}
        items={[
          {
            title: t(
              "pages.departments.surgery.conditions.items.appendicitis.title",
            ),
            icon: "medical_services",
            color: "red",
            description: t(
              "pages.departments.surgery.conditions.items.appendicitis.description",
            ),
          },
          {
            title: t(
              "pages.departments.surgery.conditions.items.hernias.title",
            ),
            icon: "accessibility_new",
            color: "blue",
            description: t(
              "pages.departments.surgery.conditions.items.hernias.description",
            ),
          },
          {
            title: t(
              "pages.departments.surgery.conditions.items.gallbladder.title",
            ),
            icon: "healing",
            color: "yellow",
            description: t(
              "pages.departments.surgery.conditions.items.gallbladder.description",
            ),
          },
          {
            title: t("pages.departments.surgery.conditions.items.trauma.title"),
            icon: "local_hospital",
            color: "orange",
            description: t(
              "pages.departments.surgery.conditions.items.trauma.description",
            ),
          },
        ]}
      />

      <ServicesSection
        badge={t("pages.departments.surgery.expertise.badge")}
        title={t("pages.departments.surgery.expertise.title")}
        description={t("pages.departments.surgery.expertise.description")}
        services={[
          {
            title: t(
              "pages.departments.surgery.services.items.minimally.title",
            ),
            description: t(
              "pages.departments.surgery.services.items.minimally.description",
            ),
            icon: "content_cut",
          },
          {
            title: t(
              "pages.departments.surgery.services.items.laparoscopy.title",
            ),
            description: t(
              "pages.departments.surgery.services.items.laparoscopy.description",
            ),
            icon: "visibility",
          },
          {
            title: t("pages.departments.surgery.services.items.general.title"),
            description: t(
              "pages.departments.surgery.services.items.general.description",
            ),
            icon: "health_and_safety",
          },
          {
            title: t(
              "pages.departments.surgery.services.items.postoperative.title",
            ),
            description: t(
              "pages.departments.surgery.services.items.postoperative.description",
            ),
            icon: "monitor_heart",
          },
        ]}
      />

      <TechnologySection
        badge={t("pages.departments.surgery.technology.badge")}
        title={t("pages.departments.surgery.technology.title")}
        description={t("pages.departments.surgery.technology.description")}
        reverseLayout={true}
        items={[
          {
            icon: "precision_manufacturing",
            title: t(
              "pages.departments.surgery.technology.items.robotic.title",
            ),
            description: t(
              "pages.departments.surgery.technology.items.robotic.description",
            ),
            iconTextColor: "text-blue-400",
          },
          {
            icon: "hd",
            title: t(
              "pages.departments.surgery.technology.items.imaging.title",
            ),
            description: t(
              "pages.departments.surgery.technology.items.imaging.description",
            ),
            iconTextColor: "text-emerald-400",
          },
        ]}
        rightContent={
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-border/20">
            <CldImg
              src="/images/surgery-body-1.jpg"
              alt={t("common.imgAlt.roboticSurgery")}
              transform="w_900,q_auto,f_auto,c_fill"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
          </div>
        }
      />

      <TeamSection
        className="py-20 bg-bg-alt relative"
        badge={t("pages.departments.surgery.team.badge")}
        title={t("pages.departments.surgery.team.title")}
        viewAllLabel={t("pages.departments.surgery.team.viewAll")}
        onBookAppointment={(name) =>
          openAppointment({ doctorName: name, department: "Surgery" })
        }
        members={[
          {
            name: t("pages.departments.surgery.team.members.samantha.name"),
            role: t("pages.departments.surgery.team.members.samantha.role"),
            img: "/images/doctors/team-dr-samantha-johnson.jpg",
          },
          {
            name: t("pages.departments.surgery.team.members.mathew.name"),
            role: t("pages.departments.surgery.team.members.mathew.role"),
            img: "/images/doctors/team-dr-mathew-chen.jpg",
          },
          {
            name: t("pages.departments.surgery.team.members.nikita.name"),
            role: t("pages.departments.surgery.team.members.nikita.role"),
            img: "/images/doctors/team-dr-nikita-davis.jpg",
          },
        ]}
      />

      <CTASection
        badge={t("pages.departments.surgery.cta.badge")}
        titlePart1={t("pages.departments.surgery.cta.titlePart1")}
        titleHighlight={t("pages.departments.surgery.cta.titleHighlight")}
        description={t("pages.departments.surgery.cta.description")}
        primaryButton={{
          label: t("pages.departments.surgery.cta.buttons.appointment"),
          onClick: () => openAppointment({ department: "Surgery" }),
        }}
        secondaryButton={{
          label: t("pages.departments.surgery.cta.buttons.contact"),
          to: "/contact",
        }}
        iconName="medical_services"
      />
    </div>
  );
};

export default Surgery;
