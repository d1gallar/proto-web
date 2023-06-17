import PricingOffer from "../PricingOffer";

type PricingCardProps = {
  name: string;
  price: string;
  color: string;
  offers: Array<string>;
};

export default function PricingCard(props: PricingCardProps) {
  const planStr = props.name[0].concat(
    props.name.slice(1, props.name.length).toLowerCase()
  );
  return (
    <div className="relative font-Inter w-full h-full bg-white border-2 border-black border-solid p-10 rounded-md">
      <div
        className={
          "absolute w-full h-4 rounded-t-sm border-b-2 border-black border-solid left-0 top-0"
        }
        style={{ backgroundColor: `${props.color}` }}
      ></div>
      <div className="w-full h-full flex flex-col justify-between">
        <div>
          <p className="my-4 md:my-8 text-center font-extrabold tracking-[0.1px] text-2xl">
            {props.name}
          </p>
          {props.price == "Free" ? (
            <h2 className="my-5 text-center font-bold tracking-[0.1px] text-5xl">
              {props.price}
            </h2>
          ) : (
            <div className="w-full inline-flex justify-center items-center -translate-x-8">
              <h2 className="my-5 text-center font-bold tracking-[0.1px] text-5xl">
                {props.price}
              </h2>
              <div className="relative">
                <p className="absolute -top-6 left-3 tracking-[0.1px] font-bold text-[#323232]">
                  Per Month
                </p>
              </div>
            </div>
          )}
          <ul className="py-6 w-full flex flex-col gap-4 list-none">
            {props.offers.map((offer) => {
              return <PricingOffer key={offer} offer={offer} />;
            })}
          </ul>
        </div>
        <button
          className="w-full h-fit py-4 border-black border-2 border-solid rounded-lg hover:scale-[101%]"
          style={{ backgroundColor: `${props.color}` }}
        >
          <p className="text-black text-base font-extrabold tracking-tight">
            {props.price === "Free" ? "Try for Free" : `Choose ${planStr}`}
          </p>
        </button>
      </div>
    </div>
  );
}
