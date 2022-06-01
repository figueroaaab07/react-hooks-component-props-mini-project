import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
  const coffeeCup = "☕️";
  const bentoBox = "🍱";

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {(minutes < 30) ? <small> . {coffeeCup.repeat(Math.ceil(minutes/5))} {minutes} minutes read</small> : <small> . {bentoBox.repeat(Math.ceil(minutes/10))} {minutes} minutes read</small>}
      <p>{preview}</p>
    </article>
  );
}

export default Article;