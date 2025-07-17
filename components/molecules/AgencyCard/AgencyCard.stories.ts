import type { Meta, StoryObj } from "@storybook/nextjs";
import AgencyCard from "./AgencyCard";

const meta = {
  title: "Molecules/AgencyCard",
  component: AgencyCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AgencyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Department of Defense
export const DepartmentOfDefense: Story = {
  args: {
    name: "Department of Defense",
    description:
      "Advanced cybersecurity solutions for defense operations and classified information handling.",
    url: "/solutions/defense",
    icon: "ShieldCheckIcon",
  },
};

// Department of Homeland Security
export const DepartmentOfHomelandSecurity: Story = {
  args: {
    name: "Department of Homeland Security",
    description:
      "Secure communication and data sharing for homeland security initiatives and border protection.",
    url: "/solutions/homeland-security",
    icon: "HomeIcon",
  },
};

// Department of Justice
export const DepartmentOfJustice: Story = {
  args: {
    name: "Department of Justice",
    description:
      "Compliant file sharing and case management for law enforcement and legal proceedings.",
    url: "/solutions/justice",
    icon: "ScaleIcon",
  },
};

// Intelligence Community
export const IntelligenceCommunity: Story = {
  args: {
    name: "Intelligence Community",
    description:
      "High-security collaboration tools for intelligence gathering and analysis operations.",
    url: "/solutions/intelligence",
    icon: "EyeIcon",
  },
};

// Health and Human Services
export const HealthAndHumanServices: Story = {
  args: {
    name: "Health and Human Services",
    description:
      "HIPAA-compliant platforms for healthcare data management and public health coordination.",
    url: "/solutions/health-human-services",
    icon: "HeartIcon",
  },
};
