import { useState, ImgHTMLAttributes } from "react";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  localPath: string;
  fallbackUrl: string;
  alt: string;
  className?: string;
}

export default function SmartImage({
  localPath,
  fallbackUrl,
  alt,
  className = "",
  ...props
}: SmartImageProps) {
  // Try localPath first. Note that Vite resolves public folder references via '/filename.jpg'
  const [currentSrc, setCurrentSrc] = useState<string>(localPath);
  const [hasFailed, setHasFailed] = useState<boolean>(false);

  const handleError = () => {
    if (!hasFailed) {
      // Fallback to high-resolution Unsplash image
      setCurrentSrc(fallbackUrl);
      setHasFailed(true);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      referrerPolicy="no-referrer"
      className={`${className}`}
      {...props}
    />
  );
}
