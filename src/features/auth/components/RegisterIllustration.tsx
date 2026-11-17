import Image from "next/image";

import registerArtwork from "@/assets/Saly-1.png";

export function RegisterIllustration() {
  return (
    <aside
      aria-hidden="true"
      className="relative hidden items-center justify-center overflow-hidden bg-[#eeecff] lg:flex"
    >
      <Image
        src={registerArtwork}
        alt=""
        priority
        className="h-auto w-[76%] max-w-[420px] object-contain"
      />
    </aside>
  );
}
