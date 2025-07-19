import { useState } from "react";
import Button from "./Button";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "For companies", href: "#" },
  { label: "For employees", href: "#" },
  { label: "Contact us", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 md:px-10 lg:px-20 py-4 border-b border-neutral-200 relative z-50 bg-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img src="/logo.svg" />
          <div className="font-semibold text-neutral-950 text-lg">
            Job Portal
          </div>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="lg:hidden p-0"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center flex-1 justify-center gap-6 text-gray-700">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-semibold hover:text-b5 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right-side buttons */}
        <div className="hidden lg:flex gap-6">
          <Button variant="ghost" className="p-0 text-base">
            Login
          </Button>
          <Button variant="primary" className="px-6 py-2 text-base">
            Register
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4 text-gray-700">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-semibold hover:text-b5 transition-colors block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="ghost" className="text-base w-full">
              Login
            </Button>
            <Button variant="primary" className="text-base w-full">
              Register
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
