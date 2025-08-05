import Image from "next/image";
import { ExternalLink, TrendingUp, Leaf, DollarSign } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const esgStartups = [
  {
    name: "GreenTech Solutions",
    description: "Revolutionary carbon capture technology for industrial applications",
    logo: "https://placehold.co/80x80/22c55e/ffffff?text=GT",
    category: "Carbon Capture",
    stage: "Series A",
    website: "https://greentech-solutions.com",
  },
  {
    name: "EcoSmart Energy",
    description: "AI-powered renewable energy optimization platform",
    logo: "https://placehold.co/80x80/10b981/ffffff?text=EE",
    category: "Renewable Energy",
    stage: "Seed",
    website: "https://ecosmart-energy.com",
  },
  {
    name: "Sustainable Supply",
    description: "Blockchain-based supply chain transparency for ESG compliance",
    logo: "https://placehold.co/80x80/059669/ffffff?text=SS",
    category: "Supply Chain",
    stage: "Series B",
    website: "https://sustainable-supply.com",
  },
];

const fintechStartups = [
  {
    name: "PayFlow Pro",
    description: "Next-generation payment processing with zero transaction fees",
    logo: "https://placehold.co/80x80/3b82f6/ffffff?text=PF",
    category: "Payments",
    stage: "Series C",
    website: "https://payflow-pro.com",
  },
  {
    name: "CryptoVault",
    description: "Secure digital asset management and DeFi yield optimization",
    logo: "https://placehold.co/80x80/8b5cf6/ffffff?text=CV",
    category: "DeFi",
    stage: "Series A",
    website: "https://cryptovault.com",
  },
  {
    name: "InsureTech AI",
    description: "AI-driven insurance underwriting and risk assessment platform",
    logo: "https://placehold.co/80x80/06b6d4/ffffff?text=IA",
    category: "Insurance",
    stage: "Seed",
    website: "https://insuretech-ai.com",
  },
];

export default function StartupShowcase() {
  return (
    <section id="startups" className="py-16 sm:py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Startup Showcase
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover innovative startups leading the future in ESG and Fintech. 
            Connect with founders, explore cutting-edge solutions, and find your next investment opportunity.
          </p>
        </div>

        {/* ESG Startups Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Leaf className="size-8 text-green-600" />
            <h3 className="text-2xl font-bold text-foreground">ESG Innovation</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {esgStartups.map((startup, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-lg overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                        <Image
                          src={startup.logo}
                          alt={startup.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">{startup.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                          {startup.category}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {startup.stage}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {startup.description}
                  </p>
                  <a
                    href={startup.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors group-hover:gap-3"
                  >
                    Visit Website
                    <ExternalLink className="size-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fintech Startups Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="size-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-foreground">Fintech Revolution</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fintechStartups.map((startup, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <Image
                          src={startup.logo}
                          alt={startup.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">{startup.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                          {startup.category}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {startup.stage}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {startup.description}
                  </p>
                  <a
                    href={startup.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group-hover:gap-3"
                  >
                    Visit Website
                    <ExternalLink className="size-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
            <CardContent className="pt-8 pb-8">
              <TrendingUp className="size-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Ready to Connect?</h3>
              <p className="text-muted-foreground mb-6">
                Join us at the conference to meet these innovative founders and discover more groundbreaking startups.
              </p>
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View Conference Schedule
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
