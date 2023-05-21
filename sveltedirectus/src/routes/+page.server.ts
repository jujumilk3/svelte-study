import { getDirectusClient } from "$lib/directus/client";
import type {PageServerLoad} from "./$types";


export const load = (async () => {
    const directus = await getDirectusClient();
    // const response = await directus.items("articles").readOne(1);
    // console.log(response)
    // console.log(directus)
    const response = await directus.items("articles").readOne(3);
    console.log(response)
    let authenticated = false;

    // Try to authenticate with token if exists
    await directus.auth
        .refresh()
        .then(() => {
            authenticated = true;
        })
        .catch(() => {});

    // Let's login in case we don't have token or it is invalid / expired
    while (!authenticated) {
        const email = "admin@admin.com";
        const password = "admin";

        await directus.auth
            .login({ email, password })
            .then(() => {
                authenticated = true;
            })
            .catch(() => {
                window.alert('Invalid credentials');
            });
    }
    console.log(authenticated)

    // GET DATA

    // After authentication, we can fetch data from any collections that the user has permissions to.
    // const privateData = await directus.items('some_private_collection').readByQuery({ sort: ['id'] });

    // console.log(privateData.data);
    const test = await directus.users.me.read();
    console.log(test)
}) satisfies PageServerLoad;
