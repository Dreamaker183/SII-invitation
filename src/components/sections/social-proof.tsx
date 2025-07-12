import Image from "next/image";
import { Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah L.",
    title: "Founder, TechNova",
    quote: "This conference was a game-changer for my startup. The networking opportunities were unparalleled.",
    avatar: "https://placehold.co/40x40",
    rating: 5,
  },
  {
    name: "Michael B.",
    title: "VC, Innovate Capital",
    quote: "I found three of my most promising portfolio companies at Startup Grind. The quality of startups is top-notch.",
    avatar: "https://placehold.co/40x40",
    rating: 5,
  },
  {
    name: "Jessica P.",
    title: "Lead Developer, CodeCrafters",
    quote: "The technical sessions were incredibly insightful. I came back to my team with so many new ideas.",
    avatar: "https://placehold.co/40x40",
    rating: 5,
  },
];

const galleryImages = [
  { src: "https://placehold.co/600x400", alt: "Conference attendees networking", hint: "conference networking" },
  { src: "https://placehold.co/600x400", alt: "Speaker on stage", hint: "conference speaker" },
  { src: "https://placehold.co/600x400", alt: "Audience listening to a talk", hint: "conference audience" },
  { src: "https://placehold.co/600x400", alt: "Startup pitch competition", hint: "startup pitch" },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="bg-primary/5 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join a Thriving Community
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what past attendees have to say about their experience.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl lg:max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="flex h-full flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="size-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="italic">&quot;{testimonial.quote}&quot;</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            data-ai-hint="person portrait"
                          />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="aspect-video h-full w-full object-cover"
                data-ai-hint={image.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
