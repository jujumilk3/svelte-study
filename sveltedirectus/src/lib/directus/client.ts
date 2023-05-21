import {Directus} from "@directus/sdk";

const directus = new Directus('http://localhost:8055');


async function getDirectusClient() {
    console.log("this is directus")
    if (await directus.auth.token) return directus;
    try{
        await directus.auth.static();
    } catch (e: any) {
        if (e.parent.code === 'ECONNREFUSED') {
            console.error(
                'Unable to connect to the Directus instance. Make sure the .env file is present and the VITE_DIRECTUS_URL variable is pointing the correct URL.'
            );
        }
    }

    return directus;
}

export { getDirectusClient };
