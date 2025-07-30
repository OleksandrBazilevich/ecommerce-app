import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageError } from "./PageError";

const meta: Meta<typeof PageError> = {
  title: "widgets/PageError",
  component: PageError,
  parameters: {
    layout: "centered",
  },
};
export default meta;
type Story = StoryObj<typeof PageError>;

export const Default: Story = {
  render: () => <PageError />,
};
