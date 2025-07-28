'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Mobilemenu from "./Mobilemenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-20 w-full py-2 bg-[#ffffff] transition-all duration-300 ${
        scrolled ? 'border-b border-[#DDDDDD] shadow-sm' : 'border-none'
      }`}
    >
      <div className="container">
        <nav className="hidden lg:flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="https://www.codexmattrix.com/wp-content/uploads/2022/03/logo-1.svg"
                alt="Logo"
                height={40}
                width={230}
                className="w-[230px]"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-6 xl:space-x-10">
            {[
              { name: "About", href: "/About" },
              { name: "Services", href: "/Services" },
              { name: "Process", href: "/" },
              { name: "Case Studies", href: "/Casestudies" },
              { name: "Pricing", href: "/" },
              { name: "Contact", href: "/Contact" },
            ].map(({ name, href }) => (
              <li
                key={name}
                className="text-[#1A1A1A] text-[16px] font-bold tracking-wide"
              >
                <Link href={href}>{name}</Link>
              </li>
            ))}

            <li>
              <Link href="/Contact">
                <button className="btAnm border-2 pt-2 pb-2 px-[25px] text-[16px] border-[#FF4309] text-[#EE3124] font-bold transition-all duration-300 hover:bg-[#FF4309] hover:text-white">
                  Get Started
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <Mobilemenu />
      </div>
    </header>
  );
};

export default Header;
