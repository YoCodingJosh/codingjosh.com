"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";
import { usePathname } from "next/navigation";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const isOnHomePage = pathname === "/";

  // Function to determine if the link is active
  const isActive = (href: string) => pathname === href;

  return (
    <header className={cn("w-full", className)}>
      {!isOnHomePage && <span className="text-xl font-bold">Josh Kennedy</span>}
      <nav className="flex gap-4">
        <Link
          href="/"
          className={cn(
            isActive("/") && "bg-blue-500 text-white",
            "px-4 py-2 rounded",
          )}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={cn(
            isActive("/about") && "bg-blue-500 text-white",
            "px-4 py-2 rounded",
          )}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={cn(
            isActive("/projects") && "bg-blue-500 text-white",
            "px-4 py-2 rounded",
          )}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={cn(
            isActive("/contact") && "bg-blue-500 text-white",
            "px-4 py-2 rounded",
          )}
        >
          Contact
        </Link>
        <span className="ml-auto">
          <DarkModeToggle />
        </span>
      </nav>
    </header>
  );
}
