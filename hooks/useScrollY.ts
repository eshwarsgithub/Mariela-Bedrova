"use client";

import { useScroll } from "framer-motion";

export function useScrollY() {
  const { scrollY } = useScroll();
  return scrollY;
}
