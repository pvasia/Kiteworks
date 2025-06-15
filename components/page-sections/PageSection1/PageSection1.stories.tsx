import type { Meta, StoryObj } from "@storybook/nextjs";
import PageSection1 from "./PageSection1";

const meta = {
  title: "Components/Page Sections/PageSection1",
  component: PageSection1,
} satisfies Meta<typeof PageSection1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: (
      <>
        Tincidunt tortor aliquam nulla<br></br>
        <span className="highlight"> facilisi</span> cras fermentum odio eu
      </>
    ),
    copy: "A diam maecenas sed enim ut. Viverra justo nec ultrices dui sapien eget. Eu sem integer vitae justo eget. Morbi blandit cursus risus at ultrices. Condimentum lacinia quis vel eros donec ac odio. Urna nunc id cursus metus aliquam eleifend mi in nulla.",
  },
};
