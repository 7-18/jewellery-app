import { CardCollection } from "./CardCollection";
import comfort from "../../assets/images/image11.png";
import $100gold from "../../assets/images/image13.png";
import trendy from "../../assets/images/image14.png";

const collectionData = [
  {
    title: "J-Shop’s best Collections",
    subtitle: "Comfort",
    description:
      "We will reach out to you for the current cost of this permit. Please contact us for more information. Maui Divers Jewelry offers extended sizing which may be subject to an additional cost. Any subsequent resizes after purchase will incur an additional charge. Please note some styles cannot be resized due to their design.",
    image: comfort,
    reverse: false,
  },
  {
    subtitle: "100% Gold",
    description:
      "Gold chains were a sign of service to the supreme beings of a particular religion in the past. Nowadays, they are symbols of wealth and class. Rap artists were most likely the ones who brought the custom of wearing gold chains to modern men's everyday life. There are a few reasons why do men wear gold chains.",
    image: $100gold,
    reverse: true,
  },
  {
    subtitle: "Trendy",
    description:
      "A collection of hammered gold discs swing from the top and bottom of a shimmery gold hoop, creating a noisy fringe. Earring attaches to a standard fishhook fitting. Sold as one pair of earrings.Other hoop designs do not complete the circle, but penetrate through the ear in a post, using the same attachment techniques that apply to stud earrings.",
    image: trendy,
    reverse: false,
    gtshop: "Go to shop",
  },
];
export const SectionCardCollection = () => {
  return (
    <>
      {collectionData.map((data) => (
        <CardCollection
          key={data.subtitle}
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          image={data.image}
          reverse={data.reverse}
          gtshop={data.gtshop}
        />
      ))}
    </>
  );
};
