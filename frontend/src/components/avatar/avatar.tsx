"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

export interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export const Avatar = ({ src, alt, size = 92 }: AvatarProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-full"
      style={{
        width: size,
        height: size,
        borderRadius: "var(--radius-full)",
      }}
      role="img"
      aria-label={alt}
    >
      {imgError ? (
        <div
          className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700"
          style={{ width: size, height: size }}
        >
          <User size={size * 0.5} />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
};
