import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";
import Reveal from "../../components/Reveal";

const Diagnostics: React.FC = () => {
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
        title="Advanced Diagnostics"
        description="Precision diagnostic services ensuring accurate medical assessments for effective treatment plans."
        canonical="https://everleaf-medical.com/services/diagnostics"
      />
      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/diagnostics-hero.jpg"
            alt="Advanced Diagnostics Center"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <Reveal delay={0}>
              <div className="flex items-center gap-2 mb-4 text-blue-300 font-semibold tracking-wide uppercase text-sm">
                <span className="material-icons text-lg">medical_services</span>
                <span>Center of Excellence</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Advanced Diagnostic <br />
                Services for Precise Care
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                Accurate diagnosis is the cornerstone of effective treatment. At
                Everleaf, we combine world-class expertise with cutting-edge
                technology to provide rapid, reliable results you can trust.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5"
                >
                  Schedule a Test
                  <span className="material-icons text-sm ml-2">
                    calendar_today
                  </span>
                </Link>
                <button
                  onClick={(e) => scrollToSection(e, "capabilities")}
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
                >
                  Explore Capabilities
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2
                className="text-3xl font-serif font-bold mb-6"
                style={{ color: "var(--color-text)" }}
              >
                Why Precise Diagnostics Matter
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                Before any treatment plan begins, understanding the root cause
                is essential. Our Diagnostic Center operates with a philosophy
                of "Precision First," ensuring that every scan, test, and
                analysis contributes to a clear path forward for your health
                journey.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities Section */}
      <section
        className="py-20"
        id="capabilities"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Our Services
              </span>
              <h2
                className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4"
                style={{ color: "var(--color-text)" }}
              >
                Diagnostic Capabilities
              </h2>
              <p className="text-slate-500 text-lg">
                Comprehensive testing facilities under one roof, from routine
                blood work to advanced neurological imaging.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Advanced Imaging",
                icon: "scanner",
                desc: "High-definition MRI (3T), 64-slice CT Scans, and Digital X-Rays for detailed anatomical views.",
                items: ["MRI & CT Scan", "Ultrasound", "Mammography"],
                color: "primary",
              },
              {
                title: "Pathology Lab",
                icon: "science",
                desc: "Fully automated laboratory providing accurate results for hematology, biochemistry, and microbiology.",
                items: ["Blood Analysis", "Hormone Testing", "Biopsy Services"],
                color: "teal-500",
              },
              {
                title: "Cardiac Diagnostics",
                icon: "monitor_heart",
                desc: "Specialized testing to monitor heart health and detect cardiovascular issues early.",
                items: ["ECG & Echo", "Stress Testing", "Holter Monitoring"],
                color: "red-500",
              },
              {
                title: "Neurodiagnostics",
                icon: "psychology",
                desc: "Evaluation of the nervous system function to assist in diagnosing neurological disorders.",
                items: ["EEG (Brain Wave)", "EMG / NCS", "Sleep Studies"],
                color: "primary",
              },
            ].map((cap, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div
                  className="p-6 rounded-xl border hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col h-full"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg-alt)",
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-${cap.color} mb-4 shadow-sm group-hover:scale-110 transition-transform`}
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <span className="material-icons text-3xl">{cap.icon}</span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 grow">{cap.desc}</p>
                  <ul className="text-sm text-slate-600 space-y-2 mt-auto">
                    {cap.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="material-icons text-green-500 text-xs">
                          check_circle
                        </span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section
        className="py-20 overflow-hidden"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <Reveal
              from="left"
              threshold={0.1}
              className="lg:w-1/2 relative order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <img
                  alt="Advanced CT Scanner"
                  className="relative rounded-2xl shadow-2xl z-10 w-full object-cover"
                  src="/images/diagnostics-body-image-1.jpg"
                />
                <div
                  className="absolute bottom-6 right-6 z-20 p-4 rounded-lg shadow-xl border-l-4 border-primary max-w-xs"
                  style={{ backgroundColor: "var(--color-surface)" }}
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text)" }}
                  >
                    Newest Addition
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Siemens Somatom Definition Edge CT Scanner installed in
                    2023.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal
              from="right"
              threshold={0.1}
              className="lg:w-1/2 order-1 lg:order-2"
            >
              <div>
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-secondary uppercase bg-green-50 rounded-full">
                  Innovation
                </div>
                <h2
                  className="text-3xl lg:text-4xl font-serif font-bold mb-6"
                  style={{ color: "var(--color-text)" }}
                >
                  State-of-the-Art Technology
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We continuously invest in the latest medical technology to
                  ensure the lowest radiation doses, fastest scan times, and
                  clearest images possible. Our new 3T MRI creates exceptionally
                  detailed images of soft tissues, bone, and blood vessels.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    {
                      icon: "bolt",
                      text: "Faster scanning times for patient comfort",
                    },
                    {
                      icon: "shield",
                      text: "Reduced radiation exposure protocols",
                    },
                    {
                      icon: "cloud_upload",
                      text: "Digital results integrated with Patient Portal instantly",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-icons text-primary text-sm">
                          {item.icon}
                        </span>
                      </div>
                      <span className="text-slate-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container mx-auto px-6">
          <Reveal threshold={0.1}>
            <h2
              className="text-3xl font-serif font-bold text-center mb-12"
              style={{ color: "var(--color-text)" }}
            >
              Preparation for Your Visit
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "What to Bring",
                icon: "description",
                items: [
                  "Photo ID & Insurance Card",
                  "Doctor's Referral Form",
                  "List of current medications",
                ],
              },
              {
                title: "Fasting Instructions",
                icon: "no_food",
                items: [
                  "Ultrasound (Abdomen): Fast for 6-8 hrs",
                  "Cholesterol Tests: Fast for 12 hrs",
                  "CT Scans: Avoid food 4 hrs prior",
                ],
              },
              {
                title: "Clothing & Arrival",
                icon: "checkroom",
                items: [
                  "Wear loose, comfortable clothing",
                  "Remove jewelry/metal objects",
                  "Arrive 15 minutes early",
                ],
              },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100} threshold={0.1}>
                <div
                  className="p-8 rounded-2xl relative overflow-hidden group transition-colors h-full"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-icons text-8xl text-primary">
                      {step.icon}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-4 relative z-10"
                    style={{ color: "var(--color-text)" }}
                  >
                    {step.title}
                  </h3>
                  <ul
                    className="space-y-3 relative z-10"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl font-serif font-bold mb-8"
                style={{ color: "var(--color-text)" }}
              >
                Why Choose Everleaf Diagnostics?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-xl shadow-sm flex items-center justify-center text-primary flex-shrink-0"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <span className="material-icons text-2xl">
                      medical_services
                    </span>
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      Expert Radiologists
                    </h4>
                    <p className="text-slate-600 mt-1">
                      Our team includes board-certified radiologists with
                      sub-specialty training in neuro, body, and musculoskeletal
                      imaging.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-xl shadow-sm flex items-center justify-center text-primary flex-shrink-0"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <span className="material-icons text-2xl">timer</span>
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      Rapid Results
                    </h4>
                    <p className="text-slate-600 mt-1">
                      Most imaging reports are available to your referring
                      physician within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-xl shadow-sm flex items-center justify-center text-primary flex-shrink-0"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  >
                    <span className="material-icons text-2xl">
                      sentiment_satisfied
                    </span>
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      Patient-Centric Care
                    </h4>
                    <p className="text-slate-600 mt-1">
                      We prioritize your comfort and understanding, explaining
                      every step of the procedure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Medical staff reviewing diagnostic results"
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/diagnostics-body-image-2.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" id="appointment">
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
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">
            fact_check
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Reveal delay={0}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
                Start Your Diagnosis
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                Ready to schedule <br />
                <span style={{ color: "var(--color-cta-accent)" }}>
                  your test?
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                Call us directly or use our online portal to book your
                appointment. Ensure you have your doctor's referral ready.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:5551234567"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white rounded-full shadow-xl transition-all hover:scale-105"
                  style={{ color: "var(--color-cta-from)" }}
                >
                  <span className="material-icons mr-2">call</span> (555)
                  123-4567
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  Request Appointment
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-8 text-sm text-white/60">
                For emergencies, please dial 911 immediately.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diagnostics;
