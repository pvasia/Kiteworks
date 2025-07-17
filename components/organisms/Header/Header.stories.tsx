import type { Meta, StoryObj } from "@storybook/nextjs";
import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Federal navigation structure based on Kiteworks architecture
const federalMenu = [
  {
    label: "Solutions",
    url: "/solutions",
    subItems: [
      { label: "Department of Defense", url: "/solutions/defense" },
      { label: "Department of Homeland Security", url: "/solutions/dhs" },
      { label: "Department of Justice", url: "/solutions/justice" },
      { label: "Intelligence Community", url: "/solutions/intelligence" },
      { label: "Health and Human Services", url: "/solutions/hhs" },
    ],
  },
  {
    label: "Use Cases",
    url: "/use-cases",
    subItems: [
      { label: "CMMC Compliance", url: "/use-cases/cmmc" },
      { label: "FOIA Request Management", url: "/use-cases/foia" },
      { label: "Secure File Sharing", url: "/use-cases/file-sharing" },
      { label: "Incident Response", url: "/use-cases/incident-response" },
      { label: "Remote Workforce", url: "/use-cases/remote-work" },
    ],
  },
  {
    label: "Resources",
    url: "/resources",
    subItems: [
      { label: "Blog", url: "/resources/blog" },
      { label: "Whitepapers", url: "/resources/whitepapers" },
      { label: "Case Studies", url: "/resources/case-studies" },
      { label: "Webinars & Events", url: "/resources/events" },
      { label: "FAQ", url: "/resources/faq" },
    ],
  },
  {
    label: "About",
    url: "/about",
    subItems: [
      { label: "Federal Team", url: "/about/team" },
      { label: "Procurement", url: "/about/procurement" },
      { label: "Partners", url: "/about/partners" },
      { label: "Contact Us", url: "/about/contact" },
    ],
  },
];

export const Default: Story = {
  args: {
    menu: federalMenu,
    showCompliance: true,
  },
};

export const WithInfoAlert: Story = {
  args: {
    menu: federalMenu,
    showCompliance: true,
    alert: {
      type: "info",
      message:
        "New FedRAMP High Authorization now available for all federal agencies",
      link: "/resources/fedramp-authorization",
    },
  },
};

export const WithNewsAlert: Story = {
  args: {
    menu: federalMenu,
    showCompliance: true,
    alert: {
      type: "news",
      message: "BREAKING: Enhanced CMMC compliance features now available",
      link: "/resources/cmmc-update",
    },
  },
};

export const WithAnnouncementAlert: Story = {
  args: {
    menu: federalMenu,
    showCompliance: true,
    alert: {
      type: "announcement",
      message: "Join us at the Federal IT Expo - August 24-26 from 9:00 AM",
      link: "/events/federal-it-expo",
    },
  },
};

export const WithoutCompliance: Story = {
  args: {
    menu: federalMenu,
    showCompliance: false,
  },
};

export const SimpleMenu: Story = {
  args: {
    menu: [
      { label: "Solutions", url: "/solutions" },
      { label: "Use Cases", url: "/use-cases" },
      { label: "Resources", url: "/resources" },
      { label: "About", url: "/about" },
    ],
    showCompliance: true,
  },
};
