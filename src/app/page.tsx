"use client";

import { HeroSection } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { StoryGenerator } from "@/components/StoryGenerator";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <HowItWorks />
      <StoryGenerator />
    </>
  );
}
