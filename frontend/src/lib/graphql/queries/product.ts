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
