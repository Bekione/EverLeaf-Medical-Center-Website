
import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';
import NotFound from './pages/NotFound';
import AppointmentConfirmation from './pages/AppointmentConfirmation';
import Privacy from './pages/Privacy';

// Department Pages
import Cardiology from './pages/departments/Cardiology';
import Neurology from './pages/departments/Neurology';
import Surgery from './pages/departments/Surgery';
import Dental from './pages/departments/Dental';
import Rehabilitation from './pages/departments/Rehabilitation';
import Pediatrics from './pages/departments/Pediatrics';
import Ophthalmology from './pages/departments/Ophthalmology';
import Radiology from './pages/departments/Radiology';
import Emergency from './pages/services/Emergency';

// Service Pages
import Laboratory from './pages/services/Laboratory';
import Pharmacy from './pages/services/Pharmacy';
import Imaging from './pages/services/Imaging';
import PreventiveCheckups from './pages/services/PreventiveCheckups';
import Diagnostics from './pages/services/Diagnostics';

// Article Pages
import DiabetesManagement from './pages/articles/DiabetesManagement';
import ImmuneSystem from './pages/articles/ImmuneSystem';

// Custom Logo Component for Loading Screen (User Provided SVG)
const EverleafLogo = ({ className = "w-20 h-20" }: { className?: string }) => (
  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900" className={className}>
    <path fill="#136dec" d="m600.24 212.89c-4.66-26.54-8.32-53.07-11.73-79.61l-1.24-9.96-0.61-4.97-0.15-1.25c-0.05-0.4-0.09-0.87-0.16-1.14l-0.41-1.87c-1.05-4.93-2.93-9.5-5.49-13.49-2.59-3.98-5.77-7.44-9.45-10.1-3.66-2.65-7.66-4.61-11.77-5.72-4.1-1.1-8.25-1.48-12.29-1.09l-18.57 1.7-19.91 1.74q-9.95 0.86-19.91 1.64c-26.54 2.14-53.09 3.99-79.64 5.64-13.27 0.85-26.55 1.58-39.82 2.31l-4.98 0.28-2.49 0.13-0.62 0.03-0.31 0.02-0.11 0.03-0.47 0.1q-0.46 0.1-0.92 0.17c-0.3 0.04-0.61 0.05-0.9 0.18-0.57 0.22-1.16 0.32-1.72 0.51-2.26 0.73-4.23 2.02-6 3.47-1.75 1.48-3.23 3.27-4.3 5.19-1.06 1.94-1.77 3.96-2.09 5.99-0.21 1.01-0.2 2.06-0.23 3.09q0.06 0.4 0.07 0.79l0.01 0.39-0.01 0.2v0.1l0.01 0.26 0.19 4.98 0.64 19.92c0.86 26.55 1.47 53.1 1.97 79.66 0.15 6.63 0.21 13.27 0.31 19.91l0.01 0.31-0.01 0.54-0.03 1.07-0.07 2.16-0.19 4.31c-0.05 1.43-0.24 2.87-0.44 4.3q-0.28 2.15-0.61 4.3c-0.36 2.87-1.15 5.67-1.83 8.49-0.38 1.4-0.67 2.83-1.16 4.19q-0.7 2.07-1.43 4.12c-7.94 21.87-24.06 40.34-44.53 51.3-2.59 1.31-5.19 2.61-7.86 3.76q-4.06 1.58-8.18 3.01-4.19 1.2-8.43 2.22c-2.83 0.61-5.71 1.01-8.58 1.44-1.43 0.23-2.87 0.33-4.31 0.41l-4.32 0.24c-3.42 0.16-4.37 0.09-6.18 0.11l-9.96 0.02-39.83-0.2c-13.28-0.16-26.56-0.24-39.84-0.46l-36.93-0.65q-2.95-0.03-5.74 0.98c-1.87 0.67-3.71 1.68-5.33 3.05-1.63 1.36-3.02 3.04-4.09 4.91-1.06 1.88-1.77 3.95-2.1 6.26l-0.09 0.43-0.05 0.21c-0.01 0.05-0.02 0.06-0.03 0.13l-0.01 0.31-0.08 2.49-0.2 4.98-0.41 9.96-0.83 19.92c-0.63 13.28-1.22 26.56-1.95 39.85-0.67 13.28-1.48 26.56-2.25 39.84-0.86 13.28-1.69 26.56-2.65 39.85q-0.68 9.96-1.46 19.92l-1.26 16.88c-0.09 3.81 0.52 7.7 1.89 11.48 1.37 3.78 3.52 7.4 6.3 10.63 2.77 3.25 6.23 6.01 10.15 8.16l1.48 0.83c0.51 0.23 1.04 0.42 1.56 0.65l1.57 0.67c0.52 0.27 1.09 0.35 1.64 0.54l1.66 0.51c0.28 0.08 0.55 0.19 0.84 0.25l0.86 0.16 1.73 0.35 0.88 0.19c0.16 0.03 0.26 0.07 0.48 0.09l0.62 0.07q19.93 2.06 39.86 4.4c26.57 3.17 53.14 6.61 79.72 11.05-26.54 4.69-53.08 8.37-79.62 11.79q-19.9 2.53-39.81 4.77l-0.62 0.07c-0.19 0.03-0.51 0.04-0.76 0.05l-1.61 0.08-3.24 0.12-1.63 0.04c-0.54 0-1.08-0.05-1.62-0.08l-3.27-0.21c-1.08-0.11-2.19-0.11-3.27-0.32l-3.25-0.54c-1.08-0.19-2.18-0.37-3.26-0.59l-3.21-0.87c-8.56-2.33-16.75-6.36-24.06-11.76-7.3-5.4-13.66-12.25-18.66-20.12-5.03-7.87-8.5-16.86-10.32-26.2l-0.36-1.76c-0.12-0.58-0.17-1.17-0.25-1.76l-0.42-3.55-0.2-1.78-0.15-1.61-0.21-2.49-0.85-9.95q-0.87-9.96-1.64-19.91c-1.09-13.28-2.04-26.55-3.02-39.82-0.9-13.28-1.84-26.55-2.63-39.83-0.85-13.27-1.57-26.54-2.32-39.82l-1.01-19.91-0.5-9.96-0.25-4.98-0.11-2.48-0.01-0.32v-0.49l0.01-1.03 0.02-2.05c0.09-10.95 2.2-22.08 6.28-32.45 4.06-10.39 10.17-19.94 17.71-28.17 7.56-8.22 16.64-15.11 26.76-20.14 10.11-5.03 21.23-8.2 32.49-9.28l4.22-0.31c1.35-0.08 3.08-0.18 3.65-0.18l4.98-0.16 9.96-0.27 19.91-0.52c13.28-0.34 26.56-0.55 39.83-0.84l39.83-0.56 9.96-0.08c1.51-0.01 3.88 0 3.77-0.1q0.33-0.04 0.66-0.04c0.22 0.01 0.44 0.03 0.64-0.06 0.4-0.13 0.83-0.11 1.24-0.21q0.58-0.23 1.2-0.31 0.54-0.31 1.15-0.45c0.37-0.2 0.71-0.43 1.12-0.56 1.47-0.77 2.85-1.85 3.99-3.13 1.15-1.29 2.01-2.77 2.64-4.3q0.11-0.29 0.26-0.57c0.13-0.17 0.09-0.41 0.16-0.6 0.07-0.41 0.35-0.78 0.32-1.22q0.04-0.31 0.12-0.63c0.05-0.2 0.14-0.41 0.1-0.64q0-0.33 0.04-0.66l0.04-0.33 0.03-0.17 0.02-0.09v-0.31c0.04-6.64 0.04-13.28 0.13-19.92 0.25-26.56 0.61-53.12 1.23-79.67l0.46-19.92 0.14-4.98 0.09-1.93 0.12-2.1 0.3-4.18c0.61-5.56 1.6-11.11 3.22-16.49 3.13-10.77 8.25-20.92 14.99-29.71 6.72-8.82 15-16.34 24.33-22.16 9.34-5.81 19.76-9.9 30.52-11.89 2.68-0.49 5.39-0.8 8.09-1.13 1.35-0.19 2.7-0.23 4.05-0.28l4.05-0.11 2.02-0.03h0.51l0.32 0.01 0.62 0.03 2.49 0.1 4.98 0.23c13.28 0.61 26.56 1.23 39.84 1.95 26.57 1.4 53.13 3.01 79.7 4.9q9.96 0.68 19.92 1.46l19.92 1.55 9.97 0.81 4.98 0.41 2.84 0.26 3.47 0.37c9.2 1.14 18.17 3.92 26.18 8.23 8.01 4.31 15.13 9.99 20.88 16.71 5.77 6.69 10.19 14.39 13.03 22.52 2.86 8.13 4.13 16.68 3.82 24.99l-0.13 3.1c-0.01 0.56-0.07 0.92-0.11 1.35l-0.14 1.24-0.56 4.99-1.15 9.96c-3.16 26.57-6.58 53.14-10.99 79.72z"/>
  </svg>
);

