import type { Meta, StoryObj } from "@storybook/nextjs";
import FeatureThreeTiles from "./FeatureThreeTiles";
import { FeatureCardProps } from "@/components/molecules/FeatureCard";

const meta = {
  title: "Tiles/FeatureThreeTiles",
  component: FeatureThreeTiles,
} satisfies Meta<typeof FeatureThreeTiles>;

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
  {
    variant: "illustration",
    imageUrl: "https://picsum.photos/800/800",
    heading: "Cum sociis natoque penatibus et",
    bodyCopy:
      "Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Eget aliquet nibh praesent tristique magna sit amet purus.",
    buttonLabel: "Read Kiteworks Report 2022",
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
  {
    variant: "icon",
    iconUrl: "/images/feature-icon-3.png",
    heading: "Volutpat lacus laoreet non curabitur",
    bodyCopy:
      "Morbi blandit cursus risus at ultrices mi. Volutpat ac tincidunt vitae semper quis lectus.",
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
    heading: "Special Feature 2",
    bodyCopy:
      "Another special feature card showcasing different content and styling options.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
  {
    variant: "special",
    heading: "Special Feature 3",
    bodyCopy:
      "Third special feature card demonstrating the versatility of this component.",
    buttonLabel: "Get Started",
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
