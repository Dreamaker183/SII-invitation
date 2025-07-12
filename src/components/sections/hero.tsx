import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-primary/5 py-24 pt-36 sm:py-32"
    >
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-primary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Startup Grind Conference 2025
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
          Join 5,000+ entrepreneurs, investors, and startup enthusiasts.
          <br />
          Where startups meet investors, ideas become reality, and careers are
          launched.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-primary" />
            <span className="font-medium">March 15-17, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-primary" />
            <span className="font-medium">San Francisco, CA</span>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg">Register Now</Button>
          <Button size="lg" variant="outline">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
}
