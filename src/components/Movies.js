import React from "react";
import { movies } from "../data";

function Movies() {
  const movieItems = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>time: {movie.time} min.</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies</h1>
      {movieItems}
    </div>
  );
};

export default Movies;
