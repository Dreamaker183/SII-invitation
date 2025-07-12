import { Users, Mic, Handshake, CalendarDays } from "lucide-react";

const stats = [
  {
    value: "5,000+",
    label: "Attendees",
    icon: <Users className="size-8 text-primary" />,
  },
  {
    value: "200+",
    label: "Speakers",
    icon: <Mic className="size-8 text-primary" />,
  },
  {
    value: "100+",
    label: "Investors",
    icon: <Handshake className="size-8 text-primary" />,
  },
  {
    value: "3",
    label: "Days",
    icon: <CalendarDays className="size-8 text-primary" />,
  },
];

export default function Stats() {
  return (
    <div id="stats" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              {stat.icon}
              <p className="mt-4 font-headline text-4xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-lg text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
