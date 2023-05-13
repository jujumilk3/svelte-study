import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    async function getPostFromDatabase(slug: string) {
        return {
            slug,
        }
    }

    const post = await getPostFromDatabase(params.slug);

    if (post) {
        return post;
    }

    throw error(404, 'Not found');
}) satisfies PageServerLoad;
