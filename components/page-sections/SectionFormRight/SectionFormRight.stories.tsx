import type { Meta, StoryObj } from "@storybook/nextjs";
import SectionFormRight from "./SectionFormRight";

const meta = {
  title: "Components/Page Sections/SectionFormRight",
  component: SectionFormRight,
} satisfies Meta<typeof SectionFormRight>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title:
      "Tincidunt tortor aliquam nulla<br/><span class='highlight'> facilisi</span> cras fermentum odio eu",
    subtitle: "Get sign up with the latest blog posts and news",
    copy: "A diam maecenas sed enim ut. Viverra justo nec ultrices dui sapien eget. Eu sem integer vitae justo eget. Morbi blandit cursus risus at ultrices. Condimentum lacinia quis vel eros donec ac odio. Urna nunc id cursus metus aliquam eleifend mi in nulla.",
  },
};
