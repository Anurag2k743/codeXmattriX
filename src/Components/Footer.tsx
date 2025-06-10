import React from 'react'
import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <div className="bg-[#0a1c20]">
        <div className="container">
          <div className="slider">
            <div className="slider-wrapper py-8 ">
              <div className="slider-track ">
                <div className="slide-text">
                  <h5 className=' text-[30px] sm:text-[40px] md:text-[50] lg:text-[70px] xl:text-[70px] 2x:text-[78px]'> CODEX<span className="Footer-span">METTRIX</span> </h5>
                  <h5 className=' text-[30px] sm:text-[40px] md:text-[50] lg:text-[70px] xl:text-[70px] 2x:text-[78px]'> CODEX<span className="Footer-span">METTRIX</span> </h5>
                  {/* <h6 className='px-8'> CODEX<span className="Footer-span">METTRIX</span> </h6>  */}
                </div>
                <div className="slide-text">
                  <h5 className=' text-[30px] sm:text-[40px] md:text-[50] lg:text-[70px] xl:text-[70px] 2x:text-[78px]'> CODEX<span className="Footer-span">METTRIX</span> </h5>
                  <h5 className=' text-[30px] sm:text-[40px] md:text-[50] lg:text-[70px] xl:text-[70px] 2x:text-[78px]'> CODEX<span className="Footer-span">METTRIX</span> </h5>
                  {/* <h6 className='px-8'> CODEX<span className="Footer-span">METTRIX</span> </h6>  */}
                </div>
                <div className="slide-text">
                  <h5 className=' text-[30px] sm:text-[40px] md:text-[50] lg:text-[70px] xl:text-[70px] 2x:text-[78px]'> CODEX<span className="Footer-span">METTRIX</span> </h5>
                  <h5 className=' text-[30px] sm:text-[40px] md:text-[50] lg:text-[70px] xl:text-[70px] 2x:text-[78px]'> CODEX<span className="Footer-span">METTRIX</span> </h5>
                  {/* <h6 className='px-8'> CODEX<span className="Footer-span">METTRIX</span> </h6>  */}
                </div>
              </div>
            </div>
          </div>
        
        <div className="Footer-content grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4   text-white ">
          <div className="icon">
            <Image src="https://www.codexmattrix.com/wp-content/uploads/2022/03/logo-2.svg" className='w-[400px]' width={100} height={100} alt="Logo" />

          </div>
          <div className="list  mt-8  sm:mt-0 lg:pl-16 ">
            <h6>THE AGENCY</h6>
            <ul className='pt-4'>
              <li className=''>56,Civil Line Opposite to Hotal Center Point Dharmshala HP 176215</li>
              <li>+91 98054 44044</li>
              <li>cmx@codexmattrix.com</li>
            </ul>
          </div>
          <div className="list  mt-8 sm:mt-8 lg:m-0 lg:pl-16 ">
            <h6>SERVICES</h6>
            <ul className='pt-4'>
              <li>Website Creation & Redesign</li>
              <li>Mobile App UX/UI Development</li>
              <li>Dashboard / CRM Design</li>
              <li>Banner & Advertising Graphics</li>
            </ul>
          </div>
          <div className="list mt-8 sm:mt-8 lg:m-0 lg:pl-16 ">
            <h6>Company</h6>
            <ul className='pt-4'>
              <li>About</li>
              <li>Service</li>
              <li>Process</li>
              <li>Case studies</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="presence  border-b text-white ">
        <div className="flex items-center gap-4 my-6">
          <div className="flex-grow border-t border-gray-400"></div>
          <h3 className="text-sm ">Our Project</h3>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="flag-section sm:flex md:flex lg:flex justify-center my-4 ">
          <div className=" bg-[#223236] p-4 mx-2 rounded-md text-center mt-5">
            <div className='flex justify-center'>
              <Image src="https://www.codexmattrix.com/wp-content/uploads/2022/03/india-FLAG.svg" height={100} width={50} alt="India Flag" />
            </div>
            <p className='phh pt-4'>56,Civil Line Opposite to Hotal Center <br /> Point Dharmshala HP 176215</p>
          </div>
          <div className=" bg-[#223236] text-center p-4 mx-2 rounded-md mt-5">
            <div className='flex justify-center'>
              <Image src="https://www.codexmattrix.com/wp-content/uploads/2022/03/US-FLAG.svg" height={100} width={50} alt="USA Flag" />
            </div>
            <p className='phh pt-4'>1050 Auburn Rd, Unit 507 Swedesboro, <br /> NJ (U.S.A)</p>
          </div>
        </div>
      </div>

      <div className="text-center text-white ">
        <h2 className='py-4 copy-right'>2024 CodeXMattrix Digital. All Rights Reserved.</h2>
      </div>
    </div >
    </>
  )
}
