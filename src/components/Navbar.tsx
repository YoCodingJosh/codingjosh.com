"use client";

import { cn } from "@/lib/utils"; // Utility for conditional classNames
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DarkModeToggle } from "./DarkModeToggle";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname(); // Get current route
  const router = useRouter(); // For programmatic navigation

  const isOnHomePage = pathname === "/";

  // Define navigation items
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // Handle dropdown selection
  const handleSelectChange = (value: string) => {
    router.push(value); // Navigate to the selected page
  };

  return (
    <header className={cn("w-full", className)}>
      <h3
        className={cn(
          "text-xl font-bold transition-opacity duration-300 ease-in-out",
          isOnHomePage ? "opacity-0" : "opacity-100",
        )}
      >
        Josh Kennedy
      </h3>
      <nav className="flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                pathname === item.href && "bg-blue-500 text-white",
                "px-4 py-2 rounded",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-4">
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden w-full flex flex-row items-center gap-2">
          <div className="flex-1">
            <Select onValueChange={handleSelectChange} value={pathname}>
              <SelectTrigger className="min-w-0 w-full">
                <SelectValue placeholder="Select a page" />
              </SelectTrigger>
              <SelectContent>
                {navItems.map((item) => (
                  <SelectItem key={item.href} value={item.href}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
