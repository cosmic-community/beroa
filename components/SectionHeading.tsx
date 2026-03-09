interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}>
      {label && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-widest mb-3 ${
            light ? 'text-amber-300' : 'text-amber-600'
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-navy-300' : 'text-navy-500'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}