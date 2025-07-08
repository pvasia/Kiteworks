import type { Meta, StoryObj } from "@storybook/nextjs";
import ThreeTiles from "./ThreeTiles";
import FeatureCard, {
  FeatureCardProps,
} from "@/components/molecules/FeatureCard/FeatureCard";
import IconHeading, {
  IconHeadingProps,
} from "@/components/molecules/IconHeading";

const meta = {
  title: "Tiles/ThreeTiles",
  component: ThreeTiles,
} satisfies Meta<typeof ThreeTiles>;

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
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 4",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Button",
    buttonUrl: "/",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 5",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Button",
    buttonUrl: "/",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 6",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Button",
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

export const HeadingAndBodyCopy: Story = {
  args: {
    title: "Featured Cards",
    bodyCopy:
      "Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Eget aliquet nibh <br /> praesent tristique magna sit amet purus.",
    children: mockDataIconHeadings.map((item, key) => (
      <IconHeading key={key} {...item} />
    )),
  },
};
