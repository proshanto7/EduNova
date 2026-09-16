import DashboardShell from "@/components/dashboard/DashboardShell";
import CertificatesGrid from "@/components/dashboard/CertificatesGrid";

export default function DashboardCertificatesPage() {
  return (
    <DashboardShell>
      <CertificatesGrid />
    </DashboardShell>
  );
}