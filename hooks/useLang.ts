import { useParams, useNavigate } from "react-router-dom";
import i18n from "../i18n/config";

const SUPPORTED_LANGS = ["en", "fr", "am"];

/**
 * Returns the current language code from either the URL param or i18next.
 */
export function useLang(): string {
  const { lang } = useParams<{ lang?: string }>();
  if (lang && SUPPORTED_LANGS.includes(lang)) return lang;
  const i18nLang = i18n.language?.split("-")[0];
  return SUPPORTED_LANGS.includes(i18nLang) ? i18nLang : "en";
}

/**
 * Returns a function that builds a language-prefixed path.
 * Example: buildPath("/about") → "/en/about"
 */
export function useLangPath() {
  const lang = useLang();
  return (path: string) => {
    const normalized = path === "/" ? "" : path;
    return `/${lang}${normalized}`;
  };
}

/**
 * Returns a navigate function that preserves the current lang prefix.
 * Useful for switching language while staying on the same page.
 */
export function useLangNavigate() {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang?: string }>();

  return (newLang: string) => {
    const currentPath = window.location.pathname;
    // Replace the lang segment at the start of the path
    const withoutLang = lang
      ? currentPath.replace(new RegExp(`^/${lang}`), "")
      : currentPath;
    navigate(`/${newLang}${withoutLang || "/"}`);
  };
}
