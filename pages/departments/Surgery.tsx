import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

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
      <header className="bg-bg border-b border-border py-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Reveal delay={0}>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                  {t("pages.departments.surgery.hero.badge")}
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-txt mb-6 leading-tight">
                  {t("pages.departments.surgery.hero.titlePart1")}{" "}
                  <span className="text-primary">
                    {t("pages.departments.surgery.hero.titleHighlight")}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
                  {t("pages.departments.surgery.hero.description")}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => openAppointment({ department: "Surgery" })}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-soft hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {t("pages.departments.surgery.hero.buttons.consultation")}
                  </button>
                  <button
                    onClick={(e) => scrollToSection(e, "specialists")}
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-txt transition-all duration-200 bg-bg border border-border rounded-lg hover:bg-bg-alt"
                  >
                    {t("pages.departments.surgery.hero.buttons.team")}
                  </button>
                </div>
              </Reveal>
            </div>
            <Reveal
              from="right"
              threshold={0.1}
              className="relative hidden lg:flex w-full justify-center"
            >
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[450px] w-full max-w-lg">
                  <img
                    src="/images/hero/home-hero-3.jpg"
                    alt="Advanced Surgery Room"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 z-20 bg-surface p-4 rounded-xl shadow-xl border border-border max-w-xs transition-all duration-500 animate-fade-in">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary-light rounded-full text-primary">
                      <span className="material-icons">verified_user</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-txt">
                        {t("pages.departments.surgery.stats.success.value")}
                      </p>
                      <p className="text-xs text-muted">
                        {t("pages.departments.surgery.stats.success.label")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="py-20 bg-bg-alt relative">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-txt mb-4">
                {t("pages.departments.surgery.conditions.intro.title")}
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                {t("pages.departments.surgery.conditions.intro.description")}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t(
                  "pages.departments.surgery.conditions.items.appendicitis.title",
                ),
                icon: "medical_services",
                color: "red",
                desc: t(
                  "pages.departments.surgery.conditions.items.appendicitis.description",
                ),
              },
              {
                title: t(
                  "pages.departments.surgery.conditions.items.hernias.title",
                ),
                icon: "accessibility_new",
                color: "blue",
                desc: t(
                  "pages.departments.surgery.conditions.items.hernias.description",
                ),
              },
              {
                title: t(
                  "pages.departments.surgery.conditions.items.gallbladder.title",
                ),
                icon: "healing",
                color: "yellow",
                desc: t(
                  "pages.departments.surgery.conditions.items.gallbladder.description",
                ),
              },
              {
                title: t(
                  "pages.departments.surgery.conditions.items.trauma.title",
                ),
                icon: "local_hospital",
                color: "orange",
                desc: t(
                  "pages.departments.surgery.conditions.items.trauma.description",
                ),
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="bg-surface p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow h-full">
                  <div
                    className={`w-12 h-12 bg-${item.color}-100 text-${item.color}-600 rounded-lg flex items-center justify-center mb-4`}
                  >
                    <span className="material-icons">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <Reveal
              from="left"
              threshold={0.1}
              className="lg:w-1/3 lg:sticky lg:top-24 self-start"
            >
              <div>
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
                  {t("pages.departments.surgery.expertise.badge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-txt mb-6">
                  {t("pages.departments.surgery.expertise.title")}
                </h2>
                <p className="text-muted mb-8 leading-relaxed">
                  {t("pages.departments.surgery.expertise.description")}
                </p>
              </div>
            </Reveal>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
              {[
                {
                  title: t(
                    "pages.departments.surgery.services.items.minimally.title",
                  ),
                  desc: t(
                    "pages.departments.surgery.services.items.minimally.description",
                  ),
                  icon: "content_cut",
                },
                {
                  title: t(
                    "pages.departments.surgery.services.items.laparoscopy.title",
                  ),
                  desc: t(
                    "pages.departments.surgery.services.items.laparoscopy.description",
                  ),
                  icon: "visibility",
                },
                {
                  title: t(
                    "pages.departments.surgery.services.items.general.title",
                  ),
                  desc: t(
                    "pages.departments.surgery.services.items.general.description",
                  ),
                  icon: "health_and_safety",
                },
                {
                  title: t(
                    "pages.departments.surgery.services.items.postoperative.title",
                  ),
                  desc: t(
                    "pages.departments.surgery.services.items.postoperative.description",
                  ),
                  icon: "monitor_heart",
                },
              ].map((service, i) => (
                <Reveal key={i} delay={i * 100} threshold={0.1}>
                  <div className="group h-full">
                    <div className="h-full bg-bg-alt p-8 rounded-2xl border border-border hover:border-primary/30 transition-colors">
                      <div className="mb-4 inline-block p-3 bg-white rounded-lg shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                        <span className="material-icons text-2xl">
                          {service.icon}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-txt mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-cta-from to-cta-to text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal from="left" threshold={0.1} className="order-2 md:order-1">
              <img
                src="/images/surgery-body-1.jpg"
                alt="Robotic Surgery"
                className="rounded-2xl shadow-2xl border border-white/10 w-full"
              />
            </Reveal>
            <Reveal from="right" threshold={0.1} className="order-1 md:order-2">
              <div>
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
                  {t("pages.departments.surgery.technology.badge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t("pages.departments.surgery.technology.title")}
                </h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  {t("pages.departments.surgery.technology.description")}
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 group">
                    <div className="shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="material-icons">
                        precision_manufacturing
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        {t(
                          "pages.departments.surgery.technology.items.robotic.title",
                        )}
                      </h4>
                      <p className="text-blue-200 text-sm">
                        {t(
                          "pages.departments.surgery.technology.items.robotic.description",
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 group">
                    <div className="shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="material-icons">hd</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        {t(
                          "pages.departments.surgery.technology.items.imaging.title",
                        )}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {t(
                          "pages.departments.surgery.technology.items.imaging.description",
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-alt" id="specialists">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                  {t("pages.departments.surgery.team.badge")}
                </span>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-txt">
                  {t("pages.departments.surgery.team.title")}
                </h2>
              </div>
              <Link
                to="/doctors"
                className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                {t("pages.departments.surgery.team.viewAll")}{" "}
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((doc, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={doc.img}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <button
                        onClick={() =>
                          openAppointment({
                            doctorName: doc.name,
                            department: "Surgery",
                          })
                        }
                        className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {t("common.bookAppointment")}
                      </button>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-txt">{doc.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">
                      {doc.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-cta-from to-cta-to"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">
            medical_services
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                {t("pages.departments.surgery.cta.badge")}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                {t("pages.departments.surgery.cta.titlePart1")} <br />
                <span className="text-cta-accent">
                  {t("pages.departments.surgery.cta.titleHighlight")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                {t("pages.departments.surgery.cta.description")}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openAppointment({ department: "Surgery" })}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:bg-white/90 shadow-xl shadow-black/20 transition-all hover:scale-105"
                >
                  {t("pages.departments.surgery.cta.buttons.appointment")}
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  {t("pages.departments.surgery.cta.buttons.contact")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Surgery;
