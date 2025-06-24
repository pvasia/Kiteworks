import type { Meta, StoryObj } from "@storybook/nextjs";
import Testimonial from "./Testimonial";

const meta = {
  title: "Organisms/Testimonial",
  component: Testimonial,
} satisfies Meta<typeof Testimonial>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    title: "Why Clients Choose Kiteworks",
    quote:
      "With one solution, we enhanced internal and external collaboration and improved business communications and agility for our employees. Our senior leaders are thrilled that Kiteworks was embraced so quickly.",
    author: "Soma Bhaduri",
    authorTitle: "Senior Director of Information Security & Risk Management",
    authorCompany: "NYC Health+ Hospitals",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    title: "Why Clients Choose Kiteworks",
    quote:
      "With one solution, we enhanced internal and external collaboration and improved business communications and agility for our employees. Our senior leaders are thrilled that Kiteworks was embraced so quickly.",
    author: "Soma Bhaduri",
    authorTitle: "Senior Director of Information Security & Risk Management",
    authorCompany: "NYC Health+ Hospitals",
    logo: "images/logo-nyc.png",
  },
};
