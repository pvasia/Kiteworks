import type { Meta, StoryObj } from "@storybook/nextjs";
import Footer from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A comprehensive footer component designed for the Kiteworks federal website, featuring navigation links, contact information, compliance badges, and legal information.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => (
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
      <Footer />
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
  render: () => <Footer />,
  parameters: {
    docs: {
      description: {
        story:
          "The footer component by itself, showing its dark theme and comprehensive link structure.",
      },
    },
  },
};
