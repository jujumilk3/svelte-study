<script lang="ts">
    import type { PageData} from './$types';
    export let data: PageData;
</script>

<h1>
    {JSON.stringify(data)}
    request with page load
</h1>