import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { submitForm } from "../utils/formService";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { contactFormSchema, validateField } from "../utils/validation";
import { CustomSelect } from "../components/CustomSelect";

const Contact: React.FC = () => {
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
  const [hasSubmitted, setHasSubmitted] = useState(false); // Track if form was submitted
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
    setHasSubmitted(true); // Mark form as submitted

    // Validate all fields
    const validation = contactFormSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("error");
      setErrorMessage("Please correct the errors below.");
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
      setHasSubmitted(false); // Reset for next message
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="animate-fade-in">
      <SEO
        title={t("nav.contact")}
        description={t("pages.contact.hero.subtitle")}
        canonical="https://everleaf-medical.com/contact"
      />
      <header
        className="relative border-b min-h-[500px] flex items-center overflow-hidden"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
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
                <h1
                  className="text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight"
                  style={{ color: "var(--color-text)" }}
                >
                  {t("pages.contact.hero.titleStart")} <br />
                  <span className="text-primary">
                    {t("pages.contact.hero.titleHighlight")}
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={80}>
                <p
                  className="text-lg leading-relaxed mb-10"
                  style={{ color: "var(--color-text-muted)" }}
                >
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
                      <span
                        className="text-3xl font-bold"
                        style={{ color: "var(--color-text)" }}
                      >
                        {t("pages.contact.emergency.phone")}
                      </span>
                    </div>
                    <p
                      className="text-sm mt-2"
                      style={{ color: "var(--color-text-muted)" }}
                    >
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
                      <p
                        className="text-xl font-bold"
                        style={{ color: "var(--color-text)" }}
                      >
                        {t("pages.contact.inquiries.phone")}
                      </p>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--color-text-muted)" }}
                      >
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
                      <ul
                        className="text-sm space-y-1"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        <li className="flex justify-between w-40">
                          <span>{t("pages.contact.hours.monFri")}:</span>{" "}
                          <span className="font-medium">8:00 - 20:00</span>
                        </li>
                        <li className="flex justify-between w-40">
                          <span>{t("pages.contact.hours.sat")}:</span>{" "}
                          <span className="font-medium">9:00 - 18:00</span>
                        </li>
                        <li className="flex justify-between w-40">
                          <span>{t("pages.contact.hours.sun")}:</span>{" "}
                          <span className="font-medium">9:00 - 14:00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal from="right" delay={120}>
              <div
                className="p-8 rounded-2xl shadow-xl border"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                {status === "success" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                      <span className="material-icons text-4xl">
                        check_circle
                      </span>
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
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2 font-semibold rounded-lg transition-colors"
                      style={{
                        backgroundColor: "var(--color-bg-alt)",
                        color: "var(--color-text)",
                      }}
                    >
                      {t("pages.contact.form.sendAnother")}
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5 animate-fade-in"
                  >
                    <h3
                      className="text-2xl font-bold mb-6"
                      style={{ color: "var(--color-text)" }}
                    >
                      {t("pages.contact.form.title")}
                    </h3>
                    {status === "error" && (
                      <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 flex items-start gap-2">
                        <span className="material-icons text-lg mt-0.5">
                          error_outline
                        </span>
                        <span>
                          {errorMessage || t("pages.contact.form.error")}
                        </span>
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
                          placeholder={t(
                            "pages.contact.form.placeholders.fullName",
                          )}
                        />
                        {errors.fullName &&
                          (touched.fullName || hasSubmitted) && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <span className="material-icons text-sm">
                                error
                              </span>
                              {errors.fullName}
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
                          placeholder={t(
                            "pages.contact.form.placeholders.email",
                          )}
                        />
                        {errors.email && (touched.email || hasSubmitted) && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <span className="material-icons text-sm">
                              error
                            </span>
                            {errors.email}
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
                        placeholder={t(
                          "pages.contact.form.placeholders.subject",
                        )}
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
                        placeholder={t(
                          "pages.contact.form.placeholders.message",
                        )}
                      ></textarea>
                      {errors.message && (touched.message || hasSubmitted) && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <span className="material-icons text-sm">error</span>
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-3.5 px-6 text-white font-bold bg-primary hover:bg-primary-dark rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-wait"
                    >
                      {status === "submitting"
                        ? t("pages.contact.form.submitting")
                        : t("pages.contact.form.submit")}
                      {!status.startsWith("sub") && (
                        <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                          near_me
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-200 relative">
        <iframe
          title="Hospital Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1653316669938!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Reveal from="left" threshold={0.1}>
          <div
            className="absolute bottom-6 left-6 right-6 md:left-auto md:right-12 md:w-96 p-6 rounded-xl shadow-2xl border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h4
              className="font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--color-text)" }}
            >
              <span className="material-icons text-primary">directions</span>{" "}
              {t("pages.contact.directions.title")}
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-primary shrink-0"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <span className="material-icons text-sm">directions_bus</span>
                </div>
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t("pages.contact.directions.transit.title")}
                  </p>
                  <p style={{ color: "var(--color-text-muted)" }}>
                    {t("pages.contact.directions.transit.desc")}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-primary shrink-0"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <span className="material-icons text-sm">local_parking</span>
                </div>
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {t("pages.contact.directions.parking.title")}
                  </p>
                  <p style={{ color: "var(--color-text-muted)" }}>
                    {t("pages.contact.directions.parking.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Contact;
