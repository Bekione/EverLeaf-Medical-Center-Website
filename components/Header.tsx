
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EverleafLogo } from './Logo';

interface HeaderProps {
  onBookAppointment: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookAppointment }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-primary' : 'text-slate-600 hover:text-primary';

  const toggleMobileSubmenu = (menu: string) => {
    setExpandedMobileMenu(expandedMobileMenu === menu ? null : menu);
  };

  const getMobileLinkClass = (path: string) => 
    `block py-2 font-medium transition-colors ${
      location.pathname === path 
        ? 'text-primary font-bold' 
        : 'text-slate-600'
    }`;

  const getMobileSubLinkClass = (path: string) => 
    `block text-sm transition-colors py-1 ${
      location.pathname === path 
        ? 'text-primary font-semibold' 
        : 'text-slate-600 hover:text-primary'
    }`;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><span className="material-icons text-base text-primary">phone</span> Emergency: 911</span>
            <span className="flex items-center gap-2 opacity-80"><span className="material-icons text-base">schedule</span> Mon - Sun: 24 Hours</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/gallery" className="opacity-80 hover:opacity-100 transition-opacity">Gallery</Link>
            <span className="opacity-30">|</span>
            <Link to="/blog" className="opacity-80 hover:opacity-100 transition-opacity">News & Media</Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <EverleafLogo className="w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-105 transition-transform duration-300" />
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-brand font-semibold text-slate-900 leading-none tracking-tight">Everleaf</span>
                <span className="text-[10px] lg:text-xs font-brand text-slate-500 tracking-[0.2em] uppercase mt-0.5">Medical Center</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              <Link className={`${isActive('/')} text-sm xl:text-base font-medium transition-colors`} to="/">Home</Link>
              <Link className={`${isActive('/about')} text-sm xl:text-base font-medium transition-colors`} to="/about">About</Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <Link to="/services" className={`flex items-center gap-1 cursor-pointer text-sm xl:text-base font-medium transition-colors ${location.pathname.includes('services') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
                  Services <span className="material-icons text-sm">expand_more</span>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-[9999] py-2">
                  <Link to="/services/diagnostics" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Diagnostic Services</Link>
                  <Link to="/services/laboratory" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Laboratory</Link>
                  <Link to="/services/imaging" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Imaging</Link>
                  <Link to="/services/pharmacy" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Pharmacy</Link>
                  <Link to="/services/emergency" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Emergency Care</Link>
                  <Link to="/services/preventive-checkups" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Preventive Checkups</Link>
                </div>
              </div>

              {/* Departments Dropdown */}
              <div className="relative group">
                <Link to="/departments" className={`flex items-center gap-1 cursor-pointer text-sm xl:text-base font-medium transition-colors ${location.pathname.includes('departments') ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}>
                  Departments <span className="material-icons text-sm">expand_more</span>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-[9999] py-2">
                  <Link to="/departments/cardiology" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Cardiology</Link>
                  <Link to="/departments/neurology" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Neurology</Link>
                  <Link to="/departments/pediatrics" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Pediatrics</Link>
                  <Link to="/departments/surgery" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Surgery</Link>
                  <Link to="/departments/dental" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Dental Clinic</Link>
                  <Link to="/departments/ophthalmology" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Ophthalmology</Link>
                  <Link to="/departments/laboratory" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Laboratory</Link>
                  <Link to="/departments/radiology" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Radiology</Link>
                  <Link to="/departments/rehabilitation" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Rehabilitation</Link>
                </div>
              </div>
              <Link className={`${isActive('/doctors')} text-sm xl:text-base font-medium transition-colors`} to="/doctors">Doctors</Link>
              <Link className={`${isActive('/blog')} text-sm xl:text-base font-medium transition-colors`} to="/blog">Articles</Link>
              <Link className={`${isActive('/gallery')} text-sm xl:text-base font-medium transition-colors`} to="/gallery">Gallery</Link>
              <Link className={`${isActive('/contact')} text-sm xl:text-base font-medium transition-colors`} to="/contact">Contact</Link>
            </div>

            <div className="hidden lg:block">
              <button onClick={onBookAppointment} className="inline-flex items-center justify-center px-4 py-2 xl:px-6 xl:py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-lg hover:bg-primary-dark shadow-lg hover:-translate-y-0.5">
                <span className="hidden xl:inline">Book Appointment</span>
                <span className="xl:hidden">Book</span>
                <span className="material-icons text-sm ml-2">arrow_forward</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-primary p-2">
                <span className="material-icons text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-6 shadow-lg animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <Link onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/')} to="/">Home</Link>
              <Link onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/about')} to="/about">About</Link>
              
              {/* Expandable Services Menu */}
              <div className="border-b border-slate-100 py-2">
                <div 
                  className={`flex justify-between items-center font-medium cursor-pointer ${location.pathname.includes('/services') ? 'text-primary' : 'text-slate-700'}`}
                  onClick={() => toggleMobileSubmenu('services')}
                >
                  <span>Services</span>
                  <span className={`material-icons text-sm transition-transform duration-300 ${expandedMobileMenu === 'services' ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === 'services' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 border-l-2 border-slate-100 space-y-2 mb-2">
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/services')} to="/services">All Services</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/services/diagnostics')} to="/services/diagnostics">Diagnostics</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/services/laboratory')} to="/services/laboratory">Laboratory</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/services/imaging')} to="/services/imaging">Imaging</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/services/pharmacy')} to="/services/pharmacy">Pharmacy</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/services/emergency')} to="/services/emergency">Emergency</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/services/preventive-checkups')} to="/services/preventive-checkups">Checkups</Link>
                  </div>
                </div>
              </div>

              {/* Expandable Departments Menu */}
              <div className="border-b border-slate-100 py-2">
                <div 
                  className={`flex justify-between items-center font-medium cursor-pointer ${location.pathname.includes('/departments') ? 'text-primary' : 'text-slate-700'}`}
                  onClick={() => toggleMobileSubmenu('departments')}
                >
                  <span>Departments</span>
                  <span className={`material-icons text-sm transition-transform duration-300 ${expandedMobileMenu === 'departments' ? 'rotate-180' : ''}`}>expand_more</span>
                </div>
                
                <div className={`overflow-hidden transition-all duration-300 ${expandedMobileMenu === 'departments' ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 border-l-2 border-slate-100 space-y-2 mb-2">
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/departments')} to="/departments">All Departments</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/departments/cardiology')} to="/departments/cardiology">Cardiology</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/departments/neurology')} to="/departments/neurology">Neurology</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/departments/pediatrics')} to="/departments/pediatrics">Pediatrics</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/departments/surgery')} to="/departments/surgery">Surgery</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/departments/dental')} to="/departments/dental">Dental</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/departments/ophthalmology')} to="/departments/ophthalmology">Ophthalmology</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/services/laboratory')} to="/services/laboratory">Laboratory</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/departments/radiology')} to="/departments/radiology">Radiology</Link>
                    <Link onClick={() => setIsMenuOpen(false)} className={getMobileSubLinkClass('/departments/rehabilitation')} to="/departments/rehabilitation">Rehabilitation</Link>
                  </div>
                </div>
              </div>

              <Link onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/doctors')} to="/doctors">Doctors</Link>
              <Link onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/blog')} to="/blog">Articles</Link>
              <Link onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/gallery')} to="/gallery">Gallery</Link>
              <Link onClick={() => setIsMenuOpen(false)} className={getMobileLinkClass('/contact')} to="/contact">Contact</Link>
              <button onClick={() => {onBookAppointment(); setIsMenuOpen(false);}} className="w-full text-center py-3 mt-4 text-white bg-primary rounded-lg font-bold">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
