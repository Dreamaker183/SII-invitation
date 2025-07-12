"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
});

type NewsletterForm = z.infer<typeof NewsletterSchema>;

export default function Newsletter() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterForm>({
    resolver: zodResolver(NewsletterSchema),
  });

  const onSubmit: SubmitHandler<NewsletterForm> = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Newsletter submission:", data);

    toast({
      title: "Subscribed!",
      description: "Thanks for subscribing to our newsletter.",
    });
    reset();
  };

  return (
    <section id="newsletter" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl bg-primary/10 px-6 py-12 shadow-lg sm:px-12 lg:px-16">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-primary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Stay in the Loop
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Subscribe to our newsletter for the latest updates, speaker
              announcements, and exclusive offers.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:items-start"
            >
              <div className="w-full max-w-md">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  {...register("email")}
                  className="text-center sm:text-left"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
