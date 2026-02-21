export interface GalleryImage {
  id: string;
  src: string;
  category: "facilities" | "equipment" | "rooms" | "staff";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "atrium",
    src: "/images/gallery/gallery-1-atrium.jpg",
    category: "facilities",
  },
  {
    id: "laboratory",
    src: "/images/gallery/gallery-2-laboratory.jpg",
    category: "equipment",
  },
  {
    id: "recovery-suite",
    src: "/images/gallery/gallery-10-recovery-suite.jpg",
    category: "rooms",
  },
  {
    id: "consultation",
    src: "/images/gallery/gallery-11-consultation.jpg",
    category: "staff",
  },
  {
    id: "operation",
    src: "/images/gallery/gallery-9-operation.jpg",
    category: "equipment",
  },
  {
    id: "waiting-area",
    src: "/images/gallery/gallery-12-waiting-area.jpg",
    category: "facilities",
  },
  {
    id: "mri",
    src: "/images/gallery/gallery-13-mri.jpg",
    category: "equipment",
  },
  {
    id: "rehabilitation",
    src: "/images/gallery/gallery-8-rehabilitation.jpg",
    category: "facilities",
  },
  {
    id: "pharmacy",
    src: "/images/gallery/gallery-7-pharmacy.jpg",
    category: "facilities",
  },
  {
    id: "pediatric",
    src: "/images/gallery/gallery-6-pediatric.jpg",
    category: "rooms",
  },
  {
    id: "emergency-dept",
    src: "/images/gallery/gallery-4-emergency-dept.jpg",
    category: "facilities",
  },
  {
    id: "neonatal-icu",
    src: "/images/gallery/gallery-3-neonatal.jpg",
    category: "rooms",
  },
];
