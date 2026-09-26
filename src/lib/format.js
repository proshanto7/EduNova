// 75 seconds -> "1:15"   (lesson-er duration)
export const formatDuration = (seconds) => {
  const total = Math.max(0, Math.round(Number(seconds) || 0));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
};

// 45 -> "45s", 3900 -> "1h 5m"   (pura course-er total duration)
export const formatTotalDuration = (seconds) => {
  const total = Math.max(0, Math.round(Number(seconds) || 0));
  if (!total) return "";
  if (total < 60) return `${total}s`;

  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  return h ? `${h}h ${m}m` : `${m}m`;
};

// course object { price, discountPrice, isFree } -> "Free" | "$49" | "$39.99"
export const formatPrice = (course) => {
  if (!course) return "";
  if (course.isFree) return "Free";

  const raw = course.discountPrice ?? course.price;
  const price = Number(raw);
  if (!Number.isFinite(price)) return "";
  if (price === 0) return "Free";

  return `TK. ${Number.isInteger(price) ? price : price.toFixed(2)}`;
};

// students count -> "12,400"
export const formatCount = (value) => {
  const n = Number(value) || 0;
  return n.toLocaleString("en-US");
};

export const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
