"use client";

import { useState } from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { optimizeImage } from "@/lib/image-utils";

// Parent element-e "relative" ar height thakte hobe (Image fill use kore).
// width = Cloudinary theke koto px-er image anbe (retina-r jonno display size-er ~2x dao).
// Image na thakle ba load fail korle icon placeholder dekhay.
export default function CourseThumb({ src, alt, sizes, width = 800, iconSize = 24 }) {
  const [failedSrc, setFailedSrc] = useState(null);

  if (!src || failedSrc === src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-(--stat-icon-bg)">
        <BookOpen
          size={iconSize}
          className="text-(--stat-icon-color)"
          strokeWidth={1.75}
        />
      </div>
    );
  }

  return (
    <Image
      src={optimizeImage(src, { width })}
      alt={alt}
      fill
      sizes={sizes}
      unoptimized // Cloudinary nijei optimize kore, Next-er optimizer lage na
      onError={() => setFailedSrc(src)}
      className="object-cover"
    />
  );
}
