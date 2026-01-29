// import Hero from "@/components/Hero";
// import Features from "@/components/Features";
// import TerminalBlock from "@/components/ViewProjects";
// import WhatIsSpring from "@/components/WhatIsSpring";
// import HowItWorks from "@/components/ContributionFlow";
// import WhoIsThisFor from "@/components/WhoIsThisFor";
// import Timeline from "@/components/Timeline";
// import CTA from "@/components/Community";
// import Footer from "@/components/Footer";

// export default function SpringPage() {
//   return (
//     <main className="bg-spring-bg text-white overflow-x-hidden">
//       <div>
//         <Hero />
//       </div>


//       <div id="features">
//         <Features />
//       </div>
      
//       <TerminalBlock />
//       <WhatIsSpring />
//       <HowItWorks />
//       <WhoIsThisFor />
      
//       <div id="timeline">
//         <Timeline />
//       </div>
      
//       <CTA />
//       <Footer />
//     </main>
//   );
// }

import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TerminalBlock from "@/components/ViewProjects";
import WhatIsSpring from "@/components/WhatIsSpring";
import HowItWorks from "@/components/ContributionFlow";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Timeline from "@/components/Timeline";
import CTA from "@/components/Community";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spring of Silicality — Open Source Programs & Contributions",
  description:
    "Spring of Silicality is a guided open-source program helping beginners and students make real, meaningful contributions to production-grade software through mentorship, projects, and community support.",

  alternates: {
    canonical: "https://spring.silicality.com",
  },

  openGraph: {
    title: "Spring of Silicality — Open Source Programs",
    description:
      "A seasonal open-source contribution program by Silicality helping beginners build real software with mentorship and real-world projects.",
    url: "https://spring.silicality.com",
    siteName: "Silicality",
    images: [
      {
        url: "https://silicality.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Spring of Silicality",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Spring of Silicality — Open Source Contributions",
    description:
      "Learn open source by contributing to real projects with guidance, mentorship, and community.",
    images: ["https://silicality.com/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function SpringPage() {
  return (
    <main className="bg-spring-bg text-white overflow-x-hidden">
      <Hero />
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
