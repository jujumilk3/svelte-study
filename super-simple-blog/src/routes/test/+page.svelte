<script lang="ts">
    // import Button from "$lib/components/buttons/Button.svelte";
    import Button from "$components/buttons/Button.svelte";
    import { baseService } from "$lib/api/apiRequests";

    let name = "world";

    const handleClick = async (e: Event) => {
        alert("clicked");
        console.log(e);
    }

    const healthCheck = async () => {
        const response = await baseService.healthCheck();
        console.log(response);
    }

    const home = async () => {
        const response = await baseService.home();
        console.log(response);
    }

</script>

<h1>
    test page
</h1>
<div class="first">
    <button style="background-color: antiquewhite" on:click={(e) => handleClick(e)}>Button created inner page</button>
    <h2>Button tests by components</h2>
    <Button buttonName="onclick test" on:click={(e) => handleClick(e)}/>
    <br/><br/>
    <Button buttonName="thisisbuttonname"/>
    <br/><br/>
    <Button buttonName="{name}"/>
</div>

<div class="second">
    <h2>API Requests</h2>
    <Button buttonName="healthcheck" on:click={() => healthCheck()}/>
    <br/><br/>
    <Button buttonName="home" on:click={() => home()}/>
    <br/><br/>
</div>


<style>
    .first {
        background-color: chocolate;
    }
    .second {
        background-color: darkolivegreen;
    }
</style>
