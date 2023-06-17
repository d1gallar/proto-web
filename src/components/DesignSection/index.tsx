import DesignStep from "../DesignStep";

const DesignInfoArr = [
  {
    title: "Plan your design.",
    description:
      "Consider the color scheme, typography, and overall visual style you want to achieve.",
  },
  {
    title: "Create prototypes.",
    description:
      "Introduce new interactive prototypes that ease the design process.",
  },
  {
    title: "Iterate your design.",
    description: "Enhance your designs with high fidelity prototypes.",
  },
  {
    title: "Faster Feedback.",
    description: "Seamlessly align your team’s thoughts and plans together.",
  },
  {
    title: "Repeat.",
    description:
      "Modify your designs to increase user experience and accessibility.",
  },
  {
    title: "Ship.",
    description: "Publish your design as a web-ready app.",
  },
];

export default function DesignSection() {
  return (
    <section className="bg-white w-full h-full">
      <div className="mx-10 py-8 md:mx-20 ">
        <h1 className="w-full my-8 text-3xl font-bold xsm:text-4xl md:text-5xl">
          Bring designs to life
        </h1>
        <div className="py-12 grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 gap-16">
          {DesignInfoArr.map((entry, i) => {
            return (
              <DesignStep
                num={(i + 1).toString()}
                key={i}
                title={entry.title}
                description={entry.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
