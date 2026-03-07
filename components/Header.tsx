import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLangPath, useLang } from "../hooks/useLang";
import { EverleafLogo } from "./Logo";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Button from "./Button";
import Collapsible from "./Collapsible";
import ScrollFade from "./ScrollFade";
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
  const buildPath = useLangPath();
  const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, "") || "/";
  const isGroupActive = pathWithoutLang.startsWith(group.basePath);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group/menu"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={buildPath(group.basePath)}
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
      {/* Invisible hover bridge */}
      <div className="absolute top-full left-0 right-0 h-3" />

      {/* Dropdown — now using Collapsible for smooth height expansion */}
      <div
        className={`absolute top-full left-0 mt-2 z-9999 transition-all duration-500 ${
          isHovered
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-1 pointer-events-none"
        }`}
        style={{
          width: "14.5rem", // w-58 equivalent for safer whitespace
        }}
      >
        <Collapsible
          open={isHovered}
          duration={500}
          className="rounded-lg shadow-xl border border-border overflow-hidden"
          easing="cubic-bezier(0.16,1,0.3,1)"
        >
          <div
            className="py-2"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            {group.items.map((item) => {
              const isActive = pathWithoutLang === item.to;
              return (
                <Link
                  key={item.to}
                  to={buildPath(item.to)}
                  className="block px-4 py-2.5 text-sm transition-all mx-1.5 rounded-md mb-0.5 last:mb-0 group/item"
                  style={{
                    color: isActive
                      ? "var(--color-primary)"
                      : "var(--color-text)",
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
        </Collapsible>
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
  const buildPath = useLangPath();
  const lang = useLang();

  const plainPath =
    location.pathname.replace(new RegExp(`^/${lang}`), "") || "/";

  const isActive = (path: string) =>
    plainPath === path ? "text-primary" : "hover:text-primary";

  const getNavLinkStyle = (path: string) =>
    plainPath === path
      ? { color: "var(--color-primary)" }
      : { color: "var(--color-text)" };

  const toggleMobileSubmenu = (menu: string) =>
    setExpandedMobileMenu(expandedMobileMenu === menu ? null : menu);

  const getMobileLinkClass = (path: string) =>
    `block py-2 font-medium transition-colors ${plainPath === path ? "text-primary font-bold" : ""}`;

  const getMobileSubLinkClass = (path: string) =>
    `block text-sm transition-colors py-1.5 px-3 rounded-md ${
      plainPath === path
        ? "text-primary font-semibold bg-primary/5"
        : "hover:text-primary hover:bg-primary/5"
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
                to={buildPath("/gallery")}
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                {t("nav.gallery")}
              </Link>
              <span className="opacity-30">|</span>
              <Link
                to={buildPath("/blog")}
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
        className="sticky top-0 z-9999 backdrop-blur-md border-b"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-surface) 92%, transparent)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={buildPath("/")} className="flex items-center gap-3 group">
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
            <div className="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-6">
              {topLevelLinks.map((link) => (
                <Link
                  key={link.to}
                  className={`${isActive(link.to)} text-sm xl:text-base font-medium transition-colors`}
                  style={getNavLinkStyle(link.to)}
                  to={buildPath(link.to)}
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
                  to={buildPath(link.to)}
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>

            {/* Book Appointment Button (desktop) */}
            <div className="hidden lg:block">
              <Button onClick={onBookAppointment} className="xl:px-6 xl:py-2.5">
                <span className="hidden xl:inline whitespace-nowrap">
                  {t("common.buttons.bookAppointment")}
                </span>
                <span className="xl:hidden whitespace-nowrap">
                  {t("common.buttons.book")}
                </span>
                <span className="material-icons text-sm ml-2">
                  arrow_forward
                </span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                className="p-2 h-auto min-w-0"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <span className="material-icons text-[1.2em] ml-2 hover:text-primary transition-colors cursor-pointer">
                  {isMenuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <Collapsible
          open={isMenuOpen}
          duration={500}
          className="lg:hidden border-t border-border"
          easing="cubic-bezier(0.16,1,0.3,1)"
        >
          <ScrollFade
            direction="vertical"
            fadeSize={35}
            className="max-h-[80vh]"
          >
            <div className="py-4 px-6 overflow-y-auto max-h-[80vh] bg-surface shadow-lg">
              <div className="flex flex-col space-y-2">
                {topLevelLinks.map((link, index) => (
                  <Link
                    key={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${getMobileLinkClass(link.to)} ${isMenuOpen ? "animate-mobile-slide-in" : "opacity-0"}`}
                    style={{
                      ...getNavLinkStyle(link.to),
                      animationDelay: `${index * 50}ms`,
                    }}
                    to={buildPath(link.to)}
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
                ].map(({ key, group, items }, groupIndex) => (
                  <div
                    key={key}
                    className={`border-b py-2 ${isMenuOpen ? "animate-mobile-slide-in" : "opacity-0"}`}
                    style={{
                      borderColor: "var(--color-border)",
                      animationDelay: `${(topLevelLinks.length + groupIndex) * 50}ms`,
                    }}
                  >
                    <div
                      className={`flex justify-between items-center font-medium cursor-pointer select-none ${
                        plainPath.startsWith(group.basePath)
                          ? "text-primary"
                          : ""
                      }`}
                      style={
                        !plainPath.startsWith(group.basePath)
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

                    {/* Smooth submenu via Collapsible */}
                    <Collapsible
                      open={expandedMobileMenu === key}
                      duration={500}
                      easing="cubic-bezier(0.16,1,0.3,1)"
                    >
                      <div className="space-y-1 py-2 px-1">
                        {items.map((item, itemIndex) => (
                          <Link
                            key={item.to}
                            onClick={() => setIsMenuOpen(false)}
                            className={`${getMobileSubLinkClass(item.to)} ${expandedMobileMenu === key ? "animate-mobile-slide-in" : "opacity-0"}`}
                            to={buildPath(item.to)}
                            style={{
                              animationDelay: `${itemIndex * 30}ms`,
                            }}
                          >
                            {t(item.labelKey)}
                          </Link>
                        ))}
                      </div>
                    </Collapsible>
                  </div>
                ))}

                {trailingLinks.map((link, index) => (
                  <Link
                    key={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${getMobileLinkClass(link.to)} ${isMenuOpen ? "animate-mobile-slide-in" : "opacity-0"}`}
                    style={{
                      ...getNavLinkStyle(link.to),
                      animationDelay: `${(topLevelLinks.length + 2 + index) * 50}ms`,
                    }}
                    to={buildPath(link.to)}
                  >
                    {t(link.labelKey)}
                  </Link>
                ))}

                <div
                  className={`py-4 border-t border-border space-y-4 ${isMenuOpen ? "animate-mobile-slide-in" : "opacity-0"}`}
                  style={{
                    animationDelay: `${(topLevelLinks.length + trailingLinks.length + 2) * 50}ms`,
                  }}
                >
                  <div>
                    <ThemeSwitcher variant="menu" />
                  </div>
                  <div>
                    <LanguageSwitcher variant="menu" />
                  </div>
                </div>

                <div
                  className={`${isMenuOpen ? "animate-mobile-slide-in" : "opacity-0"}`}
                  style={{
                    animationDelay: `${(topLevelLinks.length + trailingLinks.length + 3) * 50}ms`,
                  }}
                >
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
            </div>
          </ScrollFade>
        </Collapsible>
      </nav>
    </>
  );
};

export default Header;
