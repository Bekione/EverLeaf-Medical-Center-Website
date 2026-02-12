
import React, { useEffect, useState, useRef } from 'react';

// Counter Component for animation
const CountUp = ({ end, duration = 2000, suffix = '', decimals = 0 }: { end: number, duration?: number, suffix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(easeOutQuart * end);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
};

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 py-12 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">Who We Are</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">About Everleaf Medical Center</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Dedicated to providing compassionate, world-class healthcare. We are committed to medical excellence, integrity, and holistic well-being.
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-2"></div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHdy-TQkrlWxbjfSK2Oiy0_ZEMVW-pJE0f4gboXr4qSy9BOeIWU0215DPTHix5i2VvnodWBnr3qfyNDrRh-kANv576LGzxpYn6JUdqnp1WkDfCvZNtBM891q3m-AKBFVwB7X8sSMvXnjTLfr9fJ6mD6ArEvY-2FZpxSXe58A-EhF9nFyof_0B4wn0eefDo0rtXdhtTB94_3VnPzoZVUr3OkpJI74Z33vo5UV_mV1ud16km-3V86j_KQsMw2N2WSorHb1sQ1GgQmVc" alt="Hospital Building Exterior" className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover" />
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-lg max-w-xs border border-slate-100">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl font-bold text-primary">35+</span>
                  <span className="text-sm text-slate-500 font-medium uppercase tracking-wide">Years of<br/>Excellence</span>
                </div>
                <p className="text-slate-600 text-sm">Serving our community with dedication and advancing medical standards.</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">Our Journey & Mission</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Founded with a vision to make advanced healthcare accessible to all, Everleaf Medical Center has grown from a small community clinic to a multi-specialty medical center. Over the past three decades, we have been at the forefront of medical innovation, constantly upgrading our technologies and expanding our services.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our mission is simple yet profound: <span className="text-slate-900 font-medium">To redefine healthcare through excellence, integrity, and compassion—providing advanced medical solutions while fostering trust, dignity, and holistic well-being for every patient we serve.</span>
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-primary">
                    <span className="material-icons">diversity_1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Patient Centric</h4>
                    <p className="text-sm text-slate-500">Care tailored to individual needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-primary">
                    <span className="material-icons">science</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Innovation</h4>
                    <p className="text-sm text-slate-500">Latest medical technologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Core Principles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4 font-serif">Values That Drive Us</h2>
            <p className="text-slate-600 text-lg">Our culture is built on a foundation of trust, integrity, and an unwavering commitment to our patients.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'volunteer_activism', title: 'Compassion', desc: 'We treat everyone with kindness, empathy, and understanding. We listen to our patients and support them and their families through their healing journey.' },
              { icon: 'military_tech', title: 'Excellence', desc: 'We strive for the highest standards in everything we do. From medical procedures to patient service, we are committed to continuous improvement and quality.' },
              { icon: 'gavel', title: 'Integrity', desc: 'We adhere to high ethical principles and professional standards. We are honest, transparent, and accountable in our actions and decisions.' }
            ].map((val, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:shadow-card transition-all duration-300 border border-transparent hover:border-primary/20 group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-icons text-4xl">{val.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wide mb-6 border border-white/30">
                <span className="material-icons text-sm">verified</span>
                Accredited Facility
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Uncompromising Quality & Safety</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                At Everleaf, patient safety is our top priority. We adhere to rigorous international standards and protocols to ensure a safe environment for healing. Our commitment to quality is recognized by leading healthcare accreditation bodies.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full"><span className="material-icons text-sm">check</span></div>
                  <span>JCI Accredited Hospital</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full"><span className="material-icons text-sm">check</span></div>
                  <span>ISO 9001:2015 Certified for Quality Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 p-1 rounded-full"><span className="material-icons text-sm">check</span></div>
                  <span>Winner of National Patient Safety Award 2022</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
                  <span className="material-icons text-5xl mb-3 opacity-90">shield</span>
                  <div className="text-3xl font-bold"><CountUp end={100} suffix="%" /></div>
                  <div className="text-sm text-blue-100">Safety Compliance</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
                  <span className="material-icons text-5xl mb-3 opacity-90">clean_hands</span>
                  <div className="text-3xl font-bold"><CountUp end={99.9} decimals={1} suffix="%" /></div>
                  <div className="text-sm text-blue-100">Infection Control</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
                  <span className="material-icons text-5xl mb-3 opacity-90">military_tech</span>
                  <div className="text-3xl font-bold"><CountUp end={15} suffix="+" /></div>
                  <div className="text-sm text-blue-100">National Awards</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
                  <span className="material-icons text-5xl mb-3 opacity-90">group</span>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm text-blue-100">Critical Care Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm mb-10">Our Accreditations & Partnerships</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text representation for logos to keep it simple, typically these would be images */}
            <div className="flex items-center gap-3">
              <span className="material-icons text-5xl text-blue-600">verified_user</span>
              <div className="text-left">
                <span className="block font-bold text-slate-800 text-lg">JCI</span>
                <span className="block text-xs text-slate-500">Joint Commission International</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-icons text-5xl text-blue-600">workspace_premium</span>
              <div className="text-left">
                <span className="block font-bold text-slate-800 text-lg">ISO</span>
                <span className="block text-xs text-slate-500">9001:2015 Certified</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-icons text-5xl text-blue-600">health_and_safety</span>
              <div className="text-left">
                <span className="block font-bold text-slate-800 text-lg">NABH</span>
                <span className="block text-xs text-slate-500">Accredited Hospital</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-icons text-5xl text-blue-600">science</span>
              <div className="text-left">
                <span className="block font-bold text-slate-800 text-lg">NABL</span>
                <span className="block text-xs text-slate-500">Laboratory Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Leadership</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Board of Directors</h2>
              <p className="text-slate-600 mt-4 text-lg">Guiding our vision with decades of combined medical and administrative expertise.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Eleanor Rigby", role: "Chief Medical Director", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9BZuqUAA5IOvQMgXBQ8ryTLzC7vKg69xiTlytVe-76cUVW84Bp8VWOapyKoqbwUVVWBuN_FfxCcsqFq1ao_QGijkga86eRCQeYgiaWkGi7WtZIQPN8Q2vpj9P49F7WLoa7Y9f-Oj_nR-hQM4ZVF-Hxf-HLyzlW5kk3Rk-ANh7DNvIi720KTGderseW5cc8dF6H7Wx6PDoI9ce9GfwndlXLLz4CsQbzfWS0_34TQzB04eBNYZK-S8nSZOkgY3aUVNpbGCAWq_I9vs" },
              { name: "Dr. James Wilson", role: "Head of Surgery", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADGr580ge61fkfsxwBrM7N1TZyAY9Z-GTpjBUo_xK5lWfakoEU_qOziiT-so6DMVRYMjRbu0nVW-k1DcZ572-UwSxJBbHFxL921KxZ6v5xbrKCJfSDGPfGIKJ2lnbzJo8rsumPzZ1VnlvNztje35dbZ8OjoskrJoJWMwL2xyEuWVfFxTxZWLkj3322_nwECoDQOhnBsfJT-uJdBuBYvHW7tZFnkW3TihhkEKyTi4ionW16tPVhP7_Msgmo2tYXI-H3mW5DhYbZYTk" },
              { name: "Ms. Sarah Connor", role: "Director of Nursing", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY7zDqNO2hoPrxpDGZpE92fSZkSGJgJi7hfuXKUusm09nz1u9rNHNBxuJ0N_t6HSXFbSkNan8ZuDt8AkK0PHqzsi4I6ipPzk2q3ALgTZVcC1uboMYQ6dZnjiBkO036p5ErpaA0vAjn6D8TivJDicjayQgEkLrG4PsZURfL7C-lOADFWh45AKVB0WfWyqvzWL5JcVEwzhhuOWO87RBPu2zcdEOcZJloL6qr9YD-oKjiSjrlq9KMwrQ9LL25SFVQnG3ZphZNrYFaNIs" },
              { name: "Mr. Robert Stark", role: "Chief Financial Officer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH90v43N20axyV6RnKeh3RXL0rpfhmNeAPbpl1V1e_3ObjjCoqizOb-hsPI4NBFhnlZqC-BOYpGkw_f8nMbWBcFA-EDwltGCIsre5YVB0oO2KcGtBnsXroz-CdHpDqaos6KxjebdU6Okwa7miAnwdofw65d0-vmgw9ZRjlHTlm6WKQIyG5D_j1l4yG8FBzogPE0slN-Vwj3fu52wNDWtvmGTe4KG6NbcvLqLbbbegn6C2JizKRPc_AhGY1WGFpFs-5r5zI5ULK93g" }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 h-80">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white">
                      <h3 className="text-lg font-bold">{member.name}</h3>
                      <p className="text-sm text-slate-300">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Facilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Infrastructure</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Modern Facilities</h2>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl">Designed for comfort, equipped for recovery. Our facilities blend state-of-the-art technology with a healing environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHdy-TQkrlWxbjfSK2Oiy0_ZEMVW-pJE0f4gboXr4qSy9BOeIWU0215DPTHix5i2VvnodWBnr3qfyNDrRh-kANv576LGzxpYn6JUdqnp1WkDfCvZNtBM891q3m-AKBFVwB7X8sSMvXnjTLfr9fJ6mD6ArEvY-2FZpxSXe58A-EhF9nFyof_0B4wn0eefDo0rtXdhtTB94_3VnPzoZVUr3OkpJI74Z33vo5UV_mV1ud16km-3V86j_KQsMw2N2WSorHb1sQ1GgQmVc" alt="Operating Theatre" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-1">Advanced Operating Theatres</h3>
                <p className="text-white/80">Equipped with robotic surgery capabilities and high-definition imaging systems.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4GZCfQ-iIl965UQeFPIclRsBYz4f1mtz0n4nboa175ydsFbd1jpMTGjUenfcTFWMvdli4vBDJyQNsR3OW_kuLwe1EZ8-UZeCj3G1FkDoeD3P9GI5z6tIlWuR0CCmusql7YHZEI1i1JBJnN0jyK6RwsULoeC_xMwN63r70keIFcqFZQQPoY8F2DeHET5EkvhF5dZT9CMG9YEzHZC3PuCPGtuLigbW117bWFsXpSY5V-LX2gv4Xi3mKUVAGBiRCrfYyRjNWvnN3eEI" alt="Patient Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl font-bold">Private Recovery Suites</h3>
                <p className="text-white/70 text-xs mt-1">Designed for privacy and comfort.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative group cursor-pointer">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLZa4BlPxSP0Up2tLXAybrE5xTrLlnaUwdOOdkdc9HIhbAY0wWjDN9rpfi7YDdVAKF00DXuLK6UYnSNscxf4Uf2OLWgCRFRsAQ6LtK31OfgT4-DlgYIc-lGkKJ2kj1EEjwcaPfkQPvfd1npBoP7whHHPg1sw6sY5lo7zsqm9TDJrSJvfIrxriBvQVA4Gka4oVPlYDr8s3eHcl9f5UN7LIYAj1RmbgdvB1uuiOkl0YVY9eSDIJ4oO2uv6xDOv46h8hBrhc63OM28B8" alt="ICU" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-xl font-bold">Intensive Care Units</h3>
                <p className="text-white/70 text-xs mt-1">24/7 Monitoring & Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
