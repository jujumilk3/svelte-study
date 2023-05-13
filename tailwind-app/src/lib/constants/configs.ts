// import type {Variables} from "$lib/interfaces/variables.interface";

export const ENV: string = import.meta.env.ENV || 'dev';
export const BASE_API_URL: string = import.meta.env.BASE_API_URL || 'http://localhost:8000';


class Configs {
    readonly ENV: string = ENV;
    readonly BASE_API_URL: string = BASE_API_URL;

    constructor() {
        if (this.ENV === 'dev') {
            this.BASE_API_URL = 'http://localhost:8000';
        } else if (this.ENV === 'stage') {
            this.BASE_API_URL = 'https://stage-api.example.com';
        } else if (this.ENV === 'prod') {
            this.BASE_API_URL = 'https://api.example.com';
        }
    }
}

export const configs = new Configs();
