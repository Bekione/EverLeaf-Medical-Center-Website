import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { CldImg, rawSrc } from "@/components/CldImg";
import { useTranslation } from "react-i18next";

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
      {/* Hero Section - Distinct from Services Pages */}
      <header
        className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-primary-light), var(--color-surface))",
        }}
      >
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left">
              <Reveal delay={0}>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-wider text-primary uppercase rounded-full border shadow-sm"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {t("pages.about.hero.badge")}
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1
                  className="text-4xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
                  style={{ color: "var(--color-text)" }}
                >
                  {t("pages.about.hero.titleStart")} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                    {t("pages.about.hero.titleHighlight")}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p
                  className="text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {t("pages.about.hero.subtitle")}
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/doctors"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5"
                  >
                    {t("pages.about.hero.meetTeam")}
                  </Link>
                  <Link
                    to="/gallery"
                    className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold rounded-lg border transition-all shadow-sm"
                    style={{
                      color: "var(--color-text)",
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    {t("pages.about.hero.viewFacilities")}
                  </Link>
                </div>
              </Reveal>

              {/* Trust Indicators */}
              <Reveal delay={300}>
                <div
                  className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t pt-8"
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
              </Reveal>
            </div>

            <Reveal
              from="right"
              delay={100}
              threshold={0.05}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 w-full max-w-lg mx-auto lg:ml-auto group">
                {/* Main Image */}
                <CldImg
                  src={rawSrc("/images/hero/about-hero-1.jpg")}
                  alt="Medical Team"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border-4 border-white transition-transform duration-500 group-hover:scale-[1.01]"
                />

                {/* Floating Secondary Image */}
                <div className="absolute -bottom-12 -left-12 w-2/3 hidden md:block">
                  <CldImg
                    src={rawSrc("/images/hero/home-hero-1.jpg")}
                    alt="Hospital Building"
                    transform="w_800,q_auto,f_auto,c_fill"
                    className="rounded-xl shadow-xl border-4 border-white w-full object-cover aspect-[3/2] transition-transform duration-500 group-hover:-translate-y-2"
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
          </div>
        </div>
      </header>

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
                <img
                  src="/images/about-body-1.jpg"
                  alt="Hospital Exterior"
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </Reveal>
            <Reveal from="right" threshold={0.1} className="order-1 lg:order-2">
              <div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
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

      {/* Values Section */}
      <section className="py-20 bg-bg-alt">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal delay={0}>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                {t("pages.about.values.badge")}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-3xl md:text-4xl font-bold mt-2 mb-4 font-serif"
                style={{ color: "var(--color-text)" }}
              >
                {t("pages.about.values.title")}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p
                className="text-lg"
                style={{ color: "var(--color-text-muted)" }}
              >
                {t("pages.about.values.subtitle")}
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "volunteer_activism",
                title: t("pages.about.values.compassion.title"),
                desc: t("pages.about.values.compassion.desc"),
              },
              {
                icon: "diamond",
                title: t("pages.about.values.excellence.title"),
                desc: t("pages.about.values.excellence.desc"),
              },
              {
                icon: "handshake",
                title: t("pages.about.values.integrity.title"),
                desc: t("pages.about.values.integrity.desc"),
              },
            ].map((val, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div
                  key={idx}
                  className="p-10 rounded-2xl shadow-sm hover:shadow-card transition-all duration-300 border group hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                    style={{ backgroundColor: "var(--color-primary-light)" }}
                  >
                    <span className="material-icons text-3xl">{val.icon}</span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 font-serif"
                    style={{ color: "var(--color-text)" }}
                  >
                    {val.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {val.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal delay={0}>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                {t("pages.about.leadership.badge")}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2
                className="text-3xl md:text-4xl font-serif font-bold mt-2"
                style={{ color: "var(--color-text)" }}
              >
                {t("pages.about.leadership.title")}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p
                className="mt-4 text-lg"
                style={{ color: "var(--color-text-muted)" }}
              >
                {t("pages.about.leadership.subtitle")}
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: t("pages.about.leadership.members.eleanor.name"),
                role: t("common.roles.chiefMedicalDirector"),
                img: "/images/doctors/team-dr-eleanor-rigby.jpg",
              },
              {
                name: t("pages.about.leadership.members.james.name"),
                role: t("common.roles.headOfSurgery"),
                img: "/images/doctors/team-dr-mark-williams.jpg",
              },
              {
                name: t("pages.about.leadership.members.sarah.name"),
                role: t("common.roles.directorOfNursing"),
                img: "/images/doctors/team-dr-sarah-johnson.jpg",
              },
              {
                name: t("pages.about.leadership.members.danel.name"),
                role: t("common.roles.chiefFinancialOfficer"),
                img: "/images/doctors/team-dr-danel-mekonnen.jpg",
              },
            ].map((member, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="group relative rounded-2xl overflow-hidden shadow-lg h-96 cursor-pointer">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary-light font-medium uppercase tracking-wide">
                      {member.role}
                    </p>
                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                      <p className="text-white/70 text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                        {t("pages.about.leadership.desc")}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-bg-alt">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <Reveal delay={0}>
              <div>
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">
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
            <Link
              to="/gallery"
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors mt-4 md:mt-0"
            >
              {t("pages.about.infrastructure.viewGallery")}{" "}
              <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
          <Reveal delay={80} threshold={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
              <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg">
                <img
                  src="/images/gallery/gallery-9-operation.jpg"
                  alt="Operating Theatre"
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
                <img
                  src="/images/gallery/gallery-10-recovery-suite.jpg"
                  alt="Patient Room"
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
                <img
                  src="/images/gallery/gallery-14-icu.jpg"
                  alt="ICU"
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
      <section className="py-24 relative overflow-hidden" id="join">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-cta-from), var(--color-cta-to))",
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/xv.png')",
          }}
        ></div>

        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div
          className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "var(--color-cta-accent)", opacity: 0.15 }}
        ></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.about.cta.badge")}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.about.cta.titleStart")} <br />
                <span className="text-cta-accent">
                  {t("pages.about.cta.titleHighlight")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.about.cta.subtitle")}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/30 hover:scale-105 flex items-center gap-2"
                >
                  {t("pages.about.cta.visitUs")}{" "}
                  <span className="material-icons">near_me</span>
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  {t("pages.about.cta.contactAdmin")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
