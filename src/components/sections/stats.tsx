"use client";

import * as React from "react";
import { CheckCircle2, Users, Rocket, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const details = [
  {
    icon: <Rocket className="size-10" />,
    title: "What to Expect",
    description: "An immersive three-day experience designed to connect you with the brightest minds in the startup world. Expect groundbreaking keynotes, hands-on workshops, and unparalleled networking opportunities that can help propel your venture to the next level.",
  },
  {
    icon: <Users className="size-10" />,
    title: "Who Should Attend",
    description: "This conference is for ambitious founders, savvy investors, innovative developers, and anyone passionate about the startup ecosystem. If you're looking to learn, network, and grow, you're in the right place.",
  },
  {
    icon: <Lightbulb className="size-10" />,
    title: "Key Themes",
    description: "Explore the frontiers of technology and business with sessions covering AI & Machine Learning, SaaS growth strategies, Fintech disruption, the future of work, and sustainable tech.",
  },
  {
    icon: <CheckCircle2 className="size-10" />,
    title: "Why Attend?",
    description: "Secure funding from top-tier VCs, forge meaningful partnerships, gain actionable insights from industry experts, recruit top talent for your team, and get inspired by incredible success stories.",
  },
];

export default function Stats() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      if (top > 0) {
        setActiveIndex(0);
        return;
      }
      if (top < -scrollableHeight) {
        setActiveIndex(details.length - 1);
        return;
      }
      
      const progress = -top / scrollableHeight;
      const newIndex = Math.floor(progress * details.length);
      
      setActiveIndex(Math.min(details.length - 1, newIndex));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Intersection Observer for slide in/out
  React.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-16 sm:py-24">
      <div
        ref={sectionRef}
        className={cn(
          "relative transition-all duration-700 ease-in-out",
          inView ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"
        )}
        style={{ height: `${details.length * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <div className="container mx-auto px-4 mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Event Highlights
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about the conference.
            </p>
          </div>
          <div className="container mx-auto px-4 h-[60vh] max-h-[700px] w-full">
            <div className="flex h-full items-center justify-center gap-4">
              {details.map((item, index) => (
                <div
                  key={item.title}
                  className={cn(
                    "relative h-full rounded-2xl p-8 transition-all duration-700 ease-in-out flex flex-col justify-center",
                    "text-primary-foreground",
                    activeIndex === index ? "w-[70%] bg-primary-gradient" : "w-[10%] cursor-pointer bg-primary/20"
                  )}
                   onClick={() => {
                     const section = sectionRef.current;
                     if (!section) return;
                     const scrollableHeight = section.scrollHeight - window.innerHeight;
                     const targetScrollY = window.scrollY + section.getBoundingClientRect().top + (scrollableHeight / details.length) * index;
                     window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
                   }}
                >
                  <div className={cn(
                      "transition-opacity",
                      activeIndex === index ? "opacity-100 delay-500 duration-500" : "opacity-0 duration-0"
                    )}>
                      <div className="mb-6 text-primary-foreground">{item.icon}</div>
                      <h3 className="font-headline text-3xl font-bold text-primary-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
                        {item.description}
                      </p>
                  </div>

                  <div
                    className={cn(
                      "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300",
                      activeIndex !== index ? "opacity-100" : "opacity-0"
                    )}
                  >
                     <h3 className="font-headline text-2xl font-bold text-foreground [writing-mode:vertical-lr]">
                        {item.title}
                      </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
