import React from "react";
import { Link } from "react-router-dom";
import { EverleafLogo } from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useTranslation } from "react-i18next";
import NewsletterForm from "./NewsletterForm";
import { socialLinks } from "../data/socialLinks";
import { footerLinks } from "../data/navigation";
import { useLangPath } from "../hooks/useLang";
import Reveal from "./Reveal";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const buildPath = useLangPath();

  return (
    <footer className="pt-20 pb-10 border-t bg-footer text-white/70 border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand + Social */}
          <Reveal delay={0}>
            <div>
              <Link
                to={buildPath("/")}
                className="flex items-center gap-3 mb-6 group"
              >
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                  <EverleafLogo className="w-8 h-8 " />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-brand font-semibold text-white leading-none">
                    {t("nav.brand")}
                  </span>
                  <span className="text-[10px] font-brand tracking-[0.2em] uppercase mt-1 text-white/70">
                    {t("nav.brandSub")}
                  </span>
                </div>
              </Link>
              <p className="mb-6 leading-relaxed text-white/75">
                {t("footer.tagline")}
              </p>

              {/* Social Icons — driven by data/socialLinks.ts */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-primary hover:text-white transition-all"
                  >
                    <svg
                      className={`${social.iconSize} fill-current`}
                      viewBox="0 0 24 24"
                    >
                      <path d={social.svgPath} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Quick Links — driven by data/navigation.ts */}
          <Reveal delay={80}>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">
                {t("footer.links")}
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={buildPath(item.to)}
                      className="hover:text-primary transition-colors flex items-center gap-2 group/flink"
                    >
                      <span className="material-icons text-xs transition-all duration-300 group-hover/flink:text-primary group-hover/flink:translate-x-1">
                        chevron_right
                      </span>
                      <span className="inline-block transition-transform duration-300 group-hover/flink:translate-x-1">
                        {t(item.labelKey)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Contact Info */}
          <Reveal delay={160}>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">
                {t("footer.contact")}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-primary mt-1">
                    location_on
                  </span>
                  <span>
                    {t("footer.address.street")}
                    <br />
                    {t("footer.address.cityStateZip")}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-icons text-primary">phone</span>
                  <span>+251 954 123-456</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-icons text-primary">email</span>
                  <span>info@everleaf.com</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* Newsletter */}
          <Reveal delay={240}>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">
                {t("footer.newsletter.title")}
              </h4>
              <p className="mb-4 text-white/75">
                {t("footer.newsletter.description")}
              </p>
              <NewsletterForm />
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-8 border-white/10 text-white/60 text-sm">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} {t("components.seo.siteName")}.{" "}
              {t("footer.rights")}
            </p>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <ThemeSwitcher inline className="hidden md:inline-flex" />
              <Link
                to={buildPath("/privacy")}
                className="hover:text-white transition-colors"
              >
                {t("footer.privacy")}
              </Link>
              <Link
                to={buildPath("/privacy")}
                className="hover:text-white transition-colors"
              >
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
