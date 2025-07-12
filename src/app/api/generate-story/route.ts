import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { notes } = await req.json();

        // Basic validation
        if (!notes || notes.trim() === '') {
            return NextResponse.json({ error: 'No notes provided' }, { status: 400 });
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}