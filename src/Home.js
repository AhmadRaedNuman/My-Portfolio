import Container from 'react-bootstrap/Container';
import bgImage from './assets/bg.jpg';
import AboutMe from './about-me';
import NavigationBar from './Navbar';
import Resume from './resume';
import MyInfo from './my-info';
import Skills from './skills';
import ContactMe from './contact-me';
import { Card, Col, Row } from 'react-bootstrap';
function Home() {
  return (
    <>
      <NavigationBar/>
      <section id="home">
      <div className="Home">
        <Container className="text-center mt-4">
          <img src={bgImage} alt="Background" style={{ width: '100%', height: 'auto' }} />
        </Container>
      </div>
      </section>
      <br />
      <section id="about">
      <Card className="text-start mx-5">
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
      </section>
    <br/>
    <br/>
    <section id="skills">
    <div className="mx-4 mt-4">
      <Skills />
    </div>
    </section>
    <br/>
    <br/>

    <section id="resume">
    <div className="mx-4 mt-4">
      <Resume />
    </div>
    </section>
    <br />
    <section id="contact">
    <ContactMe />
    </section>
    <footer className="text-center mt-4 mb-4  color-white p-2 c">
      &copy; {new Date().getFullYear()} Ahmad Numan. All rights reserved.
      </footer>
    </>
  );
}

export default Home;