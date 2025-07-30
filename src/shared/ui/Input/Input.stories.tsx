import type { Meta, StoryObj } from "@storybook/react-vite";

import SearchIcon from "../../assets/icons/Search.svg?react";
import { AppIcon } from "../AppIcon/AppIcon";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    value: "",
    placeholder: "Enter text...",
  },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Default input",
  },
};

export const WithValue: Story = {
  args: {
    value: "Some value",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    value: "123",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled",
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const WithIcon: Story = {
  args: {
    Icon: <AppIcon size={20} Icon={SearchIcon} />,
  },
};
