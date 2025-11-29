import {Row,Col,Card} from 'react-bootstrap';
function Skills() {
  return (
    <Card className="text-center mx-4">
      <Card.Title>
        <h3>My Skills</h3>
      </Card.Title>
      <Row className="text-start" style={{ marginLeft: '5px' }}>
        <Col>
          <h3>Frontend Development</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React, Bootstrap</li>
          </ul>
        </Col>
        <Col>
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js, Express</li>
            <li>MongoDB, SQL</li>
          </ul>
        </Col>
      </Row>
      <Row className="text-start" style={{ marginLeft: '5px' }}>
        <Col className="text-start">
          <h3>Other Skills</h3>
          <ul>
            <li>Version Control (Git)</li>
            <li>Problem Solving</li>
          </ul>
        </Col>
      </Row>
    </Card>
  );
}

export default Skills;
