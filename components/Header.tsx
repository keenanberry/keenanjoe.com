"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/meditations", label: "Meditations" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-amber/20 bg-cream/80 backdrop-blur-sm">
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

        <ul className="flex items-center gap-8">
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
      </nav>
    </header>
  );
}
