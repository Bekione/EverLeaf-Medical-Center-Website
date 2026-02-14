
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      {/* Hero Section - Distinct from Services Pages */}
      <header className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-teal-50/60 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-wider text-primary uppercase bg-white rounded-full border border-blue-100 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Since 1988
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                A Legacy of Caring, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  A Future of Healing.
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                For over 35 years, Everleaf Medical Center has been a beacon of hope. We blend compassionate care with cutting-edge medical innovation to improve the lives of our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/doctors" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-primary rounded-lg hover:bg-primary-dark shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5">
                  Meet Our Team
                </Link>
                <Link to="/gallery" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                  View Our Facilities
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-100 pt-8">
                <div>
                  <p className="text-3xl font-bold text-slate-900">35+</p>
                  <p className="text-sm text-slate-500 font-medium">Years Serving</p>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">100k+</p>
                  <p className="text-sm text-slate-500 font-medium">Patients Healed</p>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">120+</p>
                  <p className="text-sm text-slate-500 font-medium">Specialists</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative z-10 w-full max-w-lg mx-auto lg:ml-auto group">
                {/* Main Image */}
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQXOFccHeKdEh_AQZ9fws6JVXcLa6Iz8Tjq_V6mWq3W5cl694yBn5T103VW1-42ItCmCCLdeZPgrrgQgykZOoHDGHzlO74VNjsH8Y3PaQIFBF0UvYBOup-bvxdiig-Gki9OWOSmTEzWcG7httWSR6JQdnFiRXVmjK-jgylNUqdE7vVO0Fkd10Ic9-0ZP70XpBoPjP5UteM9M2FABRZ6XCixyHmUBi0wTaukSccpmN4nabsNo01IO4iEeiN3mmSzFrmYUoeDmDNeeg" 
                  alt="Medical Team" 
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border-4 border-white transition-transform duration-500 group-hover:scale-[1.01]"
                />
                
                {/* Floating Secondary Image */}
                <div className="absolute -bottom-12 -left-12 w-2/3 hidden md:block">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHdy-TQkrlWxbjfSK2Oiy0_ZEMVW-pJE0f4gboXr4qSy9BOeIWU0215DPTHix5i2VvnodWBnr3qfyNDrRh-kANv576LGzxpYn6JUdqnp1WkDfCvZNtBM891q3m-AKBFVwB7X8sSMvXnjTLfr9fJ6mD6ArEvY-2FZpxSXe58A-EhF9nFyof_0B4wn0eefDo0rtXdhtTB94_3VnPzoZVUr3OkpJI74Z33vo5UV_mV1ud16km-3V86j_KQsMw2N2WSorHb1sQ1GgQmVc" 
                    alt="Hospital Building" 
                    className="rounded-xl shadow-xl border-4 border-white w-full object-cover aspect-[3/2] transition-transform duration-500 group-hover:-translate-y-2"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-slate-200 rounded-2xl -z-10 transform rotate-3 scale-105"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mission & Story Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl -rotate-2"></div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHdy-TQkrlWxbjfSK2Oiy0_ZEMVW-pJE0f4gboXr4qSy9BOeIWU0215DPTHix5i2VvnodWBnr3qfyNDrRh-kANv576LGzxpYn6JUdqnp1WkDfCvZNtBM891q3m-AKBFVwB7X8sSMvXnjTLfr9fJ6mD6ArEvY-2FZpxSXe58A-EhF9nFyof_0B4wn0eefDo0rtXdhtTB94_3VnPzoZVUr3OkpJI74Z33vo5UV_mV1ud16km-3V86j_KQsMw2N2WSorHb1sQ1GgQmVc" alt="Hospital Exterior" className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">From Humble Beginnings to Medical Excellence</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Founded in 1988 by Dr. Eleanor Rigby with a small team of dedicated nurses, Everleaf Medical Center started with a simple mission: to provide accessible, high-quality healthcare to the local community.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Today, we have grown into a 500-bed multi-specialty quaternary care hospital. Despite our expansion, our core philosophy remains unchanged—putting the patient first. We are driven by the belief that healthcare is not just about treating diseases, but about healing people.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="material-icons text-green-500 text-3xl">volunteer_activism</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Patient Centric</h4>
                    <p className="text-sm text-slate-500">Every decision we make is centered around patient well-being and comfort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="material-icons text-blue-500 text-3xl">science</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Innovation</h4>
                    <p className="text-sm text-slate-500">Continuously adopting the latest medical technologies and research.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Stats Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wide mb-6 border border-white/30">
                <span className="material-icons text-sm">verified</span>
                International Standards
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Uncompromising Quality & Safety</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                At Everleaf, patient safety is our top priority. We adhere to rigorous international standards and protocols to ensure a safe environment for healing. Our commitment to quality is recognized by leading healthcare accreditation bodies.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center"><span className="material-icons text-sm">check</span></div>
                  <span>JCI Accredited Facility</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center"><span className="material-icons text-sm">check</span></div>
                  <span>ISO 9001:2015 Certified for Quality Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center"><span className="material-icons text-sm">check</span></div>
                  <span>Winner of National Patient Safety Award 2023</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-colors">
                  <span className="material-icons text-4xl mb-4 opacity-80">shield</span>
                  <div className="text-4xl font-bold mb-2"><CountUp end={100} suffix="%" /></div>
                  <div className="text-sm text-blue-100 uppercase tracking-wide">Safety Compliance</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-colors">
                  <span className="material-icons text-4xl mb-4 opacity-80">clean_hands</span>
                  <div className="text-4xl font-bold mb-2"><CountUp end={99.9} decimals={1} suffix="%" /></div>
                  <div className="text-sm text-blue-100 uppercase tracking-wide">Infection Control</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-colors">
                  <span className="material-icons text-4xl mb-4 opacity-80">military_tech</span>
                  <div className="text-4xl font-bold mb-2"><CountUp end={50} suffix="+" /></div>
                  <div className="text-sm text-blue-100 uppercase tracking-wide">Awards Won</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-colors">
                  <span className="material-icons text-4xl mb-4 opacity-80">group</span>
                  <div className="text-4xl font-bold mb-2"><CountUp end={1200} suffix="+" /></div>
                  <div className="text-sm text-blue-100 uppercase tracking-wide">Medical Staff</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Core Principles</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4 font-serif">Values That Drive Us</h2>
            <p className="text-slate-600 text-lg">Our culture is built on a foundation of trust, integrity, and an unwavering commitment to our patients.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'volunteer_activism', title: 'Compassion', desc: 'We treat everyone with kindness, empathy, and understanding. We listen to our patients and support them through their healing journey.' },
              { icon: 'diamond', title: 'Excellence', desc: 'We strive for the highest standards in everything we do. From medical procedures to patient service, we are committed to continuous improvement.' },
              { icon: 'handshake', title: 'Integrity', desc: 'We adhere to high ethical principles and professional standards. We are honest, transparent, and accountable in our actions.' }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-card transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <span className="material-icons text-3xl">{val.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{val.title}</h3>
                <p className="text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Leadership</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Board of Directors</h2>
            <p className="text-slate-600 mt-4 text-lg">Guiding our vision with decades of combined medical and administrative expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Eleanor Rigby", role: "Chief Medical Director", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9BZuqUAA5IOvQMgXBQ8ryTLzC7vKg69xiTlytVe-76cUVW84Bp8VWOapyKoqbwUVVWBuN_FfxCcsqFq1ao_QGijkga86eRCQeYgiaWkGi7WtZIQPN8Q2vpj9P49F7WLoa7Y9f-Oj_nR-hQM4ZVF-Hxf-HLyzlW5kk3Rk-ANh7DNvIi720KTGderseW5cc8dF6H7Wx6PDoI9ce9GfwndlXLLz4CsQbzfWS0_34TQzB04eBNYZK-S8nSZOkgY3aUVNpbGCAWq_I9vs" },
              { name: "Dr. James Wilson", role: "Head of Surgery", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADGr580ge61fkfsxwBrM7N1TZyAY9Z-GTpjBUo_xK5lWfakoEU_qOziiT-so6DMVRYMjRbu0nVW-k1DcZ572-UwSxJBbHFxL921KxZ6v5xbrKCJfSDGPfGIKJ2lnbzJo8rsumPzZ1VnlvNztje35dbZ8OjoskrJoJWMwL2xyEuWVfFxTxZWLkj3322_nwECoDQOhnBsfJT-uJdBuBYvHW7tZFnkW3TihhkEKyTi4ionW16tPVhP7_Msgmo2tYXI-H3mW5DhYbZYTk" },
              { name: "Ms. Sarah Connor", role: "Director of Nursing", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY7zDqNO2hoPrxpDGZpE92fSZkSGJgJi7hfuXKUusm09nz1u9rNHNBxuJ0N_t6HSXFbSkNan8ZuDt8AkK0PHqzsi4I6ipPzk2q3ALgTZVcC1uboMYQ6dZnjiBkO036p5ErpaA0vAjn6D8TivJDicjayQgEkLrG4PsZURfL7C-lOADFWh45AKVB0WfWyqvzWL5JcVEwzhhuOWO87RBPu2zcdEOcZJloL6qr9YD-oKjiSjrlq9KMwrQ9LL25SFVQnG3ZphZNrYFaNIs" },
              { name: "Mr. Robert Stark", role: "Chief Financial Officer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH90v43N20axyV6RnKeh3RXL0rpfhmNeAPbpl1V1e_3ObjjCoqizOb-hsPI4NBFhnlZqC-BOYpGkw_f8nMbWBcFA-EDwltGCIsre5YVB0oO2KcGtBnsXroz-CdHpDqaos6KxjebdU6Okwa7miAnwdofw65d0-vmgw9ZRjlHTlm6WKQIyG5D_j1l4yG8FBzogPE0slN-Vwj3fu52wNDWtvmGTe4KG6NbcvLqLbbbegn6C2JizKRPc_AhGY1WGFpFs-5r5zI5ULK93g" }
            ].map((member, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg h-96 cursor-pointer">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-primary-light font-medium uppercase tracking-wide">{member.role}</p>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-slate-300 text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                      Dedicated leader committed to excellence in healthcare administration and patient outcomes.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Infrastructure</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Modern Facilities</h2>
            </div>
            <Link to="/gallery" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors mt-4 md:mt-0">
              View Full Gallery <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHdy-TQkrlWxbjfSK2Oiy0_ZEMVW-pJE0f4gboXr4qSy9BOeIWU0215DPTHix5i2VvnodWBnr3qfyNDrRh-kANv576LGzxpYn6JUdqnp1WkDfCvZNtBM891q3m-AKBFVwB7X8sSMvXnjTLfr9fJ6mD6ArEvY-2FZpxSXe58A-EhF9nFyof_0B4wn0eefDo0rtXdhtTB94_3VnPzoZVUr3OkpJI74Z33vo5UV_mV1ud16km-3V86j_KQsMw2N2WSorHb1sQ1GgQmVc" alt="Operating Theatre" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-1">Advanced Operating Theatres</h3>
                <p className="text-white/80">Equipped with robotic surgery capabilities and high-definition imaging systems.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg bg-slate-900">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4GZCfQ-iIl965UQeFPIclRsBYz4f1mtz0n4nboa175ydsFbd1jpMTGjUenfcTFWMvdli4vBDJyQNsR3OW_kuLwe1EZ8-UZeCj3G1FkDoeD3P9GI5z6tIlWuR0CCmusql7YHZEI1i1JBJnN0jyK6RwsULoeC_xMwN63r70keIFcqFZQQPoY8F2DeHET5EkvhF5dZT9CMG9YEzHZC3PuCPGtuLigbW117bWFsXpSY5V-LX2gv4Xi3mKUVAGBiRCrfYyRjNWvnN3eEI" alt="Patient Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">Private Recovery Suites</h3>
                <p className="text-white/70 text-sm mt-1">Designed for privacy and comfort.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden relative group cursor-pointer shadow-lg bg-slate-900">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLZa4BlPxSP0Up2tLXAybrE5xTrLlnaUwdOOdkdc9HIhbAY0wWjDN9rpfi7YDdVAKF00DXuLK6UYnSNscxf4Uf2OLWgCRFRsAQ6LtK31OfgT4-DlgYIc-lGkKJ2kj1EEjwcaPfkQPvfd1npBoP7whHHPg1sw6sY5lo7zsqm9TDJrSJvfIrxriBvQVA4Gka4oVPlYDr8s3eHcl9f5UN7LIYAj1RmbgdvB1uuiOkl0YVY9eSDIJ4oO2uv6xDOv46h8hBrhc63OM28B8" alt="ICU" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">Intensive Care Units</h3>
                <p className="text-white/70 text-sm mt-1">24/7 Monitoring & Support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revamped CTA Section */}
      <section className="py-24 relative overflow-hidden" id="join">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Be Part of Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to Experience <br/><span className="text-blue-300">Better Healthcare?</span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you are looking for world-class treatment or want to join our team of dedicated professionals, Everleaf welcomes you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/30 hover:scale-105 flex items-center gap-2"
              >
                Visit Us Today <span className="material-icons">near_me</span>
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Contact Administration
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
