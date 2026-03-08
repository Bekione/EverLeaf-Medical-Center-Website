import React from "react";
import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import { CldImg } from "./CldImg";
import Button from "./Button";
import ImageSkeleton from "./ImageSkeleton";
import ScrollFade from "./ScrollFade";
import { useLangPath } from "../hooks/useLang";

export interface DoctorCardProps {
  name: string;
  role: string;
  img: string;
  departmentName?: string;
  bio?: string;
  education?: string;
  educationShort?: string;
  experience?: number;
  socialLinks?: {
    email?: string;
    share?: string;
    link?: string;
  };
  onBookAppointment?: (doctorName: string) => void;
  variant?: "simple" | "detailed" | "management";
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  role,
  img,
  departmentName,
  bio,
  education,
  educationShort,
  experience,
  socialLinks,
  onBookAppointment,
  variant = "simple",
  delay = 0,
  className = "",
  style,
}) => {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = React.useState(false);
  const buildPath = useLangPath();

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${buildPath("/doctors")}?search=${encodeURIComponent(name)}`
      : "";

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      try {
        await navigator.share({
          title: `EverLeaf Medical Center - ${name}`,
          text: bio || role,
          url: shareUrl,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      handleCopyLink(e);
    }
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (variant === "detailed") {
    return (
      <div
        className={`group/card relative rounded-2xl overflow-hidden hover:shadow-xl border flex flex-col h-full bg-surface border-border shadow-card ${className}`}
        style={style}
      >
        <div className="relative h-80 overflow-hidden bg-bg-alt">
          <ImageSkeleton
            src={img}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
            containerClassName="w-full h-full"
          />

          {/* Slide-up Overlay */}
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm translate-y-full group-hover/card:translate-y-0 transition-transform duration-300 ease-in-out p-6 flex flex-col justify-center text-white text-center z-20">
            <ScrollFade direction="vertical" className="flex flex-col">
              <div className="overflow-y-auto scrollbar-hide pr-1">
                <h4 className="font-bold text-lg mb-2 text-primary font-serif">
                  {t("pages.doctors.card.about", "About")}
                </h4>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  {bio}
                </p>

                {education && (
                  <>
                    <h4 className="font-bold text-sm mb-1 text-primary uppercase tracking-wide">
                      {t("pages.doctors.card.education", "Education")}
                    </h4>
                    <p className="text-xs text-slate-300 mb-6">{education}</p>
                  </>
                )}

                <div className="pt-2 border-t border-slate-700 flex gap-4 justify-center">
                  <a
                    href={`mailto:${socialLinks?.email || ""}`}
                    className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-primary transition-colors text-white"
                    title={t("pages.doctors.card.social.email", "Send Email")}
                  >
                    <span className="material-icons text-sm">email</span>
                  </a>
                  <button
                    onClick={handleShare}
                    className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-primary transition-colors text-white cursor-pointer"
                    title={t("pages.doctors.card.social.share", "Share")}
                  >
                    <span className="material-icons text-sm">share</span>
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-primary transition-colors text-white cursor-pointer relative"
                    title={t("pages.doctors.card.social.copy", "Copy Link")}
                  >
                    <span className="material-icons text-sm">
                      {copied ? "check" : "link"}
                    </span>
                    {copied && (
                      <span className="absolute -top-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded">
                        {t("common.labels.copied", "Copied!")}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>

        <div className="p-6 flex flex-col grow text-center relative z-10 bg-surface">
          <h3 className="text-xl font-bold mb-1 font-serif text-text">
            {name}
          </h3>
          <p className="text-primary font-medium text-sm mb-1">{role}</p>
          {departmentName && (
            <p className="text-xs mb-6 uppercase tracking-wider text-text-muted">
              {t("pages.doctors.card.deptPrefix", "Department of ")}
              {departmentName}
            </p>
          )}

          <div className="mt-auto pt-4 border-t w-full border-border">
            <Button
              onClick={() => onBookAppointment(name)}
              className="w-full gap-2 group/btn"
              animate={false}
            >
              <span className="relative z-10 text-sm">
                {t(
                  "pages.doctors.card.requestAppointment",
                  "Request Appointment",
                )}
              </span>
              <span className="material-icons text-sm relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
                arrow_forward
              </span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  if (variant === "management") {
    return (
      <Reveal delay={delay} threshold={0.1}>
        <div
          className={`group relative rounded-2xl overflow-hidden shadow-lg h-96 cursor-pointer ${className}`}
          style={style}
        >
          <CldImg
            src={img}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent p-6 flex flex-col justify-end transition-all duration-700 group-hover:bg-slate-900/60">
            <div className="transform transition-transform duration-500 ease-out translate-y-18 group-hover:translate-y-0">
              <h3 className="text-xl font-bold text-white mb-1 font-serif">
                {name}
              </h3>
              <p className="text-sm text-cta-accent font-bold uppercase tracking-wider drop-shadow-sm">
                {role}
              </p>
              {bio && (
                <p className="text-white/80 text-xs mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 leading-relaxed">
                  {bio}
                </p>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
  return (
    <Reveal delay={delay} threshold={0.1}>
      <div
        className={`bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group h-full border border-border flex flex-col ${className}`}
        style={style}
      >
        <div className="h-72 overflow-hidden relative bg-bg-alt">
          <ImageSkeleton
            src={img}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <Button
              onClick={() => onBookAppointment?.(name)}
              size="sm"
              className="rounded-full shadow-lg"
            >
              {t("common.buttons.bookAppointment", "Book Appointment")}
            </Button>
          </div>
        </div>
        <div className="p-6 text-center flex flex-col grow">
          <h3 className="text-xl font-bold text-text font-serif mb-1">
            {name}
          </h3>
          <p className="text-primary font-semibold text-sm mb-4">{role}</p>

          {(experience || educationShort) && (
            <div className="mt-auto pt-4 border-t border-border flex items-center justify-center gap-2 text-[11px] font-medium text-text-muted tracking-wide">
              {experience && (
                <span>
                  {t("common.labels.experience", { count: experience })}
                </span>
              )}
              {experience && educationShort && (
                <span className="w-1 h-1 rounded-full bg-border" />
              )}
              {educationShort && <span>{educationShort}</span>}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
};

export default DoctorCard;
