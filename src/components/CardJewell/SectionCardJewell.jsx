import gold_bracelet from "../../assets/images/image24.png";
import gold_ring from "../../assets/images/image25.png";
import { CardJewell } from "./CardJewell";

const goldData = [
  {
    reverse: false,
    image: gold_bracelet,
    title: "Gold Woven Chain Bracelet in Black",
    description:
      "This bracelet features a 5MM Stainless Steel chain with Nylon cord braiding. Each bracelet includes a polishing pad and a cotton jewelry pouch. Proudly made by hand in Atlanta, GA.",
    price: "549.29",
  },
  {
    reverse: true,
    image: gold_ring,
    title: "Gold Black Coral Ring",
    description:
      "A 14K yellow gold ring Two Hawaiian Black Coral inlaid strips, 14.5x2mm Ring sizes 4-8 Contact us for additional ring sizes To our valued International Customers, an extra CITES charge will be added to your order.",
    price: "320.99",
  },
];

export const SectionCardJewell = () => {
  return (
    <>
      {goldData.map((data) => (
        <CardJewell
          key={data.title}
          reverse={data.reverse}
          image={data.image}
          title={data.title}
          description={data.description}
          price={data.price}
        />
      ))}
    </>
  );
};
