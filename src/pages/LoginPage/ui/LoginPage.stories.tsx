import type { Meta, StoryObj } from "@storybook/react-vite";
import LoginPage from "./LoginPage";

const meta: Meta<typeof LoginPage> = {
  title: "pages/LoginPage",
  component: LoginPage,
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  render: () => <LoginPage />,
};
