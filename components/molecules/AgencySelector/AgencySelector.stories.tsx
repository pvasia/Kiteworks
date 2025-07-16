import type { Meta, StoryObj } from "@storybook/nextjs";
import AgencySelector from "./AgencySelector";
import React from "react";

const sampleAgencies = [
  {
    name: "Department of Defense",
    description:
      "Advanced cybersecurity solutions for defense operations and classified information handling.",
    url: "/solutions/defense",
    icon: "ShieldCheckIcon",
  },
  {
    name: "Department of Homeland Security",
    description:
      "Secure communication and data sharing for homeland security initiatives and border protection.",
    url: "/solutions/homeland-security",
    icon: "HomeIcon",
  },
  {
    name: "Department of Justice",
    description:
      "Compliant file sharing and case management for law enforcement and legal proceedings.",
    url: "/solutions/justice",
    icon: "ScaleIcon",
  },
  {
    name: "Intelligence Community",
    description:
      "High-security collaboration tools for intelligence gathering and analysis operations.",
    url: "/solutions/intelligence",
    icon: "EyeIcon",
  },
  {
    name: "Health and Human Services",
    description:
      "HIPAA-compliant platforms for healthcare data management and public health coordination.",
    url: "/solutions/health-human-services",
    icon: "HeartIcon",
  },
];

const sampleAgenciesWithReactIcons = [
  {
    name: "Department of Defense",
    description:
      "Advanced cybersecurity solutions for defense operations and classified information handling.",
    url: "/solutions/defense",
    icon: "ShieldCheckIcon",
  },
  {
    name: "Department of Homeland Security",
    description:
      "Secure communication and data sharing for homeland security initiatives and border protection.",
    url: "/solutions/homeland-security",
    icon: "HomeIcon",
  },
  {
    name: "Department of Justice",
    description:
      "Compliant file sharing and case management for law enforcement and legal proceedings.",
    url: "/solutions/justice",
    icon: "ScaleIcon",
  },
  {
    name: "Intelligence Community",
    description:
      "High-security collaboration tools for intelligence gathering and analysis operations.",
    url: "/solutions/intelligence",
    icon: "EyeIcon",
  },
  {
    name: "Health and Human Services",
    description:
      "HIPAA-compliant platforms for healthcare data management and public health coordination.",
    url: "/solutions/health-human-services",
    icon: "HeartIcon",
  },
];

const meta: Meta<typeof AgencySelector> = {
  title: "Molecules/AgencySelector",
  component: AgencySelector,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Interactive agency selector allowing visitors to quickly find agency-specific solutions. Features cards for major federal agencies with tailored descriptions and navigation.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Main heading for the agency selector section",
    },
    subtitle: {
      control: "text",
      description: "Supporting text explaining the purpose of the selector",
    },
    items: {
      control: "object",
      description: "Array of agency card data to display",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story showing the standard agency selector
export const Default: Story = {
  args: {
    items: sampleAgenciesWithReactIcons,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default agency selector with federal agencies and standard messaging. Each card includes agency icon, names, description, and navigation.",
      },
    },
  },
};

// Story with custom title and subtitle
export const CustomContent: Story = {
  args: {
    title: "Choose Your Federal Agency",
    subtitle:
      "Discover specialized cybersecurity solutions tailored to your agency's unique requirements and compliance standards.",
    items: sampleAgenciesWithReactIcons,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Agency selector with customized title and subtitle text to match different page contexts or messaging needs.",
      },
    },
  },
};

// Story with shorter, more concise messaging
export const Concise: Story = {
  args: {
    title: "Agency Solutions",
    subtitle: "Select your agency to explore tailored security solutions.",
    items: sampleAgenciesWithReactIcons,
  },
  parameters: {
    docs: {
      description: {
        story:
          "A more concise version with shorter title and subtitle, suitable for pages with limited space or direct messaging needs.",
      },
    },
  },
};

// Story with string-based icons
export const WithStringIcons: Story = {
  args: {
    title: "String-Based Icons",
    subtitle:
      "Example showing how to use string-based icon names for more flexible icon management.",
    items: sampleAgencies,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing how to use string-based icon names instead of React elements for more flexible icon management.",
      },
    },
  },
};

// Story demonstrating the component on different backgrounds
export const OnDarkBackground: Story = {
  args: {
    title: "Federal Agency Solutions",
    subtitle:
      "Explore secure, compliant platforms designed specifically for government operations and sensitive data handling.",
    items: sampleAgenciesWithReactIcons,
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#1a1a1a", padding: "2rem 0" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Agency selector displayed on a dark background to show how it adapts to different page themes and color schemes.",
      },
    },
  },
};

// Story showing mobile responsiveness
export const MobileView: Story = {
  args: {
    items: sampleAgenciesWithReactIcons,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "Agency selector optimized for mobile devices, showing how the grid adapts to single-column layout on smaller screens.",
      },
    },
  },
};

// Story showing tablet responsiveness
export const TabletView: Story = {
  args: {
    items: sampleAgenciesWithReactIcons,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    docs: {
      description: {
        story:
          "Agency selector on tablet-sized screens, demonstrating responsive grid behavior and touch-friendly interactions.",
      },
    },
  },
};

// Interactive story for testing hover states
export const InteractiveDemo: Story = {
  args: {
    title: "Interactive Agency Selector",
    subtitle:
      "Hover over each agency card to see the interactive effects and visual feedback.",
    items: sampleAgenciesWithReactIcons,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration highlighting the hover effects and visual feedback for each agency card.",
      },
    },
  },
};
