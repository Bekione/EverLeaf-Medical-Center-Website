
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: { doctorName?: string; department?: string; serviceName?: string } | null;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, initialData }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  });

  // Reset or pre-fill form when modal opens with data
  useEffect(() => {
    if (isOpen && initialData) {
      let defaultMessage = '';
      if (initialData.serviceName) {
        defaultMessage = `I am interested in booking the ${initialData.serviceName}.`;
      } else if (initialData.doctorName) {
        defaultMessage = `I would like to book an appointment with ${initialData.doctorName}.`;
      }

      setFormData(prev => ({
        ...prev,
        message: defaultMessage,
        department: initialData.department || ''
      }));
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
    // Reset form for next time
    setFormData({ fullName: '', email: '', phone: '', department: '', message: '' });
    navigate('/appointment-confirmation');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-all animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
        >
          <span className="material-icons text-2xl">close</span>
        </button>
        
        <div className="mb-8 text-center sm:text-left">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-primary mb-4">
            <span className="material-icons text-2xl">calendar_today</span>
          </div>
          <h3 className="text-2xl font-bold leading-6 text-slate-900">Request an Appointment</h3>
          <p className="mt-2 text-sm text-slate-500">Fill out the form below and our team will contact you to confirm your slot.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-icons text-lg">person</span>
              </div>
              <input 
                type="text" 
                id="fullName" 
                value={formData.fullName}
                onChange={handleChange}
                required 
                className="block w-full pl-10 rounded-lg border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary sm:text-sm py-2.5 placeholder-slate-400 text-slate-900" 
                placeholder="John Doe" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <span className="material-icons text-lg">email</span>
                </div>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="block w-full pl-10 rounded-lg border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary sm:text-sm py-2.5 placeholder-slate-400 text-slate-900" 
                  placeholder="you@example.com" 
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <span className="material-icons text-lg">phone</span>
                </div>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                  className="block w-full pl-10 rounded-lg border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary sm:text-sm py-2.5 placeholder-slate-400 text-slate-900" 
                  placeholder="(555) 000-0000" 
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="department" className="block text-sm font-medium text-slate-700 mb-1">Preferred Department</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-icons text-lg">local_hospital</span>
              </div>
              <select 
                id="department" 
                value={formData.department}
                onChange={handleChange}
                className="block w-full pl-10 rounded-lg border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary sm:text-sm py-2.5 text-slate-700"
              >
                <option value="">Choose a department...</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Surgery">General Surgery</option>
                <option value="Dental">Dental</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Oncology">Oncology</option>
                <option value="Laboratory">Laboratory</option>
                <option value="Radiology">Radiology</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Preventive Checkups">Preventive Checkups</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
            <textarea 
              id="message" 
              rows={3} 
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-lg border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary sm:text-sm p-3 placeholder-slate-400 text-slate-900" 
              placeholder="Briefly describe your symptoms or reason for visit..."
            ></textarea>
          </div>

          <div className="pt-2">
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
              Submit Request
            </button>
            <p className="mt-3 text-center text-xs text-slate-400">
              By submitting, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
