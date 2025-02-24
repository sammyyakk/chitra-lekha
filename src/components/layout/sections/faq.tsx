import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is the Deep Vision Semantics Encoder?",
    answer:
      "It’s a cutting-edge image captioning engine that leverages a modified ResNet-50 for feature extraction and an LSTM decoder to generate context-aware captions.",
    value: "item-1",
  },
  {
    question: "How does the image captioning process work?",
    answer:
      "Our model first extracts rich visual features using ResNet-50 and then decodes them into natural language descriptions with an LSTM, effectively bridging vision and language.",
    value: "item-2",
  },
  {
    question: "Which dataset is used for training?",
    answer:
      "We train our engine on the COCO dataset, which provides diverse and high-quality image-caption pairs to ensure robust performance.",
    value: "item-3",
  },
  {
    question: "Can I integrate this captioning engine into my application?",
    answer:
      "Absolutely. The solution is designed with a modular API, making integration seamless and adaptable to various platforms.",
    value: "item-4",
  },
  {
    question: "How do I get support or contribute?",
    answer:
      "Visit our GitHub repository to access documentation, join our Team Semantix community, and contribute to the project or get help.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary mb-2 tracking-wider">FAQs</h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Frequently Asked Questions
        </h2>
      </div>
      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
