import type { Meta, StoryObj } from "@storybook/nextjs";
import PageSection5 from "./PageSection5";

const meta = {
  title: "Components/Page Sections/PageSection5",
  component: PageSection5,
} satisfies Meta<typeof PageSection5>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title:
      "Tincidunt tortor aliquam nulla<br/><span class='highlight'> facilisi</span> cras fermentum odio eu",
    copy: "A diam maecenas sed enim ut. Viverra justo nec ultrices dui sapien eget. Eu sem integer vitae justo eget. Morbi blandit cursus risus at ultrices. Condimentum lacinia quis vel eros donec ac odio. Urna nunc id cursus metus aliquam eleifend mi in nulla.",
    imageUrl: "/images/section-5.png",
    imageAlt: "Page Section 5",
  },
};
