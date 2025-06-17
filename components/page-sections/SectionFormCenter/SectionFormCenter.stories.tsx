import type { Meta, StoryObj } from "@storybook/nextjs";
import SectionFormCenter from "./SectionFormCenter";
import { fn } from "storybook/internal/test";

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
    fullname: "John Doe",
    company: "Company",
    businessEmail: "john.doe@example.com",
    onSubmit: () => fn(),
    onChangeFullname: () => fn(),
    onChangeCompany: () => fn(),
    onChangeBusinessEmail: () => fn(),
  },
};
