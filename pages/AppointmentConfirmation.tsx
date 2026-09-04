import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { useTranslation, Trans } from "react-i18next";
import { useLangPath } from "../hooks/useLang";

interface AppointmentData {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  doctorName?: string;
  message?: string;
  referenceId: string;
  submittedAt: string;
}

const AppointmentConfirmation: React.FC = () => {
  const { t } = useTranslation();
  const buildPath = useLangPath();
  const location = useLocation();
  const navigate = useNavigate();
  const appointmentData = (
    location.state as { appointmentData?: AppointmentData }
  )?.appointmentData;

  useEffect(() => {
    // Redirect to home if accessed without valid appointment data
    if (!appointmentData) {
      navigate(buildPath("/"), { replace: true });
    }
  }, [appointmentData, navigate, buildPath]);

  // Don't render anything if no data (will redirect)
  if (!appointmentData) {
    return null;
  }

  const formattedDate = new Date(
    appointmentData.submittedAt,
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="grow flex items-center justify-center py-20 relative overflow-hidden min-h-[70vh] bg-bg-alt">
      <SEO
        title={t("pages.appointmentConfirmation.hero.title", {
          name: appointmentData.fullName,
        })}
        description={t("pages.appointmentConfirmation.hero.subtitle", {
          email: appointmentData.email,
          phone: appointmentData.phone,
        })}
        noindex
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          robots: "noindex",
        }}
      />
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto bg-surface rounded-2xl shadow-card border border-border overflow-hidden animate-fade-in">
          <div className="p-10 md:p-14 text-center">
            <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <span className="material-icons text-6xl text-secondary">
                check_circle
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
              {t("pages.appointmentConfirmation.hero.title", {
                name: appointmentData.fullName,
              })}
            </h1>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              <Trans
                i18nKey="pages.appointmentConfirmation.hero.subtitle"
                values={{
                  email: appointmentData.email,
                  phone: appointmentData.phone,
                }}
                components={[<strong key="0" />]}
              />
            </p>
            <div className="bg-bg-alt rounded-xl p-6 mb-10 text-left border border-border">
              <h3 className="text-sm uppercase tracking-wider text-muted font-semibold mb-4 border-b border-border pb-2">
                {t("pages.appointmentConfirmation.summary.title")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <span className="block text-xs text-muted mb-1">
                    {t(
                      "pages.appointmentConfirmation.summary.labels.patientName",
                    )}
                  </span>
                  <span className="block text-base font-medium text-text">
                    {appointmentData.fullName}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-muted mb-1">
                    {t(
                      "pages.appointmentConfirmation.summary.labels.department",
                    )}
                  </span>
                  <span className="block text-base font-medium text-text">
                    {appointmentData.department}
                  </span>
                </div>
                {appointmentData.doctorName && (
                  <div>
                    <span className="block text-xs text-muted mb-1">
                      {t("pages.appointmentConfirmation.summary.labels.doctor")}
                    </span>
                    <span className="block text-base font-medium text-text">
                      {appointmentData.doctorName}
                    </span>
                  </div>
                )}
                <div>
                  <span className="block text-xs text-muted mb-1">
                    {t(
                      "pages.appointmentConfirmation.summary.labels.submittedOn",
                    )}
                  </span>
                  <span className="block text-base font-medium text-text">
                    {formattedDate}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-muted mb-1">
                    {t("pages.appointmentConfirmation.summary.labels.email")}
                  </span>
                  <span className="block text-base font-medium text-text">
                    {appointmentData.email}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-muted mb-1">
                    {t("pages.appointmentConfirmation.summary.labels.phone")}
                  </span>
                  <span className="block text-base font-medium text-text">
                    {appointmentData.phone}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="block text-xs text-muted mb-1">
                    {t(
                      "pages.appointmentConfirmation.summary.labels.referenceId",
                    )}
                  </span>
                  <span className="block text-base font-medium text-text font-mono bg-primary/10 px-2 py-0.5 rounded inline-block">
                    #{appointmentData.referenceId}
                  </span>
                </div>
                {appointmentData.message && (
                  <div className="sm:col-span-2">
                    <span className="block text-xs text-muted mb-1">
                      {t("pages.appointmentConfirmation.summary.labels.notes")}
                    </span>
                    <span className="block text-sm text-text bg-surface p-3 rounded border border-border">
                      {appointmentData.message}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={buildPath("/")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary rounded-lg hover:opacity-90 shadow-soft hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="material-icons text-sm mr-2">home</span>
                {t("pages.appointmentConfirmation.actions.returnHome")}
              </Link>
              <Link
                to={buildPath("/blog")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-text bg-surface border border-border rounded-lg hover:bg-bg-alt transition-colors"
              >
                <span className="material-icons text-sm mr-2">article</span>
                {t("pages.appointmentConfirmation.actions.exploreBlog")}
              </Link>
            </div>
          </div>
          <div className="bg-primary/5 p-4 text-center border-t border-border">
            <p className="text-sm text-primary flex items-center justify-center gap-2">
              <span className="material-icons text-sm">verified_user</span>
              {t("pages.appointmentConfirmation.footer.secure")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
