import Link from 'next/link';

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
            <span key={index} className="flex items-center group bg-gray-200 hover:bg-orange-500 hover:text-white font-semibold px-5 py-2 rounded-full transition-all">
              <span className="w-7 h-7 flex items-center justify-center mr-2 text-orange-500 group-hover:text-white">
                <feature.icon className="h-5 w-5"/>
              </span>
              <span>{feature.name}</span>
            </span>
          ))}
        </div>
        {/* CTA Button */}
        <div className="flex justify-center gap-4">
          <Link href="#generator">
            <Button size="lg" className="group bg-orange-500 py-6 text-lg font-semibold hover:bg-orange-600 hover:-translate-y-1 transition-transform">
              <Wand2 className="h-5 w-5 group-hover:rotate-10 transition-transform" />
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};