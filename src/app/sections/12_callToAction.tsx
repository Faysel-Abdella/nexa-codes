import Image from "next/image"
import CallToImg from "../assets/home_img.jpeg"
import rightIcon from "../assets/call_to_action_arrow.svg"

import { FaArrowRight } from "react-icons/fa6";
const CallToAction=()=>{
return <section className="mt-10">
    <div className="relative ">
        <Image src={CallToImg}  alt="call-to-action" className="h-[550px] medium:h-[650px] max-medium:h-[400px] max-small:h-[320px] max-extraSmall:h-[280px] w-full object-cover overflow-hidden "/>
        
        <div className="bg-[#000] bg-opacity-50 inset-0 absolute"></div>
        <div className="absolute  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="mb-8 
              max-md:mb-4
              max-small:mb-2
               flex flex-col gap-3 space-y-1 
               max-extraSmall:gap-0
               font-[400]  ">
                <h1 className="mb-4  
                max-md:mb-2
                max-small:mb-0
                text-[35px]
                max-md:text-[30px]
                max-small:text-[25px] max-extraSmall:text-[20px]  text-center line-height-[5px]  text-slate-50  leading-6">
                  앱 개발 업체  
                </h1>
                <h1 className=" text-[35px] 
                max-md:text-[30px]
                  max-small:text-[25px] max-extraSmall:text-[20px]  text-center text-slate-50 leading-6">
                  홈페이지 제작 업체
                </h1>
              </div>
              <div className="flex flex-col mb-14 max-extraSmall:mb-7">
                <p className="text-slate-50">
                  <span className=" text-[40px]
                  max-md:text-[30px]
                  max-small:text-[25px]
                  max-extraSmall:text-[16px]
                   whitespace-nowrap  text-slate-50 font-bold block">찾지 말고 넥사코드에 연락하세요!</span>
                  
                </p>
              </div>
              <div className=" flex items-center justify-center">
                 <button className="
                    h-[80px]
                    max-small:h-[60px]
                    max-extraSmall:h-[50px]
                    bg-transparent  max-small:px-[20px]   max-small:py-[8px]    py-[40px] px-[40px] rounded-[100px] text-[18px] text-center flex items-center   gap-[20px] 
                    bg-white
                    bg-opacity-20  border border-white backdrop-blur-[10px] cursor-pointer ">
                <span className="text-slate-50
                  text-[25px] max-small:text-[20px] font-normal
                  max-extraSmall:text-[12px]     font-['Noto Sans KR']" >상담 신청하러가기</span>

                  <Image src={rightIcon} alt="right arrow" className="w-[30px] max-small:w-[20px] max-extraSmall:w-[16px]"/>

                {/* <FaArrowRight   size={25} color="white" className=""/> */}
              </button>
              </div>
             
            </div>
    </div>
</section>

}
export default CallToAction