'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Mobilemenu from "./Mobilemenu";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setactive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className={`fixed top-0 left-0 z-20 w-full py-2 box-shadow bg-[#ffffff] ${scrolled ? 'border-b border-[#DDDDDD]' : 'border-none'} `}>
            <div className="container">
                <nav className="hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex justify-between items-center ">
                    <div>
                        <Link href = "/">
                            <img
                                src="https://www.codexmattrix.com/wp-content/uploads/2022/03/logo-1.svg"
                                alt="CodexMattrix Logo"
                                className="max-w-[237px]"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center space-x-10">
                        <ul className="flex md:space-x-5  lg:space-x-7  2xl:space-x-10 items-center">
                            <li className="text-[#1A1A1A] text-[16px] font-bold  font-[GT03] tracking-wide">
                                <Link href='/About'>About</Link>
                            </li>
                            <li className="text-[#1A1A1A] text-[16px] font-bold font-[GT03] tracking-wide">
                                <Link href="/Services">Services</Link>
                            </li>
                            <li className="text-[#1A1A1A] text-[16px] font-bold  font-[GT03] tracking-wide">
                                <Link href="/">Process</Link>
                            </li>
                            <li className="text-[#1A1A1A] text-[16px] font-bold  font-[GT03] tracking-wide">
                                <Link href="/Casestudies">Case Studies</Link>
                            </li>
                            <li className="text-[#1A1A1A] text-[16px] font-bold font-[GT03] tracking-wide">
                                <Link href="/">Pricing</Link>
                            </li>
                            <li className="text-[#1A1A1A] text-[16px] font-bold  font-[GT03] tracking-wide">
                                <Link href="/Contact">Contact</Link>
                            </li>
                            <li>
                                <button className="btAnm border-2 pt-2 pb-2 px-[25px] text-[16px] border-[#FF4309] text-[#EE3124] font-[GT03] font-bold">
                                        <Link href="/Contact">Get Started</Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            <Mobilemenu/>
            </div>
        </header>
    );
};

export default Header;
