import CircularNum from "../CircularNum";

type DesignStepProps = {
  num: string;
  title: string;
  description: string;
};

export default function DesignStep(props: DesignStepProps) {
  return (
    <div className="w-full h-fit flex flex-col gap-3 font-Inter tracking-tight text-black items-center xsm:items-start">
      <CircularNum num={props.num} />
      <h2 className="text-xl font-semibold sm:text-2xl">{props.title}</h2>
      <p className="md:text-lg text-center xsm:text-left">{props.description}</p>
    </div>
  );
}
