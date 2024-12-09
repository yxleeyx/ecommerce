import { gql } from "@urql/svelte";
import type { ProductType, StoreType } from "../graphql";

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
		}
	}
`;

export const ALL_STORES_QUERY = gql`
	query GetAllStores {
		stores {
			id
			name
			description
			address
		}
	}
`;

export const STORE_QUERY = gql`
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
