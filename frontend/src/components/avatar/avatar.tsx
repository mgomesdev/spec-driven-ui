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

   const containerStyle = {
      "--avatar-size": `${size}px`
   } as React.CSSProperties;

   return (
      <div
         className="relative overflow-hidden rounded-[var(--radius-full)] w-[var(--avatar-size)] h-[var(--avatar-size)]"
         style={containerStyle}
         role="img"
         aria-label={alt}
      >
         {imgError ? (
            <div
               className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700"
            >
               <User size={size * 0.5} />
            </div>
         ) : (
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                onError={() => setImgError(true)}
            />
         )}
      </div>
   );
};
