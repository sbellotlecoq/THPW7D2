import React from "react";
import { useState, useEffect } from "react";
import {  useAtomValue } from 'jotai';
import { currentUserAtom  } from '../../Atoms/currentuser';
import { loggedInAtom  } from '../../Atoms/loggedin';

export default function MyProfile() {
  const [monprofil, setMonprofil] = useState("");
  const user =  useAtomValue(currentUserAtom);
  const loggedIn = useAtomValue(loggedInAtom);

  useEffect(() => {
    if (loggedIn) {
      fetch("http://localhost:1337/api/users/me", {
        method: "get",
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((responseData) => {
          setMonprofil(`email : ${responseData.email}
                        id : ${responseData.id}
                        username : ${responseData.username}
                        créé le : ${responseData.createdAt} `);
        });
    } else {
      setMonprofil(`Vous n'êtes pas connecté. Vous n'avez donc pas de profil`);
    }
  }, [user, loggedIn]);

  return (
    <>
      <h1>Coucou de Mon profil !</h1>
      <p>{monprofil}</p>
    </>
  );
}
