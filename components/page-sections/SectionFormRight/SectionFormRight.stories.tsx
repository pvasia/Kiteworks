import type { Meta, StoryObj } from "@storybook/nextjs";
import SectionFormRight from "./SectionFormRight";
import { fn } from "storybook/internal/test";

const meta = {
  title: "Components/Page Sections/SectionFormRight",
  component: SectionFormRight,
} satisfies Meta<typeof SectionFormRight>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Be the first to get latest updates from Kiteworks!",
    subtitle: "Get sign up with the latest blog posts and news",
    copy: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    firstName: "John",
    lastName: "Doe",
    company: "Company",
    businessEmail: "john.doe@example.com",
    onSubmit: () => fn(),
    onChangeFirstName: () => fn(),
    onChangeLastName: () => fn(),
    onChangeCompany: () => fn(),
    onChangeBusinessEmail: () => fn(),
  },
};
