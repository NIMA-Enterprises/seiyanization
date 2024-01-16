import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const excerpt = (value: string, charLimit: number = 100): string => {
  if (value.length <= charLimit) {
    return value;
  }

  return value.substring(0, charLimit - 3) + "...";
};
