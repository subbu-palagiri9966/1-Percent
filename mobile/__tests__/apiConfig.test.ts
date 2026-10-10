import { DEFAULT_LOCAL_API_URL, resolveApiBaseUrl } from '../src/config/apiConfig';

describe('resolveApiBaseUrl', () => {
  test.each([undefined, '', '   '])('falls back to the local backend when unset (%p)', (raw) => {
    expect(resolveApiBaseUrl(raw)).toBe(DEFAULT_LOCAL_API_URL);
  });

  test.each([
    ['https://api.example.com', 'https://api.example.com'],
    ['https://api.example.com/', 'https://api.example.com'],
    ['http://192.168.1.20:8080//', 'http://192.168.1.20:8080'],
    ['  http://localhost:8080  ', 'http://localhost:8080'],
    ['https://example.com/api/v1', 'https://example.com/api/v1'],
  ])('accepts %p and returns %p', (raw, expected) => {
    expect(resolveApiBaseUrl(raw)).toBe(expected);
  });

  test.each([
    'localhost:8080',
    'ftp://example.com',
    'https://',
    'https://exa mple.com',
    'not a url',
  ])('rejects %p', (raw) => {
    expect(() => resolveApiBaseUrl(raw)).toThrow('EXPO_PUBLIC_API_URL must be an http(s) URL');
  });
});
