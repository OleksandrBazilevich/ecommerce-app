import type { Meta, StoryObj } from "@storybook/react-vite";

import { LanguageSwitcher } from "./LanguageSwitcher";

const meta: Meta<typeof LanguageSwitcher> = {
  title: "widgets/Header/LanguageSwitcher",
  component: LanguageSwitcher,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {
  render: () => <LanguageSwitcher />,
};
