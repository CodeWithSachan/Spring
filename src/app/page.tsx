import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TerminalBlock from "@/components/ViewProjects";
import WhatIsSpring from "@/components/WhatIsSpring";
import HowItWorks from "@/components/ContributionFlow";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Timeline from "@/components/Timeline";
import CTA from "@/components/Community";
import Footer from "@/components/Footer";

export default function SpringPage() {
  return (
    <main className="bg-spring-bg text-white overflow-x-hidden">
      <div>
        <Hero />
      </div>


      <div id="features">
        <Features />
      </div>
      
      <TerminalBlock />
      <WhatIsSpring />
      <HowItWorks />
      <WhoIsThisFor />
      
      <div id="timeline">
        <Timeline />
      </div>
      
      <CTA />
      <Footer />
    </main>
  );
}