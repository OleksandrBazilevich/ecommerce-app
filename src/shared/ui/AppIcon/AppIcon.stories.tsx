import type { Meta, StoryObj } from "@storybook/react-vite";
import { AppIcon } from "./AppIcon";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";

const meta: Meta<typeof AppIcon> = {
  title: "shared/AppIcon",
  component: AppIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    Icon: SearchIcon,
  },
};

export default meta;
type Story = StoryObj<typeof AppIcon>;

export const Default: Story = {
  args: {
    Icon: SearchIcon,
  },
};
export const Filled: Story = {
  args: {
    Icon: SearchIcon,
    filled: true,
  },
};

export const WithBackground: Story = {
  args: {
    Icon: SearchIcon,
    theme: "background",
  },
};
