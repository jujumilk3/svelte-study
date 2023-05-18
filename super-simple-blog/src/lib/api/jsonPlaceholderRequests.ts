import {configs} from "$lib/constants/configs";

export const postService = {
    async getPosts() {
        const response = await fetch(`${configs.BASE_API_URL}/v1/posts`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });

        return response.json();
    }
}
