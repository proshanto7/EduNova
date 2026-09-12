"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { User, ShoppingCart, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle";
import Image from "next/image";
import LogoLight from "@/imports/logo.png";
import LogoDark from "@/imports/logo-dark.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Pages", href: "/pages" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="w-full overflow-visible bg-(--nav-bg) transition-colors duration-300">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between overflow-visible px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex cursor-pointer items-center">
          {mounted ? (
            <div className="relative h-14 w-40 lg:h-20 lg:w-56">
              <Image
                src={resolvedTheme === "dark" ? LogoDark : LogoLight}
                alt="Logo"
                fill
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 py-1 text-[13px] font-semibold uppercase tracking-wide transition-colors duration-200 ${
                link.label === "Home"
                  ? "border border-(--nav-active-border) text-(--nav-text-active)"
                  : "text-(--nav-text) hover:text-(--nav-text-hover)"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions - Desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />

          <div className="flex h-9 w-9 items-center justify-center border border-(--nav-icon-border)">
            <User size={16} className="text-(--nav-icon-text)" />
          </div>

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

          <ShoppingCart size={18} className="text-(--nav-icon-text)" />
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
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold uppercase tracking-wide text-(--nav-mobile-text) transition-colors hover:text-(--nav-accent)"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 flex items-center gap-3 border-t border-(--nav-mobile-border) pt-4 text-sm font-semibold">
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
              <ShoppingCart size={18} className="ml-auto text-(--nav-icon-text)" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}