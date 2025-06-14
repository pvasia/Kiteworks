import type { Meta, StoryObj } from "@storybook/nextjs";
import HeroSmall from "./HeroSmall";

const meta = {
  title: "Components/Hero/HeroSmall",
  component: HeroSmall,
} satisfies Meta<typeof HeroSmall>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Risk and Compliance Policy",
  },
};
