import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navbar from "Common/Navbar";

const Landing: React.FC<object> = () => {
  return (
    <Container fluid className="p-0">
      <Row noGutters>
        <Col>
          <Navbar />
        </Col>
      </Row>

      <Row noGutters className="mt-4">
        <Col className="text-center font-weight-bold">
          <h1>Boilerplate Project</h1>
        </Col>
      </Row>

    </Container>
  );
}

export default Landing;