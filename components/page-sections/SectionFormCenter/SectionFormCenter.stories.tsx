import type { Meta, StoryObj } from "@storybook/nextjs";
import SectionFormCenter from "./SectionFormCenter";

const meta = {
  title: "Components/Page Sections/SectionFormCenter",
  component: SectionFormCenter,
} satisfies Meta<typeof SectionFormCenter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Be the first to get latest updates from Kiteworks!",
    subtitle: "Get sign up with the latest blog posts and news",
  },
};
