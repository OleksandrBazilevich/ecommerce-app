import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "widgets/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => <Footer />,
};
