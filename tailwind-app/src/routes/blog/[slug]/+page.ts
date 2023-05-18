// import { error } from '@sveltejs/kit';
// import type { RouteParams } from './$types';
//
// export function load({ params }: { params: RouteParams }) {
//     if (params.slug === 'hello-world') {
//         return {
//             title: 'Hello world!',
//             content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
//         };
//     }
//
//     throw error(404, 'Not found');
// }

// https://kit.svelte.dev/docs/load
// +page.server.ts와 +page.ts를 분리해서 쓰는 이유
// If your load function should always run on the server (because it uses private environment variables,
// for example, or accesses a database) then it would go in a +page.server.ts instead.

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
    if (params.slug === 'hello-world') {
        return {
            title: 'Hello world!',
            content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
        };
    }

    throw error(404, 'Not found');
}) satisfies PageLoad;
