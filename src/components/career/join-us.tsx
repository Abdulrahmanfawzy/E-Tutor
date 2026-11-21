import Image from "next/image";
import { Check } from "lucide-react";

const reasons = [
  {
    title: "Ut justo ligula, vel suscipit sed egestas vel.",
    text: "Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio.",
  },
  {
    title: "Aenean vitae leo leo praesent ullamcorper ac.",
    text: "Aenean vitae leo leo. Praesent ullamcorper ac libero et mattis. Aenean vel erat at neque viverra feugiat.",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="container grid items-center gap-12 py-20 px-20 md:grid-cols-2">
    <div className="relative h-80 w-full max-w-lg">
  <Image
    src="/images/carear/Union.svg"
    alt="Our team"
    fill
    className="object-contain"
  />
</div>

      <div>
        <h2 className="text-heading-6 text-gray-900">Why you will join our team</h2>
        <p className="mt-4 text-sm text-gray-600">
          Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non
          consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio.
        </p>
        <div className="mt-6 space-y-4">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-3 bg-white p-4 shadow-sm">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-400 text-white">
                <Check size={12} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{r.title}</h3>
                <p className="mt-1 text-xs text-gray-600">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}