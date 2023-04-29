import React from "react";
import { actors } from "../data";

const Actors = () => {
  const actorNames = actors.map((actor) => (
    <div key={actor.name}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Actors</h1>
      {actorNames}
    </div>
  );
};

export default Actors;
