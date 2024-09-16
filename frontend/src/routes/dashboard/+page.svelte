<script lang="ts">
	import { goto } from "$app/navigation";
	import authService from "$lib/services/auth.service";
	import { getRefreshToken } from "$lib/services/local-storage.service";

	function handleError(error: any) {
		if (typeof error === "string") {
			console.log("Login Error", error);
		} else if (error instanceof Error) {
			console.log("Login Error", error.message);
		}
	}

	async function onLogout() {
		try {
			const refreshToken = getRefreshToken() as string;
			console.log(refreshToken);
			const data = await authService.logout(refreshToken);
			goto("/auth/login");
		} catch (e) {
			handleError(e);
		}
	}
</script>

<h1>Welcome to SvelteKit</h1>

<div>
	<button on:click={onLogout}>LOGOUT</button>
</div>
