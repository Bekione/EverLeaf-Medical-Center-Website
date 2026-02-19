import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { EverleafLogo } from "./Logo";

interface HeaderProps {
  onBookAppointment: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookAppointment }) => {
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
              Emergency: 911
            </span>
            <span className="flex items-center gap-2 opacity-80">
              <span className="material-icons text-base">schedule</span> Mon -
              Sun: 24 Hours
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/gallery"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              Gallery
            </Link>
            <span className="opacity-30">|</span>
            <Link
              to="/blog"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              News & Media
            </Link>
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
                  Everleaf
                </span>
                <span
                  className="text-[10px] lg:text-xs font-brand tracking-[0.2em] uppercase mt-0.5"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Medical Center
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
                Home
              </Link>
              <Link
                className={`${isActive("/about")} text-sm xl:text-base font-medium transition-colors`}
                style={getNavLinkStyle("/about")}
                to="/about"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link
                  to="/services"
                  className={`flex items-center gap-1 cursor-pointer text-sm xl:text-base font-medium transition-colors ${location.pathname.startsWith("/services") ? "text-primary" : "hover:text-primary"}`}
                  style={
                    location.pathname.startsWith("/services")
                      ? { color: "var(--color-primary)" }
                      : { color: "var(--color-text)" }
                  }
                >
                  Services{" "}
                  <span className="material-icons text-sm">expand_more</span>
                </Link>
                <div
                  className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-[9999] py-2"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {[
                    {
                      to: "/services/diagnostics",
                      label: "Diagnostic Services",
                    },
                    { to: "/services/laboratory", label: "Laboratory" },
                    { to: "/services/imaging", label: "Imaging" },
                    { to: "/services/pharmacy", label: "Pharmacy" },
                    { to: "/services/emergency", label: "Emergency Care" },
                    {
                      to: "/services/preventive-checkups",
                      label: "Preventive Checkups",
                    },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        location.pathname === item.to
                          ? "font-semibold"
                          : "hover:text-primary"
                      }`}
                      style={{
                        color:
                          location.pathname === item.to
                            ? "var(--color-primary)"
                            : "var(--color-text)",
                        backgroundColor:
                          location.pathname === item.to
                            ? "color-mix(in srgb, var(--color-primary) 8%, transparent)"
                            : undefined,
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Departments Dropdown */}
              <div className="relative group">
                <Link
                  to="/departments"
                  className={`flex items-center gap-1 cursor-pointer text-sm xl:text-base font-medium transition-colors ${location.pathname.startsWith("/departments") ? "text-primary" : "hover:text-primary"}`}
                  style={
                    location.pathname.startsWith("/departments")
                      ? { color: "var(--color-primary)" }
                      : { color: "var(--color-text)" }
                  }
                >
                  Departments{" "}
                  <span className="material-icons text-sm">expand_more</span>
                </Link>
                <div
                  className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-[9999] py-2"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {[
                    { to: "/departments/cardiology", label: "Cardiology" },
                    { to: "/departments/neurology", label: "Neurology" },
                    { to: "/departments/pediatrics", label: "Pediatrics" },
                    { to: "/departments/surgery", label: "Surgery" },
                    { to: "/departments/dental", label: "Dental Clinic" },
                    {
                      to: "/departments/ophthalmology",
                      label: "Ophthalmology",
                    },
                    { to: "/departments/laboratory", label: "Laboratory" },
                    { to: "/departments/radiology", label: "Radiology" },
                    {
                      to: "/departments/rehabilitation",
                      label: "Rehabilitation",
                    },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        location.pathname === item.to
                          ? "font-semibold"
                          : "hover:text-primary"
                      }`}
                      style={{
                        color:
                          location.pathname === item.to
                            ? "var(--color-primary)"
                            : "var(--color-text)",
                        backgroundColor:
                          location.pathname === item.to
                            ? "color-mix(in srgb, var(--color-primary) 8%, transparent)"
                            : undefined,
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                className={`${isActive("/doctors")} text-sm xl:text-base font-medium transition-colors`}
                style={getNavLinkStyle("/doctors")}
                to="/doctors"
              >
                Doctors
              </Link>
              <Link
                className={`${isActive("/blog")} text-sm xl:text-base font-medium transition-colors`}
                style={getNavLinkStyle("/blog")}
                to="/blog"
              >
                Articles
              </Link>
              <Link
                className={`${isActive("/gallery")} text-sm xl:text-base font-medium transition-colors`}
                style={getNavLinkStyle("/gallery")}
                to="/gallery"
              >
                Gallery
              </Link>
              <Link
                className={`${isActive("/contact")} text-sm xl:text-base font-medium transition-colors`}
                style={getNavLinkStyle("/contact")}
                to="/contact"
              >
                Contact
              </Link>
            </div>

            <div className="hidden lg:block">
              <button
                onClick={onBookAppointment}
                className="inline-flex items-center justify-center px-4 py-2 xl:px-6 xl:py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg hover:-translate-y-0.5"
              >
                <span className="hidden xl:inline">Book Appointment</span>
                <span className="xl:hidden">Book</span>
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
                Home
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className={getMobileLinkClass("/about")}
                to="/about"
              >
                About
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
                  <span>Services</span>
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
                      All Services
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services/diagnostics")}
                      to="/services/diagnostics"
                    >
                      Diagnostics
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services/laboratory")}
                      to="/services/laboratory"
                    >
                      Laboratory
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services/imaging")}
                      to="/services/imaging"
                    >
                      Imaging
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services/pharmacy")}
                      to="/services/pharmacy"
                    >
                      Pharmacy
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services/emergency")}
                      to="/services/emergency"
                    >
                      Emergency
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/services/preventive-checkups",
                      )}
                      to="/services/preventive-checkups"
                    >
                      Checkups
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
                  <span>Departments</span>
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
                      All Departments
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/departments/cardiology",
                      )}
                      to="/departments/cardiology"
                    >
                      Cardiology
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/departments/neurology",
                      )}
                      to="/departments/neurology"
                    >
                      Neurology
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/departments/pediatrics",
                      )}
                      to="/departments/pediatrics"
                    >
                      Pediatrics
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/departments/surgery")}
                      to="/departments/surgery"
                    >
                      Surgery
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/departments/dental")}
                      to="/departments/dental"
                    >
                      Dental
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/departments/ophthalmology",
                      )}
                      to="/departments/ophthalmology"
                    >
                      Ophthalmology
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass("/services/laboratory")}
                      to="/services/laboratory"
                    >
                      Laboratory
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/departments/radiology",
                      )}
                      to="/departments/radiology"
                    >
                      Radiology
                    </Link>
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      className={getMobileSubLinkClass(
                        "/departments/rehabilitation",
                      )}
                      to="/departments/rehabilitation"
                    >
                      Rehabilitation
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                onClick={() => setIsMenuOpen(false)}
                className={getMobileLinkClass("/doctors")}
                to="/doctors"
              >
                Doctors
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className={getMobileLinkClass("/blog")}
                to="/blog"
              >
                Articles
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className={getMobileLinkClass("/gallery")}
                to="/gallery"
              >
                Gallery
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className={getMobileLinkClass("/contact")}
                to="/contact"
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  onBookAppointment();
                  setIsMenuOpen(false);
                }}
                className="w-full text-center py-3 mt-4 text-white bg-primary rounded-lg font-bold"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
