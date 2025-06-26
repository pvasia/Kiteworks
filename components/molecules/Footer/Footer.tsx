import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";
import {
  EnvelopeIcon,
  PhoneIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";

interface FooterLinkProps {
  label: string;
  url: string;
}

interface FooterSectionProps {
  title: string;
  links: FooterLinkProps[];
}

const Footer = () => {
  const solutionsLinks: FooterLinkProps[] = [
    { label: "Department of Defense", url: "/solutions/defense" },
    { label: "Department of Homeland Security", url: "/solutions/dhs" },
    { label: "Department of Justice", url: "/solutions/justice" },
    { label: "Intelligence Community", url: "/solutions/intelligence" },
    { label: "Health and Human Services", url: "/solutions/hhs" },
  ];

  const useCasesLinks: FooterLinkProps[] = [
    { label: "CMMC Compliance", url: "/use-cases/cmmc" },
    { label: "FOIA Request Management", url: "/use-cases/foia" },
    { label: "Secure File Sharing", url: "/use-cases/file-sharing" },
    { label: "Incident Response", url: "/use-cases/incident-response" },
    { label: "Remote Workforce", url: "/use-cases/remote-work" },
  ];

  const resourcesLinks: FooterLinkProps[] = [
    { label: "Blog", url: "/resources/blog" },
    { label: "Whitepapers", url: "/resources/whitepapers" },
    { label: "Case Studies", url: "/resources/case-studies" },
    { label: "Webinars & Events", url: "/resources/events" },
    { label: "FAQ", url: "/resources/faq" },
  ];

  const aboutLinks: FooterLinkProps[] = [
    { label: "Federal Team", url: "/about/team" },
    { label: "Procurement", url: "/about/procurement" },
    { label: "Partners", url: "/about/partners" },
    { label: "Contact Us", url: "/about/contact" },
  ];

  const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
    <div className={styles.footerSection}>
      <h3 className={classNames(styles.sectionTitle, "sub-heading")}>
        {title}
      </h3>
      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            <Link
              href={link.url}
              className={classNames(styles.footerLink, "body-copy")}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className={styles.footer}>
      <div className={"container"}>
        {/* Navigation Links Section */}
        <div className={styles.footerNavigation}>
          <div className={styles.brandSection}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/logo/logo.svg"
                alt="Kiteworks"
                className={styles.logo}
                width={70}
                height={70}
              />
            </Link>
            <p className={styles.brandDescription}>
              Secure file sharing and collaboration platform designed
              specifically for federal agencies and government contractors.
            </p>
            <div className={styles.complianceBadges}>
              <div className={styles.badge}>
                <ShieldCheckIcon className={styles.badgeIcon} />
                <span className={styles.badgeText}>FedRAMP</span>
              </div>
              <div className={styles.badge}>
                <DocumentCheckIcon className={styles.badgeIcon} />
                <span className={styles.badgeText}>FISMA</span>
              </div>
              <div className={styles.badge}>
                <CpuChipIcon className={styles.badgeIcon} />
                <span className={styles.badgeText}>NIST</span>
              </div>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <FooterSection title="Solutions" links={solutionsLinks} />
            <FooterSection title="Use Cases" links={useCasesLinks} />
            <FooterSection title="Resources" links={resourcesLinks} />
            <FooterSection title="About" links={aboutLinks} />
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactLeft}>
            <h2 className={classNames(styles.contactTitle, "title")}>
              Get in Touch
            </h2>
            <p className={classNames(styles.contactDescription, "body-copy")}>
              Ready to secure your organization&apos;s file sharing and
              collaboration? Contact our federal team to learn more about our
              solutions.
            </p>

            <div className={styles.socialSection}>
              <div className={styles.socialLinks}>
                <Link
                  href="https://linkedin.com/company/kiteworks"
                  className={styles.socialLink}
                  aria-label="Follow us on LinkedIn"
                >
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com/kiteworks"
                  className={styles.socialLink}
                  aria-label="Follow us on Twitter"
                >
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://facebook.com/kiteworks"
                  className={styles.socialLink}
                  aria-label="Follow us on Facebook"
                >
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="https://youtube.com/@kiteworks"
                  className={styles.socialLink}
                  aria-label="Follow us on YouTube"
                >
                  <svg
                    className={styles.socialIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.contactRight}>
            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <div className={styles.contactCardHeader}>
                  <div className={styles.contactCardIcon}>
                    <PhoneIcon />
                  </div>
                  <h3
                    className={classNames(
                      styles.contactCardTitle,
                      "sub-heading"
                    )}
                  >
                    Sales Inquiries
                  </h3>
                </div>
                <div className={styles.contactCardBody}>
                  <div className={styles.contactDetail}>
                    <span className={styles.contactLabel}>Phone</span>
                    <Link
                      href="tel:+16506873130"
                      className={styles.contactValue}
                    >
                      +1 (650) 687-3130
                    </Link>
                  </div>
                  <div className={styles.contactDetail}>
                    <span className={styles.contactLabel}>Email</span>
                    <Link
                      href="mailto:sales@kiteworks.com"
                      className={styles.contactValue}
                    >
                      sales@kiteworks.com
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactCardHeader}>
                  <div className={styles.contactCardIcon}>
                    <EnvelopeIcon />
                  </div>
                  <h3
                    className={classNames(
                      styles.contactCardTitle,
                      "sub-heading"
                    )}
                  >
                    Technical Support
                  </h3>
                </div>
                <div className={styles.contactCardBody}>
                  <div className={styles.contactDetail}>
                    <span className={styles.contactLabel}>Phone</span>
                    <Link
                      href="tel:+18886543778"
                      className={styles.contactValue}
                    >
                      +1 (888) 654-3778
                    </Link>
                  </div>
                  <div className={styles.contactDetail}>
                    <span className={styles.contactLabel}>Email</span>
                    <Link
                      href="mailto:support@kiteworks.com"
                      className={styles.contactValue}
                    >
                      support@kiteworks.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Kiteworks. All rights reserved.
            </p>
          </div>

          <div className={styles.bottomRight}>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
            <Link href="/security" className={styles.legalLink}>
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
