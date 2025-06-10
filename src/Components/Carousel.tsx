import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// Import required modules
import { FreeMode, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
    return (
        <>
            <div className='py-10 2xl:py-20'>
                <div className="container text-center">
                    <h2 className='text-[30px] 2xl:text-[38px] '>From Development to Design and Bringing Your Vision Into Life - Our Work Speaks for Itself</h2>
                    <p className='py-2 text-[15px] 2xl:text-[18px] text-[#0a1c20]'>Here is the peek through all our previous work and projects that you might find interesting and amazing </p>
                </div>

                <div className='2'>
                    <div className='max-w-[1885px] p-[15px] mx-auto'>
                        <Swiper
                            slidesPerView={1} // default for mobile
                            spaceBetween={20}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[FreeMode, Autoplay]}
                            className="mySwiper"
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                 1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },


                            }} >

                            <SwiperSlide>
                                <Image src="/Images/slide1.webp" alt="" height={500} width={500} />
                                <div className='mt-5'>
                                    <h3>
                                        Influencer Website Design, Personal Brand
                                    </h3>
                                    <h4 className='text-[20px]'>Bivana Gomez </h4>
                                    <div className='flex flex-wrap space-x-2'>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#Sportsapp</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#UI/UX Designer</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#App Design</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#UserInterface</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#Graphic Design</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#uiinspiration</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#appdesigner</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image src="/Images/slide2.webp" alt="" height={500} width={500} />
                                <div className='mt-5'>
                                    <h3>
                                        CRM and Inventory Management Dashboard for a Wine Store                                    </h3>
                                    <h4  className='text-[20px]'>Bivana Gomez </h4>
                                    <div className='flex flex-wrap space-x-2'>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#Sportsapp</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#UI/UX Designer</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#App Design</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#UserInterface</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#Graphic Design</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#uiinspiration</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#appdesigner</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/Images/slide3.webp" alt="" height={500} width={500} />
                                <div className='mt-5'>
                                    <h3>
                                        Mobile Betting App for Sports & eSports
                                    </h3>
                                    <h4  className='text-[20px]'>Bivana Gomez </h4>
                                    <div className='flex flex-wrap space-x-2'>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#Sportsapp</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#UI/UX Designer</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#App Design</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#UserInterface</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#Graphic Design</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#uiinspiration</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#appdesigner</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image src="/Images/slide1.webp" alt="" height={500} width={500} />
                                <div className='mt-5'>
                                    <h3>
                                        Influencer Website Design, Personal Brand
                                    </h3>
                                    <h4 className='text-[20px]'>Bivana Gomez </h4>
                                    <div className='flex flex-wrap space-x-2'>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#Sportsapp</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#UI/UX Designer</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#App Design</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#UserInterface</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#Graphic Design</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#uiinspiration</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#appdesigner</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image src="/Images/slide2.webp" alt="" height={500} width={500} />
                                <div className='mt-5'>
                                    <h3>
                                        CRM and Inventory Management Dashboard for a Wine Store                                    </h3>
                                    <h4  className='text-[20px]'>Bivana Gomez </h4>
                                    <div className='flex flex-wrap space-x-2'>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#Sportsapp</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#UI/UX Designer</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#App Design</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#UserInterface</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#Graphic Design</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#uiinspiration</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#appdesigner</button>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/Images/slide3.webp" alt="" height={500} width={500} />
                                <div className='mt-5'>
                                    <h3>
                                        Mobile Betting App for Sports & eSports
                                    </h3>
                                    <h4  className='text-[20px]'>Bivana Gomez </h4>
                                    <div className='flex flex-wrap space-x-2'>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#Sportsapp</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#UI/UX Designer</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#App Design</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#UserInterface</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#Graphic Design</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#uiinspiration</button>
                                        <button className='py-1 px-2 mt-2 bg-[#f6f6f6] text-[14px] text-[#464646]'>#appdesigner</button>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </>
    );
}
