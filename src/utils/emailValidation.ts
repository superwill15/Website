/**
 * List of common free email providers to block from resource downloads
 * This ensures only business/corporate emails can download resources
 */
const FREE_EMAIL_DOMAINS = [
  // Gmail
  'gmail.com',
  'googlemail.com',

  // Microsoft/Outlook
  'hotmail.com',
  'hotmail.co.uk',
  'hotmail.fr',
  'hotmail.de',
  'hotmail.it',
  'hotmail.es',
  'outlook.com',
  'outlook.co.uk',
  'outlook.fr',
  'outlook.de',
  'outlook.it',
  'outlook.es',
  'live.com',
  'live.co.uk',
  'live.fr',
  'live.de',
  'live.it',
  'msn.com',

  // Yahoo
  'yahoo.com',
  'yahoo.co.uk',
  'yahoo.fr',
  'yahoo.de',
  'yahoo.it',
  'yahoo.es',
  'yahoo.ca',
  'yahoo.com.au',
  'yahoo.co.in',
  'ymail.com',
  'rocketmail.com',

  // AOL
  'aol.com',
  'aol.co.uk',
  'aol.fr',
  'aol.de',
  'aim.com',

  // Other popular free email providers
  'protonmail.com',
  'proton.me',
  'mail.com',
  'gmx.com',
  'gmx.net',
  'gmx.de',
  'icloud.com',
  'me.com',
  'mac.com',
  'zoho.com',
  'yandex.com',
  'yandex.ru',
  'mail.ru',
  'inbox.com',
  'fastmail.com',
  'hushmail.com',
  'tutanota.com',
  'tutanota.de',
  'tuta.io',
  'disroot.org',
  'cock.li',
  'mailinator.com',
  'guerrillamail.com',
  'temp-mail.org',
  '10minutemail.com',
  'throwaway.email',
];

/**
 * Validates if an email address is from a business/corporate domain
 * Returns an error message if the email is from a free provider, or null if valid
 */
export function validateBusinessEmail(email: string): string | null {
  if (!email) {
    return 'Email address is required';
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email address';
  }

  // Extract domain from email
  const domain = email.toLowerCase().split('@')[1];

  if (!domain) {
    return 'Please enter a valid email address';
  }

  // Check if domain is in the free email list
  if (FREE_EMAIL_DOMAINS.includes(domain)) {
    return 'Please use your work email address. Free email providers (Gmail, Hotmail, Yahoo, etc.) are not accepted.';
  }

  return null; // Email is valid
}

/**
 * Checks if an email domain is a free email provider
 */
export function isFreeEmailProvider(email: string): boolean {
  if (!email) return false;

  const domain = email.toLowerCase().split('@')[1];
  return FREE_EMAIL_DOMAINS.includes(domain);
}
