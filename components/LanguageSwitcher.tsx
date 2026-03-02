import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  {
    code: "en",
    name: "English",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 480"
        className="w-5 h-4 object-cover rounded-sm shadow-sm"
      >
        <path fill="#bd3d44" d="M0 0h640v480H0z" />
        <path
          stroke="#fff"
          strokeWidth="37"
          d="M0 55.4h640m0 73.8H0m0 73.9h640m0 73.8H0m0 73.9h640m0 73.8H0"
        />
        <path fill="#192f5d" d="M0 0h256v258.5H0z" />
        <g fill="#fff">
          <g id="v">
            <g id="w">
              <path
                id="x"
                d="M30 33.6l4.2 13h13.6l-11 8 4.2 13-11-8-11 8 4.2-13-11-8h13.6z"
              />
              <use href="#x" y="61.5" />
              <use href="#x" y="123" />
              <use href="#x" y="184.6" />
            </g>
            <use href="#w" x="32" />
          </g>
          <use href="#v" x="64" />
          <use href="#v" x="128" />
          <use href="#x" x="192" />
          <use href="#x" x="192" y="61.5" />
          <use href="#x" x="192" y="123" />
          <use href="#x" x="192" y="184.6" />
        </g>
      </svg>
    ),
  },
  {
    code: "am",
    name: "አማርኛ",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 480"
        className="w-5 h-4 object-cover rounded-sm shadow-sm"
      >
        <path fill="#2E6B2E" d="M0 0h640v160H0z" />
        <path fill="#F9D616" d="M0 160h640v160H0z" />
        <path fill="#C8102E" d="M0 320h640v160H0z" />
        <circle cx="320" cy="240" r="100" fill="#0033A0" />
        <path
          fill="none"
          stroke="#F9D616"
          strokeWidth="6.5"
          d="m320 157.8 24.2 74.4h78.2l-63.3 46 24.2 74.4-63.3-46-63.3 46 24.2-74.4-63.3-46h78.2z"
        />
      </svg>
    ),
  },
  {
    code: "fr",
    name: "Français",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 480"
        className="w-5 h-4 object-cover rounded-sm shadow-sm"
      >
        <path fill="#002395" d="M0 0h213.3v480H0z" />
        <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
        <path fill="#ed2939" d="M426.7 0H640v480H426.7z" />
      </svg>
    ),
  },
];

interface LanguageSwitcherProps {
  variant?: "navbar" | "menu";
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = "navbar",
}) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
    // Update HTML lang attribute for SEO
    document.documentElement.lang = lng;
  };

  const isNavbar = variant === "navbar";

  return (
    <div
      className={`z-99999 ${isNavbar ? "relative" : "w-full"}`}
      ref={dropdownRef}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-semibold w-full sm:w-auto ${
          isNavbar
            ? "bg-white/10 hover:bg-white/20 text-white"
            : "bg-bg-alt text-text border border-border"
        }`}
      >
        <span className="text-base leading-none flex items-center">
          {currentLanguage.flag}
        </span>
        <span className={isNavbar ? "hidden sm:inline" : "inline"}>
          {currentLanguage.name}
        </span>
        <span
          className={`material-icons text-xs transition-transform ml-auto sm:ml-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ color: isNavbar ? "white" : "var(--color-text-muted)" }}
        >
          {isNavbar ? "expand_more" : "keyboard_arrow_down"}
        </span>
      </button>

      {isOpen && (
        <div
          className={`${
            isNavbar
              ? "absolute right-0 mt-2 w-48 shadow-2xl"
              : "relative mt-2 w-full shadow-sm"
          } py-2 rounded-xl border z-99999 animate-in fade-in slide-in-from-top-2 duration-200`}
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-11/12 mx-auto flex items-center gap-3 px-4 py-3 text-sm rounded-lg overflow-hidden transition-colors relative group ${
                i18n.language === lang.code
                  ? "bg-primary/10"
                  : "hover:bg-primary/10"
              }`}
              style={{
                color:
                  i18n.language === lang.code
                    ? "var(--color-primary)"
                    : "var(--color-text)",
              }}
            >
              <span className="text-lg leading-none">{lang.flag}</span>
              <span
                className={`flex-1 text-left ${
                  i18n.language === lang.code ? "font-bold" : ""
                }`}
              >
                {lang.name}
              </span>
              {i18n.language === lang.code && (
                <span
                  className="material-icons text-xs"
                  style={{ color: "var(--color-primary)" }}
                >
                  check
                </span>
              )}

              {/* Hover highlight */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
