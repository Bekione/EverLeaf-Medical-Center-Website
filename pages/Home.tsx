
import React, { useRef, useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { OpenAppointmentFunc } from '../Layout';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const { openAppointment } = useOutletContext<{ openAppointment: OpenAppointmentFunc }>();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Hero Image Carousel Logic
  const heroImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDHdy-TQkrlWxbjfSK2Oiy0_ZEMVW-pJE0f4gboXr4qSy9BOeIWU0215DPTHix5i2VvnodWBnr3qfyNDrRh-kANv576LGzxpYn6JUdqnp1WkDfCvZNtBM891q3m-AKBFVwB7X8sSMvXnjTLfr9fJ6mD6ArEvY-2FZpxSXe58A-EhF9nFyof_0B4wn0eefDo0rtXdhtTB94_3VnPzoZVUr3OkpJI74Z33vo5UV_mV1ud16km-3V86j_KQsMw2N2WSorHb1sQ1GgQmVc", 
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBAZ72MvKfsAV5eXP0UflP2GrTVhI8MHJWW3Nq1zzKA5556zQOOjLXYQJ-gq0yFKxbDmNV0HhuyBNxpiMBdUiJzr_DTdS6GQPCfAK29_IDLWZUjz3_XAOkeFZDCY4WILVjYqBa4EqekhXnmMw6Rgg_PHaFS6uVdyLRDfFQIFJunA2vLPn4mdo9r6CJYuY8DvTkeKA_93bc76_XBcKU6xBATaw_outxCae_ArnfZNIcHBtr5RF5o6uYwaGVs1cBaBlkrEGnINqSI-Ic",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuASpB4zEhU2d312bE6DML0nD_09L6xUkwbVl-4SSiHECRYzO9M687bP9Y0-aeNxD3KFcW5iw5pw3_r1_WM1FYmEr2VkBxf1BNrUXJirb-BDiuU2Z1p8OGO13dWa1TKogXhVnX3PdIrcL7W3mQE7Vu1Lh2Qp_85Ks3cEJ4e0FtiH4Oc3Mm6MJ_-mXEt-i7MLgdkI0MTch5GRoxToq4J9yXSWxCIVCDbd-5UM0Ey-lnxb2fYExx4AS5wtWdA4KBjKhAE1czMdyorFTxc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBcjQvLZLM7D8XM6G-ltI3zOfMe_16SIFhpMOp1bLHVdEjtdYZjpUsBAzQs44cnm4kfRY_CVK8NbXWUDDa4412BSTYonv0G_5AGW8FG8LGQ5z9Q8iNNj1bYp3qx0LnzidCBJ75-kWs_GKuSRxWn3GwuufvYRrgSZsucRIjRvWRRp9uFGGhtcPw20Co03HEIOSv7OnPKZtgv_JaExWODULC0-Zb9HFrFUwFo1v3JpiwWrOf-bEgQn2a6vB2n6-OJV-5Zpy2xjm7jgRo" 
  ];
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Approx width of card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const testimonials = [
    { name: 'James Anderson', role: 'Recovered Patient', text: "The care and attention I received at Everleaf was outstanding. The doctors were patient in explaining my condition and the treatment plan.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH90v43N20axyV6RnKeh3RXL0rpfhmNeAPbpl1V1e_3ObjjCoqizOb-hsPI4NBFhnlZqC-BOYpGkw_f8nMbWBcFA-EDwltGCIsre5YVB0oO2KcGtBnsXroz-CdHpDqaos6KxjebdU6Okwa7miAnwdofw65d0-vmgw9ZRjlHTlm6WKQIyG5D_j1l4yG8FBzogPE0slN-Vwj3fu52wNDWtvmGTe4KG6NbcvLqLbbbegn6C2JizKRPc_AhGY1WGFpFs-5r5zI5ULK93g" },
    { name: 'Sarah Lewis', role: 'Surgery Patient', text: "The facilities are top-notch and spotlessly clean. I felt safe and comfortable throughout my entire stay. Highly recommended!", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC_CpSV1-kzdsN5wuwpnnagBz1hR-qCTPGydxp-Ol_Hc1sUfTMEXpTCKkf-dltAnLYt6pNarSEahMzYEhLer2TiZonCSaKUaThq9hj_51Qkj7Vg5AsMXkRdO6j4KOL2afQUJQhni8wdd9cQl0o5HFEp3zYwYPJlgFtswVmspfoi08Ty9AGYO2ma65WnzEgltE3akq8GQEJKqz27GZmYwtdUx2kIzthfZAkxOQEV3pf0kROEWqjT7-DfQQfDSdAZkV-FE9PmAZLD2U" },
    { name: 'Michael Chen', role: 'Regular Checkup', text: "From the front desk staff to the specialists, everyone was incredibly professional and kind. Thank you for your amazing service.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAzxGH73Z3qRd8d7fqe5aPr34KKbMNUYNS223TrGdd3jRKLgE4XzYZvkux6i1qUhVAPGY52_-Fstj0XrmQrG0lI_gFGV68KSYtOVOsi_NYignFDO6yuQc44yDIa9ZZ2ZVgmRU7t__0KSWfvAtH3TPwckA6StSSGtVBRSgtmfDb3yjamALno0G66XWm0JVH3X8P8wIn92mX0mNmGF0ldEnWl1CaWoPXP8x9S3tOfoI2aP_7yBiSoovTZN7jQSct9w1PrFpfG5Qc22k" },
    { name: 'Emily Davis', role: 'Maternity Care', text: "Giving birth at Everleaf was a beautiful experience. The nurses were supportive and the neonatal care team is world-class.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80" },
    { name: 'Robert Wilson', role: 'Cardiac Patient', text: "Dr. Williams saved my life. The cardiac unit's speed and efficiency during my emergency were miraculous. Forever grateful.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80" },
    { name: 'Jennifer Lopez', role: 'Pediatrics Parent', text: "My kids actually enjoy going to the doctor now. Dr. Chen is fantastic with children and makes the whole process scary-free.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80" },
  ];

  return (
    <div className="animate-fade-in">
      <SEO 
        title="Home"
        description="Care That Grows With You. Everleaf Medical Center offers world-class healthcare, specialized departments, and expert doctors in Addis Abeba."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Hospital",
          "name": "Everleaf Medical Center",
          "image": heroImages,
          "telephone": "+251 954 123-456",
          "email": "info@everleaf.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Health Avenue",
            "addressLocality": "Addis Abeba",
            "addressRegion": "AA",
            "postalCode": "10012",
            "addressCountry": "ET"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.713129,
            "longitude": -74.003693
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          },
          "department": [
            { "@type": "MedicalSpecialty", "name": "Cardiology" },
            { "@type": "MedicalSpecialty", "name": "Pediatrics" },
            { "@type": "EmergencyService", "name": "Emergency Department" }
          ]
        }}
      />
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-slate-50 pt-12 pb-32 lg:pt-16 lg:pb-48">
        <div className="absolute inset-0 pointer-events-none opacity-50" style={{ backgroundImage: "radial-gradient(#136dec 0.5px, transparent 0.5px), radial-gradient(#136dec 0.5px, #f8fafc 0.5px)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Everleaf Medical Center
              </div>
              <h1 className="text-4xl lg:text-6xl font-brand font-bold text-slate-900 leading-tight mb-6">
                Care That Grows <span className="text-primary relative inline-block">
                  With You.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-40" preserveAspectRatio="none" viewBox="0 0 100 10">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Committed to lifelong wellness through compassionate care, innovation, and trust. Experience world-class healthcare in a serene environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => openAppointment()} className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg hover:-translate-y-0.5">
                  Request an Appointment
                </button>
              </div>
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-3">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuApKvfAtH953AhPeyJ50UOSHzlPQ8EEX7u1eM2NYzXd3bR9s3YqgUhWg3U9Fxk-NnaWlVuJ427eYVwOpMp8DFKhT8zWz3QOZ1F2pwHBHnRdmSTv8rLpiccNpH3ZdbNQOiwFfBUXntxoPGkpZFWMDB97O7hqh6MSsUkfctHT-9na25-E0fwxiRfTAzScl6CUVWp9aKOa72I2F1uKPEJ1_RmFzxV3Ld98yaVjBJHPKWx3UsX79ehswgvz_p2b5wqm-5lUnsuInUs0C3Q" alt="Doctor" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4GZCfQ-iIl965UQeFPIclRsBYz4f1mtz0n4nboa175ydsFbd1jpMTGjUenfcTFWMvdli4vBDJyQNsR3OW_kuLwe1EZ8-UZeCj3G1FkDoeD3P9GI5z6tIlWuR0CCmusql7YHZEI1i1JBJnN0jyK6RwsULoeC_xMwN63r70keIFcqFZQQPoY8F2DeHET5EkvhF5dZT9CMG9YEzHZC3PuCPGtuLigbW117bWFsXpSY5V-LX2gv4Xi3mKUVAGBiRCrfYyRjNWvnN3eEI" alt="Doctor" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLZa4BlPxSP0Up2tLXAybrE5xTrLlnaUwdOOdkdc9HIhbAY0wWjDN9rpfi7YDdVAKF00DXuLK6UYnSNscxf4Uf2OLWgCRFRsAQ6LtK31OfgT4-DlgYIc-lGkKJ2kj1EEjwcaPfkQPvfd1npBoP7whHHPg1sw6sY5lo7zsqm9TDJrSJvfIrxriBvQVA4Gka4oVPlYDr8s3eHcl9f5UN7LIYAj1RmbgdvB1uuiOkl0YVY9eSDIJ4oO2uv6xDOv46h8hBrhc63OM28B8" alt="Doctor" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">12k+</div>
                </div>
                <p>Happy patients recovered this year.</p>
              </div>
            </div>
            <div className="relative hidden lg:block h-[480px] w-full">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              {heroImages.map((src, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentHeroImage ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <img 
                    src={src} 
                    alt={`Hospital Highlight ${index + 1}`} 
                    className="rounded-2xl shadow-2xl object-cover w-full h-full" 
                  />
                </div>
              ))}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-4 max-w-xs animate-[bounce_3s_infinite]">
                <div className="bg-green-100 p-3 rounded-lg text-green-600">
                  <span className="material-icons text-2xl">verified_user</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">98% Satisfaction</p>
                  <p className="text-xs text-slate-500">Based on patient reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Info Cards */}
      <div className="relative z-20 -mt-20 lg:-mt-24 mb-20 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-slate-100">
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="bg-red-50 p-3 rounded-lg text-red-500 group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">emergency</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Emergency</h3>
              <p className="text-sm text-slate-500 mb-2">Immediate care for critical situations.</p>
              <Link to="/services/emergency" className="text-red-500 font-semibold text-sm flex items-center gap-1 group-hover:underline">
                Call 911 <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group border-l border-r border-slate-100">
            <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">person_search</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Find a Specialist</h3>
              <p className="text-sm text-slate-500 mb-2">Search our directory of expert doctors.</p>
              <Link to="/doctors" className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:underline">
                Search Doctors <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
            <div className="bg-secondary/10 p-3 rounded-lg text-secondary group-hover:scale-110 transition-transform">
              <span className="material-icons text-3xl">domain</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Our Departments</h3>
              <p className="text-sm text-slate-500 mb-2">Explore our specialized medical units.</p>
              <Link to="/departments" className="text-secondary font-semibold text-sm flex items-center gap-1 group-hover:underline">
                View Departments <span className="material-icons text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Medical Excellence</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">Our Specialized Services</h2>
            <p className="text-slate-600 text-lg">We provide a wide range of medical services to meet every need of your family, from routine checkups to complex surgeries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: 'favorite', title: 'Cardiology', desc: 'Expert heart care including diagnostics, treatment, and preventive cardiology services.', link: '/departments/cardiology' },
              { icon: 'psychology', title: 'Neurology', desc: 'Advanced diagnosis and treatment for disorders affecting the brain, spine, and nerves.', link: '/departments/neurology' },
              { icon: 'child_care', title: 'Pediatrics', desc: 'Compassionate care for infants, children, and adolescents in a kid-friendly environment.', link: '/departments/pediatrics' },
              { icon: 'science', title: 'Laboratory', desc: 'State-of-the-art laboratory services providing accurate and timely diagnostic results.', link: '/services/laboratory' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-icons text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 mb-4 text-sm leading-relaxed">{service.desc}</p>
                <Link to={service.link} className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <span className="material-icons text-xs">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-all shadow-md">
              View All Services
              <span className="material-icons text-sm ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Experts</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Meet Our Leading Specialists</h2>
            </div>
            <div className="hidden md:block">
              <Link to="/doctors" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-primary bg-blue-50 border border-blue-100 rounded-lg hover:bg-blue-100 transition-all">
                View All Doctors
                <span className="material-icons text-sm ml-2">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Johnson', role: 'Neurologist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9BZuqUAA5IOvQMgXBQ8ryTLzC7vKg69xiTlytVe-76cUVW84Bp8VWOapyKoqbwUVVWBuN_FfxCcsqFq1ao_QGijkga86eRCQeYgiaWkGi7WtZIQPN8Q2vpj9P49F7WLoa7Y9f-Oj_nR-hQM4ZVF-Hxf-HLyzlW5kk3Rk-ANh7DNvIi720KTGderseW5cc8dF6H7Wx6PDoI9ce9GfwndlXLLz4CsQbzfWS0_34TQzB04eBNYZK-S8nSZOkgY3aUVNpbGCAWq_I9vs', exp: '15 Years', deg: 'MBBS, MD' },
              { name: 'Dr. Mark Williams', role: 'Cardiologist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADGr580ge61fkfsxwBrM7N1TZyAY9Z-GTpjBUo_xK5lWfakoEU_qOziiT-so6DMVRYMjRbu0nVW-k1DcZ572-UwSxJBbHFxL921KxZ6v5xbrKCJfSDGPfGIKJ2lnbzJo8rsumPzZ1VnlvNztje35dbZ8OjoskrJoJWMwL2xyEuWVfFxTxZWLkj3322_nwECoDQOhnBsfJT-uJdBuBYvHW7tZFnkW3TihhkEKyTi4ionW16tPVhP7_Msgmo2tYXI-H3mW5DhYbZYTk', exp: '12 Years', deg: 'MBBS, MD' },
              { name: 'Dr. Emily Chen', role: 'Pediatrician', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY7zDqNO2hoPrxpDGZpE92fSZkSGJgJi7hfuXKUusm09nz1u9rNHNBxuJ0N_t6HSXFbSkNan8ZuDt8AkK0PHqzsi4I6ipPzk2q3ALgTZVcC1uboMYQ6dZnjiBkO036p5ErpaA0vAjn6D8TivJDicjayQgEkLrG4PsZURfL7C-lOADFWh45AKVB0WfWyqvzWL5JcVEwzhhuOWO87RBPu2zcdEOcZJloL6qr9YD-oKjiSjrlq9KMwrQ9LL25SFVQnG3ZphZNrYFaNIs', exp: '18 Years', deg: 'MBBS, PhD' }
            ].map((doc, idx) => (
              <div key={idx} className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
                <div className="relative h-80 overflow-hidden bg-slate-100">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  
                  {/* Slide-up Overlay */}
                  <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 flex flex-col justify-center text-white text-center z-20">
                    <h4 className="font-bold text-lg mb-2 text-blue-300 font-serif">Expert Care</h4>
                    <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                      Committed to providing the highest standard of medical excellence and compassionate patient care.
                    </p>
                    <div className="pt-2 border-t border-slate-700 flex gap-4 justify-center">
                      <button onClick={() => openAppointment({ doctorName: doc.name })} className="px-4 py-2 bg-primary rounded-full text-sm font-bold hover:bg-primary-dark transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 font-serif">{doc.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{doc.role}</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-slate-500 border-t border-slate-200 pt-4">
                    <span>{doc.exp} Exp.</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{doc.deg}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link to="/doctors" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-primary bg-blue-50 border border-blue-100 rounded-lg hover:bg-blue-100 transition-all">
              View All Doctors
              <span className="material-icons text-sm ml-2">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Revamped CTA Section */}
      <section className="py-24 relative overflow-hidden" id="newsletter">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              Start Your Journey
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Ready to Prioritize <br/><span className="text-blue-300">Your Health?</span>
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Schedule an appointment today to consult with our experts. We are committed to helping you lead a healthier, happier life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => openAppointment()}
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/30 hover:scale-105 flex items-center gap-2"
              >
                Book Appointment Now <span className="material-icons">calendar_today</span>
              </button>
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">Patient Stories</h2>
              <p className="text-slate-600 text-lg">Hear from those who have experienced our care firsthand.</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollTestimonials('left')}
                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors bg-white z-10"
              >
                <span className="material-icons">arrow_back</span>
              </button>
              <button
                onClick={() => scrollTestimonials('right')}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors z-10"
              >
                <span className="material-icons">arrow_forward</span>
              </button>
            </div>
          </div>
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {testimonials.map((testimonial, i) => (
              <div key={i} className="min-w-[100%] md:min-w-[50%] lg:min-w-[33.33%] snap-center">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full relative flex flex-col hover:shadow-md transition-all duration-300">
                  <a href="#" className="absolute top-6 right-6 text-slate-300 hover:text-primary transition-colors" title="Read on Google">
                    <span className="material-icons text-2xl">open_in_new</span>
                  </a>
                  <div className="flex items-center gap-1 text-yellow-400 mb-6">
                    <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed relative z-10 flex-grow">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={testimonial.img} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                    <div>
                      <h4 className="font-bold text-slate-900 font-serif">{testimonial.name}</h4>
                      <p className="text-xs text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-wider mb-8">
            Trusted by Insurance Partners
          </p>

          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex w-max items-center gap-12 mx-auto">
              {[
                { name: 'MediGuard', icon: 'health_and_safety' },
                { name: 'LifeCare', icon: 'shield' },
                { name: 'HealthPlus', icon: 'add_moderator' },
                { name: 'GlobalAssure', icon: 'verified' },
                { name: 'CareFirst', icon: 'favorite' }
              ].map((partner, idx) => (
                <div key={idx} className="flex-shrink-0 flex items-center gap-2 text-2xl font-bold text-slate-600 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:text-primary transition-all duration-300 cursor-pointer hover:scale-105">
                  <span className="material-icons text-3xl">{partner.icon}</span> {partner.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
