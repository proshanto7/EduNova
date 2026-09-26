import RequestsPage from "@/components/pages/dashboard/RequestsPage";

export const metadata = {
  title: "Enrollment Requests",
  description: "Track the courses you've requested to enroll in.",
};

export default function Page() {
  return <RequestsPage />;
}
