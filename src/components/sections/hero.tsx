import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-24 pt-36 sm:py-32 flex items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/natalya-letunova-lZXyGjsRnP0-unsplash.jpg"
          alt="Hong Kong skyline at night"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
        <div className="w-full h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Startup Grind Conference 2025
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/80 sm:text-xl">
          Join 5,000+ entrepreneurs, investors, and startup enthusiasts.
          <br />
          Where startups meet investors, ideas become reality, and careers are
          launched.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-accent" />
            <span className="font-medium">March 15-17, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-accent" />
            <span className="font-medium">San Francisco, CA</span>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg">Register Now</Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
}
