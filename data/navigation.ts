// Navigation & Footer link definitions

export interface NavLink {
  to: string;
  /** i18n key, e.g. "nav.home" */
  labelKey: string;
}

export interface DropdownNavGroup {
  labelKey: string;
  basePath: string;
  items: NavLink[];
}

// Top-level links
export const topLevelLinks: NavLink[] = [
  { to: "/", labelKey: "nav.home" },
  { to: "/about", labelKey: "nav.about" },
];

// Trailing top-level links (after dropdowns)
export const trailingLinks: NavLink[] = [
  { to: "/doctors", labelKey: "nav.doctors" },
  { to: "/blog", labelKey: "nav.blog" },
  { to: "/gallery", labelKey: "nav.gallery" },
  { to: "/contact", labelKey: "nav.contact" },
];

// Dropdown groups
export const servicesDropdown: DropdownNavGroup = {
  labelKey: "nav.services",
  basePath: "/services",
  items: [
    {
      to: "/services/diagnostics",
      labelKey: "data.services.diagnostics.title",
    },
    { to: "/services/laboratory", labelKey: "data.services.laboratory.title" },
    { to: "/services/imaging", labelKey: "data.services.imaging.title" },
    { to: "/services/pharmacy", labelKey: "data.services.pharmacy.title" },
    { to: "/services/emergency", labelKey: "data.services.emergency.title" },
    {
      to: "/services/preventive-checkups",
      labelKey: "data.services.preventive.title",
    },
  ],
};

export const departmentsDropdown: DropdownNavGroup = {
  labelKey: "nav.departments",
  basePath: "/departments",
  items: [
    {
      to: "/departments/cardiology",
      labelKey: "data.departments.cardiology.name",
    },
    {
      to: "/departments/neurology",
      labelKey: "data.departments.neurology.name",
    },
    {
      to: "/departments/pediatrics",
      labelKey: "data.departments.pediatrics.name",
    },
    { to: "/departments/surgery", labelKey: "data.departments.surgery.name" },
    { to: "/departments/dental", labelKey: "data.departments.dental.name" },
    {
      to: "/departments/ophthalmology",
      labelKey: "data.departments.ophthalmology.name",
    },
    {
      to: "/departments/laboratory",
      labelKey: "data.departments.laboratory.name",
    },
    {
      to: "/departments/radiology",
      labelKey: "data.departments.radiology.name",
    },
    {
      to: "/departments/rehabilitation",
      labelKey: "data.departments.rehabilitation.name",
    },
  ],
};

// Mobile submenus include an "all" root link at the top
export const mobileServicesItems: NavLink[] = [
  { to: "/services", labelKey: "data.services.all" },
  ...servicesDropdown.items,
];

export const mobileDepartmentsItems: NavLink[] = [
  { to: "/departments", labelKey: "data.departments.all.name" },
  ...departmentsDropdown.items,
];

// Footer quick-links column
export const footerLinks: NavLink[] = [
  { to: "/about", labelKey: "nav.about" },
  { to: "/doctors", labelKey: "nav.doctors" },
  { to: "/services", labelKey: "nav.services" },
  { to: "/departments", labelKey: "nav.departments" },
  { to: "/contact", labelKey: "nav.contact" },
];
