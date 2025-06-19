import type { Meta, StoryObj } from "@storybook/nextjs";
import NewsTicker from "./NewsTicker";

const meta = {
  title: "Molecules/NewsTicker",
  component: NewsTicker,
} satisfies Meta<typeof NewsTicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BreakingNews: Story = {
  args: {
    variant: "breaking-news",
    text: "Chipotle email marketing hacked to send phishing emails.",
  },
};

export const Announcements: Story = {
  args: {
    variant: "announcements",
    text: "Top 5 Benefits of FedRAMP - August 26 @ 11am PT/2pm ET",
  },
};

export const Important: Story = {
  args: {
    variant: "important",
    text: "Kiteworks shared mailbox feature is now available today!",
  },
};
