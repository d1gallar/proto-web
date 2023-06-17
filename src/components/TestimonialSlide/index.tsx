import Image from "next/image";

type TestimonialSlideProps = {
  profile: string;
  name: string;
  quote: string;
  description: string;
  color: string;
  profession: string;
};

export default function TestimonialSlide(props: TestimonialSlideProps) {
  return (
    <div
      className="font-Inter border-2 border-black border-solid rounded-lg p-4 -skew-y-[1.2deg] min-w-[240px] testimonial-grid-item2 sm:p-10"
      style={{ backgroundColor: `${props.color}` }}
    >
      <div className="w-full h-full flex flex-col gap-10 skew-y-[1.2deg]">
        <div className="w-full h-fit flex flex-row gap-4 items-center flex-wrap">
          <Image src={props.profile} alt="Profile Photo" priority draggable={false} />
          <div className="inline-block min-w-fit w-fit bg-white text-black border-2 border-black border-solid px-10 py-2 rounded-full">
            <p>{props.name}</p>
          </div>
        </div>
        <q className="text-3xl font-bold tracking-tight">{props.quote}</q>
        <p className="text-lg tracking-tight">{props.description}</p>
        <p className="text-xl font-extrabold tracking-tight">
          {props.profession}
        </p>
      </div>
    </div>
  );
}
