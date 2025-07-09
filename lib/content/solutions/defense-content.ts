import { IconHeadingProps } from "@/components/molecules/IconHeading/IconHeading";

interface ThreeTilesArray extends Array<IconHeadingProps> {
  title: string;
  subHeading: string;
}

export const defenseContent = {
  hero: {
    imageUrl: "/images/img-3.png",
    title: "Department of Defense",
    subtitle:
      "Secure, compliant, and efficient document management tailored for government organizations.",
    buttonText: "Explore Solutions",
    buttonLink: "/solutions",
  },
  threeTiles: Object.assign(
    [
      {
        icon: "/images/feature-icon-1.png",
        heading: "Classified Information<br/>Handling",
        bodyCopy:
          "Secure management and transmission of classified documents with full audit trails and compliance with DoD security standards including STIG requirements.",
        buttonLabel: "Learn More",
        buttonUrl: "/solutions/defense/classified-handling",
      },
      {
        icon: "/images/feature-icon-2.png",
        heading: "CMMC Compliance<br/>Ready",
        bodyCopy:
          "Built-in Cybersecurity Maturity Model Certification (CMMC) compliance features to ensure your organization meets all DoD contractor requirements.",
        buttonLabel: "View Compliance",
        buttonUrl: "/solutions/defense/cmmc-compliance",
      },
      {
        icon: "/images/feature-icon-3.png",
        heading: "Secure Communications<br/>Platform",
        bodyCopy:
          "End-to-end encrypted communications for sensitive military operations with multi-level security clearance support and real-time threat monitoring.",
        buttonLabel: "Explore Platform",
        buttonUrl: "/solutions/defense/secure-communications",
      },
    ],
    {
      title: "Advanced Security <br/>for Defense Operations",
      subHeading:
        "Enterprise-grade security solutions designed for DoD operations,<br/> ensuring mission-critical data remains protected.",
    }
  ) as ThreeTilesArray,
  sectionFormCenter: {
    title: "Get Started with Kiteworks",
    subtitle:
      "Ready to transform your agency's file management? Contact us today to learn how Kiteworks can secure and streamline your organization's document workflows.",
    fullname: "Full Name",
    company: "Agency/Department",
    businessEmail: "Government Email",
  },
};

export type DefenseContent = typeof defenseContent;
