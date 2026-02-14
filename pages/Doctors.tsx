
import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { OpenAppointmentFunc } from '../Layout';
import ImageSkeleton from '../components/ImageSkeleton';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  dept: string;
  img: string;
  bio: string;
  education: string;
  gender: 'male' | 'female';
}

const doctors: Doctor[] = [
  { 
    id: 1, 
    name: 'Dr. Sarah Johnson', 
    specialty: 'Senior Neurologist', 
    dept: 'Neurology', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9BZuqUAA5IOvQMgXBQ8ryTLzC7vKg69xiTlytVe-76cUVW84Bp8VWOapyKoqbwUVVWBuN_FfxCcsqFq1ao_QGijkga86eRCQeYgiaWkGi7WtZIQPN8Q2vpj9P49F7WLoa7Y9f-Oj_nR-hQM4ZVF-Hxf-HLyzlW5kk3Rk-ANh7DNvIi720KTGderseW5cc8dF6H7Wx6PDoI9ce9GfwndlXLLz4CsQbzfWS0_34TQzB04eBNYZK-S8nSZOkgY3aUVNpbGCAWq_I9vs', 
    bio: 'Specializing in complex neurological disorders with over 15 years of experience treating cases involving the brain and spine.',
    education: 'MD from Johns Hopkins University, PhD in Neurology',
    gender: 'female'
  },
  { 
    id: 2, 
    name: 'Dr. Mark Williams', 
    specialty: 'Chief of Cardiology', 
    dept: 'Cardiology', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADGr580ge61fkfsxwBrM7N1TZyAY9Z-GTpjBUo_xK5lWfakoEU_qOziiT-so6DMVRYMjRbu0nVW-k1DcZ572-UwSxJBbHFxL921KxZ6v5xbrKCJfSDGPfGIKJ2lnbzJo8rsumPzZ1VnlvNztje35dbZ8OjoskrJoJWMwL2xyEuWVfFxTxZWLkj3322_nwECoDQOhnBsfJT-uJdBuBYvHW7tZFnkW3TihhkEKyTi4ionW16tPVhP7_Msgmo2tYXI-H3mW5DhYbZYTk', 
    bio: 'Dedicated cardiologist focusing on preventive heart care and minimally invasive surgical procedures.',
    education: 'MD from Harvard Medical School, Fellowship at Mayo Clinic',
    gender: 'male'
  },
  { 
    id: 3, 
    name: 'Dr. Emily Chen', 
    specialty: 'Senior Pediatrician', 
    dept: 'Pediatrics', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY7zDqNO2hoPrxpDGZpE92fSZkSGJgJi7hfuXKUusm09nz1u9rNHNBxuJ0N_t6HSXFbSkNan8ZuDt8AkK0PHqzsi4I6ipPzk2q3ALgTZVcC1uboMYQ6dZnjiBkO036p5ErpaA0vAjn6D8TivJDicjayQgEkLrG4PsZURfL7C-lOADFWh45AKVB0WfWyqvzWL5JcVEwzhhuOWO87RBPu2zcdEOcZJloL6qr9YD-oKjiSjrlq9KMwrQ9LL25SFVQnG3ZphZNrYFaNIs', 
    bio: 'Passionate pediatrician known for her gentle approach and expertise in early childhood development.',
    education: 'MD from Stanford University, Residency at Boston Children\'s',
    gender: 'female'
  },
  { 
    id: 4, 
    name: 'Dr. James Wilson', 
    specialty: 'Orthopedic Surgeon', 
    dept: 'Orthopedics', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4GZCfQ-iIl965UQeFPIclRsBYz4f1mtz0n4nboa175ydsFbd1jpMTGjUenfcTFWMvdli4vBDJyQNsR3OW_kuLwe1EZ8-UZeCj3G1FkDoeD3P9GI5z6tIlWuR0CCmusql7YHZEI1i1JBJnN0jyK6RwsULoeC_xMwN63r70keIFcqFZQQPoY8F2DeHET5EkvhF5dZT9CMG9YEzHZC3PuCPGtuLigbW117bWFsXpSY5V-LX2gv4Xi3mKUVAGBiRCrfYyRjNWvnN3eEI', 
    bio: 'Expert orthopedic surgeon specializing in sports injuries and joint replacement therapies.',
    education: 'MD from Yale School of Medicine',
    gender: 'male'
  },
  { 
    id: 5, 
    name: 'Dr. Anita Patel', 
    specialty: 'Consultant Oncologist', 
    dept: 'Oncology', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApKvfAtH953AhPeyJ50UOSHzlPQ8EEX7u1eM2NYzXd3bR9s3YqgUhWg3U9Fxk-NnaWlVuJ427eYVwOpMp8DFKhT8zWz3QOZ1F2pwHBHnRdmSTv8rLpiccNpH3ZdbNQOiwFfBUXntxoPGkpZFWMDB97O7hqh6MSsUkfctHT-9na25-E0fwxiRfTAzScl6CUVWp9aKOa72I2F1uKPEJ1_RmFzxV3Ld98yaVjBJHPKWx3UsX79ehswgvz_p2b5wqm-5lUnsuInUs0C3Q', 
    bio: 'Leading oncologist with a focus on personalized cancer treatment plans and immunotherapy.',
    education: 'MD from Columbia University, Oncology Board Certified',
    gender: 'female'
  },
  { 
    id: 6, 
    name: 'Dr. Robert Lang', 
    specialty: 'Senior Dermatologist', 
    dept: 'Dermatology', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLZa4BlPxSP0Up2tLXAybrE5xTrLlnaUwdOOdkdc9HIhbAY0wWjDN9rpfi7YDdVAKF00DXuLK6UYnSNscxf4Uf2OLWgCRFRsAQ6LtK31OfgT4-DlgYIc-lGkKJ2kj1EEjwcaPfkQPvfd1npBoP7whHHPg1sw6sY5lo7zsqm9TDJrSJvfIrxriBvQVA4Gka4oVPlYDr8s3eHcl9f5UN7LIYAj1RmbgdvB1uuiOkl0YVY9eSDIJ4oO2uv6xDOv46h8hBrhc63OM28B8', 
    bio: 'Dermatologist with extensive experience in both cosmetic and medical dermatology procedures.',
    education: 'MD from UCLA Medical Center',
    gender: 'male'
  },
  { 
    id: 7, 
    name: 'Dr. David Kim', 
    specialty: 'General Surgeon', 
    dept: 'Surgery', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVF7Vx5w8Ryb7hOWCqr7p6VYGmnbENuYJMI9koJjgakAo0tT6HwecQekM0p8cAJkfJtCEuEG5kxkOSqKsfwt1QpWfBnQ-romAZ_MC3EP_Mj7MrCf2bADuUqcuFshVJyzmuHqagWepcyR4bXdNh4HtLAnNonmtq_vTGPMaFnFCbmbPNjN1kyjMwmkWv4wEwOZKgRSy4q9Qu52UWPFQT1lw8kgEvd4lNZ9D0TXMPsjLDCX7l8dkflKYA6d8detnoMguojFlIoEi5XCg', 
    bio: 'Specialist in minimally invasive laparoscopic surgeries and abdominal procedures.',
    education: 'MD from Duke University School of Medicine',
    gender: 'male'
  },
  { 
    id: 8, 
    name: 'Dr. Lisa Wong', 
    specialty: 'Ophthalmologist', 
    dept: 'Ophthalmology', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6bhrrr0ZMVSYV0P5TqAweoZBjRflxtODiC0EhihtWXr27w5ittH1j1s8RikyFj00pBHaRDXU7Ao-A8a8UhSsh_FzMd5qgStPG9Xweslh2AdxW3dWg3pYuXAfxjP05dzbO8WgOTPyWVslotYafxf98HNdY0EdNxNPWwC7_cOKt2EIOnU_-jtevOf6TeL6UaONMToNe9edLxC5D6uAKY1F3xauI0fGJCDK_FLAoq7TKtP1R6cmH1f39mPae9FWxiUgZMSTiDg2BAfg', 
    bio: 'Expert in cataract surgery and laser vision correction with a patient-first approach.',
    education: 'MD from UCSF School of Medicine',
    gender: 'female'
  },
  { 
    id: 9, 
    name: 'Dr. Michael Stevens', 
    specialty: 'Trauma Surgeon', 
    dept: 'Surgery', 
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80', 
    bio: 'Experienced trauma surgeon dedicated to providing critical care in emergency situations.',
    education: 'MD from University of Chicago',
    gender: 'male'
  },
  { 
    id: 10, 
    name: 'Dr. Rachel Green', 
    specialty: 'Clinical Psychologist', 
    dept: 'Neurology', 
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80', 
    bio: 'Specializes in cognitive behavioral therapy and mental health support for chronic illness patients.',
    education: 'PhD in Psychology from NYU',
    gender: 'female'
  },
  { 
    id: 11, 
    name: 'Dr. Alan Grant', 
    specialty: 'Pediatric Surgeon', 
    dept: 'Pediatrics', 
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&q=80', 
    bio: 'Focused on surgical care for infants, children, and adolescents with congenital conditions.',
    education: 'MD from Baylor College of Medicine',
    gender: 'male'
  },
  { 
    id: 12, 
    name: 'Dr. Olivia Martinez', 
    specialty: 'Cardiologist', 
    dept: 'Cardiology', 
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80', 
    bio: 'Expert in women\'s heart health and non-invasive cardiovascular imaging.',
    education: 'MD from University of Pennsylvania',
    gender: 'female'
  },
  { 
    id: 13, 
    name: 'Dr. Marcus Johnson', 
    specialty: 'Radiologist', 
    dept: 'Radiology', 
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80', 
    bio: 'Specializing in diagnostic radiology with expertise in MRI and CT interpretation.',
    education: 'MD from University of Michigan',
    gender: 'male'
  },
  { 
    id: 14, 
    name: 'Dr. Sophia Lee', 
    specialty: 'Endocrinologist', 
    dept: 'Medicine', 
    img: 'https://images.unsplash.com/photo-1623854764803-33350f214313?w=500&q=80', 
    bio: 'Treating hormonal imbalances, diabetes, and thyroid disorders with a holistic approach.',
    education: 'MD from Northwestern University',
    gender: 'female'
  },
  { 
    id: 15, 
    name: 'Dr. William Chen', 
    specialty: 'Anesthesiologist', 
    dept: 'Surgery', 
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&q=80', 
    bio: 'Ensuring patient safety and pain management during complex surgical procedures.',
    education: 'MD from Washington University in St. Louis',
    gender: 'male'
  },
  { 
    id: 16, 
    name: 'Dr. Emma Thompson', 
    specialty: 'Rheumatologist', 
    dept: 'Orthopedics', 
    img: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&q=80', 
    bio: 'Diagnosing and treating arthritis and other diseases of the joints, muscles, and bones.',
    education: 'MD from Emory University',
    gender: 'female'
  }
];

