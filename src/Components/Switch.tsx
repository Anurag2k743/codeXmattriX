"use Client";
import React, { useState } from 'react'
const Switch = () => {
      const [selectedContent, setSelectedContent] = useState('Content for Ellipse 1');
     const handleImageClick = (content) => {
    setSelectedContent(content);
  };
  return (
    <div>
       

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


    </div>
  )
}

export default Switch
