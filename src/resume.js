import {Row, Col, Card } from "react-bootstrap";

function Resume() {
  return (
    
    <Card className="text-center mx-4">
      <Card.Body>
      <Card.Title>
        <h2>
           My Resume
        </h2>
      </Card.Title>
      <br />
      <Row className="text-start">
        <Col>
          <Row>
            <Col>
              <h3>Summary</h3>
              <ul>
                <li>Detail-oriented web developer</li>
                <li>Proficient in React, JavaScript, and CSS</li>
                <li>Strong problem-solving skills</li>
              </ul>
            </Col>
            <br />
            <Col>
              <h3>Experience</h3>
              <ul>
                <li>Web Developer at XYZ Company (2020 - Present)</li>
                <li>Frontend Developer at ABC Inc. (2018 - 2020)</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row >
        <Col md={8} className="text-start">
          <h3>Education</h3>
          <ul>
            <li>Bachelor's Degree in Computer Science</li>
            <li>Master's Degree in Web Development</li>
            <li>Mutah University 2019 - 2023</li>
          </ul>
        </Col>
      </Row>
      </Card.Body>
    </Card>
    
  );
}

export default Resume;
