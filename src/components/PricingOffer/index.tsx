import BlackCheckedCircle from "../BlackCheckedCircle";

type PricingOfferProps = {
  offer: string;
};

export default function PricingOffer(props: PricingOfferProps) {
  return <li className="flex flex-row gap-4 items-center">
    <BlackCheckedCircle />
    <p className="font-Inter font-medium text-base tracking-[0.4px]">{props.offer}</p>
  </li>;
}