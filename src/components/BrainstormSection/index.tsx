import Image from "next/image";
import BrainstormPostIts from "../../../public/img/brainstorm-postits.svg";

export default function BrainstormSection() {
  return (
    <section className="w-full h-full bg-[#FF5A5A]">
      <div className="flex flex-col-reverse justify-start items-center gap-12 py-20 mx-10 md:flex-row ">
        <Image
          src={BrainstormPostIts}
          priority
          draggable={false}
          alt="Post It Notes"
          className="w-full md:w-1/2"
        />
        <div className="w-full h-full flex flex-col gap-10">
          <div className="w-full flex flex-col gap-2 justify-center items-center text-3xl font-bold xsm:text-4xl md:text-5xl md:items-start">
            <h1>Brainstorm.</h1>
            <h1>Innovate.</h1>
            <h1>Iterate.</h1>
          </div>
          <p className="text-2xl">
            An intuitive way to brainstorm new ideas and collaborate with your
            team. Transform your concepts into simple interfaces.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
