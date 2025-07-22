import React, { useState, useEffect } from "react";
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
import { getBestImageSize, StrapiMediaObject } from "@/lib/strapi-utils";

export enum SocialPlatform {
  LINKEDIN = "linkedin",
  TWITTER = "twitter",
  FACEBOOK = "facebook",
  YOUTUBE = "youtube",
}

export enum ComplianceBadge {
  FEDRAMP = "fedramp",
  FISMA = "fisma",
  NIST = "nist",
}

export enum ContactType {
  SALES = "sales",
  SUPPORT = "support",
}

// Strapi-compatible interfaces
interface StrapiSocialLink {
  id?: number;
  platform: SocialPlatform;
  url: string;
  ariaLabel: string;
  icon?: StrapiMediaObject;
}

interface StrapiComplianceInfo {
  id?: number;
  badge: ComplianceBadge;
  label: string;
  icon?: StrapiMediaObject;
}

interface StrapiContactInfo {
  id?: number;
  type: ContactType;
  title: string;
  phone: string;
  email: string;
  icon?: StrapiMediaObject;
}

interface StrapiMenuItem {
  id?: number;
  label: string;
  url: string;
  subMenu?: StrapiMenuItem[];
}

interface StrapiLegalLink {
  id?: number;
  label: string;
  url: string;
}

// Main Footer Props interface using only Strapi-optimized format
interface FooterProps {
  menu?: StrapiMenuItem[];
  socialLinks?: StrapiSocialLink[];
  complianceBadges?: StrapiComplianceInfo[];
  contactCards?: StrapiContactInfo[];
  logo?: StrapiMediaObject;
  brandDescription?: string;
  contactTitle?: string;
  contactDescription?: string;
  copyrightText?: string;
  legalLinks?: StrapiLegalLink[];
}

interface FooterSectionProps {
  label: string;
  menu?: StrapiMenuItem[];
}

