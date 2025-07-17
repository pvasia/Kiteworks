"use client";

import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import classNames from "classnames";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Button from "@/components/atoms/Button";

interface MenuItem {
  label: string;
  url: string;
  subItems?: MenuItem[];
}

interface HeaderProps {
  menu: MenuItem[];
  showCompliance?: boolean;
  alert?: {
    type: "news" | "announcement" | "info";
    message: string;
    link?: string;
  };
}

const Header = ({ menu, showCompliance = true, alert }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchClosing, setIsSearchClosing] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleSearch = () => {
    if (isSearchOpen) {
      closeSearch();
    } else {
      setIsSearchOpen(true);
      setIsSearchClosing(false);
    }
  };

  const closeSearch = () => {
    setIsSearchClosing(true);
    setTimeout(() => {
      setIsSearchOpen(false);
      setIsSearchClosing(false);
    }, 300);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMouseEnter = (label: string) => {
    if (!isMobile) {
      setActiveDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  // Detect mobile device
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Close search on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isSearchOpen]);

  // Close dropdowns when clicking outside (only on mobile and outside mobile menu)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile) {
        const target = event.target as Element;
        const mobileMenu = target.closest(`.${styles.mobileMenu}`);
        const desktopDropdown = target.closest(`.${styles.dropdown}`);

        // Only close if clicking outside both mobile menu and desktop dropdown
        if (!mobileMenu && !desktopDropdown) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile]);

  return (
    <>
      {/* Alert Banner */}
      {alert && (
        <div className={styles.alert} data-type={alert.type}>
          <div className={classNames(styles.container, "container")}>
            <div className={styles.alertContent}>
              <ShieldCheckIcon className={styles.alertIcon} />
              <span className={styles.alertText}>{alert.message}</span>
              {alert.link && (
                <Link href={alert.link} className={styles.alertLink}>
                  Learn More
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <header className={styles.header}>
        <div className={classNames(styles.container, "container")}>
          <div className={styles.inner}>
            {/* Logo */}
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/logo/logo.svg"
                alt="Kiteworks - Secure Content Platform"
                width={120}
                height={40}
                className={styles.logo}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className={styles.navigation}>
              <ul className={styles.menu}>
                {menu.map((item) => (
                  <li
                    key={item.label}
                    className={styles.menuItemWrapper}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.subItems ? (
                      <div
                        className={styles.dropdown}
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <button
                          className={styles.menuItem}
                          onClick={() =>
                            isMobile && handleDropdownToggle(item.label)
                          }
                          aria-expanded={activeDropdown === item.label}
                        >
                          {item.label}
                          <ChevronDownIcon
                            className={classNames(styles.chevron, {
                              [styles.chevronOpen]:
                                activeDropdown === item.label,
                            })}
                          />
                        </button>
                        {activeDropdown === item.label && (
                          <div className={styles.dropdownMenu}>
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.url}
                                className={styles.dropdownItem}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link href={item.url} className={styles.menuItem}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Actions */}
            <div className={styles.actions}>
              <button
                className={styles.searchButton}
                onClick={toggleSearch}
                aria-label="Search"
              >
                <MagnifyingGlassIcon className={styles.searchIcon} />
              </button>
              <Button variant="secondary" size="small">
                Contact Us
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className={styles.hamburger}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className={styles.hamburgerIcon} />
              ) : (
                <Bars3Icon className={styles.hamburgerIcon} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={classNames(styles.mobileMenu, {
              [styles.mobileMenuOpen]: isMobileMenuOpen,
            })}
          >
            <div className={styles.mobileMenuContent}>
              <nav className={styles.mobileNavigation}>
                {menu.map((item) => (
                  <div
                    key={item.label}
                    className={styles.mobileMenuSection}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.subItems ? (
                      <>
                        <button
                          className={styles.mobileMenuHeader}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDropdownToggle(item.label);
                          }}
                        >
                          {item.label}
                          <ChevronDownIcon
                            className={classNames(styles.mobileChevron, {
                              [styles.mobileChevronOpen]:
                                activeDropdown === item.label,
                            })}
                          />
                        </button>
                        {activeDropdown === item.label && (
                          <div className={styles.mobileSubMenu}>
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.url}
                                className={styles.mobileMenuItem}
                                onClick={closeMobileMenu}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.url}
                        className={styles.mobileMenuItem}
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className={styles.mobileActions}>
                <button
                  className={styles.mobileSearchButton}
                  onClick={toggleSearch}
                >
                  <MagnifyingGlassIcon className={styles.searchIcon} />
                  Search
                </button>
                <Button variant="secondary" size="medium">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Bar */}
        {showCompliance && (
          <div className={styles.complianceBar}>
            <div className={classNames(styles.container, "container")}>
              <div className={styles.complianceBadges}>
                <div className={styles.badge}>
                  <DocumentTextIcon className={styles.badgeIcon} />
                  <span>FedRAMP</span>
                </div>
                <div className={styles.badge}>
                  <ShieldCheckIcon className={styles.badgeIcon} />
                  <span>FISMA</span>
                </div>
                <div className={styles.badge}>
                  <BuildingOfficeIcon className={styles.badgeIcon} />
                  <span>NIST</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div
          className={classNames(styles.searchOverlay, {
            [styles.searchOverlayClosing]: isSearchClosing,
          })}
          onClick={closeSearch}
        >
          <div
            className={classNames(styles.searchContainer, {
              [styles.searchContainerClosing]: isSearchClosing,
            })}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.searchBox}>
              <MagnifyingGlassIcon className={styles.searchInputIcon} />
              <input
                type="text"
                placeholder="Search federal solutions, case studies, compliance..."
                className={styles.searchInput}
                autoFocus
              />
              <button
                className={styles.closeSearchButton}
                onClick={closeSearch}
                aria-label="Close search"
              >
                <XMarkIcon className={styles.closeIcon} />
              </button>
            </div>
            <div className={styles.searchSuggestions}>
              <div className={styles.suggestionCategory}>
                <h4>Popular Searches</h4>
                <button className={styles.suggestion}>
                  FedRAMP Authorization
                </button>
                <button className={styles.suggestion}>CMMC Compliance</button>
                <button className={styles.suggestion}>
                  Secure File Sharing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
