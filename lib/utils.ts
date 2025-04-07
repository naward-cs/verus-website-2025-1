import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to get the base URL
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}
