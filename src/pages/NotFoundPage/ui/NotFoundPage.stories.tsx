import type { Meta, StoryObj } from "@storybook/react-vite";

import NotFoundPage from "./NotFoundPage";

const meta: Meta<typeof NotFoundPage> = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {
  render: () => <NotFoundPage />,
};
