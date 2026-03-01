import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children?: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "white"
    | "ghost"
    | "glass"
    | "action"
    | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  to?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none";
  animate?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  to,
  href,
  type = "button",
  icon,
  rounded = "xl",
  animate = true,
  disabled = false,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-300 select-none cursor-pointer shadow-sm disabled:cursor-not-allowed";

  const rounding = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  };

  const animation = animate
    ? "hover:-translate-y-1 active:scale-95 hover:shadow-lg"
    : "";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-primary/20 hover:shadow-primary/30",
    secondary:
      "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300",
    outline:
      "border-2 border-primary text-primary hover:bg-primary/5 shadow-none",
    white:
      "bg-white text-primary hover:bg-white/95 shadow-black/10 hover:shadow-black/20",
    ghost: "text-primary hover:bg-primary/10 shadow-none hover:shadow-none",
    glass:
      "bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20",
    link: "bg-transparent text-white font-semibold hover:text-primary transition-colors border-b-2 border-primary pb-0.5 rounded-none shadow-none hover:shadow-none p-0 h-auto hover:-translate-y-0 active:scale-100",
    action:
      "bg-primary/5 text-primary hover:bg-primary/10 shadow-none hover:shadow-none transition-colors rounded-lg h-auto hover:-translate-y-0.5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClasses = `${baseStyles} ${rounding[rounded]} ${variants[variant]} ${sizes[size]} ${animation} ${className}`;

  // Only add right margin on the icon when there are children beside it
  const hasChildren =
    children !== undefined && children !== null && children !== "";
  const content = (
    <>
      {icon && (
        <span
          className={`material-icons text-[1.2em]${hasChildren ? " mr-2" : ""}`}
        >
          {icon}
        </span>
      )}
      {children}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={combinedClasses}
        style={style}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        style={style}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={combinedClasses}
      style={style}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
