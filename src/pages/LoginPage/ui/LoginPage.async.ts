import { lazy } from "react";

export const LoginPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-expect-error Simulating a dynamic import with a delay for demonstration purposes
      setTimeout(() => resolve(import("./LoginPage")), 1000);
    })
);
