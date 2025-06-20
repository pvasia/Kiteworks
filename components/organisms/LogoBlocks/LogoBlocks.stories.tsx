import type { Meta, StoryObj } from "@storybook/nextjs";
import LogoBlocks from "./LogoBlocks";

const meta = {
  title: "Organisms/LogoBlocks",
  component: LogoBlocks,
} satisfies Meta<typeof LogoBlocks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    variant: "heading",
    logos: [
      {
        image: "/images/logo/logoipsum-1.png",
        alt: "Logo 1",
        url: "/",
      },
      {
        image: "/images/logo/logoipsum-2.png",
        alt: "Logo 2",
        url: "/",
      },
      {
        image: "/images/logo/logoipsum-3.png",
        alt: "Logo 3",
        url: "/",
      },
      {
        image: "/images/logo/logoipsum-4.png",
        alt: "Logo 4",
        url: "/",
      },
      {
        image: "/images/logo/logoipsum-5.png",
        alt: "Logo 5",
        url: "/",
      },
      {
        image: "/images/logo/logoipsum-6.png",
        alt: "Logo 6",
        url: "/",
      },
    ],
  },
};

export const GridPrimary: Story = {
  args: {
    variant: "grid-primary",
    logos: [
      {
        image: "/logo/logoipsum-1.png",
        alt: "Logo 1",
        url: "/",
      },
      {
        image: "/logo/logoipsum-2.png",
        alt: "Logo 2",
        url: "/",
      },
      {
        image: "/logo/logoipsum-3.png",
        alt: "Logo 3",
        url: "/",
      },
      {
        image: "/logo/logoipsum-4.png",
        alt: "Logo 4",
        url: "/",
      },
      {
        image: "/logo/logoipsum-5.png",
        alt: "Logo 5",
        url: "/",
      },
      {
        image: "/logo/logoipsum-6.png",
        alt: "Logo 6",
        url: "/",
      },
    ],
  },
};

export const GridSecondary: Story = {
  args: {
    variant: "grid-secondary",
    logos: [
      {
        image: "/logo/logoipsum-1.png",
        alt: "Logo 1",
        url: "/",
      },
      {
        image: "/logo/logoipsum-2.png",
        alt: "Logo 2",
        url: "/",
      },
      {
        image: "/logo/logoipsum-3.png",
        alt: "Logo 3",
        url: "/",
      },
      {
        image: "/logo/logoipsum-4.png",
        alt: "Logo 4",
        url: "/",
      },
      {
        image: "/logo/logoipsum-5.png",
        alt: "Logo 5",
        url: "/",
      },
      {
        image: "/logo/logoipsum-6.png",
        alt: "Logo 6",
        url: "/",
      },
    ],
  },
};
