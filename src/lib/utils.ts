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


//This is used for social og images on sharing link
export const getImageType = (path: string) => {
  if (path.includes("/jobs")) {
    return "job";
  }

  if (path.includes("/articles")) {
    return "article";
  }

  if (path.includes("/guides")) {
    return "guide";
  }

  return "default";
};
