import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

// import Navbar from "./Navbar";

export default function Nav() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="/">
        { /* eslint-disable-next-line @next/next/no-img-element */ }
        <img src="/images/hidamari_sketch_yuno_by_graphicsmith_d4bxvho-pre-resized.png" className="mr-3 h-6 sm:h-9" alt="Cool Yunocchi" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CodingJosh</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    // <Navbar />
  );
};
