<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { setContextClient } from "@urql/svelte";

	import LoaderCircle from "lucide-svelte/icons/loader-circle";
	import { Button, buttonVariants } from "$lib/components/ui/button";

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

<Button disabled><LoaderCircle class="mr-2 h-4 w-4 animate-spin" />loading...</Button>

<h1>Welcome to SvelteKit</h1>
<Button variant="link" href="/auth/login">Login</Button>
<a href="/dashboard" class={buttonVariants({ variant: "outline" })}> Dashboard </a>
