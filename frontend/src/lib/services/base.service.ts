import { Client, cacheExchange, fetchExchange } from "@urql/svelte";
import { authExchange, type AuthUtilities } from "@urql/exchange-auth";

import { RENEW_TOKEN_MUTATION } from "$lib/graphql/queries/auth";
import { clearAuthTokens, getAccessToken, getRefreshToken, saveNewAccessToken } from "./local-storage.service";
import { goto } from "$app/navigation";
import { jwtDecode } from "jwt-decode";

const auth = authExchange(async (utilities: AuthUtilities) => {
	let token = getAccessToken();
	let refreshToken = getRefreshToken();

	return {
		addAuthToOperation(operation) {
			return token
				? utilities.appendHeaders(operation, {
						Authorization: `Bearer ${token}`
					})
				: operation;
		},
		didAuthError(error) {
			// Check for "Forbidden" error response, caused when access token has expired.
			return error.response?.status === 403;
		},
		willAuthError() {
			// Sync tokens on every operation
			token = getAccessToken();
			refreshToken = getRefreshToken();

			if (token) {
				// If JWT has expired then run the refreshAuth func.
				const { exp } = jwtDecode(token);
				if (Date.now() >= exp! * 1000) return true;
			}

			return false;
		},
		async refreshAuth() {
			// Clear the token for refresh token API to be called without any issues.
			// addAuthToOperation will fail if token is not set to null.
			token = null;

			if (refreshToken) {
				try {
					const result = await utilities.mutate(RENEW_TOKEN_MUTATION, {
						refreshToken
					});
					if (result.error) {
						clearAuthTokens();
						goto("/auth/login");
					} else if (result.data?.refreshToken) {
						const renewedToken = result.data.refreshToken as string;
						token = renewedToken;
						saveNewAccessToken(renewedToken);
					}
				} catch (e) {
					console.log("Refresh Token Error", e);
				}
			}
		}
	};
});

const gqlClient = new Client({
	requestPolicy: "network-only",
	exchanges: [cacheExchange, auth, fetchExchange],
	url: "http://localhost:8000/graphql"
});

export default gqlClient;
