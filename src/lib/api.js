import { apiRequest } from "./apiClient";

// ======================================================
// HELPER
// ======================================================

const toQueryString = (params = {}) => {
  const cleanedParams = Object.entries(params).filter(
    ([, value]) => value !== undefined && value !== null && value !== "",
  );

  const queryString = new URLSearchParams(cleanedParams).toString();

  return queryString ? `?${queryString}` : "";
};
// ======================================================
// AUTH
// ======================================================

export const registerUser = (data) =>
  apiRequest("/auth/register", "POST", data);
export const loginUser = (data) => apiRequest("/auth/login", "POST", data);
export const logoutUser = () => apiRequest("/auth/logout", "POST");
export const verifyEmailOtp = (data) =>
  apiRequest("/auth/verify-email", "POST", data);
export const resendVerification = (data) =>
  apiRequest("/auth/resend-verification", "POST", data);

// Step 1: email → OTP send
export const forgotPassword = (data) =>
  apiRequest("/auth/forgot-password", "POST", data);

// Step 2: email + OTP → resetToken send
export const verifyResetOtp = (data) =>
  apiRequest("/auth/verify-reset-otp", "POST", data);

// Step 3: resetToken + newPassword → password change
export const resetPassword = (data) =>
  apiRequest("/auth/reset-password", "POST", data);

// ======================================================
// USER - SELF
// ======================================================

export const getMe = () => apiRequest("/auth/me");
export const updateMe = (data) => apiRequest("/auth/me", "PATCH", data);
export const changePassword = (data) =>
  apiRequest("/auth/change-password", "PATCH", data);
export const deactivateMe = () => apiRequest("/auth/me", "DELETE");

// ======================================================
// USERS - ADMIN ONLY
// ======================================================

export const getAllUsers = (params = {}) =>
  apiRequest(`/auth${toQueryString(params)}`);
export const updateUserRole = (id, data) =>
  apiRequest(`/auth/${id}/role`, "PATCH", data);

// Create, Update, Delete user (🔧 prefix /user থেকে /auth এ বদলানো)
export const createUser = (data) => apiRequest("/auth", "POST", data);
export const updateUser = (id, data) => apiRequest(`/auth/${id}`, "PATCH", data);
export const deleteUser = (id) => apiRequest(`/auth/${id}`, "DELETE");

// ======================================================
// CATEGORIES
// ======================================================

export const getCategories = (params = {}) => {
  return apiRequest(`/categories${toQueryString(params)}`);
};

export const getCategory = (id) => {
  return apiRequest(`/categories/${id}`);
};

export const getCategoryBySlug = (slug) => {
  return apiRequest(`/categories/slug/${slug}`);
};

export const createCategory = (data) => {
  return apiRequest("/categories", "POST", data);
};

export const updateCategory = (id, data) => {
  return apiRequest(`/categories/${id}`, "PATCH", data);
};


// ======================================================
// COURSES
// ======================================================

export const getCourses = (params = {}) => {
  return apiRequest(`/courses${toQueryString(params)}`);
};

export const getCourse = (id) => {
  return apiRequest(`/courses/${id}`);
};

export const getCourseBySlug = (slug) => {
  return apiRequest(`/courses/slug/${slug}`);
};

// ======================================================
// LESSONS
// ======================================================

export const getLessonsForCourse = (courseId) => {
  return apiRequest(`/lesson/course/${courseId}`);
};

export const getLesson = (id) => {
  return apiRequest(`/lesson/${id}`);
};


// ======================================================
// ENROLLMENTS
// ======================================================

export const enrollStudent = (data) => {
  return apiRequest("/enrollment", "POST", data);
};


export const getCourseEnrollments = (courseId) => {
  return apiRequest(`/enrollment/course/${courseId}`);
};

export const getMyEnrollments = () => {
  return apiRequest("/enrollment/my");
};

export const getStudentEnrollments = (studentId) =>
  apiRequest(`/enrollment/student/${studentId}`);

// ======================================================
// ENROLLMENT REQUESTS (student self-serve — no admin token needed)
// ======================================================

// data: { courseId, note? }
export const createEnrollmentRequest = (data) => {
  return apiRequest("/enrollment-request", "POST", data);
};

export const cancelEnrollmentRequest = (id) => {
  return apiRequest(`/enrollment-request/${id}`, "DELETE");
};

export const getMyEnrollmentRequests = () => {
  return apiRequest("/enrollment-request/my");
};


// ======================================================
// PROGRESS
// ======================================================

export const markLessonComplete = (data) => {
  return apiRequest("/progress/complete", "POST", data);
};

export const markLessonIncomplete = (lessonId) => {
  return apiRequest(`/progress/${lessonId}`, "DELETE");
};

export const getMyCourseProgress = (courseId) => {
  return apiRequest(`/progress/course/${courseId}`);
};

export const getMyOverallProgress = () => {
  return apiRequest("/progress/my-overview");
};

export const getStudentProgressForCourse = (courseId, studentId) => {
  return apiRequest(`/progress/course/${courseId}/student/${studentId}`);
};

// ======================================================
// DASHBOARD
// ======================================================

export const getDashboardSummary = () => {
  return apiRequest("/dashboard/summary");
};

// ======================================================
// ACTIVITY LOG
// ======================================================

export const getActivityLogs = (params = {}) => {
  return apiRequest(`/activity-log${toQueryString(params)}`);
};

export const getLogsForTarget = (targetType, targetId) => {
  return apiRequest(`/activity-log/${targetType}/${targetId}`);
};
