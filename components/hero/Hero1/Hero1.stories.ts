import type { Meta, StoryObj } from "@storybook/nextjs";
import Hero1 from "./Hero1";

const meta = {
  title: "Components/Hero/Hero1",
  component: Hero1,
} satisfies Meta<typeof Hero1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "/images/img-1.png",
    title: "Your Private Content Network",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    buttonText: "Learn more",
    buttonLink: "/",
  },
};
