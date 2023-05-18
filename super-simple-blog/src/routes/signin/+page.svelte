<script lang="ts">
    import {authService} from "$lib/api/apiRequests";
    import {goto} from "$app/navigation";

    let email = ''
    let password = ''

    const handleLogin = async () => {
        console.log(email, password);
        const response = await authService.signin(email, password);
        console.log(response);

    }
</script>

<svelte:head>
    <title>Signin</title>
</svelte:head>

<h1>
    signin page
    <form class="form" on:submit|preventDefault={handleLogin}>
        <input
                bind:value={email}
                type="text"
                aria-label="Email Address"
                placeholder="Email Address"
                required
        />
        <input
                bind:value={password}
                type="password"
                aria-label="password"
                placeholder="password"
                required
        >
        <button type="submit">Login</button>
    </form>
</h1>