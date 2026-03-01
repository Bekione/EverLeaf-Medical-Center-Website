import React from "react";

interface TOCItem {
  id: string;
  label: string;
}

interface TOCSidebarProps {
  title: string;
  items: TOCItem[];
  className?: string;
  headerOffset?: number;
}

const TOCSidebar: React.FC<TOCSidebarProps> = ({
  title,
  items,
  className = "",
  headerOffset = 120,
}) => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`sticky top-32 bg-white rounded-xl shadow-sm border border-slate-100 p-6 ${className}`}
    >
      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
        <span className="material-icons text-primary text-xl">toc</span> {title}
      </h3>
      <nav className="space-y-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => scrollToSection(e, item.id)}
            className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary rounded-md transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TOCSidebar;
