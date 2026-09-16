import Link from "next/link";
import Image from "next/image";
import LogoLight from "@/imports/logo.png";

export default function AuthCard({ children }) {
  return (
    <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-background px-6 py-14">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="mb-8 flex justify-center">
          <div className="relative h-14 w-40">
            <Image
              src={LogoLight}
              alt="Logo"
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Card */}
        <div className="rounded-2xl border border-(--border) bg-(--background-card) p-8 shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
          {children}
        </div>
      </div>
    </section>
  );
}