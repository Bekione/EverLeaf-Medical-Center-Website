
import React from 'react';
import { Link } from 'react-router-dom';

const Cardiology: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="bg-white border-b border-slate-100 pt-16 pb-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-50/50 skew-x-12 translate-x-12 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 text-primary mb-6">
                <Link to="/departments" className="text-sm font-medium hover:underline">Departments</Link>
                <span className="material-icons text-sm text-slate-400">chevron_right</span>
                <span className="text-sm font-medium">Cardiology</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                World-Class <span className="text-primary">Heart Care</span> & Cardiology
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our Cardiology Department is dedicated to providing comprehensive care for patients with heart and vascular conditions. From prevention and diagnosis to advanced surgical treatments and rehabilitation, we are committed to your heart health.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-blue-500/20">
                  Book Consultation
                </Link>
                <a href="#specialists" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  Meet Our Team
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQXOFccHeKdEh_AQZ9fws6JVXcLa6Iz8Tjq_V6mWq3W5cl694yBn5T103VW1-42ItCmCCLdeZPgrrgQgykZOoHDGHzlO74VNjsH8Y3PaQIFBF0UvYBOup-bvxdiig-Gki9OWOSmTEzWcG7httWSR6JQdnFiRXVmjK-jgylNUqdE7vVO0Fkd10Ic9-0ZP70XpBoPjP5UteM9M2FABRZ6XCixyHmUBi0wTaukSccpmN4nabsNo01IO4iEeiN3mmSzFrmYUoeDmDNeeg" alt="Cardiology Team" className="w-full h-auto object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                  <div className="text-white">
                    <p className="font-bold text-lg">Dr. Sarah Jenkins</p>
                    <p className="text-sm opacity-90">Chief of Cardiology performing a checkup</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-red-50 p-3 rounded-lg text-red-500">
                    <span className="material-icons text-2xl">favorite</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">5000+</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Surgeries Successful</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">Diagnosis & Care</span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-4">Conditions We Treat</h2>
            <p className="text-slate-600">We specialize in diagnosing and treating a wide range of cardiovascular conditions using the latest medical advancements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Coronary Artery Disease', icon: 'ecg_heart', color: 'red', desc: 'Treatment for narrowed or blocked blood vessels that can lead to heart attack.' },
              { title: 'Heart Failure', icon: 'water_drop', color: 'blue', desc: 'Comprehensive management plans for chronic heart failure conditions.' },
              { title: 'Arrhythmia', icon: 'monitor_heart', color: 'orange', desc: 'Expert care for irregular heartbeats, including atrial fibrillation.' },
              { title: 'Valvular Heart Disease', icon: 'valve', color: 'purple', desc: 'Repair and replacement therapies for damaged heart valves.' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 bg-${item.color}-100 text-${item.color}-600 rounded-lg flex items-center justify-center mb-4`}>
                  <span className="material-icons text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="specialists">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase block mb-2">Our Team</span>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">Meet Our Specialists</h2>
            </div>
            <Link to="/doctors" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
              View All Doctors <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. James Wilson', role: 'Chief Cardiologist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQs0kD6gUYfRd9_lU3toBoUiem4156M_XGKjuD0ulrae60nxOldKIRB5SX-E8_1PSqzoCZEALWMNrPc6ah1T-9TtFp0kyJLu1pI9UO1lmbP_VDyj4mn_YY20pEpzd2hhfYUU9TLTN_UmhKTDhb83YYpsFaAenjN5B1IfLb_53vKXcWMKirqrdAzVB-uub73DLVzglPWrFR8H-WSuqbID67yos6RsFFt99nyMYZDf5NNBb-2aW3ANcFtsGjBTr07vxupZ6p4J6cvsY' },
              { name: 'Dr. Sarah Jenkins', role: 'Cardiothoracic Surgeon', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBChCNT8erlVF0Jb3YnNa2Jwxeqc_G7B-uiUleBsEICKirjSMrw_SrDb1GtFJYE_2kXVPDvEQ9FZiSq9xDZWlzeXzG8Z_iJXZ0UhjaH0-zMnejmi_arf1Z2AFiTRF47V7ikISqdI30VzxwwefpXmX2B2G2DUYYlTvhQzqZbeC51CkUbkliXD1whIKgHDP6D6Ths5hVIR8Td0ilLpGSPmGvlI5lEcPHmuEZoWiAEk_YQDma6T3G90ZhtBFBD_wV7I7U8Oj9ub5mYqxI' },
              { name: 'Dr. Michael Chen', role: 'Electrophysiologist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT7LwkTuxRqjKViBqj7u9sY3evnb5-N4V0gDUOu9L5Nd52dnbu_cTsxETo-dCXUBgeB3LjjhMDqgBEXESLsS1GkWthev9e86TeY93poQn40N23-iHbmeBZAL86KHCnxLyQgZbvuL2h8L7Mi5f0Tc05y377Dmns2N_GnP0iwm_bmyt7z6j9ENOU_fVWn3ZSOf925YuaVeyPDo3E7G4_bNilirlzgKtn6jfYhPNaIW-BsbFZvsSNsjg-OUH3mFym7JznipeGtWlH_0s' },
              { name: 'Dr. Emily Ross', role: 'Preventive Cardiologist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy2txSwm69GTKW6_WiHP3cUVABGEGowjUDSvbecRo1zqzkUqIp3OgjPNSyXH2aicvdwbFQkWhGaFICqY9INdMoflySjOz1vBcrf0JJVe70lkxPm28lRXy-RI8kgEHREMs-kUEKh3_A2VKeSmOMwjeR8mT8CVqWD0mAmVgrOEgODK0Z-qSzQLjKkIg6ns9MFHZ1bHDtLSMxJZ2nyXZS_0DHACTF-lIbQ954oIuieUH7SX7jRJ9KupsUkVqusEM2GXq1UuOu8TU64RA' }
            ].map((doc, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 group">
                <div className="h-64 overflow-hidden relative">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-full text-sm font-medium">View Profile</button>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{doc.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Prioritize Your Heart Health Today</h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Don't wait for symptoms to worsen. Our expert cardiologists are here to provide the personalized care you deserve. Schedule your consultation now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-lg hover:bg-blue-50 shadow-xl transition-all hover:scale-105">
                Request an Appointment
              </Link>
              <a href="tel:+15551234567" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all">
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cardiology;
