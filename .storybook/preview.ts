import type { Preview } from "@storybook/react-vite";

import {
  LanguageDecorator,
  RouterDecorator,
  ThemeDecorator,
} from "../src/shared/config/storybook";

import "../src/app/styles/index.scss";

const preview: Preview = {
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Internationalization locale",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "de", title: "Deutsch" },
        ],
        dynamicTitle: true,
      },
      defaultValue: "en",
    },
    theme: {
      name: "Theme",
      description: "App theme",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "blue-theme", title: "Blue" },
          { value: "violet-theme", title: "Violet" },
        ],
        dynamicTitle: true,
      },
      defaultValue: "violet-theme",
    },
  },
  decorators: [ThemeDecorator, LanguageDecorator, RouterDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
