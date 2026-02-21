import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../Layout";
import ImageSkeleton from "../components/ImageSkeleton";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { doctors } from "../data/doctors";
import { CustomSelect } from "../components/CustomSelect";
import {
  useFilterTransition,
  cardAnimStyle,
} from "../hooks/useFilterTransition";

const ITEMS_PER_PAGE = 12;

const Doctors: React.FC = () => {
  const { t } = useTranslation();
  const [searchInput, setSearchInput] = useState(""); // bound to <input>
  const [searchTerm, setSearchTerm] = useState(""); // applied to filter
  const searchTimer = useRef<ReturnType<typeof setTimeout>>();
  const [deptFilter, setDeptFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [phase, animateFilter] = useFilterTransition(180, 40);

  /** Immediately update the visible input; debounce the card animation */
  const handleSearch = (val: string) => {
    setSearchInput(val);
    if (searchTimer.current) clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => {
      animateFilter(() => setSearchTerm(val));
    }, 300);
  };

  const clearSearch = () => {
    setSearchInput("");
    animateFilter(() => setSearchTerm(""));
  };
  const { openAppointment } = useOutletContext<{
    openAppointment: OpenAppointmentFunc;
  }>();

  // Localize doctor data for search and display
  const localizedDoctors = React.useMemo(() => {
    return doctors.map((doc) => ({
      ...doc,
      localizedName: t(`data.doctors.${doc.id}.name`),
      localizedSpecialty: t(`data.doctors.${doc.id}.specialty`),
      localizedBio: t(`data.doctors.${doc.id}.bio`),
      localizedEducation: t(`data.doctors.${doc.id}.education`),
    }));
  }, [t]);

  // Filter Logic
  const filteredDoctors = localizedDoctors.filter((doc) => {
    const matchesSearch = doc.localizedName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDept =
      deptFilter === "" || doc.dept.toLowerCase() === deptFilter;
    const matchesGender = genderFilter === "" || doc.gender === genderFilter;
    const matchesSpecialty =
      specialtyFilter === "" ||
      doc.localizedSpecialty.toLowerCase().includes(specialtyFilter);

    return matchesSearch && matchesDept && matchesGender && matchesSpecialty;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE);
  const paginatedDoctors = filteredDoctors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, deptFilter, specialtyFilter, genderFilter]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      animateFilter(() => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  };

  return (
    <div
      className="animate-fade-in min-h-screen"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <SEO
        title={t("pages.doctors.hero.title")}
        description={t("pages.doctors.hero.subtitle")}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          name: "Everleaf Medical Center",
          department: filteredDoctors.map((doc) => ({
            "@type": "Physician",
            name: doc.localizedName,
            medicalSpecialty: doc.localizedSpecialty,
            employee: {
              "@type": "Person",
              name: doc.localizedName,
            },
          })),
        }}
      />
      {/* Page Header */}
      <div
        className="border-b py-12 md:py-16"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-6">
          <Reveal delay={0}>
            <h1
              className="text-3xl md:text-4xl font-serif font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              {t("pages.doctors.hero.title")}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p
              className="max-w-2xl text-lg leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {t("pages.doctors.hero.subtitle")}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Filter Bar */}
      <div
        className="sticky top-[72px] z-30 shadow-md border-b py-6 transition-all duration-300"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="relative grow max-w-xl">
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              id="doctor-search"
              name="search"
              type="text"
              placeholder={t("pages.doctors.filters.searchPlaceholder")}
              className="w-full pl-12 pr-10 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm placeholder-slate-400"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
                color: "var(--color-text)",
              }}
              value={searchInput}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchInput && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                style={{ color: "var(--color-text-muted)" }}
                aria-label="Clear search"
              >
                <span className="material-icons text-base leading-none">
                  close
                </span>
              </button>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <CustomSelect
              className="min-w-[220px]"
              options={[
                { value: "", label: t("pages.doctors.filters.allDepts") },
                {
                  value: "cardiology",
                  label: t("data.departments.cardiology.name"),
                },
                {
                  value: "neurology",
                  label: t("data.departments.neurology.name"),
                },
                {
                  value: "pediatrics",
                  label: t("data.departments.pediatrics.name"),
                },
                {
                  value: "orthopedics",
                  label: t("data.departments.orthopedics.name"),
                },
                {
                  value: "oncology",
                  label: t("data.departments.oncology.name"),
                },
                {
                  value: "dermatology",
                  label: t("data.departments.dermatology.name"),
                },
                { value: "surgery", label: t("data.departments.surgery.name") },
                {
                  value: "ophthalmology",
                  label: t("data.departments.ophthalmology.name"),
                },
              ]}
              value={deptFilter}
              onChange={(val) => animateFilter(() => setDeptFilter(val))}
              placeholder={t("pages.doctors.filters.allDepts")}
              icon="domain"
            />

            <div className="flex gap-4 w-full">
              <CustomSelect
                className="min-w-[180px] grow"
                options={[
                  {
                    value: "",
                    label: t("pages.doctors.filters.allSpecialties"),
                  },
                  {
                    value: "surgeon",
                    label: t("pages.doctors.filters.specialties.surgeon"),
                  },
                  {
                    value: "senior",
                    label: t("pages.doctors.filters.specialties.senior"),
                  },
                  {
                    value: "chief",
                    label: t("pages.doctors.filters.specialties.chief"),
                  },
                  {
                    value: "specialist",
                    label: t("pages.doctors.filters.specialties.specialist"),
                  },
                ]}
                value={specialtyFilter}
                onChange={(val) => animateFilter(() => setSpecialtyFilter(val))}
                placeholder={t("pages.doctors.filters.allSpecialties")}
                icon="badge"
              />

              <CustomSelect
                className="min-w-[160px] grow"
                options={[
                  { value: "", label: t("pages.doctors.filters.allGenders") },
                  {
                    value: "female",
                    label: t("pages.doctors.filters.genders.female"),
                  },
                  {
                    value: "male",
                    label: t("pages.doctors.filters.genders.male"),
                  },
                ]}
                value={genderFilter}
                onChange={(val) => animateFilter(() => setGenderFilter(val))}
                placeholder={t("pages.doctors.filters.allGenders")}
                icon="wc"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <section className="py-16 container mx-auto px-6">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {paginatedDoctors.map((doc, idx) => (
              <div
                key={doc.id}
                className="group relative rounded-2xl overflow-hidden hover:shadow-xl border flex flex-col h-full"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                  boxShadow: "var(--shadow-card)",
                  ...cardAnimStyle(idx, phase),
                }}
              >
                <div
                  className="relative h-80 overflow-hidden"
                  style={{ backgroundColor: "var(--color-bg-alt)" }}
                >
                  <ImageSkeleton
                    src={doc.img}
                    alt={doc.localizedName}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    containerClassName="w-full h-full"
                  />

                  {/* Slide-up Overlay */}
                  <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 flex flex-col justify-center text-white text-center z-20">
                    <div className="overflow-y-auto scrollbar-hide pr-1">
                      <h4 className="font-bold text-lg mb-2 text-blue-300 font-serif">
                        {t("pages.doctors.card.about")}
                      </h4>
                      <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                        {doc.localizedBio}
                      </p>

                      <h4 className="font-bold text-sm mb-1 text-blue-300 uppercase tracking-wide">
                        {t("pages.doctors.card.education")}
                      </h4>
                      <p className="text-xs text-slate-300 mb-6">
                        {doc.localizedEducation}
                      </p>

                      <div className="pt-2 border-t border-slate-700 flex gap-4 justify-center">
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-primary transition-colors text-white"
                        >
                          <span className="material-icons text-sm">email</span>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-primary transition-colors text-white"
                        >
                          <span className="material-icons text-sm">share</span>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-primary transition-colors text-white"
                        >
                          <span className="material-icons text-sm">link</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="p-6 flex flex-col grow text-center relative z-10"
                  style={{ backgroundColor: "var(--color-surface)" }}
                >
                  <h3
                    className="text-xl font-bold mb-1 font-serif"
                    style={{ color: "var(--color-text)" }}
                  >
                    {doc.localizedName}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-1">
                    {doc.localizedSpecialty}
                  </p>
                  <p
                    className="text-xs mb-6 uppercase tracking-wider"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {t("pages.doctors.card.deptPrefix")}
                    {t(
                      `data.departments.${doc.dept.toLowerCase()}.name`,
                      doc.dept,
                    )}
                  </p>

                  <div
                    className="mt-auto pt-4 border-t w-full"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <button
                      onClick={() =>
                        openAppointment({
                          doctorName: doc.localizedName,
                          department: doc.dept,
                        })
                      }
                      className="w-full py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                    >
                      <span className="relative z-10">
                        {t("pages.doctors.card.requestAppointment")}
                      </span>
                      <span className="material-icons text-xs relative z-10 transition-transform group-hover/btn:translate-x-1">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {paginatedDoctors.length === 0 && (
          <div
            className="text-center py-20 rounded-2xl border shadow-sm"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <span className="material-icons text-6xl text-slate-200 mb-4">
              search_off
            </span>
            <h3
              className="text-xl font-bold"
              style={{ color: "var(--color-text)" }}
            >
              {t("pages.doctors.filters.noResults")}
            </h3>
            <p className="mt-2" style={{ color: "var(--color-text-muted)" }}>
              {t("pages.doctors.filters.noResultsDesc")}
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setDeptFilter("");
                setSpecialtyFilter("");
                setGenderFilter("");
              }}
              className="mt-6 px-6 py-2 rounded-lg transition-colors font-medium text-sm"
              style={{
                backgroundColor: "var(--color-bg-alt)",
                color: "var(--color-text-muted)",
              }}
            >
              {t("pages.doctors.filters.clear")}
            </button>
          </div>
        )}

        {/* Real Pagination */}
        {filteredDoctors.length > 0 && (
          <div className="mt-16 flex justify-center">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="material-icons text-sm">chevron_left</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primary text-white shadow-md"
                        : "border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="material-icons text-sm">chevron_right</span>
              </button>
            </nav>
          </div>
        )}
      </section>
    </div>
  );
};

export default Doctors;
