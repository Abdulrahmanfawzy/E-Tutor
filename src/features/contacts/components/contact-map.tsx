
interface ContactMapProps {
  location: string;
}

export function ContactMap({ location }: ContactMapProps) {
  return (
    <section className="h-[300px] w-full md:h-[360px]">
      <iframe
        title="Our location"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />
    </section>
  );
}
