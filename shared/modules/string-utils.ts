export function isEqualCaseInsensitive(value1: unknown, value2: unknown): boolean {
  return typeof value1 === 'string' && typeof value2 === 'string' && value1.toLowerCase() === value2.toLowerCase();
}

export function prependZero(num: number, maxLength: number): string {
  return num.toString().padStart(maxLength, '0');
}
