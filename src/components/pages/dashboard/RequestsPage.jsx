import DashboardShell from "@/components/dashboard/DashboardShell";
import RequestsGrid from "@/components/dashboard/RequestsGrid";

export default function RequestsPage() {
  return (
    <DashboardShell>
      <RequestsGrid />
    </DashboardShell>
  );
}
