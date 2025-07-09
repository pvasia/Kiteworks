export const sharedContent = {
  header: {
    alert: {
      type: "info" as const,
      message:
        "New FedRAMP High Authorization now available for all federal agencies",
      link: "/",
    },
    menu: [
      {
        label: "Solutions",
        url: "/solutions",
        subItems: [
          { label: "Department of Defense", url: "/solutions/defense" },
          {
            label: "Department of Homeland Security",
            url: "/solutions/homeland-security",
          },
          { label: "Department of Justice", url: "/solutions/justice" },
          {
            label: "Intelligence Community",
            url: "/solutions/intelligence",
          },
          {
            label: "Health and Human Services",
            url: "/solutions/health-human-services",
          },
        ],
      },
      {
        label: "Use Cases",
        url: "/use-cases",
        subItems: [
          { label: "CMMC Compliance", url: "/use-cases/cmmc-compliance" },
          { label: "FOIA Request Management", url: "/use-cases/foia-requests" },
          { label: "Secure File Sharing", url: "/use-cases/file-sharing" },
          {
            label: "Incident Response",
            url: "/use-cases/incident-response",
          },
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
    ],
  },
};

export type SharedContent = typeof sharedContent;
