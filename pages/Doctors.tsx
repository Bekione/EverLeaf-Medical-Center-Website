import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext, useSearchParams } from "react-router-dom";
import { OpenAppointmentFunc } from "../Layout";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { doctors } from "../data/doctors";
import { CustomSelect } from "../components/CustomSelect";
import Button from "../components/Button";
import {
  useFilterTransition,
  cardAnimStyle,
} from "../hooks/useFilterTransition";
import HeroSection from "@/components/HeroSection";
import DoctorCard from "../components/DoctorCard";
import Pagination from "../components/Pagination";

const ITEMS_PER_PAGE = 12;

const Doctors: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [searchInput, setSearchInput] = useState(initialSearch); // bound to <input>
  const [searchTerm, setSearchTerm] = useState(initialSearch); // applied to filter
  const searchTimer = useRef<ReturnType<typeof setTimeout>>();
  const [deptFilter, setDeptFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [phase, animateFilter] = useFilterTransition(180, 40);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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

  // Reset to page 1 when filters change and sync with URL
  useEffect(() => {
    setCurrentPage(1);

    // Sync search term with URL params
    const params: Record<string, string> = {};
    if (searchTerm) params.search = searchTerm;
    setSearchParams(params, { replace: true });
  }, [searchTerm, deptFilter, specialtyFilter, genderFilter, setSearchParams]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll after state update
      setTimeout(() => {
        if (!gridRef.current) return;
        const isMobile = window.innerWidth < 1024;
        const offset = isMobile ? 165 : 145;
        const scrollTarget = Math.max(0, gridRef.current.offsetTop - offset);
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

       <HeroSection
        variant="centered"
        badge={t("pages.doctors.hero.badge")}
        title={t("pages.doctors.hero.title")}
        description={t("pages.doctors.hero.subtitle")}
      />

      {/* Filter Bar */}
      <div className="sticky top-(--header-height) lg:top-[74px] z-30 shadow-md border-b py-3 md:py-6 transition-all duration-300 bg-surface border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:items-center lg:justify-between">
            {/* Row 1 (Mobile) / Left Part (Desktop): Search and Dept */}
            <div className="flex gap-3 items-center w-full lg:w-auto lg:grow lg:contents">
              {/* Expandable Search Input Component */}
              <div
                className={`transition-[flex-grow] duration-500 ease-in-out flex ${
                  !isDesktop
                    ? isSearchExpanded
                      ? "grow"
                      : "grow-0"
                    : "lg:grow lg:basis-0"
                }`}
                style={
                  !isDesktop && !isSearchExpanded ? { width: 50 } : undefined
                }
                onClick={() => {
                  if (!isDesktop && !isSearchExpanded) {
                    setIsSearchExpanded(true);
                  }
                }}
              >
                <div className="relative group w-full">
                  <span
                    className={`material-icons absolute text-slate-400 transition-all duration-500 pointer-events-none z-10
                    ${
                      isSearchExpanded || isDesktop
                        ? "left-3.5 top-1/2 -translate-y-1/2"
                        : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    }`}
                  >
                    search
                  </span>
                  <input
                    id="doctor-search"
                    name="search"
                    type="text"
                    placeholder={
                      isSearchExpanded || isDesktop
                        ? t("pages.doctors.filters.searchPlaceholder")
                        : ""
                    }
                    className={`rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-500 shadow-sm bg-surface border-border text-text placeholder:transition-opacity ${
                      isSearchExpanded || isDesktop
                        ? "w-full pl-11 pr-10 py-3 opacity-100 placeholder:opacity-100 cursor-text"
                        : "w-[50px] h-[50px] p-0 pl-0 caret-transparent text-transparent placeholder:opacity-0 cursor-pointer"
                    }`}
                    value={searchInput}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => setIsSearchExpanded(true)}
                    onBlur={(e) => {
                      if (!e.relatedTarget && !searchInput) {
                        setIsSearchExpanded(false);
                      }
                    }}
                  />
                  {/* Clear Search Button */}
                  {searchInput && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        clearSearch();
                        if (!isDesktop) setIsSearchExpanded(false);
                      }}
                      animate={false}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 rounded-full h-8 w-8 min-w-0 items-center justify-center shadow-none hover:shadow-none z-20 inline-flex"
                      icon="close"
                      rounded="full"
                    ></Button>
                  )}
                </div>
              </div>

              {/* Department Filter - Part of Row 1 on mobile, follows Search on desktop */}
              <div
                className={`transition-[flex-grow] duration-500 ease-in-out flex ${
                  !isDesktop
                    ? isSearchExpanded
                      ? "flex-grow-0"
                      : "flex-grow"
                    : "lg:w-[220px] lg:shrink-0"
                }`}
              >
                <CustomSelect
                  className="w-full"
                  compact={isSearchExpanded && !isDesktop}
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
                    {
                      value: "surgery",
                      label: t("data.departments.surgery.name"),
                    },
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
              </div>
            </div>

            {/* Row 2 (Mobile) / Right Part (Desktop): Specialty and Gender */}
            <div className="flex gap-2 sm:gap-4 w-full lg:w-auto lg:shrink-0 lg:contents">
              <CustomSelect
                className="min-w-0 flex-1 lg:flex-none lg:w-[190px]"
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
                className="min-w-0 flex-1 lg:flex-none lg:w-[170px]"
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
                socialLinks={{ email: doc.email }}
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
                setSearchInput("");
                setSearchTerm("");
                setDeptFilter("");
                setSpecialtyFilter("");
                setGenderFilter("");
                setIsSearchExpanded(false);
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
