import Image, { StaticImageData } from "next/image";

export function RegisterIllustration({
  ImageAuth,
}: {
  ImageAuth: StaticImageData;
}) {
  return (
    <aside
      aria-hidden="true"
      className="relative py-8 hidden items-end justify-center overflow-hidden bg-[#eeecff] lg:flex"
    >
      <Image
        src={ImageAuth}
        alt=""
        priority
        className="h-full w-[76%]  object-contain"
      />
    </aside>
  );
}
