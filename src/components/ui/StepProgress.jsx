export default function StepProgress({ currentStep, totalSteps }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
        <div
          key={s}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            s === currentStep
              ? "w-8 bg-(--accent)"
              : s < currentStep
              ? "w-4 bg-(--accent)/50"
              : "w-4 bg-(--border)"
          }`}
        />
      ))}
    </div>
  );
}