import type { Meta, StoryObj } from "@storybook/nextjs";
import PageSection7 from "./PageSection7";

const meta = {
  title: "Components/Page Sections/PageSection7",
  component: PageSection7,
} satisfies Meta<typeof PageSection7>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading:
      "<span class='highlight'>Lorem Ipsum Dolor</span> sit Amet, Consectetur Adipiscing Elit",
    bodyCopy:
      "Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Malesuada nunc vel risus commodo. Sit amet purus gravida quis blandit turpis cursus. Nec feugiat in fermentum posuere urna nec tincidunt.",
    imageUrl: "/images/section-7.png",
    imageAlt: "Page Section 7",
  },
};
