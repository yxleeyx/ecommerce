<script lang="ts">
	import * as Command from "$lib/components/ui/command";
	import { goto } from "$app/navigation";

	import authService from "$lib/services/auth.service";
	import { getRefreshToken, clearAuthTokens } from "$lib/services/local-storage.service";
	import { page } from "$app/state";
	import { onMount } from "svelte";

	onMount(() => {
		setAsActiveTab(page.url.pathname.substring(1));
	});
	let visible = false;

	function toggleVisible() {
		visible = !visible;
	}

	const activeClass = "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white";
	const defaultClass = "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white";

	let isActive = { home: false, store: false };
	function setAsActiveTab(tab: string) {
		let key: keyof typeof isActive;
		for (key in isActive) isActive[key] = false;
		switch (tab) {
			case "homepage":
				isActive.home = true;
				break;
			case "store":
				isActive.store = true;
				break;
		}
	}

	function handleError(error: any) {
		if (typeof error === "string") {
			console.log("Login Error", error);
		} else if (error instanceof Error) {
			console.log("Login Error", error.message);
		}
	}

	async function onLogout() {
		try {
			console.log("in logger out");
			const refreshToken = getRefreshToken() as string;
			const data = await authService.logout(refreshToken);
			clearAuthTokens();
			goto("/auth/login");
		} catch (e) {
			handleError(e);
		}
	}
</script>

<nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
						alt="Your Company"
					/>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
						<a href="/homepage" class={isActive.home ? activeClass : defaultClass} aria-current="page">Home</a>
						<a href="/store" class={isActive.store ? activeClass : defaultClass}>Stores</a>
						<Command.Root>
							<Command.Input placeholder="Search" />
						</Command.Root>
					</div>
				</div>
			</div>
			<div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
				<button
					type="button"
					class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
				>
					<span class="absolute -inset-1.5"></span>
					<span class="sr-only">View notifications</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
						/>
					</svg>
				</button>

				<!-- Profile dropdown -->
				<div class="relative ml-3">
					<div>
						<button
							type="button"
							class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
							id="user-menu-button"
							on:click={toggleVisible}
						>
							<span class="absolute -inset-1.5"></span>
							<span class="sr-only">Open user menu</span>
							<img
								class="h-8 w-8 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</button>
					</div>

					<!--
            Dropdown menu, show/hide based on menu state.
      
            Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
          -->
					{#if visible}
						<div
							class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
						>
							<!-- Active: "bg-gray-100", Not Active: "" -->
							<a
								href="/profile"
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-0">Your Profile</a
							>
							<a
								href="/settings"
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-1">Settings</a
							>
							<a
								href="/"
								class="block px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								on:click={onLogout}
								id="user-menu-item-2">Sign out</a
							>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</nav>
