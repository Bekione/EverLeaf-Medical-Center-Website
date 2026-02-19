import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO";

const Emergency: React.FC = () => {
  const [showGuidelineModal, setShowGuidelineModal] = useState(false);

  return (
    <div className="animate-fade-in">
      <SEO
        title="Emergency Department (ER)"
        description="24/7 Level I Trauma Center providing immediate critical care. Call 911 for life-threatening emergencies."
        canonical="https://everleaf-medical.com/services/emergency"
      />
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero/emergency-hero.jpg"
            alt="Emergency Room"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-red-100 uppercase bg-red-600/80 rounded-full border border-red-500/50 shadow-sm">
                Critical Care Unit
              </span>
              <span className="inline-flex items-center text-xs font-medium text-red-200">
                <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>{" "}
                Open 24 Hours
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Emergency Care <br />
              <span className="text-white">When Seconds Count.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Our Level I Trauma Center is staffed 24/7 by board-certified
              emergency physicians and specialized nurses, ready to handle any
              medical crisis with expertise, speed, and compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:911"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-red-600 rounded-lg hover:bg-red-700 shadow-glow hover:shadow-lg hover:-translate-y-0.5"
              >
                Call Emergency
                <span className="material-icons text-lg ml-2">
                  phone_in_talk
                </span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors shadow-sm"
              >
                Get Directions
                <span className="material-icons text-lg ml-2">directions</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16 bg-slate-50 relative">
        <div className="absolute inset-0 hero-pattern pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">
                24/7 Trauma & Critical Care
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Everleaf's Emergency Department is a state-of-the-art facility
                  designed to provide comprehensive emergency services to
                  patients of all ages. From minor injuries to life-threatening
                  conditions, our team is prepared for everything.
                </p>
                <p>
                  We utilize the latest in medical technology, including
                  advanced imaging (CT, MRI) located directly within the ED for
                  immediate diagnostics, ensuring that treatment decisions are
                  made rapidly and accurately.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-10">
                {[
                  { val: "0", unit: "min", sub: "Wait for Critical Cases" },
                  { val: "50+", unit: "", sub: "Trauma Specialists" },
                  { val: "24/7", unit: "", sub: "Lab & Pharmacy" },
                  { val: "Level 1", unit: "", sub: "Trauma Center" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl shadow-sm border"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    <div className="text-4xl font-bold text-primary mb-1">
                      {stat.val}{" "}
                      <span className="text-lg text-slate-400 font-normal">
                        {stat.unit}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
              <img
                src="/images/emergency-body-1.jpg"
                alt="Emergency Medical Team"
                className="relative rounded-2xl shadow-2xl border-4 border-white z-10 w-full object-cover h-[600px]"
              />
              <div
                className="absolute bottom-8 left-8 right-8 backdrop-blur p-6 rounded-xl shadow-lg z-20 border"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--color-surface) 95%, transparent)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
                    <span className="material-icons text-2xl">
                      airport_shuttle
                    </span>
                  </div>
                  <div>
                    <h4
                      className="font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      Ambulance Services
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Our fleet of advanced life support ambulances is
                      strategically positioned to ensure the fastest response
                      times in the region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 border-y"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
              Patient Flow
            </span>
            <h2
              className="text-3xl font-serif font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Our Triage Process
            </h2>
            <p className="text-slate-600">
              We use a standardized triage system to ensure that patients with
              the most severe conditions receive immediate attention. Here is
              what to expect upon arrival.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>
            {[
              {
                step: "01",
                title: "Arrival & Registration",
                desc: "Upon arrival, check in at the reception desk. If the condition is life-threatening, you will be taken immediately to a treatment room.",
              },
              {
                step: "02",
                title: "Triage Assessment",
                desc: "A specialized nurse will assess your vitals and the severity of your condition to prioritize your care based on medical urgency.",
              },
              {
                step: "03",
                title: "Diagnosis & Treatment",
                desc: "You will be seen by an emergency physician for examination, testing, and treatment. We aim to discharge or admit you as efficiently as possible.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div
                  className="w-24 h-24 rounded-full border-4 flex items-center justify-center mb-6 shadow-sm group-hover:border-primary transition-colors duration-300"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <span className="text-3xl font-bold text-slate-300 group-hover:text-primary transition-colors">
                    {item.step}
                  </span>
                </div>
                <div
                  className="p-6 rounded-xl w-full hover:-translate-y-1 transition-transform duration-300"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--color-text)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
            Specialized Emergency Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow duration-300 group"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <div className="h-2 bg-red-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-icons text-3xl">favorite</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Cardiac Care Team
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Rapid response for heart attacks with 24/7 catheterization lab
                  availability. Our "Door-to-Balloon" time is consistently below
                  national averages.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="material-icons text-green-500 text-xs">
                      check_circle
                    </span>{" "}
                    Chest Pain Center
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-icons text-green-500 text-xs">
                      check_circle
                    </span>{" "}
                    Advanced Cardiac Life Support
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow duration-300 group"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <div className="h-2 bg-primary"></div>
              <div className="p-8">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <span className="material-icons text-3xl">psychology</span>
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  Stroke Center
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  Certified Primary Stroke Center providing immediate
                  clot-busting therapies and neuro-interventional procedures to
                  minimize brain damage.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="material-icons text-green-500 text-xs">
                      check_circle
                    </span>{" "}
                    Rapid CT/MRI access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-icons text-green-500 text-xs">
                      check_circle
                    </span>{" "}
                    Tele-neurology support
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow duration-300 group"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <div className="h-2 bg-yellow-500"></div>
              <div className="p-8">
                <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-icons text-3xl">child_care</span>
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  Pediatric Emergency
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6">
                  A separate, child-friendly emergency area staffed by pediatric
                  specialists dedicated to making children feel safe and
                  comfortable during crises.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="material-icons text-green-500 text-xs">
                      check_circle
                    </span>{" "}
                    Child Life Specialists
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-icons text-green-500 text-xs">
                      check_circle
                    </span>{" "}
                    Pediatric Sedation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-slate-900 text-white relative overflow-hidden"
        id="contact"
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 border border-white/10 rounded-3xl p-10 lg:p-16 backdrop-blur-sm">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Emergency Contact Information
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                If you are experiencing a medical emergency, please call 911
                immediately. For inquiries regarding a patient currently in our
                Emergency Department, use the main hospital line.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-glow">
                    <span className="material-icons text-white">
                      phone_in_talk
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-slate-400 uppercase tracking-wider">
                      Emergency Hotline
                    </span>
                    <span className="text-2xl font-bold">911</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <span className="material-icons text-white">phone</span>
                  </div>
                  <div>
                    <span className="block text-sm text-slate-400 uppercase tracking-wider">
                      Main Hospital Line
                    </span>
                    <span className="text-xl font-semibold">
                      +1 (555) 123-4567
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <span className="material-icons text-white">print</span>
                  </div>
                  <div>
                    <span className="block text-sm text-slate-400 uppercase tracking-wider">
                      Poison Control
                    </span>
                    <span className="text-xl font-semibold">
                      1-800-222-1222
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-auto flex flex-col items-center justify-center text-center bg-white/10 rounded-2xl p-8 border border-white/10 max-w-sm">
              <span className="material-icons text-5xl text-red-500 mb-4 animate-pulse">
                notification_important
              </span>
              <h3 className="text-xl font-bold mb-2">
                When to come to the ER?
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                Chest pain, difficulty breathing, severe bleeding, head injury,
                loss of consciousness, or severe abdominal pain.
              </p>
              <button
                onClick={() => setShowGuidelineModal(true)}
                className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
              >
                View Full Guideline
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guideline Modal */}
      {showGuidelineModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in relative"
            style={{ backgroundColor: "var(--color-surface)" }}
          >
            <button
              onClick={() => setShowGuidelineModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <span className="material-icons text-2xl">close</span>
            </button>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <span className="material-icons text-2xl">
                    local_hospital
                  </span>
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  ER Visitor Guidelines
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="material-icons text-primary text-sm">
                      priority_high
                    </span>
                    When to call 911
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600">
                    <li>Difficulty breathing or shortness of breath</li>
                    <li>Chest pain or upper abdominal pain or pressure</li>
                    <li>Fainting, sudden dizziness, or weakness</li>
                    <li>Changes in vision</li>
                    <li>Confusion or changes in mental status</li>
                    <li>Any sudden or severe pain</li>
                    <li>Uncontrolled bleeding</li>
                  </ul>
                </div>

                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: "var(--color-primary-light)" }}
                >
                  <h4
                    className="font-bold mb-2 text-sm"
                    style={{ color: "var(--color-text)" }}
                  >
                    What to Bring
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="material-icons text-blue-500 text-xs mt-0.5">
                        check
                      </span>
                      <span>Photo ID and health insurance card</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-icons text-blue-500 text-xs mt-0.5">
                        check
                      </span>
                      <span>List of current medications and allergies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-icons text-blue-500 text-xs mt-0.5">
                        check
                      </span>
                      <span>Emergency contact information</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-sm">
                    Visitor Policy
                  </h4>
                  <p className="text-sm text-slate-600">
                    To ensure the safety of our patients and staff, we currently
                    allow one visitor per patient in the ER. Masks are mandatory
                    in all clinical areas.
                  </p>
                </div>
              </div>

              <div
                className="mt-8 pt-6 border-t"
                style={{ borderColor: "var(--color-border)" }}
              >
                <button
                  onClick={() => setShowGuidelineModal(false)}
                  className="w-full py-3 font-bold rounded-lg transition-colors"
                  style={{
                    backgroundColor: "var(--color-text)",
                    color: "var(--color-surface)",
                  }}
                >
                  Close Guidelines
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Emergency;
