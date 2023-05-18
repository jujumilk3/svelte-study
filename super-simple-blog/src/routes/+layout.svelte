<script lang="ts">
    import {userData} from "$lib/store/userStore";

    console.log("userData", userData)

    import "../app.css";
    import CommonNavigator from "$lib/components/headers/CommonNavigator.svelte";
</script>

<CommonNavigator />
<slot />


<style lang="postcss">
    :global(html) {
        background-color: gray;
    }
</style>
