'use client';

import { Loader2, Wand2 } from "lucide-react";

import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

import { useState } from "react";

export function StoryGenerator() {
    // State variables
    const [notes, setNotes] = useState("");
    const [isGenerating, setIsgenerating] = useState(false);
  return (
    <div className="max-w-4xl mx-auto px-6 space-y-8">
      {/* Input Section */}
      <Card className="story-gradient border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Wand2 className="h-5 w-5 text-orange-400" />
            Your Notes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Paste or write your notes here... anything from study notes, meeting minutes, research findings, or random thoughts. The more detailed, the richer your story will be!"
            className="min-h-[200px] resize-none text-base leading-relaxed bg-background/50 border-border/50 focus:border-primary transition-colors"
          />

          <Button className="w-full sm:w-auto bg-orange-400 font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-200">
            {isGenerating ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Crafting your story...
              </>
            ) : (
              <>
                <Wand2 className="h-5 w-5 mr-2" />
                Generate Story
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
