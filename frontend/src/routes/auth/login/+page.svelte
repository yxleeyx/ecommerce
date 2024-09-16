<script lang="ts">
	import { goto } from "$app/navigation";
	import { useForm, Hint, validators, email, required, HintGroup } from "svelte-use-form";

	import authService from "$lib/services/auth.service";
	import { saveAuthTokens } from "$lib/services/local-storage.service";

	const form = useForm();

	let username: string;
	let password: string;
	let isLoading = false;

	function handleError(error: any) {
		if (typeof error === "string") {
			console.log("Login Error", error);
		} else if (error instanceof Error) {
			console.log("Login Error", error.message);
		}
	}

	async function onLogin() {
		if (isLoading) return;
		try {
			isLoading = true;
			const data = await authService.login(username, password);
			saveAuthTokens(data!.tokenAuth.token as string, data!.tokenAuth.refreshToken as string);
			goto("/dashboard");
		} catch (e) {
			handleError(e);
		} finally {
			isLoading = false;
		}
	}
</script>

<div>
	<h1>Please Login</h1>

	<form use:form on:submit={onLogin}>
		<label>
			Username: <input name="username" placeholder="Username" bind:value={username} use:validators={[required]} />
			<Hint for="username" on="required">This is a mandatory field</Hint>
		</label>
		<label>
			Password: <input
				type="password"
				name="password"
				placeholder="Password"
				bind:value={password}
				use:validators={[required]}
			/>
			<Hint for="password" on="required">This is a mandatory field</Hint>
		</label>
		<button type="submit" disabled={!$form.valid}>LOGIN</button>
	</form>
</div>
