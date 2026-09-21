// Image gulo Cloudinary-te store kora, tai URL gulo full https URL.
// Backend-e image field string ("https://res.cloudinary.com/...") ba
// object ({ url, public_id }) dui-ta format-i handle kora hoyeche.

const CLOUDINARY_UPLOAD = /^https?:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\//i;

export const resolveImageUrl = (raw) => {
  const value =
    raw && typeof raw === "object"
      ? raw.secure_url || raw.url || raw.path || ""
      : raw || "";

  const url = String(value).trim();
  if (!url) return "";

  // http hole https-e ana (mixed content error jate na hoy)
  return url.replace(/^http:\/\/res\.cloudinary\.com/i, "https://res.cloudinary.com");
};

// Cloudinary-r auto format (WebP/AVIF) + auto quality + size.
// Choto size-e ana hoy, tai page druto load hoy.
//   optimizeImage(url, { width: 600 })                       -> width 600 porjonto (upscale hoy na)
//   optimizeImage(url, { width: 144, height: 144, face: true }) -> square crop, mukh-er upor focus
// Cloudinary URL na hole (ba blob preview hole) ager URL-i ferot dey.
export const optimizeImage = (url, { width, height, face = false } = {}) => {
  if (!url || !CLOUDINARY_UPLOAD.test(url)) return url;
  if (url.includes("/upload/f_auto") || url.includes("q_auto")) return url;

  const parts = ["f_auto", "q_auto"];
  if (width) parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);
  if (width && height) {
    parts.push("c_fill");
    if (face) parts.push("g_face");
  } else if (width) {
    parts.push("c_limit");
  }

  return url.replace("/upload/", `/upload/${parts.join(",")}/`);
};

// Field-er nam jana na thakle: nam-e image/photo/avatar... thaka prothom field ta khuje ber kore
const IMAGE_KEY = /(avatar|image|img|photo|picture|thumb|cover|banner|poster)/i;
const NOT_IMAGE_KEY = /(alt|caption|count|size|type)/i;

const findImageValue = (obj) => {
  if (!obj || typeof obj !== "object") return "";

  for (const [key, value] of Object.entries(obj)) {
    if (!IMAGE_KEY.test(key) || NOT_IMAGE_KEY.test(key) || !value) continue;

    if (typeof value === "string") return value;
    if (typeof value === "object" && (value.secure_url || value.url || value.path)) {
      return value;
    }
  }
  return "";
};

export const pickCourseImage = (course) =>
  resolveImageUrl(
    course?.thumbnail ||
      course?.image ||
      course?.coverImage ||
      course?.thumbnailUrl ||
      course?.imageUrl ||
      course?.banner ||
      findImageValue(course)
  );

export const pickUserAvatar = (user) =>
  resolveImageUrl(
    user?.avatar ||
      user?.profileImage ||
      user?.profilePicture ||
      user?.profilePhoto ||
      user?.photo ||
      user?.picture ||
      user?.image ||
      findImageValue(user)
  );

// ======================================================
// CLOUDINARY VIDEO
// ======================================================

const CLOUDINARY_VIDEO = /^https?:\/\/res\.cloudinary\.com\/[^/]+\/video\/upload\//i;

// Auto quality: bandwidth-er upor base kore Cloudinary quality thik kore
export const optimizeVideo = (url) => {
  if (!url || !CLOUDINARY_VIDEO.test(url) || url.includes("q_auto")) return url;
  return url.replace("/video/upload/", "/video/upload/q_auto/");
};

// Video-r prothom frame theke poster image (Cloudinary nijei baniye dey)
export const getVideoPoster = (url) => {
  if (!url || !CLOUDINARY_VIDEO.test(url)) return undefined;

  return url
    .replace("/video/upload/", "/video/upload/so_0,w_1280,f_jpg/")
    .replace(/\.[a-z0-9]+(\?.*)?$/i, ".jpg$1");
};
