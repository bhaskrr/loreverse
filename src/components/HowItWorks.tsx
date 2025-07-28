"use client";

import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Tell us what kind of story you want - a simple prompt is all it takes to get started.",
  },
  {
    number: "02",
    title: "Customize Settings",
    description:
      "Choose your genre, tone, length, and other preferences to shape your perfect story.",
  },
  {
    number: "03",
    title: "AI Creates Magic",
    description:
      "Our advanced AI processes your input and crafts a unique, engaging story just for you.",
  },
  {
    number: "04",
    title: "Read & Enjoy",
    description:
      "Get your completed story instantly and enjoy your personalized creation.",
  },
];

const StepCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      key={number}
      className="group relative flex items-start gap-5 p-4 rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-orange-50 border border-orange-100 shadow-xl transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Step Number */}
      <div className="flex flex-col items-center gap-4 flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-orange-100 group-hover:bg-orange-500 transition-colors duration-300 flex items-center justify-center border-2 border-orange-200 shadow">
          <span className="text-xl font-bold text-orange-500 group-hover:text-white transition-colors duration-300">
            {number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2 text-orange-700 group-hover:text-orange-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-orange-900/80 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section
      id="howitworks"
      className="min-h-screen relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-16 overflow-hidden text-foreground"
    >
      {/* Heading Section */}
      <div className="relative text-center max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          How It works
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-clip-text">
          From Prompt to Story in Seconds
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Creating your perfect story is as easy as 1-2-3-4. Here&apos;s how our
          AI story generator works.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Illustration */}
        <div className="relative">
          <Image
            className="w-full"
            src="/steps.svg"
            alt="Steps illustration"
            width={200}
            height={200}
          />
        </div>

        {/* Right side - Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            return (
              <StepCard
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
