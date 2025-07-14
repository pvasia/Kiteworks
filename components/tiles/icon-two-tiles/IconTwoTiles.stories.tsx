import type { Meta, StoryObj } from "@storybook/nextjs";
import IconTwoTiles from "./IconTwoTiles";
import { IconHeadingProps } from "@/components/molecules/IconHeading";

const meta = {
  title: "Tiles/IconTwoTiles",
  component: IconTwoTiles,
} satisfies Meta<typeof IconTwoTiles>;

export default meta;

type Story = StoryObj<typeof meta>;

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
];

const mockDataWithButtons: IconHeadingProps[] = [
  {
    icon: "/images/icon-1.png",
    heading: "Heading 1",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 2",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
];

export const Default: Story = {
  args: {
    items: mockDataIconHeadings,
  },
};

export const WithTitleAndSubheading: Story = {
  args: {
    title: "Featured Cards",
    subHeading:
      "Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Eget aliquet nibh <br /> praesent tristique magna sit amet purus.",
    items: mockDataIconHeadings,
  },
};

export const WithButtons: Story = {
  args: {
    title: "Our Services",
    subHeading: "Discover what we can do for you",
    items: mockDataWithButtons,
  },
};
