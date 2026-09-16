import DashboardGuard from "@/components/dashboard/DashboardGuard";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardShell({ children }) {
  return (
    <DashboardGuard>
      <main className="bg-background px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row">
          <DashboardSidebar />
          <div className="flex-1 space-y-6">{children}</div>
        </div>
      </main>
    </DashboardGuard>
  );
}