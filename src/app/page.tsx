"use client";

import { HeroSection } from "@/components/Hero";
import { Features } from "@/components/Features";
import { StoryGenerator } from "@/components/StoryGenerator";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <StoryGenerator />
    </>
  );
}
