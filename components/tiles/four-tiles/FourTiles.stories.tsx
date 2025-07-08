import type { Meta, StoryObj } from "@storybook/nextjs";
import FourTiles from "./FourTiles";
import IconHeading, {
  IconHeadingProps,
} from "@/components/molecules/IconHeading";

const meta = {
  title: "Tiles/FourTiles",
  component: FourTiles,
} satisfies Meta<typeof FourTiles>;

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
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 5",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 6",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 7",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 8",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Learn More",
    buttonUrl: "/",
  },
];

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
