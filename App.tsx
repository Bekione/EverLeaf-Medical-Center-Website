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
import LanguageRouter from "./components/LanguageRouter";
import LoadingScreen from "./components/LoadingScreen";
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

/** Determine the default language to redirect to from bare "/" */
function getDefaultLang(): string {
  const stored = localStorage.getItem("i18nextLng");
  if (stored && ["en", "fr", "am"].includes(stored)) return stored;
  return i18n.language?.split("-")[0] || "en";
}

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Suspense fallback={<LoadingScreen />}>
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
