'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function page() {
  const [selectedTab, setSelectedTab] = useState('innovate');

  const tabContent = {
    innovate: {
      title: 'Innovate',
      content:
        "We make sure to stay ahead of trends and create the most visually appealing concepts and ideas that can capture your target audience's attention.",
      image: '/Images/switch1.svg',
    },
    effort: {
      title: 'Give it your all',
      content:
        'Our team puts their 100% effort into delivering the quality where we have no room for regrets.',
      image: '/Images/switch2.webp',

    },
    transparent: {
      title: 'Be transparent',
      content:
        'We work closely with all our clients and communicate openly with them so they know exactly what we are doing and how everything will go. ',
      image: '/Images/switch3.webp',

    },
    purpose: {
      title: 'Purpose-driven',
      content:
        'All our work and tasks are purpose-driven so we will keep generating the best results in the shortest possible period. ',
      image: '/Images/switch4.webp',

    },
  };


  return (
    <>
      <div className="About main ">
        <div className="bg-[#FF4309] py-10 2xl:py-20 text-center">
          <div className="container py-10 px-2">
            <h2 className="text-[32px] sm:text[26px] lg:text-[40px] text-white">We At Your Service</h2>
            <h6 id="mainH2" className="py-2 text-[18px] sm:text-[22px] lg:text-[28px] text-white">
              CodeXMatrixx have gained the trust of 1000+ clients worldwide by delivering user-friendly digital solutions at affordable packages.
            </h6>
          </div>
        </div>

        <div className='px-2 '>
          <div className="container">
            <div className='grid grid-cols-1 lg:grid-cols-2 py-10 2xl:py-20'>
              <div className="text flex items-center justify-center h-full text-black">
                <p className="p-2 text-center  text-[15px] 2xl:text-[18px] text-[#0a1c20] my-4 lg:text-left">
                  You need a perfect combination of solutions with decent packages and affordable prices but with all that you also need to create ideas that go
                  with the trend. We at CodeXMatrixx know how to bring life to your visions by blending thoughts with real-life experiences and creating visually
                  appealing designs and platforms for your audience.
                </p>
              </div>
              <div className="">
                <Image
                  src="/Images/metUp.webp"
                  width={1222}
                  height={688}
                  className="p-4"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="digit py-16">
            <div className="container">
              <div className="text-center">
                <h2 className="text-[32px] sm:text[26px] lg:text-[40px] " >Digital Solutions and Exceptional Designs for Your Brand to Generate Maximum Revenue</h2>
                <p className="py-6   text-[15px] 2xl:text-[18px] text-[#0a1c20] my-4">We offer a variety of services that upscale your business to the next level, including:</p>
              </div>
              <div className="p-">
                <Image
                  src="/Images/Group.webp"
                  width={1120}
                  height={900}
                  className=""
                  alt=""
                />
              </div>
            </div>
            <div className="container">
              <ul className="list-disc mx-8 py-6">
                <li className="">UX/UI design</li>
                <li className="">marketing visuals</li>
                <li className="">mobile app development</li>
                <li className="">web design and development</li>
              </ul>
              <p className='text-[15px] 2xl:text-[18px] text-[#0a1c20] my-4 '>
                Every project is a new adventure for us, and we approach each one with a blend of artistic flair and strategic insight
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='pt-0 pb-10 2xl:py-20'>
       <div className="container">
              <div className="text-center">
                <h2 className='text-[32px] sm:text[26px] lg:text-[40px]'>Our Core Values</h2>
                <h6 className='py-8 text-[18px] sm:text-[22px] lg:text-[28px]'>We have set some ground rules for all our team members that are reflection of our core values.</h6>
              </div>
            <div className="multiSection bg-[#EAEAEA] px-1 pb-1 ">
              <div className="">
                <ul className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-2 rounded-xl cursor-pointer text-center text-black">
                  {Object.keys(tabContent).map((key) => (
                    <li
                      key={key}
                      onClick={() => setSelectedTab(key)}
                      className={`flex-1 min-w-[120px] py-3  ${selectedTab === key ? 'bg-[#ff4309] text-white' : ''
                        }`}>
                      {tabContent[key].title}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 bg-white p-10">
                  <div className='flex justify-between items-center'>
                    <Image className='w-[300px] p-8' src={tabContent[selectedTab].image} height={100} width={100} alt="" />
                  </div>
                  <div className='xl:flex justify-center xl:items-center'>
                    <div className='text-center lg:text-left'>  
                      <h2 className="text-[28px] sm:text[222px] lg:text-[36px]">{tabContent[selectedTab].title}</h2>
                      <p className=" text-[16px] sm:text-[18px] lg:text-[20px]  xl:pr-8">{tabContent[selectedTab].content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    </>
  );
}
