import type { Meta, StoryObj } from "@storybook/nextjs";
import Button from "./Button";
import { fn } from "storybook/test";
import React from "react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  PlusIcon,
  ArrowDownTrayIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Button variants
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "medium",
    href: "/",
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "medium",
    href: "/",
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    variant: "tertiary",
    size: "medium",
    href: "/",
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
    size: "medium",
    href: "/",
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

// Button sizes
export const XSmallButton: Story = {
  args: {
    children: "X-Small Button",
    variant: "primary",
    size: "x-small",
    href: "/",
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

export const SmallButton: Story = {
  args: {
    children: "Small Button",
    variant: "primary",
    size: "small",
    href: "/",
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

export const MediumButton: Story = {
  args: {
    children: "Medium Button",
    variant: "primary",
    size: "medium",
    href: "/",
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

export const LargeButton: Story = {
  args: {
    children: "Large Button",
    variant: "primary",
    size: "large",
    href: "/",
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

// Button with icons
export const ButtonWithIconLeft: Story = {
  args: {
    children: "Search",
    variant: "primary",
    size: "medium",
    iconLeft: React.createElement(MagnifyingGlassIcon),
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

export const ButtonWithIconRight: Story = {
  args: {
    children: "Continue",
    variant: "primary",
    size: "medium",
    iconRight: React.createElement(ArrowRightIcon),
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

export const ButtonWithBothIcons: Story = {
  args: {
    children: "Navigate",
    variant: "secondary",
    size: "medium",
    iconLeft: React.createElement(ArrowLeftIcon),
    iconRight: React.createElement(ChevronRightIcon),
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

export const ButtonDownload: Story = {
  args: {
    children: "Download",
    variant: "tertiary",
    size: "medium",
    iconRight: React.createElement(ArrowDownTrayIcon),
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};

export const ButtonAddNew: Story = {
  args: {
    children: "Add New",
    variant: "primary",
    size: "small",
    iconLeft: React.createElement(PlusIcon),
    disabled: false,
    className: "",
    type: "button",
    onClick: () => fn(),
  },
};
