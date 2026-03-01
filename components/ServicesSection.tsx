import React from "react";
import Reveal from "./Reveal";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";

interface ServicesSectionProps {
  badge?: string;
  title: string;
  description?: string;
  services: Omit<ServiceCardProps, "delay">[];
  variant?: "split" | "centered";
  className?: string;
  id?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  badge,
  title,
  description,
  services,
  variant = "split",
  className = "py-20 bg-bg",
  id = "services",
}) => {
  if (variant === "centered") {
    return (
      <section className={className} id={id}>
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              {badge && (
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">
                  {badge}
                </span>
              )}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-txt mb-6">
                {title}
              </h2>
              {description && (
                <p className="text-muted text-lg leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={className} id={id}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <Reveal
            from="left"
            threshold={0.1}
            className="lg:w-1/3 lg:sticky lg:top-24 self-start"
          >
            <div>
              {badge && (
                <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">
                  {badge}
                </span>
              )}
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-txt mb-6 leading-tight">
                {title}
              </h2>
              {description && (
                <p className="text-muted text-lg mb-8 leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </Reveal>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
