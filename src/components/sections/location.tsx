import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Location() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Venue & Directions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find your way to the heart of innovation.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <div className="aspect-video w-full overflow-hidden rounded-t-lg">
              <Image
                src="https://placehold.co/800x450"
                alt="Map to conference venue"
                width={800}
                height={450}
                className="h-full w-full object-cover"
                data-ai-hint="city map"
              />
            </div>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Conference Center</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-[hsl(var(--primary-blue))]" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Innovation Drive,
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 size-5 shrink-0 text-[hsl(var(--primary-blue))]" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    (123) 456-7890
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-[hsl(var(--primary-blue))]" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    contact@grindsite.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
