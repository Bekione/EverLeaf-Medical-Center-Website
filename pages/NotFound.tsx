import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="grow flex items-center justify-center relative py-16 px-6 bg-slate-50 min-h-[70vh]">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(#136dec 0.5px, transparent 0.5px), radial-gradient(#136dec 0.5px, #f6f7f8 0.5px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      ></div>
      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        <div className="mb-10 flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 bg-blue-50 rounded-full flex items-center justify-center shadow-soft">
            <div
              className="absolute inset-0 rounded-full border-4 border-dashed border-primary/20 animate-spin"
              style={{ animationDuration: "15s" }}
            ></div>
            <span className="material-icons text-[8rem] sm:text-[10rem] text-primary">
              healing
            </span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-2 ml-6 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-slate-100">
              <span className="text-2xl font-bold text-slate-400">?</span>
            </div>
          </div>
        </div>
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-red-500 uppercase bg-red-50 rounded-full border border-red-100">
          {t("pages.notFound.hero.badge")}
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          {t("pages.notFound.hero.title")}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
          {t("pages.notFound.hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-soft hover:shadow-lg w-full sm:w-auto hover:-translate-y-0.5"
          >
            <span className="material-icons mr-2">home</span>
            {t("pages.notFound.actions.returnHome")}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 shadow-sm w-full sm:w-auto hover:-translate-y-0.5"
          >
            <span className="material-icons mr-2 text-slate-400">
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
