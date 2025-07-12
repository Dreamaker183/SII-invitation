import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Logos from '@/components/sections/logos';
import Stats from '@/components/sections/stats';
import Schedule from '@/components/sections/schedule';
import Speakers from '@/components/sections/speakers';
import Tickets from '@/components/sections/tickets';
import Sponsors from '@/components/sections/sponsors';
import Location from '@/components/sections/location';
import Newsletter from '@/components/sections/newsletter';
import Footer from '@/components/layout/footer';
import SocialProof from '@/components/sections/social-proof';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Logos />
        <Stats />
        <SocialProof />
        <Schedule />
        <Speakers />
        <Sponsors />
        <Tickets />
        <Location />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
