import type { Meta, StoryObj } from "@storybook/nextjs";
import Timeline from "./Timeline";

const meta = {
  title: "Organisms/Timeline",
  component: Timeline,
} satisfies Meta<typeof Timeline>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleTimelineItems = [
  {
    title: "Stage 1 Block",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus.",
    date: "November 18, 2021 | Press Release | Palos, Alto, CA",
    link: {
      text: "Stage 1 description",
      url: "#",
    },
  },
  {
    title: "Stage 2 Block",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus.",
    date: "July 10, 2021 | PARTNER ALLIANCE",
    link: {
      text: "Stage 2 description",
      url: "#",
    },
  },
  {
    title: "Stage 3 Block",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus.",
    link: {
      text: "Stage 3 description",
      url: "#",
    },
  },
  {
    title: "Stage 4 Block",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus.",
    link: {
      text: "Stage 4 description",
      url: "#",
    },
  },
];

export const Horizontal: Story = {
  args: {
    variant: "horizontal",
    heading: "Lorem ipsum dolor sit amet",
    bodyCopy:
      "Pulvinar pellentesque habitant morbi tristique senectus et. Sed nisl lacus sed viverra tellus in hac habitasse platea.",
    items: sampleTimelineItems,
  },
};

export const Vertical: Story = {
  args: {
    variant: "vertical",
    heading: "Lorem ipsum dolor sit amet",
    bodyCopy:
      "Timeline layout is used to represent the information in a chronological sequence. The timeline boxes are designed opposite to each other so that it will not overlap the content to its side. To ensure that the timeline is not overcrowded with the boxes, it is positioned to the blank space opposite of the timeline boxes. Follow the instructions in the guideline to ensure brand consistency.",
    items: sampleTimelineItems,
  },
};

export const HorizontalWithoutHeader: Story = {
  args: {
    variant: "horizontal",
    items: sampleTimelineItems,
  },
};

export const VerticalWithoutHeader: Story = {
  args: {
    variant: "vertical",
    items: sampleTimelineItems,
  },
};
