export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function openMailDraft(to: string, subject: string, fields: Record<string, string>): void {
  const body = Object.entries(fields)
    .filter(([, value]) => value.trim() !== '')
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n');
  window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
