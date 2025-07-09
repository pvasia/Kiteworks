import type { Meta, StoryObj } from "@storybook/nextjs";
import TestimonialSlider from "./TestimonialSlider";

const meta: Meta<typeof TestimonialSlider> = {
  title: "Organisms/TestimonialSlider",
  component: TestimonialSlider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    autoAdvance: {
      control: { type: "boolean" },
      description: "Whether the slider should auto-advance",
    },
    autoAdvanceInterval: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description: "Auto-advance interval in milliseconds",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample testimonial data for stories
const sampleTestimonialsPrimary = [
  {
    title: "Excellent Service",
    quote:
      "The platform exceeded our expectations. The implementation was smooth and the support team was incredibly responsive throughout the process.",
    author: "John Smith",
    authorTitle: "Chief Technology Officer",
    authorCompany: "Tech Solutions Inc.",
    logo: "/images/logo-nyc.png",
  },
  {
    title: "Outstanding Results",
    quote:
      "We've seen a 40% increase in productivity since implementing this solution. The intuitive interface made adoption across our organization seamless.",
    author: "Emily Johnson",
    authorTitle: "Operations Director",
    authorCompany: "Innovation Corp",
    logo: "/images/logo-nyc.png",
  },
];

const sampleTestimonialsSecondary = [
  {
    title: "Why Clients Choose Kiteworks",
    quote:
      "With one solution, we enhanced internal and external collaboration and improved business communications and agility for our employees. Our senior leaders are thrilled that Kiteworks was embraced so quickly.",
    author: "Soma Bhaduri",
    authorTitle: "Senior Director of Information Security & Risk Management",
    authorCompany: "NYC Health+ Hospitals",
    logo: "/images/logo-nyc.png",
  },
  {
    title: "Trusted by Government Agencies",
    quote:
      "Kiteworks has transformed how we handle sensitive documents. The security features and compliance capabilities give us confidence in our file management processes.",
    author: "Michael Johnson",
    authorTitle: "IT Director",
    authorCompany: "Department of Defense",
    logo: "/images/logo-nyc.png",
  },
  {
    title: "Enhanced Security & Compliance",
    quote:
      "The FedRAMP High authorization was crucial for our adoption. Kiteworks provides the security and compliance we need while maintaining user-friendly workflows.",
    author: "Sarah Martinez",
    authorTitle: "CISO",
    authorCompany: "Department of Homeland Security",
    logo: "/images/logo-nyc.png",
  },
];

const singleTestimonial = [
  {
    title: "Outstanding Experience",
    quote:
      "The comprehensive features and excellent support made this the perfect solution for our organization. Highly recommend for any enterprise looking to modernize their document management.",
    author: "Jennifer Wilson",
    authorTitle: "Chief Information Officer",
    authorCompany: "Modern Enterprises",
    logo: "/images/logo-nyc.png",
  },
];

// Default story with multiple testimonials
export const Default: Story = {
  args: {
    testimonials: sampleTestimonialsPrimary,
    autoAdvance: true,
    autoAdvanceInterval: 5000,
    variant: "secondary",
  },
};

// Single testimonial
export const SingleTestimonial: Story = {
  args: {
    testimonials: singleTestimonial,
    autoAdvance: false,
    variant: "secondary",
  },
};

// Primary variant testimonials
export const PrimaryVariant: Story = {
  args: {
    testimonials: sampleTestimonialsPrimary,
    autoAdvance: true,
    autoAdvanceInterval: 4000,
    variant: "primary",
  },
};

// Secondary variant testimonials
export const SecondaryVariant: Story = {
  args: {
    testimonials: sampleTestimonialsSecondary,
    autoAdvance: true,
    autoAdvanceInterval: 6000,
    variant: "secondary",
  },
};

// Fast auto-advance
export const FastAutoAdvance: Story = {
  args: {
    testimonials: sampleTestimonialsSecondary,
    autoAdvance: true,
    autoAdvanceInterval: 2000,
    variant: "secondary",
  },
};

// Slow auto-advance
export const SlowAutoAdvance: Story = {
  args: {
    testimonials: sampleTestimonialsPrimary,
    autoAdvance: true,
    autoAdvanceInterval: 8000,
    variant: "primary",
  },
};
