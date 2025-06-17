import type { Meta, StoryObj } from "@storybook/nextjs";
import Hero8 from "./Hero8";

const meta = {
  title: "Components/Hero/Hero8",
  component: Hero8,
} satisfies Meta<typeof Hero8>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "/images/building.jpg",
    title:
      "Bigger <span class='highlight'>File-size Capacity.</span> <br /> Better <span class='highlight'>Privacy Protection. </span> <br /> Broader <span class='highlight'>Compliance Intelligence.</span>",
    subtitle:
      "Curabitur cursus lectus lorem, <br /> non consequat nibh aliquam,",
    buttonText: "Learn more",
    buttonLink: "/",
  },
};
