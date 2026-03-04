import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import { CldImg } from "../components/CldImg";
import { heroImages } from "../data/hero";

const HomeCarousel: React.FC = () => {
  const { t } = useTranslation();
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Reveal from="right" threshold={0.05} className="-mt-10">
      <div className="relative hidden lg:block h-[480px] w-full">
        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
              index === currentHeroImage
                ? "opacity-100 z-10 blur-0"
                : "opacity-70 z-0 blur-sm"
            }`}
          >
            <CldImg
              src={src}
              alt={t("common.imgAlt.hospitalBuilding")}
              className="rounded-2xl shadow-2xl object-cover w-full h-full"
              {...(index === 0
                ? { fetchPriority: "high", loading: "eager" }
                : { loading: "lazy" })}
            />
          </div>
        ))}

        <div className="absolute -bottom-8 -left-10 z-20 bg-surface p-4 rounded-xl shadow-xl border border-border max-w-xs transition-all duration-500 animate-float">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-primary-light rounded-full text-primary">
              <span className="material-icons">verified_user</span>
            </div>
            <div>
              <p className="text-sm font-bold text-txt">
                {t("pages.home.hero.satisfaction")}
              </p>
              <p className="text-xs text-muted">
                {t("pages.home.hero.satisfactionSub")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default HomeCarousel;
