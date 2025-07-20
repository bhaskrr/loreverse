'use client';

import { Copy, Feather, Loader2, RefreshCw, Settings2, Wand2 } from "lucide-react";

import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card, CardAction, CardDescription, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from "./ui/label";
import { toast } from "sonner";
import { useState } from "react";

export function StoryGenerator() {
    // State variables
    const [notes, setNotes] = useState("");
    const [story, setStory] = useState("");
    const [tone, setTone] = useState("engaging");
    const [length, setLength] = useState("medium");
    const [timePeriod, setTimePeriod] = useState("modern-day");
    const [intention, setIntention] = useState('knowledge');
    const [theme, setTheme] = useState("personal-growth");
    const [genre, setGenre] = useState("inspirational");
    const [isGenerating, setIsGenerating] = useState(false);
    const [isRegenerating, setIsRegenerating] = useState(false);
    const [notesError, setNotesError] = useState("");
    const [disabled, setDisabled] = useState(true);

    const handleInputChange = (e) => {
      const input = e.target.value;

      setNotes(input);

      if (!input.trim()){
        setNotesError("Notes can not be empty!");
        setDisabled(true);
      }
      else{
        setNotesError("");
        setDisabled(false);
      }
    }

  const generateStory = async () => {
    if (!notes.trim()) {
      setNotesError("Notes can not be empty!");
      setDisabled(true);
      return;
    }
    else {
      setNotesError("");
    }

    setIsGenerating(true);

    try {
    const res = await fetch("/api/generate-story", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          notes: notes,
          tone: tone,
          length: length,
          setting: timePeriod,
          goal: intention,
        }
      ),
    });

    const data = await res.json();
    setStory(data.story);
    setIsGenerating(false);
    }
    catch (err){
      setNotesError(err.message);
      setIsGenerating(false);
    }
  };

  const regenerateStory = async () => {
    if (!notes.trim()) {
      setNotesError("Notes can not be empty!");
      setDisabled(true);
      return;
    }
    else {
      setNotesError("");
    }

    setIsRegenerating(true);

    try {

    const res = await fetch("/api/generate-story", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          notes: notes,
          tone: tone,
          length: length,
          setting: timePeriod,
          goal: intention,
        }
      ),
    });

    const data = await res.json();
    setStory(data.story);
    setIsRegenerating(false);
    }
    catch(err){
      setNotesError(err.message);
    }
  };

  const handleStoryEdit = (e) => {
    const editedStory = e.target.value;
    setStory(editedStory);
  }

  const copyStory = () => {
    navigator.clipboard.writeText(story);
    toast("Copied to clipboard!", {
      action: {
      label: "x",
      onClick: () => console.log("Undo"),
      },
    }
  );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 space-y-8">
      {/* Tips Section */}
      <Card className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 dark:from-blue-950/10 dark:to-indigo-950/10 border-blue-200/50 dark:border-blue-800/30">
        <CardContent>
              <h3 className="font-medium text-blue-900 dark:text-blue-100 text-sm">💡 Perfect for study notes, meeting minutes, research findings, or any thoughts you want to remember</h3>
        </CardContent>
      </Card>
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
            onChange={handleInputChange}
            placeholder="Paste or write your notes here... anything from study notes, meeting minutes, research findings, or random thoughts. The more detailed, the richer your story will be!"
            className="min-h-[200px] resize-none text-base leading-relaxed bg-background/50 border-border/50 focus:border-primary transition-colors"
          />
          {/* Display Errors */}
          {notesError ? (
            <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
              <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">{notesError}</span>
              </div>
            </div>
          )
          : ""}

          {/* Story Settings Section */}
          <div className="relative bg-white/80 border border-primary/30 shadow-lg rounded-xl p-6 mt-2 mb-4 transition-all">
            {/* <div className="absolute -left-3 top-6 h-10 w-1 bg-gradient-to-b from-orange-400 to-primary rounded-full" /> */}
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-400 p-3 rounded-lg shadow-lg">
                <Settings2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Story Customization</h3>
                <p className="text-sm font-normal">Tailor your story to perfection</p>
              </div>
              </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="focus-select" className="text-sm font-semibold text-foreground">
                  Learning Focus
                </Label>
                <Select value={intention} onValueChange={setIntention}>
                  <SelectTrigger id="focus-select" className="w-full py-6 bg-gray-100 border-primary/40 text-foreground shadow-md focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Select learning focus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="knowledge">Knowledge Retention</SelectItem>
                    <SelectItem value="understanding">Deep Understanding</SelectItem>
                    <SelectItem value="application">Practical Application</SelectItem>
                    <SelectItem value="creativity">Creative Thinking</SelectItem>
                    <SelectItem value="memory">Memory Enhancement</SelectItem>
                    <SelectItem value="inspiration">Inspiration & Motivation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tone-select" className="text-sm font-semibold text-foreground">
                  Story Tone
                </Label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger id="tone-select" className="w-full py-6 bg-gray-100 border-primary/40 text-foreground shadow-md focus:ring-2 focus:ring-primary">
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
                  <SelectTrigger id="length-select" className="w-full py-6 bg-gray-100 border-primary/40 text-foreground shadow-md focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short & Concise</SelectItem>
                    <SelectItem value="medium">Medium Length</SelectItem>
                    <SelectItem value="long">Detailed & Comprehensive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time-period-select" className="text-sm font-semibold text-foreground">
                  Time Period
                </Label>
                <Select value={timePeriod} onValueChange={setTimePeriod}>
                  <SelectTrigger id="time-period-select" className="w-full py-6 bg-gray-100 border-primary/40 text-foreground shadow-md focus:ring-2 focus:ring-primary">
                    <SelectValue placeholder="Select time period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="futuristic">Futuristic</SelectItem>
                    <SelectItem value="modern-day">Modern Day</SelectItem>
                    <SelectItem value="medieval-times">Medieval Time</SelectItem>
                    <SelectItem value="mythological">Mythological</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="theme-select" className="text-sm font-medium text-foreground flex items-center gap-2">
                  Theme
                </Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger id="theme-select" className="w-full py-6 bg-gray-100 border-primary/40 text-foreground shadow-md focus:ring-2 focus:ring-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border shadow-lg">
                    <SelectItem value="personal-growth">Personal Growth</SelectItem>
                    <SelectItem value="overcoming-challenges">Overcoming Challenges</SelectItem>
                    <SelectItem value="discovery">Discovery & Learning</SelectItem>
                    <SelectItem value="transformation">Transformation</SelectItem>
                    <SelectItem value="collaboration">Teamwork & Collaboration</SelectItem>
                    <SelectItem value="innovation">Innovation & Creativity</SelectItem>
                    <SelectItem value="wisdom">Wisdom & Knowledge</SelectItem>
                    <SelectItem value="resilience">Resilience & Perseverance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="genre-select" className="text-sm font-medium text-foreground flex items-center gap-2">
                  Genre
                </Label>
                <Select value={genre} onValueChange={setGenre}>
                  <SelectTrigger id="genre-select" className="w-full py-6 bg-gray-100 border-primary/40 text-foreground shadow-md focus:ring-2 focus:ring-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border shadow-lg">
                    <SelectItem value="inspirational">Inspirational</SelectItem>
                    <SelectItem value="educational">Educational</SelectItem>
                    <SelectItem value="motivational">Motivational</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="mystery">Mystery</SelectItem>
                    <SelectItem value="sci-fi">Science Fiction</SelectItem>
                    <SelectItem value="fantasy">Fantasy</SelectItem>
                    <SelectItem value="biographical">Biographical</SelectItem>
                    <SelectItem value="parable">Parable/Fable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button
            className="w-full sm:w-auto bg-orange-400 font-semibold py-5 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-200"
            onClick={generateStory}
            disabled={disabled || isGenerating || isRegenerating}
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
              <CardTitle>
                <div className="flex gap-2">
                  <Feather className="h-5 w-5 text-primary" />
                  Your Story
                </div>
              </CardTitle>
              <CardDescription className="text-black">
                View and edit your story below
              </CardDescription>

              <CardAction>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={regenerateStory}
                  disabled={disabled}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {isRegenerating ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-1 animate-spin" />
                      Regenerating
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4 mr-1" />
                      Regenerate
                    </>
                  )}
                  
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyStory}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </Button>
                </CardAction>
          </CardHeader>

          <CardContent>
            <div className="prose prose-lg max-w-none text-foreground">
              <div className="bg-background/30 rounded-lg p-4 leading-relaxed text-base whitespace-pre-line">
                <Textarea
                  value={story}
                  onChange={handleStoryEdit}
                  className="min-h-[400px] max-h-500px text-base leading-relaxed bg-background/50 border-black focus:border-primary transition-colors"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
