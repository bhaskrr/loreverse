'use client';

import { Feather, Loader2, Settings2, Wand2 } from "lucide-react";

import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from "./ui/label";
import { useState } from "react";

export function StoryGenerator() {
    // State variables
    const [notes, setNotes] = useState("");
    const [story, setStory] = useState("");
    const [tone, setTone] = useState("engaging");
    const [length, setLength] = useState("medium");
    const [isGenerating, setIsGenerating] = useState(false);

  const generateStory = async () => {
    if (!notes.trim()) {
      return;
    }
    setIsGenerating(true);

    const res = await fetch("/api/generate-story", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          notes: notes,
          tone: tone,
          length: length,
        }
      ),
    });

    const data = await res.json();
    setStory(data.story);
    setIsGenerating(false);
  };

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

          {/* Story Settings Section */}
          <div className="relative bg-white/80 border border-primary/30 shadow-lg rounded-xl p-6 mt-2 mb-4 transition-all">
            {/* <div className="absolute -left-3 top-6 h-10 w-1 bg-gradient-to-b from-orange-400 to-primary rounded-full" /> */}
            <div className="flex items-center gap-3 mb-2">
              <Settings2 className="h-5 w-5" />
              <span className="font-bold drop-shadow">Story Settings</span>
            </div>
            <p className="text-sm text-foreground mb-4">
              Customize your story for the perfect fit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="tone-select" className="text-sm font-semibold text-foreground">
                  Story Tone
                </Label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger id="tone-select" className="bg-gray-100 border-primary/40 text-foreground shadow-sm focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engaging">Engaging & Memorable</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="creative">Creative & Imaginative</SelectItem>
                    <SelectItem value="academic">Academic & Formal</SelectItem>
                    <SelectItem value="casual">Casual & Friendly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="length-select" className="text-sm font-semibold text-foreground">
                  Story Length
                </Label>
                <Select value={length} onValueChange={setLength}>
                  <SelectTrigger id="length-select" className="bg-gray-100 border-primary/40 text-foreground shadow-sm focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short & Concise</SelectItem>
                    <SelectItem value="medium">Medium Length</SelectItem>
                    <SelectItem value="long">Detailed & Comprehensive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button
            className="w-full sm:w-auto bg-orange-400 font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-200"
            onClick={generateStory}
            disabled={isGenerating}
          >
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
      {/* Output Section */}
      {story && (
        <Card className="story-gradient border-border/50 shadow-lg animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Feather className="h-5 w-5 text-primary" />
                Your Story
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent>
            <div className="prose prose-lg max-w-none text-foreground">
              <div className="bg-background/30 rounded-lg p-4 leading-relaxed text-base whitespace-pre-line">
                {story}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
