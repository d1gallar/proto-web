import { ReactNode } from "react";

type PinkCircleBtnProps = {
  children: ReactNode | Array<ReactNode>[];
  [x: string]: any;
};

export default function PinkCircleBtn(props: PinkCircleBtnProps) {
  return (
    <button
      className="bg-[#FFDEDE] w-fit h-fit text-2xl p-2 rounded-full border-black border-2 border-solid flex flex-row justify-center item-center hover:bg-black hover:scale-110 hover:text-white transition-all duration-200"
      {...props}
    >
      <div className="relative inline-block font-Inter font-semibold text-xlg text-black">
        {props.children}
      </div>
    </button>
  );
}
