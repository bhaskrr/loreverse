import Link from 'next/link';

import { motion } from "motion/react";

import { Feather, Settings2, Sparkles, Wand2, Zap } from 'lucide-react';

import { TypingAnimation } from './TypingAnimation';

import { Button } from './ui/button';

export const HeroSection = () => {
  // Words for typing animation
  const words = ['notes', 'summaries', 'thoughts', 'ideas', 'research', 'documents'];
  // Features
  const features = [
    {name: "AI-Powered", icon: Sparkles},
    {name: "Fast & Easy", icon: Zap},
    {name: "Customizable", icon: Settings2},
  ];
  return (
    <section className="min-h-screen flex items-center text-center py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Feather className="h-8 w-8 text-orange-400" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-shadow">
          Transform your <TypingAnimation 
            words={words}
            className="text-transparent bg-clip-text bg-orange-400 font-extrabold"
          />
          <span className="block text-5xl md:text-6xl">into&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 animate-gradient font-extrabold text-5xl md:text-6xl mt-2">
              memorable stories
            </span>
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Turn dry notes and information into engaging, memorable stories that stick in your mind.
        </p>
        
        {/* Feature Highlights */}
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{
                scale: 0.8,
                y: 40,
                opacity: 0,
                rotate: index % 2 === 0 ? -6 : 6,
              }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                rotate: index % 2 === 0 ? -2 : 2,
              }}
              transition={{
                type: false,
                delay: 0.2 + index * 0.2,
              }}
              className="relative flex flex-col items-center justify-center bg-yellow-100 border-2 border-yellow-300 rounded-lg w-32 min-h-[80px] shadow-lg transition-transform hover:scale-105 hover:-rotate-2"
              style={{
                zIndex: 1,
              }}
            >
              {/* Icon */}
              <span className="w-7 h-7 flex items-center justify-center mb-1 text-orange-600">
                <feature.icon className="h-5 w-5" />
              </span>
              {/* Feature text */}
              <span className="text-sm font-semibold text-yellow-900 text-center px-2">
                {feature.name}
              </span>
            </motion.div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="flex justify-center gap-4">
          <Link href="#generator">
            <Button size="lg" className="group bg-orange-500 py-6 text-lg font-semibold hover:bg-orange-600 hover:-translate-y-1 hover:shadow-lg transition-transform">
              <Wand2 className="h-5 w-5 group-hover:rotate-10 transition-transform" />
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};