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
      <h3 className={styles.sectionTitle}>{title}</h3>
      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={index} className={styles.linkItem}>
            <Link href={link.url} className={styles.footerLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
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
            <h2 className={styles.contactTitle}>
              CONTACT
              <br />
              US
            </h2>
          </div>

          <div className={styles.contactRight}>
            <div className={styles.contactColumn}>
              <h3 className={styles.contactSubtitle}>Sales</h3>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <PhoneIcon />
                </span>
                <span className={styles.contactText}>+1-650-687-3130</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <EnvelopeIcon />
                </span>
                <span className={styles.contactText}>sales@kiteworks.com</span>
              </div>
            </div>

            <div className={styles.contactColumn}>
              <h3 className={styles.contactSubtitle}>Support</h3>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <PhoneIcon />
                </span>
                <span className={styles.contactText}>+1-888-654-3778</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <EnvelopeIcon />
                </span>
                <span className={styles.contactText}>
                  support@kiteworks.com
                </span>
              </div>
            </div>

            <div className={styles.contactColumn}>
              <h3 className={styles.contactSubtitle}>Stay Connected</h3>
              <div className={styles.socialLinks}>
                <Link
                  href="https://linkedin.com/company/kiteworks"
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>in</span>
                </Link>
                <Link
                  href="https://facebook.com/kiteworks"
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>f</span>
                </Link>
                <Link
                  href="https://twitter.com/kiteworks"
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>𝕏</span>
                </Link>
                <Link
                  href="https://tiktok.com/@kiteworks"
                  className={styles.socialLink}
                >
                  <span className={styles.socialIcon}>🎵</span>
                </Link>
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
