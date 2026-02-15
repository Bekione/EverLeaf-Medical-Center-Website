import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";

interface AppointmentData {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  doctorName?: string;
  message?: string;
  referenceId: string;
  submittedAt: string;
}

const AppointmentConfirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const appointmentData = (
    location.state as { appointmentData?: AppointmentData }
  )?.appointmentData;

  useEffect(() => {
    // Redirect to home if accessed without valid appointment data
    if (!appointmentData) {
      navigate("/", { replace: true });
    }
  }, [appointmentData, navigate]);

  // Don't render anything if no data (will redirect)
  if (!appointmentData) {
    return null;
  }

  const formattedDate = new Date(
    appointmentData.submittedAt,
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex-grow flex items-center justify-center py-20 relative overflow-hidden min-h-[70vh] bg-slate-50">
      <SEO
        title="Appointment Request Received"
        description="Thank you for requesting an appointment. Our team will contact you shortly."
        // Usually, we don't want search engines indexing confirmation pages
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          robots: "noindex",
        }}
      />
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-card border border-slate-100 overflow-hidden animate-fade-in">
          <div className="p-10 md:p-14 text-center">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <span className="material-icons text-6xl text-secondary">
                check_circle
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Thank You, {appointmentData.fullName}!
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Your appointment request has been received. Our team will review
              your details and contact you at{" "}
              <strong>{appointmentData.email}</strong> or{" "}
              <strong>{appointmentData.phone}</strong> within 24 hours to
              confirm your appointment.
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-10 text-left border border-slate-200">
              <h3 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4 border-b border-slate-200 pb-2">
                Request Summary
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <span className="block text-xs text-slate-500 mb-1">
                    Patient Name
                  </span>
                  <span className="block text-base font-medium text-slate-900">
                    {appointmentData.fullName}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-1">
                    Department
                  </span>
                  <span className="block text-base font-medium text-slate-900">
                    {appointmentData.department}
                  </span>
                </div>
                {appointmentData.doctorName && (
                  <div>
                    <span className="block text-xs text-slate-500 mb-1">
                      Requested Doctor
                    </span>
                    <span className="block text-base font-medium text-slate-900">
                      {appointmentData.doctorName}
                    </span>
                  </div>
                )}
                <div>
                  <span className="block text-xs text-slate-500 mb-1">
                    Submitted On
                  </span>
                  <span className="block text-base font-medium text-slate-900">
                    {formattedDate}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-1">
                    Email
                  </span>
                  <span className="block text-base font-medium text-slate-900">
                    {appointmentData.email}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-1">
                    Phone
                  </span>
                  <span className="block text-base font-medium text-slate-900">
                    {appointmentData.phone}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="block text-xs text-slate-500 mb-1">
                    Reference ID
                  </span>
                  <span className="block text-base font-medium text-slate-900 font-mono bg-slate-200 px-2 py-0.5 rounded inline-block">
                    #{appointmentData.referenceId}
                  </span>
                </div>
                {appointmentData.message && (
                  <div className="sm:col-span-2">
                    <span className="block text-xs text-slate-500 mb-1">
                      Additional Notes
                    </span>
                    <span className="block text-sm text-slate-700 bg-white p-3 rounded border border-slate-200">
                      {appointmentData.message}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-soft hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="material-icons text-sm mr-2">home</span>
                Return to Home
              </Link>
              <Link
                to="/blog"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <span className="material-icons text-sm mr-2">article</span>
                Explore Health Articles
              </Link>
            </div>
          </div>
          <div className="bg-blue-50 p-4 text-center border-t border-blue-100">
            <p className="text-sm text-blue-800 flex items-center justify-center gap-2">
              <span className="material-icons text-sm">verified_user</span>
              Your health information is secure and protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
