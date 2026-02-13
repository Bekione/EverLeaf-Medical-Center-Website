
import React from 'react';
import { Link } from 'react-router-dom';

const Diagnostics: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmJ6m3X1-OCP_Qpavn3ySLxI7NyUiLSrCFFSEtSPmVB37uDa9thFM9x-xpGDb3dlcT9IBPlTe2371QdSX0fa5ijh6nOKkZJ39QqZDdEEbU6uhMlA7ORHfkan1J0YRHTUXmaneNb4JApA-YvqhFKBZ7VQmpsXWs4-7aTkheXF0vJYjFOTFaIxh54Ucc6izYoD0Q6FWnv_xvgj7XkDMEmATy4hzRMRp24E-lLQ23QOR4154KGMAjM34IJm5zu1vt2bcr30cxiDivIuU" alt="Advanced Diagnostics Center" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-blue-300 font-semibold tracking-wide uppercase text-sm">
              <span className="material-icons text-lg">medical_services</span>
              <span>Center of Excellence</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">Advanced Diagnostic <br/>Services for Precise Care</h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Accurate diagnosis is the cornerstone of effective treatment. At Everleaf, we combine world-class expertise with cutting-edge technology to provide rapid, reliable results you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5">
                Schedule a Test
                <span className="material-icons text-sm ml-2">calendar_today</span>
              </Link>
              <button 
                onClick={(e) => scrollToSection(e, 'capabilities')}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-white/10 border border-white/20 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all"
              >
                Explore Capabilities
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Why Precise Diagnostics Matter</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Before any treatment plan begins, understanding the root cause is essential. Our Diagnostic Center operates with a philosophy of "Precision First," ensuring that every scan, test, and analysis contributes to a clear path forward for your health journey.
            </p>
          </div>
        </div>
      </section>

       {/* Capabilities Section */}
      <section className="py-20 bg-white" id="capabilities">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">Diagnostic Capabilities</h2>
            <p className="text-slate-500 text-lg">
              Comprehensive testing facilities under one roof, from routine blood work to advanced neurological imaging.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl">scanner</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Imaging</h3>
              <p className="text-sm text-slate-500 mb-4 flex-grow">High-definition MRI (3T), 64-slice CT Scans, and Digital X-Rays for detailed anatomical views.</p>
              <ul className="text-sm text-slate-600 space-y-2 mt-auto">
                <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check_circle</span> MRI & CT Scan</li>
                <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check_circle</span> Ultrasound</li>
                <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check_circle</span> Mammography</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-teal-500 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl">science</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pathology Lab</h3>
              <p className="text-sm text-slate-500 mb-4 flex-grow">Fully automated laboratory providing accurate results for hematology, biochemistry, and microbiology.</p>
              <ul className="text-sm text-slate-600 space-y-2 mt-auto">
                <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check_circle</span> Blood Analysis</li>
                <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check_circle</span> Hormone Testing</li>
                <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check_circle</span> Biopsy Services</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-red-500 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl">monitor_heart</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Cardiac Diagnostics</h3>
              <p className="text-sm text-slate-500 mb-4 flex-grow">Specialized testing to monitor heart health and detect cardiovascular issues early.</p>
              <ul className="text-sm text-slate-600 space-y-2 mt-auto">
                <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check_circle</span> ECG & Echo</li>
                <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check_circle</span> Stress Testing</li>
                <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check_circle</span> Holter Monitoring</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-all duration-300 group cursor-pointer flex flex-col">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-purple-500 mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <span className="material-icons text-3xl">psychology</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Neurodiagnostics</h3>
              <p className="text-sm text-slate-500 mb-4 flex-grow">Evaluation of the nervous system function to assist in diagnosing neurological disorders.</p>
              <ul className="text-sm text-slate-600 space-y-2 mt-auto">
                <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check_circle</span> EEG (Brain Wave)</li>
                <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check_circle</span> EMG / NCS</li>
                <li className="flex items-center gap-2"><span className="material-icons text-green-500 text-xs">check_circle</span> Sleep Studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <img alt="Advanced CT Scanner" className="relative rounded-2xl shadow-2xl z-10 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmQ_tYyVIK-pTHSIcCt0t03QVQpk4OOTroaxWIdvNepXZXGwDXesjJyrZ1eVwD33QUuTgcs5KKtRhlzOqp78bjgwTpnlQAZr9F0NYURAZU6RFefcryEe2n_jd0cz1YNz8B74g4NBSBpc8TgXiw2qa53e0aiIzzsvVZJaWJ8lIG6dVg65HfDJ0PCIU91YHQ6a-sT6jCYFEkA5SYd6lQ1j2pUbj0N7mFYZ8LgzTcDkxq-xAXiMgzeSn2C2Ygg0FdrqpodSrmGHEO468"/>
              <div className="absolute bottom-6 right-6 z-20 bg-white p-4 rounded-lg shadow-xl border-l-4 border-primary max-w-xs">
                <p className="text-sm font-semibold text-slate-900">Newest Addition</p>
                <p className="text-xs text-slate-500">Siemens Somatom Definition Edge CT Scanner installed in 2023.</p>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-secondary uppercase bg-green-50 rounded-full">
                Innovation
              </div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">State-of-the-Art Technology</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We continuously invest in the latest medical technology to ensure the lowest radiation doses, fastest scan times, and clearest images possible. Our new 3T MRI creates exceptionally detailed images of soft tissues, bone, and blood vessels.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-icons text-primary text-sm">bolt</span>
                  </div>
                  <span className="text-slate-700">Faster scanning times for patient comfort</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-icons text-primary text-sm">shield</span>
                  </div>
                  <span className="text-slate-700">Reduced radiation exposure protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-icons text-primary text-sm">cloud_upload</span>
                  </div>
                  <span className="text-slate-700">Digital results integrated with Patient Portal instantly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">Preparation for Your Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl relative overflow-hidden group hover:bg-blue-100 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-icons text-8xl text-primary">description</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">What to Bring</h3>
              <ul className="space-y-3 relative z-10 text-slate-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Photo ID & Insurance Card</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Doctor's Referral Form</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> List of current medications</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl relative overflow-hidden group hover:bg-blue-100 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-icons text-8xl text-primary">no_food</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Fasting Instructions</h3>
              <ul className="space-y-3 relative z-10 text-slate-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Ultrasound (Abdomen): Fast for 6-8 hrs</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Cholesterol Tests: Fast for 12 hrs</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> CT Scans: Avoid food 4 hrs prior</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl relative overflow-hidden group hover:bg-blue-100 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-icons text-8xl text-primary">checkroom</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">Clothing & Arrival</h3>
              <ul className="space-y-3 relative z-10 text-slate-600">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Wear loose, comfortable clothing</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Remove jewelry/metal objects</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Arrive 15 minutes early</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Why Choose Everleaf Diagnostics?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-icons text-2xl">medical_services</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Expert Radiologists</h4>
                    <p className="text-slate-600 mt-1">Our team includes board-certified radiologists with sub-specialty training in neuro, body, and musculoskeletal imaging.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-icons text-2xl">timer</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Rapid Results</h4>
                    <p className="text-slate-600 mt-1">Most imaging reports are available to your referring physician within 24 hours.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-icons text-2xl">sentiment_satisfied</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Patient-Centric Care</h4>
                    <p className="text-slate-600 mt-1">We prioritize your comfort and understanding, explaining every step of the procedure.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img alt="Medical staff reviewing diagnostic results" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Bu241H6jOGdI9pbiFvrnPk2T57c0yQRbpDebCKb7wniv06Xe9gqF5IMhZ0vgyjI6jhSqjQ4tk22fEA2CiFv5BAb9Dyzh6I16BqqsidHnh5Nj7zQSyWAtXveQgGTocfc1BhwYqWuvPIr7QDOIep5q-JTuzLjPj-ShPzjIWyba6U98TC3oJ66nYCX58zHpNMIgdwDk-ldAeb8pxk9VXEVYXP8m0LZzyNP-A27QA1nJq5NImKFc3kSUYthhjbnMDlgIZoCMEJtCMVo"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" id="appointment">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        
        {/* Giant Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <span className="material-icons text-[20rem] text-white">fact_check</span>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Start Your Diagnosis
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to schedule <br/><span className="text-indigo-300">your test?</span>
            </h2>
            <p className="text-indigo-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Call us directly or use our online portal to book your appointment. Ensure you have your doctor's referral ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:5551234567" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-900 bg-white rounded-full hover:bg-indigo-50 shadow-xl shadow-indigo-900/20 transition-all hover:scale-105">
                <span className="material-icons mr-2">call</span> (555) 123-4567
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-white/30 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all">
                Request Appointment
              </Link>
            </div>
            <p className="mt-8 text-sm text-indigo-200">
              For emergencies, please dial 911 immediately.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Diagnostics;
