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

const Rehabilitation: React.FC = () => {
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
        title={t("pages.departments.rehabilitation.seo.title")}
        description={t("pages.departments.rehabilitation.seo.description")}
        canonical="https://everleaf-medical.com/departments/rehabilitation"
      />
      <HeroSection
        variant="info"
        badge={t("pages.departments.rehabilitation.hero.badge")}
        badgeIcon="accessibility_new"
        titlePart1={t("pages.departments.rehabilitation.hero.titlePart1")}
        titleHighlight={t(
          "pages.departments.rehabilitation.hero.titleHighlight",
        )}
        description={t("pages.departments.rehabilitation.hero.description")}
        image="/images/hero/rehabilitation-hero.jpg"
        accentColor="emerald"
        primaryButton={{
          label: t("pages.departments.rehabilitation.hero.buttons.specialists"),
          onClick: (e: any) => scrollToSection(e, "specialists"),
          icon: "people",
        }}
        secondaryButton={{
          label: t("pages.departments.rehabilitation.hero.buttons.services"),
          onClick: (e: any) => scrollToSection(e, "services"),
          variant: "outline",
          icon: "fitness_center",
        }}
        statsCard={{
          value: t("pages.departments.rehabilitation.stats.recovery.value"),
          label: t("pages.departments.rehabilitation.stats.recovery.label"),
          icon: "trending_up",
        }}
      />

      <FeaturesSection
        badge={t("pages.departments.rehabilitation.conditions.badge")}
        title={t("pages.departments.rehabilitation.conditions.title")}
        description={t(
          "pages.departments.rehabilitation.conditions.description",
        )}
        items={[
          {
            title: t(
              "pages.departments.rehabilitation.conditions.items.sports.title",
            ),
            icon: "fitness_center",
            color: "blue",
            description: t(
              "pages.departments.rehabilitation.conditions.items.sports.description",
            ),
          },
          {
            title: t(
              "pages.departments.rehabilitation.conditions.items.stroke.title",
            ),
            icon: "favorite",
            color: "red",
            description: t(
              "pages.departments.rehabilitation.conditions.items.stroke.description",
            ),
          },
          {
            title: t(
              "pages.departments.rehabilitation.conditions.items.surgical.title",
            ),
            icon: "healing",
            color: "blue",
            description: t(
              "pages.departments.rehabilitation.conditions.items.surgical.description",
            ),
          },
          {
            title: t(
              "pages.departments.rehabilitation.conditions.items.chronic.title",
            ),
            icon: "spa",
            color: "purple",
            description: t(
              "pages.departments.rehabilitation.conditions.items.chronic.description",
            ),
          },
        ]}
      />

      <ServicesSection
        badge={t("pages.departments.rehabilitation.services.badge")}
        title={t("pages.departments.rehabilitation.services.title")}
        description={t("pages.departments.rehabilitation.services.description")}
        services={[
          {
            title: t(
              "pages.departments.rehabilitation.services.items.physical.title",
            ),
            description: t(
              "pages.departments.rehabilitation.services.items.physical.description",
            ),
            icon: "directions_walk",
          },
          {
            title: t(
              "pages.departments.rehabilitation.services.items.occupational.title",
            ),
            description: t(
              "pages.departments.rehabilitation.services.items.occupational.description",
            ),
            icon: "accessibility_new",
          },
          {
            title: t(
              "pages.departments.rehabilitation.services.items.pain.title",
            ),
            description: t(
              "pages.departments.rehabilitation.services.items.pain.description",
            ),
            icon: "sentiment_satisfied",
          },
        ]}
      />

      <TechnologySection
        title={t("pages.departments.rehabilitation.technology.title")}
        description={t(
          "pages.departments.rehabilitation.technology.description",
        )}
        items={[
          {
            icon: "fitness_center",
            title: t(
              "pages.departments.rehabilitation.technology.items.mobility.title",
            ),
            description: t(
              "pages.departments.rehabilitation.technology.items.mobility.description",
            ),
            iconTextColor: "text-blue-400",
          },
          {
            icon: "spa",
            title: t(
              "pages.departments.rehabilitation.technology.items.therapeutic.title",
            ),
            description: t(
              "pages.departments.rehabilitation.technology.items.therapeutic.description",
            ),
            iconTextColor: "text-emerald-400",
          },
        ]}
        rightContent={
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border border-white/10 group">
              <CldImg
                src="/images/rehabilitation-body-1.jpg"
                alt="Mobility Technology"
                transform="w_800,h_256,q_auto,f_auto,c_fill"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border border-white/10 group mt-8 sm:mt-12">
              <CldImg
                src="/images/rehabilitation-body-2.jpg"
                alt="Therapeutic Equipment"
                transform="w_800,h_256,q_auto,f_auto,c_fill"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
            </div>
          </div>
        }
      />

      <TeamSection
        className="py-20 bg-white relative"
        badge={t("pages.departments.rehabilitation.team.badge")}
        title={t("pages.departments.rehabilitation.team.title")}
        viewAllLabel={t("pages.departments.rehabilitation.team.viewAll")}
        onBookAppointment={(name) =>
          openAppointment({ doctorName: name, department: "Rehabilitation" })
        }
        members={[
          {
            name: t("pages.departments.rehabilitation.team.members.maya.name"),
            role: t("pages.departments.rehabilitation.team.members.maya.role"),
            img: "/images/doctors/team-dr-maya-lahan.jpg",
          },
          {
            name: t(
              "pages.departments.rehabilitation.team.members.raymond.name",
            ),
            role: t(
              "pages.departments.rehabilitation.team.members.raymond.role",
            ),
            img: "/images/doctors/team-dr-raymond-langston.jpg",
          },
          {
            name: t(
              "pages.departments.rehabilitation.team.members.sandra.name",
            ),
            role: t(
              "pages.departments.rehabilitation.team.members.sandra.role",
            ),
            img: "/images/doctors/team-dr-sandra-mornay.jpg",
          },
        ]}
      />

      <CTASection
        badge={t("pages.departments.rehabilitation.cta.badge")}
        titlePart1={t("pages.departments.rehabilitation.cta.titlePart1")}
        titleHighlight={t(
          "pages.departments.rehabilitation.cta.titleHighlight",
        )}
        description={t("pages.departments.rehabilitation.cta.description")}
        primaryButton={{
          label: t("pages.departments.rehabilitation.cta.buttons.consultation"),
          onClick: () => openAppointment({ department: "Rehabilitation" }),
        }}
        secondaryButton={{
          label: t("pages.departments.rehabilitation.cta.buttons.contact"),
          to: "/contact",
        }}
        iconName="accessibility_new"
      />
    </div>
  );
};

export default Rehabilitation;
