import Image from "next/image";

const sponsors = [
  { name: "Sponsor 1", src: "https://placehold.co/160x80" },
  { name: "Sponsor 2", src: "https://placehold.co/160x80" },
  { name: "Sponsor 3", src: "https://placehold.co/160x80" },
  { name: "Sponsor 4", src: "https://placehold.co/160x80" },
  { name: "Sponsor 5", src: "https://placehold.co/160x80" },
  { name: "Sponsor 6", src: "https://placehold.co/160x80" },
  { name: "Sponsor 7", src: "https://placehold.co/160x80" },
  { name: "Sponsor 8", src: "https://placehold.co/160x80" },
  { name: "Sponsor 9", src: "https://placehold.co/160x80" },
  { name: "Sponsor 10", src: "https://placehold.co/160x80" },
  { name: "Sponsor 11", src: "https://placehold.co/160x80" },
  { name: "Sponsor 12", src: "https://placehold.co/160x80" },
];

export default function SponsorsGrid() {
  return (
    <section id="sponsors" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Valued Sponsors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to partner with these innovative companies.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg bg-muted/30 p-4 transition-transform hover:scale-105 hover:bg-muted/70"
            >
              <Image
                src={sponsor.src}
                alt={sponsor.name}
                width={160}
                height={80}
                className="max-h-16 w-auto object-contain"
                data-ai-hint="company logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
