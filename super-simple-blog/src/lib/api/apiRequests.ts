import {configs} from "$lib/constants/configs";

export const baseService = {
    async healthCheck() {
        const response = await fetch(`${configs.BASE_API_URL}/healthcheck`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });

        return response.json();
    },

    async home(){
        const response = await fetch(`${configs.BASE_API_URL}/`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });

        return response.json();
    },
}

export const authService = {
    async signup(email: string, password: string) {
        const response = await fetch(`${configs.BASE_API_URL}/v1/auth/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });

        return response.json();
    },

    async signin(email: string, password: string) {
        console.log(email, password);
        const response = await fetch(`${configs.BASE_API_URL}/v1/auth/signin`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });

        return response.json();
    },

    async signout() {
        const response = await fetch(`${configs.BASE_API_URL}/v1/auth/signout`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        });

        return response.json();
    }
}
