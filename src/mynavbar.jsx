import { Nav, Navbar, Container, Button } from "react-bootstrap";
import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useSetAtom,  useAtomValue } from 'jotai';
import { currentUserAtom  } from './Atoms/currentuser';
import { loggedInAtom  } from './Atoms/loggedin';

export default function MyNavbar() {
  const loggedIn = useAtomValue(loggedInAtom);
  const  setUser = useSetAtom(currentUserAtom);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>NetworkApp</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {loggedIn ? (
              <>
                <LinkContainer to="/myprofile">
                  <Nav.Link>Mon Profil</Nav.Link>
                </LinkContainer>
                <Button variant="danger" onClick={handleLogout}>
                  Se déconnecter
                </Button>
              </>
            ) : (
              <>
                <LinkContainer to="/register">
                  <Nav.Link>S'inscrire</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link>Se connecter</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
