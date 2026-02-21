import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { EverleafLogo } from "./Logo";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  onBookAppointment: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookAppointment }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null,
  );
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path ? "text-primary" : "hover:text-primary";

  const getNavLinkStyle = (path: string) =>
    location.pathname === path
      ? { color: "var(--color-primary)" }
      : { color: "var(--color-text)" };

  const toggleMobileSubmenu = (menu: string) => {
    setExpandedMobileMenu(expandedMobileMenu === menu ? null : menu);
  };

  const getMobileLinkClass = (path: string) =>
    `block py-2 font-medium transition-colors ${
      location.pathname === path ? "text-primary font-bold" : ""
    }`;

  const getMobileSubLinkClass = (path: string) =>
    `block text-sm transition-colors py-1 ${
      location.pathname === path
        ? "text-primary font-semibold"
        : "hover:text-primary"
    }`;

  return (
    <>
      {/* Top Bar */}
      <div
        className="py-2 text-sm hidden md:block"
        style={{
          backgroundColor: "var(--color-footer-bg)",
          color: "white",
        }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <span className="material-icons text-base text-primary">
                phone
              </span>{" "}
              {t("nav.emergency")}: 911
            </span>
            <span className="flex items-center gap-2 opacity-80">
              <span className="material-icons text-base">schedule</span>{" "}
              {t("nav.schedule")}
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
            <div className="flex items-center space-x-4">
              <Link
                to="/gallery"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                {t("nav.gallery")}
              </Link>
              <span className="opacity-30">|</span>
              <Link
                to="/blog"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                {t("nav.media")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className="sticky top-0 z-40 backdrop-blur-md border-b transition-all duration-300"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-surface) 92%, transparent)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <EverleafLogo className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col">
                <span
                  className="text-xl lg:text-2xl font-brand font-semibold leading-none tracking-tight"
                  style={{ color: "var(--color-text)" }}
                >
                  {t("nav.brand")}
                </span>
                <span
                  className="text-[10px] lg:text-xs font-brand tracking-[0.2em] uppercase mt-0.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {t("nav.brandSub")}
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              <Link
                className={`${isActive("/")} text-sm xl:text-base font-medium transition-colors`}
                style={getNavLinkStyle("/")}
                to="/"
              >
                {t("nav.home")}
              </Link>
              <Link
                className={`${isActive("/about")} text-sm xl:text-base font-medium transition-colors`}
                style={getNavLinkStyle("/about")}
                to="/about"
              >
                {t("nav.about")}
              </Link>

              {/* Services Dropdown */}
              <div className="relative group/menu">
                <Link
                  to="/services"
                  className={`flex items-center gap-1 cursor-pointer text-sm xl:text-base font-medium transition-colors ${location.pathname.startsWith("/services") ? "text-primary" : "hover:text-primary"}`}
                  style={
                    location.pathname.startsWith("/services")
                      ? { color: "var(--color-primary)" }
                      : { color: "var(--color-text)" }
                  }
                >
                  {t("nav.services")}{" "}
                  <span className="material-icons text-sm transition-transform duration-300 group-hover/menu:rotate-180">
                    expand_more
                  </span>
                </Link>
                {/* Invisible hover bridge — fills the mt-2 gap so hover state isn't lost */}
                <div className="absolute top-full left-0 right-0 h-3" />
                <div
                  className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl border opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 transform translate-y-2 group-hover/menu:translate-y-0 z-[9999] py-2"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {[
                    {
                      to: "/services/diagnostics",
                      label: t("data.services.diagnostics.title"),
                    },
                    {
                      to: "/services/laboratory",
                      label: t("data.services.laboratory.title"),
                    },
                    {
                      to: "/services/imaging",
                      label: t("data.services.imaging.title"),
                    },
                    {
                      to: "/services/pharmacy",
                      label: t("data.services.pharmacy.title"),
                    },
                    {
                      to: "/services/emergency",
                      label: t("data.services.emergency.title"),
                    },
                    {
                      to: "/services/preventive-checkups",
                      label: t("data.services.preventive.title"),
                    },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-2.5 text-sm transition-all mx-1.5 rounded-md mb-0.5 last:mb-0 group/item"
                      style={{
                        color:
                          location.pathname === item.to
                            ? "var(--color-primary)"
                            : "var(--color-text)",
                        backgroundColor:
                          location.pathname === item.to
                            ? "color-mix(in srgb, var(--color-primary) 12%, transparent)"
                            : undefined,
                      }}
                      onMouseEnter={(e) => {
                        if (location.pathname !== item.to) {
                          e.currentTarget.style.backgroundColor =
                            "color-mix(in srgb, var(--color-primary) 8%, transparent)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (location.pathname !== item.to) {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      <span
                        className={`inline-block transition-transform duration-300 ${
                          location.pathname === item.to
                            ? "translate-x-1.5 font-semibold"
                            : "group-hover/item:translate-x-1.5"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Departments Dropdown */}
              <div className="relative group/menu">
                <Link
                  to="/departments"
                  className={`flex items-center gap-1 cursor-pointer text-sm xl:text-base font-medium transition-colors ${location.pathname.startsWith("/departments") ? "text-primary" : "hover:text-primary"}`}
                  style={
                    location.pathname.startsWith("/departments")
                      ? { color: "var(--color-primary)" }
                      : { color: "var(--color-text)" }
                  }
                >
                  {t("nav.departments")}{" "}
                  <span className="material-icons text-sm transition-transform duration-300 group-hover/menu:rotate-180">
                    expand_more
                  </span>
                </Link>
                {/* Invisible hover bridge — fills the mt-2 gap so hover state isn't lost */}
                <div className="absolute top-full left-0 right-0 h-3" />
                <div
                  className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl border opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 transform translate-y-2 group-hover/menu:translate-y-0 z-[9999] py-2"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {[
                    {
                      to: "/departments/cardiology",
                      label: t("data.departments.cardiology.name"),
                    },
                    {
                      to: "/departments/neurology",
                      label: t("data.departments.neurology.name"),
                    },
                    {
                      to: "/departments/pediatrics",
                      label: t("data.departments.pediatrics.name"),
                    },
                    {
                      to: "/departments/surgery",
                      label: t("data.departments.surgery.name"),
                    },
                    {
                      to: "/departments/dental",
                      label: t("data.departments.dental.name"),
                    },
                    {
                      to: "/departments/ophthalmology",
                      label: t("data.departments.ophthalmology.name"),
                    },
                    {
                      to: "/departments/laboratory",
                      label: t("data.departments.laboratory.name"),
                    },
                    {
                      to: "/departments/radiology",
                      label: t("data.departments.radiology.name"),
                    },
                    {
                      to: "/departments/rehabilitation",
                      label: t("data.departments.rehabilitation.name"),
                    },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block px-4 py-2.5 text-sm transition-all mx-1.5 rounded-md mb-0.5 last:mb-0 group/item"
                      style={{
                        color:
                          location.pathname === item.to
                            ? "var(--color-primary)"
                            : "var(--color-text)",
                        backgroundColor:
                          location.pathname === item.to
                            ? "color-mix(in srgb, var(--color-primary) 12%, transparent)"
                            : undefined,
                      }}
                      onMouseEnter={(e) => {
                        if (location.pathname !== item.to) {
                          e.currentTarget.style.backgroundColor =
                            "color-mix(in srgb, var(--color-primary) 8%, transparent)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (location.pathname !== item.to) {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }
                      }}
                    >
                      <span
                        className={`inline-block transition-transform duration-300 ${
                          location.pathname === item.to
                            ? "translate-x-1.5 font-semibold"
                            : "group-hover/item:translate-x-1.5"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                className={`${isActive("/doctors")} text-sm xl:text-base font-medium transition-colors`}
                style={getNavLinkStyle("/doctors")}
                to="/doctors"
              >
                {t("nav.doctors")}
              </Link>
              <Link
                className={`${isActive("/blog")} text-sm xl:text-base font-medium transition-colors`}
                style={getNavLinkStyle("/blog")}
                to="/blog"
              >
                {t("nav.blog")}
              </Link>
              <Link
                className={`${isActive("/gallery")} text-sm xl:text-base font-medium transition-colors`}
                style={getNavLinkStyle("/gallery")}
                to="/gallery"
              >
                {t("nav.gallery")}
              </Link>
              <Link
                className={`${isActive("/contact")} text-sm xl:text-base font-medium transition-colors`}
                style={getNavLinkStyle("/contact")}
                to="/contact"
              >
                {t("nav.contact")}
              </Link>
            </div>

            <div className="hidden lg:block">
              <button
                onClick={onBookAppointment}
                className="inline-flex items-center justify-center px-4 py-2 xl:px-6 xl:py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg hover:-translate-y-0.5"
              >
                <span className="hidden xl:inline">
                  {t("common.buttons.bookAppointment")}
                </span>
                <span className="xl:hidden">{t("common.buttons.book")}</span>
                <span className="material-icons text-sm ml-2">
                  arrow_forward
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-primary p-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                <span className="material-icons text-3xl">
                  {isMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden border-t py-4 px-6 shadow-lg animate-fade-in max-h-[80vh] overflow-y-auto"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex flex-col space-y-2">
              <Link
                onClick={() => setIsMenuOpen(false)}
                className={getMobileLinkClass("/")}
                to="/"
              >
                {t("nav.home")}
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className={getMobileLinkClass("/about")}
                to="/about"
              >
                {t("nav.about")}
              </Link>

              {/* Expandable Services Menu */}
              <div
                className="border-b py-2"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className={`flex justify-between items-center font-medium cursor-pointer ${location.pathname.startsWith("/services") ? "text-primary" : ""}`}
                  style={
                    !location.pathname.startsWith("/services")
                      ? { color: "var(--color-text)" }
                      : {}
                  }
                  onClick={() => toggleMobileSubmenu("services")}
                >
                  <span>{t("nav.services")}</span>
                  <span
                    className={`material-icons text-sm transition-transform duration-300 ${expandedMobileMenu === "services" ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === "services" ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <div
                    className="pl-4 border-l-2 space-y-2 mb-2"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services")}
                      to="/services"
                    >
                      {t("data.services.all")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services/diagnostics")}
                      to="/services/diagnostics"
                    >
                      {t("data.services.diagnostics.title")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services/laboratory")}
                      to="/services/laboratory"
                    >
                      {t("data.services.laboratory.title")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services/imaging")}
                      to="/services/imaging"
                    >
                      {t("data.services.imaging.title")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services/pharmacy")}
                      to="/services/pharmacy"
                    >
                      {t("data.services.pharmacy.title")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services/emergency")}
                      to="/services/emergency"
                    >
                      {t("data.services.emergency.title")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/services/preventive-checkups",
                      )}
                      to="/services/preventive-checkups"
                    >
                      {t("data.services.preventive.title")}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Expandable Departments Menu */}
              <div
                className="border-b py-2"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className={`flex justify-between items-center font-medium cursor-pointer ${location.pathname.startsWith("/departments") ? "text-primary" : ""}`}
                  style={
                    !location.pathname.startsWith("/departments")
                      ? { color: "var(--color-text)" }
                      : {}
                  }
                  onClick={() => toggleMobileSubmenu("departments")}
                >
                  <span>{t("nav.departments")}</span>
                  <span
                    className={`material-icons text-sm transition-transform duration-300 ${expandedMobileMenu === "departments" ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === "departments" ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <div
                    className="pl-4 border-l-2 space-y-2 mb-2"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/departments")}
                      to="/departments"
                    >
                      {t("data.departments.all.name")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/departments/cardiology",
                      )}
                      to="/departments/cardiology"
                    >
                      {t("data.departments.cardiology.name")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/departments/neurology",
                      )}
                      to="/departments/neurology"
                    >
                      {t("data.departments.neurology.name")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/departments/pediatrics",
                      )}
                      to="/departments/pediatrics"
                    >
                      {t("data.departments.pediatrics.name")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/departments/surgery")}
                      to="/departments/surgery"
                    >
                      {t("data.departments.surgery.name")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/departments/dental")}
                      to="/departments/dental"
                    >
                      {t("data.departments.dental.name")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/departments/ophthalmology",
                      )}
                      to="/departments/ophthalmology"
                    >
                      {t("data.departments.ophthalmology.name")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services/laboratory")}
                      to="/services/laboratory"
                    >
                      {t("data.departments.laboratory.name")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/departments/radiology",
                      )}
                      to="/departments/radiology"
                    >
                      {t("data.departments.radiology.name")}
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/departments/rehabilitation",
                      )}
                      to="/departments/rehabilitation"
                    >
                      {t("data.departments.rehabilitation.name")}
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                onClick={() => setIsMenuOpen(false)}
                className={getMobileLinkClass("/doctors")}
                to="/doctors"
              >
                {t("nav.doctors")}
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className={getMobileLinkClass("/blog")}
                to="/blog"
              >
                {t("nav.blog")}
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className={getMobileLinkClass("/gallery")}
                to="/gallery"
              >
                {t("nav.gallery")}
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className={getMobileLinkClass("/contact")}
                to="/contact"
              >
                {t("nav.contact")}
              </Link>
              <div className="py-4 border-t border-white/10">
                <LanguageSwitcher />
              </div>
              <button
                onClick={() => {
                  onBookAppointment();
                  setIsMenuOpen(false);
                }}
                className="w-full text-center py-3 mt-4 text-white bg-primary rounded-lg font-bold"
              >
                {t("common.buttons.bookAppointment")}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
