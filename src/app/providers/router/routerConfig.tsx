import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { routePaths } from "@/shared/config";
import { AppRoutes } from "@/shared/config";
import type { RouteProps } from "react-router";

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
