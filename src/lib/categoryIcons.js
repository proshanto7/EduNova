import {
  Laptop,
  TrendingUp,
  Palette,
  Megaphone,
  Headphones,
  Layers,
} from "lucide-react";

// Category-er icon backend theke (Cloudinary upload) asha uchit.
// Kono category-r icon na thakle (ba API down thakle fallback data-r jonno)
// slug diye ekta lucide icon dekhano hoy, na mile default Layers icon.
const ICON_BY_SLUG = {
  development: Laptop,
  business: TrendingUp,
  design: Palette,
  marketing: Megaphone,
  "personal-development": Headphones,
};

export const getCategoryIcon = (slug) => ICON_BY_SLUG[slug] || Layers;

// Category card-e color na thakle cycle kore deoyar jonno default palette
export const DEFAULT_CATEGORY_COLORS = [
  "#7c6fe8",
  "#22a06b",
  "#e8823a",
  "#3b82c4",
  "#e0538a",
];
