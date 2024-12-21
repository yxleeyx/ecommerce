import { gql } from "@urql/svelte";
import type {
	CreateReviewInput,
	MutationsCreateReviewArgs,
	ProductType,
	QueryReviewArgs,
	QueryStoreArgs,
	ReviewType,
	StoreType
} from "../graphql";

export const ALL_PRODUCTS_QUERY = gql`
	query GetAllProducts {
		products {
			image
			name
			price
			category
			stock
			description
			id
			store {
				name
			}
			reviewSet {
				rating
			}
		}
	}
`;

export const ALL_STORES_QUERY = gql<{ stores: StoreType[] }>`
	query GetAllStores {
		stores {
			id
			name
			description
			address
		}
	}
`;

export const STORE_QUERY = gql<{ store: StoreType }>`
	query GetStore($name: String!) {
		store(name: $name) {
			id
			name
			description
			address
			products {
				name
				description
				image
				price
			}
		}
	}
`;

export const REVIEW_RATING_QUERY = gql<{ review: ReviewType[] }>`
	query GetReviewRating($productId: Int!) {
		review(productId: $productId) {
			rating
		}
	}
`;

export const CREATE_REVIEW_MUTATION = gql`
	mutation CreateReview($user: String!, $review: String!, $product: String!, $rating: Int!) {
		createReview(user: $user, review: $review, product: $product, rating: $rating) {
			product
			rating
			review
			user
		}
	}
`;
