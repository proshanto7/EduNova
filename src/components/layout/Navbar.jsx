"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { resolveImageUrl } from "@/lib/image-utils";
import Image from "next/image";
import LogoLight from "@/imports/logo.png";
import LogoDark from "@/imports/logo-dark.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Mentor", href: "/mentors" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { isLoggedIn, user, mounted: authMounted } = useAuth();

  const avatarUrl = resolveImageUrl(user?.avatar);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full overflow-visible bg-(--nav-bg) transition-all duration-300 ${
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)]" : "shadow-none"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between overflow-visible px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex cursor-pointer items-center">
          {mounted ? (
            <div className="relative h-14 w-40 lg:h-20 lg:w-56">
              <Image
                src={resolvedTheme === "dark" ? LogoDark : LogoLight}
                alt="Logo"
                fill
                sizes="200px"
                className="scale-150 object-contain object-left lg:scale-[1.8]"
                priority
              />
            </div>
          ) : (
            <div className="h-14 w-40 lg:h-20 lg:w-56" />
          )}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActiveLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-1 text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  active
                    ? "border border-(--nav-active-border) text-(--nav-text-active)"
                    : "text-(--nav-text) hover:text-(--nav-text-hover)"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Actions - Desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />

          {authMounted && isLoggedIn ? (
            <Link
              href="/dashboard"
              aria-label="Go to Dashboard"
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-(--nav-icon-border) transition-colors hover:bg-(--nav-circle-hover)"
            >
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={user?.name || "Profile"}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              ) : (
                <User size={16} className="text-(--nav-icon-text)" />
              )}
            </Link>
          ) : (
            <div className="flex items-center gap-1.5 text-[13px] font-semibold">
              <Link
                href="/login"
                className="text-(--nav-login-text) transition-colors hover:text-(--nav-accent)"
              >
                Login
              </Link>
              <span className="text-(--nav-divider)">|</span>
              <Link
                href="/register"
                className="text-(--nav-login-text) transition-colors hover:text-(--nav-accent)"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Right Actions - Mobile (toggle + hamburger) */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center text-(--nav-icon-text)"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-(--nav-mobile-border) bg-(--nav-mobile-bg) px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const active = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                    active
                      ? "text-(--nav-text-active)"
                      : "text-(--nav-mobile-text) hover:text-(--nav-accent)"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-2 flex items-center gap-3 border-t border-(--nav-mobile-border) pt-4 text-sm font-semibold">
              {authMounted && isLoggedIn ? (
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-(--nav-login-text)"
                >
                  {avatarUrl ? (
                    <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full border border-(--nav-icon-border)">
                      <Image
                        src={avatarUrl}
                        alt={user?.name || "Profile"}
                        fill
                        sizes="24px"
                        className="object-cover"
                      />
                    </span>
                  ) : (
                    <User size={15} />
                  )}
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="text-(--nav-login-text)"
                  >
                    Login
                  </Link>
                  <span className="text-(--nav-divider)">|</span>
                  <Link
                    href="/register"
                    onClick={() => setIsOpen(false)}
                    className="text-(--nav-login-text)"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
