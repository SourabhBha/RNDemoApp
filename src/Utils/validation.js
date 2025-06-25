export function validEmail(email) {
  // Simple RFC 5322 Official Standard regex for demonstration
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validMobile(mobile) {
  // Remove all non-digit characters
  const cleaned = ('' + mobile).replace(/\D/g, '');
  // Check for exactly 10 digits
  const mobileRegex = /^[0-9]{10}$/;
  return mobileRegex.test(cleaned);
}

export function validPassword(password) {
  return typeof password === 'string' && password.length >= 8;
}
