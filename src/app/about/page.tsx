import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, PenLine, Drama } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

// Objectives and Users array
const objectives = [
  {
    title: "Our Mission",
    description:
      "We believe everyone has a story to tell. Our goal is to eliminate \
      creative friction by building AI tools that help people express \
      their ideas through rich, engaging narratives.",
  },
  {
    title: "Our Vision",
    description:
      "To become the go-to platform for AI-powered creativity — helping \
        students, writers, and creators unlock their storytelling potential.",
  },
];

const users = [
  {
    icon: PenLine,
    title: "Writers",
    description:
      "Overcome writer’s block and spark new ideas with instant story drafts.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Improve storytelling skills, practice writing prompts, or get inspired.",
  },
  {
    icon: Drama,
    title: "Creators",
    description:
      "Generate short stories, scripts, and concepts for content and media.",
  },
];
export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="container max-w-4xl mx-auto px-4 ">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            About Us
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
            Empowering Creativity Through AI
          </h1>
          <p className="text-md w-sm md:w-lg lg:w-2xl md:text-lg text-muted-foreground mx-auto">
            We’re on a mission to make storytelling more accessible,
            imaginative, and fun for everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {objectives.map((objective) => (
            <Card
              key={objective.title}
              className="shadow-lg hover:border-orange-500 hover:shadow-xl hover:-translate-y-2 transition-all"
            >
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl md:text-4xl">
                  {objective.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-md md:text-lg">
                  {objective.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Who It’s For</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Whether you’re a writer, educator, hobbyist, or just someone who
            loves stories — we’ve built this tool for you.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {users.map((user) => {
              const IconComponent = user.icon;
              return (
                <Card
                  key={user.title}
                  className="shadow-lg group hover:border-orange-500 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <CardHeader className="flex flex-col gap-3 text-xl">
                    <div className="p-2 rounded-xl group-hover:bg-orange-500 group-hover:translate-y-1 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-orange-500 group-hover:text-white" />
                    </div>
                    <div className="text-left">
                      {user.title}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-left">{user.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Story?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Jump into the story generator and see what your imagination and AI
            can create together.
          </p>
          <Link href="/#input">
            <Button size="lg" className="font-semibold bg-orange-500 hover:bg-orange-600 hover:-translate-y-2 transition-all duration-500">
              Try It Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
