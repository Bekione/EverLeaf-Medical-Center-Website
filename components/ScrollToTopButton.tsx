import React, { useState, useEffect } from "react";
import Button from "./Button";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      type="button"
      onClick={scrollToTop}
      rounded="full"
      animate={false} 
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-9999 w-12 h-12 p-0 flex items-center justify-center shadow-lg transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      icon="arrow_upward"
    ></Button>
  );
};

export default ScrollToTopButton;
