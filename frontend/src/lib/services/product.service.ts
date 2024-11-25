import gqlClient from "./base.service";
import { ALL_PRODUCTS_QUERY, ALL_STORES_QUERY } from "$lib/graphql/queries/product";
import { getContextClient, queryStore } from "@urql/svelte";

// const getprd = async () => {
// 	// const result = await gqlClient.query(ALL_PRODUCTS_QUERY).toPromise();

// };

// const getAllProd = queryStore({
//     client: getContextClient()
// })
