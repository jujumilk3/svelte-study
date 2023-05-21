<script lang="ts">
    export let buttonName = "Button";
</script>

<!-- 여기 on:click을 갈겨줘야 컴포넌트에서 삽입을 했을 때 받을 수 있음. -->
<button on:click
        type="button" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    {buttonName}
</button>
