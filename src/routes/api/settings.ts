import { z } from 'zod';
import { type APIEvent } from "@solidjs/start/server";

const SettingScheme = z.object({
    name: z.string(),
    type: z.string(),
    value: z.string(),
});

export async function POST(event: APIEvent) {
    const json = await event.request.json();
    const result = SettingScheme.safeParse(json);

    return {
        "test": "test"
    };
}