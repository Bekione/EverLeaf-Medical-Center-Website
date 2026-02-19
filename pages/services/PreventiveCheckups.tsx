import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";

const PreventiveCheckups: React.FC = () => {
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
        title="Preventive Health Checkups"
        description="Comprehensive health screening packages for all ages. Detect health issues early with our executive checkups."
        canonical="https://everleaf-medical.com/services/preventive-checkups"
      />
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/preventive-checkup-hero.jpg"
            alt="Preventive Health Checkup"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-blue-300 font-semibold tracking-wide uppercase text-sm">
              <span className="material-icons text-lg">health_and_safety</span>
              <span>Preventive Care</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Invest in Your Health with <br />
              Comprehensive Checkups
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Early detection is key to a long, healthy life. Our personalized
              screening packages provide a complete picture of your health
              status in a comfortable environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={(e) => scrollToSection(e, "packages")}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5"
              >
                View Packages
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className="text-3xl font-serif font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              The Importance of Early Detection
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Many chronic diseases are silent in their early stages. Regular
              health screenings can detect problems before they start, giving
              you the best chance for effective treatment and a healthy future.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "monitor_heart",
                title: "Heart Health",
                desc: "Identify risk factors like high blood pressure and cholesterol early to prevent heart disease and stroke.",
                color: "red",
              },
              {
                icon: "water_drop",
                title: "Diabetes Screening",
                desc: "Early detection of pre-diabetes allows for lifestyle changes that can prevent or delay the onset of Type 2 diabetes.",
                color: "blue",
              },
              {
                icon: "healing",
                title: "Cancer Prevention",
                desc: "Screening tests can find some cancers early, when treatment is most likely to be successful.",
                color: "purple",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl shadow-card border"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className={`w-12 h-12 bg-${item.color}-50 rounded-xl flex items-center justify-center text-${item.color}-500 mb-6`}
                >
                  <span className="material-icons text-2xl">{item.icon}</span>
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 relative"
        id="packages"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#136dec 0.5px, transparent 0.5px), radial-gradient(#136dec 0.5px, #f6f7f8 0.5px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              Tailored for You
            </span>
            <h2
              className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Comprehensive Screening Packages
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Choose the package that best fits your age, lifestyle, and health
              concerns.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div
              className="rounded-2xl shadow-card border overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="p-8 border-b"
                style={{
                  backgroundColor: "var(--color-bg-alt)",
                  borderColor: "var(--color-border)",
                }}
              >
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  Basic Wellness
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Essential health monitoring for young adults.
                </p>
                <div className="flex items-baseline">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "var(--color-text)" }}
                  >
                    $199
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  {[
                    "Physical Examination",
                    "Complete Blood Count (CBC)",
                    "Blood Sugar & Cholesterol",
                    "Urinalysis",
                    "Doctor Consultation",
                  ].map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="material-icons text-green-500 text-lg">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <button
                  onClick={() =>
                    openAppointment({
                      department: "Preventive Checkups",
                      serviceName: "Basic Wellness Package",
                    })
                  }
                  className="block w-full py-3 px-4 bg-white border-2 border-primary text-primary font-bold text-center rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Select Basic
                </button>
              </div>
            </div>

            <div
              className="rounded-2xl shadow-xl ring-2 ring-primary relative overflow-hidden flex flex-col transform md:-translate-y-4"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div
                className="p-8 border-b"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-primary) 5%, var(--color-surface))",
                  borderColor: "var(--color-border)",
                }}
              >
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  Executive Checkup
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  In-depth analysis for busy professionals.
                </p>
                <div className="flex items-baseline">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "var(--color-text)" }}
                  >
                    $399
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="material-icons text-green-500 text-lg">
                      check_circle
                    </span>
                    <span className="font-semibold">All Basic Features</span>
                  </li>
                  {[
                    "Liver & Kidney Function Tests",
                    "ECG (Electrocardiogram)",
                    "Chest X-Ray",
                    "Abdominal Ultrasound",
                    "Dietary Consultation",
                  ].map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="material-icons text-green-500 text-lg">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <button
                  onClick={() =>
                    openAppointment({
                      department: "Preventive Checkups",
                      serviceName: "Executive Checkup Package",
                    })
                  }
                  className="block w-full py-3 px-4 bg-primary text-white font-bold text-center rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30"
                >
                  Select Executive
                </button>
              </div>
            </div>

            <div
              className="rounded-2xl shadow-card border overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-300"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="p-8 border-b"
                style={{
                  backgroundColor: "var(--color-bg-alt)",
                  borderColor: "var(--color-border)",
                }}
              >
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  Senior Health
                </h3>
                <p className="text-slate-500 text-sm mb-4">
                  Specialized care for age 60+.
                </p>
                <div className="flex items-baseline">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "var(--color-text)" }}
                  >
                    $499
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="material-icons text-green-500 text-lg">
                      check_circle
                    </span>
                    <span className="font-semibold">
                      All Executive Features
                    </span>
                  </li>
                  {[
                    "Bone Density Scan",
                    "Cancer Markers (PSA/CEA)",
                    "Vision & Hearing Test",
                    "Cardiac Stress Test",
                  ].map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="material-icons text-green-500 text-lg">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <button
                  onClick={() =>
                    openAppointment({
                      department: "Preventive Checkups",
                      serviceName: "Senior Health Package",
                    })
                  }
                  className="block w-full py-3 px-4 bg-white border-2 border-primary text-primary font-bold text-center rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Select Senior
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-bg-alt)" }}
      >
        <div className="container mx-auto px-6">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "var(--color-text)" }}
          >
            Compare What's Included
          </h2>
          <div
            className="overflow-x-auto rounded-xl shadow-card border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  className="border-b"
                  style={{
                    backgroundColor: "var(--color-bg-alt)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <th className="p-4 md:p-6 text-sm font-semibold text-slate-500">
                    Tests / Features
                  </th>
                  <th
                    className="p-4 md:p-6 text-sm font-bold text-center w-1/5"
                    style={{ color: "var(--color-text)" }}
                  >
                    Basic
                  </th>
                  <th className="p-4 md:p-6 text-sm font-bold text-center text-primary w-1/5">
                    Executive
                  </th>
                  <th
                    className="p-4 md:p-6 text-sm font-bold text-center w-1/5"
                    style={{ color: "var(--color-text)" }}
                  >
                    Senior
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    name: "Physical Exam & Consultation",
                    basic: true,
                    exec: true,
                    senior: true,
                  },
                  {
                    name: "Blood Work (CBC, Sugar, Cholesterol)",
                    basic: true,
                    exec: true,
                    senior: true,
                  },
                  {
                    name: "Detailed Lab (Liver, Kidney, Thyroid)",
                    basic: false,
                    exec: true,
                    senior: true,
                  },
                  {
                    name: "Imaging (X-Ray, Ultrasound)",
                    basic: false,
                    exec: true,
                    senior: true,
                  },
                  {
                    name: "Cancer Screening Markers",
                    basic: false,
                    exec: false,
                    senior: true,
                  },
                  {
                    name: "Customized Wellness Plan",
                    basic: false,
                    exec: true,
                    senior: true,
                  },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-4 md:p-6 text-sm text-slate-700 font-medium">
                      {row.name}
                    </td>
                    <td className="p-4 md:p-6 text-center">
                      {row.basic ? (
                        <span className="material-icons text-green-500 text-base">
                          check_circle
                        </span>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-200 inline-block"></span>
                      )}
                    </td>
                    <td className="p-4 md:p-6 text-center">
                      {row.exec ? (
                        <span className="material-icons text-green-500 text-base">
                          check_circle
                        </span>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-200 inline-block"></span>
                      )}
                    </td>
                    <td className="p-4 md:p-6 text-center">
                      {row.senior ? (
                        <span className="material-icons text-green-500 text-base">
                          check_circle
                        </span>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-200 inline-block"></span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src="/images/preventive-checkup-body-2.jpg"
                alt="Wellness Planning"
                className="rounded-2xl shadow-xl w-full h-auto object-cover border border-slate-100"
              />
            </div>
            <div className="lg:w-1/2">
              <h2
                className="text-3xl font-serif font-bold mb-6"
                style={{ color: "var(--color-text)" }}
              >
                Customized Wellness Plans
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Your checkup results are just the beginning. Our medical team
                works with you to create a personalized roadmap to better
                health, focusing on nutrition, exercise, and lifestyle
                adjustments tailored to your unique biological profile.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div
                    className="p-1 rounded"
                    style={{
                      backgroundColor: "var(--color-primary-light)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <span className="material-icons text-sm font-bold">
                      restaurant
                    </span>
                  </div>
                  <div>
                    <h4
                      className="font-bold text-sm"
                      style={{ color: "var(--color-text)" }}
                    >
                      Personalized Nutrition
                    </h4>
                    <p className="text-sm text-slate-500">
                      Dietary recommendations based on your blood work.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="p-1 rounded"
                    style={{
                      backgroundColor: "var(--color-primary-light)",
                      color: "var(--color-primary)",
                    }}
                  >
                    <span className="material-icons text-sm font-bold">
                      directions_run
                    </span>
                  </div>
                  <div>
                    <h4
                      className="font-bold text-sm"
                      style={{ color: "var(--color-text)" }}
                    >
                      Activity Guidance
                    </h4>
                    <p className="text-sm text-slate-500">
                      Safe exercise routines for your fitness level.
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                to="/blog"
                className="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Read success stories{" "}
                <span className="material-icons text-sm ml-1">
                  arrow_forward
                </span>
              </Link>
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
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">
            health_and_safety
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Proactive Healthcare
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to Prioritize <br />
              <span style={{ color: "var(--color-cta-accent)" }}>
                Your Health?
              </span>
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Take the first step towards a healthier future. Book your
              preventive checkup today with our simple online scheduling tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  openAppointment({ department: "Preventive Checkups" })
                }
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white rounded-full shadow-xl transition-all hover:scale-105"
                style={{ color: "var(--color-cta-from)" }}
              >
                Schedule a Checkup
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreventiveCheckups;
