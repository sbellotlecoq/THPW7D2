import React from "react";
import { useEffect } from "react";

export default function Post(data) {
  const post = data.data.attributes;
  useEffect(() => {
  }, []);
  return (
    <>
      <hr />
      <p>{post.text}</p>
      <p>nb likes: {post.like}</p>
    </>
  );
};
