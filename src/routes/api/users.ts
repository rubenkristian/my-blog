import { z } from 'zod';
import { type APIEvent } from "@solidjs/start/server";

const UserScheme = z.object({
    name: z.string(),
    type: z.string(),
    value: z.string(),
});

export async function POST(event: APIEvent) {
    const json = await event.request.json();
    const result = UserScheme.safeParse(json);

    return {
        "test": "test"
    };
}