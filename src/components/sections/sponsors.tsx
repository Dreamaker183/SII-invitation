import Image from "next/image";
import { PlayCircle } from "lucide-react";

const sponsorMedia = [
  {
    type: "image",
    src: "https://placehold.co/600x400",
    alt: "Sponsor A logo and product showcase",
    hint: "corporate branding",
  },
  {
    type: "video",
    src: "https://placehold.co/600x400",
    alt: "Promotional video from Sponsor B",
    hint: "technology conference",
  },
  {
    type: "image",
    src: "https://placehold.co/600x400",
    alt: "Sponsor C team at a previous event",
    hint: "team collaboration",
  },
  {
    type: "video",
    src: "https://placehold.co/600x400",
    alt: "Sponsor D product demonstration",
    hint: "product demo",
  },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="bg-primary/5 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Valued Sponsors
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are proud to partner with these innovative companies.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sponsorMedia.map((media, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={media.src}
                alt={media.alt}
                width={600}
                height={400}
                className="aspect-video h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={media.hint}
              />
              {media.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <PlayCircle className="size-16 text-white/80 transition-transform duration-300 group-hover:scale-110" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
