import React from "react";
import { directors } from "../data";

const Directors = () => {
  const directorNames = directors.map((director) => (
    <div key={director.name}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Directors</h1>
      {directorNames}
    </div>
  );
};

export default Directors;
