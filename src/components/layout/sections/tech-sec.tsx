"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
import { useTheme } from "next-themes";

interface ModuleProps {
  icon: string;
  name: string;
}

const techServices: ModuleProps[] = [
  // Backend Technologies & Services
  { icon: "Flame", name: "PyTorch" },
  { icon: "Image", name: "ResNet-50" },
  { icon: "Brain", name: "LSTM" },
  { icon: "Code", name: "Python" },
  { icon: "Camera", name: "OpenCV" },
  { icon: "Globe", name: "Flask" },
  { icon: "MessageSquare", name: "NLTK" },
  // Frontend Technologies & Services
  { icon: "Zap", name: "Next.js" },
  { icon: "Sun", name: "Tailwind CSS" },
  { icon: "Atom", name: "React" },
  { icon: "FileText", name: "TypeScript" },
  { icon: "BookOpenText", name: "Nextra" },

  // Additional Tools
  { icon: "Layers", name: "COCO Dataset" },
];

export const TechServicesSection = () => {
  const { theme } = useTheme();
  const iconColor = theme === "dark" || !theme ? "white" : "black";

  return (
    <section id="tech-services" className="max-w-[75%] mx-auto pb-8 sm:pb-10 max-h-60">
      <h2 className="text-lg text-primary tracking-wider font-bold text-center">
        Tech & Services
      </h2>
      <br />
      <div className="mx-auto">
        <Marquee className="gap-[3rem]" fade innerClassName="gap-[3rem]" pauseOnHover={false}>
          {techServices.map(({ icon, name }) => (
            <div key={name} className="flex items-center text-xl md:text-2xl font-medium group">
              <Icon
                name={icon as keyof typeof icons}
                size={28}
                color={iconColor}
                className="mr-2 transition-transform group-hover:scale-110"
              />
              <span className="transition-transform group-hover:scale-110">
                {name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
