export const prerender = false;
import { randomUUID } from "node:crypto";

export function generateUniqueId(): string {
  return randomUUID().replace(/-/g, "").slice(0, 16);
}
