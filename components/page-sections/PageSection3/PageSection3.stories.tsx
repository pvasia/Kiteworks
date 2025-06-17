import type { Meta, StoryObj } from "@storybook/nextjs";
import PageSection3 from "./PageSection3";

const meta = {
  title: "Components/Page Sections/PageSection3",
  component: PageSection3,
} satisfies Meta<typeof PageSection3>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title:
      "Tincidunt tortor aliquam nulla<br/><span class='highlight'> facilisi</span> cras fermentum odio eu",
    copy: "A diam maecenas sed enim ut. Viverra justo nec ultrices dui sapien eget. Eu sem integer vitae justo eget. Morbi blandit cursus risus at ultrices. Condimentum lacinia quis vel eros donec ac odio. Urna nunc id cursus metus aliquam eleifend mi in nulla.",
    imageUrl: "/images/section-3.png",
    imageAlt: "Page Section 3",
  },
};
