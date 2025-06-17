import type { Meta, StoryObj } from "@storybook/nextjs";
import Hero3 from "./Hero3";

const meta = {
  title: "Components/Hero/Hero3",
  component: Hero3,
} satisfies Meta<typeof Hero3>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "/images/img-2.png",
    imageAlt: "Hero 3",
    title: "Morbi vehicula purus quis augue aliquet elementum.",
    subtitle:
      "Duis sagittis odio nisl, in aliquet libero vulputate quis. In hac habitasse platea dictumst. Sed accumsan sagittis purus non suscipit. Nam placerat id nibh sed sodales.",
    buttonText: "Learn more",
    buttonLink: "/",
  },
};
