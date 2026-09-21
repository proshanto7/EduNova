export default function StepInput({ icon: Icon, error, className = "", ...props }) {
  return (
    <div>
      <div className="relative">
        <Icon
          size={16}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-(--text-placeholder)"
        />
        <input
          className={`h-12 w-full rounded-xl border border-(--border-light) bg-(--background-input) pl-11 pr-4 text-sm text-(--text-light) outline-none placeholder:text-(--text-placeholder) transition-colors focus:border-(--accent)/50 focus:ring-4 focus:ring-(--accent)/10 ${className}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}