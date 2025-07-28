import React from 'react'
import Image from 'next/image';

export default function CaseStudies() {
    return (
        <>
            <div>
                <div className='bg-[#FF4309] py-10 lg:py-20'>
                    <div className="container text-center text-white py-16">
                        <h1 className="text-[29px] leading-[36px] md:leading-[50px] lg:leading-[77px] md:text-[44px] lg:text-[68px]">Recent projects</h1>
                        <h3>Our work.</h3>
                    </div>
                </div>

                <div className="container px-4">
                    <div className='py-16'>
                        <div className='pb-4'>
                            <h2 className='text-[32px] sm:text[26px] lg:text-[40px]'>Design Showcase.</h2>
                            <p>Browse our recent work to see what we&apos;re capable of.</p>
                        </div>

                        {/* First Project */}
                        <div>
                            <Image src="/Images/mobilebackgroundImg.webp" height={1000} width={1200} alt="Mobile App Design" />
                            <div className='py-4'>
                                <h2 className='text-[32px] sm:text[26px] lg:text-[40px]'>Mobile Betting App for Sports & eSports</h2>
                                <h2>Bit Spot</h2>
                            </div>
                            <div>
                                {[
                                    "#Sportsapp", "#UI/UX Designer", "#App Design", "#userinterface",
                                    "#graphicdesign", "#uiinspiration", "#appdesigner"
                                ].map((tag) => (
                                    <button key={tag} className='px-4 py-2 text-[#464646] bg-gray-100 rounded cursor-pointer m-1 lg:m-2'>
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Second Project */}
                        <div className='mt-8'>
                            <div className='pt-4'>
                                <Image src="/Images/influencerBackImg.webp" alt="Influencer Site" height={1000} width={1200} />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-[32px] sm:text[26px] lg:text-[40px]'>Influencer Website Design, Personal Brand</h2>
                                <h2>Bivana Gomez</h2>
                            </div>
                            <div>
                                {[
                                    "#PersonalBrand", "#InfluencerDesign", "#UI/UX Designer", "#PortfolioDesign",
                                    "#branding", "#uxportfolio", "#webdesigner"
                                ].map((tag) => (
                                    <button key={tag} className='px-4 py-2 text-[#464646] bg-gray-100 rounded cursor-pointer m-1 lg:m-2'>
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Third Project */}
                        <div className='mt-8'>
                            <div className='pt-4'>
                                <Image src="/Images/MultiScreenBack.webp" alt="Wine Store CRM" height={100} width={1200} />
                            </div>
                            <div className='py-4'>
                                <h2 className='text-[32px] sm:text[26px] lg:text-[40px]'>CRM and Inventory Management Dashboard for a Wine Store</h2>
                                <h2>Wine Store CRM</h2>
                            </div>
                            <div>
                                {[
                                    "#CRM", "#InventoryManagement", "#DashboardUI", "#WebAppDesign",
                                    "#adminpanel", "#datavisualization", "#uxdesign"
                                ].map((tag) => (
                                    <button key={tag} className='px-4 py-2 text-[#464646] bg-gray-100 rounded cursor-pointer m-1 lg:m-2'>
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
