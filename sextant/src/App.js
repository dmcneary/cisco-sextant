import "./App.css";

import { Container, Row, Col } from "reactstrap";
import Banner from "./components/Banner/Banner";
import Exhibit from "./components/Exhibit/Exhibit";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Banner />
          <Exhibit></Exhibit>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
