import  {currentUserAtom } from './currentuser';
import { atom } from 'jotai';

export const loggedInAtom = atom((get) => {
    const currentuser = get(currentUserAtom);
    if (currentuser == null) {
      console.log("Atom said current user is not logged in");
    return false;
    }
    else {
      console.log("Atom said current user is logged in :)");
      return true;
    }
});

