import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../../Layout";
import SEO from "../../components/SEO";

const Surgery: React.FC = () => {
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
        title="Surgery Department"
        description="State-of-the-art surgical care utilizing minimally invasive techniques and robotic technology for faster recovery."
        canonical="https://everleaf-medical.com/departments/surgery"
      />
      <header className="bg-white border-b border-slate-100 py-12 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                Surgery Department
              </span>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Precision Surgical{" "}
                <span className="text-primary">Excellence</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Our Surgery Department combines world-class surgeons with
                cutting-edge technology to deliver precise, minimally invasive,
                and effective surgical care tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openAppointment({ department: "Surgery" })}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-soft hover:shadow-lg hover:-translate-y-0.5"
                >
                  Book Consultation
                </button>
                <button
                  onClick={(e) => scrollToSection(e, "specialists")}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  Meet Our Surgeons
                </button>
              </div>
            </div>
            <div className="relative hidden lg:flex w-full justify-center">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 max-h-[450px] w-full max-w-lg">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASpB4zEhU2d312bE6DML0nD_09L6xUkwbVl-4SSiHECRYzO9M687bP9Y0-aeNxD3KFcW5iw5pw3_r1_WM1FYmEr2VkBxf1BNrUXJirb-BDiuU2Z1p8OGO13dWa1TKogXhVnX3PdIrcL7W3mQE7Vu1Lh2Qp_85Ks3cEJ4e0FtiH4Oc3Mm6MJ_-mXEt-i7MLgdkI0MTch5GRoxToq4J9yXSWxCIVCDbd-5UM0Ey-lnxb2fYExx4AS5wtWdA4KBjKhAE1czMdyorFTxc"
                  alt="Advanced Surgery Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-full text-green-600">
                    <span className="material-icons">verified_user</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      99% Success Rate
                    </p>
                    <p className="text-xs text-slate-500">
                      In Minimally Invasive Procedures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Conditions We Treat
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide comprehensive surgical solutions for a wide range of
              medical conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Appendicitis",
                icon: "medical_services",
                color: "red",
                desc: "Emergency and planned removal of the appendix using laparoscopic techniques.",
              },
              {
                title: "Hernias",
                icon: "accessibility_new",
                color: "blue",
                desc: "Repair of inguinal, umbilical, and hiatal hernias with mesh reinforcement.",
              },
              {
                title: "Gallbladder Issues",
                icon: "healing",
                color: "yellow",
                desc: "Treatment for gallstones and inflammation, typically via cholecystectomy.",
              },
              {
                title: "Trauma",
                icon: "local_hospital",
                color: "orange",
                desc: "Critical care surgery for injuries resulting from accidents and emergencies.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 bg-${item.color}-100 text-${item.color}-600 rounded-lg flex items-center justify-center mb-4`}
                >
                  <span className="material-icons">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-24 self-start">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                Services & Procedures
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We specialize in a broad spectrum of surgical procedures,
                prioritizing patient safety and recovery speed through
                innovation.
              </p>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Minimally Invasive Surgery",
                  desc: "Utilizing small incisions to reduce pain, scarring, and recovery time for patients undergoing complex operations.",
                  icon: "content_cut",
                },
                {
                  title: "Laparoscopy",
                  desc: "Diagnostic and therapeutic procedures using a small camera to guide surgical instruments with high precision.",
                  icon: "visibility",
                },
                {
                  title: "General Surgery",
                  desc: "Routine and complex operations on abdominal organs, thyroid, skin, breast, and soft tissues.",
                  icon: "health_and_safety",
                },
                {
                  title: "Post-Operative Care",
                  desc: "Comprehensive monitoring and rehabilitation plans to ensure optimal healing and return to daily activities.",
                  icon: "monitor_heart",
                },
              ].map((service, i) => (
                <div key={i} className="group">
                  <div className="h-full bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-primary/30 transition-colors">
                    <div className="mb-4 inline-block p-3 bg-white rounded-lg shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                      <span className="material-icons text-2xl">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuChyPB_2UQHHnDtq1vVV9W34Ge7GGjcMoJyZsVwBs903xwp2IiZ4sIWcxC8NUOV6yXBQ0ubp6WDTC6vNgdukJgazVwbMbLoWdTYRN5ai2kdlI91LrRN982zR42Na5g4mCF77bkUlxgdV_pzFCpt7GYvOiwYe4_MNulR9XoPW1KAb4ohUU4O8gyCZBokScO3TRHZfSeXdEqf3NBK0xLmzT41RWkJ6JfxwVUNZfQ2U5mDOssWJxELkX5ZvTynyEI4rE8CoAb3dRYtCT8"
                alt="Robotic Surgery"
                className="rounded-2xl shadow-2xl border border-slate-700"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">
                Our Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Surgical Technology
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We invest in the latest surgical innovations to provide safer,
                more accurate, and less invasive treatments for our patients.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                    <span className="material-icons">
                      precision_manufacturing
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      Robotic Surgical Systems
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Enhanced precision and control for complex procedures,
                      reducing recovery times significantly.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                    <span className="material-icons">hd</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">
                      High-Definition Imaging
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Real-time, crystal-clear visualization of internal anatomy
                      during laparoscopic procedures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50" id="specialists">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">
                Our Team
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                Meet Our Surgeons
              </h2>
            </div>
            <Link
              to="/doctors"
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              View All Doctors{" "}
              <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "General Surgery Specialist",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0QueLjCwWgxaddETOK-shQR73kouJo9t9W6zRv5ay5BTRojZm02Kl8Y8NCm9UhC4ADZe1_mh9xU1uSWUeRiNNgJsLhiQmUnp_nL6ufkGUidb_C-Nd00lZMTohXecbY9N3Wr9iDIwu__hKWOT0gjEjUd_6Z8WwSsCvTJhEMqmBThQqkC-p8csG8NSEDNyiZ1AmLCrLxaRc53sevYLriIyy4J8otaXve0J5m-7BAMr25ZLviCb0qg2jAu-G0cZAM7lEsRBbb5Ut0Ok",
              },
              {
                name: "Dr. Michael Chen",
                role: "Trauma & Acute Care",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVF7Vx5w8Ryb7hOWCqr7p6VYGmnbENuYJMI9koJjgakAo0tT6HwecQekM0p8cAJkfJtCEuEG5kxkOSqKsfwt1QpWfBnQ-romAZ_MC3EP_Mj7MrCf2bADuUqcuFshVJyzmuHqagWepcyR4bXdNh4HtLAnNonmtq_vTGPMaFnFCbmbPNjN1kyjMwmkWv4wEwOZKgRSy4q9Qu52UWPFQT1lw8kgEvd4lNZ9D0TXMPsjLDCX7l8dkflKYA6d8detnoMguojFlIoEi5XCg",
              },
              {
                name: "Dr. Emily Davis",
                role: "Minimally Invasive Surgery",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6bhrrr0ZMVSYV0P5TqAweoZBjRflxtODiC0EhihtWXr27w5ittH1j1s8RikyFj00pBHaRDXU7Ao-A8a8UhSsh_FzMd5qgStPG9Xweslh2AdxW3dWg3pYuXAfxjP05dzbO8WgOTPyWVslotYafxf98HNdY0EdNxNPWwC7_cOKt2EIOnU_-jtevOf6TeL6UaONMToNe9edLxC5D6uAKY1F3xauI0fGJCDK_FLAoq7TKtP1R6cmH1f39mPae9FWxiUgZMSTiDg2BAfg",
              },
            ].map((doc, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button
                      onClick={() =>
                        openAppointment({
                          doctorName: doc.name,
                          department: "Surgery",
                        })
                      }
                      className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-full text-sm font-medium"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900">
                    {doc.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {doc.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        ></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">
            medical_services
          </span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Expert Surgical Care
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready for Your <br />
              <span className="text-blue-300">Consultation?</span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Take the first step towards better health. Our surgical team is
              ready to provide you with a personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openAppointment({ department: "Surgery" })}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 bg-white rounded-full hover:bg-blue-50 shadow-xl shadow-blue-900/20 transition-all hover:scale-105"
              >
                Book Consultation
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Contact Department
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Surgery;
