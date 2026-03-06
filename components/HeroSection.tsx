import React from "react";
import Reveal from "./Reveal";
import { CldImg } from "./CldImg";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { colorMap } from "../data/colorMap";

interface HeroButtonProps {
  label: string;
  onClick?: (e?: any) => void;
  to?: string;
  href?: string;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "white"
    | "ghost"
    | "glass"
    | "action"
    | "link";
  className?: string;
  icon?: string;
}

interface HeroSectionProps {
  variant: "impact" | "info" | "centered"; // impact = Dark, info = Light (2-col), centered = Middle
  badge: string;
  badgeIcon?: string;
  badgeClassName?: string;
  status?: string;
  title?: string;
  titlePart1?: string;
  titlePart2?: string;
  titleHighlight?: string;
  titleHighlightClassName?: string;
  titleHighlightUnderline?: boolean; // For the wavy underline effect
  description: string;
  image?: string;
  imageAlt?: string;
  primaryButton?: HeroButtonProps;
  secondaryButton?: HeroButtonProps;
  children?: React.ReactNode;
  footerContent?: React.ReactNode;
  customRightColumn?: React.ReactNode;
  backgroundClassName?: string;
  showBadgeDot?: boolean; // Controls the blinking dot in the badge
  badgeStyle?: React.CSSProperties;
  containerClassName?: string;
  statsCard?: {
    value: string;
    label: string;
    icon: string;
  };
  accentColor?: string;
  fullHeight?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  variant,
  badge,
  badgeIcon,
  badgeClassName,
  status,
  title,
  titlePart1,
  titlePart2,
  titleHighlight,
  titleHighlightClassName,
  titleHighlightUnderline,
  description,
  image,
  imageAlt,
  primaryButton,
  secondaryButton,
  children,
  footerContent,
  customRightColumn,
  backgroundClassName,
  showBadgeDot = false,
  badgeStyle,
  containerClassName,
  statsCard,
  accentColor = "blue",
  fullHeight = true,
}) => {
  const { t } = useTranslation();

  if (variant === "impact") {
    return (
      <header
        className={`relative text-white overflow-hidden ${fullHeight ? "min-h-[500px] h-[calc(100dvh-var(--header-height))]" : "h-auto"} flex items-center bg-footer-bg ${backgroundClassName || ""}`}
      >
        <div className="absolute inset-0">
          {image && (
            <CldImg
              src={image}
              alt={imageAlt || titlePart1}
              className="w-full h-full object-cover object-center opacity-30 sm:opacity-25"
            />
          )}
          <div className="absolute inset-0 block md:hidden bg-linear-to-b from-footer-bg via-footer-bg/85 to-transparent"></div>
          <div className="absolute inset-0 hidden md:block bg-linear-to-r from-footer-bg via-footer-bg/95 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <Reveal delay={0}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full ${
                    badgeClassName ||
                    "text-primary-light bg-primary/10 border border-primary/20"
                  }`}
                  style={badgeStyle}
                >
                  {showBadgeDot && (
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  )}
                  {badgeIcon && (
                    <span className="material-icons text-base">
                      {badgeIcon}
                    </span>
                  )}
                  <span>{badge}</span>
                </div>
                {status && (
                  <span className="inline-flex items-center text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                    {status}
                  </span>
                )}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
                {title || titlePart1}
                {titleHighlight && (
                  <>
                    <br />
                    <span
                      className={`relative inline-block ${
                        titleHighlightClassName || "text-white"
                      }`}
                    >
                      {titleHighlight}
                      {titleHighlightUnderline && (
                        <svg
                          className="absolute w-full h-3 -bottom-2 left-0 text-primary opacity-60"
                          preserveAspectRatio="none"
                          viewBox="0 0 100 10"
                        >
                          <path
                            d="M0 5 Q 50 10 100 5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                          ></path>
                        </svg>
                      )}
                    </span>
                  </>
                )}
                {titlePart2 && (
                  <>
                    <br />
                    <span>{titlePart2}</span>
                  </>
                )}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-base sm:text-lg text-white/70 mb-8 max-w-2xl leading-relaxed">
                {description}
              </p>
            </Reveal>

            {children && (
              <Reveal delay={250} className="mb-8">
                {children}
              </Reveal>
            )}

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 mt-14 md:mt-0 items-stretch sm:items-center">
                {primaryButton && (
                  <Button
                    to={primaryButton.to}
                    href={primaryButton.href}
                    onClick={primaryButton.onClick}
                    variant={primaryButton.variant || "primary"}
                    className={`${primaryButton.className || ""} w-full sm:w-auto px-8 py-3.5 text-base font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5`}
                  >
                    {primaryButton.label}
                    {primaryButton.icon && (
                      <span className="material-icons text-base ml-2">
                        {primaryButton.icon}
                      </span>
                    )}
                  </Button>
                )}
                {secondaryButton && (
                  <Button
                    to={secondaryButton.to}
                    href={secondaryButton.href}
                    onClick={secondaryButton.onClick}
                    variant={secondaryButton.variant || "glass"}
                    className={`${secondaryButton.className || ""} w-full sm:w-auto`}
                  >
                    {secondaryButton.label}
                    {secondaryButton.icon && (
                      <span className="material-icons text-base ml-2">
                        {secondaryButton.icon}
                      </span>
                    )}
                  </Button>
                )}
              </div>
            </Reveal>

            {footerContent && (
              <Reveal delay={350} className="mt-8">
                {footerContent}
              </Reveal>
            )}
          </div>
        </div>
      </header>
    );
  }

  if (variant === "centered") {
    return (
      <header
        className={`relative border-b border-border py-16 flex items-center justify-center overflow-hidden ${
          containerClassName || ""
        } ${backgroundClassName || "bg-surface"}`}
      >
        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <Reveal delay={0}>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase rounded-full ${
                badgeClassName ||
                "text-primary bg-primary-light border-transparent"
              }`}
              style={badgeStyle}
            >
              {showBadgeDot && (
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              )}
              {badgeIcon && (
                <span className="material-icons text-sm">{badgeIcon}</span>
              )}
              <span>{badge}</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-text mb-6 leading-tight">
              {title || titlePart1}
              {titleHighlight && (
                <span
                  className={`relative inline-block ml-3 ${
                    titleHighlightClassName || "text-primary"
                  }`}
                >
                  {titleHighlight}
                </span>
              )}
              {titlePart2 && <span className="ml-3">{titlePart2}</span>}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </Reveal>
          {children && (
            <Reveal delay={250} className="mt-8">
              {children}
            </Reveal>
          )}
        </div>
      </header>
    );
  }

  return (
    <header
      className={`relative overflow-hidden ${fullHeight ? "min-h-[500px] h-[calc(100dvh-var(--header-height))]" : "h-auto"} ${
        containerClassName || "py-12 lg:py-16"
      } ${backgroundClassName || "bg-white border-b border-slate-100"}`}
    >
      {backgroundClassName?.includes("bg-alt") && (
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `radial-gradient(var(--color-primary) 0.5px, transparent 0.5px), radial-gradient(var(--color-primary) 0.5px, var(--color-bg-alt) 0.5px)`,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        ></div>
      )}
      {!backgroundClassName?.includes("bg-alt") && (
        <div
          className={`absolute right-0 top-0 h-full w-1/3 skew-x-12 translate-x-12 pointer-events-none transition-colors duration-500`}
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--color-primary) 6%, transparent)",
          }}
        />
      )}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl min-w-0">
            <Reveal delay={0}>
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase rounded-full ${
                  badgeClassName ||
                  "text-primary bg-white border border-slate-100 shadow-sm"
                }`}
                style={badgeStyle}
              >
                {showBadgeDot && (
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                )}
                {badgeIcon && (
                  <span className="material-icons text-sm">{badgeIcon}</span>
                )}
                <span>{badge}</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text mb-6 leading-tight">
                {title || titlePart1}
                {(titleHighlight || titlePart2) && <br />}
                {titleHighlight && (
                  <span
                    className={`relative inline-block ${
                      titleHighlightClassName || "text-primary"
                    }`}
                  >
                    {titleHighlight}
                    {titleHighlightUnderline && (
                      <svg
                        className="absolute w-full h-3 -bottom-2 left-0 text-secondary opacity-40"
                        preserveAspectRatio="none"
                        viewBox="0 0 100 10"
                      >
                        <path
                          d="M0 5 Q 50 10 100 5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                        ></path>
                      </svg>
                    )}
                  </span>
                )}
                {titleHighlight && titlePart2 && " "}
                {titlePart2 && <span>{titlePart2}</span>}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg text-muted leading-relaxed max-w-2xl mb-10">
                {description}
              </p>
            </Reveal>

            {children && (
              <Reveal delay={250} className="mb-10">
                {children}
              </Reveal>
            )}

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryButton && (
                  <Button
                    to={primaryButton.to}
                    href={primaryButton.href}
                    onClick={primaryButton.onClick}
                    variant={primaryButton.variant || "primary"}
                    className={`${primaryButton.className || ""} w-full sm:w-auto shadow-lg shadow-primary/20`}
                  >
                    {primaryButton.label}
                    {primaryButton.icon && (
                      <span className="material-icons text-base ml-2">
                        {primaryButton.icon}
                      </span>
                    )}
                  </Button>
                )}
                {secondaryButton && (
                  <Button
                    to={secondaryButton.to}
                    href={secondaryButton.href}
                    onClick={secondaryButton.onClick}
                    variant={secondaryButton.variant || "outline"}
                    className={`${secondaryButton.className || ""} w-full sm:w-auto`}
                  >
                    {secondaryButton.label}
                    {secondaryButton.icon && (
                      <span className="material-icons text-base ml-1">
                        {secondaryButton.icon}
                      </span>
                    )}
                  </Button>
                )}
              </div>
            </Reveal>

            {footerContent && (
              <Reveal delay={350} className="mt-10">
                {footerContent}
              </Reveal>
            )}
          </div>

          {customRightColumn ? (
            <div className="lg:w-full">{customRightColumn}</div>
          ) : (
            <Reveal
              from="right"
              threshold={0.1}
              className="relative hidden lg:flex w-full justify-center"
            >
              <div className="relative group">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-border transform rotate-1 group-hover:rotate-0 transition-all duration-700 w-full max-w-lg min-h-[300px] sm:min-h-[400px] aspect-4/3">
                  {image && (
                    <CldImg
                      src={image}
                      alt={imageAlt || titlePart1}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent"></div>
                </div>

                {/* Decorative elements */}
                <div
                  className={`absolute -top-6 -right-6 w-32 h-32 ${
                    (colorMap[accentColor] || colorMap.blue).bg
                  } rounded-full blur-3xl opacity-50 -z-10`}
                ></div>

                {statsCard && (
                  <div className="absolute -bottom-6 -left-6 z-20 bg-surface p-4 rounded-xl shadow-xl border border-border max-w-xs transition-all duration-500 animate-float">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-primary-light rounded-full text-primary">
                        <span className="material-icons">{statsCard.icon}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-txt">
                          {statsCard.value}
                        </p>
                        <p className="text-xs text-muted">{statsCard.label}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `,
        }}
      />
    </header>
  );
};

export default HeroSection;
