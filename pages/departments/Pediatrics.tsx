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

const Pediatrics: React.FC = () => {
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
        title={t("pages.departments.pediatrics.seo.title")}
        description={t("pages.departments.pediatrics.seo.description")}
        canonical="https://everleaf-medical.com/departments/pediatrics"
      />
      <HeroSection
        variant="info"
        badge={t("pages.departments.pediatrics.hero.badge")}
        badgeIcon="child_care"
        titlePart1={t("pages.departments.pediatrics.hero.titlePart1")}
        titleHighlight={t("pages.departments.pediatrics.hero.titleHighlight")}
        description={t("pages.departments.pediatrics.hero.description")}
        image="/images/hero/home-hero-4.jpg"
        accentColor="amber"
        primaryButton={{
          label: t("pages.departments.pediatrics.hero.buttons.visit"),
          onClick: () => openAppointment({ department: "Pediatrics" }),
          icon: "calendar_today",
        }}
        secondaryButton={{
          label: t("pages.departments.pediatrics.hero.buttons.team"),
          onClick: (e: any) => scrollToSection(e, "specialists"),
          variant: "outline",
          icon: "groups",
        }}
        statsCard={{
          value: t("pages.departments.pediatrics.stats.friendly.value"),
          label: t("pages.departments.pediatrics.stats.friendly.label"),
          icon: "child_care",
        }}
      />

      <FeaturesSection
        badge={t("pages.departments.pediatrics.intro.badge")}
        title={t("pages.departments.pediatrics.intro.title")}
        description={t("pages.departments.pediatrics.intro.description")}
        items={[
          {
            title: t("pages.departments.pediatrics.conditions.illness.title"),
            icon: "coronavirus",
            color: "red",
            description: t(
              "pages.departments.pediatrics.conditions.illness.description",
            ),
          },
          {
            title: t(
              "pages.departments.pediatrics.conditions.vaccination.title",
            ),
            icon: "vaccines",
            color: "blue",
            description: t(
              "pages.departments.pediatrics.conditions.vaccination.description",
            ),
          },
          {
            title: t(
              "pages.departments.pediatrics.conditions.development.title",
            ),
            icon: "trending_up",
            color: "orange",
            description: t(
              "pages.departments.pediatrics.conditions.development.description",
            ),
          },
          {
            title: t("pages.departments.pediatrics.conditions.nutrition.title"),
            icon: "restaurant",
            color: "purple",
            description: t(
              "pages.departments.pediatrics.conditions.nutrition.description",
            ),
          },
        ]}
      />

      <ServicesSection
        badge={t("pages.departments.pediatrics.procedures.badge")}
        title={t("pages.departments.pediatrics.procedures.title")}
        description={t("pages.departments.pediatrics.procedures.description")}
        services={[
          {
            title: t(
              "pages.departments.pediatrics.procedures.items.newborn.title",
            ),
            description: t(
              "pages.departments.pediatrics.procedures.items.newborn.description",
            ),
            icon: "child_friendly",
            features: [
              t(
                "pages.departments.pediatrics.procedures.items.newborn.features.checkup",
              ),
              t(
                "pages.departments.pediatrics.procedures.items.newborn.features.lactation",
              ),
            ],
          },
          {
            title: t(
              "pages.departments.pediatrics.procedures.items.wellchild.title",
            ),
            description: t(
              "pages.departments.pediatrics.procedures.items.wellchild.description",
            ),
            icon: "calendar_month",
            features: [
              t(
                "pages.departments.pediatrics.procedures.items.wellchild.features.physicals",
              ),
              t(
                "pages.departments.pediatrics.procedures.items.wellchild.features.school",
              ),
            ],
          },
          {
            title: t(
              "pages.departments.pediatrics.procedures.items.surgery.title",
            ),
            description: t(
              "pages.departments.pediatrics.procedures.items.surgery.description",
            ),
            icon: "content_cut",
            features: [
              t(
                "pages.departments.pediatrics.procedures.items.surgery.features.invasive",
              ),
              t(
                "pages.departments.pediatrics.procedures.items.surgery.features.recovery",
              ),
            ],
          },
          {
            title: t(
              "pages.departments.pediatrics.procedures.items.adolescent.title",
            ),
            description: t(
              "pages.departments.pediatrics.procedures.items.adolescent.description",
            ),
            icon: "face_3",
            features: [
              t(
                "pages.departments.pediatrics.procedures.items.adolescent.features.mental",
              ),
              t(
                "pages.departments.pediatrics.procedures.items.adolescent.features.reproductive",
              ),
            ],
          },
        ]}
      />

      <TechnologySection
        title={t("pages.departments.pediatrics.facility.title")}
        description={t("pages.departments.pediatrics.facility.description")}
        badge={t("pages.departments.pediatrics.intro.badge")}
        items={[
          {
            icon: "toys",
            title: t("pages.departments.pediatrics.facility.subtitle"),
            description: t(
              "pages.departments.pediatrics.facility.description",
              "Our pediatric wing is designed specifically for children, with colorful play areas and comfortable spaces for families.",
            ),
            iconTextColor: "text-blue-400",
          },
          {
            icon: "family_restroom",
            title: t(
              "pages.departments.pediatrics.facility.features.parents",
              "Family-Centered Care",
            ),
            description: t(
              "pages.departments.pediatrics.facility.features.parents.desc",
              "We provide comfortable accommodations for parents to stay with their children throughout their treatment.",
            ),
            iconTextColor: "text-emerald-400",
          },
        ]}
        rightContent={
          <div className="relative h-full min-h-[350px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
            <img
              src="/images/pediatrics-body-1.jpg"
              alt="Child Friendly Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <p className="text-white text-sm font-medium">
                {t("pages.departments.pediatrics.facility.subtitle")}
              </p>
            </div>
          </div>
        }
      />

      <TeamSection
        className="py-20 bg-bg-alt relative"
        badge={t("pages.departments.pediatrics.team.badge")}
        title={t("pages.departments.pediatrics.team.title")}
        viewAllLabel={t("pages.departments.pediatrics.team.viewAll")}
        onBookAppointment={(name) =>
          openAppointment({ doctorName: name, department: "Pediatrics" })
        }
        members={[
          {
            name: t("pages.departments.pediatrics.team.members.ashley.name"),
            role: t("pages.departments.pediatrics.team.members.ashley.role"),
            img: "/images/doctors/team-dr-ashley-johnson.jpg",
          },
          {
            name: t("pages.departments.pediatrics.team.members.john.name"),
            role: t("pages.departments.pediatrics.team.members.john.role"),
            img: "/images/doctors/team-dr-john-chen.jpg",
          },
          {
            name: t("pages.departments.pediatrics.team.members.emily.name"),
            role: t("pages.departments.pediatrics.team.members.emily.role"),
            img: "/images/doctors/team-dr-emily-rodriguez.jpg",
          },
        ]}
      />

      <CTASection
        badge={t("pages.departments.pediatrics.cta.badge")}
        titlePart1={t("pages.departments.pediatrics.cta.titlePart1")}
        titleHighlight={t("pages.departments.pediatrics.cta.titleHighlight")}
        description={t("pages.departments.pediatrics.cta.description")}
        primaryButton={{
          label: t("pages.departments.pediatrics.cta.buttons.appointment"),
          onClick: () => openAppointment({ department: "Pediatrics" }),
        }}
        secondaryButton={{
          label: t("pages.departments.pediatrics.cta.buttons.call"),
          href: "tel:+15551234567",
        }}
        iconName="child_care"
      />
    </div>
  );
};

export default Pediatrics;
