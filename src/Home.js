import Container from 'react-bootstrap/Container';

import bgImage from './assets/bg.jpg';
import AboutMe from './about-me';
import NavigationBar from './Navbar';
import MyInfo from './my-info';
import { Card, Col, Row } from 'react-bootstrap';
function Home() {
  return (
    <>
      <NavigationBar />
      <div className="Home">
        <Container className="text-center mt-4">
          <img src={bgImage} alt="Background" style={{ width: '100%', height: 'auto' }} />
        </Container>
      </div>
      <br />
      <Card className="text-start mx-4">
      <Card.Body>
        <Row>
          <Col>
            <MyInfo />
          </Col>
          <Col>
            <AboutMe />
          </Col>
        </Row>
      </Card.Body>
    </Card>

    <footer className="text-center mt-4 mb-4  color-white p-2">
      &copy; {new Date().getFullYear()} Ahmad Numan. All rights reserved.
      </footer>
    </>
  );
}

export default Home;