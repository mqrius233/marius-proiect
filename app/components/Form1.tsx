import Image from "next/image";
import { Mukta, Roboto } from "next/font/google";

const roboto = Mukta({
  weight: "800",
  subsets: ["latin"],
});

export default function Form1() {
  return (
    <div className=" bg-red-100 w-full h-[1150px] grid grid-cols-2 ">
      <div>
        <Image
          className=" flex-shrink-0 rotate-180 box-border ml-[255px] mt-[54px]"
          src="/shapes 5.png"
          alt="iv future"
          width={200}
          height={200}
        />
        <div className=" ml-[150px] flex flex-col text-gray-700 not-italic self-stretch text-6xl leading-[120%] font-extrabold ">
          Experience the <br />
          World of Web
        </div>
        <div className="ml-[150px] w-[1440px]  mt-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod
          elit
          <br />
          sapien, eu tempor diam rhoncus et.
        </div>

        <button className=" text-white  rounded-[8px] ml-[150px] mt-[48px] flex  py-[16px] px-[48px] justify-center items-center gap-[10px] bg-orange-600">
          Enroll Now!
          <Image
            className=" w-6 h-6"
            src="/Arrow.png"
            alt="iv future"
            width={104}
            height={102}
          />
        </button>
        <div className=" flex flex-col ml-[150px] text-orange-600 mt-[36px]">
          Most of the students have given a five star review for us.
        </div>

        <Image
          className=" flex-shrink-0 box-border ml-[54px]"
          src="/shapes 3.png"
          alt="iv future"
          width={200}
          height={200}
        />
      </div>
      <div className="relative w-[600px] h-[700px] ml- mt-[103px] flex-shrink-0">
        <div className="  absolute w-[424px] h-[541px] bg-orange-200 top-[24px] right-[24px] rounded-[24px]"></div>

        <Image
          className="absolute top-0 right-0"
          src="/poza1.png"
          alt="iv future"
          width={424}
          height={541}
        />

        <Image
          className=" blur-none absolute top-[17px] right-[17px] "
          src="/prom3.png"
          alt="iv future"
          width={70}
          height={60}
        />

        <Image
          className=" left-[75px]  blur-none absolute top-[127px] right-[17px] "
          src="/shapes 2.png"
          alt="iv future"
          width={160}
          height={126}
        />

        <Image
          className=" left-[440px]  blur-none absolute top-[490px] right-[17px] "
          src="/shapes 4.png"
          alt="iv future"
          width={200}
          height={126}
        />
      </div>
    </div>
  );
}
