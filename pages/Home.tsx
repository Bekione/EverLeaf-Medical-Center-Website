import React, { useRef, useState, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../Layout";
import SEO from "../components/SEO";
import { heroImages } from "../data/hero";
import { testimonials } from "../data/testimonials";

const Home: React.FC = () => {
  const { openAppointment } = useOutletContext<{
    openAppointment: OpenAppointmentFunc;
  }>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const scrollTestimonials = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Approx width of card + gap
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
    <div className="animate-fade-in">
      <SEO
        title="Home"
        description="Care That Grows With You. Everleaf Medical Center offers world-class healthcare, specialized departments, and expert doctors in Addis Abeba."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Hospital",
          name: "Everleaf Medical Center",
          image: heroImages,
          telephone: "+251 954 123-456",
          email: "info@everleaf.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Health Avenue",
            addressLocality: "Addis Abeba",
            addressRegion: "AA",
            postalCode: "10012",
            addressCountry: "ET",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 40.713129,
            longitude: -74.003693,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
          department: [
            { "@type": "MedicalSpecialty", name: "Cardiology" },
            { "@type": "MedicalSpecialty", name: "Pediatrics" },
            { "@type": "EmergencyService", name: "Emergency Department" },
          ],
        }}
      />
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-slate-50 pt-12 pb-32 lg:pt-16 lg:pb-48">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(#136dec 0.5px, transparent 0.5px), radial-gradient(#136dec 0.5px, #f8fafc 0.5px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Everleaf Medical Center
              </div>
              <h1 className="text-4xl lg:text-6xl font-brand font-bold text-slate-900 leading-tight mb-6">
                Care That Grows{" "}
                <span className="text-primary relative inline-block">
                  With You.
                  <svg
                    className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-40"
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
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Committed to lifelong wellness through compassionate care,
                innovation, and trust. Experience world-class healthcare in a
                serene environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openAppointment()}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg hover:-translate-y-0.5"
                >
                  Request an Appointment
                </button>
              </div>
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-3">
                  <img
                    src="/images/image-43.jpg"
                    alt="Doctor"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/images/image-3.jpg"
                    alt="Doctor"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="/images/image-4.jpg"
                    alt="Doctor"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                    12k+
                  </div>
                </div>
                <p>Happy patients recovered this year.</p>
              </div>
            </div>
            <div className="relative hidden lg:block h-[480px] w-full">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              {heroImages.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroImage ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                  <img
                    src={src}
                    alt={`Hospital Highlight ${index + 1}`}
                    className="rounded-2xl shadow-2xl object-cover w-full h-full"
                  />
                </div>
              ))}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 max-w-xs animate-[bounce_3s_infinite]">
                <div className="bg-green-100 p-3 rounded-lg text-green-600">
                  <span className="material-icons text-2xl">verified_user</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    98% Satisfaction
                  </p>
                  <p className="text-xs text-slate-500">
                    Based on patient reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Info Cards */}
      <div className="relative z-20 -mt-20 lg:-mt-24 mb-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-slate-100">
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="bg-red-50 p-3 rounded-lg text-red-500 group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">emergency</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Emergency
              </h3>
              <p className="text-sm text-slate-500 mb-2">
                Immediate care for critical situations.
              </p>
              <Link
                to="/services/emergency"
                className="text-red-500 font-semibold text-sm flex items-center gap-1 group-hover:underline"
              >
                Call 911{" "}
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group border-l border-r border-slate-100">
            <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">person_search</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Find a Specialist
              </h3>
              <p className="text-sm text-slate-500 mb-2">
                Search our directory of expert doctors.
              </p>
              <Link
                to="/doctors"
                className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:underline"
              >
                Search Doctors{" "}
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="bg-secondary/10 p-3 rounded-lg text-secondary group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">domain</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Our Departments
              </h3>
              <p className="text-sm text-slate-500 mb-2">
                Explore our specialized medical units.
              </p>
              <Link
                to="/departments"
                className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:underline"
              >
                View Departments{" "}
                <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Medical Excellence
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-slate-600 text-lg">
              We provide a wide range of medical services to meet every need of
              your family, from routine checkups to complex surgeries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: "favorite",
                title: "Cardiology",
                desc: "Expert heart care including diagnostics, treatment, and preventive cardiology services.",
                link: "/departments/cardiology",
              },
              {
                icon: "psychology",
                title: "Neurology",
                desc: "Advanced diagnosis and treatment for disorders affecting the brain, spine, and nerves.",
                link: "/departments/neurology",
              },
              {
                icon: "child_care",
                title: "Pediatrics",
                desc: "Compassionate care for infants, children, and adolescents in a kid-friendly environment.",
                link: "/departments/pediatrics",
              },
              {
                icon: "science",
                title: "Laboratory",
                desc: "State-of-the-art laboratory services providing accurate and timely diagnostic results.",
                link: "/services/laboratory",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-icons text-3xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 mb-4 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <Link
                  to={service.link}
                  className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn More{" "}
                  <span className="material-icons text-xs">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-all shadow-md"
            >
              View All Services
              <span className="material-icons text-sm ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Our Experts
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">
                Meet Our Leading Specialists
              </h2>
            </div>
            <div className="hidden md:block">
              <Link
                to="/doctors"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-primary bg-blue-50 border border-blue-100 rounded-lg hover:bg-blue-100 transition-all"
              >
                View All Doctors
                <span className="material-icons text-sm ml-2">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Neurologist",
                img: "/images/doctors/team-dr-sarah-johnson.jpg",
                exp: "15 Years",
                deg: "MBBS, MD",
              },
              {
                name: "Dr. Mark Williams",
                role: "Cardiologist",
                img: "/images/doctors/team-dr-mark-williams.jpg",
                exp: "12 Years",
                deg: "MBBS, MD",
              },
              {
                name: "Dr. Emily Chen",
                role: "Pediatrician",
                img: "/images/doctors/team-dr-emily-chen.jpg",
                exp: "18 Years",
                deg: "MBBS, PhD",
              },
            ].map((doc, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
              >
                <div className="relative h-80 overflow-hidden bg-slate-100">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Slide-up Overlay */}
                  <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 flex flex-col justify-center text-white text-center z-20">
                    <h4 className="font-bold text-lg mb-2 text-blue-300 font-serif">
                      Expert Care
                    </h4>
                    <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                      Committed to providing the highest standard of medical
                      excellence and compassionate patient care.
                    </p>
                    <div className="pt-2 border-t border-slate-700 flex gap-4 justify-center">
                      <button
                        onClick={() =>
                          openAppointment({ doctorName: doc.name })
                        }
                        className="px-4 py-2 bg-primary rounded-full text-sm font-bold hover:bg-primary-dark transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 font-serif">
                    {doc.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    {doc.role}
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-slate-500 border-t border-slate-200 pt-4">
                    <span>{doc.exp} Exp.</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{doc.deg}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link
              to="/doctors"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-primary bg-blue-50 border border-blue-100 rounded-lg hover:bg-blue-100 transition-all"
            >
              View All Doctors
              <span className="material-icons text-sm ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Revamped CTA Section */}
      <section className="py-24 relative overflow-hidden" id="newsletter">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Start Your Journey
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to Prioritize <br />
              <span className="text-blue-300">Your Health?</span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Schedule an appointment today to consult with our experts. We are
              committed to helping you lead a healthier, happier life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => openAppointment()}
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/30 hover:scale-105 flex items-center gap-2"
              >
                Book Appointment Now{" "}
                <span className="material-icons">calendar_today</span>
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">
                Patient Stories
              </h2>
              <p className="text-slate-600 text-lg">
                Hear from those who have experienced our care firsthand.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollTestimonials("left")}
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors bg-white z-10"
              >
                <span className="material-icons">arrow_back</span>
              </button>
              <button
                onClick={() => scrollTestimonials("right")}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors z-10"
              >
                <span className="material-icons">arrow_forward</span>
              </button>
            </div>
          </div>
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="min-w-[100%] md:min-w-[50%] lg:min-w-[33.33%] snap-center"
              >
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full relative flex flex-col hover:shadow-md transition-all duration-300">
                  <a
                    href="#"
                    className="absolute top-6 right-6 text-slate-300 hover:text-primary transition-colors"
                    title="Read on Google"
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
                  <p className="text-slate-600 mb-6 leading-relaxed relative z-10 flex-grow">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 font-serif">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider mb-8">
            Trusted by Insurance Partners
          </p>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex w-max items-center gap-12 mx-auto">
              {[
                { name: "MediGuard", icon: "health_and_safety" },
                { name: "LifeCare", icon: "shield" },
                { name: "HealthPlus", icon: "add_moderator" },
                { name: "GlobalAssure", icon: "verified" },
                { name: "CareFirst", icon: "favorite" },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center gap-2 text-2xl font-bold text-slate-600 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:text-primary transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <span className="material-icons text-3xl">
                    {partner.icon}
                  </span>{" "}
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
