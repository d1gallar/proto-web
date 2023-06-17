import "./Testimonial.css";
import TestimonialCarousel from "../TestimonialCarousel";

export default function Testimonials() {

  return (
    <section className="w-full h-full bg-white">
      <div className="mx-10 py-8 md:mx-20 ">
        <h1 className="w-full my-8 text-3xl font-bold xsm:text-4xl md:text-5xl">
          Expand your designing capabilities.
        </h1>
        <TestimonialCarousel />
      </div>
    </section>
  );
}
