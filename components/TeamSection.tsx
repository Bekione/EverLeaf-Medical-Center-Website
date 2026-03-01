import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Reveal from "./Reveal";
import DoctorCard, { DoctorCardProps } from "./DoctorCard";

interface TeamSectionProps {
  badge?: string;
  title: string;
  description?: string;
  members: Omit<DoctorCardProps, "onBookAppointment" | "delay">[];
  onBookAppointment?: (doctorName: string) => void;
  viewAllLink?: string;
  viewAllLabel?: string;
  className?: string;
  layout?: "slider" | "grid";
  variant?: "simple" | "detailed" | "management";
  columns?: 3 | 4;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  badge,
  title,
  description,
  members,
  onBookAppointment,
  viewAllLink = "/doctors",
  viewAllLabel,
  className = "py-20 bg-slate-50 relative",
  layout = "slider",
  variant = "simple",
  columns = 4,
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={className} id="specialists">
      <div className="container mx-auto px-6">
        <Reveal threshold={0.1}>
          <div
            className={`flex flex-col md:flex-row justify-between items-end mb-12`}
          >
            <div className={layout === "grid" ? "max-w-3xl" : "max-w-2xl"}>
              {badge && (
                <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                  {badge}
                </span>
              )}
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-txt">
                {title}
              </h2>
              {description && (
                <p className="mt-4 text-lg text-muted">{description}</p>
              )}
            </div>
            <div className="flex items-center gap-4 mt-6 md:mt-0">
              {layout === "slider" && members.length > 3 && (
                <div className="hidden md:flex gap-2 mr-4">
                  <button
                    onClick={() => scroll("left")}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-txt-muted shadow-sm"
                    aria-label="Previous"
                  >
                    <span className="material-icons text-sm">arrow_back</span>
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-txt-muted shadow-sm"
                    aria-label="Next"
                  >
                    <span className="material-icons text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              )}
              {viewAllLink && viewAllLabel && (
                <Button
                  to={viewAllLink}
                  variant="action"
                  size="sm"
                  className="hidden md:flex"
                >
                  {viewAllLabel}
                  <span className="material-icons text-sm ml-2">
                    arrow_forward
                  </span>
                </Button>
              )}
            </div>
          </div>
        </Reveal>

        {layout === "slider" ? (
          <div
            ref={scrollRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto py-4 -my-4 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0"
          >
            {members.map((member, i) => (
              <div
                key={i}
                className="w-[280px] sm:w-[320px] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.333rem)] shrink-0 snap-center"
              >
                <DoctorCard
                  {...member}
                  variant={variant}
                  onBookAppointment={onBookAppointment}
                  delay={i * 100}
                />
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            } gap-8`}
          >
            {members.map((member, i) => (
              <DoctorCard
                key={i}
                {...member}
                variant={variant}
                onBookAppointment={onBookAppointment}
                delay={i * 100}
              />
            ))}
          </div>
        )}

        {viewAllLink && viewAllLabel && (
          <div className="mt-12 text-center md:hidden">
            <Link
              to={viewAllLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border rounded-xl font-semibold text-primary hover:bg-bg-alt transition-all"
            >
              {viewAllLabel}
              <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
