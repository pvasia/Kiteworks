import type { Meta, StoryObj } from "@storybook/nextjs";
import PageSection8 from "./PageSection8";

const meta = {
  title: "Components/Page Sections/PageSection8",
  component: PageSection8,
} satisfies Meta<typeof PageSection8>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading:
      "<span class='highlight'>Lorem Ipsum Dolor</span> sit Amet, Consectetur Adipiscing Elit",
    bodyCopy:
      "Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Malesuada nunc vel risus commodo. Sit amet purus gravida quis blandit turpis cursus. Nec feugiat in fermentum posuere urna nec tincidunt.",
  },
};
