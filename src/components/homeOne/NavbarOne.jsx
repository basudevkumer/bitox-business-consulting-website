"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Search, X, Menu } from "lucide-react";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isActiveLink(href, pathname) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function hasActiveChild(children, pathname) {
  return children?.some((child) => isActiveLink(child.href, pathname));
}

// ─── Dropdown Menu ────────────────────────────────────────────────────────────

function DropdownMenu({ children, isOpen, onClose, pathname }) {
  return (
    <div
      className={`absolute top-full left-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-black/5 py-2 z-50 transition-all duration-200 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {children.map((child) => (
        <Link
          key={child.href}
          href={child.href}
          onClick={onClose}
          className={`block px-5 py-2.5 text-sm transition-colors duration-200 ${
            isActiveLink(child.href, pathname)
              ? "text-secondary font-medium bg-secondary/5"
              : "text-primary hover:text-secondary hover:bg-secondary/5"
          }`}
        >
          {child.label}
        </Link>
      ))}
    </div>
  );
}

// ─── Desktop Nav Item ─────────────────────────────────────────────────────────

function DesktopNavItem({ link, openDropdown, onEnter, onLeave, pathname }) {
  const isActive = link.children
    ? hasActiveChild(link.children, pathname)
    : isActiveLink(link.href, pathname);

  if (link.children) {
    return (
      <div
        className="relative"
        onMouseEnter={() => onEnter(link.label)}
        onMouseLeave={onLeave}
      >
        <button
          className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${
            isActive ? "text-secondary" : "text-primary hover:text-secondary"
          }`}
        >
          {link.label}
          <ChevronDown
            size={13}
            className={`transition-transform duration-200 ${
              openDropdown === link.label ? "rotate-180" : ""
            }`}
          />
        </button>

        <DropdownMenu
          children={link.children}
          isOpen={openDropdown === link.label}
          onClose={onLeave}
          pathname={pathname}
        />
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      className={`text-sm font-medium transition-colors duration-200 ${
        isActive ? "text-secondary" : "text-primary hover:text-secondary"
      }`}
    >
      {link.label}
    </Link>
  );
}

// ─── Mobile Nav Item ──────────────────────────────────────────────────────────

function MobileNavItem({ link, openDropdown, onToggle, onClose, pathname }) {
  const isActive = link.children
    ? hasActiveChild(link.children, pathname)
    : isActiveLink(link.href, pathname);

  if (link.children) {
    const isOpen = openDropdown === link.label;
    return (
      <div>
        <button
          onClick={() => onToggle(link.label)}
          className={`flex items-center justify-between w-full py-3.5 border-b border-primary/10 transition-colors duration-200 ${
            isActive ? "text-secondary" : "text-primary hover:text-secondary"
          }`}
        >
          <span className="text-base font-heading font-medium">
            {link.label}
          </span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pl-4 py-2 flex flex-col gap-1">
            {link.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onClose}
                className={`py-2 text-sm transition-colors duration-200 ${
                  isActiveLink(child.href, pathname)
                    ? "text-secondary font-medium"
                    : "text-primary/70 hover:text-secondary"
                }`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      onClick={onClose}
      className={`py-3.5 text-base font-heading font-medium border-b border-primary/10 block transition-colors duration-200 ${
        isActive ? "text-secondary" : "text-primary hover:text-secondary"
      }`}
    >
      {link.label}
    </Link>
  );
}

// ─── Main UI Component 

export default function NavbarOneUI({
  // state
  scrolled,
  mobileOpen,
  openDropdown,
  openMobileDropdown,
  pathname,
  // handlers
  onMouseEnter,
  onMouseLeave,
  onToggleMobileDropdown,
  onToggleMobileMenu,
  onCloseMobileMenu,
  // data
  navLinks,
}) {
  return (
    <>
      {/* ── Desktop Navbar */}
      <header
        className={`fixed left-5 right-5 top-5 z-50 hidden lg:flex items-center justify-between px-8 h-[70px] rounded-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/images/logo/Nav_logo.png"
            alt="Bitox"
            width={106}
            height={32}
            priority
          />
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <DesktopNavItem
              key={link.label}
              link={link}
              openDropdown={openDropdown}
              onEnter={onMouseEnter}
              onLeave={onMouseLeave}
              pathname={pathname}
            />
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer"
          >
            <Search size={20} />
          </button>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-secondary transition-colors duration-300"
          >
            Let&apos;s Talk.
          </Link>
        </div>
      </header>

      {/* ── Mobile Navbar */}
      <header
        className={`fixed left-4 right-4 top-4 z-50 flex lg:hidden items-center justify-between px-5 h-[60px] rounded-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/images/logo/Nav_logo.png"
            alt="Bitox"
            width={90}
            height={28}
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer"
          >
            <Search size={18} />
          </button>
          <button
            onClick={onToggleMobileMenu}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Backdrop */}
      <div
        onClick={onCloseMobileMenu}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ── Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-white pt-24 px-6 pb-8 overflow-y-auto lg:hidden transition-all duration-300 max-h-screen ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <MobileNavItem
              key={link.label}
              link={link}
              openDropdown={openMobileDropdown}
              onToggle={onToggleMobileDropdown}
              onClose={onCloseMobileMenu}
              pathname={pathname}
            />
          ))}

          <Link
            href="/contact"
            onClick={onCloseMobileMenu}
            className="mt-6 w-full text-center px-6 py-3 bg-primary text-white text-base font-medium rounded-full hover:bg-secondary transition-colors duration-300 block"
          >
            Let&apos;s Talk.
          </Link>
        </nav>
      </div>
    </>
  );
}
