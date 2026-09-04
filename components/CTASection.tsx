import React from "react";
import Reveal from "./Reveal";
import Button from "./Button";

interface CTASectionProps {
  badge?: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2?: string;
  description: string;
  primaryButton?: {
    label: string;
    onClick?: () => void;
    to?: string;
    href?: string;
  };
  secondaryButton?: {
    label: string;
    onClick?: () => void;
    to?: string;
    href?: string;
  };
  iconName?: string;
  children?: React.ReactNode;
}

const CTASection: React.FC<CTASectionProps> = ({
  badge,
  titlePart1,
  titleHighlight,
  titlePart2,
  description,
  primaryButton,
  secondaryButton,
  iconName,
  children,
}) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Theme Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-cta-from to-cta-to"></div>

      {/* Texture Overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "url('/images/leaf-bg.png')",
        }}
      ></div>

      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Background Icon Watermark */}
      {iconName && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <span className="material-icons text-[25rem] text-white">
            {iconName}
          </span>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {badge && (
            <Reveal delay={0}>
              <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-8 backdrop-blur-md">
                {badge}
              </span>
            </Reveal>
          )}

          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
              {titlePart1} <br className="hidden sm:block" />
              <span className="text-cta-accent">{titleHighlight}</span>
              {titlePart2 && ` ${titlePart2}`}
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </Reveal>

          {children && <Reveal delay={300}>{children}</Reveal>}

          {primaryButton && (
            <Reveal delay={children ? 400 : 300}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button
                  variant="white"
                  size="lg"
                  onClick={primaryButton.onClick}
                  to={primaryButton.to}
                  className="w-full sm:w-auto"
                >
                  {primaryButton.label}
                </Button>

                {secondaryButton && (
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={secondaryButton.onClick}
                    to={secondaryButton.to}
                    href={secondaryButton.href}
                    className="text-white hover:text-white hover:bg-white/10 border border-white/30 w-full sm:w-auto"
                  >
                    {secondaryButton.label}
                  </Button>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
