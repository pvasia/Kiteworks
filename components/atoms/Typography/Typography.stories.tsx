import type { Meta, StoryObj } from "@storybook/nextjs";
import Typography from "./Typography";

const meta = {
  title: "Design System/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "title",
        "subtitle",
        "heading",
        "sub-heading",
        "sub-headline",
        "body-copy",
        "footnotes",
      ],
    },
    highlight: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// Typography variants showcase
export const Title: Story = {
  args: {
    variant: "title",
    children: "This is a Title",
  },
};

export const Subtitle: Story = {
  args: {
    variant: "subtitle",
    children: "This is a Subtitle",
  },
};

export const Heading: Story = {
  args: {
    variant: "heading",
    children: "This is a Heading",
  },
};

export const SubHeading: Story = {
  args: {
    variant: "sub-heading",
    children: "This is a Sub-Heading",
  },
};

export const SubHeadline: Story = {
  args: {
    variant: "sub-headline",
    children: "This is a Sub-Headline",
  },
};

export const BodyCopy: Story = {
  args: {
    variant: "body-copy",
    children:
      "This is body copy text. It&apos;s perfect for paragraphs and general content throughout your application.",
  },
};

export const Footnotes: Story = {
  args: {
    variant: "footnotes",
    children: "This is footnotes text for smaller details and disclaimers.",
  },
};

// Typography with highlight
export const TitleWithHighlight: Story = {
  args: {
    variant: "title",
    highlight: true,
    children: "This is a Highlighted Title",
  },
};

export const SubtitleWithHighlight: Story = {
  args: {
    variant: "subtitle",
    highlight: true,
    children: "This is a Highlighted Subtitle",
  },
};

export const HeadingWithHighlight: Story = {
  args: {
    variant: "heading",
    highlight: true,
    children: "This is a Highlighted Heading",
  },
};

// Typography with HTML content
export const TitleWithLineBreak: Story = {
  args: {
    variant: "title",
    dangerouslySetInnerHTML: {
      __html: "Advanced Security<br/>for Defense Operations",
    },
  },
};

export const SubtitleWithLineBreak: Story = {
  args: {
    variant: "subtitle",
    dangerouslySetInnerHTML: {
      __html: "Secure, compliant solutions<br/>for government organizations",
    },
  },
};

export const BodyCopyWithLineBreak: Story = {
  args: {
    variant: "body-copy",
    dangerouslySetInnerHTML: {
      __html:
        "Enterprise-grade security solutions designed for DoD operations,<br/>ensuring mission-critical data remains protected.",
    },
  },
};

// All typography styles showcase
export const AllTypographyStyles: Story = {
  args: {
    variant: "title",
    children: "Typography Showcase",
  },
  render: () => (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Typography variant="title">Page Title (48px, 600 weight)</Typography>
      <Typography variant="subtitle">
        Page Subtitle (34px, 600 weight)
      </Typography>
      <Typography variant="heading">
        Section Heading (24px, 600 weight)
      </Typography>
      <Typography variant="sub-heading">
        Sub-Heading (18px, 600 weight)
      </Typography>
      <Typography variant="sub-headline">Sub-Headline (14px, bold)</Typography>
      <Typography variant="body-copy">
        This is body copy text (16px, 500 weight). It&apos;s perfect for
        paragraphs and general content throughout your application. The line
        height is optimized for readability at 1.5.
      </Typography>
      <Typography variant="footnotes">
        This is footnotes text (14px, 500 weight) for smaller details and
        disclaimers.
      </Typography>
      <br />
      <Typography variant="heading" highlight>
        This is a highlighted heading using the secondary color
      </Typography>
    </div>
  ),
};
