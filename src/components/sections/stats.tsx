
"use client";

import * as React from "react";
import { CheckCircle2, Users, Rocket, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const details = [
  {
    icon: <Rocket className="size-10" />,
    title: "What to Expect",
    description: "An immersive three-day experience designed to connect you with the brightest minds in the startup world. Expect groundbreaking keynotes, hands-on workshops, and unparalleled networking opportunities that can help propel your venture to the next level.",
    className: "bg-blue-100/50 dark:bg-blue-900/20",
  },
  {
    icon: <Users className="size-10" />,
    title: "Who Should Attend",
    description: "This conference is for ambitious founders, savvy investors, innovative developers, and anyone passionate about the startup ecosystem. If you're looking to learn, network, and grow, you're in the right place.",
    className: "bg-purple-100/50 dark:bg-purple-900/20",
  },
  {
    icon: <Lightbulb className="size-10" />,
    title: "Key Themes",
    description: "Explore the frontiers of technology and business with sessions covering AI & Machine Learning, SaaS growth strategies, Fintech disruption, the future of work, and sustainable tech.",
    className: "bg-green-100/50 dark:bg-green-900/20",
  },
  {
    icon: <CheckCircle2 className="size-10" />,
    title: "Why Attend?",
    description: "Secure funding from top-tier VCs, forge meaningful partnerships, gain actionable insights from industry experts, recruit top talent for your team, and get inspired by incredible success stories.",
    className: "bg-yellow-100/50 dark:bg-yellow-900/20",
  },
];

export default function Stats() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      // Don't do anything if the section is not in the sticky phase
      if (top > 0 || top < -scrollableHeight) return;
      
      const progress = -top / scrollableHeight;
      const newIndex = Math.min(details.length - 1, Math.floor(progress * details.length));
      
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="stats" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Event Highlights
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to know about the conference.
        </p>
      </div>
      <div
        ref={sectionRef}
        className="relative"
        style={{ height: `${details.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <div className="relative h-[500px] w-[90%] max-w-4xl">
            {details.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "absolute inset-0 flex flex-col items-center justify-center rounded-2xl p-8 text-center transition-all duration-500 ease-in-out",
                  item.className,
                  activeIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                )}
                style={{
                  transform: `translateY(${(index - activeIndex) * 10}px)`,
                  zIndex: details.length - Math.abs(index - activeIndex),
                }}
              >
                <div className="mb-6 text-primary">{item.icon}</div>
                <h3 className="font-headline text-3xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
