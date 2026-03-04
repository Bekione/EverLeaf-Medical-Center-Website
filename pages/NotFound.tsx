import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLangPath } from "../hooks/useLang";

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  const buildPath = useLangPath();

  return (
    <div className="grow flex items-center justify-center relative py-16 px-6 bg-bg-alt min-h-[70vh]">
      {/* Subtle dot grid illustration logic */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(var(--color-primary)_0.5px,transparent_0.5px)] bg-size-[20px_20px]" />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        {/* Illustration */}
        <div className="mb-10 flex justify-center">
          <div className="relative w-48 h-48 sm:w-54 sm:h-54 bg-primary-light rounded-full flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full border-4 border-dashed border-primary/30 animate-spin"
              style={{ animationDuration: "15s" }}
            />
            <span className="material-icons text-[8rem] sm:text-[10rem] text-primary">
              healing
            </span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-2 ml-6 bg-surface rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-border">
              <span className="text-2xl font-bold text-muted">?</span>
            </div>
          </div>
        </div>

        {/* Badge */}
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-red-500 uppercase bg-red-500/10 rounded-full border border-red-500/20">
          {t("pages.notFound.hero.badge")}
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-6 tracking-tight">
          {t("pages.notFound.hero.title")}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-10">
          {t("pages.notFound.hero.subtitle")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={buildPath("/")}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:opacity-90 shadow-md hover:shadow-lg w-full sm:w-auto hover:-translate-y-0.5"
          >
            <span className="material-icons mr-2">home</span>
            {t("pages.notFound.actions.returnHome")}
          </Link>
          <Link
            to={buildPath("/contact")}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-text transition-all duration-200 bg-surface border border-border rounded-lg hover:bg-bg-alt shadow-sm w-full sm:w-auto hover:-translate-y-0.5"
          >
            <span className="material-icons mr-2 text-muted">
              support_agent
            </span>
            {t("pages.notFound.actions.contactSupport")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