// Loading Component
const Loading = () => (
  <div className="fixed inset-0 z-[100] bg-white flex flex-col justify-center items-center p-4">
    <div className="flex flex-col items-center mb-12 animate-fade-in">
      <div className="p-4 mb-4">
        <EverleafLogo className="w-24 h-24" />
      </div>
      <div className="text-center">
        <span className="text-4xl font-brand font-semibold text-slate-900 block leading-none mb-2">Everleaf</span>
        <span className="text-xs text-slate-500 font-brand font-medium tracking-[0.2em] uppercase">Medical Center</span>
      </div>
    </div>
    <div className="relative w-16 h-16 mb-8">
      <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
    </div>
    <div className="text-center space-y-2">
      <h2 className="text-lg font-medium text-slate-800">Care That Grows With You...</h2>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="departments" element={<Departments />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/preventive-cardiology" element={<ArticleDetail />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="appointment-confirmation" element={<AppointmentConfirmation />} />
            
            {/* Departments Routes */}
            <Route path="departments/cardiology" element={<Cardiology />} />
            <Route path="cardiology" element={<Cardiology />} /> {/* Direct link alias */}
            <Route path="departments/neurology" element={<Neurology />} />
            <Route path="neurology" element={<Neurology />} /> {/* Direct link alias */}
            <Route path="departments/surgery" element={<Surgery />} />
            <Route path="departments/dental" element={<Dental />} />
            <Route path="departments/rehabilitation" element={<Rehabilitation />} />
            <Route path="departments/radiology" element={<Radiology />} />
            <Route path="departments/laboratory" element={<Laboratory />} />
            <Route path="laboratory" element={<Laboratory />} /> {/* Direct link alias */}
            <Route path="departments/pharmacy" element={<Pharmacy />} />
            <Route path="departments/emergency" element={<Emergency />} />
            <Route path="emergency" element={<Emergency />} /> {/* Direct link alias */}
            <Route path="departments/pediatrics" element={<Pediatrics />} />
            <Route path="departments/ophthalmology" element={<Ophthalmology />} />
            
            {/* Service Routes */}
            <Route path="services/preventive-checkups" element={<PreventiveCheckups />} />
            <Route path="services/diagnostics" element={<Diagnostics />} />
            <Route path="services/imaging" element={<Imaging />} />
            <Route path="services/laboratory" element={<Laboratory />} />
            <Route path="services/pharmacy" element={<Pharmacy />} />
            <Route path="services/emergency" element={<Emergency />} />

            {/* Specific Articles */}
            <Route path="blog/diabetes-management" element={<DiabetesManagement />} />
            <Route path="blog/immune-system" element={<ImmuneSystem />} />
            
            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </Suspense>
  );
};

export default App;
