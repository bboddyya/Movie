import React from "react";
import Movie from "../Movie/Movie";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { Routes, Route, Switch } from "react-router-dom";
import SingleMovie from "../Single Movie/SingleMovie";

function MainPage() {
  const films250Ready = useSelector((state) => state.movie.movies250.isLoading);
  const films100Ready = useSelector((state) => state.movie.movies100.isLoading);
  const filmsAwaitReady = useSelector(
    (state) => state.movie.moviesAwait.isLoading
  );

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            films250Ready && films100Ready && filmsAwaitReady ? (
              <ClipLoader
                color="red"
                loading
                size={100}
                speedMultiplier={0.8}
                className="movie__spinner"
              />
            ) : (
              <Movie />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default MainPage;
