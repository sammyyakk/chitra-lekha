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
import { motion } from "framer-motion";

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
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetIndex = sectionsRef.current.findIndex(
              (el) => el === entry.target
            );
            if (targetIndex !== -1) {
              setActiveSection(targetIndex);
            }
          }
        });
      },
      { threshold: 0.2 } // Lowered for better detection
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative">
      {sections.map((SectionGroup, index) => (
        <motion.div
          key={index}
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
          className="w-full flex flex-col items-center justify-center py-20 transition-opacity duration-500"
          style={{
            opacity: activeSection === index ? 1 : 0.5,
            transform: `translateY(${activeSection === index ? "0px" : "90px"})`,
          }}
        >
          <div className="w-full max-w-8xl flex flex-col gap-16">
            {SectionGroup.map((Component, subIndex) => (
              <Component key={subIndex} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
