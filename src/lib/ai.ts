import { groq } from "@ai-sdk/groq";
import { generateText } from "ai";

export async function generateStoryFromNotes(notes: string): Promise<string> {

    const result = await generateText({
        model: groq('llama-3.3-70b-versatile'),
        system:
            'You are a professional writer. ' +
            'You write simple, clear, and concise content.',
        prompt: `Summarize the following article in 3-5 sentences: ${notes}`,
    });

    // Narrow the type of result.response.body before accessing its properties
    const body = result.response.body as {
        choices: { message: { content: string } }[];
    };
    const output = body.choices[0].message.content;
    console.log(output);
    return typeof output === 'string' ? output : String(output);
}