import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import AppointmentForm from "./AppointmentForm";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    doctorName?: string;
    department?: string;
    serviceName?: string;
  } | null;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const modal = document.querySelector('[role="dialog"]');
    if (!modal) return;

    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    firstElement?.focus();
    return () => document.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-lg max-h-[90vh] transform rounded-2xl shadow-2xl transition-all animate-fade-in flex flex-col overflow-hidden"
        style={{
          backgroundColor: "var(--color-surface)",
          color: "var(--color-text)",
        }}
      >
        {/* Fixed Header */}
        <div className="shrink-0 p-8 pb-4 relative z-20">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full h-auto min-w-0"
            icon="close"
          />

          <div className="text-center sm:text-left">
            <div
              className="inline-flex items-center justify-center w-12 h-12 rounded-full text-primary mb-4"
              style={{ backgroundColor: "var(--color-primary-light)" }}
            >
              <span className="material-icons text-2xl">calendar_today</span>
            </div>
            <h3
              className="text-2xl font-bold leading-6"
              style={{ color: "var(--color-text)" }}
            >
              {t("components.appointmentModal.title")}
            </h3>
            <p
              className="mt-2 text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              {t("components.appointmentModal.subtitle")}
            </p>
          </div>
        </div>

        {/* Scrollable Body — delegates to AppointmentForm */}
        <div className="flex-1 overflow-y-auto p-8 pt-0 custom-scrollbar relative z-10">
          <AppointmentForm
            key={isOpen ? "open" : "closed"}
            initialData={initialData}
            navigate={navigate}
            onSuccess={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
