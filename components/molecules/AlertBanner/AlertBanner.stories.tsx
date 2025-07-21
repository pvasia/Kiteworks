import type { Meta, StoryObj } from "@storybook/nextjs";
import AlertBanner from "./AlertBanner";

const meta: Meta<typeof AlertBanner> = {
  title: "Molecules/AlertBanner",
  component: AlertBanner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["news", "announcement", "info"],
    },
    message: {
      control: { type: "text" },
    },
    link: {
      control: { type: "text" },
    },
    linkText: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "info",
    message: "Important information for all users",
    link: "/announcements",
    linkText: "Learn More",
  },
};

export const News: Story = {
  args: {
    type: "news",
    message: "New features available! Check out our latest updates.",
    link: "/news",
    linkText: "Read More",
  },
};

export const Announcement: Story = {
  args: {
    type: "announcement",
    message: "Scheduled maintenance on Sunday, 2:00 AM - 4:00 AM EST",
    link: "/maintenance",
    linkText: "View Details",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    message: "System upgrade completed successfully",
    link: "/updates",
    linkText: "View Changes",
  },
};

export const WithoutLink: Story = {
  args: {
    type: "info",
    message: "Your session will expire in 5 minutes",
  },
};

export const LongMessage: Story = {
  args: {
    type: "announcement",
    message:
      "We are experiencing higher than normal traffic. Please be patient while we work to resolve this issue. Thank you for your understanding.",
    link: "/status",
    linkText: "Check Status",
  },
};

export const ShortMessage: Story = {
  args: {
    type: "news",
    message: "Welcome!",
    link: "/welcome",
    linkText: "Get Started",
  },
};
