
import React, { useState } from 'react';

interface ImageSkeletonProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({ className, containerClassName, src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName || ''} ${className}`}>
      {/* Skeleton Pulse */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse z-10 flex items-center justify-center">
          <span className="material-icons text-slate-300 text-4xl">image</span>
        </div>
      )}
      
      {/* Actual Image */}
      <img 
        src={src} 
        alt={alt} 
        className={`${className} transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
};

export default ImageSkeleton;
