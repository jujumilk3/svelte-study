import {writable} from "svelte/store";
import type { User } from "$lib/interfaces/user.interfaces";

export const userData = writable<User>({});
