import type { Meta, StoryObj } from "@storybook/nextjs";
import Hero6 from "./Hero6";

const meta = {
  title: "Components/Hero/Hero6",
  component: Hero6,
} satisfies Meta<typeof Hero6>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "/images/img-3.png",
    imageAlt: "Hero 6",
    title:
      "Governing Compliance and Privacy Risk Across Sensitive Content Communications",
    subtitle: "With Kiteworks Governors",
    buttonText: "Learn more",
    buttonLink: "/",
  },
};
