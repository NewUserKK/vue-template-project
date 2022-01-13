export function pxToNumber(px: string): number {
  return parseInt(px.substring(0, px.length - 2));
}

export function prependZeros(s: string, length: number): string {
  return ("0".repeat(length) + s).slice(-Math.max(s.length, length));
}

export function formatDate(date: Date): string {
  const year = prependZeros(date.getFullYear().toString(), 4);
  const month = prependZeros(date.getMonth().toString(), 2);
  const day = prependZeros(date.getDate().toString(), 2);

  return `${day}-${month}-${year} ${formatTime(date)}`;
}

export function formatTime(date: Date): string {
  const hours = prependZeros(date.getHours().toString(), 2);
  const minutes = prependZeros(date.getMinutes().toString(), 2);
  return `${hours}:${minutes}`;
}
