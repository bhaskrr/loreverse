import { NextResponse } from "next/server";
import { generateStoryFromNotes } from "@/lib/ai";

export async function POST(req: Request) {
    try {
        const { notes } = await req.json();

        // Basic validation
        if (!notes || notes.trim() === '') {
            return NextResponse.json({ error: 'No notes provided' }, { status: 400 });
        }

        const story = await generateStoryFromNotes(notes);
        return NextResponse.json({ story })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}