export const accessTokenKey = "access_token";
export const refreshTokenKey = "refresh_token";

export function saveAuthTokens(accessToken, refreshToken) {
    localStorage.setItem(accessTokenKey, accessToken);
    localStorage.setItem(refreshTokenKey, refreshToken);
}

export function getAccessToken(): {
    try {
        return localStorage.getItem(accessTokenKey);
    } catch {
        return null;
    }
}

export function getRefreshToken(): {
    try {
        return localStorage.getItem(refreshTokenKey);
    } catch {
        return null;
    }
}

export function saveNewAccessToken(newToken) {
    localStorage.setItem(accessTokenKey, newToken);
}

export function clearAuthTokens() {
    localStorage.clear()
}