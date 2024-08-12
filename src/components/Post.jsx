import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Title One",
    body: "Body One",
  },
  {
    id: 2,
    title: "Title Two",
    body: "Body Two",
  },
  {
    id: 3,
    title: "Title Three",
    body: "Body Three",
  },
];

function Post() {
  const { id } = useParams();
  // id => fetch on backend => find data based on id
  const post = posts.find((p) => p.id === parseInt(id));
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort"));
  return (
    <div>
      <h1>singel post</h1>
      <div>post id : {id}</div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <Link to="/app/posts">GO to posts section</Link>
      <button onClick={() => setSearchParams({ type: "popular" })}>
        update query string
      </button>
    </div>
  );
}

export default Post;
