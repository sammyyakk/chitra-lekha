import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Image",
    title: "Accurate Captions",
    description:
      "Our CNN-RNN model, powered by ResNet-50 and LSTM, generates detailed, context-aware captions that truly capture the essence of every image.",
  },
  {
    icon: "Accessibility",
    title: "Enhanced Accessibility",
    description:
      "Automatically generated captions improve accessibility, making your visual content inclusive and engaging for all users.",
  },
  {
    icon: "Zap",
    title: "Real-Time Processing",
    description:
      "Experience fast and efficient image captioning with our optimized deep learning pipeline, designed for dynamic, real-world applications.",
  },
  {
    icon: "Link",
    title: "Easy Integration",
    description:
      "Seamlessly integrate our image captioning solution into your applications with minimal effort and maximum impact.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Image Understanding
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our deep vision semantics encoder revolutionizes the way images are analyzed and described, delivering cutting-edge AI solutions tailored for modern applications.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
