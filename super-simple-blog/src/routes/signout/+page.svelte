<script lang="ts">
    import {userData} from "$lib/store/userStore";
    import {removeLocalStorage} from "$lib/utils/localStorage";

    userData.set({})
    removeLocalStorage('access_token')
</script>

