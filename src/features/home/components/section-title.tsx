
interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
      )}
    </div>
  );
}
