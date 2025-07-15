import type { Meta, StoryObj } from "@storybook/nextjs";
import FeatureTwoTiles from "./FeatureTwoTiles";
import { FeatureCardProps } from "@/components/molecules/FeatureCard";

const meta = {
  title: "Tiles/FeatureTwoTiles",
  component: FeatureTwoTiles,
} satisfies Meta<typeof FeatureTwoTiles>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockDataFeaturedCards: FeatureCardProps[] = [
  {
    variant: "default",
    badge: "NEW",
    imageUrl: "https://picsum.photos/800/800",
    heading: "Cum sociis natoque penatibus et",
    bodyCopy:
      "Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Eget aliquet nibh praesent tristique magna sit amet purus.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
  {
    variant: "default",
    badge: "",
    imageUrl: "https://picsum.photos/800/800",
    heading: "Eu feugiat pretium nibh ipsum",
    bodyCopy:
      "Eget arcu dictum varius duis at consectetur lorem donec. Morbi tristique senectus et netus. Bibendum ut tristique et egestas.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
];

const mockDataIconCards: FeatureCardProps[] = [
  {
    variant: "icon",
    iconUrl: "/images/feature-icon-1.png",
    heading: "Nisi vitae suscipit tellus mauris",
    bodyCopy:
      "Diam vulputate ut pharetra sit amet. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.",
    buttonLabel: "Read More",
    buttonUrl: "/",
  },
  {
    variant: "icon",
    iconUrl: "/images/feature-icon-2.png",
    heading: "Vestibulum lectus mauris ultrices",
    bodyCopy:
      "Morbi tristique senectus et netus et malesuada fames ac. Luctus venenatis lectus magna fringilla.",
    buttonLabel: "Read More",
    buttonUrl: "/",
  },
];

const mockDataSpecialCards: FeatureCardProps[] = [
  {
    variant: "special",
    heading: "Special Feature 1",
    bodyCopy:
      "This is a special feature card with unique styling and enhanced visual presentation.",
    buttonLabel: "Discover More",
    buttonUrl: "/",
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

const mockDataIllustrationCards: FeatureCardProps[] = [
  {
    variant: "illustration",
    imageUrl: "https://picsum.photos/800/800",
    heading: "Cum sociis natoque penatibus et",
    bodyCopy:
      "Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Eget aliquet nibh praesent tristique magna sit amet purus.",
    buttonLabel: "Read Kiteworks Report 2022",
    buttonUrl: "/",
  },
  {
    variant: "illustration",
    imageUrl: "https://picsum.photos/800/800",
    heading: "Eu feugiat pretium nibh ipsum",
    bodyCopy:
      "Eget arcu dictum varius duis at consectetur lorem donec. Morbi tristique senectus et netus. Bibendum ut tristique et egestas.",
    buttonLabel: "Read More",
    buttonUrl: "/",
  },
];

export const Default: Story = {
  args: {
    items: mockDataFeaturedCards,
  },
};

export const WithTitleAndSubheading: Story = {
  args: {
    title: "Featured Solutions",
    subHeading:
      "Discover our comprehensive suite of solutions designed to meet your needs.",
    items: mockDataFeaturedCards,
  },
};

export const IconVariant: Story = {
  args: {
    title: "Key Features",
    subHeading: "Essential features that make our platform stand out",
    items: mockDataIconCards,
  },
};

export const SpecialVariant: Story = {
  args: {
    title: "Premium Features",
    subHeading: "Exclusive features available in our premium plan",
    items: mockDataSpecialCards,
  },
};

export const IllustrationVariant: Story = {
  args: {
    title: "Illustrated Features",
    subHeading: "Visual representations of our key capabilities",
    items: mockDataIllustrationCards,
  },
};
