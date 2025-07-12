"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const scheduleData = [
    { time: "09:00 AM", title: "Opening Keynote", speaker: "Alex Thompson", track: "Keynote", description: "Setting the stage for the future of tech." },
    { time: "10:00 AM", title: "The Future of AI", speaker: "Dr. Evelyn Reed", track: "AI & ML", description: "Exploring breakthroughs in artificial intelligence." },
    { time: "11:00 AM", title: "Scaling to a Million Users", speaker: "Ben Carter", track: "Scaling", description: "Strategies for hyper-growth and infrastructure." },
    { time: "12:00 PM", title: "Lunch Break", speaker: "", track: "Break", description: "Recharge and network with fellow attendees." },
    { time: "01:00 PM", title: "Venture Capital Demystified", speaker: "Olivia Chen", track: "Funding", description: "An inside look at what VCs are looking for." },
    { time: "02:00 PM", title: "Building a Killer Product", speaker: "Marcus Kane", track: "Product", description: "From idea to a product that customers love." },
    { time: "03:00 PM", title: "Fireside Chat with a Unicorn Founder", speaker: "Jessica Miller", track: "Keynote", description: "Lessons learned on the path to a billion-dollar valuation." },
    { time: "04:00 PM", title: "Pitch Competition Finals", speaker: "All Finalists", track: "Funding", description: "The top startups battle it out for the grand prize." },
    { time: "05:00 PM", title: "Closing Remarks", speaker: "Alex Thompson", track: "Keynote", description: "A look ahead and the future of the startup ecosystem." },
];


export default function Schedule() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [scrollYProgress, setScrollYProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      if (top > 0) {
        setScrollYProgress(0);
        return;
      }
      if (top < -scrollableHeight) {
        setScrollYProgress(1);
        return;
      }
      
      const progress = -top / scrollableHeight;
      setScrollYProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="schedule" className="py-16 sm:py-24">
      <div 
        ref={sectionRef} 
        className="relative" 
        style={{ height: `${scheduleData.length * 60}vh` }}
      >
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-start overflow-hidden pt-16">
          <div className="container mx-auto px-4 mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Conference Timeline
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A play-by-play of the day&apos;s events.
            </p>
          </div>

          <div className="container relative mx-auto h-full w-full px-4">
            <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border" />
            
            {scheduleData.map((session, index) => {
               const itemProgress = (index + 1) / scheduleData.length;
               const opacity = scrollYProgress >= itemProgress ? 1 : Math.max(0, (scrollYProgress - ((index) / scheduleData.length)) * scheduleData.length);
               const scale = scrollYProgress >= itemProgress ? 1 : Math.max(0.95, (scrollYProgress - ((index) / scheduleData.length)) * scheduleData.length);
               const translateY = scrollYProgress >= itemProgress ? 0 : 20 * (1 - (scrollYProgress - ((index) / scheduleData.length)) * scheduleData.length);

              return (
                <div
                  key={session.title + index}
                  className="absolute w-full"
                  style={{
                    top: `${(100 / (scheduleData.length + 1)) * (index + 0.5)}%`,
                    opacity: opacity,
                    transform: `scale(${scale}) translateY(${translateY}px)`,
                    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
                  }}
                >
                  <div className={cn(
                    "relative flex items-center",
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  )}>
                    <div className={cn(
                      "absolute left-1/2 -translate-x-1/2 size-4 rounded-full border-2 border-primary bg-background"
                    )}/>

                    <Card className={cn("w-full max-w-sm", index % 2 === 0 ? "ml-[calc(50%+1.5rem)]" : "mr-[calc(50%+1.5rem)]")}>
                      <CardHeader>
                        <div className="flex items-center justify-between gap-2">
                           <p className="font-bold text-primary text-lg">
                            {session.time}
                          </p>
                           <Badge variant="secondary">{session.track}</Badge>
                        </div>
                        <CardTitle className="text-xl">{session.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {session.speaker && <p className="text-sm font-medium mb-2">by {session.speaker}</p>}
                        <p className="text-sm text-muted-foreground">
                          {session.description}
                        </p>
                      </CardContent>
                    </Card>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
