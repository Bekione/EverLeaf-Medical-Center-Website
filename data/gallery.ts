export interface GalleryImage {
  src: string;
  title: string;
  category: "Facilities" | "Equipment" | "Rooms" | "Staff";
  desc: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/gallery-1-atrium.jpg",
    title: "Main Atrium & Reception",
    category: "Facilities",
    desc: "Our spacious and welcoming main lobby designed for patient comfort.",
  },
  {
    src: "/images/gallery/gallery-2-laboratory.jpg",
    title: "Diagnostic Laboratory",
    category: "Equipment",
    desc: "State-of-the-art laboratory equipped with advanced diagnostic machinery.",
  },
  {
    src: "/images/gallery/gallery-10-recovery-suite.jpg",
    title: "Private Recovery Suite",
    category: "Rooms",
    desc: "Private rooms designed to provide a restful and healing environment.",
  },
  {
    src: "/images/gallery/gallery-11-consultation.jpg",
    title: "Expert Consultation Team",
    category: "Staff",
    desc: "Our multidisciplinary team collaborating on complex patient cases.",
  },
  {
    src: "/images/gallery/gallery-9-operation.jpg",
    title: "Modern Operating Theatre",
    category: "Equipment",
    desc: "Advanced surgical suites featuring the latest medical technology.",
  },
  {
    src: "/images/gallery/gallery-12-waiting-area.jpg",
    title: "Comfortable Waiting Areas",
    category: "Facilities",
    desc: "Quiet and comfortable waiting zones for families and visitors.",
  },
  {
    src: "/images/gallery/gallery-13-mri.jpg",
    title: "MRI Scanning Suite",
    category: "Equipment",
    desc: "High-field MRI scanner providing exceptional image quality for accurate diagnosis.",
  },
  {
    src: "/images/gallery/gallery-8-rehabilitation.jpg",
    title: "Rehabilitation Center",
    category: "Facilities",
    desc: "Fully equipped physiotherapy gym for patient rehabilitation and recovery.",
  },
  {
    src: "/images/gallery/gallery-7-pharmacy.jpg",
    title: "Pharmacy Services",
    category: "Facilities",
    desc: "On-site pharmacy stocked with a wide range of medications and health supplies.",
  },
  {
    src: "/images/gallery/gallery-6-pediatric.jpg",
    title: "Pediatric Ward",
    category: "Rooms",
    desc: "Colorful and safe environment tailored for our youngest patients.",
  },
  {
    src: "/images/gallery/gallery-4-emergency-dept.jpg",
    title: "Emergency Department",
    category: "Facilities",
    desc: "24/7 emergency entrance equipped for rapid response and trauma care.",
  },
  {
    src: "/images/gallery/gallery-3-neonatal.jpg",
    title: "Neonatal ICU",
    category: "Rooms",
    desc: "Specialized intensive care units for newborns requiring critical attention.",
  },
];
