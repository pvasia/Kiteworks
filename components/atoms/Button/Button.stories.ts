import type { Meta, StoryObj } from "@storybook/nextjs";
import Button from "./Button";
import { fn } from "storybook/test";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Button variants
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    href: "/",
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    href: "/",
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};
