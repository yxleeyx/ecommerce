<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { setContextClient } from "@urql/svelte";

	import gqlClient from "../lib/services/base.service";
	import { getAccessToken } from "$lib/services/local-storage.service";

	onMount(() => {
		const accessToken = getAccessToken();
		const visitingRoute = location.pathname;

		if (!accessToken) return goto(`/auth/login`);

		//  if (visitingRoute === '/') return goto(`/dashboard`);
	});

	setContextClient(gqlClient);
</script>

<p>loading...</p>

<h1>Welcome to SvelteKit</h1>
<a href="/auth/login">Login</a>
