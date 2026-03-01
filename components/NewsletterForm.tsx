import React, { useState } from "react";
import { submitForm } from "../utils/formService";
import { newsletterFormSchema } from "../utils/validation";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import SendIcon from "./SendIcon";

interface NewsletterFormProps {
  variant?: "sidebar" | "section";
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({
  variant = "sidebar",
}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const validation = newsletterFormSchema.safeParse({ email });

    if (!validation.success) {
      setError(
        validation.error.issues[0]?.message ||
          t("footer.newsletter.invalidEmail"),
      );
      return;
    }

    setStatus("submitting");
    try {
      await submitForm(validation.data, "newsletter");
      setStatus("success");
      setEmail("");
      setError("");
    } catch {
      setStatus("error");
      setError(t("footer.newsletter.error"));
    }
  };

  if (status === "success") {
    return (
      <div
        className={`rounded-lg p-4 text-center ${variant === "section" ? "bg-blue-500/20" : "bg-white/10"} backdrop-blur-sm animate-fade-in`}
      >
        <span className="material-icons text-3xl mb-2 block text-white">
          check_circle
        </span>
        <p className="font-bold text-white">{t("footer.newsletter.success")}</p>
        <p className="text-xs text-blue-100 opacity-90">
          {t("footer.newsletter.successDesc")}
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setStatus("idle")}
          className="mt-2 text-white hover:text-white hover:bg-white/10"
        >
          {t("footer.newsletter.subscribeAnother")}
        </Button>
      </div>
    );
  }

  /* ── sidebar variant (used in Footer, Article sidebar) ─── */
  if (variant === "sidebar") {
    return (
      <form onSubmit={handleSubmit} className="relative z-10">
        <input
          type="email"
          id="newsletter-email"
          name="email"
          autoComplete="email"
          placeholder={t("footer.newsletter.placeholder")}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          disabled={status === "submitting"}
          className={`w-full rounded-lg border-0 bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white mb-3 px-4 py-2.5 transition-all ${error ? "ring-2 ring-red-400" : ""}`}
        />
        {error && (
          <p className="text-xs mb-2 flex items-center gap-1 text-red-200">
            <span className="material-icons text-xs">error</span>
            {error}
          </p>
        )}
        <Button
          type="submit"
          disabled={status === "submitting"}
          rounded="lg"
          animate={false}
          size="md"
          className="w-full py-2.5 uppercase tracking-wide text-xs gap-1.5 group/btn"
        >
          {status === "submitting"
            ? t("footer.newsletter.subscribing")
            : t("footer.newsletter.button")}
          {status !== "submitting" && <SendIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />}
        </Button>
      </form>
    );
  }

  /* ── section variant (used in Blog CTA hero) ────────────── */
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 relative z-10"
    >
      <div className="flex-1">
        {/* py-4 matches the Button lg size padding below */}
        <input
          type="email"
          id="newsletter-email-section"
          name="email"
          autoComplete="email"
          placeholder={t("footer.newsletter.placeholder")}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          disabled={status === "submitting"}
          className={`w-full rounded-lg border-0 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 px-6 py-4 text-slate-900 shadow-xl placeholder:text-slate-400 bg-white/95 transition-all ${error ? "ring-2 ring-red-500" : ""}`}
        />
        {error && (
          <p className="text-xs mt-1 flex items-center gap-1 text-red-300">
            <span className="material-icons text-xs">error</span>
            {error}
          </p>
        )}
      </div>
      {/* size="lg" → py-4 text-lg matches input's py-4 */}
      <Button
        type="submit"
        disabled={status === "submitting"}
        size="md"
        rounded="lg"
        animate={false}
        className="sm:w-auto w-full whitespace-nowrap gap-3 group/btn"
      >
        {status === "submitting"
          ? t("footer.newsletter.subscribing")
          : t("footer.newsletter.button")}
        {status !== "submitting" && <SendIcon className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />}
      </Button>
    </form>
  );
};

export default NewsletterForm;
