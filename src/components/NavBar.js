import { Nav, Card } from 'react-bootstrap';
import '../styles/NavBar.css'

function NavBar() {
  return (
    <Card style={{border: 'solid'}}>
      <Nav defaultActiveKey="/home" className="flexcolumn">
        <Nav.Link href="/lekcija">Glagoli</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
      </Nav>
    </Card>
  );
}

export default NavBar;
