import PricingCard from "../PricingCard";

const pricingOptions = [
  {
    name: "STARTER",
    price: "Free",
    color: "#FF7070",
    offers: [
      "Unlimited personal files",
      "Unlimited collaborators",
      "Mobile app",
      "Community support",
    ],
  },
  {
    name: "STANDARD",
    price: "$12",
    color: "#6C8CFF",
    offers: [
      "Unlimited version history",
      "Sharing permissions",
      "Shared and private projects",
      "Team libraries",
      "Audio conversations",
    ],
  },
  {
    name: "PRO",
    price: "$18",
    color: "#9671FF",
    offers: [
      "Design analytics",
      "Admin permissions",
      "Branching file history",
      "Private plugins and widgets",
      "Organization Libraries",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="p-12 flex flex-col gap-8">
      <h1 className="text-center font-Inter font-bold text-4xl md:text-5xl">
        Pricing
      </h1>
      <div className="w-full h-full grid grid-rows-3 grid-cols-1 gap-10 pb-16 md:grid-rows-1 md:grid-cols-3">
        {pricingOptions.map((plan) => {
          return (
            <PricingCard
              key={plan.name}
              color={plan.color}
              name={plan.name}
              price={plan.price}
              offers={plan.offers}
            />
          );
        })}
      </div>
    </section>
  );
}
