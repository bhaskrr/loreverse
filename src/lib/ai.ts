import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";

export async function generateStoryFromNotes(notes: string, tone: string, length: string, setting: string, goal: string, theme: string, genre: string, ): Promise<string> {

    const result = await generateText({
        model: groq('llama-3.3-70b-versatile'),
        system:
            'You are a creative and professional storyteller. ' +
            'You transform raw notes into engaging and memorable narratives that are easy to read and remember.',
        prompt: `Turn the following notes into a ${length}-length story in a ${tone}-tone and ${genre}-genre in simple language. Set the story in a ${setting} setting.
                Make the story suitable for ${goal}. Focus on helping the reader understand the concept clearly through narrative in a ${theme} theme.
                Keep it engaging, concise and vivid:\n\n${notes}`,
    });

    // Narrow the type of result.response.body before accessing its properties
    const body = result.response.body as {
        choices: { message: { content: string } }[];
    };
    const output = body.choices[0].message.content;
    console.log(output);
    return typeof output === 'string' ? output : String(output);
}