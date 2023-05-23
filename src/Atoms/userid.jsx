import { currentUserAtom } from "./currentuser";
import { loggedInAtom } from "./loggedin";
import { atom } from "jotai";

export const userIdAtom = atom(async (get) => {
  const loggedIn = get(loggedInAtom);
  let id = 0;
  
  if (loggedIn) {
    const user = get(currentUserAtom);

    try {
      const response = await fetch("http://localhost:1337/api/users/me", {
        method: "get",
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
        },
      });

      const responseData = await response.json();
      id = responseData.id;
      console.log(responseData.id + " dans le fetch");
    } catch (error) {
      console.log("Error occurred during fetch:", error);
    }
  } else {
    console.log("Atom said: tried to get userID with no user");
  }

  console.log(id + " avant le return de id atom");
  return id;
});