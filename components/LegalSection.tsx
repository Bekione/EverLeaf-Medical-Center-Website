import React from "react";

interface LegalSectionProps {
  id?: string;
  icon?: string;
  iconBgColor?: string;
  iconTextColor?: string;
  title: string;
  children: React.ReactNode;
  showDivider?: boolean;
}

const LegalSection: React.FC<LegalSectionProps> = ({
  id,
  icon,
  iconBgColor = "bg-slate-100",
  iconTextColor = "text-slate-700",
  title,
  children,
  showDivider = false,
}) => {
  return (
    <>
      {showDivider && <hr className="border-slate-100 mb-12" />}
      <div id={id} className={`mb-12 ${id ? "scroll-mt-32" : ""}`}>
        <div className="flex items-center gap-3 mb-6">
          {icon && (
            <div className={`p-2 ${iconBgColor} ${iconTextColor} rounded-lg`}>
              <span className="material-icons">{icon}</span>
            </div>
          )}
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        </div>
        {children}
      </div>
    </>
  );
};

export default LegalSection;
