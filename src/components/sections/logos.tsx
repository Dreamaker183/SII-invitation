import Image from "next/image";

const logos = [
  { name: "Company A", src: "https://placehold.co/140x60" },
  { name: "Company B", src: "https://placehold.co/140x60" },
  { name: "Company C", src: "https://placehold.co/140x60" },
  { name: "Company D", src: "https://placehold.co/140x60" },
  { name: "Company E", src: "https://placehold.co/140x60" },
  { name: "Company F", src: "https://placehold.co/140x60" },
  { name: "Company G", src: "https://placehold.co/140x60" },
  { name: "Company H", src: "https://placehold.co/140x60" },
];

export default function Logos() {
  const allLogos = [...logos, ...logos]; // Duplicate for seamless scroll

  return (
    <div className="bg-background py-12">
      <div className="container mx-auto px-4">
        <p className="text-center font-semibold text-muted-foreground">
          Trusted by the world&apos;s most innovative companies
        </p>
        <div className="relative mt-6 overflow-hidden">
          <div className="flex w-max animate-scroll-left">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: "12rem" }}
              >
                <div className="mx-auto flex h-16 w-40 items-center justify-center p-2">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={60}
                    className="max-h-12 w-auto object-contain"
                    data-ai-hint="company logo"
                  />
                </div>
              </div>
            ))}
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
