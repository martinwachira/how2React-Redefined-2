import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getMoviesHandler() {
    setLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
    setLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={getMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* {loading ? "Loading..." : <MoviesList movies={movies} />} */}
        {!loading && <MoviesList movies={movies} />}
        {loading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
