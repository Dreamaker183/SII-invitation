import Image from "next/image";

const organizer = {
  name: "Hong Kong New Generation Cultural Association",
  subName: "創立於1974年公共性質慈善機構",
  logo: "https://placehold.co/250x100",
  hint: "association logo",
};

const fundingOrg = {
  name: "Innovation and Technology Commission",
  logo: "https://placehold.co/200x100",
  hint: "commission logo",
};

const partner = {
  name: "Bank of China (Hong Kong)",
  logo: "https://placehold.co/200x100",
  hint: "bank logo",
};

const coOrganizers = [
  { name: "The University of Hong Kong", logo: "https://placehold.co/160x80", hint: "university logo" },
  { name: "The Chinese University of Hong Kong", logo: "https://placehold.co/160x80", hint: "university logo" },
  { name: "The Hong Kong University of Science and Technology", logo: "https://placehold.co/160x80", hint: "university logo" },
  { name: "The Hong Kong Polytechnic University", logo: "https://placehold.co/160x80", hint: "university logo" },
  { name: "City University of Hong Kong", logo: "https://placehold.co/160x80", hint: "university logo" },
  { name: "Hong Kong Baptist University", logo: "https://placehold.co/160x80", hint: "university logo" },
  { name: "Lingnan University", logo: "https://placehold.co/160x80", hint: "university logo" },
  { name: "The Education University of Hong Kong", logo: "https://placehold.co/160x80", hint: "university logo" },
  { name: "Hong Kong Metropolitan University", logo: "https://placehold.co/160x80", hint: "university logo" },
  { name: "The Hang Seng University of Hong Kong", logo: "https://placehold.co/160x80", hint: "university logo" },
  { name: "Hong Kong Shue Yan University", logo: "https://placehold.co/160x80", hint: "university logo" },
  { name: "Saint Francis University", logo: "https://placehold.co/160x80", hint: "university logo" },
  { name: "Tung Wah College", logo: "https://placehold.co/160x80", hint: "college logo" },
  { name: "VTC", logo: "https://placehold.co/160x80", hint: "education logo" },
  { name: "Cyberport", logo: "https://placehold.co/160x80", hint: "tech logo" },
  { name: "Hong Kong Software Industry Association", logo: "https://placehold.co/160x80", hint: "association logo" },
];

export default function SponsorsGrid() {
  return (
    <section id="sponsors" className="bg-primary/5 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Organizer */}
        <div className="mb-12 text-center">
          <h3 className="text-xl font-semibold text-muted-foreground">主辦機構</h3>
          <h2 className="mb-4 text-3xl font-bold text-primary">Organizer</h2>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={organizer.logo}
              alt={organizer.name}
              width={250}
              height={100}
              className="mb-2 max-h-24 w-auto object-contain"
              data-ai-hint={organizer.hint}
            />
            <p className="font-semibold text-foreground">{organizer.name}</p>
            <p className="text-sm text-muted-foreground">{organizer.subName}</p>
          </div>
        </div>

        {/* Funding and Partner */}
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-muted-foreground">贊助機構</h3>
            <h2 className="mb-4 text-3xl font-bold text-primary">Funding Organization</h2>
            <div className="flex justify-center">
              <Image
                src={fundingOrg.logo}
                alt={fundingOrg.name}
                width={200}
                height={100}
                className="max-h-24 w-auto object-contain"
                data-ai-hint={fundingOrg.hint}
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-muted-foreground">夥伴機構</h3>
            <h2 className="mb-4 text-3xl font-bold text-primary">Partner</h2>
            <div className="flex justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={100}
                className="max-h-24 w-auto object-contain"
                data-ai-hint={partner.hint}
              />
            </div>
          </div>
        </div>

        {/* Co-Organizers */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-muted-foreground">協辦機構</h3>
          <h2 className="mb-8 text-3xl font-bold text-primary">Co-Organizers</h2>
          <div className="grid grid-cols-2 place-items-center gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {coOrganizers.map((sponsor, index) => (
              <div
                key={index}
                className="flex h-20 w-40 items-center justify-center p-2"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain transition-transform hover:scale-105"
                  data-ai-hint={sponsor.hint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
