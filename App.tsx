import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";
import AppointmentConfirmation from "./pages/AppointmentConfirmation";
import Privacy from "./pages/Privacy";
import { EverleafLogo } from "./components/Logo";
import LanguageRouter from "./components/LanguageRouter";
import i18n from "./i18n/config";

// Lazy load department pages for code splitting
const Cardiology = React.lazy(() => import("./pages/departments/Cardiology"));
const Neurology = React.lazy(() => import("./pages/departments/Neurology"));
const Surgery = React.lazy(() => import("./pages/departments/Surgery"));
const Dental = React.lazy(() => import("./pages/departments/Dental"));
const Rehabilitation = React.lazy(
  () => import("./pages/departments/Rehabilitation"),
);
const Pediatrics = React.lazy(() => import("./pages/departments/Pediatrics"));
const Ophthalmology = React.lazy(
  () => import("./pages/departments/Ophthalmology"),
);
const Radiology = React.lazy(() => import("./pages/departments/Radiology"));
const DepartmentLaboratory = React.lazy(
  () => import("./pages/departments/Laboratory"),
);

// Lazy load service pages
const Emergency = React.lazy(() => import("./pages/services/Emergency"));
const Laboratory = React.lazy(() => import("./pages/services/Laboratory"));
const Pharmacy = React.lazy(() => import("./pages/services/Pharmacy"));
const Imaging = React.lazy(() => import("./pages/services/Imaging"));
const PreventiveCheckups = React.lazy(
  () => import("./pages/services/PreventiveCheckups"),
);
const Diagnostics = React.lazy(() => import("./pages/services/Diagnostics"));

const Loading = () => (
  <div className="fixed inset-0 z-100 bg-white flex flex-col justify-center items-center p-4">
    <div className="flex flex-col items-center mb-12 animate-fade-in">
      <div className="p-4 mb-4">
        <EverleafLogo className="w-24 h-24" />
      </div>
      <div className="text-center">
        <span className="text-4xl font-brand font-semibold text-slate-900 block leading-none mb-2">
          Everleaf
        </span>
        <span className="text-xs text-slate-500 font-brand font-medium tracking-[0.2em] uppercase">
          Medical Center
        </span>
      </div>
    </div>
    <div className="relative w-16 h-16 mb-8">
      <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
      <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
    </div>
    <div className="text-center space-y-2">
      <h2 className="text-lg font-medium text-slate-800">
        Care That Grows With You...
      </h2>
    </div>
  </div>
);

/** Determine the default language to redirect to from bare "/" */
function getDefaultLang(): string {
  const stored = localStorage.getItem("i18nextLng");
  if (stored && ["en", "fr", "am"].includes(stored)) return stored;
  return i18n.language?.split("-")[0] || "en";
}

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            {/* Redirect bare "/" to "/{lang}" */}
            <Route
              index
              path="/"
              element={<Navigate to={`/${getDefaultLang()}`} replace />}
            />

            {/* All pages live under /:lang (e.g. /en/about, /fr/contact) */}
            <Route path="/:lang" element={<LanguageRouter />}>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="departments" element={<Departments />} />
                <Route path="doctors" element={<Doctors />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="contact" element={<Contact />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<ArticleDetail />} />
                <Route path="privacy" element={<Privacy />} />
                <Route
                  path="appointment-confirmation"
                  element={<AppointmentConfirmation />}
                />

                {/* Department Routes */}
                <Route path="departments/cardiology" element={<Cardiology />} />
                <Route path="departments/neurology" element={<Neurology />} />
                <Route path="departments/surgery" element={<Surgery />} />
                <Route path="departments/dental" element={<Dental />} />
                <Route
                  path="departments/rehabilitation"
                  element={<Rehabilitation />}
                />
                <Route path="departments/radiology" element={<Radiology />} />
                <Route
                  path="departments/laboratory"
                  element={<DepartmentLaboratory />}
                />
                <Route path="departments/pharmacy" element={<Pharmacy />} />
                <Route path="departments/emergency" element={<Emergency />} />
                <Route path="departments/pediatrics" element={<Pediatrics />} />
                <Route
                  path="departments/ophthalmology"
                  element={<Ophthalmology />}
                />

                {/* Service Routes */}
                <Route
                  path="services/preventive-checkups"
                  element={<PreventiveCheckups />}
                />
                <Route path="services/diagnostics" element={<Diagnostics />} />
                <Route path="services/imaging" element={<Imaging />} />
                <Route path="services/laboratory" element={<Laboratory />} />
                <Route path="services/pharmacy" element={<Pharmacy />} />
                <Route path="services/emergency" element={<Emergency />} />

                {/* Catch all */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Route>

            {/* Catch-all for any other unmatched path → redirect to lang home */}
            <Route
              path="*"
              element={<Navigate to={`/${getDefaultLang()}`} replace />}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </HelmetProvider>
  );
};

export default App;
