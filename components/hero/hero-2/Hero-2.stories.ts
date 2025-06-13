import type { Meta, StoryObj } from "@storybook/nextjs";
import Hero2 from "./Hero-2";

const meta = {
  title: "Components/Hero/Hero-2",
  component: Hero2,
} satisfies Meta<typeof Hero2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "/images/img-1.png",
  },
};
