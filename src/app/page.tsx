"use client";

import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { TechServicesSection } from "@/components/layout/sections/tech-sec";
import { TeamSection } from "@/components/layout/sections/team";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const sections = [
  [HeroSection, TechServicesSection], // Grouped together
  [BenefitsSection],
  [FeaturesSection],
  [TeamSection],
  [PricingSection],
  [ContactSection],
  [FAQSection, FooterSection], // Grouped together
];

export default function Home() {
  return (
    <div className="relative w-full">
      {sections.map((SectionGroup, index) => (
        <SectionWrapper key={index}>
          {SectionGroup.map((Component, subIndex) => (
            <Component key={subIndex} />
          ))}
        </SectionWrapper>
      ))}
    </div>
  );
}

// ✨ Wrapper to animate sections as they appear
function SectionWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-center min-h-screen"
    >
      <div className="w-full max-w-8xl flex flex-col gap-16">{children}</div>
    </motion.div>
  );
}
