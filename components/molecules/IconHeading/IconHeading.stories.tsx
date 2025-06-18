import type { Meta, StoryObj } from "@storybook/nextjs";
import IconHeading from "./IconHeading";

const meta = {
  title: "Molecules/IconHeading",
  component: IconHeading,
} satisfies Meta<typeof IconHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "/images/icon-1.png",
    heading:
      "Tincidunt tortor aliquam nulla<br/><span class='highlight'> facilisi</span> cras fermentum odio eu",
    bodyCopy:
      "A diam maecenas sed enim ut. Viverra justo nec ultrices dui sapien eget. Eu sem integer vitae justo eget. Morbi blandit cursus risus at ultrices. Condimentum lacinia quis vel eros donec ac odio. Urna nunc id cursus metus aliquam eleifend mi in nulla.",
  },
};

export const WithButton: Story = {
  args: {
    icon: "/images/icon-1.png",
    heading: "Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu",
    bodyCopy:
      "A diam maecenas sed enim ut. Viverra justo nec ultrices dui sapien eget. Eu sem integer vitae justo eget. Morbi blandit cursus risus at ultrices. Condimentum lacinia quis vel eros donec ac odio. Urna nunc id cursus metus aliquam eleifend mi in nulla.",
    buttonLabel: "Button",
    buttonUrl: "/",
  },
};
