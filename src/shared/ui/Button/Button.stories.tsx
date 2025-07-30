import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
  },
};

export const Rounded: Story = {
  args: {
    form: "rounded",
  },
};

export const Pill: Story = {
  args: {
    form: "pill",
  },
};

export const Circle: Story = {
  args: {
    form: "circle",
  },
};
