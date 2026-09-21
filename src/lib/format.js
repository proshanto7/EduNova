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
