export interface Service {
  id: string;
  icon: string;
  link: string;
  color: string;
}

export const services: Service[] = [
  {
    id: "diagnostics",
    icon: "medical_services",
    link: "/services/diagnostics",
    color: "blue",
  },
  {
    id: "laboratory",
    icon: "biotech",
    link: "/services/laboratory",
    color: "teal",
  },
  {
    id: "imaging",
    icon: "camera_roll",
    link: "/services/imaging",
    color: "indigo",
  },
  {
    id: "pharmacy",
    icon: "local_pharmacy",
    link: "/services/pharmacy",
    color: "green",
  },
  {
    id: "emergency",
    icon: "emergency",
    link: "/services/emergency",
    color: "red",
  },
  {
    id: "preventive",
    icon: "health_and_safety",
    link: "/services/preventive-checkups",
    color: "purple",
  },
];
