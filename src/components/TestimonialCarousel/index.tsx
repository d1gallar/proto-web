"use client";
import { useState } from "react";
import PinkCircleBtn from "../PinkCircleBtn";
import BlackRoundBackArrow from "../BlackRoundBackArrow";
import BlackRoundNextArrow from "../BlackRoundNextArrow";
import TestimonialImgOne from "../../../public/img/testimonial-1.svg";
import TestimonialImgTwo from "../../../public/img/testimonial-2.svg";
import TestimonialImgThree from "../../../public/img/testimonial-3.svg";
import useHover from "@/hooks/Hover";
import TestimonialSlide from "../TestimonialSlide";

const slides = [
  {
    profile: TestimonialImgOne,
    name: "Jeff A.",
    quote:
      "It's incredibly powerful and versatile, offering a wide range of tools and features to bring my design visions to life. I'm impressed!",
    description:
      "Driven by curiosity, Jeff spent countless hours experimenting with different design software, honing their skills and creating digital artwork. Their love for aesthetics and attention to detail gradually evolved into a fascination with user interfaces.",
    color: "#FF7272",
    profession: "UX Designer",
  },
  {
    profile: TestimonialImgTwo,
    name: "Jasmine K.",
    quote:
      "It provides a seamless experience, allowing me to focus on unleashing my creativity rather than grappling with complicated menus or a cluttered workspace.",
    description:
      "Jasmine started exploring the vast array of features that Proto had to offer. She was thrilled to discover a library filled with pre-built components and templates, each meticulously crafted to perfection. This treasure trove of resources saved her countless hours of work, enabling her to focus on the finer details of her designs.",
    color: "#ADD3FF",
    profession: "UI Designer",
  },
  {
    profile: TestimonialImgThree,
    name: "Jeff A.",
    quote:
      "This tool has become an invaluable asset in my design arsenal. It has truly transformed the way I approach projects and has taken my designs to new heights.",
    description:
      "In the vast world of UI design, May stood out as a passionate and dedicated designer who strived for excellence in every project. She understood the importance of crafting seamless user experiences and sought a tool that would align with her design philosophy.",
    color: "#FFADF2",
    profession: "Full Stack Developer",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (activeIndex >= slides.length - 1) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
  };

  const prev = () => {
    if (activeIndex <= 0) setActiveIndex(slides.length - 1);
    else setActiveIndex(activeIndex - 1);
  };

  const { isHover: backHover, eventHandlers: backHandlers } = useHover();
  const { isHover: nextHover, eventHandlers: nextHandlers } = useHover();

  const currentSlide = slides[activeIndex];
  return (
    <div className="py-16 md:py-20 w-full md:min-h-[80vh] h-full justify-center items-center gap-16 testimonial-grid">
      <div className="w-full testimonial-grid-item1 flex justify-end">
        <PinkCircleBtn
          onMouseOver={backHandlers.onMouseOver}
          onMouseOut={backHandlers.onMouseOut}
          aria-label="Previous Quote"
          onClick={() => prev()}
        >
          <BlackRoundBackArrow
            className="scale-[60%]"
            fillcolor={backHover ? "white" : "black"}
            onMouseOver={backHandlers.onMouseOver}
            onMouseOut={backHandlers.onMouseOut}
          />
        </PinkCircleBtn>
      </div>
      <TestimonialSlide
        profile={currentSlide.profile}
        name={currentSlide.name}
        quote={currentSlide.quote}
        description={currentSlide.description}
        color={currentSlide.color}
        profession={currentSlide.profession}
      />
      <div className="w-full testimonial-grid-item3 flex justify-start">
        <PinkCircleBtn
          onMouseOver={nextHandlers.onMouseOver}
          onMouseOut={nextHandlers.onMouseOut}
          aria-label="Next Quote"
          onClick={() => next()}
        >
          <BlackRoundNextArrow
            className="scale-[60%]"
            fillcolor={nextHover ? "white" : "black"}
          />
        </PinkCircleBtn>
      </div>
    </div>
  );
}
