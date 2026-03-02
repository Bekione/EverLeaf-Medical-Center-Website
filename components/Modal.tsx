import React, { useEffect } from "react";
import Button from "./Button";
import ScrollFade from "./ScrollFade";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  icon?: string;
  iconBgColor?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  icon,
  iconBgColor = "var(--color-primary-light)",
  children,
  footer,
  maxWidth = "max-w-lg",
}) => {
  // Prevent scrolling on the body when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-99999 flex items-center justify-center p-4 sm:p-6"
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
        className={`relative w-full ${maxWidth} max-h-[90vh] transform rounded-2xl shadow-2xl transition-all animate-fade-in flex flex-col overflow-hidden`}
        style={{
          backgroundColor: "var(--color-surface)",
          color: "var(--color-text)",
        }}
      >
        {/* Fixed Header */}
        <div className="shrink-0 px-8 pt-6 pb-4 relative z-20">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-between mb-4">
              {icon && (
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full text-primary"
                  style={{ backgroundColor: iconBgColor }}
                >
                  <span className="material-icons text-2xl">{icon}</span>
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="w-12 h-12 p-2 rounded-full min-w-0 ml-auto"
                icon="close"
                animate={false}
                rounded="full"
              />
            </div>
            <h3
              className="text-2xl font-bold leading-6"
              style={{ color: "var(--color-text)" }}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Scrollable Body */}
        <ScrollFade
          direction="vertical"
          fadeSize={48}
          className="flex-1 relative z-10 flex flex-col min-h-0"
        >
          <div className="overflow-y-auto p-8 pt-0 custom-scrollbar h-full">
            {children}

            {footer && (
              <div
                className="mt-8 pt-6 border-t"
                style={{ borderColor: "var(--color-border)" }}
              >
                {footer}
              </div>
            )}
          </div>
        </ScrollFade>
      </div>
    </div>
  );
};

export default Modal;
