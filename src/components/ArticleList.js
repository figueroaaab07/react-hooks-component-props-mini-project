import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
  console.log(posts);
  const postElements = posts.map((post) => {
    return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
  });
  console.log(postElements);
  return (
    <main>
      {postElements}
    </main>
  );
}

export default ArticleList;