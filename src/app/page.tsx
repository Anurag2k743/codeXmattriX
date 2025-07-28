'use client';
import Image from "next/image";
import Carousel from "@/Components/Carousel";

export default function Home() {
  return (
    <>
      <div className="py-10 sm:py-14 md:py-15 lg:20 x:py-20 2xl:py-20">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center flex-wrap">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-center sm:text-center md:text-left lg:text-left xl:text-left 2xl:text-left text-[29px] leading-[36px] md:leading-[50px] lg:leading-[77px] md:text-[44px] lg:text-[68px]">
                Creative Digital  Design Agency <br /> with Max <br /> Conversions
              </h1>
              <p className="py-8 text-lg text-center text-[#464646] md:text-left sm:px-20 md:px-0  text-[15px] 2xl:text-[18px]">
                We do not create Interfaces, we create experiences for users to drive results! ✨
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
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image src="/Images/Logo.webp" alt="" height={200} width={200} className="w-[100%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 sm:pt-10 md:pt-32 xl:pt-32 2xl:pt-32 max-w-[1765px] mx-auto bg-cover bg-center" style={{ backgroundImage: "url('/Images/bluebg.jpg')" }}>
        <div className="container">
          <div className="py-10 px-5 2xl:px-10 2xl:py-20 sm:w-[490px] sm:mx-auto md:mx-0 xl:w-[490px] 2xl:w-[490px] text-center bg-[#ffffff]">
            <h2 className="text-[30px] 2xl:text-[38px]">Interfaces Being More People-Centric</h2>
            <p className="py-2 text-[15px] 2xl:text-[18px] text-[#0a1c20]">We work on prioritizing the customer needs and engaging them through a clear message, appealing visuals and graphics.</p>
            <p className="py-2 text-[15px] 2xl:text-[18px] text-[#0a1c20]">By crafting an experience that truly resonates with your audience, you build lasting trust and loyalty, ultimately driving sustainable growth. 📈.</p>
            <button className="btAnm2 py-[14px] px-[60px] bg-[#ff4309] text-[#ffffff] text-[18px] mt-5 2xl:mt-15">Our Process</button>
          </div>
        </div>
      </div>

      {/* Corrected unescaped quote example */}
      <div className="container py-10">
        <p>&quot;CodeXMattrix is outstanding in every respect. He exceeded all expectations and communicated effectively throughout. He is creative, resourceful and thoughtful—a sincere pleasure to work with.&quot;</p>
        <p>&quot;I think his unique approach (a tight combination of buyer psychology and ability to craft new offers) is more suited for rapid growth in revenues than anything else I have seen by Hawaii-based marketers.&quot;</p>
        <p>&quot;We hope to re-engage again in the future.&quot;</p>
        <p>He&apos;s a problem solver and ensures our systems perform 110% of the time.&quot;</p>
      </div>

      <Carousel />
    </>
  );
}
