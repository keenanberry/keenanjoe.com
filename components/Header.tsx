"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/meditations", label: "Meditations" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-amber/20 bg-cream/80 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="group flex items-center gap-2 transition-all hover:scale-105"
          >
            <span className="text-2xl text-amber group-hover:text-burnt-orange transition-colors">
              ॐ
            </span>
            <span className="font-[family-name:var(--font-caveat)] text-3xl text-amber group-hover:text-burnt-orange transition-colors">
              keenanjoe
            </span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-base font-medium transition-colors ${
                      isActive
                        ? "text-amber"
                        : "text-charcoal hover:text-amber"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden flex items-center justify-center w-8 h-8 text-charcoal"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay - rendered outside header for proper stacking */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 bg-[#FDF6E3] sm:hidden">
          <ul className="flex flex-col items-center gap-8 pt-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-xl font-medium transition-colors ${
                      isActive
                        ? "text-amber"
                        : "text-charcoal hover:text-amber"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
