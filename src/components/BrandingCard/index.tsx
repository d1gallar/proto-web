import Image from "next/image";
import WhiteArrow from "../WhiteArrowIcon";

export default function BrandingCard() {
  return (
    <div className="w-full h-fit bg-[#D2D9FF] border-2 border-black border-solid font-Inter flex flex-col gap-10 justify-start p-4 sm:p-10 rounded-lg sm:flex-row">
      <div className="w-full sm:w-2/3 flex flex-col gap-2">
        <h1 className="w-full my-8 text-3xl font-bold sm:text-4xl md:text-5xl">
          Start designing on Proto.
        </h1>
        <p className="text-base tracking-[-0.01rem] md:text-lg">
          Access a way to completely transform your web design process. <br />
          Create stunning layouts and designs.
          <b> Join our design community.</b>
        </p>
        <div className="my-10 flex flex-col justify-center items-center sm:justify-start sm:items-start">
          <button className="w-42 h-14 bg-black text-white font-semibold text-sm px-6 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#383838] hover:-translate-y-[1px] sm:w-auto">
            <p>Learn Now</p>
            <WhiteArrow className="scale-75"/>
          </button>
        </div>
      </div>
      <div className="w-full px-4 sm:px-0 sm:w-1/3 hidden sm:block">
        <Image
          src="/img/branding-sketch.svg"
          alt="A sketch that visualizes your ideas."
          width={200}
          height={210}
          priority={true}
          className="w-full h-full scale-75"
        />
      </div>
    </div>
  );
}
