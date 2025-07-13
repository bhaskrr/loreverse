import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";

export async function generateStoryFromNotes(notes: string): Promise<string> {

    const result = await generateText({
        model: groq('llama-3.3-70b-versatile'),
        system:
            'You are a creative and professional storyteller. ' +
            'You transform raw notes into short, engaging, and memorable narratives that are easy to read and remember.',
        prompt: `Turn the following notes into a short, coherent story in simple language (around 3-5 paragraphs). Keep it engaging, vivid, and concise:\n\n${notes}`,
    });

    // Narrow the type of result.response.body before accessing its properties
    const body = result.response.body as {
        choices: { message: { content: string } }[];
    };
    const output = body.choices[0].message.content;
    console.log(output);
    return typeof output === 'string' ? output : String(output);
}