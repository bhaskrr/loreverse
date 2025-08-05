import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Pencil, Zap, Settings, Heart, Globe } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Creativity",
    description:
      "Advanced AI understands your vision and creates unique, engaging stories tailored to your preferences.",
    badge: "Smart",
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description:
      "Get complete stories in seconds, not hours. Perfect for inspiration, entertainment, or creative writing practice.",
    badge: "Fast",
  },
  {
    icon: Settings,
    title: "Smart Customization",
    description:
      "Fine-tune every aspect of your story with intelligent controls for tone, style, and narrative elements.",
    badge: "Flexible",
  },
  {
    icon: Pencil,
    title: "Editable Drafts",
    description:
      "Take full control of your story by editing AI-generated drafts directly — perfect for writers who want to co-create.",
    badge: "Co-Creative",
  },
  {
    icon: Heart,
    title: "Rich Storytelling",
    description:
      "Create compelling narratives with depth, emotion, and engaging plot developments tailored to your vision.",
    badge: "Engaging",
  },
  {
    icon: Globe,
    title: "Endless Possibilities",
    description:
      "Explore unlimited creative combinations with advanced parameters and story customization options.",
    badge: "Limitless",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="min-h-screen flex items-center bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Why Choose Our Story Generator?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the powerful features that make Loreverse your ultimate
            storytelling companion.
          </p>
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border border-border/50 hover:border-orange-500 transition-all duration-500 hover:shadow-elegant bg-card/50 backdrop-blur-sm hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl group-hover:bg-orange-500 group-hover:translate-y-1 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-orange-500 group-hover:text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-orange-500 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
