"use client";

import { useState } from "react";
import { User } from "lucide-react";
import { optimizeImage } from "@/lib/image-utils";

export default function UserAvatar({ src, size = 56, iconSize = 24 }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const showImage = Boolean(src) && failedSrc !== src;

  return (
    <div
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-(--stat-icon-bg)"
      style={{ width: size, height: size }}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={optimizeImage(src, { width: size * 2, height: size * 2, face: true })}
          alt="Profile photo"
          onError={() => setFailedSrc(src)}
          className="h-full w-full object-cover"
        />
      ) : (
        <User
          size={iconSize}
          className="text-(--stat-icon-color)"
          strokeWidth={1.75}
        />
      )}
    </div>
  );
}
