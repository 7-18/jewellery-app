import { CardGroup, Container } from "react-bootstrap";
import ourblogs1 from "../../assets/images/Rectangle 347.png";
import ourblogs2 from "../../assets/images/Rectangle 348.png";
import ourblogs3 from "../../assets/images/Rectangle 349.png";
import { CardBlogs } from "./CardBlogs";

const blogsInfo = [
  {
    title: "For Beauty",
    description:
      "Offending belonging promotion provision an be oh consulted ourselves it.",
    image: ourblogs1,
  },
  {
    title: "Product Quality",
    description:
      "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day necessary.",
    image: ourblogs2,
  },
  {
    title: "For Comfort",
    description:
      "Warmly little before cousin sussex entire men set. Blessing it ladyship on sensible judgment.",
    image: ourblogs3,
  },
];

export const OurBlogs = () => {
  return (
    <Container fluid className="px-5 py-3">
      <div className="text-center">
        <h2 className="fs-1 fw-bold m-5 mt-0">Our Blogs</h2>
      </div>
      <div className="d-flex justify-content-center mb-lg-5 pb-lg-5 mb-0 pb-0">
        <CardGroup className="gap-5">
          {blogsInfo.map((data) => (
            <CardBlogs
              key={data.title}
              title={data.title}
              description={data.description}
              image={data.image}
            />
          ))}
        </CardGroup>
      </div>
    </Container>
  );
};
