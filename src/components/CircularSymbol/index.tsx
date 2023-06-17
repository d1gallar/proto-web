import { ReactNode } from "react";

type CircularNumProps = {
  children: ReactNode | Array<ReactNode>[];
};

export default function CircularNum(props: CircularNumProps) {
  return (
    <div className="bg-[#FFDEDE] w-12 h-12 text-2xl rounded-full border-black border-2 border-solid flex flex-row justify-center item-center">
      <p className="font-Inter font-semibold text-xlg text-black translate-y-[5px]">
        {props.children}
      </p>
    </div>
  );
}
