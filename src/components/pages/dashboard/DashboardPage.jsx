import DashboardGuard from "@/components/dashboard/DashboardGuard";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import ProfileCard from "@/components/dashboard/ProfileCard";
import DashboardStats from "@/components/dashboard/DashboardStats";
import EnrolledCourses from "@/components/dashboard/EnrolledCourses";

export default function DashboardPage() {
  return (
    <DashboardGuard>
      <main className="bg-background px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
          <DashboardSidebar />

          <div className="flex-1 space-y-6">
            <ProfileCard />
            <DashboardStats />
            <EnrolledCourses />
          </div>
        </div>
      </main>
    </DashboardGuard>
  );
}
