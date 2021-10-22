import { Navbar, Container } from 'react-bootstrap';
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="header-bg" variant="light">
            <Container>
                <Navbar.Brand className="mx-auto py-3">
                    <h3>Shipping Label Marker</h3>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;