
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="relative bg-white border-b border-slate-100 min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80" alt="Hospital Building" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 py-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Get in Touch with <br/>
                <span className="text-primary">Everleaf Medical Center</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                We are here to help. Whether you need to schedule an appointment, have questions about our services, or need emergency assistance, our team is ready to respond.
              </p>
              <div className="space-y-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h3 className="text-red-600 font-bold uppercase tracking-wide text-sm mb-2">Emergency Cases</h3>
                  <div className="flex items-center gap-3">
                    <span className="material-icons text-red-500 text-3xl">phone_in_talk</span>
                    <span className="text-3xl font-bold text-slate-900">911</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">For life-threatening emergencies, call immediately.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div>
                    <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                      <span className="material-icons text-sm">phone</span> General Inquiries
                    </h3>
                    <p className="text-xl font-bold text-slate-800">+1 (555) 123-4567</p>
                    <p className="text-sm text-slate-500 mt-1">info@everleaf.com</p>
                  </div>
                  <div>
                    <h3 className="text-primary font-semibold mb-3 flex items-center gap-2">
                      <span className="material-icons text-sm">access_time</span> Working Hours
                    </h3>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li className="flex justify-between w-40"><span>Mon - Fri:</span> <span className="font-medium">8:00 - 20:00</span></li>
                      <li className="flex justify-between w-40"><span>Saturday:</span> <span className="font-medium">9:00 - 18:00</span></li>
                      <li className="flex justify-between w-40"><span>Sunday:</span> <span className="font-medium">9:00 - 14:00</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input type="text" className="w-full rounded-lg border-slate-200 bg-slate-50 focus:ring-primary focus:border-primary transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input type="email" className="w-full rounded-lg border-slate-200 bg-slate-50 focus:ring-primary focus:border-primary transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <select className="w-full rounded-lg border-slate-200 bg-slate-50 focus:ring-primary focus:border-primary transition-colors text-slate-600">
                    <option>General Inquiry</option>
                    <option>Appointment Request</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea className="w-full rounded-lg border-slate-200 bg-slate-50 focus:ring-primary focus:border-primary transition-colors h-32" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full py-3 px-6 text-white font-bold bg-primary hover:bg-primary-dark rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group">
                  Send Message
                  <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </form>
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
          style={{border:0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-12 md:w-96 bg-white p-6 rounded-xl shadow-2xl border border-slate-100">
          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="material-icons text-primary">directions</span> Directions & Transportation
          </h4>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                <span className="material-icons text-sm">directions_bus</span>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Public Transit</p>
                <p className="text-slate-500">Bus lines M15, M22 stop directly in front of the main entrance.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary shrink-0">
                <span className="material-icons text-sm">local_parking</span>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Parking</p>
                <p className="text-slate-500">Visitor parking garage is available on 4th Ave ($5/hr). Valet service available at main entrance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
