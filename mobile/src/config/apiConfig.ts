/**
 * Where the app finds the backend API.
 *
 * The address comes from the public build-time variable EXPO_PUBLIC_API_URL.
 * It is the only setting the mobile app reads: no secret ever ships inside the app.
 */

export const DEFAULT_LOCAL_API_URL = 'http://localhost:8080';

const HTTP_URL = /^https?:\/\/[^\s/?#]+(\/[^\s?#]*)?$/i;

/**
 * Returns a usable API base URL with no trailing slash.
 * Falls back to the local backend when the variable is unset, and refuses anything
 * that is not a plain http(s) address so a typo fails loudly instead of silently.
 */
export function resolveApiBaseUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (!value) {
    return DEFAULT_LOCAL_API_URL;
  }
  if (!HTTP_URL.test(value)) {
    throw new Error(`EXPO_PUBLIC_API_URL must be an http(s) URL, received: "${value}"`);
  }
  return value.replace(/\/+$/, '');
}

// Expo inlines EXPO_PUBLIC_* variables only when read with direct dot access like this.
export const apiBaseUrl = resolveApiBaseUrl(process.env.EXPO_PUBLIC_API_URL);
