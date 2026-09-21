import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function AuthHeader({ title, subtitle, error, info, backHref = "/login", children }) {
  return (
    <>
      <Link
        href={backHref}
        className="mb-6 inline-flex items-center gap-1.5 text-xs font-medium text-(--text-secondary) transition-colors hover:text-(--text-primary)"
      >
        <ArrowLeft size={14} />
        Back to login
      </Link>

      <h1 className="text-xl font-bold text-(--text-primary) sm:text-2xl">{title}</h1>
      <p className="mt-1.5 text-sm text-(--text-secondary)">{subtitle}</p>

      {error && (
        <p role="alert" className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-500">
          {error}
        </p>
      )}
      {info && (
        <p className="mt-4 flex items-center gap-1.5 rounded-lg bg-(--success)/10 px-3 py-2 text-xs text-(--success)">
          <CheckCircle2 size={14} />
          {info}
        </p>
      )}

      <div className="mt-6">{children}</div>
    </>
  );
}