import Image from "next/image";
import { PlayCircle } from "lucide-react";

const sponsorMedia = [
  {
    name: "Innovate Inc.",
    type: "image",
    src: "https://placehold.co/600x400",
    alt: "Sponsor A logo and product showcase",
    hint: "corporate branding",
  },
  {
    name: "Tech GIANTS",
    type: "video",
    src: "https://placehold.co/600x400",
    alt: "Promotional video from Sponsor B",
    hint: "technology conference",
  },
  {
    name: "Synergy Systems",
    type: "image",
    src: "https://placehold.co/600x400",
    alt: "Sponsor C team at a previous event",
    hint: "team collaboration",
  },
  {
    name: "NextGen Solutions",
    type: "video",
    src: "https://placehold.co/600x400",
    alt: "Sponsor D product demonstration",
    hint: "product demo",
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative overflow-hidden py-16 sm:py-24">
       <div
        className="absolute inset-x-0 bottom-0 top-0 -z-10 bg-muted/50"
        aria-hidden="true"
      >
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Valued Sponsors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to partner with these innovative companies.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sponsorMedia.map((media, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={media.src}
                alt={media.alt}
                width={600}
                height={400}
                className="aspect-video h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={media.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:from-black/80" />
              <div className="absolute inset-0 flex items-center justify-center">
                 {media.type === "video" && (
                    <PlayCircle className="size-16 text-white/70 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
                 )}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-headline text-xl font-bold text-white transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
                  {media.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
