import React, { useState } from "react";
import { submitForm } from "../utils/formService";
import SEO from "../components/SEO";
import { contactFormSchema, validateField } from "../utils/validation";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [hasSubmitted, setHasSubmitted] = useState(false); // Track if form was submitted
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Only validate on blur if:
    // 1. Field has a value (user typed something), OR
    // 2. Form was already submitted once
    if (value.trim() || hasSubmitted) {
      const error = validateField(contactFormSchema, name, value);
      if (error) {
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setHasSubmitted(true); // Mark form as submitted

    // Validate all fields
    const validation = contactFormSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("error");
      setErrorMessage("Please correct the errors below.");
      return;
    }

    try {
      await submitForm(validation.data, "contact");
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
      setErrors({});
      setTouched({});
      setHasSubmitted(false); // Reset for next message
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="animate-fade-in">
      <SEO
        title="Contact Us"
        description="Get in touch with Everleaf Medical Center. Find our location, phone numbers, and visiting hours. Emergency contact available."
        canonical="https://everleaf-medical.com/contact"
      />
      <header className="relative bg-white border-b border-slate-100 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80"
            alt="Hospital Building"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Get in Touch with <br />
                <span className="text-primary">Everleaf Medical Center</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                We are here to help. Whether you need to schedule an
                appointment, have questions about our services, or need
                emergency assistance, our team is ready to respond.
              </p>
              <div className="space-y-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-red-600 font-bold uppercase tracking-wide text-sm mb-2">
                    Emergency Cases
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-red-500 text-3xl">
                      phone_in_talk
                    </span>
                    <span className="text-3xl font-bold text-slate-900">
                      911
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    For life-threatening emergencies, call immediately.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div>
                    <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                      <span className="material-icons text-sm">phone</span>{" "}
                      General Inquiries
                    </h3>
                    <p className="text-xl font-bold text-slate-800">
                      +251 954 123-456
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      info@everleaf.com
                    </p>
                  </div>
                  <div>
                    <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                      <span className="material-icons text-sm">
                        access_time
                      </span>{" "}
                      Working Hours
                    </h3>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li className="flex justify-between w-40">
                        <span>Mon - Fri:</span>{" "}
                        <span className="font-medium">8:00 - 20:00</span>
                      </li>
                      <li className="flex justify-between w-40">
                        <span>Saturday:</span>{" "}
                        <span className="font-medium">9:00 - 18:00</span>
                      </li>
                      <li className="flex justify-between w-40">
                        <span>Sunday:</span>{" "}
                        <span className="font-medium">9:00 - 14:00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <span className="material-icons text-4xl">
                      check_circle
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-600 mb-8 max-w-xs">
                    Thank you for reaching out. Our support team will get back
                    to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 animate-fade-in"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Send us a Message
                  </h3>
                  {status === "error" && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 flex items-start gap-2">
                      <span className="material-icons text-lg mt-0.5">
                        error_outline
                      </span>
                      <span>
                        {errorMessage ||
                          "Failed to send message. Please try again later."}
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={status === "submitting"}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50"} focus:outline-none focus:ring-2 ${errors.fullName ? "focus:ring-red-500/50 focus:border-red-500" : "focus:ring-primary/50 focus:border-primary"} transition-all text-slate-800 placeholder-slate-400 disabled:opacity-60`}
                        placeholder="John Doe"
                      />
                      {errors.fullName &&
                        (touched.fullName || hasSubmitted) && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <span className="material-icons text-sm">
                              error
                            </span>
                            {errors.fullName}
                          </p>
                        )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={status === "submitting"}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50"} focus:outline-none focus:ring-2 ${errors.email ? "focus:ring-red-500/50 focus:border-red-500" : "focus:ring-primary/50 focus:border-primary"} transition-all text-slate-800 placeholder-slate-400 disabled:opacity-60`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (touched.email || hasSubmitted) && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <span className="material-icons text-sm">error</span>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status === "submitting"}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-600 disabled:opacity-60"
                    >
                      <option>General Inquiry</option>
                      <option>Appointment Request</option>
                      <option>Feedback</option>
                      <option>Billing Question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={status === "submitting"}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-300 bg-red-50" : "border-slate-200 bg-slate-50"} focus:outline-none focus:ring-2 ${errors.message ? "focus:ring-red-500/50 focus:border-red-500" : "focus:ring-primary/50 focus:border-primary"} transition-all text-slate-800 placeholder-slate-400 min-h-[120px] max-h-60 disabled:opacity-60`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && (touched.message || hasSubmitted) && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <span className="material-icons text-sm">error</span>
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 px-6 text-white font-bold bg-primary hover:bg-primary-dark rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-wait"
                  >
                    {status === "submitting"
                      ? "Sending Message..."
                      : "Send Message"}
                    {!status.startsWith("sub") && (
                      <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                        near_me
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-200 relative">
        <iframe
          title="Hospital Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1653316669938!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-12 md:w-96 bg-white p-6 rounded-xl shadow-2xl border border-slate-100">
          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="material-icons text-primary">directions</span>{" "}
            Directions & Transportation
          </h4>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                <span className="material-icons text-sm">directions_bus</span>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Public Transit</p>
                <p className="text-slate-500">
                  Bus lines M15, M22 stop directly in front of the main
                  entrance.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                <span className="material-icons text-sm">local_parking</span>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Parking</p>
                <p className="text-slate-500">
                  Visitor parking garage is available on 4th Ave (5 Br/hr).
                  Valet service available at main entrance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
