import { Nav, Card } from 'react-bootstrap';
import '../styles/NavBar.css'

function NavBar() {
  return (
    <Card style={{border: 'solid'}}>
      <Nav defaultActiveKey="/home" className="flexcolumn">
        <Nav.Link href="/glagoli">Glagoli</Nav.Link>
        <Nav.Link href="/imenice">Imenice</Nav.Link>
        <Nav.Link href="/zamenice">Zamenice</Nav.Link>
      </Nav>
    </Card>
  );
}

export default NavBar;
