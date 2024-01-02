/* eslint-disable @typescript-eslint/no-unused-vars */
import { type ClassValue, clsx } from "clsx";
// @ts-expect-error
import { twMerge } from "tailwind-merge";
import { camelize, getCurrentInstance, toHandlerKey } from "vue";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
