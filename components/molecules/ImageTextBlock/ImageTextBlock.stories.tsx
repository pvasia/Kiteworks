import type { Meta, StoryObj } from "@storybook/nextjs";
import ImageTextBlock from "./ImageTextBlock";

const meta = {
  title: "Molecules/ImageTextBlock",
  component: ImageTextBlock,
} satisfies Meta<typeof ImageTextBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Border: Story = {
  args: {
    variant: "border",
    image: "https://picsum.photos/800/800",
    heading: "Lorem ipsum dolor sit amet",
    bodyCopy:
      "Diam vulputate ut pharetra sit amet. Sed velit dignissim sodales ut eu sem. Vel pharetra vel turpis nunc eget lorem Iaculis at. Vitae congue eu consequat ac felis donec et odio pellentesque. Faucibus nisl tincidunt eget nullam non nisi. Dolor magna eget est lorem.",
    buttonLabel: "Read More",
    buttonUrl: "/",
  },
};

export const Borderless: Story = {
  args: {
    variant: "borderless",
    image: "https://picsum.photos/800/800",
    heading: "Lorem ipsum dolor sit amet",
    bodyCopy:
      "Diam vulputate ut pharetra sit amet. Sed velit dignissim sodales ut eu sem. Vel pharetra vel turpis nunc eget lorem Iaculis at. Vitae congue eu consequat ac felis donec et odio pellentesque. Faucibus nisl tincidunt eget nullam non nisi. Dolor magna eget est lorem.",
    buttonLabel: "Read More",
    buttonUrl: "/",
  },
};

export const ImageRight: Story = {
  args: {
    variant: "border",
    image: "https://picsum.photos/800/800",
    heading: "Lorem ipsum dolor sit amet",
    bodyCopy:
      "Diam vulputate ut pharetra sit amet. Sed velit dignissim sodales ut eu sem. Vel pharetra vel turpis nunc eget lorem Iaculis at. Vitae congue eu consequat ac felis donec et odio pellentesque. Faucibus nisl tincidunt eget nullam non nisi. Dolor magna eget est lorem.",
    buttonLabel: "Read More",
    buttonUrl: "/",
    imageRight: true,
  },
};

export const ImageRightBorderless: Story = {
  args: {
    variant: "borderless",
    image: "https://picsum.photos/800/800",
    heading: "Lorem ipsum dolor sit amet",
    bodyCopy:
      "Diam vulputate ut pharetra sit amet. Sed velit dignissim sodales ut eu sem. Vel pharetra vel turpis nunc eget lorem Iaculis at. Vitae congue eu consequat ac felis donec et odio pellentesque. Faucibus nisl tincidunt eget nullam non nisi. Dolor magna eget est lorem.",
    buttonLabel: "Read More",
    buttonUrl: "/",
    imageRight: true,
  },
};
