"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, Rocket, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const details = [
  {
    icon: <Rocket className="size-8" />,
    title: "What to Expect",
    description: "An immersive three-day experience designed to connect you with the brightest minds in the startup world. Expect groundbreaking keynotes, hands-on workshops, and unparalleled networking opportunities that can help propel your venture to the next level.",
    className: "bg-primary/10",
  },
  {
    icon: <Users className="size-8" />,
    title: "Who Should Attend",
    list: [
      "Ambitious Founders",
      "Savvy Investors & VCs",
      "Innovative Developers",
      "Aspiring Entrepreneurs",
      "Tech Enthusiasts",
    ],
    className: "bg-accent/10",
  },
  {
    icon: <Lightbulb className="size-8" />,
    title: "Key Themes",
    description: "Explore the frontiers of technology and business with sessions covering AI & Machine Learning, SaaS growth strategies, Fintech disruption, the future of work, and sustainable tech.",
    className: "bg-secondary/20",
  },
  {
    icon: <CheckCircle2 className="size-8" />,
    title: "Why Attend?",
    list: [
      "Secure funding from top-tier VCs.",
      "Forge meaningful partnerships.",
      "Gain actionable, expert insights.",
      "Recruit top talent for your team.",
      "Get inspired by success stories.",
    ],
    className: "lg:col-span-2 bg-primary/5",
  },
];

export default function Stats() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div id="stats" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Event Highlights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about the conference.
          </p>
        </div>
        <div className="flex h-[450px] w-full items-stretch gap-4">
          {details.map((item, index) => (
            <div
              key={item.title}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative cursor-pointer rounded-lg p-6 shadow-md transition-all duration-500 ease-in-out",
                item.className,
                activeIndex === index ? "flex-[5]" : "flex-[1]"
              )}
            >
              <div className="flex h-full flex-col overflow-hidden">
                <div className="flex items-center gap-4">
                  <div className="text-primary">{item.icon}</div>
                  <h3
                    className={cn(
                      "font-headline text-2xl font-bold text-foreground transition-opacity duration-300",
                      activeIndex !== index && "md:opacity-0"
                    )}
                  >
                    {item.title}
                  </h3>
                </div>
                <div
                  className={cn(
                    "mt-4 flex-grow transition-all duration-500 ease-in-out",
                    activeIndex === index
                      ? "opacity-100 max-h-full"
                      : "opacity-0 max-h-0"
                  )}
                >
                  {item.description && (
                    <p className="text-muted-foreground">{item.description}</p>
                  )}
                  {item.list && (
                    <ul className="mt-2 space-y-2 text-muted-foreground">
                      {item.list.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 shrink-0 text-primary/80" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              {activeIndex !== index && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform whitespace-nowrap">
                   <h3 className="font-headline text-xl font-bold text-foreground/70">
                    {item.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}