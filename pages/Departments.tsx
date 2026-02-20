import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../Layout";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { departments } from "../data/departments";

const Departments: React.FC = () => {
  const { openAppointment } = useOutletContext<{
    openAppointment: OpenAppointmentFunc;
  }>();

  return (
    <div className="animate-fade-in">
      <SEO
        title="Departments"
        description="Explore our specialized medical departments including Cardiology, Neurology, Pediatrics, Surgery, and more."
        canonical="https://everleaf-medical.com/departments"
      />

      {/* Page Header */}
      <header
        className="border-b py-16"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <Reveal delay={0}>
            <span
              className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full"
              style={{
                color: "var(--color-primary-dark)",
                backgroundColor: "var(--color-primary-light)",
              }}
            >
              Medical Excellence
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="text-4xl lg:text-5xl font-serif font-bold mb-6"
              style={{ color: "var(--color-text)" }}
            >
              Our Specialized Departments
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p
              className="text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--color-text-muted)" }}
            >
              We offer a wide array of specialized medical departments, each
              staffed with experienced professionals dedicated to providing
              top-quality healthcare services.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Departments Grid */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-primary) 0.5px, transparent 0.5px), radial-gradient(var(--color-primary) 0.5px, transparent 0.5px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, idx) => (
              <Reveal key={dept.id} delay={idx * 70}>
                <div
                  className="rounded-2xl p-8 shadow-card border hover:-translate-y-2 transition-all duration-300 group h-full"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div
                    className={`w-16 h-16 bg-${dept.color}-50 rounded-2xl flex items-center justify-center text-${dept.color}-500 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="material-icons text-3xl">{dept.icon}</span>
                  </div>
                  <h3
                    className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
                    style={{ color: "var(--color-text)" }}
                  >
                    {dept.name}
                  </h3>
                  <p
                    className="mb-6 leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {dept.desc}
                  </p>
                  <Link
                    to={`/departments/${dept.id}`}
                    className="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors group/link"
                  >
                    View Details{" "}
                    <span className="material-icons text-sm ml-1 group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-cta-from), var(--color-cta-to))",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                Expert Consultation
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Need Expert <br />
                <span className="text-blue-300">Medical Advice?</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                Our specialists are ready to help you with personalized care
                plans. Schedule an appointment with one of our departments
                today.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => openAppointment()}
                  className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 hover:scale-105 flex items-center gap-2"
                >
                  Book Appointment <span className="material-icons">event</span>
                </button>
                <Link
                  to="/doctors"
                  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Find a Doctor
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
