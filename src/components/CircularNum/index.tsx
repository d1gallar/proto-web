type CircularNumProps = {
  num: string;
};

export default function CircularNum(props: CircularNumProps) {
  return (
    <div className="bg-[#FFDEDE] w-12 h-12 text-2xl rounded-full border-black border-2 border-solid flex flex-row justify-center item-center">
      <span className="font-Inter font-semibold text-xlg text-black translate-y-[5px]">
        {props.num}
      </span>
    </div>
  );
}
