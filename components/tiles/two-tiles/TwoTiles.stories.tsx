import type { Meta, StoryObj } from "@storybook/nextjs";
import TwoTiles from "./TwoTiles";
import FeatureCard, {
  FeatureCardProps,
} from "@/components/molecules/FeatureCard/FeatureCard";
import IconHeading, {
  IconHeadingProps,
} from "@/components/molecules/IconHeading";

const meta = {
  title: "Tiles/TwoTiles",
  component: TwoTiles,
} satisfies Meta<typeof TwoTiles>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockDataFeaturedCards: FeatureCardProps[] = [
  {
    variant: "default",
    badge: "NEW",
    imageUrl: "https://picsum.photos/800/800",
    heading: "Vitae congue eu consequat ac",
    bodyCopy:
      "A diam maecenas sed enim ut. Viverra justo nec ultrices dui sapien eget. Eu sem integer vitae justo eget. Morbi blandit cursus risus at ultrices. Condimentum lacinia quis vel eros donec ac odio. Urna nunc id cursus metus aliquam eleifend mi in nulla.",
    buttonLabel: "Read More",
    buttonUrl: "/",
    date: "November 19, 2025",
    location: "New York, NY",
    tag: "Press Release",
  },
  {
    variant: "special",
    heading: "Vitae sapien pellentesque habitant morbi tristique",
    bodyCopy:
      "A diam maecenas sed enim ut. Viverra justo nec ultrices dui sapien eget. Eu sem integer vitae justo eget. Morbi blandit cursus risus at ultrices. Condimentum lacinia quis vel eros donec ac odio. Urna nunc id cursus metus aliquam eleifend mi in nulla.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
    date: "November 19, 2025",
    tag: "PARTNER ALLIANCE",
  },
];

const mockDataIconHeadings: IconHeadingProps[] = [
  {
    icon: "/images/icon-1.png",
    heading: "Heading 1",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 2",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 3",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 4",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
];

export const FeatureCardsTiles: Story = {
  args: {
    children: mockDataFeaturedCards.map((item, key) => (
      <FeatureCard key={key} {...item} />
    )),
  },
};

export const IconHeadingTiles: Story = {
  args: {
    children: mockDataIconHeadings.map((item, key) => (
      <IconHeading key={key} {...item} />
    )),
  },
};
