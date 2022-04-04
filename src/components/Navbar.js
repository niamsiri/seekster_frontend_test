import {
    Navbar,
    Nav,
  } from "react-bootstrap";

export default function NavbarCustomer() {

    const menuLink = {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#17204d",
        margin: "0 16px",
    }

    return (
        <Navbar variant="light">
            <Nav className="ms-auto">
                <Nav.Link style={menuLink} href="/">บริการ</Nav.Link>
                <Nav.Link style={menuLink} href="/request">รายการ</Nav.Link>
            </Nav>
        </Navbar>
    )
}
