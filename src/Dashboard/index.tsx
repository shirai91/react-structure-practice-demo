// Libraries come first
import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
// Project's components
import Navbar from "Common/Navbar";
import useCounter from "Hooks/useCounter";

const Dashboard: React.FC<object> = () => {
  const [counter, increase] = useCounter();

  const handleClick = () => {
    increase();
  }

  return (
    <Container fluid className="p-0">
      <Row noGutters>
        <Col>
          <Navbar authenticated />
        </Col>
      </Row>

      <Row noGutters className="mt-4">
        <Col className="text-center font-weight-bold">
          <h1>Dashboard Page</h1>
        </Col>
      </Row>

      <Row noGutters className="mt-4 d-flex justify-content-center">
        <Col>
          <h2 className="text-center font-weight-bold">{counter}</h2>
        </Col>

      </Row>
      <Row noGutters>
        <Col className="mt-4 d-flex justify-content-center">
          <Button color="primary" onClick={handleClick} >Click here to increase counter</Button>
        </Col>
      </Row>

    </Container>
  );
}

export default Dashboard;