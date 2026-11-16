import {Leaf} from 'lucide-react';
import {useState} from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackLabel = 'LoopWise AI Circular Economy',
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1F5C3A]/15 via-[#A8D5BA]/25 to-[#EFECE3] text-[#1F5C3A] p-6 text-center ${className}`}
      >
        <Leaf className="w-8 h-8 mb-2 opacity-75" aria-hidden="true" />
        <span className="text-xs font-medium text-[#14241B]/75 max-w-xs">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
