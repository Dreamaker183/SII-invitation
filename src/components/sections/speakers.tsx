import Image from "next/image";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    type: "quote",
    quote: "Ultimately, what makes an entrepreneur is the internal drive and grit. It's something that you can't teach.",
    author: "Daphne Koller, Insitro",
    className: "bg-blue-200/20 text-foreground",
  },
  {
    type: "image-quote",
    image: "https://placehold.co/640x420",
    hint: "man portrait",
    quote: "THESE ARE OUR PEOPLE.",
    author: "Sam Altman, OpenAI",
    className: "",
  },
  {
    type: "image-only",
    image: "https://placehold.co/420x200",
    hint: "woman portrait",
    author: "Daphne Koller",
    className: "",
  },
   {
    type: "quote",
    quote: "The best startups are explicitly trying to make the world better.",
    author: "Paul Graham",
    className: "bg-red-500/20 text-foreground",
  },
  {
    type: "photo-quote",
    image: "https://placehold.co/200x200",
    hint: "man portrait",
    quote: "That's why I love that it's called the Startup Grind. It's a grind. It's freaking work. Work is what we do and it's going to be a grind. As Seth Godin says, \"you just gotta learn to dance with it\".",
    author: "Ryan Smith, Qualtrics & Utah Jazz",
    className: "bg-red-400/20 text-foreground",
  },
];

const allTestimonials = [...testimonials, ...testimonials];

export default function Speakers() {
  return (
    <section id="speakers" className="bg-background py-16 sm:py-24">
       <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Words from the Wise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Inspiration from the leaders who have been there and done that.
          </p>
        </div>
      <div className="relative mt-12 w-full overflow-x-auto [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max animate-scroll-left-slow">
          {allTestimonials.map((item, index) => (
            <div key={index} className="flex-shrink-0 px-3" style={{ width: "auto" }}>
              {item.type === "image-quote" && (
                <div
                  className={cn(
                    "relative h-[420px] w-[640px] overflow-hidden rounded-2xl",
                    item.className
                  )}
                >
                  <Image
                    src={item.image}
                    alt={`Photo of ${item.author}`}
                    width={640}
                    height={420}
                    className="h-full w-full object-cover"
                    data-ai-hint={item.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                    <blockquote className="font-headline text-4xl font-bold leading-tight">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <cite className="mt-4 not-italic font-semibold uppercase tracking-widest">
                      {item.author}
                    </cite>
                  </div>
                </div>
              )}
              {item.type === "quote" && (
                <div
                  className={cn(
                    "flex h-[200px] w-[420px] flex-col justify-between rounded-2xl p-8",
                    item.className
                  )}
                >
                   <blockquote className="text-lg font-medium">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <cite className="mt-4 not-italic font-semibold uppercase tracking-widest">
                      {item.author}
                    </cite>
                </div>
              )}
              {item.type === "image-only" && (
                 <div
                  className={cn(
                    "relative h-[200px] w-[420px] overflow-hidden rounded-2xl",
                    item.className
                  )}
                >
                  <Image
                    src={item.image}
                    alt={`Photo of ${item.author}`}
                    width={420}
                    height={200}
                    className="h-full w-full object-cover"
                     data-ai-hint={item.hint}
                  />
                </div>
              )}
              {item.type === "photo-quote" && (
                 <div
                  className={cn(
                    "flex h-[200px] w-[640px] items-center gap-6 rounded-2xl p-8",
                    item.className
                  )}
                >
                  <div className="relative h-[140px] w-[140px] flex-shrink-0 overflow-hidden rounded-full">
                     <Image
                      src={item.image}
                      alt={`Photo of ${item.author}`}
                      width={140}
                      height={140}
                      className="h-full w-full object-cover"
                       data-ai-hint={item.hint}
                    />
                  </div>
                   <div>
                    <blockquote className="text-base">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                    <cite className="mt-4 block not-italic font-semibold uppercase tracking-widest">
                      {item.author}
                    </cite>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
