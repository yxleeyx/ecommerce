<script lang="ts">
	import Navbar from "$lib/components/ui/navbar.svelte";
	import * as Card from "$lib/components/ui/card";
	import { ALL_STORES_QUERY } from "$lib/graphql/queries/product";
	import { queryStore, getContextClient } from "@urql/svelte";
	import type { StoreType } from "$lib/graphql/graphql";
	import { Button } from "$lib/components/ui/button";

	const getAllStores = queryStore<{ stores: StoreType[] }>({
		client: getContextClient(),
		query: ALL_STORES_QUERY
	});
</script>

<Navbar />
{#if $getAllStores.fetching}
	<p>Loading stores...</p>
{:else if $getAllStores.error}
	<p>Oopsie {$getAllStores.error.message}</p>
{:else if $getAllStores?.data?.stores && $getAllStores.data.stores.length > 0}
	{#each $getAllStores?.data?.stores as store}
		<Card.Root>
			<Card.Header>
				<Card.Title>{store.name}</Card.Title>
				<Card.Description>{store.description}</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Address: {store.address}</p>
			</Card.Content>
			<Card.Footer>
				<Button data-sveltekit-prefetch href={`/store/${store.name}`}>Visit</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
{:else}
	<p>No stores available.</p>
{/if}
