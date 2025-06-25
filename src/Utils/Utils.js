export function formatPhoneNumber(value) {
  // Remove all non-digit characters
  const cleaned = ('' + value).replace(/\D/g, '');

  // Format as (123) 456-7890
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (!match) return value;

  let formatted = '';
  if (match[1]) formatted = '(' + match[1];
  if (match[2]) formatted += ') ' + match[2];
  if (match[3]) formatted += '-' + match[3];
  return formatted;
}
