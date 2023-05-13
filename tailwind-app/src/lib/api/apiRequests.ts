import {BASE_API_URL} from "$lib/constants/configs";


export const authService = {
    async signup(email: string, password: string) {
        const response = await fetch(`${BASE_API_URL}/v1/auth/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });

        return response.json();
    },

    async signin(email: string, password: string) {
        const response = await fetch(`${BASE_API_URL}/v1/auth/signin`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });

        return response.json();
    },

    async signout() {
        const response = await fetch(`${BASE_API_URL}/v1/auth/signout`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        });

        return response.json();
    }
}
