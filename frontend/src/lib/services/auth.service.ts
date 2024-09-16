import gqlClient from "./base.service";
import { LOGIN_MUTATION, LOGOUT_MUTATION } from "$lib/graphql/queries/auth";

const login = async (username: string, password: string) => {
	const result = await gqlClient.mutation(LOGIN_MUTATION, { username, password }).toPromise();
	if (result.error) throw result.error;
	if (!result.data!.tokenAuth.success) throw result.data!.tokenAuth.errors;

	return result.data;
};

const logout = async (refreshToken: string) => {
	const result = await gqlClient.mutation(LOGOUT_MUTATION, { refreshToken }).toPromise();
	if (result.error) throw result.error;
	if (!result.data!.revokeToken.success) throw result.data!.revokeToken.errors;

	return result.data!.revokeToken;
};

const authService = {
	login,
	logout
};

export default authService;