const Footer = ({
  menu,
  socialLinks = [
    {
      id: 1,
      platform: SocialPlatform.LINKEDIN,
      url: "https://linkedin.com/company/kiteworks",
      ariaLabel: "Follow us on LinkedIn",
    },
    {
      id: 2,
      platform: SocialPlatform.TWITTER,
      url: "https://twitter.com/kiteworks",
      ariaLabel: "Follow us on Twitter",
    },
    {
      id: 3,
      platform: SocialPlatform.FACEBOOK,
      url: "https://facebook.com/kiteworks",
      ariaLabel: "Follow us on Facebook",
    },
    {
      id: 4,
      platform: SocialPlatform.YOUTUBE,
      url: "https://youtube.com/@kiteworks",
      ariaLabel: "Follow us on YouTube",
    },
  ],
  complianceBadges = [
    {
      id: 1,
      badge: ComplianceBadge.FEDRAMP,
      label: "FedRAMP",
    },
    {
      id: 2,
      badge: ComplianceBadge.FISMA,
      label: "FISMA",
    },
    {
      id: 3,
      badge: ComplianceBadge.NIST,
      label: "NIST",
    },
  ],
  contactCards = [
    {
      id: 1,
      type: ContactType.SALES,
      title: "Sales Inquiries",
      phone: "+1 (650) 687-3130",
      email: "sales@kiteworks.com",
    },
    {
      id: 2,
      type: ContactType.SUPPORT,
      title: "Technical Support",
      phone: "+1 (888) 654-3778",
      email: "support@kiteworks.com",
    },
  ],
  logo,
  brandDescription,
  contactTitle,
  contactDescription,
  copyrightText,
  legalLinks = [
    {
      id: 1,
      label: "Privacy Policy",
      url: "/privacy",
    },
    {
      id: 2,
      label: "Terms of Service",
      url: "/terms",
    },
    {
      id: 3,
      label: "Security",
      url: "/security",
    },
  ],
}: FooterProps) => {
  // Handle current year safely to prevent hydration issues
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Use the props directly since they're already in Strapi format
  const activeMenu = menu;
  const activeSocialLinks = socialLinks;
  const activeComplianceBadges = complianceBadges;
  const activeContactCards = contactCards;

  const MenuSection: React.FC<FooterSectionProps> = ({ label, menu }) => {
    return (
      <div className={styles.footerSection}>
        <h3 className={classNames(styles.sectionTitle, "sub-heading")}>
          {label}
        </h3>
        <ul className={styles.linkList}>
          {menu?.map((item) => (
            <li key={item.id || item.label} className={styles.linkItem}>
              <Link
                href={item.url}
                className={classNames(styles.footerLink, "body-copy")}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const getSocialIcon = (
    platform: SocialPlatform,
    strapiIcon?: StrapiMediaObject
  ) => {
    // Use Strapi media if available
    if (strapiIcon) {
      const iconUrl = getBestImageSize(strapiIcon, "thumbnail");
      if (iconUrl) {
        return (
          <Image
            src={iconUrl}
            alt={strapiIcon.alternativeText || `${platform} icon`}
            width={24}
            height={24}
            className={styles.socialIcon}
          />
        );
      }
    }

    // Fallback to SVG icons
    const iconPaths = {
      [SocialPlatform.LINKEDIN]:
        "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      [SocialPlatform.TWITTER]:
        "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
      [SocialPlatform.FACEBOOK]:
        "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
      [SocialPlatform.YOUTUBE]:
        "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    };

    return (
      <svg
        className={styles.socialIcon}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d={iconPaths[platform]} />
      </svg>
    );
  };

  const renderComplianceIcon = (badge: StrapiComplianceInfo) => {
    // Check if it's Strapi format with media object
    if (
      "icon" in badge &&
      badge.icon &&
      typeof badge.icon === "object" &&
      "url" in badge.icon
    ) {
      const strapiIcon = badge.icon as StrapiMediaObject;
      const iconUrl = getBestImageSize(strapiIcon, "thumbnail");
      if (iconUrl) {
        return (
          <Image
            src={iconUrl}
            alt={strapiIcon.alternativeText || `${badge.label} icon`}
            width={20}
            height={20}
            className={styles.badgeIcon}
          />
        );
      }
    }

    // Fallback to default icons based on badge type
    const defaultIcons = {
      [ComplianceBadge.FEDRAMP]: ShieldCheckIcon,
      [ComplianceBadge.FISMA]: DocumentCheckIcon,
      [ComplianceBadge.NIST]: CpuChipIcon,
    };
    const DefaultIcon = defaultIcons[badge.badge];
    return <DefaultIcon className={styles.badgeIcon} />;
  };

  const renderContactIcon = (contact: StrapiContactInfo) => {
    // Check if it's Strapi format with media object
    if (
      "icon" in contact &&
      contact.icon &&
      typeof contact.icon === "object" &&
      "url" in contact.icon
    ) {
      const strapiIcon = contact.icon as StrapiMediaObject;
      const iconUrl = getBestImageSize(strapiIcon, "thumbnail");
      if (iconUrl) {
        return (
          <Image
            src={iconUrl}
            alt={strapiIcon.alternativeText || `${contact.title} icon`}
            width={24}
            height={24}
            className="w-6 h-6"
          />
        );
      }
    }

    // Fallback to default icons based on contact type
    const defaultIcons = {
      [ContactType.SALES]: PhoneIcon,
      [ContactType.SUPPORT]: EnvelopeIcon,
    };
    const DefaultIcon = defaultIcons[contact.type];
    return <DefaultIcon />;
  };

  const imageUrl = getBestImageSize(logo, "card");

  return (
    <footer className={styles.footer}>
      <div className={"container"}>
        {/* Navigation Links Section */}
        <div className={styles.footerNavigation}>
          <div className={styles.brandSection}>
            {imageUrl ? (
              <Link href="/" className={styles.logoLink}>
                <Image
                  src={imageUrl}
                  alt={logo?.alternativeText || ""}
                  width={logo?.width || 70}
                  height={logo?.height || 70}
                  className={styles.logo}
                />
              </Link>
            ) : (
              <Link href="/" className={styles.logoLink}>
                <Image
                  src="/logo/logo.svg"
                  alt="Kiteworks"
                  width={70}
                  height={70}
                  className={styles.logo}
                />
              </Link>
            )}
            {brandDescription && (
              <p className={styles.brandDescription}>{brandDescription}</p>
            )}
            {complianceBadges && (
              <div className={styles.complianceBadges}>
                {activeComplianceBadges.map((badge) => (
                  <div key={badge.label} className={styles.badge}>
                    {renderComplianceIcon(badge)}
                    <span className={styles.badgeText}>{badge.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {activeMenu && (
            <div className={styles.linksGrid}>
              {activeMenu?.map((item) => {
                return (
                  <MenuSection
                    key={item.id || item.label}
                    label={item.label}
                    menu={item.subMenu}
                  />
                );
              })}
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactLeft}>
            {contactTitle && (
              <h2 className={classNames(styles.contactTitle, "title")}>
                {contactTitle}
              </h2>
            )}
            {contactDescription && (
              <p className={classNames(styles.contactDescription, "body-copy")}>
                {contactDescription}
              </p>
            )}
            {socialLinks && (
              <div className={styles.socialSection}>
                <div className={styles.socialLinks}>
                  {activeSocialLinks.map((link) => (
                    <Link
                      key={link.ariaLabel}
                      href={link.url}
                      className={styles.socialLink}
                      aria-label={link.ariaLabel}
                    >
                      {getSocialIcon(link.platform, link.icon)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={styles.contactRight}>
            {contactCards && (
              <div className={styles.contactGrid}>
                {activeContactCards?.map((card) => (
                  <div key={card.title} className={styles.contactCard}>
                    <div className={styles.contactCardHeader}>
                      <div className={styles.contactCardIcon}>
                        {renderContactIcon(card)}
                      </div>
                      <h3
                        className={classNames(
                          styles.contactCardTitle,
                          "sub-heading"
                        )}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <div className={styles.contactCardBody}>
                      <div className={styles.contactDetail}>
                        <span className={styles.contactLabel}>Phone</span>
                        <Link
                          href={`tel:${card.phone}`}
                          className={styles.contactValue}
                        >
                          {card.phone}
                        </Link>
                      </div>
                      <div className={styles.contactDetail}>
                        <span className={styles.contactLabel}>Email</span>
                        <Link
                          href={`mailto:${card.email}`}
                          className={styles.contactValue}
                        >
                          {card.email}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomLeft}>
            <p className={styles.copyright}>
              {copyrightText ||
                `© ${currentYear} Kiteworks. All rights reserved.`}
            </p>
          </div>

          <div className={styles.bottomRight}>
            {legalLinks &&
              legalLinks.map((link) => (
                <Link
                  key={link.id || link.label}
                  href={link.url}
                  className={styles.legalLink}
                >
                  {link.label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
