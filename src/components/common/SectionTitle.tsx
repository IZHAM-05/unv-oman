type SectionTitleProps = {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionTitle({
  label,
  title,
  description,
  light = true,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {label && (
        <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#C08A3E]">
          {label}
        </p>
      )}

      <h2
        className={`text-3xl font-black leading-tight md:text-5xl ${
          light ? "text-white" : "text-[#C08A3E]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-8 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}