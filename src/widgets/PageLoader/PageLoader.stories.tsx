import type { Meta, StoryObj } from "@storybook/react-vite";

import { PageLoader } from "./PageLoader";

const meta: Meta<typeof PageLoader> = {
  title: "widgets/PageLoader",
  component: PageLoader,
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Default: Story = {
  render: () => <PageLoader />,
};
