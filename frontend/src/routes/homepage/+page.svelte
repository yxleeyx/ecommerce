<script lang="ts">
	import Navbar from "$lib/components/ui/navbar.svelte";
	import * as Card from "$lib/components/ui/card";
	import { ALL_PRODUCTS_QUERY, REVIEW_RATING_QUERY } from "$lib/graphql/queries/product";
	import { queryStore, getContextClient } from "@urql/svelte";
	import { Button } from "$lib/components/ui/button";

	interface ReviewObj {
		rating: number;
	}
	const getAllProducts = queryStore({
		client: getContextClient(),
		query: ALL_PRODUCTS_QUERY
	});

	function tabulateReviewScore(arrayReviews: Array<ReviewObj>) {
		let ratings: number;
		const sumRatings = arrayReviews.reduce((a, b) => a + b.rating, 0);
		ratings = sumRatings == 0 ? 0 : sumRatings / arrayReviews.length;

		return ratings;
	}
</script>

<Navbar />
{#if $getAllProducts.fetching}
	<p>Loading products...</p>
{:else if $getAllProducts.error}
	<p>Oopsie {$getAllProducts.error.message}</p>
{:else if $getAllProducts?.data?.products && $getAllProducts.data.products.length > 0}
	{#each $getAllProducts?.data?.products as product}
		<Card.Root>
			<Card.Header>
				<Card.Title>{product.name}</Card.Title>
				<Card.Description>{product.description}</Card.Description>
			</Card.Header>
			<Card.Content>
				<img src={product.image} alt={product.name} />
				<p>Price: ${product.price}</p>
				<p>Reviews: {tabulateReviewScore(product.reviewSet)}</p>
				<p></p>
			</Card.Content>
			<Card.Footer>
				<Button variant="outline">Add to Cart</Button>
				<Button>Buy</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
{:else}
	<p>No products available.</p>
{/if}
