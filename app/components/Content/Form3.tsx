import Image from "next/image";
import { Mukta, Roboto } from "next/font/google";

const roboto = Mukta({
  weight: "800",
  subsets: ["latin"],
});

export default function Form3() {
  return (
    <div className=" grid grid-cols-2 w-full h-[900px] flex-shrink-0 bg-orange-100">
      <div className=" mt-[60px]">
        <Image
          className=" ml-[243px] flex-shrink-0  transform rotate-[-104.212]   "
          src="/shapes 5.png"
          alt="iv future"
          width={300}
          height={186}
        />

        <div className=" inline-flex flex-col items-start gap-9">
          <div className=" flex flex-col self-strech text[#374151] text-[70px] font-extrabold not-italic leading-4 ml-[150px] ">
            About us
          </div>
          <div className="ml-[150px] flex w-[461px] flex-col text-[#4B5563] text-lg">
            We bridge the gap between classroom knowledge and real-world
            experience, preparing aspiring IT professionals for success.
          </div>

          <button className=" text-white  rounded-[8px] ml-[150px]  flex  py-[16px] px-[48px] justify-center items-center gap-[10px] bg-orange-600  shadow-custom-shadow">
            Join us now
            <Image
              className=" w-6 h-6"
              src="/Arrow.png"
              alt="iv future"
              width={104}
              height={102}
            />
          </button>
        </div>
      </div>

      <div className="relative ">
        <Image
          className=" absolute flex-shrink-0 mt-9 ml-[100px] rounded-tl-[100px] rounded-br-[100px]  rounded-tr-3xl rounded-bl-3xl"
          src="/multime.png"
          alt="iv future"
          width={550}
          height={100}
        />

        <div className="">
          <Image
            className=" top-[500px] -left-[100px] absolute flex-shrink-0 mt-9 ml-[50px] rounded-tl-[100px] rounded-br-[100px]  rounded-tr-3xl rounded-bl-3xl"
            src="/shapes 2.png"
            alt="iv future"
            width={170}
            height={126}
          />
        </div>
      </div>
    </div>
  );
}
