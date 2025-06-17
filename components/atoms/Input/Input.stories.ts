import type { Meta, StoryObj } from "@storybook/nextjs";
import Input from "./Input";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Button variants
export const Default: Story = {
  args: {
    placeholder: "Enter your email",
    error: false,
    disabled: false,
    className: "",
  },
};
