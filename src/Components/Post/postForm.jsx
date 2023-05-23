import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAtomValue } from "jotai";
import { currentUserAtom } from "../../Atoms/currentuser";
import { userIdAtom } from "../../Atoms/userid";
import { loggedInAtom } from "../../Atoms/loggedin";

export default function PostForm() {
  const loggedIn = useAtomValue(loggedInAtom);
  const user = useAtomValue(currentUserAtom);
  const userid = useAtomValue(userIdAtom);
  console.log(user);
  const handlePostSubmit = (event) => {
    event.preventDefault();
    const formText = event.target.elements.textArea.value;
    
    const data = {
      data: {
        text: formText,
        user: userid
      }       
    };
    fetch("http://localhost:1337/api/posts", {
      method: "post",
      headers: {
        Authorization: `Bearer ${user}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      });
    
  };
  return (
    <>
      <h2>Créer un nouveau post :</h2>
      {loggedIn ? (
        <>
          <Container>
            <Form onSubmit={handlePostSubmit}>
              <Form.Group>
                <Form.Label>Votre post :</Form.Label>
                <Form.Control
                  type="text"
                  rows={4}
                  name="textArea"
                  placeholder="Enter your message here :"
                />
              </Form.Group>
              <Button type="submit">Publier</Button>
            </Form>
          </Container>
        </>
      ) : (
        <>
          <p>Vous devez être connecté pour faire un nouveau post !</p>
        </>
      )}
    </>
  );
}
