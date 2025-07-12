"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const scheduleData = {
  "Day 1": [
    { time: "09:00 AM", title: "Opening Keynote", speaker: "Alex Thompson", track: "Keynote", description: "Setting the stage for the future of tech." },
    { time: "10:00 AM", title: "The Future of AI", speaker: "Dr. Evelyn Reed", track: "AI & ML", description: "Exploring breakthroughs in artificial intelligence." },
    { time: "11:00 AM", title: "Scaling to a Million Users", speaker: "Ben Carter", track: "Scaling", description: "Strategies for hyper-growth and infrastructure." },
    { time: "01:00 PM", title: "Venture Capital Demystified", speaker: "Olivia Chen", track: "Funding", description: "An inside look at what VCs are looking for." },
    { time: "02:00 PM", title: "Building a Killer Product", speaker: "Marcus Kane", track: "Product", description: "From idea to a product that customers love." },
  ],
  "Day 2": [
    { time: "09:00 AM", title: "Fireside Chat with a Unicorn Founder", speaker: "Jessica Miller", track: "Keynote", description: "Lessons learned on the path to a billion-dollar valuation." },
    { time: "10:00 AM", title: "The SaaS Playbook", speaker: "David Lee", track: "Scaling", description: "Key metrics and strategies for SaaS success." },
    { time: "11:00 AM", title: "Angel Investing 101", speaker: "Sophia Rodriguez", track: "Funding", description: "How to get started as an angel investor." },
    { time: "01:00 PM", title: "AI-Powered Growth Marketing", speaker: "Kevin Harris", track: "AI & ML", description: "Leveraging AI for customer acquisition and retention." },
    { time: "02:00 PM", title: "The Future of Work", speaker: "Dr. Sam Foster", track: "Product", description: "How technology is reshaping the workplace." },
  ],
  "Day 3": [
    { time: "09:00 AM", title: "The Ethics of AI", speaker: "Prof. Anya Sharma", track: "Keynote", description: "Navigating the moral landscape of intelligent machines." },
    { time: "10:00 AM", title: "Pitch Competition Finals", speaker: "All Finalists", track: "Funding", description: "The top startups battle it out for the grand prize." },
    { time: "11:00 AM", title: "Closing Remarks", speaker: "Alex Thompson", track: "Keynote", description: "A look ahead and the future of the startup ecosystem." },
  ],
};

const tracks = ["All", "Keynote", "Funding", "Scaling", "AI & ML", "Product"];

export default function Schedule() {
  const [activeTrack, setActiveTrack] = useState("All");

  return (
    <section id="schedule" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Conference Schedule
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Plan your days and don&apos;t miss your favorite talks.
          </p>
        </div>

        <Tabs defaultValue="Day 1" className="mt-12">
          <TabsList className="grid w-full grid-cols-3">
            {Object.keys(scheduleData).map((day) => (
              <TabsTrigger key={day} value={day}>
                {day}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="mt-6 mb-8 flex flex-wrap justify-center gap-2">
            {tracks.map((track) => (
              <Button key={track} variant={activeTrack === track ? "default" : "outline"} onClick={() => setActiveTrack(track)}>
                {track}
              </Button>
            ))}
          </div>

          {Object.entries(scheduleData).map(([day, sessions]) => (
            <TabsContent key={day} value={day}>
              <div className="space-y-6">
                {sessions
                  .filter(session => activeTrack === 'All' || session.track === activeTrack)
                  .map((session) => (
                  <Card
                    key={session.title}
                    className="flex flex-col sm:flex-row"
                  >
                    <div className="w-full bg-muted/50 p-4 text-center sm:w-40 sm:border-r sm:p-6">
                      <p className="font-bold text-primary text-lg sm:text-xl">
                        {session.time}
                      </p>
                    </div>
                    <div className="flex-1">
                      <CardHeader>
                        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <CardTitle>{session.title}</CardTitle>
                          <Badge variant="secondary">{session.track}</Badge>
                        </div>
                        <CardDescription>by {session.speaker}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {session.description}
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                ))}
                 {sessions.filter(session => activeTrack === 'All' || session.track === activeTrack).length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No sessions for this track on {day}.</p>
                    </div>
                 )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
