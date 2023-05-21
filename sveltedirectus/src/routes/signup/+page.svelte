<script lang="ts">

    let email = ''
    let password = ''
    let nickname = ''

    const handleSignup = async () => {
        console.log(email, password)
        // const response = await authService.signup(email, nickname, password);
        // console.log(response);
    }
</script>

<svelte:head>
    <title>Signup</title>
</svelte:head>

<h1>
    signup page
    <form class="form" on:submit|preventDefault={handleSignup}>
        <input
            bind:value={email}
            type="text"
            aria-label="Email Address"
            placeholder="Email Address"
            required
        />
        <input
            bind:value={nickname}
            type="text"
            aria-label="Nickname"
            placeholder="Nickname"
            required
        />
        <input
            bind:value={password}
            type="password"
            aria-label="password"
            placeholder="password"
            required
        />
        <button type="submit">Login</button>
    </form>
</h1>