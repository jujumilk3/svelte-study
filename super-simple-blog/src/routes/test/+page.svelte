<script lang="ts">
    import Button from "$lib/components/buttons/Button.svelte";
    let name = "world";
    const handleClick = async (e) => {
        alert("clicked");
        console.log(e);
    }
</script>

<h1>
    test page
</h1>
<div>
    <button on:click={(e) => handleClick(e)}>Button created inner page</button>
    <h2>Button tests by components</h2>
    <Button buttonName="onclick test" on:click={(e) => handleClick(e)}/>
    <br/><br/>
    <Button buttonName="thisisbuttonname"/>
    <br/><br/>
    <Button buttonName="{name}"/>
</div>
