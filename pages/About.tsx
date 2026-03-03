import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { CldImg, rawSrc } from "@/components/CldImg";
import { useTranslation } from "react-i18next";
import CTASection from "../components/CTASection";
import Button from "../components/Button";
import FeaturesSection from "../components/FeaturesSection";
import HeroSection from "../components/HeroSection";
import TeamSection from "../components/TeamSection";

// Counter Component for animation
const CountUp = ({
  end,
  duration = 2000,
  suffix = "",
  decimals = 0,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(easeOutQuart * end);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

// ... (CountUp component remains above)

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      className="animate-fade-in min-h-screen"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <SEO
        title={t("nav.about")}
        description={t("pages.about.hero.subtitle")}
        canonical="https://everleaf-medical.com/about"
      />

      <HeroSection
        variant="info"
        backgroundClassName="bg-linear-to-b from-primary-light to-surface"
        badge={t("pages.about.hero.badge")}
        badgeStyle={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
        showBadgeDot={true}
        titlePart1={t("pages.about.hero.titleStart")}
        titleHighlight={t("pages.about.hero.titleHighlight")}
        titleHighlightClassName="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary"
        description={t("pages.about.hero.subtitle")}
        primaryButton={{
          label: t("pages.about.hero.meetTeam"),
          to: "/doctors",
        }}
        secondaryButton={{
          label: t("pages.about.hero.viewFacilities"),
          to: "/gallery",
          variant: "secondary",
        }}
        footerContent={
          <div
            className="flex items-center justify-center lg:justify-start gap-8 border-t pt-8"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div>
              <p
                className="text-3xl font-bold"
                style={{ color: "var(--color-text)" }}
              >
                35+
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                {t("pages.about.stats.years")}
              </p>
            </div>
            <div
              className="w-px h-10"
              style={{ backgroundColor: "var(--color-border)" }}
            ></div>
            <div>
              <p
                className="text-3xl font-bold"
                style={{ color: "var(--color-text)" }}
              >
                100k+
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                {t("pages.about.stats.patients")}
              </p>
            </div>
            <div
              className="w-px h-10"
              style={{ backgroundColor: "var(--color-border)" }}
            ></div>
            <div>
              <p
                className="text-3xl font-bold"
                style={{ color: "var(--color-text)" }}
              >
                120+
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                {t("pages.about.stats.specialists")}
              </p>
            </div>
          </div>
        }
        customRightColumn={
          <Reveal
            from="right"
            delay={100}
            threshold={0.05}
            className="lg:w-full relative"
          >
            <div className="relative z-10 w-full max-w-lg mx-auto lg:ml-auto group">
              {/* Main Image */}
              <CldImg
                src={rawSrc("/images/hero/about-hero-1.jpg")}
                alt={t("common.imgAlt.medicalTeam")}
                transform="w_600,q_auto,f_auto,c_fill"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] min-h-[300px] border-4 border-white transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Floating Secondary Image */}
              <div className="absolute -bottom-12 -left-12 w-2/3 hidden md:block">
                <CldImg
                  src={rawSrc("/images/hero/home-hero-1.jpg")}
                  alt={t("common.imgAlt.hospitalBuilding")}
                  transform="w_400,q_auto,f_auto,c_fill"
                  className="rounded-xl shadow-xl border-4 border-white w-full object-cover aspect-[3/2] min-h-[200px] transition-transform duration-500 group-hover:-translate-y-2"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-2xl -z-10 transform rotate-3 scale-105 border"
                style={{ borderColor: "var(--color-border)" }}
              ></div>
            </div>
          </Reveal>
        }
      />

      {/* Mission & Story Section */}
      <section className="py-20 bg-bg relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal
              from="left"
              threshold={0.1}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-2" />
                <CldImg
                  src="/images/about-body-1.jpg"
                  alt={t("common.imgAlt.hospitalExterior")}
                  transform="w_1200,h_500,q_auto,f_auto,c_fill"
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </Reveal>
            <Reveal from="right" threshold={0.1} className="order-1 lg:order-2">
              <div>
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                  {t("pages.about.story.badge")}
                </span>
                <h2
                  className="text-3xl md:text-4xl font-serif font-bold mb-6"
                  style={{ color: "var(--color-text)" }}
                >
                  {t("pages.about.story.title")}
                </h2>
                <p
                  className="text-lg mb-6 leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {t("pages.about.story.p1")}
                </p>
                <p
                  className="text-lg mb-8 leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {t("pages.about.story.p2")}
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div
                    className="flex items-start gap-4 p-4 rounded-xl border border-border"
                    style={{
                      backgroundColor: "var(--color-bg-alt)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <span className="material-icons text-green-500 text-3xl">
                      volunteer_activism
                    </span>
                    <div>
                      <h4
                        className="font-bold mb-1"
                        style={{ color: "var(--color-text)" }}
                      >
                        {t("pages.about.story.patientCentric.title")}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {t("pages.about.story.patientCentric.desc")}
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-start gap-4 p-4 rounded-xl border"
                    style={{
                      backgroundColor: "var(--color-bg-alt)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <span className="material-icons text-blue-500 text-3xl">
                      science
                    </span>
                    <div>
                      <h4
                        className="font-bold mb-1"
                        style={{ color: "var(--color-text)" }}
                      >
                        {t("pages.about.story.innovation.title")}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {t("pages.about.story.innovation.desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quality Stats Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <Reveal from="left" threshold={0.1} className="lg:w-1/2">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wide mb-6 border border-white/30">
                  <span className="material-icons text-sm">verified</span>
                  {t("pages.about.quality.badge")}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  {t("pages.about.quality.title")}
                </h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  {t("pages.about.quality.subtitle")}
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="material-icons text-sm">check</span>
                    </div>
                    <span>{t("pages.about.quality.item1")}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="material-icons text-sm">check</span>
                    </div>
                    <span>{t("pages.about.quality.item2")}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                      <span className="material-icons text-sm">check</span>
                    </div>
                    <span>{t("pages.about.quality.item3")}</span>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal from="right" threshold={0.1} className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-colors">
                  <span className="material-icons text-4xl mb-4 opacity-80">
                    shield
                  </span>
                  <div className="text-4xl font-bold mb-2">
                    <CountUp end={100} suffix="%" />
                  </div>
                  <div className="text-sm text-blue-100 uppercase tracking-wide">
                    {t("pages.about.quality.stats.safety")}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-colors">
                  <span className="material-icons text-4xl mb-4 opacity-80">
                    clean_hands
                  </span>
                  <div className="text-4xl font-bold mb-2">
                    <CountUp end={99.9} decimals={1} suffix="%" />
                  </div>
                  <div className="text-sm text-blue-100 uppercase tracking-wide">
                    {t("pages.about.quality.stats.infection")}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-colors">
                  <span className="material-icons text-4xl mb-4 opacity-80">
                    military_tech
                  </span>
                  <div className="text-4xl font-bold mb-2">
                    <CountUp end={50} suffix="+" />
                  </div>
                  <div className="text-sm text-blue-100 uppercase tracking-wide">
                    {t("pages.about.quality.stats.awards")}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-colors">
                  <span className="material-icons text-4xl mb-4 opacity-80">
                    group
                  </span>
                  <div className="text-4xl font-bold mb-2">
                    <CountUp end={1200} suffix="+" />
                  </div>
                  <div className="text-sm text-blue-100 uppercase tracking-wide">
                    {t("pages.about.quality.stats.staff")}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FeaturesSection
        badge={t("pages.about.values.badge")}
        title={t("pages.about.values.title")}
        description={t("pages.about.values.subtitle")}
        variant="boxed"
        columns={3}
        items={[
          {
            icon: "volunteer_activism",
            title: t("pages.about.values.compassion.title"),
            description: t("pages.about.values.compassion.desc"),
            color: "blue",
          },
          {
            icon: "diamond",
            title: t("pages.about.values.excellence.title"),
            description: t("pages.about.values.excellence.desc"),
            color: "blue",
          },
          {
            icon: "handshake",
            title: t("pages.about.values.integrity.title"),
            description: t("pages.about.values.integrity.desc"),
            color: "blue",
          },
        ]}
      />

      <TeamSection
        badge={t("pages.about.leadership.badge")}
        title={t("pages.about.leadership.title")}
        description={t("pages.about.leadership.subtitle")}
        layout="grid"
        variant="management"
        className="py-20 bg-bg"
        members={[
          {
            name: t("pages.about.leadership.members.eleanor.name"),
            role: t("common.roles.chiefMedicalDirector"),
            img: "/images/doctors/team-dr-eleanor-rigby.jpg",
            bio: t("pages.about.leadership.desc"),
          },
          {
            name: t("pages.about.leadership.members.james.name"),
            role: t("common.roles.headOfSurgery"),
            img: "/images/doctors/team-dr-mark-williams.jpg",
            bio: t("pages.about.leadership.desc"),
          },
          {
            name: t("pages.about.leadership.members.sarah.name"),
            role: t("common.roles.directorOfNursing"),
            img: "/images/doctors/team-dr-sarah-johnson.jpg",
            bio: t("pages.about.leadership.desc"),
          },
          {
            name: t("pages.about.leadership.members.danel.name"),
            role: t("common.roles.chiefFinancialOfficer"),
            img: "/images/doctors/team-dr-danel-mekonnen.jpg",
            bio: t("pages.about.leadership.desc"),
          },
        ]}
      />

      {/* Facilities Section */}
      <section className="py-20 bg-bg-alt">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <Reveal delay={0}>
              <div>
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                  {t("pages.about.infrastructure.badge")}
                </span>
                <h2
                  className="text-3xl md:text-4xl font-serif font-bold mt-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {t("pages.about.infrastructure.title")}
                </h2>
              </div>
            </Reveal>
            <Button
              to="/gallery"
              variant="action"
              size="sm"
              className="hidden md:flex transform-none"
            >
              {t("pages.about.infrastructure.viewGallery")}
              <span className="material-icons text-sm ml-2">arrow_forward</span>
            </Button>
          </div>
          <Reveal delay={80} threshold={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg">
                <CldImg
                  src="/images/gallery/gallery-9-operation.jpg"
                  alt={t("common.imgAlt.operatingTheatre")}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-1">
                    {t("pages.about.infrastructure.operating.title")}
                  </h3>
                  <p className="text-white/80">
                    {t("pages.about.infrastructure.operating.desc")}
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg bg-slate-900">
                <CldImg
                  src="/images/gallery/gallery-10-recovery-suite.jpg"
                  alt={t("common.imgAlt.patientRoom")}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    {t("pages.about.infrastructure.recovery.title")}
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    {t("pages.about.infrastructure.recovery.desc")}
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg bg-surface">
                <CldImg
                  src="/images/gallery/gallery-14-icu.jpg"
                  alt={t("common.imgAlt.icu")}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold">
                    {t("pages.about.infrastructure.icu.title")}
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    {t("pages.about.infrastructure.icu.desc")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Revamped CTA Section */}
      <CTASection
        badge={t("pages.about.cta.badge")}
        titlePart1={t("pages.about.cta.titleStart")}
        titleHighlight={t("pages.about.cta.titleHighlight")}
        description={t("pages.about.cta.subtitle")}
        primaryButton={{
          label: t("pages.about.cta.visitUs"),
          to: "/contact",
        }}
        secondaryButton={{
          label: t("pages.about.cta.contactAdmin"),
          to: "/contact",
        }}
        iconName="near_me"
      />
    </div>
  );
};

export default About;
