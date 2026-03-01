import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import CTASection from "../../components/CTASection";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import { useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";

const Diagnostics: React.FC = () => {
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
        title={t("pages.services.diagnostics.seo.title")}
        description={t("pages.services.diagnostics.seo.description")}
        canonical="https://everleaf-medical.com/services/diagnostics"
      />
      <HeroSection
        variant="impact"
        badge={t("pages.services.diagnostics.hero.badge")}
        badgeIcon="medical_services"
        titlePart1={t("pages.services.diagnostics.hero.titlePart1")}
        titlePart2={t("pages.services.diagnostics.hero.titlePart2")}
        description={t("pages.services.diagnostics.hero.description")}
        image="/images/hero/diagnostics-hero.jpg"
        primaryButton={{
          label: t("pages.services.diagnostics.hero.buttons.schedule"),
          onClick: () => openAppointment({ department: "Diagnostics" }),
          icon: "calendar_today",
        }}
        secondaryButton={{
          label: t("pages.services.diagnostics.hero.buttons.explore"),
          onClick: (e: any) => scrollToSection(e, "capabilities"),
          variant: "secondary",
          icon: "visibility",
        }}
      />

      {/* Intro Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2
                className="text-3xl font-serif font-bold mb-6"
                style={{ color: "var(--color-text)" }}
              >
                {t(
                  "pages.services.diagnostics.intro.title",
                  "Why Precise Diagnostics Matter",
                )}
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {t(
                  "pages.services.diagnostics.intro.description",
                  'Before any treatment plan begins, understanding the root cause is essential. Our Diagnostic Center operates with a philosophy of "Precision First," ensuring that every scan, test, and analysis contributes to a clear path forward for your health journey.',
                )}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FeaturesSection
        className="py-20 bg-bg-alt"
        badge={t("pages.services.diagnostics.capabilities.badge")}
        title={t("pages.services.diagnostics.capabilities.title")}
        description={t("pages.services.diagnostics.capabilities.description")}
        items={[
          {
            title: t("pages.services.diagnostics.capabilities.items.0.title"),
            icon: "scanner",
            color: "blue",
            description: t(
              "pages.services.diagnostics.capabilities.items.0.description",
            ),
            items: [
              t("pages.services.diagnostics.capabilities.items.0.services.0"),
              t("pages.services.diagnostics.capabilities.items.0.services.1"),
              t("pages.services.diagnostics.capabilities.items.0.services.2"),
            ],
          },
          {
            title: t("pages.services.diagnostics.capabilities.items.1.title"),
            icon: "science",
            color: "teal",
            description: t(
              "pages.services.diagnostics.capabilities.items.1.description",
            ),
            items: [
              t("pages.services.diagnostics.capabilities.items.1.services.0"),
              t("pages.services.diagnostics.capabilities.items.1.services.1"),
              t("pages.services.diagnostics.capabilities.items.1.services.2"),
            ],
          },
          {
            title: t("pages.services.diagnostics.capabilities.items.2.title"),
            icon: "monitor_heart",
            color: "red",
            description: t(
              "pages.services.diagnostics.capabilities.items.2.description",
            ),
            items: [
              t("pages.services.diagnostics.capabilities.items.2.services.0"),
              t("pages.services.diagnostics.capabilities.items.2.services.1"),
              t("pages.services.diagnostics.capabilities.items.2.services.2"),
            ],
          },
          {
            title: t("pages.services.diagnostics.capabilities.items.3.title"),
            icon: "psychology",
            color: "purple",
            description: t(
              "pages.services.diagnostics.capabilities.items.3.description",
            ),
            items: [
              t("pages.services.diagnostics.capabilities.items.3.services.0"),
              t("pages.services.diagnostics.capabilities.items.3.services.1"),
              t("pages.services.diagnostics.capabilities.items.3.services.2"),
            ],
          },
        ]}
      />

      {/* Technology Section */}
      <section
        className="py-20 overflow-hidden"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <Reveal
              from="left"
              threshold={0.1}
              className="lg:w-1/2 relative order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <img
                  alt="Advanced CT Scanner"
                  className="relative rounded-2xl shadow-2xl z-10 w-full object-cover"
                  src="/images/diagnostics-body-image-1.jpg"
                />
                <div
                  className="absolute bottom-6 right-6 z-20 p-4 rounded-lg shadow-xl border-l-4 border-primary max-w-xs"
                  style={{ backgroundColor: "var(--color-surface)" }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t(
                      "pages.services.diagnostics.technology.newest.title",
                      "Newest Addition",
                    )}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {t(
                      "pages.services.diagnostics.technology.newest.description",
                      "Siemens Somatom Definition Edge CT Scanner installed in 2023.",
                    )}
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal
              from="right"
              threshold={0.1}
              className="lg:w-1/2 order-1 lg:order-2"
            >
              <div>
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-secondary uppercase bg-blue-50 rounded-full">
                  {t(
                    "pages.services.diagnostics.technology.badge",
                    "Innovation",
                  )}
                </div>
                <h2
                  className="text-3xl lg:text-4xl font-serif font-bold mb-6"
                  style={{ color: "var(--color-text)" }}
                >
                  {t(
                    "pages.services.diagnostics.technology.title",
                    "State-of-the-Art Technology",
                  )}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {t(
                    "pages.services.diagnostics.technology.description",
                    "We continuously invest in the latest medical technology to ensure the lowest radiation doses, fastest scan times, and clearest images possible. Our new 3T MRI creates exceptionally detailed images of soft tissues, bone, and blood vessels.",
                  )}
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    {
                      icon: "bolt",
                      text: t(
                        "pages.services.diagnostics.technology.items.0",
                        "Faster scanning times for patient comfort",
                      ),
                    },
                    {
                      icon: "shield",
                      text: t(
                        "pages.services.diagnostics.technology.items.1",
                        "Reduced radiation exposure protocols",
                      ),
                    },
                    {
                      icon: "cloud_upload",
                      text: t(
                        "pages.services.diagnostics.technology.items.2",
                        "Digital results integrated with Patient Portal instantly",
                      ),
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-icons text-primary text-sm">
                          {item.icon}
                        </span>
                      </div>
                      <span className="text-slate-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <h2
              className="text-3xl font-serif font-bold text-center mb-12"
              style={{ color: "var(--color-text)" }}
            >
              {t(
                "pages.services.diagnostics.preparation.title",
                "Preparation for Your Visit",
              )}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t(
                  "pages.services.diagnostics.preparation.sections.0.title",
                  "What to Bring",
                ),
                icon: "description",
                items: [
                  t(
                    "pages.services.diagnostics.preparation.sections.0.items.0",
                    "Photo ID & Insurance Card",
                  ),
                  t(
                    "pages.services.diagnostics.preparation.sections.0.items.1",
                    "Doctor's Referral Form",
                  ),
                  t(
                    "pages.services.diagnostics.preparation.sections.0.items.2",
                    "List of current medications",
                  ),
                ],
              },
              {
                title: t(
                  "pages.services.diagnostics.preparation.sections.1.title",
                  "Fasting Instructions",
                ),
                icon: "no_food",
                items: [
                  t(
                    "pages.services.diagnostics.preparation.sections.1.items.0",
                    "Ultrasound (Abdomen): Fast for 6-8 hrs",
                  ),
                  t(
                    "pages.services.diagnostics.preparation.sections.1.items.1",
                    "Cholesterol Tests: Fast for 12 hrs",
                  ),
                  t(
                    "pages.services.diagnostics.preparation.sections.1.items.2",
                    "CT Scans: Avoid food 4 hrs prior",
                  ),
                ],
              },
              {
                title: t(
                  "pages.services.diagnostics.preparation.sections.2.title",
                  "Clothing & Arrival",
                ),
                icon: "checkroom",
                items: [
                  t(
                    "pages.services.diagnostics.preparation.sections.2.items.0",
                    "Wear loose, comfortable clothing",
                  ),
                  t(
                    "pages.services.diagnostics.preparation.sections.2.items.1",
                    "Remove jewelry/metal objects",
                  ),
                  t(
                    "pages.services.diagnostics.preparation.sections.2.items.2",
                    "Arrive 15 minutes early",
                  ),
                ],
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div
                  className="p-8 rounded-2xl relative overflow-hidden group transition-colors h-full"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-icons text-8xl text-primary">
                      {step.icon}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-4 relative z-10"
                    style={{ color: "var(--color-text)" }}
                  >
                    {step.title}
                  </h3>
                  <ul
                    className="space-y-3 relative z-10"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl font-serif font-bold mb-8"
                style={{ color: "var(--color-text)" }}
              >
                {t(
                  "pages.services.diagnostics.whyChoose.title",
                  "Why Choose Everleaf Diagnostics?",
                )}
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <span className="material-icons text-2xl">
                      medical_services
                    </span>
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t(
                        "pages.services.diagnostics.whyChoose.items.0.title",
                        "Expert Radiologists",
                      )}
                    </h4>
                    <p className="text-slate-600 mt-1">
                      {t(
                        "pages.services.diagnostics.whyChoose.items.0.description",
                        "Our team includes board-certified radiologists with sub-specialty training in neuro, body, and musculoskeletal imaging.",
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <span className="material-icons text-2xl">timer</span>
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t(
                        "pages.services.diagnostics.whyChoose.items.1.title",
                        "Rapid Results",
                      )}
                    </h4>
                    <p className="text-slate-600 mt-1">
                      {t(
                        "pages.services.diagnostics.whyChoose.items.1.description",
                        "Most imaging reports are available to your referring physician within 24 hours.",
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-xl shadow-sm flex items-center justify-center text-primary shrink-0"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <span className="material-icons text-2xl">
                      sentiment_satisfied
                    </span>
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t(
                        "pages.services.diagnostics.whyChoose.items.2.title",
                        "Patient-Centric Care",
                      )}
                    </h4>
                    <p className="text-slate-600 mt-1">
                      {t(
                        "pages.services.diagnostics.whyChoose.items.2.description",
                        "We prioritize your comfort and understanding, explaining every step of the procedure.",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Medical staff reviewing diagnostic results"
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/diagnostics-body-image-2.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        badge={t(
          "pages.services.diagnostics.cta.badge",
          "Start Your Diagnosis",
        )}
        titlePart1={t(
          "pages.services.diagnostics.cta.titlePart1",
          "Ready to schedule",
        )}
        titleHighlight={t(
          "pages.services.diagnostics.cta.titlePart2",
          "your test?",
        )}
        description={t(
          "pages.services.diagnostics.cta.description",
          "Call us directly or use our online portal to book your appointment. Ensure you have your doctor's referral ready.",
        )}
        primaryButton={{
          label: "(555) 123-4567",
          href: "tel:5551234567",
        }}
        secondaryButton={{
          label: t(
            "pages.services.diagnostics.cta.buttons.request",
            "Request Appointment",
          ),
          to: "/contact",
        }}
        iconName="fact_check"
      />
    </div>
  );
};

export default Diagnostics;
