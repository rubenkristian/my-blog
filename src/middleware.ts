import { createMiddleware } from "@solidjs/start/middleware";
import { type FetchEvent } from "@solidjs/start/server";

export default createMiddleware({
    onRequest: async (event: FetchEvent) => {
        const url = new URL(event.request.url);
        const paths = url.pathname.split("/").filter(segment => segment.length > 0)[0];
        if (paths === 'api') {
            return apiAuth(event)();
        }

        return;
    }
});

// just an abstract function to middleware must move script below to another file

function apiAuth(event: FetchEvent) {
    
    return () => {

    }
}