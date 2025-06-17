import type { Meta, StoryObj } from "@storybook/nextjs";
import Form from "./Form";
import { fn } from "storybook/internal/test";

const meta = {
  title: "Molecules/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// Button variants
export const Default: Story = {
  args: {
    direction: "column",
    onSubmit: () => {},
    firstName: "John",
    lastName: "Doe",
    company: "Company",
    businessEmail: "john.doe@example.com",
    onChangeFirstName: () => fn(),
    onChangeLastName: () => fn(),
    onChangeCompany: () => fn(),
    onChangeBusinessEmail: () => fn(),
  },
};
