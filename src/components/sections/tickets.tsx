import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ticketTiers = [
  {
    name: "Early Bird",
    price: "$299",
    description: "Get your ticket before they're all gone!",
    features: [
      "Full 3-day conference access",
      "Access to all talks and workshops",
      "Networking events entry",
    ],
    isPopular: false,
  },
  {
    name: "General Admission",
    price: "$499",
    description: "The standard package for the full experience.",
    features: [
      "Full 3-day conference access",
      "Access to all talks and workshops",
      "Networking events entry",
      "Official conference t-shirt",
    ],
    isPopular: true,
  },
  {
    name: "VIP Pass",
    price: "$999",
    description: "The ultimate experience with exclusive perks.",
    features: [
      "All General Admission benefits",
      "Exclusive VIP lounge access",
      "Private speaker meet & greet",
      "Front-row seating at keynotes",
    ],
    isPopular: false,
  },
];

export default function Tickets() {
  return (
    <section id="tickets" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get Your Ticket
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect package for you. Don&apos;t miss out on the
            premier startup event of the year.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {ticketTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col ${
                tier.isPopular ? "border-primary ring-2 ring-primary" : ""
              }`}
            >
              {tier.isPopular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  {tier.name}
                </CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">/ person</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="mr-2 mt-1 size-4 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.isPopular ? "default" : "outline"}
                >
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
