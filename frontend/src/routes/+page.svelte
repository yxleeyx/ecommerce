<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { getAccessToken } from "$lib/services/local-storage.service";

	onMount(() => {
		const accessToken = getAccessToken();
		const visitingRoute = location.pathname;

		if (!accessToken) return goto(`/auth/login`);

		if (visitingRoute === "/") return goto(`/homepage`);
	});
</script>
