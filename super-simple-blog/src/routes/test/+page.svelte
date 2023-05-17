<script lang="ts">
    import Button from "$lib/components/buttons/Button.svelte";
    let name = "world";
</script>

<h1>
    test page
</h1>
<Button buttonName="thisisbuttonname"/>
<br/><br/>
<Button buttonName="{name}"/>