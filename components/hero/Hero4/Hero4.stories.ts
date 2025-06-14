import type { Meta, StoryObj } from "@storybook/nextjs";
import Hero4 from "./Hero4";

const meta = {
  title: "Components/Hero/Hero4",
  component: Hero4,
} satisfies Meta<typeof Hero4>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "/images/img-2.png",
    title: "Morbi vehicula purus quis augue aliquet elementum.",
    subtitle:
      "Duis sagittis odio nisl, in aliquet libero vulputate quis. In hac habitasse platea dictumst. Sed accumsan sagittis purus non suscipit. Nam placerat id nibh sed sodales.",
    buttonText: "Learn more",
    buttonLink: "/",
  },
};
