import React from "react";
import { useTranslation } from "react-i18next";
import { EverleafLogo } from "./Logo";

/**
 * Full-screen loading splash used as the Suspense fallback.
 */
const LoadingScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      className="fixed inset-0 z-100 flex flex-col justify-center items-center p-4 transition-colors"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      {/* Logo + brand name */}
      <div className="flex flex-col items-center mb-10 animate-fade-in">
        <div
          className="p-4 mb-5 rounded-2xl"
          style={{
            background:
              "color-mix(in srgb, var(--color-primary) 10%, transparent)",
          }}
        >
          <EverleafLogo className="w-20 h-20" />
        </div>

        <div className="text-center">
          <span
            className="text-4xl font-brand font-semibold block leading-none mb-1"
            style={{ color: "var(--color-text)" }}
          >
            {t("nav.brand")}
          </span>
          <span
            className="text-[10px] font-brand tracking-[0.22em] uppercase"
            style={{ color: "var(--color-text-muted)" }}
          >
            {t("nav.brandSub")}
          </span>
        </div>
      </div>

      {/* Spinner */}
      <div className="relative w-14 h-14 mb-8">
        <div
          className="absolute inset-0 border-4 rounded-full"
          style={{ borderColor: "var(--color-border)" }}
        />
        <div
          className="absolute inset-0 border-4 rounded-full border-t-transparent animate-spin"
          style={{
            borderColor:
              "var(--color-primary) transparent transparent transparent",
          }}
        />
      </div>

      {/* tagline */}
      <p
        className="text-base font-medium tracking-wide animate-pulse"
        style={{ color: "var(--color-text-muted)" }}
      >
        {t("pages.home.hero.title")}
      </p>
    </div>
  );
};

export default LoadingScreen;
