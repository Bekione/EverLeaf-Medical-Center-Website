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

const Laboratory: React.FC = () => {
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
        title={t("pages.departments.laboratory.seo.title")}
        description={t("pages.departments.laboratory.seo.description")}
        canonical="https://everleaf-medical.com/departments/laboratory"
      />
      <HeroSection
        variant="info"
        badge={t("pages.departments.laboratory.hero.badge")}
        badgeIcon="science"
        titlePart1={t("pages.departments.laboratory.hero.titlePart1")}
        titleHighlight={t("pages.departments.laboratory.hero.titleHighlight")}
        description={t("pages.departments.laboratory.hero.description")}
        image="/images/hero/laboratory-dept-hero.jpg"
        accentColor="blue"
        primaryButton={{
          label: t("pages.departments.laboratory.hero.buttons.appointment"),
          onClick: () => openAppointment({ department: "Laboratory" }),
          icon: "calendar_today",
        }}
        secondaryButton={{
          label: t("pages.departments.laboratory.hero.buttons.viewTests"),
          onClick: (e: any) => scrollToSection(e, "services"),
          variant: "secondary",
          icon: "visibility",
        }}
        statsCard={{
          value: t("pages.departments.laboratory.stats.available.value"),
          label: t("pages.departments.laboratory.stats.available.label"),
          icon: "science",
        }}
      />

      <FeaturesSection
        badge={t("pages.departments.laboratory.intro.badge")}
        title={t("pages.departments.laboratory.intro.title")}
        description={t("pages.departments.laboratory.intro.description")}
        items={[
          {
            title: t(
              "pages.departments.laboratory.disciplines.biochemistry.title",
            ),
            icon: "bloodtype",
            color: "red",
            description: t(
              "pages.departments.laboratory.disciplines.biochemistry.description",
            ),
          },
          {
            title: t(
              "pages.departments.laboratory.disciplines.hematology.title",
            ),
            icon: "water_drop",
            color: "blue",
            description: t(
              "pages.departments.laboratory.disciplines.hematology.description",
            ),
          },
          {
            title: t(
              "pages.departments.laboratory.disciplines.microbiology.title",
            ),
            icon: "coronavirus",
            color: "green",
            description: t(
              "pages.departments.laboratory.disciplines.microbiology.description",
            ),
          },
          {
            title: t(
              "pages.departments.laboratory.disciplines.molecular.title",
            ),
            icon: "biotech",
            color: "purple",
            description: t(
              "pages.departments.laboratory.disciplines.molecular.description",
            ),
          },
        ]}
      />

      <ServicesSection
        badge={t("pages.departments.laboratory.tests.badge")}
        title={t("pages.departments.laboratory.tests.title")}
        description={t(
          "pages.departments.laboratory.tests.description",
          "Comprehensive diagnostic testing services for accurate and timely results.",
        )}
        id="services"
        services={Object.keys(
          t("pages.departments.laboratory.tests.items", {
            returnObjects: true,
          }) as object,
        ).map((key, i) => {
          const test = t(`pages.departments.laboratory.tests.items.${key}`, {
            returnObjects: true,
          }) as { title: string; description: string };
          const icons = [
            "favorite",
            "local_hospital",
            "monitor_heart",
            "bloodtype",
            "science",
          ];
          return {
            title: test.title,
            description: test.description,
            icon: icons[i % icons.length],
          };
        })}
      />

      <TechnologySection
        title={t("pages.departments.laboratory.features.title")}
        description={t(
          "pages.departments.laboratory.features.description",
          "Our laboratory is equipped with state-of-the-art diagnostic platforms to ensure precision, reliability, and rapid turnaround times for all medical tests.",
        )}
        items={[
          {
            icon: "speed",
            title: t("pages.departments.laboratory.features.automated.title"),
            description: t(
              "pages.departments.laboratory.features.automated.description",
            ),
            iconTextColor: "text-blue-400",
          },
          {
            icon: "home",
            title: t("pages.departments.laboratory.features.home.title"),
            description: t(
              "pages.departments.laboratory.features.home.description",
            ),
            iconTextColor: "text-emerald-400",
          },
        ]}
        rightContent={
          <div className="relative group h-full min-h-[400px]">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl group-hover:bg-primary/30 transition-all"></div>
            <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/hero/laboratory-dept-hero.jpg"
                alt="Laboratory Technology"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-blue-100 text-sm italic leading-relaxed">
                  "{t("pages.departments.laboratory.features.quote")}"
                </p>
              </div>
            </div>
          </div>
        }
      />

      <TeamSection
        className="py-20 bg-bg-alt relative"
        badge={t("pages.departments.laboratory.team.badge")}
        title={t("pages.departments.laboratory.team.title")}
        viewAllLabel={t("pages.departments.laboratory.team.viewAll")}
        onBookAppointment={(name) =>
          openAppointment({ doctorName: name, department: "Laboratory" })
        }
        members={[
          {
            ...(t("pages.departments.laboratory.team.members.rachel", {
              returnObjects: true,
            }) as any),
            img: "/images/doctors/team-dr-rachel-anderson.jpg",
          },
          {
            ...(t("pages.departments.laboratory.team.members.michael", {
              returnObjects: true,
            }) as any),
            img: "/images/doctors/team-dr-michael-torres.jpg",
          },
          {
            ...(t("pages.departments.laboratory.team.members.lisa", {
              returnObjects: true,
            }) as any),
            img: "/images/doctors/team-dr-lisa-chen.jpg",
          },
        ]}
      />

      <CTASection
        badge={t("pages.departments.laboratory.cta.badge")}
        titlePart1={t("pages.departments.laboratory.cta.titlePart1")}
        titleHighlight={t("pages.departments.laboratory.cta.titleHighlight")}
        description={t("pages.departments.laboratory.cta.description")}
        primaryButton={{
          label: t("pages.departments.laboratory.cta.buttons.appointment"),
          onClick: () => openAppointment({ department: "Laboratory" }),
        }}
        secondaryButton={{
          label: t("pages.departments.laboratory.cta.buttons.contact"),
          to: "/contact",
        }}
        iconName="science"
      />
    </div>
  );
};

export default Laboratory;
