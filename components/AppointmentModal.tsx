import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitForm } from "../utils/formService";
import { appointmentFormSchema, validateField } from "../utils/validation";

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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Reset or pre-fill form when modal opens with data
  useEffect(() => {
    if (isOpen) {
      // Reset state on open
      setStatus("idle");
      setErrorMessage("");

      let defaultMessage = "";
      let defaultDept = "";

      if (initialData) {
        if (initialData.serviceName) {
          defaultMessage = `I am interested in booking the ${initialData.serviceName}.`;
        } else if (initialData.doctorName) {
          defaultMessage = `I would like to book an appointment with ${initialData.doctorName}.`;
        }
        if (initialData.department) {
          defaultDept = initialData.department;
        }
      }

      setFormData((prev) => ({
        ...prev,
        message: defaultMessage || prev.message,
        department: defaultDept || prev.department,
      }));
    }
  }, [isOpen, initialData]);

  // Keyboard navigation: Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Focus trap: Keep tab navigation within modal
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
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    // Auto-focus first element when modal opens
    firstElement?.focus();

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));

    // Only validate on blur if field has value OR form was submitted
    if (value.trim() || hasSubmitted) {
      const error = validateField(appointmentFormSchema, id, value);
      if (error) {
        setErrors((prev) => ({ ...prev, [id]: error }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    setErrors({});
    setHasSubmitted(true);

    // Validate all fields with Zod
    const validation = appointmentFormSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("error");
      setErrorMessage("Please correct the errors highlighted below.");
      return; // STOP submission if validation fails
    }

    try {
      // Submit validated data
      await submitForm(validation.data, "appointment");

      // Success Handling
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

      onClose();
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        department: "",
        message: "",
      });
      setErrors({});
      setTouched({});
      setHasSubmitted(false);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Failed to submit appointment request. Please try again.",
      );
    } finally {
      if (status !== "error") {
        setStatus("idle");
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      {/* Added max-h and overflow-y-auto for better scroll handling on small screens */}
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl p-8 shadow-2xl transition-all animate-fade-in flex flex-col"
        style={{
          backgroundColor: "var(--color-surface)",
          color: "var(--color-text)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 transition-colors focus:outline-none z-10"
          style={{ color: "var(--color-text-muted)" }}
        >
          <span className="material-icons text-2xl">close</span>
        </button>

        <div className="mb-8 text-center sm:text-left flex-shrink-0">
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
            Request an Appointment
          </h3>
          <p
            className="mt-2 text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            Fill out the form below and our team will contact you to confirm
            your slot.
          </p>
        </div>

        {status === "error" && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-start gap-2">
            <span className="material-icons text-lg mt-0.5">error_outline</span>
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 flex-grow">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--color-text)" }}
            >
              Full Name
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
                className={`block w-full pl-10 rounded-lg border focus:outline-none focus:ring-2 focus:border-primary sm:text-sm py-2.5 placeholder-slate-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all ${errors.fullName ? "border-red-300 bg-red-50 focus:ring-red-500/50 text-red-900" : "focus:ring-primary/50"}`}
                style={
                  errors.fullName
                    ? {}
                    : {
                        backgroundColor: "var(--color-bg-alt)",
                        borderColor: "var(--color-border)",
                        color: "var(--color-text)",
                      }
                }
                placeholder="John Doe"
              />
            </div>
            {errors.fullName && (touched.fullName || hasSubmitted) && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <span className="material-icons text-xs">error</span>
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--color-text)" }}
              >
                Email Address
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
                  className={`block w-full pl-10 rounded-lg border focus:outline-none focus:ring-2 focus:border-primary sm:text-sm py-2.5 placeholder-slate-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all ${errors.email ? "border-red-300 bg-red-50 focus:ring-red-500/50 text-red-900" : "focus:ring-primary/50"}`}
                  style={
                    errors.email
                      ? {}
                      : {
                          backgroundColor: "var(--color-bg-alt)",
                          borderColor: "var(--color-border)",
                          color: "var(--color-text)",
                        }
                  }
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (touched.email || hasSubmitted) && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <span className="material-icons text-xs">error</span>
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-1"
                style={{ color: "var(--color-text)" }}
              >
                Phone Number
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
                  className={`block w-full pl-10 rounded-lg border focus:outline-none focus:ring-2 focus:border-primary sm:text-sm py-2.5 placeholder-slate-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all ${errors.phone ? "border-red-300 bg-red-50 focus:ring-red-500/50 text-red-900" : "focus:ring-primary/50"}`}
                  style={
                    errors.phone
                      ? {}
                      : {
                          backgroundColor: "var(--color-bg-alt)",
                          borderColor: "var(--color-border)",
                          color: "var(--color-text)",
                        }
                  }
                  placeholder="(555) 000-0000"
                />
              </div>
              {errors.phone && (touched.phone || hasSubmitted) && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <span className="material-icons text-xs">error</span>
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--color-text)" }}
            >
              Preferred Department
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-icons text-lg">local_hospital</span>
              </div>
              <select
                id="department"
                value={formData.department}
                onChange={handleChange}
                disabled={status === "submitting"}
                className={`block w-full pl-10 rounded-lg border focus:outline-none focus:ring-2 focus:border-primary sm:text-sm py-2.5 disabled:opacity-70 disabled:cursor-not-allowed transition-all ${errors.department ? "border-red-300 bg-red-50 focus:ring-red-500/50 text-red-900" : "focus:ring-primary/50"}`}
                style={
                  errors.department
                    ? {}
                    : {
                        backgroundColor: "var(--color-bg-alt)",
                        borderColor: "var(--color-border)",
                        color: "var(--color-text)",
                      }
                }
              >
                <option value="">Choose a department...</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Surgery">General Surgery</option>
                <option value="Dental">Dental</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Oncology">Oncology</option>
                <option value="Laboratory">Laboratory</option>
                <option value="Radiology">Radiology</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Preventive Checkups">Preventive Checkups</option>
              </select>
            </div>
            {errors.department && (touched.department || hasSubmitted) && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <span className="material-icons text-xs">error</span>
                {errors.department}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--color-text)" }}
            >
              Message (Optional)
            </label>
            <textarea
              id="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={status === "submitting"}
              className={`block w-full max-h-[170px] rounded-lg border focus:outline-none focus:ring-2 focus:border-primary sm:text-sm p-3 placeholder-slate-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all ${errors.message ? "border-red-300 bg-red-50 focus:ring-red-500/50 text-red-900" : "focus:ring-primary/50"}`}
              style={
                errors.message
                  ? {}
                  : {
                      backgroundColor: "var(--color-bg-alt)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text)",
                    }
              }
              placeholder="Briefly describe your symptoms or reason for visit..."
            ></textarea>
            {errors.message && (touched.message || hasSubmitted) && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <span className="material-icons text-xs">error</span>
                {errors.message}
              </p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-80 disabled:cursor-wait"
            >
              {status === "submitting" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                  Processing...
                </>
              ) : (
                "Submit Request"
              )}
            </button>
            <p
              className="mt-3 text-center text-xs"
              style={{ color: "var(--color-text-muted)" }}
            >
              By submitting, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