const ITEMS_PER_PAGE = 8;

const Doctors: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { openAppointment } = useOutletContext<{ openAppointment: OpenAppointmentFunc }>();

  // Filter Logic
  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = deptFilter === '' || doc.dept === deptFilter;
    const matchesGender = genderFilter === '' || doc.gender === genderFilter;
    const matchesSpecialty = specialtyFilter === '' || doc.specialty.toLowerCase().includes(specialtyFilter);
    
    return matchesSearch && matchesDept && matchesGender && matchesSpecialty;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE);
  const paginatedDoctors = filteredDoctors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, deptFilter, specialtyFilter, genderFilter]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-12 md:py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Find a Doctor</h1>
          <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
            Browse our directory of distinguished medical professionals. Use the filters below to find the specialist best suited for your needs.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-[72px] z-40 bg-white shadow-md border-b border-slate-100 py-6 transition-all duration-300">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          <div className="relative flex-grow max-w-xl">
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              type="text" 
              placeholder="Search by doctor name or keyword..." 
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm text-slate-800 placeholder-slate-400"
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
              <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
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
              <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
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
              <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
            </div>
</div>

          </div>
        </div>
      </div>

      {/* Results Grid */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {paginatedDoctors.map((doc) => (
            <div key={doc.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full animate-fade-in">
              <div className="relative h-80 overflow-hidden bg-slate-100">
                <ImageSkeleton 
                  src={doc.img} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                  containerClassName="w-full h-full"
                />
                
                {/* Slide-up Overlay */}
                <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-6 flex flex-col justify-center text-white text-center z-20">
                  <div className="overflow-y-auto scrollbar-hide pr-1">
                    <h4 className="font-bold text-lg mb-2 text-blue-300 font-serif">About</h4>
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">{doc.bio}</p>
                    
                    <h4 className="font-bold text-sm mb-1 text-blue-300 uppercase tracking-wide">Education</h4>
                    <p className="text-xs text-slate-300 mb-6">{doc.education}</p>

                    <div className="pt-2 border-t border-slate-700 flex gap-4 justify-center">
                      <a href="#" className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-primary transition-colors text-white">
                        <span className="material-icons text-sm">email</span>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-primary transition-colors text-white">
                        <span className="material-icons text-sm">share</span>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-primary transition-colors text-white">
                        <span className="material-icons text-sm">link</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow text-center relative z-10 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-1 font-serif">{doc.name}</h3>
                <p className="text-primary font-medium text-sm mb-1">{doc.specialty}</p>
                <p className="text-slate-500 text-xs mb-6 uppercase tracking-wider">Department of {doc.dept}</p>
                
                <div className="mt-auto pt-4 border-t border-slate-100 w-full">
                  <button 
                    onClick={() => openAppointment({ doctorName: doc.name, department: doc.dept })}
                    className="w-full py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10">Request Appointment</span>
                    <span className="material-icons text-xs relative z-10 transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {paginatedDoctors.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <span className="material-icons text-6xl text-slate-200 mb-4">search_off</span>
            <h3 className="text-xl font-bold text-slate-900">No doctors found</h3>
            <p className="text-slate-500 mt-2">Try adjusting your search or filters to find what you're looking for.</p>
            <button 
              onClick={() => { setSearchTerm(''); setDeptFilter(''); setSpecialtyFilter(''); setGenderFilter(''); }}
              className="mt-6 px-6 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors font-medium text-sm"
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
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${
                    currentPage === page 
                      ? 'bg-primary text-white shadow-md' 
                      : 'border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary'
                  }`}
                >
                  {page}
                </button>
              ))}

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
