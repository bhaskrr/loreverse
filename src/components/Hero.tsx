import { Feather } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="text-center py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Feather className="h-8 w-8 text-orange-400" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-shadow">
          Transform your notes into
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 animate-gradient font-extrabold text-5xl md:text-6xl block mt-2">
            memorable stories
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Turn dry notes and information into engaging, memorable stories that stick in your mind. 
          Perfect for students, writers, and knowledge workers who want to remember better.
        </p>
      </div>
    </section>
  );
};