import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, Rocket, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

const details = [
  {
    icon: <Rocket className="size-8" />,
    title: "What to Expect",
    description: "An immersive three-day experience designed to connect you with the brightest minds in the startup world. Expect groundbreaking keynotes, hands-on workshops, and unparalleled networking opportunities that can help propel your venture to the next level.",
    className: "lg:col-span-2 bg-primary/10",
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {details.map((item) => (
            <Card
              key={item.title}
              className={cn(
                "flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl",
                item.className
              )}
            >
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <div className="flex-shrink-0 text-primary">{item.icon}</div>
                <div className="flex-grow">
                  <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
