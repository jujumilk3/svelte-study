<script lang="ts">
    import { notificationData } from '$lib/stores/notificationStore';
    // import { post, browserSet, browserGet } from '$lib/utils/requestUtils';
    import { goto } from '$app/navigation';
    // import { variables } from '$lib/utils/constants';
    import { configs } from "$lib/constants/configs";
    import { fly } from 'svelte/transition';
    import { authService } from "$lib/api/apiRequests";

    import type { UserResponse } from '$lib/interfaces/user.interface';
    import type { CustomError } from '$lib/interfaces/error.interface';
    import { changeText } from '$lib/helpers/buttonText';

    let email = '',
        password = '',
        errors: Array<CustomError>;

    const handleSignin = async () => {
        alert("handleSignin");
        console.log("handleSignin");
        const [jsonRes, err] = await authService.signin(email, password);
        const response: UserResponse = jsonRes;
        console.log(err);
        console.log(response);
        // if (err.length > 0) {
        //     errors = err;
        // } else if (response.user) {
        //     if (response.user.tokens && response.user.tokens.refresh) {
        //         browserSet('refreshToken', response.user.tokens.refresh);
        //     }
        //     notificationData.update(() => 'Login successful...');
        //     await goto('/');
        // }
    }

    // const handleLogin = async () => {
    //     if (browserGet('refreshToken')) {
    //         localStorage.removeItem('refreshToken');
    //     }
    //     const [jsonRes, err] = await post(fetch, `${configs.BASE_API_URL}/login/`, {
    //         user: {
    //             email: email,
    //             password: password
    //         }
    //     });
    //     const response: UserResponse = jsonRes;
    //
    //     if (err.length > 0) {
    //         errors = err;
    //     } else if (response.user) {
    //         if (response.user.tokens && response.user.tokens.refresh) {
    //             browserSet('refreshToken', response.user.tokens.refresh);
    //         }
    //         notificationData.update(() => 'Login successful...');
    //         await goto('/');
    //     }
    // };
</script>

<svelte:head>
    <title>Login | FullStack Django & SvelteKit</title>
</svelte:head>

<section
        class="container"
        in:fly={{ x: -100, duration: 500, delay: 500 }}
        out:fly={{ duration: 500 }}
>
    <h1>Login</h1>
    {#if errors}
        {#each errors as error}
            <p class="center error">{error.error}</p>
        {/each}
    {/if}
    <form class="form" on:submit|preventDefault={handleSignin}>
        <input
                bind:value={email}
                name="email"
                type="email"
                aria-label="Email address"
                placeholder="Email address"
                required
        />
        <input
                bind:value={password}
                name="password"
                type="password"
                aria-label="password"
                placeholder="password"
                required
        />
        <button class="btn" type="submit" on:click={(e) => changeText(e, 'Signing in...')}>Login</button
        >
        <p class="center">No account yet? <a href="/accounts/register">Get started</a>.</p>
    </form>
</section>