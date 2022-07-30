import "./Movie.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import FilmsSlider from "./FilmsSpinner/FilmsSlider";
import { filmSLiderProperties } from "../../utils/filmsSliderProperties";

function Movie() {
  const movies250 = useSelector((state) => {
    return state.movie.movies250.movieList;
  });
  const movies100 = useSelector((state) => {
    return state.movie.movies100.movieList;
  });
  const moviesAwait = useSelector((state) => {
    return state.movie.moviesAwait.movieList;
  });

  const variants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 1 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      variants={variants}
      className="movie"
    >
      <FilmsSlider
        movies={movies250}
        filmSLiderProperties={{ ...filmSLiderProperties.top250 }}
      />
      <FilmsSlider
        movies={movies100}
        filmSLiderProperties={{ ...filmSLiderProperties.top100 }}
      />
      <FilmsSlider
        movies={moviesAwait}
        filmSLiderProperties={{ ...filmSLiderProperties.topAwait }}
      />
    </motion.div>
  );
}

export default Movie;
