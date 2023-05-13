import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';


export function GET(event: RequestEvent): Response {
    // log all headers
    console.log(...event.request.headers);

    return json({
        // retrieve a specific header
        userAgent: event.request.headers.get('user-agent')
    });
}
