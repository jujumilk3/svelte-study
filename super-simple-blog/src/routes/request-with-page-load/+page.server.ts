import {baseService} from "$lib/api/apiRequests";
import type {PageServerLoad} from "./$types";

export const load = (async () => {
    return await baseService.home();
}) satisfies PageServerLoad;
