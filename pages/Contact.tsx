import React, { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
const ContactMap = lazy(() => import("../components/ContactMap"));
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="animate-fade-in">
      <SEO
        title={t("nav.contact")}
        description={t("pages.contact.hero.subtitle")}
        canonical="https://everleaf-medical.com/contact"
      />
      <header className="relative border-b min-h-[500px] flex items-center overflow-hidden bg-surface border-border">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/gallery/gallery-1-atrium.jpg"
            alt="Hospital Building"
            className="w-full h-full object-cover opacity-30"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--color-surface), rgba(var(--color-surface-rgb), 0.9), transparent)",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 py-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Reveal delay={0}>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight text-text">
                  {t("pages.contact.hero.titleStart")} <br />
                  <span className="text-primary">
                    {t("pages.contact.hero.titleHighlight")}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={80}>
                <p className="text-lg leading-relaxed mb-10 text-muted">
                  {t("pages.contact.hero.subtitle")}
                </p>
              </Reveal>
              <div className="space-y-8">
                <Reveal delay={160}>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-2xl shadow-sm">
                    <h3 className="text-red-600 font-bold uppercase tracking-wide text-sm mb-2">
                      {t("pages.contact.emergency.title")}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="material-icons text-red-500 text-3xl">
                        phone_in_talk
                      </span>
                      <span className="text-3xl font-bold text-text">
                        {t("pages.contact.emergency.phone")}
                      </span>
                    </div>
                    <p className="text-sm mt-2 text-text">
                      {t("pages.contact.emergency.subtitle")}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={240}>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div>
                      <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                        <span className="material-icons text-sm">phone</span>{" "}
                        {t("pages.contact.inquiries.title")}
                      </h3>
                      <p className="text-xl font-bold text-text">
                        {t("pages.contact.inquiries.phone")}
                      </p>
                      <p className="text-sm mt-1 text-muted">
                        {t("pages.contact.inquiries.email")}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                        <span className="material-icons text-sm">
                          access_time
                        </span>{" "}
                        {t("pages.contact.hours.title")}
                      </h3>
                      <ul className="text-sm space-y-1 text-muted">
                        <li className="flex justify-between w-40">
                          <span>{t("pages.contact.hours.monFri")}:</span>{" "}
                          <span className="font-medium text-text">
                            8:00 - 20:00
                          </span>
                        </li>
                        <li className="flex justify-between w-40">
                          <span>{t("pages.contact.hours.sat")}:</span>{" "}
                          <span className="font-medium text-text">
                            9:00 - 18:00
                          </span>
                        </li>
                        <li className="flex justify-between w-40">
                          <span>{t("pages.contact.hours.sun")}:</span>{" "}
                          <span className="font-medium text-text">
                            9:00 - 14:00
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal from="right" delay={120}>
              <div className="p-8 rounded-2xl shadow-xl border bg-surface border-border">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="h-[500px] w-full relative animate-pulse bg-bg-alt">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-border"></div>
                <div className="h-4 rounded w-48 mx-auto bg-border"></div>
              </div>
            </div>
          </div>
        }
      >
        <ContactMap geoJsonUrl="/everleaf_medical_center.geojson" />
      </Suspense>
    </div>
  );
};

export default Contact;
