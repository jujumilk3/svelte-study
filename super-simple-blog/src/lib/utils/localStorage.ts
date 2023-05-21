import { browser } from "$app/environment";

export const getFromLocalStorage = (key: string) => {
    if (browser) {
        return localStorage.getItem(key);
    }
}

export const setToLocalStorage = (key: string, value: string) => {
    if (browser){
        localStorage.setItem(key, value);
    }
}


export const removeLocalStorage = (key: string) => {
    if (browser) {
        localStorage.removeItem(key);
    }
}
