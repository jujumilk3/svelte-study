<script lang="ts">
    import { baseService} from "$lib/api/apiRequests";

    const healthcheck = async (e) => {
        console.log(e)
        const res = await baseService.healthCheck();
        console.log(res);
    }

    const home = async (e) => {
        console.log(e)
        const res = await baseService.home();
        console.log(res);
    }
</script>
<section class="container">
    <button on:click={(e) => healthcheck(e)} >healthcheck</button>
    <button on:click={(e) => home(e)}>home</button>
</section>
