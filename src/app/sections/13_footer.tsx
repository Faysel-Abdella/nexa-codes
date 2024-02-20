import  logo  from "../assets/logo.svg"
import Image from "next/image"
export default function Footer() {
  return (
    <section className="processes-section flex items-center justify-center h-[330px] px-2" 
    id="contact_us"
    >
        <div className="flex  flex-col  items-center justify-center">
              <div className=" max-verySmall:mb-0 mb-[28px]">
          <Image src={logo} alt="Logo" className="max-verySmall:w-[50px] max-verySmall:h-[80px] w-[80] h-[150]"/>
        </div>
        {/* content */}
        <div className="  max-verySmall:text-[13px] max-extraSmall:text-[13px]   flex  flex-col gap-2  items-center justify-center text-[#FFF] font-normal font-['Noto Sans KR'] text-center text-[15px]">
            <p>(주)넥사코드</p>
            <p>사업자등록번호 362-80-00644  ㅣ  법인등록번호 101111-6357024</p>
            <p>통신판매업신고번호 2023-서울금천구가산-1527</p>
            <p>대표 홍길동</p>
            <div className="mt-[30px]">
                <p>서울특별시 금천구 가산디지털로 에이스 가산타워</p>
                <p>M : james@nhs.com   C : 070-7666-9111</p>
            </div>
        </div>
        </div>
    </section>
  )
}
