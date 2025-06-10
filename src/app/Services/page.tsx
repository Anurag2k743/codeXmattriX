'use client';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Service() {
    const [feedback, setfeedback] = useState('person1');
    const [sticky, setsticky] = useState(false); // Change to boolean

    const feedbackData = {
        person1: {
            name: "Aarav Mehta",
            company: "TechNova Solutions",
            feedback:
                "Working with this team has been a seamless experience. Their attention to detail and creativity exceeded our expectations. They truly understood the core of our product and transformed it into a beautiful and user-friendly platform. Every revision was handled with care. We’ve already seen increased user engagement and retention since the redesign.",
            image: '/Images/profileimg.jpg',
        },
        person2: {
            name: "Sneha Sharma",
            company: "BrightPixel Studios",
            feedback:
                "I’m really impressed by the timely delivery and excellent communication throughout the project. We had a complex product idea, but they simplified it and made it look elegant. Regular updates kept us in the loop at every stage. Our customers love the clean UI and seamless experience. This whole process felt like a true collaboration.",
            image: '/Images/profileimg.jpg',
        },
        person3: {
            name: "Rohan Kapoor",
            company: "NeoTech Private Ltd.",
            feedback:
                "From start to finish, everything was handled with great care and professionalism. The website they built is fast, responsive, and visually stunning. Their team worked late hours to meet our tight deadlines. Since launch, we've had more leads and better customer feedback. We’ll definitely work with them again.",
            image: '/Images/profileimg.jpg',
        },
        person4: {
            name: "Priya Iyer",
            company: "VisionNest Technologies",
            feedback:
                "Their team is full of creative minds. The designs were bold yet functional, and every pixel served a purpose. Their design thinking and research-driven process gave us confidence. What stood out was their focus on user experience. We got great feedback from our beta testers.",
            image: '/Images/profileimg.jpg',
        },
        person5: {
            name: "Kunal Deshmukh",
            company: "Skyline Ventures",
            feedback:
                "They really care about the client's goals. Our online presence has drastically improved. Every part of the user journey was crafted thoughtfully. The visuals were on-brand and engaging. We’re proud to showcase this project to investors and clients.",
            image: '/Images/profileimg.jpg',
        },
    };

    useEffect(() => {
        const scroll = () => {
            if (window.scrollY > 325) {
                setsticky(true);
            } else {
                setsticky(false);
            }
        }

        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    return (
        <>
            <div>
                <div className="bg-[#FF4309] mt-[] py-10 text-center">
                    <div className='container'>
                        <h2 className='text-[32px] sm:text[26px] lg:text-[40px] text-white'>
                            Strategy & Design That Delivers Results With Consistent Updates
                        </h2>
                        <h6 className='text-white text-[18px] sm:text-[22px] lg:text-[26px] px-2 xl:px-10'>
                            We specialise in creating user-focused solutions that are highly valued for both the audience and your business. Our approach to designing is simple and result-driven enhancing user experience and achieving business goals on time.
                        </h6>
                    </div>
                </div>

                <div>
                    <div className={`bg-white py-5 hidden lg:block shadow-xl ${sticky ? 'fixed top-0 right-0 left-0 bg-white shadow-xl z-50' : 'static'}`}>
                        <ul className='flex justify-between container'>
                            <li className='hover:text-[#0056b3] cursor-pointer'>
                                <Link href="#Service">WEBDESIGN & DEVLOPMENT</Link>
                            </li>
                            <li className='hover:text-[#0056b3] cursor-pointer'>
                                <Link href="#uiDesign" >UI & UX DESIGN</Link>
                            </li>
                            <li className='hover:text-[#0056b3] cursor-pointer'>
                                <Link href="#MobileDev"> MOBILE DEVLOPMENT</Link>
                            </li>
                            <li className='hover:text-[#0056b3] cursor-pointer'>
                                <Link href="#digital">DIGITAL PRODUCT DESIGN </Link>
                            </li>
                            <li className='hover:text-[#0056b3] cursor-pointer'>
                                <Link href="#Marketing">MARKET DESIGN</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sections */}
                <div className='hidden lg:block bg-center bg-cover py-64 w-full' id="Service" style={{ backgroundImage: "url('/Images/backgroundATn.webp')" }}>
                    <div className='container flex justify-between'>
                        <div className=''></div>
                        <div className='text-right lg:text-left w-[400px] 2xl:w-[400px]'>
                            <h2 className='text-[32px] sm:text[26px] lg:text-[40px]'>
                                Web Design & Development
                            </h2>
                            <p className='text-[16px] sm:text-[18px] lg:text-[18px]'>CodeXMatrixx offers end-to-end web design and development services, from in-depth design audits to prototyping and full-scale development. We not only revamp already existing sites but can create a 100% customized website according to your requirements that will create an exceptional user experience across all devices.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:hidden px-4">
                    <div className='text-left py-10'>
                        <h2 className='text-[32px] sm:text[26px] lg:text-[40px]'>
                            Web Design & Development
                        </h2>
                        <p className='text-wrap'>
                            CodeXMatrixx offers end-to-end web design and development services, from in-depth design audits to prototyping and full-scale development. We not only revamp already existing sites but can create a 100% customized website according to your requirements that will create an exceptional user experience across all devices.
                        </p>
                    </div>
                </div>

                {/* Feedback Section */}
                <div className='bg-[#FF4309] text-white py-20 px-4'>
                    <div className='container'>
                        <h2 className='text-[32px] sm:text[26px] lg:text-[40px] w-full sm:w-full md:w-[760px] lg:w-[760px] xl:w-[760px] 2xl:w-[760px]'>
                            Delivering Results For Startups & Businesses Since 2015.
                        </h2>
                    </div>
                    <div className='container ' id="feedback">
                        <div className='lg:flex justify-between'>
                            <div className='lg:flex justify-between items-center'>
                                <div className='py-4 lg:py-4 px-8'>
                                    <Image
                                        src={feedbackData[feedback].image}
                                        className='rounded-[50%] w-50 '
                                        alt=""
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className='lg:w-100'>
                                    <p className='2xl:w-[600px] lg:w-[600px] text-wrap text-[18px] sm:text-[22px] lg:text-[20px]'>
                                        {feedbackData[feedback].feedback}
                                    </p>
                                    <div className='mt-4'>
                                        <h3>{feedbackData[feedback].name}</h3>
                                        <h4>{feedbackData[feedback].company}</h4>
                                    </div>
                                </div>
                            </div>
                            {/* Feedback avatars */}
                            <div>
                                <div className='hidden lg:block'>
                                    <ul className='bg-white p-6 w-full rounded flex flex-col mt-8 py-8'>
                                        {Object.keys(feedbackData).map((key) => (
                                            <li key={key} className='my-2' onClick={() => setfeedback(key)}>
                                                <Image className={`rounded-[50%] opacity-50 ${feedback === key ? 'opacity-100' : 'opacity-50'}`} src={feedbackData[key].image} width={60} height={60} alt="" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <ul className='bg-white lg:hidden flex rounded justify-center flex-wrap mt-8 lg:w-full'>
                                    {Object.keys(feedbackData).map((key) => (
                                        <li key={key} className='m-1' onClick={() => setfeedback(key)}>
                                            <Image className={`rounded-[50%] opacity-50 my-2 w-[40px] sm:w-[100px] ${feedback === key ? 'opacity-100' : 'opacity-50'}`} src={feedbackData[key].image} width={100} height={100} alt="" />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More sections as needed */}
            </div>
        </>
    )
}
