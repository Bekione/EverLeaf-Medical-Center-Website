import React from "react";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";
import TechnologySection from "../../components/TechnologySection";
import CTASection from "../../components/CTASection";
import Button from "../../components/Button";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import ServicesSection from "../../components/ServicesSection";

const Ophthalmology: React.FC = () => {
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
        title={t("pages.departments.ophthalmology.seo.title")}
        description={t("pages.departments.ophthalmology.seo.description")}
        canonical="https://everleaf-medical.com/departments/ophthalmology"
      />
      <HeroSection
        variant="info"
        badge={t("pages.departments.ophthalmology.hero.badge")}
        badgeIcon="visibility"
        titlePart1={t("pages.departments.ophthalmology.hero.titlePart1")}
        titleHighlight={t(
          "pages.departments.ophthalmology.hero.titleHighlight",
        )}
        description={t("pages.departments.ophthalmology.hero.description")}
        image="/images/hero/home-hero-2.jpg"
        accentColor="blue"
        primaryButton={{
          label: t("pages.departments.ophthalmology.hero.buttons.exam"),
          onClick: () => openAppointment({ department: "Ophthalmology" }),
          icon: "calendar_today",
        }}
        secondaryButton={{
          label: t("pages.departments.ophthalmology.hero.buttons.specialists"),
          onClick: (e: any) => scrollToSection(e, "conditions"),
          variant: "outline",
          icon: "people",
        }}
        statsCard={{
          value: t("pages.departments.ophthalmology.stats.items.success.value"),
          label: t("pages.departments.ophthalmology.stats.items.success.label"),
          icon: "check_circle",
        }}
      />

      <section className="py-10 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                val: t(
                  "pages.departments.ophthalmology.stats.items.surgeries.value",
                ),
                label: t(
                  "pages.departments.ophthalmology.stats.items.surgeries.label",
                ),
              },
              {
                val: t(
                  "pages.departments.ophthalmology.stats.items.success.value",
                ),
                label: t(
                  "pages.departments.ophthalmology.stats.items.success.label",
                ),
              },
              {
                val: t(
                  "pages.departments.ophthalmology.stats.items.doctors.value",
                ),
                label: t(
                  "pages.departments.ophthalmology.stats.items.doctors.label",
                ),
              },
              {
                val: t(
                  "pages.departments.ophthalmology.stats.items.emergency.value",
                ),
                label: t(
                  "pages.departments.ophthalmology.stats.items.emergency.label",
                ),
              },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary mb-1">
                    {stat.val}
                  </p>
                  <p className="text-sm text-slate-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeaturesSection
        className="py-20 bg-white"
        badge={t("pages.departments.ophthalmology.conditions.badge")}
        title={t("pages.departments.ophthalmology.conditions.title")}
        description={t(
          "pages.departments.ophthalmology.conditions.description",
        )}
        items={[
          {
            title: t(
              "pages.departments.ophthalmology.conditions.items.cataracts.title",
            ),
            icon: "blur_on",
            color: "blue",
            description: t(
              "pages.departments.ophthalmology.conditions.items.cataracts.description",
            ),
          },
          {
            title: t(
              "pages.departments.ophthalmology.conditions.items.glaucoma.title",
            ),
            icon: "visibility_off",
            color: "blue",
            description: t(
              "pages.departments.ophthalmology.conditions.items.glaucoma.description",
            ),
          },
          {
            title: t(
              "pages.departments.ophthalmology.conditions.items.macular.title",
            ),
            icon: "center_focus_weak",
            color: "orange",
            description: t(
              "pages.departments.ophthalmology.conditions.items.macular.description",
            ),
          },
          {
            title: t(
              "pages.departments.ophthalmology.conditions.items.diabetic.title",
            ),
            icon: "bloodtype",
            color: "red",
            description: t(
              "pages.departments.ophthalmology.conditions.items.diabetic.description",
            ),
          },
        ]}
      />

      <ServicesSection
        badge={t(
          "pages.departments.ophthalmology.services.badge",
          "Optical Services",
        )}
        title={t("pages.departments.ophthalmology.services.title")}
        description={t("pages.departments.ophthalmology.services.description")}
        services={[
          {
            title: t(
              "pages.departments.ophthalmology.services.items.lasik.title",
            ),
            description: t(
              "pages.departments.ophthalmology.services.items.lasik.description",
            ),
            icon: "remove_red_eye",
          },
          {
            title: t(
              "pages.departments.ophthalmology.services.items.exams.title",
            ),
            description: t(
              "pages.departments.ophthalmology.services.items.exams.description",
            ),
            icon: "assignment",
          },
          {
            title: t(
              "pages.departments.ophthalmology.services.items.retinal.title",
            ),
            description: t(
              "pages.departments.ophthalmology.services.items.retinal.description",
            ),
            icon: "science",
          },
          {
            title: t(
              "pages.departments.ophthalmology.services.items.corneal.title",
            ),
            description: t(
              "pages.departments.ophthalmology.services.items.corneal.description",
            ),
            icon: "biotech",
          },
        ]}
      />

      <TechnologySection
        badge={t("pages.departments.ophthalmology.technology.badge")}
        title={t("pages.departments.ophthalmology.technology.title")}
        description={t(
          "pages.departments.ophthalmology.technology.description",
        )}
        reverseLayout={true}
        items={[
          {
            icon: "scanner",
            title: t(
              "pages.departments.ophthalmology.technology.items.oct.title",
            ),
            description: t(
              "pages.departments.ophthalmology.technology.items.oct.description",
            ),
            iconTextColor: "text-blue-400",
          },
          {
            icon: "gps_fixed",
            title: t(
              "pages.departments.ophthalmology.technology.items.diagnostic.title",
            ),
            description: t(
              "pages.departments.ophthalmology.technology.items.diagnostic.description",
            ),
            iconTextColor: "text-blue-400",
          },
        ]}
        rightContent={
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
            <img
              alt="Advanced Eye Scanning Technology"
              className="w-full h-auto"
              src="/images/imaging-body-2.jpg"
            />
          </div>
        }
        iconName="visibility"
      />

      <CTASection
        badge={t("pages.departments.ophthalmology.cta.badge")}
        titlePart1={t("pages.departments.ophthalmology.cta.titlePart1")}
        titleHighlight={t("pages.departments.ophthalmology.cta.titleHighlight")}
        description={t("pages.departments.ophthalmology.cta.description")}
        primaryButton={{
          label: t("pages.departments.ophthalmology.cta.buttons.exam"),
          onClick: () => openAppointment({ department: "Ophthalmology" }),
        }}
        secondaryButton={{
          label: t("pages.departments.ophthalmology.cta.buttons.call"),
          href: "tel:+15551234567",
        }}
      />
    </div>
  );
};

export default Ophthalmology;
