import type { Meta, StoryObj } from "@storybook/nextjs";
import HeroMedium from "./HeroMedium";

const meta = {
  title: "Components/Hero/HeroMedium",
  component: HeroMedium,
} satisfies Meta<typeof HeroMedium>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Risk and Compliance Policy",
    subtitle:
      "Nisl nisi scelerisque eu ultrices lectus magna urna porttitor rhoncus dolor purus",
  },
};
