import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export const JoinUs = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${email}, thanks for joining us! We'll be in touch soon.`);
  };

  return (
    <Container fluid className="px-5 py-3 my-lg-5" id="form">
      <div className="text-center">
        <h3 className="fw-bold fs-1 py-5">Join J-Shop’s Family</h3>
      </div>
      <Form className="py-0 d-flex justify-content-center flex-lg-row flex-column" onSubmit={handleSubmit}>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          className="me-2 form-email py-3 mb-3 mb-lg-0"
          onChange={handleChange}
          value={email}
        />
        <Button variant="dark" className="text-uppercase px-lg-3" onCLick={handleSubmit}>
          join family
        </Button>
      </Form>
    </Container>
  );
};
