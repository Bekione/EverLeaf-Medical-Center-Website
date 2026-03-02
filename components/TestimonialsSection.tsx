import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import TestimonialCard from "./TestimonialCard";
import Button from "./Button";
import ScrollFade from "./ScrollFade";

export interface TestimonialData {
  id: string;
  img: string;
}

interface TestimonialsSectionProps {
  badge?: string;
  title: string;
  description?: string;
  testimonials: TestimonialData[];
  className?: string; // Default: py-20
  style?: React.CSSProperties;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  badge,
  title,
  description,
  testimonials,
  className = "py-20 bg-bg-alt",
  style = {},
}) => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Approx card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={`overflow-hidden ${className}`} style={style}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end px-6 gap-4">
          <div className="max-w-3xl">
            {badge && (
              <Reveal delay={0}>
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-primary uppercase bg-primary-light rounded-full">
                  {badge}
                </span>
              </Reveal>
            )}
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4 text-txt">
                {title}
              </h2>
            </Reveal>
            {description && (
              <Reveal delay={160}>
                <p className="text-lg text-muted">{description}</p>
              </Reveal>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollTestimonials("left")}
              className="w-10 h-10 p-0 rounded-full min-w-0 shadow-none hover:shadow-none bg-surface border-border"
              icon="arrow_back"
              rounded="full"
              disabled={scrollContainerRef.current?.scrollLeft === 0}
            ></Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollTestimonials("right")}
              className="w-10 h-10 p-0 rounded-full min-w-0"
              icon="arrow_forward"
              rounded="full"
              disabled={
                scrollContainerRef.current?.scrollLeft ===
                scrollContainerRef.current?.scrollWidth -
                  scrollContainerRef.current?.clientWidth
              }
            ></Button>
          </div>
        </div>

        <ScrollFade className="py-2">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto py-8 px-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] snap-center flex"
              >
                <TestimonialCard
                  id={testimonial.id}
                  name={t(`data.testimonials.${testimonial.id}.name`)}
                  role={t(`data.testimonials.${testimonial.id}.role`)}
                  text={t(`data.testimonials.${testimonial.id}.text`)}
                  img={testimonial.img}
                  delay={i * 100}
                />
              </div>
            ))}
          </div>
        </ScrollFade>
      </div>
    </section>
  );
};

export default TestimonialsSection;
