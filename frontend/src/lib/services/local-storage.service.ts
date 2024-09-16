export const accessTokenKey = "access_token";
export const refreshTokenKey = "refresh_token";

export function saveAuthTokens(accessToken: string, refreshToken: string) {
	localStorage.setItem(accessTokenKey, accessToken);
	localStorage.setItem(refreshTokenKey, refreshToken);
}

export function getAccessToken(): string | null {
	try {
		return localStorage.getItem(accessTokenKey);
	} catch {
		return null;
	}
}

export function getRefreshToken(): string | null {
	try {
		return localStorage.getItem(refreshTokenKey);
	} catch {
		return null;
	}
}

export function saveNewAccessToken(newToken: string) {
	localStorage.setItem(accessTokenKey, newToken);
}

export function clearAuthTokens(): void {
	localStorage.clear();
}
