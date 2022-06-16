import { Card, Carousel } from "react-bootstrap";

export const CardCarousel = () => {
  return (
    <>
      <h3 className="mb-4 ms-lg-5 fs-1 fw-bold">Testimonials</h3>
      <Carousel variant="dark">
        <Carousel.Item>
          <Card className="py-lg-4 px-lg-5 carousel-card">
            <Card.Title>Maria Sarapavoo</Card.Title>
            <Card.Subtitle className="my-2 mb-4 text-muted">
              Senior Designer
            </Card.Subtitle>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using letters Ipsum
              is that it has a more-or-less normal distribution of letter.
            </p>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="py-lg-4 px-lg-5 carousel-card">
            <Card.Title>Rose Namajunas</Card.Title>
            <Card.Subtitle className="my-2 mb-4 text-muted">
              Manager Lead
            </Card.Subtitle>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using letters Ipsum
              is that it has a more-or-less normal distribution of letter.
            </p>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="py-lg-4 px-lg-5 carousel-card">
            <Card.Title>Florence Griffith-Joyner</Card.Title>
            <Card.Subtitle className="my-2 mb-4 text-muted">CEO</Card.Subtitle>
            <p>
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using letters Ipsum
              is that it has a more-or-less normal distribution of letter.
            </p>
          </Card>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
