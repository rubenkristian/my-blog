import { z } from 'zod';
import { type APIEvent } from "@solidjs/start/server";

const LoginScheme = z.object({
    username: z.string(),
    password: z.string(),
});

export async function POST(event: APIEvent) {
    const json = await event.request.json();
    const result = LoginScheme.safeParse(json);
    return {
        "test": "test"
    };
}