import { Card } from "react-bootstrap";

export const CardBlogs = ({ title, description, image }) => {
  return (
    <Card
      style={{
        width: "18rem",
        border: "none",
        backgroundColor: "transparent",
      }}
      className="blog-card mb-5"
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
