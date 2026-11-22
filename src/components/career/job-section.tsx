type Props = {
  title: string;
  text?: string;
  items?: string[];
};

export default function JobSection({ title, text, items }: Props) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-lg font-semibold text-gray-900">{title}</h2>
      {text && <p className="text-sm leading-6 text-gray-600">{text}</p>}
      {items && (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-6 text-gray-600">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}