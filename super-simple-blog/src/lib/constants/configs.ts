class Configs {
    readonly APP_NAME: string = 'super-simple-blog';
    readonly ENV: string = import.meta.env.ENV || null;
    readonly BASE_API_URL: string = import.meta.env.BASE_API_URL || 'http://localhost:8000';

    constructor() {
        if (this.ENV === 'dev') {
            this.BASE_API_URL = 'https://dev-api.super-simple-blog.com';
        } else if (this.ENV === 'stage') {
            this.BASE_API_URL = 'https://stage-api.super-simple-blog.com';
        } else if (this.ENV === 'prod') {
            this.BASE_API_URL = 'https://api.super-simple-blog.com';
        }
    }
}

export const configs = new Configs();
