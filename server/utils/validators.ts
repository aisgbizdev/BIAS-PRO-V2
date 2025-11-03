/**
 * Input validation utilities for security
 */

/**
 * Validate TikTok username to prevent path traversal and injection attacks
 * Allowed: alphanumeric, underscore, dot (max 24 chars)
 */
export function isValidTikTokUsername(username: string): boolean {
  if (!username || typeof username !== 'string') {
    return false;
  }

  // Remove leading @ if present
  const cleaned = username.replace(/^@/, '');

  // TikTok usernames: 2-24 chars, alphanumeric + underscore + dot
  const usernameRegex = /^[a-zA-Z0-9_.]{2,24}$/;
  
  // Reject path traversal attempts
  if (cleaned.includes('..') || cleaned.includes('/') || cleaned.includes('\\')) {
    return false;
  }

  return usernameRegex.test(cleaned);
}

/**
 * Sanitize username for safe use
 */
export function sanitizeUsername(username: string): string {
  return username
    .replace(/^@/, '')
    .replace(/[^a-zA-Z0-9_.]/g, '')
    .slice(0, 24);
}
