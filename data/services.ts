export interface Service {
  icon: string;
  title: string;
  desc: string;
  link: string;
  color: string;
}

export const services: Service[] = [
  {
    icon: "medical_services",
    title: "Diagnostic Services",
    desc: "Accurate and timely diagnosis is the first step to effective treatment. Our facility is equipped with the latest diagnostic tools.",
    link: "/services/diagnostics",
    color: "blue",
  },
  {
    icon: "biotech",
    title: "Laboratory",
    desc: "Our full-service clinical laboratory operates 24/7, providing comprehensive testing in hematology, chemistry, microbiology, and more.",
    link: "/services/laboratory",
    color: "teal",
  },
  {
    icon: "camera_roll",
    title: "Imaging",
    desc: "We offer high-resolution medical imaging services including MRI, CT scans, ultrasound, and digital X-rays to support precise diagnoses.",
    link: "/services/imaging",
    color: "indigo",
  },
  {
    icon: "local_pharmacy",
    title: "Pharmacy",
    desc: "Our in-house pharmacy ensures patients have immediate access to necessary medications, offering prescription counseling.",
    link: "/services/pharmacy",
    color: "green",
  },
  {
    icon: "emergency",
    title: "Emergency Care",
    desc: "Open 24/7, our emergency department is staffed by trauma specialists ready to handle critical situations with speed and expertise.",
    link: "/services/emergency",
    color: "red",
  },
  {
    icon: "health_and_safety",
    title: "Preventive Checkups",
    desc: "Stay ahead of potential health issues with our comprehensive health screening packages, tailored for all ages and lifestyles.",
    link: "/services/preventive-checkups",
    color: "purple",
  },
];
