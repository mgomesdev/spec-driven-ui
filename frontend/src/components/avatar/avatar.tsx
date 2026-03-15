import Image from 'next/image';
import { User } from 'lucide-react';
import { useState } from 'react';

export interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export const Avatar = ({ src, alt, size = 92 }: AvatarProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-(--color-bg-secondary) rounded-full w-[${size}px] h-[${size}px]`}
      >
        <User size={size * 0.5} className="text-(--color-text-muted)" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative rounded-full overflow-hidden w-[${size}px] h-[${size}px]`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
};
