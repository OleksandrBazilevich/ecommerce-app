import { Suspense } from "react";
import { Route, Routes } from "react-router";

import { PageLoader } from "@/widgets/PageLoader/PageLoader";

import { routeConfig } from "../routerConfig";


const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense key={path} fallback={<PageLoader />}>
              {element}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
