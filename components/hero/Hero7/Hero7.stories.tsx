import type { Meta, StoryObj } from "@storybook/nextjs";
import Hero7 from "./Hero7";

const meta = {
  title: "Components/Hero/Hero7",
  component: Hero7,
} satisfies Meta<typeof Hero7>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title:
      "Bigger <span class='highlight'>File-size Capacity.</span> <br /> Better <span class='highlight'>Privacy Protection. </span> <br /> Broader <span class='highlight'>Compliance Intelligence.</span>",
    subtitle:
      "Curabitur cursus lectus lorem, <br /> non consequat nibh aliquam,",
    buttonText: "Learn more",
    buttonLink: "/",
  },
};
