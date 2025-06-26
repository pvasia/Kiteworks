import type { Meta, StoryObj } from "@storybook/nextjs";
import AgencySelector from "./AgencySelector";

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
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the component",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story showing the standard agency selector
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "The default agency selector with all 5 federal agencies and standard messaging. Each card includes agency icon, names, description, and navigation.",
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

// Story with custom CSS class
export const WithCustomStyling: Story = {
  args: {
    className: "custom-agency-selector",
    title: "Secure Federal Solutions",
    subtitle:
      "Find the right cybersecurity platform for your government agency's specific operational requirements.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing how to apply custom CSS classes for additional styling customization while maintaining the core functionality.",
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
  args: {},
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
  args: {},
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
      "Hover over each agency card to see the interactive effects and agency-specific color themes.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration highlighting the hover effects, color themes, and visual feedback for each agency card. Each agency has its own distinctive color scheme on hover.",
      },
    },
  },
};
