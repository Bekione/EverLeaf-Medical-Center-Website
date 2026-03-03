import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../Layout";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { CldImg } from "../components/CldImg";
import { heroImages } from "../data/hero";
import { testimonials } from "../data/testimonials";
import { doctors } from "../data/doctors";
import { services } from "../data/services";
import { useTranslation } from "react-i18next";
import CTASection from "../components/CTASection";
import Button from "../components/Button";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TeamSection from "../components/TeamSection";
import NewsSection from "../components/NewsSection";
import HomeCarousel from "../components/HomeCarousel";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { openAppointment } = useOutletContext<{
    openAppointment: OpenAppointmentFunc;
  }>();

  return (
    <div className="animate-fade-in">
      <SEO
        title={t("nav.home")}
        description={t("pages.home.hero.subtitle")}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Hospital",
          name: "Everleaf Medical Center",
          image: heroImages,
          telephone: "+251 954 123-456",
          email: "info@everleaf.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Health Avenue",
            addressLocality: "Addis Abeba",
            addressRegion: "AA",
            postalCode: "10012",
            addressCountry: "ET",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 40.713129,
            longitude: -74.003693,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
          department: [
            { "@type": "MedicalSpecialty", name: t("departments.cardiology") },
            { "@type": "MedicalSpecialty", name: t("departments.pediatrics") },
            {
              "@type": "EmergencyService",
              name: t("pages.home.infoCards.emergency.title"),
            },
          ],
        }}
      />
      <HeroSection
        variant="info"
        backgroundClassName="bg-alt"
        containerClassName="pt-12 pb-32 lg:pt-16 lg:pb-48"
        badge={t("pages.home.hero.badge")}
        badgeStyle={{
          backgroundColor: "var(--color-primary-light)",
          color: "var(--color-primary-dark)",
        }}
        showBadgeDot={true}
        titlePart1={t("pages.home.hero.titleStart")}
        titleHighlight={t("pages.home.hero.titleHighlight")}
        titleHighlightUnderline={true}
        description={t("pages.home.hero.subtitle")}
        primaryButton={{
          label: t("pages.home.hero.appointment"),
          onClick: () => openAppointment(),
        }}
        footerContent={
          <div className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-500">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm bg-slate-100"
                >
                  <CldImg
                    src={`/images/happy-patient-${i}.jpg`}
                    alt={t("common.imgAlt.happyPatient")}
                    transform="w_80,q_auto,f_auto,c_fill,g_face"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                style={{
                  borderColor: "var(--color-border)",
                  backgroundColor: "var(--color-bg-alt)",
                  color: "var(--color-text)",
                }}
              >
                12k+
              </div>
            </div>
            <p>{t("pages.home.hero.patientsRecovered")}</p>
          </div>
        }
        customRightColumn={<HomeCarousel />}
      />

      {/* Info Cards */}
      <div className="relative z-20 -mt-20 lg:-mt-24 mb-20 container mx-auto px-6">
        <div
          className="grid md:grid-cols-3 gap-6 rounded-2xl shadow-xl p-4 md:p-6 border"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-start gap-4 p-4 rounded-xl transition-colors cursor-pointer group hover:opacity-80">
            <div className="bg-bg-alt p-3 rounded-lg text-primary group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">emergency</span>
            </div>
            <div>
              <p
                className="text-lg font-bold mb-1"
                style={{ color: "var(--color-text)" }}
              >
                {t("pages.home.infoCards.emergency.title")}
              </p>
              <p
                className="text-sm mb-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                {t("pages.home.infoCards.emergency.desc")}
              </p>
              <Button
                to="/services/emergency"
                variant="action"
                size="sm"
                animate={false}
                className="text-red-600 bg-red-50 hover:bg-red-100 group/btn"
              >
                {t("pages.home.infoCards.emergency.call")}
                <span className="material-icons text-sm ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                  arrow_forward
                </span>
              </Button>
            </div>
          </div>
          <div
            className="flex items-start gap-4 p-4 rounded-xl transition-colors cursor-pointer group border-l border-r"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">person_search</span>
            </div>
            <div>
              <p
                className="text-lg font-bold mb-1"
                style={{ color: "var(--color-text)" }}
              >
                {t("pages.home.infoCards.specialist.title")}
              </p>
              <p
                className="text-sm mb-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                {t("pages.home.infoCards.specialist.desc")}
              </p>
              <Button
                to="/doctors"
                variant="action"
                size="sm"
                animate={false}
                className="group/btn"
              >
                {t("pages.home.infoCards.specialist.search")}
                <span className="material-icons text-sm ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                  arrow_forward
                </span>
              </Button>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl transition-colors cursor-pointer group hover:opacity-80">
            <div className="bg-secondary/10 p-3 rounded-lg text-secondary group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">domain</span>
            </div>
            <div>
              <p
                className="text-lg font-bold mb-1"
                style={{ color: "var(--color-text)" }}
              >
                {t("pages.home.infoCards.departments.title")}
              </p>
              <p
                className="text-sm mb-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                {t("pages.home.infoCards.departments.desc")}
              </p>
              <Button
                to="/departments"
                variant="action"
                size="sm"
                animate={false}
                className="group/btn"
              >
                {t("pages.home.infoCards.departments.view")}
                <span className="material-icons text-sm ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
                  arrow_forward
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FeaturesSection
        badge={t("pages.home.services.badge")}
        title={t("pages.home.services.title")}
        description={t("pages.home.services.subtitle")}
        items={[
          {
            icon: "favorite",
            title: t("data.departments.cardiology.name"),
            description: t("pages.home.services.cardiologyDesc"),
            to: "/departments/cardiology",
          },
          {
            icon: "psychology",
            title: t("data.departments.neurology.name"),
            description: t("pages.home.services.neurologyDesc"),
            to: "/departments/neurology",
          },
          {
            icon: "child_care",
            title: t("data.departments.pediatrics.name"),
            description: t("pages.home.services.pediatricsDesc"),
            to: "/departments/pediatrics",
          },
          {
            icon: "science",
            title: t("data.departments.laboratory.name"),
            description: t("pages.home.services.laboratoryDesc"),
            to: "/services/laboratory",
          },
        ]}
      >
        <Button
          to="/services"
          variant="primary"
          className="shadow-md group/btn"
        >
          {t("data.services.all")}
          <span className="material-icons text-sm ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
            arrow_forward
          </span>
        </Button>
      </FeaturesSection>

      <TeamSection
        badge={t("pages.home.experts.badge")}
        title={t("pages.home.experts.title")}
        layout="grid"
        columns={3}
        viewAllLabel={t("nav.doctors")}
        viewAllLink="/doctors"
        members={doctors.slice(0, 3).map((doc) => ({
          ...doc,
          name: t(`data.doctors.${doc.id}.name`),
          role: t(`data.doctors.${doc.id}.specialty`),
          experience: 15,
          educationShort: t(`data.doctors.${doc.id}.educationShort`),
          socialLinks: { email: doc.email },
        }))}
        onBookAppointment={(name) => openAppointment({ doctorName: name })}
        className="py-24 bg-bg-alt"
      />

      {/* Revamped CTA Section */}
      <CTASection
        badge={t("pages.home.cta.badge")}
        titlePart1={t("pages.home.cta.titleStart")}
        titleHighlight={t("pages.home.cta.titleHighlight")}
        description={t("pages.home.cta.subtitle")}
        primaryButton={{
          label: t("pages.home.cta.button"),
          onClick: () => openAppointment(),
        }}
        secondaryButton={{
          label: t("common.buttons.contactUs"),
          to: "/contact",
        }}
        iconName="calendar_today"
      />

      <TestimonialsSection
        badge={t("pages.home.testimonials.badge")}
        title={t("pages.home.testimonials.title")}
        description={t("pages.home.testimonials.subtitle")}
        testimonials={testimonials}
      />

      <NewsSection />

      {/* Partners */}
      <section
        className="py-12 border-t"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-6">
          <p
            className="text-center text-sm font-semibold uppercase tracking-wider mb-8"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t("pages.home.partners.title")}
          </p>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex w-max items-center gap-12 mx-auto">
              {[
                { name: "MediGuard", icon: "health_and_safety" },
                { name: "LifeCare", icon: "shield" },
                { name: "HealthPlus", icon: "add_moderator" },
                { name: "GlobalAssure", icon: "verified" },
                { name: "CareFirst", icon: "favorite" },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className="shrink-0 flex items-center gap-2 text-2xl font-bold text-slate-700 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 hover:text-primary transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <span className="material-icons text-3xl">
                    {partner.icon}
                  </span>{" "}
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
