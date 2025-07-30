import { lazy } from "react";

export const HomePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error Simulating a dynamic import with a delay for demonstration purposes
      setTimeout(() => resolve(import("./HomePage")), 1000);
    })
);
