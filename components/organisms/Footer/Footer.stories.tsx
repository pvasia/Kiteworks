import type { Meta, StoryObj } from "@storybook/nextjs";
import Footer, { SocialPlatform, ComplianceBadge, ContactType } from "./Footer";

// Define the default menu structure
const defaultMenu = [
  {
    label: "Solutions",
    url: "/solutions",
    subMenu: [
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
    subMenu: [
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
    subMenu: [
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
    subMenu: [
      { label: "Federal Team", url: "/about/team" },
      { label: "Procurement", url: "/about/procurement" },
      { label: "Partners", url: "/about/partners" },
      { label: "Contact Us", url: "/about/contact" },
    ],
  },
];

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A comprehensive footer component designed for the Kiteworks federal website, featuring navigation links, contact information, compliance badges, and legal information. Now with configurable social links, compliance badges, and contact cards using enums.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    menu: {
      description:
        "Array of menu items with nested submenus for footer navigation",
      control: { type: "object" },
    },
    socialLinks: {
      description: "Array of social media links using SocialPlatform enum",
      control: { type: "object" },
    },
    complianceBadges: {
      description: "Array of compliance badges using ComplianceBadge enum",
      control: { type: "object" },
    },
    contactCards: {
      description: "Array of contact cards using ContactType enum",
      control: { type: "object" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    menu: defaultMenu,
    brandDescription:
      "Secure file sharing and collaboration platform designed specifically for federal agencies and government contractors.",
    contactTitle: "Get in Touch",
    contactDescription:
      "Ready to secure your organization&apos;s file sharing and collaboration solutions.",
  },
  render: (args) => (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        paddingTop: "200px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        <h1>Sample Page Content</h1>
        <p>This is sample content to show the footer in context.</p>
        <p>The footer appears below with proper spacing and styling.</p>
      </div>
      <Footer {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The default footer with all sections including Solutions, Use Cases, Resources, About/Contact, federal sales information, contract vehicles, and legal links.",
      },
    },
  },
};

export const FooterOnly: Story = {
  args: {
    menu: defaultMenu,
  },
  render: (args) => <Footer {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "The footer component by itself, showing its dark theme and comprehensive link structure.",
      },
    },
  },
};

export const CustomMenu: Story = {
  args: {
    menu: [
      {
        label: "Products",
        url: "#",
        subMenu: [
          { label: "Enterprise Security", url: "/products/security" },
          { label: "File Transfer", url: "/products/transfer" },
          { label: "Compliance Tools", url: "/products/compliance" },
        ],
      },
      {
        label: "Support",
        url: "#",
        subMenu: [
          { label: "Documentation", url: "/support/docs" },
          { label: "Training", url: "/support/training" },
          { label: "Contact Support", url: "/support/contact" },
        ],
      },
    ],
  },
  render: (args) => <Footer {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Example of the footer with a custom menu structure, showing how the component adapts to different navigation requirements.",
      },
    },
  },
};

export const MinimalMenu: Story = {
  args: {
    menu: [
      {
        label: "Quick Links",
        url: "#",
        subMenu: [
          { label: "Home", url: "/" },
          { label: "About", url: "/about" },
          { label: "Contact", url: "/contact" },
        ],
      },
    ],
  },
  render: (args) => <Footer {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "A minimal footer example with just one section and a few links, demonstrating the component's flexibility.",
      },
    },
  },
};

export const CustomSocialAndCompliance: Story = {
  args: {
    menu: defaultMenu,
    brandDescription:
      "Custom configuration with different social platforms and compliance badges.",
    contactTitle: "Connect With Us",
    contactDescription: "Reach out through your preferred channel.",
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: "https://linkedin.com/company/custom",
        ariaLabel: "Connect on LinkedIn",
      },
      {
        platform: SocialPlatform.TWITTER,
        url: "https://twitter.com/custom",
        ariaLabel: "Follow on Twitter",
      },
    ],
    complianceBadges: [
      {
        badge: ComplianceBadge.FEDRAMP,
        label: "FedRAMP",
      },
      {
        badge: ComplianceBadge.NIST,
        label: "NIST",
      },
    ],
    contactCards: [
      {
        type: ContactType.SALES,
        title: "Business Inquiries",
        phone: "+1 (555) 123-4567",
        email: "business@custom.com",
      },
    ],
  },
  render: (args) => <Footer {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Example showing custom social media platforms, compliance badges, and contact information using the enum-based configuration.",
      },
    },
  },
};

export const EnterpriseFooter: Story = {
  args: {
    menu: [
      {
        label: "Enterprise",
        url: "/enterprise",
        subMenu: [
          { label: "Security Solutions", url: "/enterprise/security" },
          { label: "Compliance", url: "/enterprise/compliance" },
          { label: "Integration", url: "/enterprise/integration" },
        ],
      },
      {
        label: "Support",
        url: "/support",
        subMenu: [
          { label: "24/7 Support", url: "/support/24-7" },
          { label: "Professional Services", url: "/support/professional" },
          { label: "Training", url: "/support/training" },
        ],
      },
    ],
    brandDescription: "Enterprise-grade secure collaboration platform.",
    socialLinks: [
      {
        platform: SocialPlatform.LINKEDIN,
        url: "https://linkedin.com/company/enterprise",
        ariaLabel: "Enterprise LinkedIn",
      },
      {
        platform: SocialPlatform.YOUTUBE,
        url: "https://youtube.com/@enterprise",
        ariaLabel: "Enterprise YouTube",
      },
    ],
    complianceBadges: [
      {
        badge: ComplianceBadge.FISMA,
        label: "FISMA",
      },
      {
        badge: ComplianceBadge.FEDRAMP,
        label: "FedRAMP",
      },
      {
        badge: ComplianceBadge.NIST,
        label: "NIST",
      },
    ],
    contactCards: [
      {
        type: ContactType.SALES,
        title: "Enterprise Sales",
        phone: "+1 (800) 123-4567",
        email: "enterprise@company.com",
      },
      {
        type: ContactType.SUPPORT,
        title: "Enterprise Support",
        phone: "+1 (800) 987-6543",
        email: "support@company.com",
      },
    ],
  },
  render: (args) => <Footer {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "Enterprise-focused footer configuration showing how to customize all aspects using the enum-based system for different business needs.",
      },
    },
  },
};
