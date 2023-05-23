import React from "react";
import PostForm from '../Post/postForm';
import PostList from '../Post/postList';
export default function Home() {
  
  return (
    <>
      <h1>Coucou de La page d'accueil !</h1>
      <PostForm />
      <br></br>
      <PostList />
    </>
  );
}