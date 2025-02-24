import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free",
    popular: PopularPlan.NO,
    price: 0,
    description:
      "Get started with basic image captioning capabilities at no cost.",
    buttonText: "Start Free Trial",
    benefitList: [
      "100 free captions/month",
      "Basic support",
      "Community access",
      "Limited API calls",
    ],
  },
  {
    title: "Premium",
    popular: PopularPlan.YES,
    price: 499,
    description:
      "Unlock enhanced captioning features and increased API limits for your projects.",
    buttonText: "Upgrade Now",
    benefitList: [
      "Unlimited captions",
      "Priority support",
      "Advanced analytics",
      "Faster processing",
    ],
  },
  {
    title: "Enterprise",
    popular: PopularPlan.NO,
    price: 999,
    description:
      "Custom solutions and dedicated support for high-volume, mission-critical applications.",
    buttonText: "Contact Us",
    benefitList: [
      "Custom API integrations",
      "Dedicated support",
      "Service level agreements",
      "Advanced customization options",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Affordable Access to Cutting-Edge Captioning
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that fits your needs and start transforming your images
        with our AI-driven captioning engine.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>
                <CardDescription className="pb-4">
                  {description}
                </CardDescription>
                <div>
                  <span className="text-3xl font-bold">₹{price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>
              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
