import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
function NavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand style={{ fontSize: '1.5rem'}}>Ahmad Numan</Navbar.Brand>
          <div className="d-flex justify-content-end w-10">
          <Nav className="me-auto" style={{ gap: '1rem', fontSize: '1.2rem'  }}>
            <Nav.Link href="#home" onClick={()=>document.getElementById('home').scrollIntoView({behavior:"smooth"})}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={()=>document.getElementById('about').scrollIntoView({behavior:"smooth"})}>About Me</Nav.Link>
            <Nav.Link href="#contact" onClick={()=>document.getElementById('contact').scrollIntoView({behavior:"smooth"})}>Contact Me</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
  );
}

export default NavigationBar;