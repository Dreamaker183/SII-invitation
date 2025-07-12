import Image from "next/image";

const sponsorPackages = [
  {
    name: "Scaleup Exhibition Package",
    description:
      "For Seed to Series A startups seeking their next round of funding.",
    price: "$4999",
    image: "https://placehold.co/800x400",
    hint: "conference speaker stage",
  },
  {
    name: "Startup Exhibition Package",
    description:
      "For Bootstrapped to Seed startups looking to accelerate growth.",
    price: "$2499",
    image: "https://placehold.co/800x400",
    hint: "startup pitch event",
  },
  {
    name: "Unicorn Exhibition Package",
    description: "Premium placement for established industry leaders.",
    price: "$9999",
    image: "https://placehold.co/800x400",
    hint: "corporate event",
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative overflow-hidden py-16 sm:py-24">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-primary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Exhibition Packages
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Showcase your startup to thousands of potential investors and
            customers.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex w-full space-x-8 overflow-x-auto pb-4">
            {sponsorPackages.map((pkg, index) => (
              <div
                key={index}
                className="w-[80vw] flex-shrink-0 md:w-[60vw] lg:w-[45vw]"
              >
                <div className="group relative aspect-[2/1] w-full cursor-pointer overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    width={1000}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    data-ai-hint={pkg.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="font-headline text-2xl font-bold">
                      {pkg.name}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm text-white/90">
                      {pkg.description}
                    </p>
                    <div className="mt-4">
                      <div className="inline-block rounded-full border border-white/50 px-4 py-1.5 text-sm font-semibold">
                        {pkg.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
