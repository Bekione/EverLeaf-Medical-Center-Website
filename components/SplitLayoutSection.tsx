import React from "react";

interface SplitLayoutSectionProps {
  id?: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  leftSpan?: number; // 1 | 2 | 3
  rightSpan?: number; // 1 | 2 | 3
  gap?: number;
  className?: string;
}

const SplitLayoutSection: React.FC<SplitLayoutSectionProps> = ({
  id,
  leftContent,
  rightContent,
  leftSpan = 2,
  rightSpan = 1,
  gap = 8,
  className = "mb-20",
}) => {
  // Map spans to Tailwind grid-cols
  const totalCols = leftSpan + rightSpan;

  // We'll use a standard 3-column grid for 2:1 and a 2-column grid for 1:1 etc.
  // But let's simplify for now to handle the 70/30 case (2:1 in grid-cols-3)

  return (
    <div
      id={id}
      className={`grid grid-cols-1 ${totalCols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-${gap} ${className}`}
    >
      <div className={leftSpan === 2 && totalCols === 3 ? "lg:col-span-2" : ""}>
        {leftContent}
      </div>
      <div
        className={rightSpan === 2 && totalCols === 3 ? "lg:col-span-2" : ""}
      >
        {rightContent}
      </div>
    </div>
  );
};

export default SplitLayoutSection;
