import Image from "next/image";
import { useState } from "react";

export default function SEOImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
  placeholder = "blur",
  blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Si fill est true, on ne passe pas width et height
  const imageProps = fill
    ? { fill: true, sizes: "100vw" }
    : { width, height, sizes };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        {...imageProps}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

// Composant pour les images de fond optimisées
export function SEOBackgroundImage({
  src,
  alt,
  className = "",
  children,
  overlay = false,
  overlayOpacity = "bg-black/30",
  ...props
}) {
  return (
    <div className={`relative ${className}`} {...props}>
      <SEOImage
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        priority={true}
      />
      {overlay && <div className={`absolute inset-0 ${overlayOpacity}`}></div>}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

// Composant pour les images de service avec données structurées
export function ServiceImage({
  src,
  alt,
  title,
  description,
  width = 400,
  height = 300,
  className = "",
  ...props
}) {
  return (
    <figure className={`group ${className}`}>
      <SEOImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
        {...props}
      />
      <figcaption className="mt-2 text-sm text-gray-600">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {description && <p className="text-gray-600 mt-1">{description}</p>}
      </figcaption>
    </figure>
  );
}
