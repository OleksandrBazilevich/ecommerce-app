import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "widgets/Header/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {
  render: () => <ThemeSwitcher />,
};
