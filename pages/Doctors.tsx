import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { OpenAppointmentFunc } from "../Layout";
import ImageSkeleton from "../components/ImageSkeleton";
import SEO from "../components/SEO";
import { doctors } from "../data/doctors";

const ITEMS_PER_PAGE = 12;

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { openAppointment } = useOutletContext<{
    openAppointment: OpenAppointmentFunc;
  }>();

  // Filter Logic
  const filteredDoctors = doctors.filter((doc) => {
    const matchesSearch = doc.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesDept = deptFilter === "" || doc.dept === deptFilter;
    const matchesGender = genderFilter === "" || doc.gender === genderFilter;
    const matchesSpecialty =
      specialtyFilter === "" ||
      doc.specialty.toLowerCase().includes(specialtyFilter);

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
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="animate-fade-in min-h-screen"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <SEO
        title="Find a Doctor"
        description="Search our directory of distinguished medical professionals and specialists at Everleaf Medical Center."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          name: "Everleaf Medical Center",
          department: filteredDoctors.map((doc) => ({
            "@type": "Physician",
            name: doc.name,
            medicalSpecialty: doc.specialty,
            employee: {
              "@type": "Person",
              name: doc.name,
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
          <h1
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Find a Doctor
          </h1>
          <p
            className="max-w-2xl text-lg leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Browse our directory of distinguished medical professionals. Use the
            filters below to find the specialist best suited for your needs.
          </p>
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
          <div className="relative flex-grow max-w-xl">
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              type="text"
              placeholder="Search by doctor name or keyword..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm placeholder-slate-400"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
                color: "var(--color-text)",
              }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative min-w-[180px]">
              <select
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary text-slate-600 cursor-pointer appearance-none shadow-sm"
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
              >
                <option value="">All Departments</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Oncology">Oncology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Surgery">Surgery</option>
                <option value="Ophthalmology">Ophthalmology</option>
              </select>
              <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                expand_more
              </span>
            </div>

            <div className="flex gap-4 w-full">
              <div className="relative min-w-[160px]">
                <select
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary text-slate-600 cursor-pointer appearance-none shadow-sm"
                  value={specialtyFilter}
                  onChange={(e) => setSpecialtyFilter(e.target.value)}
                >
                  <option value="">All Specialties</option>
                  <option value="surgeon">Surgeon</option>
                  <option value="senior">Senior Consultant</option>
                  <option value="chief">Department Chief</option>
                  <option value="specialist">Specialist</option>
                </select>
                <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  expand_more
                </span>
              </div>

              <div className="relative min-w-[140px]">
                <select
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary text-slate-600 cursor-pointer appearance-none shadow-sm"
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value)}
                >
                  <option value="">All Genders</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
                <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {paginatedDoctors.map((doc) => (
            <div
              key={doc.id}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border flex flex-col h-full animate-fade-in"
              style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div
                className="relative h-80 overflow-hidden"
                style={{ backgroundColor: "var(--color-bg-alt)" }}
              >
                <ImageSkeleton
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />

                {/* Slide-up Overlay */}
                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 flex flex-col justify-center text-white text-center z-20">
                  <div className="overflow-y-auto scrollbar-hide pr-1">
                    <h4 className="font-bold text-lg mb-2 text-blue-300 font-serif">
                      About
                    </h4>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      {doc.bio}
                    </p>

                    <h4 className="font-bold text-sm mb-1 text-blue-300 uppercase tracking-wide">
                      Education
                    </h4>
                    <p className="text-xs text-slate-300 mb-6">
                      {doc.education}
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
                className="p-6 flex flex-col flex-grow text-center relative z-10"
                style={{ backgroundColor: "var(--color-surface)" }}
              >
                <h3
                  className="text-xl font-bold mb-1 font-serif"
                  style={{ color: "var(--color-text)" }}
                >
                  {doc.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-1">
                  {doc.specialty}
                </p>
                <p
                  className="text-xs mb-6 uppercase tracking-wider"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Department of {doc.dept}
                </p>

                <div
                  className="mt-auto pt-4 border-t w-full"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <button
                    onClick={() =>
                      openAppointment({
                        doctorName: doc.name,
                        department: doc.dept,
                      })
                    }
                    className="w-full py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10">Request Appointment</span>
                    <span className="material-icons text-xs relative z-10 transition-transform group-hover/btn:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
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
              No doctors found
            </h3>
            <p className="mt-2" style={{ color: "var(--color-text-muted)" }}>
              Try adjusting your search or filters to find what you're looking
              for.
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
              Clear Filters
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
