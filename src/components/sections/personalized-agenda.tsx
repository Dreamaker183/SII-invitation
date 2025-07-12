"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Sparkles, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { generatePersonalizedAgenda, type PersonalizedAgendaOutput } from "@/ai/flows/personalized-agenda";
import { Skeleton } from "@/components/ui/skeleton";

const interests = [
  "AI & Machine Learning",
  "SaaS",
  "Fintech",
  "E-commerce",
  "Venture Capital",
  "Growth Hacking",
  "Product Management",
  "UX/UI Design",
];

const FormSchema = z.object({
  interests: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one interest.",
  }),
});

const allConferenceSessions = [
    { title: 'The Future of AI in Startups', description: 'Exploring how AI is reshaping the startup landscape.', speaker: 'Jane Doe', time: 'Day 1, 10:00 AM', location: 'Main Stage', interests: ['AI & Machine Learning', 'Venture Capital'] },
    { title: 'Scaling Your SaaS Business', description: 'Strategies for growing your SaaS to $10M ARR.', speaker: 'John Smith', time: 'Day 1, 11:00 AM', location: 'Room A', interests: ['SaaS', 'Growth Hacking'] },
    { title: 'Fintech Innovations', description: 'The latest trends in financial technology.', speaker: 'Emily White', time: 'Day 1, 2:00 PM', location: 'Room B', interests: ['Fintech'] },
    { title: 'Mastering Product-Market Fit', description: 'A deep dive into finding and keeping your customers.', speaker: 'Alex Johnson', time: 'Day 2, 9:00 AM', location: 'Main Stage', interests: ['Product Management', 'Growth Hacking'] },
    { title: 'The Art of the Pitch Deck', description: 'How to create a compelling pitch for investors.', speaker: 'Chris Lee', time: 'Day 2, 11:00 AM', location: 'Room A', interests: ['Venture Capital'] },
    { title: 'Designing for Conversion', description: 'UX/UI best practices to boost your conversion rates.', speaker: 'Samantha Green', time: 'Day 2, 1:00 PM', location: 'Room C', interests: ['UX/UI Design', 'E-commerce'] },
    { title: 'Building a Brand People Love', description: 'From zero to brand hero: a practical guide.', speaker: 'Mike Brown', time: 'Day 3, 10:00 AM', location: 'Main Stage', interests: ['Growth Hacking'] },
];

export default function PersonalizedAgenda() {
  const { toast } = useToast();
  const [generatedAgenda, setGeneratedAgenda] = useState<PersonalizedAgendaOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      interests: [],
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setGeneratedAgenda(null);
    try {
      const result = await generatePersonalizedAgenda({
        interests: data.interests,
        conferenceSessions: allConferenceSessions,
      });
      setGeneratedAgenda(result);
    } catch (error) {
      console.error("Error generating agenda:", error);
      toast({
        title: "Error",
        description: "Failed to generate your personalized agenda. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleExport = () => {
    toast({
      title: "Export Successful",
      description: "Your agenda has been saved. (This is a demo feature)",
    });
  };

  return (
    <section id="ai-agenda" className="bg-primary/5 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Craft Your Perfect Conference Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let our AI assistant generate a personalized agenda based on your interests.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Sparkles className="size-5 text-accent" />
                  Select Your Interests
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    {interests.map((interest) => (
                      <Controller
                        key={interest}
                        name="interests"
                        control={form.control}
                        render={({ field }) => (
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id={interest}
                              checked={field.value?.includes(interest)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...(field.value || []), interest])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== interest
                                      )
                                    );
                              }}
                            />
                            <label
                              htmlFor={interest}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {interest}
                            </label>
                          </div>
                        )}
                      />
                    ))}
                  </div>
                  {form.formState.errors.interests && (
                    <p className="text-sm font-medium text-destructive">
                      {form.formState.errors.interests.message}
                    </p>
                  )}
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? "Generating..." : "Generate My Agenda"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="min-h-full">
              <CardHeader>
                <CardTitle className="font-headline">Your Personalized Agenda</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                       <div key={i} className="space-y-2 rounded-lg border p-4">
                         <Skeleton className="h-5 w-3/4" />
                         <Skeleton className="h-4 w-1/2" />
                         <Skeleton className="h-4 w-1/3" />
                       </div>
                    ))}
                  </div>
                )}
                {!isLoading && !generatedAgenda && (
                  <div className="flex h-64 flex-col items-center justify-center text-center">
                    <Sparkles className="size-12 text-muted-foreground/50" />
                    <p className="mt-4 text-muted-foreground">
                      Your generated agenda will appear here.
                    </p>
                  </div>
                )}
                {!isLoading && generatedAgenda && (
                  <>
                  {generatedAgenda.agenda.length > 0 ? (
                    <div className="space-y-4">
                      {generatedAgenda.agenda.map((session, index) => (
                        <div key={index} className="rounded-lg border p-4 transition-all hover:shadow-md">
                          <h3 className="font-semibold">{session.title}</h3>
                          <p className="text-sm text-muted-foreground">{session.description}</p>
                          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                            <span className="font-medium">{session.time}</span>
                            <span>{session.speaker}</span>
                            <span>{session.location}</span>
                          </div>
                        </div>
                      ))}
                      <Button onClick={handleExport} className="mt-6 w-full">
                        <Download className="mr-2 size-4" />
                        Save to Calendar
                      </Button>
                    </div>
                  ) : (
                    <div className="flex h-64 flex-col items-center justify-center text-center">
                       <p className="mt-4 text-muted-foreground">
                        No sessions match your selected interests. Try selecting different ones!
                      </p>
                    </div>
                  )}
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
