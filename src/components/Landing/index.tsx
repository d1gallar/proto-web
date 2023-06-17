import Image from "next/image";
import WhiteArrow from "../WhiteArrowIcon";
import LandingSketch from "../../../public/img/landing-sketch.svg";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="w-full h-full font-Inter">
      <div className="flex flex-col-reverse justify-start items-center gap-12 py-12 mx-10 md:flex-row ">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold xsm:text-4xl md:text-5xl">
            Unlock Your Creative <br /> Potential with Proto
          </h1>
          <p className="text-lg tracking-[-0.01rem] md:text-2xl">
            Sketch and plan out your ideas.
            <b>
              &nbsp;Innovate with tools that increase productivity and
              efficiency.
            </b>
          </p>
          <div className="w-full flex justify-center items-center">
            <Image
              src={LandingSketch}
              alt="Drawings of a sketched out plan"
              priority
            />
          </div>
          <div className="w-full h-fit flex flex-col sm:flex-row items-center justify-center pt-10 gap-4">
            <Link
              href="/getting-started"
              className="h-14 w-full bg-black text-white font-bold text-base px-6 py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#383838] hover:-translate-y-[1px] sm:w-auto"
            >
              <p>Getting Started</p>
              <WhiteArrow className="scale-75" />
            </Link>
            <button className="h-14 w-full text-black font-bold text-base px-6 py-4 border-black border-4 rounded-lg flex items-center justify-center hover:-translate-y-[1px] sm:w-auto">
              <p>Learn More</p>
            </button>
          </div>
        </div>
        <Image
          src="/img/landing-photo.svg"
          width="1000"
          height="535"
          className="min-w-2/3 w-full xsm:px-20 md:w-1/2 md:px-0 md:scale-[70%]"
          alt="Portrait Photo"
          priority={true}
        />
      </div>
    </section>
  );
}
