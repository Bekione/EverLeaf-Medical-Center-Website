import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../Layout";
import ImageSkeleton from "../components/ImageSkeleton";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { doctors } from "../data/doctors";
import { CustomSelect } from "../components/CustomSelect";
import Button from "../components/Button";
import {
  useFilterTransition,
  cardAnimStyle,
} from "../hooks/useFilterTransition";
import DoctorCard from "../components/DoctorCard";
import Pagination from "../components/Pagination";

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
  const gridRef = useRef<HTMLElement>(null);

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
      setCurrentPage(page);
      // Scroll after state update
      setTimeout(() => {
        const scrollTarget = gridRef.current
          ? Math.max(0, gridRef.current.offsetTop - 150)
          : 0;
        window.scrollTo({ top: scrollTarget, behavior: "smooth" });
      }, 0);
    }
  };

  return (
    <div className="animate-fade-in min-h-screen bg-bg-alt">
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
      <div className="border-b py-12 md:py-16 bg-surface border-border">
        <div className="container mx-auto px-6">
          <Reveal delay={0}>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-text">
              {t("pages.doctors.hero.title")}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
              {t("pages.doctors.hero.subtitle")}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-[72px] z-30 shadow-md border-b py-6 transition-all duration-300 bg-surface border-border">
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
              className="w-full pl-12 pr-10 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm placeholder-slate-400 bg-surface border-border text-text"
              value={searchInput}
              onChange={(e) => handleSearch(e.target.value)}
            />
            {searchInput && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full h-8 w-8 min-w-0 shadow-none hover:shadow-none"
                icon="close"
              ></Button>
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
      <section ref={gridRef} className="py-16 container mx-auto px-6">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {paginatedDoctors.map((doc, idx) => (
              <DoctorCard
                key={doc.id}
                variant="detailed"
                name={doc.localizedName}
                role={doc.localizedSpecialty}
                img={doc.img}
                bio={doc.localizedBio}
                education={doc.localizedEducation}
                departmentName={t(
                  `data.departments.${doc.dept.toLowerCase()}.name`,
                  doc.dept,
                )}
                onBookAppointment={() =>
                  openAppointment({
                    doctorName: doc.localizedName,
                    department: doc.dept,
                  })
                }
                style={cardAnimStyle(idx, phase)}
              />
            ))}
          </div>
        </div>

        {paginatedDoctors.length === 0 && (
          <div className="text-center py-20 rounded-2xl border shadow-sm bg-surface border-border">
            <span className="material-icons text-6xl text-slate-200 mb-4">
              search_off
            </span>
            <h3 className="text-xl font-bold text-text">
              {t("pages.doctors.filters.noResults")}
            </h3>
            <p className="mt-2 text-text-muted">
              {t("pages.doctors.filters.noResultsDesc")}
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearchTerm("");
                setDeptFilter("");
                setSpecialtyFilter("");
                setGenderFilter("");
              }}
              className="mt-6"
            >
              {t("pages.doctors.filters.clear")}
            </Button>
          </div>
        )}

        {/* Real Pagination */}
        {filteredDoctors.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </section>
    </div>
  );
};

export default Doctors;
