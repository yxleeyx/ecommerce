import { gql } from "@urql/svelte";

import type {
	ObtainJsonWebToken,
	MutationsTokenAuthArgs,
	RefreshToken,
	MutationsRefreshTokenArgs,
	RevokeToken,
	MutationsRevokeTokenArgs,
	MutationsRegisterArgs,
	Register
} from "../graphql";

export const LOGIN_MUTATION = gql<{ tokenAuth: ObtainJsonWebToken }, MutationsTokenAuthArgs>`
	mutation Login($username: String!, $password: String!) {
		tokenAuth(password: $password, username: $username) {
			errors
			payload
			refreshExpiresIn
			success
			token
			refreshToken
			user {
				id
				username
				email
				verified
			}
		}
	}
`;
export const RENEW_TOKEN_MUTATION = gql<{ refreshToken: RefreshToken }, MutationsRefreshTokenArgs>`
	mutation RenewAccessToken($input: RenewTokenInput!) {
		refreshToken(token: $input) {
			payload
			refreshExpiresIn
			success
			token
		}
	}
`;
export const LOGOUT_MUTATION = gql<{ revokeToken: RevokeToken }, MutationsRevokeTokenArgs>`
	mutation Logout($refreshToken: RefreshToken!) {
		revokeToken(refreshToken: $refreshToken) {
			revoked
			success
			errors
		}
	}
`;
export const REGISTER_QUERY = gql<{ register: Register }, MutationsRegisterArgs>`
	mutation Register($email: Email!, $password: Password!, $username: Username!) {
		register(email: $email, password1: $password, password2: $password, username: $Username) {
			token
			success
			errors
		}
	}
`;
