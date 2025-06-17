import type { Meta, StoryObj } from "@storybook/nextjs";
import Hero5 from "./Hero5";

const meta = {
  title: "Components/Hero/Hero5",
  component: Hero5,
} satisfies Meta<typeof Hero5>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "/images/img-3.png",
    imageAlt: "Hero 5",
    title:
      "Governing Compliance and Privacy Risk Across Sensitive Content Communications",
    subtitle: "With Kiteworks Governors",
    buttonText: "Learn more",
    buttonLink: "/",
  },
};
