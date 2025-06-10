import React, { useState } from 'react';
import { CgMenuRight, CgClose } from "react-icons/cg";
import Image from 'next/image';
import Link from 'next/link';

const Mobilemenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Navbar (Menu Icon) */}
      <nav className="flex justify-between items-center lg:hidden">
        <div>
          <Link href="/">
            <Image
              src="https://www.codexmattrix.com/wp-content/uploads/2022/03/logo-1.svg"
              alt="Logo"
              height={0}
              width={0}
              className="w-[230px] sm:w-[237px]"
            />
          </Link>
        </div>
        <div onClick={toggleMenu}>
          {isOpen ? (
            <CgClose fontSize={25} /> // Cross icon
          ) : (
            <CgMenuRight fontSize={25} /> // Menu icon
          )}
        </div>
      </nav>

      {/* Mobile Menu (Slide from right) */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-13 right-0  w-full bg-white transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex items-center mt-2 ">
          <ul className="w-full">
            <li
              className="text-[#1A1A1A] text-[16px] py-2 tracking-wide border-[#c4c4c4] border-b px-4"
              onClick={closeMenu} >
              <Link href="/About">About</Link>
            </li>
            <li
              className="text-[#1A1A1A] text-[16px] border-[#c4c4c4] border-b py-2 tracking-wide  px-4"
              onClick={closeMenu}  >
              <Link href="/">Services</Link>
            </li>
            <li
              className="text-[#1A1A1A] text-[16px] border-[#c4c4c4] border-b py-2 tracking-wide px-4"
              onClick={closeMenu} >
              <Link href="/">Process</Link>
            </li>
            <li
              className="text-[#1A1A1A] text-[16px] border-[#c4c4c4] border-b py-2 tracking-wide px-4"
              onClick={closeMenu}   >
              <Link href="/">Case Studies</Link>
            </li>
            <li
              className="text-[#1A1A1A] text-[16px] border-[#c4c4c4] border-b py-2 tracking-wide px-4" onClick={closeMenu}  >
              <Link href="/">Pricing</Link>
            </li>
            <li
              className="text-[#1A1A1A] text-[16px] border-[#c4c4c4] border-b py-2 tracking-wide px-4"
              onClick={closeMenu}   >
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobilemenu;
