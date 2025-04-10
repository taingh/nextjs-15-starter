import { HomePageHero } from "@/components/home/hero"; // Import HomePageHero component
import { useTranslations } from "next-intl";
import { FAQ } from "./faq";
import { Features } from "./feature";
import WhatIs from "./WhatIs";

export default function HomeComponent() {
  const t = useTranslations("Home");

  return (
    <div className="relative"> {/* Ensure parent is relative */}
      {/* Content container */}
      <div className="relative z-10"> {/* Ensure content is above background */}
        <HomePageHero />
        <WhatIs />
        <Features />
        <FAQ />
      </div>
    </div>
  );
}
