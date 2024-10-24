"use client";
import { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { PiBookOpenText } from "react-icons/pi";

export function NavbarSection({ fixed = false }) {
  const [isSticky, setIsSticky] = useState(fixed);

  useEffect(() => {
    if (!fixed) {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [fixed]);

  return (
    <div
      className={`border-b w-full flex justify-center ${
        isSticky ? "fixed top-0 z-50 bg-white shadow-lg" : "relative"
      }`}
    >
      <Navbar className="w-[97%] md:w-[87%]">
        <NavbarBrand href="/">
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-600 dark:text-white">
            MSME Engineering
          </span> */}
          <img src="/logos/logowithtext.png" className="w-28" />
        </NavbarBrand>
        <div className="flex md:order-2">
          <a
            href="/MSME-Engineering-Broucher.pdf"
            download
            className="w-full md:w-fit border bg-yellow-300 rounded-lg flex items-center space-x-2 px-2 py-2"
          >
            <PiBookOpenText />
            <p className="text-sm font-bold">Brochure</p>
          </a>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          <NavbarLink href="/about">About Us</NavbarLink>
          <NavbarLink href="/products">Products</NavbarLink>
          <NavbarLink href="/contact">Contact Us</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
