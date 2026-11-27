import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="bg-white">
      <div className="container grid items-stretch gap-8 md:grid-cols-2 px-20">
        {/* Text: vertically centered, starts at the container's left edge */}
        <div className="max-w-xl self-center py-10 md:ml-12">
          <h2 className="text-heading-5 text-gray-900">
            Join the most incredible &amp; creative team.
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Proin gravida enim augue, dapibus ultrices eros feugiat et. Pellentesque bibendum orci
            felis, sit amet efficitur felis lacinia ac. Mauris gravida justo ac nunc consectetur.
          </p>
          <button className="mt-6 bg-button-primary px-6 text-button-sm text-button-primary-foreground transition-colors hover:bg-button-primary-hover">
            View Open Positions
          </button>
        </div>

        {/* Image: centered in the right half, touching the bottom of the section */}
        <div className="flex items-end justify-center">
          <Image
            src="/images/carear/smile-girl.svg"
            alt="Team member"
            width={420}
            height={480}
            priority
          />
        </div>
      </div>
    </section>
  );
}