import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";

const Pharmacy: React.FC = () => {
  const { openAppointment } = useOutletContext<{
    openAppointment: OpenAppointmentFunc;
  }>();

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="animate-fade-in">
      <SEO
        title="Pharmacy Services"
        description="Full-service hospital pharmacy providing prescription management, counseling, and home delivery services."
        canonical="https://everleaf-medical.com/services/pharmacy"
      />
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/pharmacy-hero.jpg"
            alt="Modern Pharmacy"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-green-300 font-semibold tracking-wide uppercase text-sm">
              <span className="material-icons text-lg">local_pharmacy</span>
              <span>Accredited Pharmacy Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Expert Care for Your <br />
              Medication Needs
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Our full-service hospital pharmacy ensures accurate, safe, and
              timely medication management. From inpatient prescriptions to
              over-the-counter advice, our clinical pharmacists are here to
              support your recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={(e) => scrollToSection(e, "services")}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-secondary hover:bg-green-600 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                View Pharmacy Services
              </button>
              <button
                onClick={() => openAppointment({ department: "Pharmacy" })}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
              >
                Consult a Pharmacist
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50 relative" id="services">
        <div className="absolute inset-0 hero-pattern pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Comprehensive Pharmaceutical Care
            </h2>
            <p className="text-slate-600">
              We combine advanced technology with compassionate care to provide
              a wide range of pharmacy services tailored to your health needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: "receipt_long",
                title: "Prescription Management",
                desc: "Our automated prescription processing system ensures high accuracy and speed. We handle refills, transfers, and coordinate with your physicians to manage complex medication regimens efficiently.",
                items: [
                  "Automatic Refill Reminders",
                  "Drug Interaction Checks",
                ],
                color: "blue",
                colorName: "primary",
              },
              {
                icon: "contact_support",
                title: "Consultation Services",
                desc: "Speak directly with our clinical pharmacists in private consultation rooms. We provide detailed counseling on medication side effects, proper usage, and lifestyle adjustments for optimal results.",
                items: [
                  "Medication Therapy Management",
                  "One-on-One Counseling",
                ],
                color: "teal",
                colorName: "teal-600",
              },
              {
                icon: "local_shipping",
                title: "Medicine Delivery",
                desc: "Cannot make it to the pharmacy? We offer secure and prompt home delivery services for your prescriptions and medical supplies within the city limits, ensuring you never miss a dose.",
                items: [
                  "Same-Day Local Delivery",
                  "Temperature-Controlled Shipping",
                ],
                color: "green",
                colorName: "secondary",
              },
              {
                icon: "medication",
                title: "Over-the-Counter Medications",
                desc: "Browse our extensive selection of non-prescription medications, vitamins, supplements, and first-aid supplies. Our staff is always available to help you choose the right product.",
                items: ["Nutritional Supplements", "Home Health Equipment"],
                color: "indigo",
                colorName: "indigo-600",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 shadow-card border flex flex-col md:flex-row gap-6 items-start group hover:-translate-y-1 transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className={`flex-shrink-0 w-16 h-16 bg-${service.color}-50 rounded-xl flex items-center justify-center text-${service.colorName} group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="material-icons text-3xl">
                    {service.icon}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--color-text)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-500 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span className="material-icons text-secondary text-sm">
                          check_circle
                        </span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-3xl p-8 md:p-12 border overflow-hidden relative"
            style={{
              background:
                "linear-gradient(to right, var(--color-bg-alt), var(--color-surface))",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase rounded-full"
                  style={{
                    color: "var(--color-text)",
                    backgroundColor: "var(--color-bg-alt)",
                  }}
                >
                  Our Commitment
                </div>
                <h3
                  className="text-3xl font-serif font-bold mb-6"
                  style={{ color: "var(--color-text)" }}
                >
                  Safety and Quality Assurance
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Patient safety is our absolute priority. We utilize
                  state-of-the-art robotic dispensing systems to minimize human
                  error and conduct rigorous quality checks on every
                  prescription dispensed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="p-2 rounded-lg shadow-sm"
                      style={{ backgroundColor: "var(--color-surface)" }}
                    >
                      <span className="material-icons text-secondary">
                        verified_user
                      </span>
                    </div>
                    <div>
                      <h4
                        className="font-bold"
                        style={{ color: "var(--color-text)" }}
                      >
                        Triple-Check Verification
                      </h4>
                      <p className="text-sm text-slate-500">
                        Every prescription is verified by three separate checks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div
                      className="p-2 rounded-lg shadow-sm"
                      style={{ backgroundColor: "var(--color-surface)" }}
                    >
                      <span className="material-icons text-secondary">
                        inventory_2
                      </span>
                    </div>
                    <div>
                      <h4
                        className="font-bold"
                        style={{ color: "var(--color-text)" }}
                      >
                        Secure Storage
                      </h4>
                      <p className="text-sm text-slate-500">
                        Climate-controlled environments for sensitive
                        medications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/pharmacy-body-1.jpg"
                  alt="Pharmacist checking quality"
                  className="rounded-2xl shadow-xl w-full object-cover h-80"
                />
                <div
                  className="absolute -bottom-6 -left-6 p-4 rounded-xl shadow-lg border max-w-xs hidden md:block"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <span className="material-icons text-secondary">
                        thumb_up
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">
                        Customer Satisfaction
                      </p>
                      <p
                        className="text-lg font-bold"
                        style={{ color: "var(--color-text)" }}
                      >
                        99.8% Accuracy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, var(--color-cta-from), var(--color-cta-to))",
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">
            medication
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Need Assistance?
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Have Questions About <br />
              <span style={{ color: "var(--color-cta-accent)" }}>
                Your Medication?
              </span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Our pharmacists are available 24/7 to answer your questions
              regarding drug interactions, dosages, or side effects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5551234567"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white rounded-full shadow-xl transition-all hover:scale-105"
                style={{ color: "var(--color-cta-from)" }}
              >
                Call Pharmacy
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Visit Pharmacy
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/60">
              For prescription refills, please use our{" "}
              <Link
                to="/contact"
                className="text-white font-semibold hover:underline"
              >
                Refill Request Form
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pharmacy;
