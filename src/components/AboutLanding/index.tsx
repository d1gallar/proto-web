import WireframeSketch from "../../../public/img/wireframe-sketch.svg";
import AboutText from "../../../public/img/about-text.svg"
import Image from "next/image";

export default function AboutLanding() {
  return (
    <section className="w-full h-fit font-Inter">
      <div className="flex flex-col-reverse justify-start items-center gap-12 py-12 mx-8 sm:mx-16 md:flex-row ">
        <div className="w-full sm:w-1/2 h-fit flex flex-col gap-8">
          <Image
            src={AboutText}
            alt="Create, publish, and test new designs."
            priority
            draggable={false}
            className="w-full"
          />
          <p className="text-lg tracking-[-0.01rem] md:text-2xl">
            Loved by designers, Proto has everything to create new ideas and
            transform them into quick prototypes. An intuitive creative tool
            that takes your workflow to the next level.
          </p>
        </div>
        <Image
          src={WireframeSketch}
          alt="Wireframe Sketches"
          draggable={false}
          priority
          className="min-w-2/3 w-full h-fit xsm:px-20 md:w-1/2 md:px-0 md:scale-[60%]"
        />
      </div>
    </section>
  );
}
