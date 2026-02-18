export interface Testimonial {
  name: string;
  role: string;
  text: string;
  img: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "James Anderson",
    role: "Recovered Patient",
    text: "The care and attention I received at Everleaf was outstanding. The doctors were patient in explaining my condition and the treatment plan.",
    img: "/images/testimonials/testimonial-user-1.jpg",
  },
  {
    name: "Sarah Lewis",
    role: "Surgery Patient",
    text: "The facilities are top-notch and spotlessly clean. I felt safe and comfortable throughout my entire stay. Highly recommended!",
    img: "/images/testimonials/testimonial-user-2.jpg",
  },
  {
    name: "Michael Chen",
    role: "Regular Checkup",
    text: "From the front desk staff to the specialists, everyone was incredibly professional and kind. Thank you for your amazing service.",
    img: "/images/testimonials/testimonial-user-3.jpg",
  },
  {
    name: "Emily Davis",
    role: "Maternity Care",
    text: "Giving birth at Everleaf was a beautiful experience. The nurses were supportive and the neonatal care team is world-class.",
    img: "/images/testimonials/testimonial-user-4.jpg",
  },
  {
    name: "Robert Wilson",
    role: "Cardiac Patient",
    text: "Dr. Williams saved my life. The cardiac unit's speed and efficiency during my emergency were miraculous. Forever grateful.",
    img: "/images/testimonials/testimonial-user-5.jpg",
  },
  {
    name: "Jennifer Lopez",
    role: "Pediatrics Parent",
    text: "My kids actually enjoy going to the doctor now. Dr. Chen is fantastic with children and makes the whole process scary-free.",
    img: "/images/testimonials/testimonial-user-6.jpg",
  },
];
