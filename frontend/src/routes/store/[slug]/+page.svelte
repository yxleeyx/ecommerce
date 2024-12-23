<script lang="ts">
	import Navbar from "$lib/components/ui/navbar.svelte";
	import * as Card from "$lib/components/ui/card";
	import { STORE_QUERY } from "$lib/graphql/queries/product";
	import { queryStore, getContextClient } from "@urql/svelte";
	import type { StoreType } from "$lib/graphql/graphql";
	import { Button } from "$lib/components/ui/button";
	import type { PageData } from "./$types";
	import { tabulateReviewScore } from "$lib/utils";

	export let data: PageData;

	let name = data.slug;
	const getStore = queryStore({
		client: getContextClient(),
		variables: { name },
		query: STORE_QUERY
	});
</script>

<Navbar />
{#if $getStore.error}
	<p>{$getStore.error.message}</p>
{/if}
{#if $getStore.fetching}
	<p>Loading store...</p>
{:else if $getStore.error}
	<p>Oopsie {$getStore.error.message}</p>
{:else if $getStore?.data?.store}
	<Card.Root>
		<Card.Header>
			<Card.Title>{$getStore.data.store.name}</Card.Title>
			<Card.Description>{$getStore.data.store.description}</Card.Description>
		</Card.Header>
		<Card.Content>
			<p>Address: {$getStore.data.store.address}</p>
		</Card.Content>
	</Card.Root>
	{#each $getStore?.data?.store.products as product}
		<Card.Root>
			<Card.Header>
				<Card.Title>{product.name}</Card.Title>
				<Card.Description>{product.description}</Card.Description>
			</Card.Header>
			<Card.Content>
				<img src={product.image} alt={product.name} />
				<p>Price: ${product.price}</p>
				<p>Reviews: {tabulateReviewScore(product.reviewSet)}</p>
			</Card.Content>
			<Card.Footer>
				<Button variant="outline">Add to Cart</Button>
				<Button>Buy</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
{:else}
	<p>This store is not available.</p>
{/if}
