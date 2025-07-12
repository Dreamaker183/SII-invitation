import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const speakers = [
  {
    name: "Alex Thompson",
    title: "CEO, FutureCorp",
    image: "https://placehold.co/200x200",
    hint: "man portrait"
  },
  {
    name: "Dr. Evelyn Reed",
    title: "Chief AI Scientist, QuantumLeap",
    image: "https://placehold.co/200x200",
    hint: "woman portrait"
  },
  {
    name: "Ben Carter",
    title: "Growth Lead, ScaleUp",
    image: "https://placehold.co/200x200",
    hint: "man portrait"
  },
  {
    name: "Olivia Chen",
    title: "Partner, Vision Ventures",
    image: "https://placehold.co/200x200",
    hint: "woman portrait"
  },
  {
    name: "Marcus Kane",
    title: "Head of Product, InnovateU",
    image: "https://placehold.co/200x200",
    hint: "man portrait"
  },
  {
    name: "Jessica Miller",
    title: "Founder, Unicorn Inc.",
    image: "https://placehold.co/200x200",
    hint: "woman portrait"
  },
  {
    name: "David Lee",
    title: "SaaS Guru, CloudNative",
    image: "https://placehold.co/200x200",
    hint: "man portrait"
  },
  {
    name: "Sophia Rodriguez",
    title: "Angel Investor",
    image: "https://placehold.co/200x200",
    hint: "woman portrait"
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our Speakers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn from the brightest minds in the industry.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <Card
              key={speaker.name}
              className="overflow-hidden text-center transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={`Portrait of ${speaker.name}`}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                  data-ai-hint={speaker.hint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  {speaker.name}
                </CardTitle>
                <CardDescription>{speaker.title}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
