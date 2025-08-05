import Image from "next/image";

const organizer = {
  name: "UDFO",
  subName: "創立於1974年公共性質慈善機構",
  logo: "/image/octagon.png",
  hint: "udfo logo",
};

const fundingOrg = {
  name: "InvestHK",
  logo: "/image/investhk-logo.png",
  hint: "investhk logo",
  link: "https://www.investhk.gov.hk/zh-hk/",
};

const partner = {
  name: "I V S",
  logo: "/image/organizer-logo.png",
  hint: "ivs logo",
  link: "https://www.ivs.events/",
};

const coOrganizers = [
  { name: "The University of Hong Kong", logo: "/image/co-organizer/University_of_Hong_Kong-Logo.wine.png", hint: "university logo", size: "max-h-50", link: "https://www.hku.hk/" },
  { name: "The Chinese University of Hong Kong", logo: "/image/co-organizer/Chinese_University_of_Hong_Kong-Logo.wine.png", hint: "university logo", size: "max-h-60", link: "https://www.cuhk.edu.hk/chinese/index.html" },
  { name: "The Hong Kong University of Science and Technology", logo: "/image/co-organizer/Hong_Kong_University_of_Science_and_Technology-Logo.wine.png", hint: "university logo", size: "max-h-20", link: "https://hkust.edu.hk/zh-hant" },
  { name: "City University of Hong Kong", logo: "/image/co-organizer/CityU_logo.svg.png", hint: "university logo", size: "max-h-11", link: "https://www.cityu.edu.hk/zh-hk" },
  { name: "The Hong Kong Polytechnic University", logo: "/image/co-organizer/main-logo-3x.png", hint: "university logo", size: "max-h-20", link: "https://www.polyu.edu.hk/" },
];

export default function SponsorsGrid() {
  return (
    <section id="sponsors" className="bg-primary/5 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Organizer */}
        <div className="mb-12 text-center">
          <h3 className="text-xl font-semibold text-muted-foreground">主辦機構</h3>
          <h2 className="mb-4 text-3xl font-bold text-gradient">Organizer</h2>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={organizer.logo}
              alt="Organizer Logo"
              width={250}
              height={100}
              className="mb-2 max-h-20 w-auto object-contain"
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
            <h2 className="mb-4 text-3xl font-bold text-gradient">Funding Organization</h2>
            <div className="flex justify-center">
              <a href={fundingOrg.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={fundingOrg.logo}
                  alt={fundingOrg.name}
                  width={200}
                  height={100}
                  className="max-h-24 w-auto object-contain"
                  data-ai-hint={fundingOrg.hint}
                />
              </a>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-muted-foreground">夥伴機構</h3>
            <h2 className="mb-4 text-3xl font-bold text-gradient">Partner</h2>
            <div className="flex justify-center">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={100}
                  className="max-h-32 w-auto object-contain"
                  data-ai-hint={partner.hint}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Co-Organizers */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-muted-foreground">協辦機構</h3>
          <h2 className="mb-8 text-3xl font-bold text-gradient">Co-Organizers</h2>
          <div className="grid grid-cols-2 place-items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {coOrganizers.map((sponsor, index) => (
              <div
                key={index}
                className="flex h-28 w-52 items-center justify-center p-2"
              >
                <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={160}
                    height={80}
                    className={`${sponsor.size} w-auto object-contain transition-transform hover:scale-105`}
                    data-ai-hint={sponsor.hint}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
