import { z } from 'zod';
import { type APIEvent } from "@solidjs/start/server";

const PostScheme = z.object({
    title: z.string().min(3).max(150),
    content: z.string(),
    slug: z.string().min(3).max(250),
    categories: z.array(z.number()),
    is_draft: z.boolean(),
    is_publish: z.boolean(),
})

export function GET() {
    return {
        "test": "test"
    };
}

export async function POST(event: APIEvent) {
    const json = await event.request.json();
    const result = PostScheme.safeParse(json);
    return {
        "test": "test"
    };
}

export async function PUT(event: APIEvent) {
    const json = await event.request.json();
    const result = PostScheme.safeParse(json);
    return {
        "test": "test"
    };
}

export function DELETE() {
    return {
        "test": "test"
    };
}