import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { EverleafLogo } from "./Logo";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Button from "./Button";
import {
  topLevelLinks,
  trailingLinks,
  servicesDropdown,
  departmentsDropdown,
  mobileServicesItems,
  mobileDepartmentsItems,
  type DropdownNavGroup,
} from "../data/navigation";

interface HeaderProps {
  onBookAppointment: () => void;
}

// ─── sub-components ──────────────────────────────────────────

interface DesktopDropdownProps {
  group: DropdownNavGroup;
  currentPath: string;
}

const DesktopDropdown: React.FC<DesktopDropdownProps> = ({
  group,
  currentPath,
}) => {
  const { t } = useTranslation();
  const isGroupActive = currentPath.startsWith(group.basePath);

  return (
    <div className="relative group/menu">
      <Link
        to={group.basePath}
        className={`flex items-center gap-1 cursor-pointer text-sm xl:text-base font-medium transition-colors ${isGroupActive ? "text-primary" : "hover:text-primary"}`}
        style={
          isGroupActive
            ? { color: "var(--color-primary)" }
            : { color: "var(--color-text)" }
        }
      >
        {t(group.labelKey)}{" "}
        <span className="material-icons text-sm transition-transform duration-300 group-hover/menu:rotate-180">
          expand_more
        </span>
      </Link>
      {/* Invisible hover bridge — prevents gap between trigger and panel */}
      <div className="absolute top-full left-0 right-0 h-3" />
      <div
        className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl border opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 transform translate-y-2 group-hover/menu:translate-y-0 z-9999 py-2"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        {group.items.map((item) => {
          const isActive = currentPath === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="block px-4 py-2.5 text-sm transition-all mx-1.5 rounded-md mb-0.5 last:mb-0 group/item"
              style={{
                color: isActive ? "var(--color-primary)" : "var(--color-text)",
                backgroundColor: isActive
                  ? "color-mix(in srgb, var(--color-primary) 12%, transparent)"
                  : undefined,
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  e.currentTarget.style.backgroundColor =
                    "color-mix(in srgb, var(--color-primary) 8%, transparent)";
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <span
                className={`inline-block transition-transform duration-300 ${
                  isActive
                    ? "translate-x-1.5 font-semibold"
                    : "group-hover/item:translate-x-1.5"
                }`}
              >
                {t(item.labelKey)}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

// ─── main component ──────────────────────────────────────────

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

  const toggleMobileSubmenu = (menu: string) =>
    setExpandedMobileMenu(expandedMobileMenu === menu ? null : menu);

  const getMobileLinkClass = (path: string) =>
    `block py-2 font-medium transition-colors ${location.pathname === path ? "text-primary font-bold" : ""}`;

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
        style={{ backgroundColor: "var(--color-footer-bg)", color: "white" }}
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
            <LanguageSwitcher variant="navbar" />
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
        className="sticky top-0 z-9999 backdrop-blur-md border-b transition-all duration-300"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-surface) 92%, transparent)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
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
              {topLevelLinks.map((link) => (
                <Link
                  key={link.to}
                  className={`${isActive(link.to)} text-sm xl:text-base font-medium transition-colors`}
                  style={getNavLinkStyle(link.to)}
                  to={link.to}
                >
                  {t(link.labelKey)}
                </Link>
              ))}

              <DesktopDropdown
                group={servicesDropdown}
                currentPath={location.pathname}
              />
              <DesktopDropdown
                group={departmentsDropdown}
                currentPath={location.pathname}
              />

              {trailingLinks.map((link) => (
                <Link
                  key={link.to}
                  className={`${isActive(link.to)} text-sm xl:text-base font-medium transition-colors`}
                  style={getNavLinkStyle(link.to)}
                  to={link.to}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>

            {/* Book Appointment Button (desktop) */}
            <div className="hidden lg:block">
              <Button onClick={onBookAppointment} className="xl:px-6 xl:py-2.5">
                <span className="hidden xl:inline">
                  {t("common.buttons.bookAppointment")}
                </span>
                <span className="xl:hidden">{t("common.buttons.book")}</span>
                <span className="material-icons text-sm ml-2">
                  arrow_forward
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 h-auto min-w-0"
              >
                <span className="material-icons text-[1.2em] ml-2 hover:text-primary transition-colors cursor-pointer">
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
              {topLevelLinks.map((link) => (
                <Link
                  key={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={getMobileLinkClass(link.to)}
                  to={link.to}
                >
                  {t(link.labelKey)}
                </Link>
              ))}

              {/* Mobile expandable dropdowns */}
              {[
                {
                  key: "services",
                  group: servicesDropdown,
                  items: mobileServicesItems,
                },
                {
                  key: "departments",
                  group: departmentsDropdown,
                  items: mobileDepartmentsItems,
                },
              ].map(({ key, group, items }) => (
                <div
                  key={key}
                  className="border-b py-2"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div
                    className={`flex justify-between items-center font-medium cursor-pointer ${
                      location.pathname.startsWith(group.basePath)
                        ? "text-primary"
                        : ""
                    }`}
                    style={
                      !location.pathname.startsWith(group.basePath)
                        ? { color: "var(--color-text)" }
                        : {}
                    }
                    onClick={() => toggleMobileSubmenu(key)}
                  >
                    <span>{t(group.labelKey)}</span>
                    <span
                      className={`material-icons text-sm transition-transform duration-300 ${
                        expandedMobileMenu === key ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedMobileMenu === key
                        ? "max-h-96 opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className="pl-4 border-l-2 space-y-2 mb-2"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      {items.map((item) => (
                        <Link
                          key={item.to}
                          onClick={() => setIsMenuOpen(false)}
                          className={getMobileSubLinkClass(item.to)}
                          to={item.to}
                        >
                          {t(item.labelKey)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {trailingLinks.map((link) => (
                <Link
                  key={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={getMobileLinkClass(link.to)}
                  to={link.to}
                >
                  {t(link.labelKey)}
                </Link>
              ))}

              <div className="py-4 border-t border-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-text-muted">
                    {t("components.themeSwitcher.title")}
                  </span>
                  <ThemeSwitcher inline />
                </div>
                <div className="pt-2">
                  <LanguageSwitcher variant="menu" />
                </div>
              </div>

              <Button
                onClick={() => {
                  onBookAppointment();
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4"
              >
                {t("common.buttons.bookAppointment")}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
