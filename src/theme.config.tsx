import Link from "next/link";
import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { FooterSection } from "@/components/layout/sections/footer";
import { Icon } from "@/components/ui/icon";
import { NotFoundPage } from "nextra-theme-docs"; // Import NotFoundPage

interface ExtendedDocsThemeConfig extends DocsThemeConfig {
  staticImage?: boolean;
}

const config: ExtendedDocsThemeConfig = {
  logo: (
    <Link href="/" className="flex items-center gap-2">
      <Icon
        name="Camera"
        size={28}
        className="mr-2 transition-transform group-hover:scale-110"
      />
      <span className="font-samarkan text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-transparent bg-clip-text">
        Chitra Lekha
      </span>
    </Link>
  ),
  footer: {
    content: <FooterSection />, // Replace default footer with your custom FooterSection
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  staticImage: true,

  main: ({ children }: { children: ReactNode }) => (
    <AnimatePresence mode="wait">
      <motion.div
        key={typeof window !== "undefined" ? window.location.pathname : ""}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  ),
  // Add default configuration for NotFoundPage
  notFound: {
    content: "Submit an issue about broken link", // Customize default content
    labels: "broken-link", // Default labels for issues
  },
};

export default config;
