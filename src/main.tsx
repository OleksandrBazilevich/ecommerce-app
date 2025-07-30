import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/app/styles/index.scss";
import App from "@/app";
import { BrowserRouter } from "react-router";

import "@/shared/config/i18n/i18n";
import { ThemeProvider } from "@/app/providers";
import { ErrorBoundary } from "@/app/providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
