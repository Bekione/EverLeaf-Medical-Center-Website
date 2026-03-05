import React from "react";
import Reveal from "./Reveal";
import Button from "./Button";
import { CldImg } from "./CldImg";

export interface ImpactBannerItem {
  icon: string;
  text: string;
}

interface ImpactBannerSectionProps {
  id?: string;
  title: string;
  description: string;
  items: ImpactBannerItem[];
  button?: {
    label: string;
    to?: string;
    onClick?: () => void;
    variant?: "white" | "primary" | "secondary" | "outline" | "ghost";
  };
  image: string;
  imageAlt: string;
  reverse?: boolean;
  className?: string;
}

const ImpactBannerSection: React.FC<ImpactBannerSectionProps> = ({
  id,
  title,
  description,
  items,
  button,
  image,
  imageAlt,
  reverse = false,
  className = "",
}) => {
  return (
    <div id={id} className={className}>
      <Reveal threshold={0.1}>
        <div className="bg-primary rounded-3xl overflow-hidden relative shadow-lg">
          {/* Decorative pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/cubes.png')",
            }}
          ></div>

          <div
            className={`grid md:grid-cols-2 items-center relative z-10 ${reverse ? "md:flex-row-reverse" : ""}`}
          >
            <div
              className={`p-8 md:p-12 text-white ${reverse ? "md:order-2" : "md:order-1"}`}
            >
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                {description}
              </p>
              <ul className="space-y-4 mb-8">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="bg-white/20 w-10 h-10 flex items-center justify-center p-1.5 rounded-full shrink-0">
                      <span className="material-icons text-sm">
                        {item.icon}
                      </span>
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              {button && (
                <Button
                  variant={button.variant || "white"}
                  to={button.to}
                  onClick={button.onClick}
                >
                  {button.label}
                </Button>
              )}
            </div>

            <div
              className={`h-64 md:h-full relative bg-slate-800 ${reverse ? "md:order-1" : "md:order-2"}`}
            >
              <CldImg
                src={image}
                alt={imageAlt}
                transform="w_1400,q_auto,f_auto,c_fill"
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              {/* Gradient overlay to blend with text content side */}
              <div
                className={`absolute inset-0 bg-linear-to-b from-primary to-transparent ${reverse ? "md:bg-linear-to-l" : "md:bg-linear-to-r"} md:from-primary md:to-transparent`}
              ></div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default ImpactBannerSection;
