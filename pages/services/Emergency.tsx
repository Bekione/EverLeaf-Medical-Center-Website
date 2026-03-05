import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import HeroSection from "../../components/HeroSection";
import Modal from "../../components/Modal";
import { CldImg } from "../../components/CldImg";

const Emergency: React.FC = () => {
  const { t } = useTranslation();
  const [showGuidelineModal, setShowGuidelineModal] = useState(false);

  return (
    <div className="animate-fade-in">
      <SEO
        title={t(
          "pages.services.emergency.seo.title",
          "Emergency Department (ER)",
        )}
        description={t(
          "pages.services.emergency.seo.description",
          "24/7 Level I Trauma Center providing immediate critical care. Call 911 for life-threatening emergencies.",
        )}
        canonical="https://everleaf-medical.com/services/emergency"
      />
      <HeroSection
        variant="impact"
        badge={t("pages.services.emergency.hero.badge")}
        badgeIcon="notification_important"
        status={t("pages.services.emergency.hero.status")}
        titlePart1={t("pages.services.emergency.hero.titlePart1")}
        titleHighlight={t("pages.services.emergency.hero.titlePart2")}
        description={t("pages.services.emergency.hero.description")}
        image="/images/hero/emergency-hero.jpg"
        primaryButton={{
          label: t("pages.services.emergency.hero.buttons.call"),
          href: "tel:911",
          className: "bg-red-600 hover:bg-red-700 shadow-glow",
          icon: "phone_in_talk",
        }}
        secondaryButton={{
          label: t("pages.services.emergency.hero.buttons.directions"),
          to: "/contact",
          icon: "directions",
        }}
      />
      <section className="py-16 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal from="left" threshold={0.1}>
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">
                  {t(
                    "pages.services.emergency.intro.title",
                    "24/7 Trauma & Critical Care",
                  )}
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    {t(
                      "pages.services.emergency.intro.description1",
                      "Everleaf's Emergency Department is a state-of-the-art facility designed to provide comprehensive emergency services to patients of all ages. From minor injuries to life-threatening conditions, our team is prepared for everything.",
                    )}
                  </p>
                  <p>
                    {t(
                      "pages.services.emergency.intro.description2",
                      "We utilize the latest in medical technology, including advanced imaging (CT, MRI) located directly within the ED for immediate diagnostics, ensuring that treatment decisions are made rapidly and accurately.",
                    )}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-10">
                  {[
                    {
                      val: "0",
                      unit: "min",
                      sub: t(
                        "pages.services.emergency.intro.stats.wait",
                        "Wait for Critical Cases",
                      ),
                    },
                    {
                      val: "50+",
                      unit: "",
                      sub: t(
                        "pages.services.emergency.intro.stats.specialists",
                        "Trauma Specialists",
                      ),
                    },
                    {
                      val: "24/7",
                      unit: "",
                      sub: t(
                        "pages.services.emergency.intro.stats.support",
                        "Lab & Pharmacy",
                      ),
                    },
                    {
                      val: "Level 1",
                      unit: "",
                      sub: t(
                        "pages.services.emergency.intro.stats.rating",
                        "Trauma Center",
                      ),
                    },
                  ].map((stat, i) => (
                    <Reveal key={i} delay={400 + i * 100} threshold={0.1}>
                      <div
                        className="p-6 rounded-xl shadow-sm border h-full"
                        style={{
                          backgroundColor: "var(--color-surface)",
                          borderColor: "var(--color-border)",
                        }}
                      >
                        <div className="text-4xl font-bold text-primary mb-1">
                          {stat.val}{" "}
                          <span className="text-lg text-slate-400 font-normal">
                            {stat.unit}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                          {stat.sub}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal from="right" threshold={0.1} className="relative">
              <div>
                <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <CldImg
                  src="/images/emergency-body-1.jpg"
                  alt={t("common.imgAlt.emergencyMedicalTeam")}
                  transform="w_1200,h_600,q_auto,f_auto,c_fill"
                  className="relative rounded-2xl shadow-2xl border-4 border-border z-10 w-full object-cover h-[600px]"
                />
                <div
                  className="absolute bottom-8 left-8 right-8 backdrop-blur p-6 rounded-xl shadow-lg z-20 border"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--color-surface) 95%, transparent)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                      <span className="material-icons text-2xl">
                        airport_shuttle
                      </span>
                    </div>
                    <div>
                      <h4
                        className="font-bold"
                        style={{ color: "var(--color-text)" }}
                      >
                        {t(
                          "pages.services.emergency.intro.ambulance.title",
                          "Ambulance Services",
                        )}
                      </h4>
                      <p className="text-sm text-slate-500 mt-1">
                        {t(
                          "pages.services.emergency.intro.ambulance.description",
                          "Our fleet of advanced life support ambulances is strategically positioned to ensure the fastest response times in the region.",
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
      <section
        className="py-20 border-y"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                {t("pages.services.emergency.triage.badge", "Patient Flow")}
              </span>
              <h2
                className="text-3xl font-serif font-bold mb-4"
                style={{ color: "var(--color-text)" }}
              >
                {t(
                  "pages.services.emergency.triage.title",
                  "Our Triage Process",
                )}
              </h2>
              <p className="text-slate-600">
                {t(
                  "pages.services.emergency.triage.description",
                  "We use a standardized triage system to ensure that patients with the most severe conditions receive immediate attention. Here is what to expect upon arrival.",
                )}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-slate-200 to-transparent z-0"></div>
            {[
              {
                step: "01",
                title: t(
                  "pages.services.emergency.triage.steps.0.title",
                  "Arrival & Registration",
                ),
                desc: t(
                  "pages.services.emergency.triage.steps.0.desc",
                  "Upon arrival, check in at the reception desk. If the condition is life-threatening, you will be taken immediately to a treatment room.",
                ),
              },
              {
                step: "02",
                title: t(
                  "pages.services.emergency.triage.steps.1.title",
                  "Triage Assessment",
                ),
                desc: t(
                  "pages.services.emergency.triage.steps.1.desc",
                  "A specialized nurse will assess your vitals and the severity of your condition to prioritize your care based on medical urgency.",
                ),
              },
              {
                step: "03",
                title: t(
                  "pages.services.emergency.triage.steps.2.title",
                  "Diagnosis & Treatment",
                ),
                desc: t(
                  "pages.services.emergency.triage.steps.2.desc",
                  "You will be seen by an emergency physician for examination, testing, and treatment. We aim to discharge or admit you as efficiently as possible.",
                ),
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 200} threshold={0.1}>
                <div className="relative z-10 flex flex-col items-center text-center group h-full">
                  <div
                    className="w-24 h-24 rounded-full border-4 flex items-center justify-center mb-6 shadow-sm group-hover:border-primary transition-colors duration-300"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <span className="text-3xl font-bold text-slate-300 group-hover:text-primary transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <div
                    className="p-6 rounded-xl w-full hover:-translate-y-1 transition-transform duration-300 h-full"
                    style={{ backgroundColor: "var(--color-primary-light)" }}
                  >
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: "var(--color-text)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
              {t(
                "pages.services.emergency.teams.title",
                "Specialized Emergency Teams",
              )}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t(
                  "pages.services.emergency.teams.items.0.title",
                  "Cardiac Care Team",
                ),
                icon: "favorite",
                color: "red-500",
                bgColor: "red-50",
                desc: t(
                  "pages.services.emergency.teams.items.0.description",
                  'Rapid response for heart attacks with 24/7 catheterization lab availability. Our "Door-to-Balloon" time is consistently below national averages.',
                ),
                items: [
                  t(
                    "pages.services.emergency.teams.items.0.services.0",
                    "Chest Pain Center",
                  ),
                  t(
                    "pages.services.emergency.teams.items.0.services.1",
                    "Advanced Cardiac Life Support",
                  ),
                ],
              },
              {
                title: t(
                  "pages.services.emergency.teams.items.1.title",
                  "Stroke Center",
                ),
                icon: "psychology",
                color: "primary",
                bgColor: "var(--color-primary-light)",
                desc: t(
                  "pages.services.emergency.teams.items.1.description",
                  "Certified Primary Stroke Center providing immediate clot-busting therapies and neuro-interventional procedures to minimize brain damage.",
                ),
                items: [
                  t(
                    "pages.services.emergency.teams.items.1.services.0",
                    "Rapid CT/MRI access",
                  ),
                  t(
                    "pages.services.emergency.teams.items.1.services.1",
                    "Tele-neurology support",
                  ),
                ],
              },
              {
                title: t(
                  "pages.services.emergency.teams.items.2.title",
                  "Pediatric Emergency",
                ),
                icon: "child_care",
                color: "yellow-500",
                bgColor: "yellow-50",
                desc: t(
                  "pages.services.emergency.teams.items.2.description",
                  "A separate, child-friendly emergency area staffed by pediatric specialists dedicated to making children feel safe and comfortable during crises.",
                ),
                items: [
                  t(
                    "pages.services.emergency.teams.items.2.services.0",
                    "Child Life Specialists",
                  ),
                  t(
                    "pages.services.emergency.teams.items.2.services.1",
                    "Pediatric Sedation",
                  ),
                ],
              },
            ].map((team, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div
                  className="rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow duration-300 group h-full"
                  style={{ backgroundColor: "var(--color-surface)" }}
                >
                  <div
                    className={`h-2 bg-${team.color === "primary" ? "primary" : team.color}`}
                  ></div>
                  <div className="p-8">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      style={{
                        backgroundColor: team.bgColor,
                        color:
                          team.color === "primary"
                            ? "var(--color-primary)"
                            : team.color,
                      }}
                    >
                      <span
                        className={`material-icons text-3xl ${team.color !== "primary" ? `text-${team.color}` : "text-primary"}`}
                      >
                        {team.icon}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: "var(--color-text)" }}
                    >
                      {team.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed mb-6">
                      {team.desc}
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {team.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="material-icons text-green-500 text-xs shrink-0">
                            check_circle
                          </span>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="py-20 bg-slate-900 text-white relative overflow-hidden"
        id="contact"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Reveal threshold={0.1}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-10 lg:p-16 backdrop-blur-sm">
              <div className="flex-1 p-4 sm:p-0">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  {t(
                    "pages.services.emergency.contact.title",
                    "Emergency Contact Information",
                  )}
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  {t(
                    "pages.services.emergency.contact.description",
                    "If you are experiencing a medical emergency, please call 911 immediately. For inquiries regarding a patient currently in our Emergency Department, use the main hospital line.",
                  )}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-glow">
                      <span className="material-icons text-white">
                        phone_in_talk
                      </span>
                    </div>
                    <div>
                      <span className="block text-sm text-slate-400 uppercase tracking-wider">
                        {t(
                          "pages.services.emergency.contact.hotline.label",
                          "Emergency Hotline",
                        )}
                      </span>
                      <span className="text-2xl font-bold">911</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                      <span className="material-icons text-white">phone</span>
                    </div>
                    <div>
                      <span className="block text-sm text-slate-400 uppercase tracking-wider">
                        {t(
                          "pages.services.emergency.contact.mainLine.label",
                          "Main Hospital Line",
                        )}
                      </span>
                      <span className="text-xl font-semibold">
                        +1 (555) 123-4567
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                      <span className="material-icons text-white">print</span>
                    </div>
                    <div>
                      <span className="block text-sm text-slate-400 uppercase tracking-wider">
                        {t(
                          "pages.services.emergency.contact.poisonControl.label",
                          "Poison Control",
                        )}
                      </span>
                      <span className="text-xl font-semibold">
                        1-800-222-1222
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-auto flex flex-col items-center justify-center text-center bg-white/10 rounded-2xl p-8 border border-white/10 max-w-sm">
                <span className="material-icons text-5xl text-red-500 mb-4 animate-pulse">
                  notification_important
                </span>
                <h3 className="text-xl font-bold mb-2">
                  {t(
                    "pages.services.emergency.contact.box.title",
                    "When to come to the ER?",
                  )}
                </h3>
                <p className="text-slate-300 text-sm mb-6">
                  {t(
                    "pages.services.emergency.contact.box.description",
                    "Chest pain, difficulty breathing, severe bleeding, head injury, loss of consciousness, or severe abdominal pain.",
                  )}
                </p>
                <Button
                  onClick={() => setShowGuidelineModal(true)}
                  variant="white"
                  className="w-full"
                >
                  {t(
                    "pages.services.emergency.contact.box.button",
                    "View Full Guideline",
                  )}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* Guideline Modal */}
      <Modal
        isOpen={showGuidelineModal}
        onClose={() => setShowGuidelineModal(false)}
        title={t(
          "pages.services.emergency.modal.title",
          "ER Visitor Guidelines",
        )}
        icon="calendar_today"
        footer={
          <Button
            onClick={() => setShowGuidelineModal(false)}
            className="w-full bg-slate-900 text-white hover:bg-slate-800"
          >
            {t("pages.services.emergency.modal.button", "Close Guidelines")}
          </Button>
        }
      >
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="material-icons text-primary text-sm">
                priority_high
              </span>
              {t(
                "pages.services.emergency.modal.sections.call911.title",
                "When to call 911",
              )}
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
              <li>
                {t(
                  "pages.services.emergency.modal.sections.call911.items.0",
                  "Difficulty breathing or shortness of breath",
                )}
              </li>
              <li>
                {t(
                  "pages.services.emergency.modal.sections.call911.items.1",
                  "Chest pain or upper abdominal pain or pressure",
                )}
              </li>
              <li>
                {t(
                  "pages.services.emergency.modal.sections.call911.items.2",
                  "Fainting, sudden dizziness, or weakness",
                )}
              </li>
              <li>
                {t(
                  "pages.services.emergency.modal.sections.call911.items.3",
                  "Changes in vision",
                )}
              </li>
              <li>
                {t(
                  "pages.services.emergency.modal.sections.call911.items.4",
                  "Confusion or changes in mental status",
                )}
              </li>
              <li>
                {t(
                  "pages.services.emergency.modal.sections.call911.items.5",
                  "Any sudden or severe pain",
                )}
              </li>
              <li>
                {t(
                  "pages.services.emergency.modal.sections.call911.items.6",
                  "Uncontrolled bleeding",
                )}
              </li>
            </ul>
          </div>

          <div
            className="p-4 rounded-lg"
            style={{ backgroundColor: "var(--color-primary-light)" }}
          >
            <h4
              className="font-bold mb-2 text-sm"
              style={{ color: "var(--color-text)" }}
            >
              {t(
                "pages.services.emergency.modal.sections.whatToBring.title",
                "What to Bring",
              )}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="material-icons text-blue-500 text-xs mt-0.5">
                  check
                </span>
                <span>
                  {t(
                    "pages.services.emergency.modal.sections.whatToBring.items.0",
                    "Photo ID and health insurance card",
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons text-blue-500 text-xs mt-0.5">
                  check
                </span>
                <span>
                  {t(
                    "pages.services.emergency.modal.sections.whatToBring.items.1",
                    "List of current medications and allergies",
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-icons text-blue-500 text-xs mt-0.5">
                  check
                </span>
                <span>
                  {t(
                    "pages.services.emergency.modal.sections.whatToBring.items.2",
                    "Emergency contact information",
                  )}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2 text-sm">
              {t(
                "pages.services.emergency.modal.sections.visitorPolicy.title",
                "Visitor Policy",
              )}
            </h4>
            <p className="text-sm text-slate-600">
              {t(
                "pages.services.emergency.modal.sections.visitorPolicy.description",
                "To ensure the safety of our patients and staff, we currently allow one visitor per patient in the ER. Masks are mandatory in all clinical areas.",
              )}
            </p>
          </div>
        </div>
      </Modal>{" "}
    </div>
  );
};

export default Emergency;
