
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export type OpenAppointmentFunc = (data?: { doctorName?: string; department?: string; serviceName?: string }) => void;

const Layout: React.FC = () => {
  const [appointmentData, setAppointmentData] = useState<{ doctorName?: string; department?: string; serviceName?: string } | null>(null);

  const openAppointment: OpenAppointmentFunc = (data) => {
    setAppointmentData(data || {});
  };

  const closeAppointment = () => {
    setAppointmentData(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      <ScrollToTop />
      <Header onBookAppointment={() => openAppointment()} />
      <main className="flex-grow">
        <Outlet context={{ openAppointment }} />
      </main>
      <Footer />
      <AppointmentModal 
        isOpen={!!appointmentData} 
        onClose={closeAppointment} 
        initialData={appointmentData}
      />
    </div>
  );
};

export default Layout;
