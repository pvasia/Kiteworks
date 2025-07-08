export const clientContent = {
  hero1: {
    imageUrl: "/images/img-1.png",
    title: "Enterprise Solutions for Federal Agencies",
    subtitle:
      "Secure, compliant, and efficient document management tailored for government organizations.",
    buttonText: "Explore Solutions",
    buttonLink: "/solutions",
  },
  pageSection3: {
    heading:
      "Secure File Management<br/><span class='highlight'>Built for Government</span>",
    bodyCopy:
      "Our platform provides enterprise-grade security with FedRAMP High authorization, ensuring your sensitive documents meet the highest compliance standards. Built specifically for federal agencies who need secure, efficient file management.",
    imageUrl: "/images/section-3.png",
  },
  pageSection4: {
    heading:
      "Streamlined Workflows<br/><span class='highlight'>Enhanced Productivity</span>",
    bodyCopy:
      "Transform how your team collaborates with intuitive tools designed for government workflows. From FOIA requests to inter-agency collaboration, our platform adapts to your unique requirements.",
    imageUrl: "/images/section-4.png",
  },
  hero: {
    imageUrl: "/images/building.jpg",
    title: "Ready to Modernize Your Agency?",
    subtitle:
      "Join federal agencies already using Kiteworks to enhance security and streamline operations.",
    buttonText: "Request Demo",
    buttonLink: "/demo",
    isParallax: true,
    height: "460px",
  },
  sectionFormCenter: {
    title: "Get Started with Kiteworks",
    subtitle:
      "Ready to transform your agency's file management? Contact us today to learn how Kiteworks can secure and streamline your organization's document workflows.",
    fullname: "Full Name",
    company: "Agency/Department",
    businessEmail: "Government Email",
  },
  testimonials: [
    {
      variant: "secondary" as const,
      title: "Why Clients Choose Kiteworks",
      quote:
        "With one solution, we enhanced internal and external collaboration and improved business communications and agility for our employees. Our senior leaders are thrilled that Kiteworks was embraced so quickly.",
      author: "Soma Bhaduri",
      authorTitle: "Senior Director of Information Security & Risk Management",
      authorCompany: "NYC Health+ Hospitals",
      logo: "/images/logo-nyc.png",
    },
    {
      variant: "secondary" as const,
      title: "Trusted by Government Agencies",
      quote:
        "Kiteworks has transformed how we handle sensitive documents. The security features and compliance capabilities give us confidence in our file management processes.",
      author: "Michael Johnson",
      authorTitle: "IT Director",
      authorCompany: "Department of Defense",
      logo: "/images/logo-nyc.png",
    },
    {
      variant: "secondary" as const,
      title: "Enhanced Security & Compliance",
      quote:
        "The FedRAMP High authorization was crucial for our adoption. Kiteworks provides the security and compliance we need while maintaining user-friendly workflows.",
      author: "Sarah Martinez",
      authorTitle: "CISO",
      authorCompany: "Department of Homeland Security",
      logo: "/images/logo-nyc.png",
    },
    {
      variant: "secondary" as const,
      title: "Streamlined Operations",
      quote:
        "Our team's productivity has increased significantly since implementing Kiteworks. The integration capabilities and intuitive interface made adoption seamless.",
      author: "David Chen",
      authorTitle: "Operations Manager",
      authorCompany: "Department of Justice",
      logo: "/images/logo-nyc.png",
    },
  ],
};

export type ClientContent = typeof clientContent;
