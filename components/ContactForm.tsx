import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { submitForm } from "../utils/formService";
import { contactFormSchema, validateField } from "../utils/validation";
import { CustomSelect } from "./CustomSelect";
import Button from "./Button";
import SendIcon from "./SendIcon";

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "general",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
    if (errors.subject) {
      setErrors((prev) => ({ ...prev, subject: "" }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Only validate on blur if:
    // 1. Field has a value (user typed something), OR
    // 2. Form was already submitted once
    if (value.trim() || hasSubmitted) {
      const error = validateField(contactFormSchema, name, value);
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setHasSubmitted(true);

    // Validate all fields
    const validation = contactFormSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const path = issue.path[0]?.toString();
        if (path && !fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("error");
      setErrorMessage(t("pages.contact.form.errorNotice"));
      return;
    }

    try {
      await submitForm(validation.data, "contact");
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        subject: "general",
        message: "",
      });
      setErrors({});
      setTouched({});
      setHasSubmitted(false);
    } catch (error) {
      setStatus("error");
      setErrorMessage(t("pages.contact.form.error"));
    }
  };

  if (status === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
          <span className="material-icons text-4xl">check_circle</span>
        </div>
        <h3
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--color-text)" }}
        >
          {t("pages.contact.form.success")}
        </h3>
        <p
          className="mb-8 max-w-xs"
          style={{ color: "var(--color-text-muted)" }}
        >
          {t("pages.contact.form.successDesc")}
        </p>
        <Button variant="secondary" size="sm" onClick={() => setStatus("idle")}>
          {t("pages.contact.form.sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
      <h3
        className="text-2xl font-bold mb-6"
        style={{ color: "var(--color-text)" }}
      >
        {t("pages.contact.form.title")}
      </h3>
      {status === "error" && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 flex items-start gap-2">
          <span className="material-icons text-lg mt-0.5">error_outline</span>
          <span>{errorMessage}</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            className="block text-sm font-medium mb-1"
            style={{ color: "var(--color-text)" }}
          >
            {t("pages.contact.form.labels.fullName")}
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={status === "submitting"}
            className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50"} focus:outline-none focus:ring-2 ${errors.fullName ? "focus:ring-red-500/50 focus:border-red-500" : "focus:ring-primary/50 focus:border-primary"} transition-all text-slate-800 placeholder-slate-400 disabled:opacity-60`}
            placeholder={t("pages.contact.form.placeholders.fullName")}
          />
          {errors.fullName && (touched.fullName || hasSubmitted) && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <span className="material-icons text-sm">error</span>
              {t(errors.fullName)}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-1"
            style={{ color: "var(--color-text)" }}
          >
            {t("pages.contact.form.labels.email")}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={status === "submitting"}
            className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50"} focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-500/50 focus:border-red-500" : "focus:ring-primary/50 focus:border-primary"} transition-all text-slate-800 placeholder-slate-400 disabled:opacity-60`}
            placeholder={t("pages.contact.form.placeholders.email")}
          />
          {errors.email && (touched.email || hasSubmitted) && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <span className="material-icons text-sm">error</span>
              {t(errors.email)}
            </p>
          )}
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-1"
          style={{ color: "var(--color-text)" }}
        >
          {t("pages.contact.form.labels.subject")}
        </label>
        <CustomSelect
          options={[
            {
              value: "general",
              label: t("pages.contact.form.subjects.general"),
            },
            {
              value: "appointment",
              label: t("pages.contact.form.subjects.appointment"),
            },
            {
              value: "feedback",
              label: t("pages.contact.form.subjects.feedback"),
            },
            {
              value: "billing",
              label: t("pages.contact.form.subjects.billing"),
            },
            {
              value: "other",
              label: t("pages.contact.form.subjects.other"),
            },
          ]}
          value={formData.subject}
          onChange={handleSubjectChange}
          icon="help_outline"
          placeholder={t("pages.contact.form.placeholders.subject")}
          error={
            errors.subject && (touched.subject || hasSubmitted)
              ? errors.subject
              : undefined
          }
        />
      </div>
      <div>
        <label
          className="block text-sm font-medium mb-1"
          style={{ color: "var(--color-text)" }}
        >
          {t("pages.contact.form.labels.message")}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={status === "submitting"}
          className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50"} focus:outline-none focus:ring-2 ${errors.message ? "focus:ring-red-500/50 focus:border-red-500" : "focus:ring-primary/50 focus:border-primary"} transition-all text-slate-800 placeholder-slate-400 min-h-[120px] max-h-60 disabled:opacity-60`}
          placeholder={t("pages.contact.form.placeholders.message")}
        ></textarea>
        {errors.message && (touched.message || hasSubmitted) && (
          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
            <span className="material-icons text-sm">error</span>
            {t(errors.message)}
          </p>
        )}
      </div>
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full gap-2 group/btn"
      >
        {status === "submitting"
          ? t("pages.contact.form.submitting")
          : t("pages.contact.form.submit")}
        {!status.startsWith("sub") && <SendIcon className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />}
      </Button>
    </form>
  );
};

export default ContactForm;
