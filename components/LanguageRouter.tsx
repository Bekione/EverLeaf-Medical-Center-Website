import React, { useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import i18n from "../i18n/config";

const SUPPORTED_LANGS = ["en", "fr", "am"] as const;
type SupportedLang = (typeof SUPPORTED_LANGS)[number];

/**
 * Wraps all lang-prefixed routes.
 * - Reads the `lang` URL param and syncs it with i18next.
 * - Redirects to /en if an unsupported lang code is used.
 */
const LanguageRouter: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!lang || !SUPPORTED_LANGS.includes(lang as SupportedLang)) {
      // Unknown lang prefix → redirect to /en keeping the rest of the path
      const currentPath = window.location.pathname;
      const segments = currentPath.split("/").filter(Boolean);
      // Strip first segment if it looks like a lang code attempt
      const rest = segments.length > 0 ? segments.slice(1).join("/") : "";
      navigate(`/en${rest ? `/${rest}` : ""}`, { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    document.documentElement.lang = lang;
  }, [lang, navigate]);

  return <Outlet />;
};

export default LanguageRouter;
