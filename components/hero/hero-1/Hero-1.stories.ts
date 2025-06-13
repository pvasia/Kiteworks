import type { Meta, StoryObj } from "@storybook/nextjs";
import Hero1 from "./Hero-1";

const meta = {
  title: "Components/Hero/Hero-1",
  component: Hero1,
} satisfies Meta<typeof Hero1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "/images/img-1.png",
    title: "Your Private Content Network",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    buttonText: "Learn more",
    buttonLink: "/",
  },
};
