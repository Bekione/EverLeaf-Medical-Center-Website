import React, { useState } from "react";
import { Link } from "react-router-dom";
import { submitForm } from "../utils/formService";
import { appointmentFormSchema, validateField } from "../utils/validation";
import { CustomSelect } from "./CustomSelect";
import { useTranslation, Trans } from "react-i18next";
import Button from "./Button";

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}

interface AppointmentFormProps {
  /** Pre-fill values when opened from a specific doctor or service */
  initialData?: {
    doctorName?: string;
    department?: string;
    serviceName?: string;
    message?: string;
  } | null;
  /** Called on successful submission (after navigation is triggered) */
  onSuccess?: () => void;
  /** Called if you need the parent to know about status changes (optional) */
  onStatusChange?: (status: "idle" | "submitting" | "error") => void;
  /** Passed down when navigation should happen; if undefined the component
   *  calls window.location internally (fallback). In the modal, the parent
   *  passes `useNavigate()` result here. */
  navigate: (to: string, opts?: object) => void;
}

const DEPARTMENT_OPTIONS = [
  { value: "Cardiology", label: "Cardiology" },
  { value: "Neurology", label: "Neurology" },
  { value: "Pediatrics", label: "Pediatrics" },
  { value: "Surgery", label: "General Surgery" },
  { value: "Dental", label: "Dental" },
  { value: "Orthopedics", label: "Orthopedics" },
  { value: "Dermatology", label: "Dermatology" },
  { value: "Oncology", label: "Oncology" },
  { value: "Laboratory", label: "Laboratory" },
  { value: "Radiology", label: "Radiology" },
  { value: "Pharmacy", label: "Pharmacy" },
  { value: "Preventive Checkups", label: "Preventive Checkups" },
];

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialData,
  onSuccess,
  onStatusChange,
  navigate,
}) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: "",
    email: "",
    phone: "",
    department: initialData?.department ?? "",
    message: (() => {
      if (!initialData) return "";
      if (initialData.message) return initialData.message;
      if (initialData.serviceName)
        return t("components.appointmentModal.footer.preMessage.service", {
          serviceName: initialData.serviceName,
        });
      if (initialData.doctorName)
        return t("components.appointmentModal.footer.preMessage.doctor", {
          doctorName: initialData.doctorName,
        });
      return "";
    })(),
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const updateStatus = (s: "idle" | "submitting" | "error") => {
    setStatus(s);
    onStatusChange?.(s);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleDepartmentChange = (value: string) => {
    setFormData((prev) => ({ ...prev, department: value }));
    if (errors.department) setErrors((prev) => ({ ...prev, department: "" }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
    if (value.trim() || hasSubmitted) {
      const error = validateField(appointmentFormSchema, id, value);
      if (error) setErrors((prev) => ({ ...prev, [id]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateStatus("submitting");
    setErrorMessage("");
    setErrors({});
    setHasSubmitted(true);

    const validation = appointmentFormSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const path = issue.path[0]?.toString();
        if (path && !fieldErrors[path]) fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      updateStatus("error");
      setErrorMessage(t("components.appointmentModal.validation.error"));
      return;
    }

    try {
      await submitForm(validation.data, "appointment");

      const referenceId = `REQ-${Date.now().toString().slice(-6)}`;
      navigate("/appointment-confirmation", {
        state: {
          appointmentData: {
            fullName: validation.data.fullName,
            email: validation.data.email,
            phone: validation.data.phone,
            department:
              validation.data.department ||
              initialData?.department ||
              "General",
            doctorName: initialData?.doctorName,
            message: validation.data.message,
            referenceId,
            submittedAt: new Date().toISOString(),
          },
        },
      });

      onSuccess?.();
    } catch {
      updateStatus("error");
      setErrorMessage(t("components.appointmentModal.validation.submitError"));
    } finally {
      if (status !== "error") updateStatus("idle");
    }
  };

  // ─── helpers ────────────────────────────────────────────────
  const fieldStyle = (hasError: boolean) =>
    hasError
      ? {}
      : {
          backgroundColor: "var(--color-bg-alt)",
          borderColor: "var(--color-border)",
          color: "var(--color-text)",
        };

  const fieldClass = (hasError: boolean) =>
    `block w-full pl-10 rounded-lg border focus:outline-none focus:ring-2 focus:border-primary sm:text-sm py-2.5 placeholder-slate-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all ${
      hasError
        ? "border-red-300 bg-red-50 focus:ring-red-500/50 text-red-900"
        : "focus:ring-primary/50"
    }`;

  const FieldError = ({
    name,
    error,
  }: {
    name: string;
    error: string | undefined;
  }) => {
    if (!error || (!touched[name] && !hasSubmitted)) return null;
    return (
      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
        <span className="material-icons text-xs">error</span>
        {t(error)}
      </p>
    );
  };

  // ─── render ─────────────────────────────────────────────────
  return (
    <>
      {status === "error" && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
          <span className="material-icons text-lg mt-0.5">error_outline</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium mb-1"
            style={{ color: "var(--color-text)" }}
          >
            {t("components.appointmentModal.fields.fullName.label")}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <span className="material-icons text-lg">person</span>
            </div>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={status === "submitting"}
              className={fieldClass(!!errors.fullName)}
              style={fieldStyle(!!errors.fullName)}
              placeholder={t(
                "components.appointmentModal.fields.fullName.placeholder",
              )}
            />
          </div>
          <FieldError name="fullName" error={errors.fullName} />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--color-text)" }}
            >
              {t("components.appointmentModal.fields.email.label")}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-icons text-lg">email</span>
              </div>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === "submitting"}
                className={fieldClass(!!errors.email)}
                style={fieldStyle(!!errors.email)}
                placeholder={t(
                  "components.appointmentModal.fields.email.placeholder",
                )}
              />
            </div>
            <FieldError name="email" error={errors.email} />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--color-text)" }}
            >
              {t("components.appointmentModal.fields.phone.label")}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-icons text-lg">phone</span>
              </div>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === "submitting"}
                className={fieldClass(!!errors.phone)}
                style={fieldStyle(!!errors.phone)}
                placeholder={t(
                  "components.appointmentModal.fields.phone.placeholder",
                )}
              />
            </div>
            <FieldError name="phone" error={errors.phone} />
          </div>
        </div>

        {/* Department */}
        <div>
          <CustomSelect
            options={DEPARTMENT_OPTIONS}
            value={formData.department}
            onChange={handleDepartmentChange}
            placeholder={t(
              "components.appointmentModal.fields.department.placeholder",
            )}
            icon="local_hospital"
            maxHeight={13}
            error={
              errors.department && (touched.department || hasSubmitted)
                ? errors.department
                : undefined
            }
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1"
            style={{ color: "var(--color-text)" }}
          >
            {t("components.appointmentModal.fields.message.label")}
          </label>
          <textarea
            id="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={status === "submitting"}
            className={`block w-full max-h-[170px] rounded-lg border focus:outline-none focus:ring-2 focus:border-primary sm:text-sm p-3 placeholder-slate-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all ${
              errors.message
                ? "border-red-300 bg-red-50 focus:ring-red-500/50 text-red-900"
                : "focus:ring-primary/50"
            }`}
            style={fieldStyle(!!errors.message)}
            placeholder={t(
              "components.appointmentModal.fields.message.placeholder",
            )}
          />
          <FieldError name="message" error={errors.message} />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={status === "submitting"}
            className="w-full"
          >
            {status === "submitting" ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                {t("components.appointmentModal.status.processing")}
              </>
            ) : (
              t("components.appointmentModal.status.submit")
            )}
          </Button>
          <p
            className="mt-3 text-center text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Trans
              i18nKey="components.appointmentModal.footer.terms"
              components={{
                1: (
                  <Link
                    to="/privacy"
                    className="text-primary"
                    target="_blank"
                  />
                ),
              }}
            />
          </p>
        </div>
      </form>
    </>
  );
};

export default AppointmentForm;
