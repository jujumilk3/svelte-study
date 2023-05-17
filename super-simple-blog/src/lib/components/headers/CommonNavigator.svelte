<script>
import { page } from "$app/stores";
</script>

<nav class="navbar navbar-light mx-auto">
    <div class="container">
        <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
                <a class="nav-link" class:active={$page.url.pathname === '/'} href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" class:active={$page.url.pathname === '/test'} href="/test">Test</a>
            </li>
            <li class="nav-item">
                <a href="/signin" class="nav-link" class:active={$page.url.pathname === '/signin'}>Sign in</a>
            </li>
            <li class="nav-item">
                <a href="/signup" class="nav-link" class:active={$page.url.pathname === '/signup'}>Sign up</a>
            </li>
        </ul>
    </div>
</nav>



<style lang="postcss">
    nav {
        background-color: cadetblue;
        margin-bottom: 50px;
    }
</style>
