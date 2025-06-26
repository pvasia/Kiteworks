import Hero1 from "@/components/hero/Hero1";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";
import AgencySelector from "@/components/molecules/AgencySelector";
import IconHeading, {
  IconHeadingProps,
} from "@/components/molecules/IconHeading";
import ThreeTiles from "@/components/tiles/three-tiles";

const mockDataIconHeadings: IconHeadingProps[] = [
  {
    icon: "/images/icon-1.png",
    heading: "Heading 1",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 2",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 3",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 4",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Button",
    buttonUrl: "/",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 5",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Button",
    buttonUrl: "/",
  },
  {
    icon: "/images/icon-1.png",
    heading: "Heading 6",
    bodyCopy:
      "Eget nulla facilisi etiam dignissim diam quis enim lobortis. Velit laoreet id donec ultrices tincidunt.",
    buttonLabel: "Button",
    buttonUrl: "/",
  },
];

const headerMenu = [
  {
    label: "Solutions",
    url: "/solutions",
    subItems: [
      { label: "Department of Defense", url: "/solutions/defense" },
      {
        label: "Department of Homeland Security",
        url: "/solutions/dhs",
      },
      { label: "Department of Justice", url: "/solutions/justice" },
      {
        label: "Intelligence Community",
        url: "/solutions/intelligence",
      },
      { label: "Health and Human Services", url: "/solutions/hhs" },
    ],
  },
  {
    label: "Use Cases",
    url: "/use-cases",
    subItems: [
      { label: "CMMC Compliance", url: "/use-cases/cmmc" },
      { label: "FOIA Request Management", url: "/use-cases/foia" },
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
];

export default function Home() {
  return (
    <div>
      <Header
        alert={{
          type: "info",
          message:
            "New FedRAMP High Authorization now available for all federal agencies",
          link: "/",
        }}
        menu={headerMenu}
      />
      <Hero1
        imageUrl="/images/img-1.png"
        title="Welcome to Kiteworks"
        subtitle="Kiteworks is a platform for managing your documents and files."
        buttonText="Get Started"
        buttonLink="/get-started"
      />
      <AgencySelector />
      <ThreeTiles>
        {mockDataIconHeadings.map((item, key) => (
          <IconHeading key={key} {...item} />
        ))}
      </ThreeTiles>
      <Footer />
    </div>
  );
}
