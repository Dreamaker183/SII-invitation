import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
import Stats from '@/components/sections/stats';
import Schedule from '@/components/sections/schedule';
import Speakers from '@/components/sections/speakers';
import SponsorsGrid from '@/components/sections/sponsors-grid';
import Sponsors from '@/components/sections/sponsors';
import Location from '@/components/sections/location';
import Newsletter from '@/components/sections/newsletter';
import SocialProof from '@/components/sections/social-proof';
import Footer from '@/components/layout/footer';
import { FadeInSection } from '@/components/fade-in-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <FadeInSection>
          <Hero />
        </FadeInSection>
        <FadeInSection>
          <Logos />
        </FadeInSection>
        <Stats />
        <FadeInSection>
          <SocialProof />
        </FadeInSection>
        <Schedule />
        <FadeInSection>
          <Speakers />
        </FadeInSection>
        <FadeInSection>
          <Sponsors />
        </FadeInSection>
        <FadeInSection>
          <SponsorsGrid />
        </FadeInSection>
        <FadeInSection>
          <Location />
        </FadeInSection>
        <FadeInSection>
          <Newsletter />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
