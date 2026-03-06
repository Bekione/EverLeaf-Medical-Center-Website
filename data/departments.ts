export interface Department {
  id: string;
  icon: string;
  color: string;
}

export const departments: Department[] = [
  {
    id: "cardiology",
    icon: "monitor_heart",
    color: "red",
  },
  {
    id: "neurology",
    icon: "psychology",
    color: "indigo",
  },
  {
    id: "pediatrics",
    icon: "child_care",
    color: "yellow",
  },
  {
    id: "surgery",
    icon: "medical_services",
    color: "blue",
  },
  {
    id: "dental",
    icon: "medical_services",
    color: "cyan",
  },
  {
    id: "ophthalmology",
    icon: "visibility",
    color: "purple",
  },
  {
    id: "laboratory",
    icon: "biotech",
    color: "teal",
  },
  {
    id: "radiology",
    icon: "camera_roll",
    color: "slate",
  },
  {
    id: "rehabilitation",
    icon: "accessibility_new",
    color: "orange",
  },
];
