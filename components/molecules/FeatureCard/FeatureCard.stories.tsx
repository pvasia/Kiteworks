import type { Meta, StoryObj } from "@storybook/nextjs";
import FeatureCard from "./FeatureCard";

const meta = {
  title: "Molecules/FeatureCard",
  component: FeatureCard,
} satisfies Meta<typeof FeatureCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    badge: "NEW",
    imageUrl: "https://picsum.photos/800/800",
    heading:
      "Tincidunt tortor aliquam nulla<br/><span class='highlight'> facilisi</span> cras fermentum odio eu",
    bodyCopy:
      "A diam maecenas sed enim ut. Viverra justo nec ultrices dui sapien eget. Eu sem integer vitae justo eget. Morbi blandit cursus risus at ultrices. Condimentum lacinia quis vel eros donec ac odio. Urna nunc id cursus metus aliquam eleifend mi in nulla.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
};

export const Illustration: Story = {
  args: {
    variant: "illustration",
    imageUrl: "https://picsum.photos/800/800",
    heading: "Cum sociis natoque penatibus et",
    bodyCopy:
      "Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Eget aliquet nibh praesent tristique magna sit amet purus.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
};
