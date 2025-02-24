import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Settings",
    title: "Innovative Encoder",
    description:
      "Harnessing a modified ResNet-50 to extract deep, rich features, our encoder redefines image understanding.",
  },
  {
    icon: "Clock",
    title: "Dynamic Decoder",
    description:
      "Our LSTM-based decoder generates context-aware, fluid captions—turning static images into engaging stories.",
  },
  {
    icon: "Layers",
    title: "Modular Pipeline",
    description:
      "A flexible, modular design lets you fine-tune both encoder and decoder components for custom applications.",
  },
  {
    icon: "TrendingUp",
    title: "Efficient Training",
    description:
      "Advanced training techniques and smart data augmentation drive superior model performance and fast learning.",
  },
  {
    icon: "Database",
    title: "Dataset-Driven Insights",
    description:
      "Built on high-quality datasets like COCO, our model learns from diverse visual content to enhance caption accuracy.",
  },
  {
    icon: "Rocket",
    title: "Deployment Ready",
    description:
      "Engineered for real-world use, our solution offers low latency and scalable performance to power production environments.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Powering Next-Gen Image Captioning
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Dive into the technical innovations that make our deep vision semantics encoder a game-changer in AI-driven image captioning.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex flex-col items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>
                <CardTitle className="text-center">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
