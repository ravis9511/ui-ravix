import { randomUUID } from 'crypto';

export function generateUniqueId(): string {
  return randomUUID().replace(/-/g, '').slice(0, 16);
}