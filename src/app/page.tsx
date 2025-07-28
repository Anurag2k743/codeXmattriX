'use client';
// import { Content } from "next/font/google";
import Image from "next/image";
import Carousel from "@/Components/Carousel";
import { useState } from "react";

export default function Home() {

  const [selectedContent, setSelectedContent] = useState('Content for Ellipse 1');

  const [selectedMenu, setSelectedMenu] = useState('Website Design');
  
const handleImageClick = (content: string) => {
  setSelectedContent(content);
};

const handleMenuClick = (menu: string) => {
  setSelectedMenu(menu);
};

  return (
    <>
      {/* <----Banner section start--------> */}

      <div className="py-10 sm:py-14 md:py-15 lg:20 x:py-20 2xl:py-20">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center flex-wrap">
            {/* Left section with text */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-center sm:text-center md:text-left lg:text-left xl:text-left 2xl:text-left text-[29px] leading-[36px] md:leading-[50px] lg:leading-[77px] md:text-[44px] lg:text-[68px]">
                Creative Digital  Design Agency <br /> with Max <br /> Conversions
              </h1>
              <p className="py-8 text-lg text-center text-[#464646] md:text-left sm:px-20 md:px-0  text-[15px] 2xl:text-[18px]">
                We do not create In
                terfaces, we create experiences for users to drive results! ✨
              </p>

              <div className="flex flex-wrap justify-center md:justify-start space-x-4">
                <button className="btAnm border-2 border-[#FF4309] text-[#EE3124] font-[GT03] px-5 py-3 mt-2">
                  Explore Service
                </button>
                <button className="btAnm border-2 border-[#FF4309] text-[#EE3124] font-[GT03] px-5 py-3 mt-2">
                  View Client Success Stories
                </button>
              </div>
            </div>

            {/* Right section with animation */}
            <div className="w-full md:w-1/2 hidden sm:hidden md:block lg:block xl:block 2xl:block">
              <div className="video-main relative">
                <div className="promo-video">
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                    <div className="waves wave-4"></div>
                    <div className="waves wave-5"></div>
                    <div className="waves wave-6"></div>
                  </div>
                </div>
                {/* Centering the image within the animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* <Image decoding="async" src='' alt="Logo" height={0} width={0} /> */}
                  <Image src="/Images/Logo.webp" alt="" height={200} width={200} className="w-[100%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <----Banner section End--------> */}

      {/* <----Interfaces  section start--------> */}

      <div className="pt-5 sm:pt-10 md:pt-32 xl:pt-32 2xl:pt-32 max-w-[1765px] mx-auto bg-cover  bg-center"
        style={{ backgroundImage: "url('/Images/bluebg.jpg')" }}>
        <div className="container">
          <div className="py-10 px-5 2xl:px-10 2xl:py-20  sm:w-[490px] sm:mx-auto md:mx-0 xl:w-[490px] 2xl:w-[490px]  text-center bg-[#ffffff]">
            <h2 className="text-[30px] 2xl:text-[38px]">Interfaces Being More People-Centric</h2>
            <p className="py-2 text-[15px] 2xl:text-[18px] text-[#0a1c20]">We work on prioritizing the customer needs and engaging them through a clear message, appealing visuals and graphics.</p>
            <p className="py-2 text-[15px] 2xl:text-[18px] text-[#0a1c20]">By crafting an experience that truly resonates with your audience, you build lasting trust and loyalty, ultimately driving sustainable growth.
              📈.</p>
            <button className="btAnm2 py-[14px] px-[60px] bg-[#ff4309] text-[#ffffff] text-[18px] mt-5 2xl:mt-15">Our Process</button>
          </div>
        </div>
      </div>
      {/* <----Interfaces  section End--------> */}

      {/* <----Working  section Start--------> */}

      <div className="py-20 border-[#FF4309] border-b-5 ">
        <div className="container">
          <h2 className="text-center text-[30px] 2xl:text-[38px] ">Working with Consistency and Due Diligence for Startups and Businesses since 2015</h2>

          <div className=" lg:flex xl:flex 2xl:flex justify-between items-center mt-10">
            <div>
              <div className="mt-4">
                {selectedContent === 'Content for Ellipse 1' && (
                  <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex sm:justify-between sm:items-center
                   md:justify-between md:items-center lg:justify-between lg:items-center xl:justify-between xl:items-center 2xl:justify-between 2xl:items-center">
                    <div className="flex justify-center ">
                      <Image src="/Images/Ellipse-1.webp" alt="" height={200} width={200} className="text-center w-32" />
                    </div>
                    <div className="mt-4  sm:w-[700px] md:w-[700px] lg:w-[700px] xl:w-[700px] 2xl:w-[700px] px-2 sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10">
                      <p className="text-[15px] 2xl:text-[18px] text-[#0a1c20]">" CodeXMattrix has been helping us at Mentors Guild with a refreshing new approach to marketing and sales.</p>
                      <p className="text-[15px] 2xl:text-[18px] text-[#0a1c20] my-4">I think his unique approach (a tight combination of buyer psychology and ability to craft new offers) is more suited for rapid growth in revenues than anything else I have seen by Hawaii-based marketers."</p>
                      <h3>Lqbal Ashraf</h3>
                      <span className="text-[#FF4309] text-[18px]">CEO, GUILD.im</span>
                    </div>
                  </div>
                )}

                {selectedContent === 'Content for Ellipse 2' && (
                  <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex sm:justify-between sm:items-center
                   md:justify-between md:items-center lg:justify-between lg:items-center xl:justify-between xl:items-center 2xl:justify-between 2xl:items-center">
                    <div className="flex justify-center">
                      <Image src="/Images/Ellipse-2.webp" alt="" height={200} width={200} className="w-32" />
                    </div>
                    <div className="mt-4  sm:w-[700px] md:w-[700px] lg:w-[700px] xl:w-[700px] 2xl:w-[700px] px-2 sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10">
                      <p className="text-[15px] 2xl:text-[18px] text-[#0a1c20]">" "CodeXMattrix is very personable, persistent, and very good at communicating ideas. We enjoyed our time working with him and learned a lot. We hope to re-engage again in the future."</p>
                      <h3>Nick Bolton,</h3>
                      <span className="text-[#FF4309] text-[18px]">CEO, Symless</span>
                    </div>
                  </div>
                )}
                {selectedContent === 'Content for Ellipse 3' && (
                  <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex sm:justify-between sm:items-center md:justify-between md:items-center lg:justify-between lg:items-center xl:justify-between xl:items-center 2xl:justify-between 2xl:items-center">
                    <div className="flex justify-center">
                      <Image src="/Images/Ellipse-3.webp" alt="" height={200} width={200} className="w-32" />
                    </div>
                    <div className="mt-4  sm:w-[700px] md:w-[700px] lg:w-[700px] xl:w-[700px] 2xl:w-[700px] px-2 sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10">
                      <p className="text-[15px] 2xl:text-[18px] text-[#0a1c20]">"CodeXMattrix did a great job with his ad funnel strategy. Really well thought out and custom to our campaign, it wasn't just a cookie cutter solution. Great job at setting us up for success.".</p>
                      <h3>Nick Dennis,</h3>
                      <span className="text-[#FF4309] text-[18px]">CEO, fitDEGREE</span>
                    </div>
                  </div>
                )}
                {selectedContent === 'Content for Ellipse 4' && (
                  <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex sm:justify-between sm:items-center
                   md:justify-between md:items-center lg:justify-between lg:items-center xl:justify-between xl:items-center 2xl:justify-between 2xl:items-center">
                    <div className="flex justify-center">
                      <Image src="/Images/Ellipse-4.webp" alt="" height={200} width={200} className="w-32" />
                    </div>
                    <div className="mt-4  sm:w-[700px] md:w-[700px] lg:w-[700px] xl:w-[700px] 2xl:w-[700px] px-2 sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10">
                      <p className="text-[15px] 2xl:text-[18px] text-[#0a1c20]">"CodeXMattrix is outstanding in every respect. He exceeded all expectations and communicated effectively throughout. He is creative, resourceful and thoughtful—a sincere pleasure to work with."</p>

                      <h3>Larry Gilbert,</h3>
                      <span className="text-[#FF4309] text-[18px]">CEO, Event Network</span>
                    </div>
                  </div>
                )}
                {selectedContent === 'Content for Ellipse 5' && (
                  <div className="sm:flex md:flex lg:flex xl:flex 2xl:flex sm:justify-between sm:items-center
                   md:justify-between md:items-center lg:justify-between lg:items-center xl:justify-between xl:items-center 2xl:justify-between 2xl:items-center">
                    <div className="flex justify-center">
                      <Image src="/Images/Ellipse-5.webp" alt="" height={200} width={200} className="w-32" />
                    </div>
                    <div className="mt-4  sm:w-[700px] md:w-[700px] lg:w-[700px] xl:w-[700px] 2xl:w-[700px] px-2 sm:px-10 md:px-10 lg:px-10 xl:px-10 2xl:px-10">
                      <p className="text-[15px] 2xl:text-[18px] text-[#0a1c20]">"CodeXMattrix does excellent work! I will certainly be using him again in the future!"</p>
                      <h3>Terry Sweet,</h3>
                      <span className="text-[#FF4309] text-[18px]">CEO, Background Information Group</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap sm:flex sm:flex-row md:flex md:flex-row xl:flex 2xl:flex 2xl:flex-col justify-center items-center
             gap-4 sm:gap-8 md:gap-8 lg:gap-6 xl:gap-8 2xl:gap-8 bg-[#f8fbff]  lg:w-[150px] 2xl:w-[150px] xl:w-[150px] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-10 2xl:p-10 rounded-lg mt-10">

              <Image src="/Images/Ellipse-1.webp" alt="" height={50} width={50}
                className={selectedContent === 'Content for Ellipse 1' ? 'opacity-100' : 'opacity-50'} onClick={() => handleImageClick('Content for Ellipse 1')} />
              <Image src="/Images/Ellipse-2.webp" alt="" height={50} width={50}
                className={selectedContent === 'Content for Ellipse 2' ? 'opacity-100' : 'opacity-50'} onClick={() => handleImageClick('Content for Ellipse 2')} />
              <Image src="/Images/Ellipse-3.webp" alt="" height={50} width={50}
                className={selectedContent === 'Content for Ellipse 3' ? 'opacity-100' : 'opacity-50'} onClick={() => handleImageClick('Content for Ellipse 3')} />
              <Image src="/Images/Ellipse-4.webp" alt="" height={50} width={50}
                className={selectedContent === 'Content for Ellipse 4' ? 'opacity-100' : 'opacity-50'} onClick={() => handleImageClick('Content for Ellipse 4')} />
              <Image src="/Images/Ellipse-5.webp" alt="" height={50} width={50}
                className={selectedContent === 'Content for Ellipse 5' ? 'opacity-100' : 'opacity-50'} onClick={() => handleImageClick('Content for Ellipse 5')} />
            </div>
          </div>

        </div>
      </div>

      {/* <----Working  section End--------> */}

      {/* <-----   section start -----> */}

      <div className="py-20 bg-gradient-to-b from-[#EAEAEE] to-[#EAEAEE] via-transparent">
        <div className="container">
          <h2 className="text-center text-[30px] 2xl:text-[38px]">
            A Customized Package Option including Full Service Design, Development, Marketing and much more
          </h2>
          <p className="py-3 text-[15px] 2xl:text-[18px] text-[#0a1c20]">
            An Appealing Design and A User-Friendly Interface let the Customers Enjoy More
            Time and sort their queries easily, this is our main focus where we work hard and understand
            deeply what your customers need and what solutions your company provides for a certain query.
          </p>

          {/* Menu Section */}
          <div className="bg-[#fff]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 rounded my-5">
            <div
              className={`flex flex-wrap justify-center items-center  gap-4 py-5 cursor-pointer ${selectedMenu === 'Website Design' ? 'bg-[#FF4309] text-white' : 'bg-[#fff]'
                }`}
              onClick={() => handleMenuClick('Website Design')}>
              <Image src="/Images/icon1.svg" alt="icon1" height={30} width={30} />
              <h6 className="text-[14px]">Website Creation & Redesign</h6>
            </div>
            <div
              className={`flex justify-center items-center  gap-4 py-5 cursor-pointer ${selectedMenu === 'Mobile App' ? 'bg-[#FF4309] text-white' : 'bg-[#fff]'
                }`}
              onClick={() => handleMenuClick('Mobile App')}
            >
              <Image src="/Images/icon2.svg" alt="icon2" height={30} width={30} className="text-white" />
              <h6 className="text-[14px]">Mobile App UX/UI Development</h6>
            </div>
            <div
              className={`flex justify-center items-center gap-4 py-5 cursor-pointer ${selectedMenu === 'Dashboard' ? 'bg-[#FF4309] text-white' : 'bg-[#fff]'
                }`}
              onClick={() => handleMenuClick('Dashboard')}
            >
              <Image src="/Images/icon3.svg" alt="icon3" height={30} width={30} />
              <h6 className="text-[14px]">Dashboard / CRM Design</h6>
            </div>
            <div
              className={`flex justify-center items-center  gap-4 py-5 cursor-pointer ${selectedMenu === 'Banner' ? 'bg-[#FF4309] text-white' : 'bg-[#fff]'
                }`}
              onClick={() => handleMenuClick('Banner')}
            >
              <Image src="/Images/icon4.svg" alt="icon4" height={30} width={30} />
              <h6 className="text-[14px]">Banner & Advertising Graphics</h6>
            </div>
          </div>

          {/* Content Section */}
          {selectedMenu === 'Website Design' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 justify-between items-center lg:max-w-[900px] mx-auto mt-20">
              <div className="2xl:max-w-[335px]">
                <h3 className="text-[24px]">Website Design and Development</h3>
                <p className="py-4 text-[15px] 2xl:text-[18px] text-[#0a1c20]">
                  Creating an amazing website that reflects your brand values and generates high conversions with user-friendly experience.
                </p>
                <button className="btAnm py-2 px-9 border-2 text-[16px] text-[#FF4309] border-[#FF4309]">
                  Get Started
                </button>
              </div>
              <div className="mt-10">
                <Image src="/Images/Computer1.webp" alt="Computer" height={400} width={400} />
              </div>
            </div>
          )}

          {selectedMenu === 'Mobile App' && (
            <div className="grid grid-cols-2 justify-between items-center max-w-[900px] mx-auto mt-20">
              <div className="max-w-[335px]">
                <h3 className="text-[24px]">Mobile App UI/UX Development</h3>
                <p className="py-4 text-[15px] 2xl:text-[18px] text-[#0a1c20]">
                  Delivered 100+ orders by creating perfect UI/UX that combines human elements with perfect visuals and appealing icons/ interfaces and designs. .
                </p>
                <button className="btAnm py-2 px-9 border-2 text-[16px] text-[#FF4309] border-[#FF4309]">
                  Get Started
                </button>
              </div>
              <div>
                <Image src="/Images/Mobile.webp" alt="Computer" height={400} width={400} />
              </div>
            </div>
          )}

          {selectedMenu === 'Dashboard' && (
            <div className="grid grid-cols-2 justify-between items-center max-w-[900px] mx-auto mt-20">
              <div className="max-w-[335px]">
                <h3 className="text-[24px]">Digital Product Design</h3>
                <p className="py-4 text-[15px] 2xl:text-[18px] text-[#0a1c20]">
                  Creating and Designing Digital Solutions including websites, apps and software that are according to user needs and define functionality.
                </p>
                <button className="btAnm py-2 px-9 border-2 text-[16px] text-[#FF4309] border-[#FF4309]">
                  Get Started
                </button>
              </div>
              <div>
                <Image src="/Images/dashboard.webp" alt="Computer" height={400} width={400} />
              </div>
            </div>
          )}

          {selectedMenu === 'Banner' && (
            <div className="grid grid-cols-2 justify-between items-center max-w-[900px] mx-auto mt-20">
              <div className="max-w-[335px]">
                <h3 className="text-[24px]">Marketing & Advertising Graphics</h3>
                <p className="py-4 text-[15px] 2xl:text-[18px] text-[#0a1c20]">
                  Creating attention-grabbing images and graphics to reach marketing goals at maximum levels.
                </p>
                <button className="btAnm py-2 px-9 border-2 text-[16px] text-[#FF4309] border-[#FF4309]">
                  Get Started
                </button>
              </div>
              <div>
                <Image src="/Images/banner.webp" alt="Computer" height={400} width={400} />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <------content section End --- */}
      {/* <-----Customized section Ent -----> */}

      {/* ------Service section start---- */}
      <div className="py-10 bg-[#ff4309]">
        <div className="container">
          <h2 className="text-[30px] 2xl:text-[38px] text-center text-white">The Services and Supports You Need for Online Platforms is All here</h2>
        </div>
      </div>
      {/* -----Services section End ----- */}

      {/* <----  logo  section start--------> */}

      <div className="pt-5 sm:pt-10 md:pt-32 xl:pt-32 2xl:pt-32 max-w-[1745px] mx-auto bg-contain  bg-center"
        style={{ backgroundImage: "url('/Images/bg-logo.jpg')" }}>
        <div className="container">
          <div className="flex justify-end ">
            <div className="py-10 px-5 2xl:px-10 2xl:py-20  sm:w-[490px] sm:mx-auto md:mx-0 xl:w-[490px] 2xl:w-[490px]  text-center bg-[#ffffff]">

              <p className="py-2 text-[15px] 2xl:text-[18px] text-[#0a1c20]">
                We are here with a team of expert designers and developers who make genuine efforts to create the most appealing designs needed.
                .</p>
              <p className="py-2 text-[15px] 2xl:text-[18px] text-[#0a1c20]">
                We work on Vision rather than seeing a project just like another task.         📈.
              </p>
              <p className="py-2 text-[15px] 2xl:text-[18px] text-[#0a1c20]">
                It’s your time to have the best and highest converting designs and visuals so you can make a bigger difference in a short span. We not only deliver digital experiences but we also make sure that they work without any issues and perform 110% of the time.
              </p>
              <button className="btAnm2 py-[14px] px-[60px] bg-[#ff4309] text-[#ffffff] text-[18px] mt-5 2xl:mt-15">Read More</button>
            </div>
          </div>
        </div>
      </div>
      {/* <----  logo  section End--------> */}

      {/* ---------------  carousel  section start----------- -*/}
      <Carousel/>

      {/* ---------------  carousel  section ENd----------- */}

      {/* -----------Lets Chat start ------ */}

      {/* -----------Lets Chat start ------ */}

      <div className="py-20 bg-[#ff4309] text-center">
        <div className="container">
          <h2 className="text-[30px] 2xl:text-[38px] text-[#ffffff]">Lets Chat</h2>
          <p className="text-[15px] 2xl:text-[18px] text-[#ffffff] py-3">
            We believe a better communication experience with a client is better than anything else. Why not chat and exchange ideas now?
          </p>
          <button className="btAnm2 text-[18px] text-[#ffffff] border-2 border-[#ffffff] px-15 py-3">Get Started Now </button>
        </div>
      </div>

      {/* -----------Lets Chat End ------ */}

    </>
  );
}
