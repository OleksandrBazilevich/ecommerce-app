import type { RouteProps } from "react-router";

import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

import { routePaths , AppRoutes } from "@/shared/config";


export const routeConfig: RouteProps[] = [
  {
    path: routePaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  {
    path: routePaths[AppRoutes.LOGIN],
    element: <LoginPage />,
  },
  {
    path: routePaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];
