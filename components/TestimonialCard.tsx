import React from "react";
import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import { CldImg } from "./CldImg";

export interface TestimonialCardProps {
  id: string;
  name: string;
  role: string;
  text: string;
  img: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  id,
  name,
  role,
  text,
  img,
  delay = 0,
}) => {
  const { t } = useTranslation();

  return (
    <Reveal delay={delay} threshold={0.1} className="h-full">
      <div className="bg-surface p-8 rounded-2xl shadow-sm border border-border h-full relative flex flex-col hover:shadow-md transition-all duration-300 group">
        <a
          href="#"
          className="absolute top-6 right-6 text-slate-300 hover:text-primary transition-colors"
          title={t("pages.home.testimonials.readOnGoogle")}
        >
          <span className="material-icons text-2xl">open_in_new</span>
        </a>
        <div className="flex items-center gap-1 text-yellow-400 mb-6">
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
          <span className="material-icons">star</span>
        </div>
        <p className="mb-6 leading-relaxed relative z-10 grow text-text-muted">
          "{text}"
        </p>
        <div className="flex items-center gap-4 mt-auto">
          <CldImg
            src={img}
            alt={name}
            className="w-12 h-12 rounded-full object-cover shadow-sm transition-transform duration-300"
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          />
          <div>
            <h3 className="font-bold font-serif text-base text-text">{name}</h3>
            <p className="text-xs text-text-muted">{role}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default TestimonialCard;
