import DashboardShell from "@/components/dashboard/DashboardShell";
import MyCoursesGrid from "@/components/dashboard/MyCoursesGrid";

export const metadata = {
  title: "My Courses",
};

export default function DashboardCoursesPage() {
  return (
    <DashboardShell>
      <MyCoursesGrid />
    </DashboardShell>
  );
}