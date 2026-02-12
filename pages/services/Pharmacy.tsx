
import React from 'react';
import { Link } from 'react-router-dom';

const Pharmacy: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10"></div>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD46R_B_4eaRz5tgFKk17XXFe86nTmW-cDb6UUwCe2K0SDPJ33Kxl8m27aCd3RSuuDjYBgIx7GXkTltYqkBf78iyChuazBZ9x2b_a0WflM5mn24-gBdlhYHS3FEExfpOzJ4f8NeHDE_8pt940Tu-x11xZfsbqWk6MWrU2Za3-9eYMl0JTe6_smpxeIMLhS5j2hfLR4klACyY1tegsWMOqWaS7pgYVcADx9ZNH2IOELr2xO7b-MrcRVXXc2aF8te5sa0C-zJ1qjl5E" alt="Modern Pharmacy" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 py-24 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-green-300 uppercase bg-green-900/40 backdrop-blur-sm rounded-full border border-green-500/30">
              <span className="material-symbols-outlined text-sm">verified</span> Accredited Pharmacy Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">Expert Care for Your Medication Needs</h1>
            <p className="text-lg text-slate-200 leading-relaxed max-w-2xl mb-8">
              Our full-service hospital pharmacy ensures accurate, safe, and timely medication management. From inpatient prescriptions to over-the-counter advice, our clinical pharmacists are here to support your recovery.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-secondary hover:bg-green-600 rounded-lg shadow-lg transition-all duration-200">
                View Pharmacy Services
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg backdrop-blur-sm transition-all duration-200">
                Consult a Pharmacist
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50 relative" id="services">
        <div className="absolute inset-0 hero-pattern pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Comprehensive Pharmaceutical Care</h2>
            <p className="text-slate-600">We combine advanced technology with compassionate care to provide a wide range of pharmacy services tailored to your health needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: 'prescriptions', title: 'Prescription Management', desc: 'Our automated prescription processing system ensures high accuracy and speed. We handle refills, transfers, and coordinate with your physicians to manage complex medication regimens efficiently.', items: ['Automatic Refill Reminders', 'Drug Interaction Checks'], color: 'blue', colorName: 'primary' },
              { icon: 'medical_information', title: 'Consultation Services', desc: 'Speak directly with our clinical pharmacists in private consultation rooms. We provide detailed counseling on medication side effects, proper usage, and lifestyle adjustments for optimal results.', items: ['Medication Therapy Management', 'One-on-One Counseling'], color: 'teal', colorName: 'teal-600' },
              { icon: 'local_shipping', title: 'Medicine Delivery', desc: 'Cannot make it to the pharmacy? We offer secure and prompt home delivery services for your prescriptions and medical supplies within the city limits, ensuring you never miss a dose.', items: ['Same-Day Local Delivery', 'Temperature-Controlled Shipping'], color: 'green', colorName: 'secondary' },
              { icon: 'medication_liquid', title: 'Over-the-Counter Medications', desc: 'Browse our extensive selection of non-prescription medications, vitamins, supplements, and first-aid supplies. Our staff is always available to help you choose the right product.', items: ['Nutritional Supplements', 'Home Health Equipment'], color: 'indigo', colorName: 'indigo-600' }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-card border border-slate-100 flex flex-col md:flex-row gap-6 items-start group hover:-translate-y-1 transition-all duration-300">
                <div className={`flex-shrink-0 w-16 h-16 bg-${service.color}-50 rounded-xl flex items-center justify-center text-${service.colorName} group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="material-icons text-secondary text-sm">check_circle</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-green-100 overflow-hidden relative" style={{background: 'linear-gradient(to right, #ecfdf5, #ffffff)'}}>
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold tracking-wider text-green-700 uppercase bg-green-100 rounded-full">
                  Our Commitment
                </div>
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Safety and Quality Assurance</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Patient safety is our absolute priority. We utilize state-of-the-art robotic dispensing systems to minimize human error and conduct rigorous quality checks on every prescription dispensed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <span className="material-symbols-outlined text-secondary">verified_user</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Triple-Check Verification</h4>
                      <p className="text-sm text-slate-500">Every prescription is verified by three separate checks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <span className="material-symbols-outlined text-secondary">inventory_2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Secure Storage</h4>
                      <p className="text-sm text-slate-500">Climate-controlled environments for sensitive medications.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA---fu-9JSlKsilewMtuFSO3VLSu3FF6ixKTfchbJEgoKL-KmPHTewQZYgh0cz0Ed_CE8MXhwG4aY_kPunT5IQOpDs95_2_s78i_-11vn9rkpxmD9LStkAT2WcHZeFR7dqdDvYbw13dx2LTW2iZQaShoBIrXzHoEi9Uqv97iKvoM8B6z-mQ0Iif6C7DeW0eokhiP3sJljjcfYO_eFONXPd1mq4Iv7cX7BXIEuYexwBb_Epvsc9WO75SX6b_spZc__IrfTwRLgdFQk" alt="Pharmacist checking quality" className="rounded-2xl shadow-xl w-full object-cover h-80" />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <span className="material-icons text-secondary">thumb_up</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">Customer Satisfaction</p>
                      <p className="text-lg font-bold text-slate-900">99.8% Accuracy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50/50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-secondary">
            <span className="material-symbols-outlined text-3xl">call</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Have Questions About Your Medication?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Our pharmacists are available 24/7 to answer your questions regarding drug interactions, dosages, or side effects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5551234567" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-secondary hover:bg-green-600 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
              <span className="material-icons mr-2">phone_in_talk</span> Call Pharmacy
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-secondary bg-white border border-secondary/20 rounded-lg hover:bg-green-50 shadow-sm transition-colors">
              Message a Pharmacist
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            For prescription refills, please use our <a href="#" className="text-secondary font-semibold hover:underline">Patient Portal</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pharmacy;
