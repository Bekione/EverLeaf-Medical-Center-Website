export interface Department {
  id: string;
  name: string;
  icon: string;
  color: string;
  desc: string;
}

export const  departments: Department[] = [
  {
    id: "cardiology",
    name: "Cardiology",
    icon: "monitor_heart",
    color: "red",
    desc: "Comprehensive care for heart and vascular conditions including diagnostic testing and surgery.",
  },
  {
    id: "neurology",
    name: "Neurology",
    icon: "psychology",
    color: "indigo",
    desc: "Expert diagnosis and treatment for disorders of the brain, spinal cord, and nerves.",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: "child_care",
    color: "yellow",
    desc: "Dedicated care for infants, children, and adolescents in a friendly environment.",
  },
  {
    id: "surgery",
    name: "Surgery",
    icon: "medical_services",
    color: "blue",
    desc: "Advanced surgical procedures using minimally invasive techniques for faster recovery.",
  },
  {
    id: "dental",
    name: "Dental Clinic",
    icon: "dentistry",
    color: "cyan",
    desc: "Complete oral health care from routine cleanings to complex dental surgeries.",
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    icon: "visibility",
    color: "purple",
    desc: "State-of-the-art eye care services including vision testing and cataract surgery.",
  },
  {
    id: "laboratory",
    name: "Laboratory",
    icon: "biotech",
    color: "teal",
    desc: "Precise diagnostic testing services ensuring accurate results for better treatment plans.",
  },
  {
    id: "radiology",
    name: "Radiology",
    icon: "camera_roll",
    color: "slate",
    desc: "Advanced imaging services including MRI, CT scans, X-rays, and ultrasound.",
  },
  {
    id: "rehabilitation",
    name: "Rehabilitation",
    icon: "accessibility_new",
    color: "orange",
    desc: "Helping patients regain independence after injury or surgery through physical therapy.",
  },
];
