import DashboardShell from "@/components/dashboard/DashboardShell";
import ProfileCard from "@/components/dashboard/ProfileCard";
import DashboardStats from "@/components/dashboard/DashboardStats";
import EnrolledCourses from "@/components/dashboard/EnrolledCourses";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <ProfileCard />
      <DashboardStats />
      <EnrolledCourses />
    </DashboardShell>
  );
}