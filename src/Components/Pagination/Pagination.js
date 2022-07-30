import "../Pagination/Pagination.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { configuration } from "../../api/configurationForApi";
import { getRatingColor } from "../../utils/getColor";
import { Link, useParams } from "react-router-dom";

function Pagination() {
  const [page, setPage] = useState(2);
  const [filmsList, setFilmsList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [debug, setDebug] = useState(false);
  const { type } = useParams();

  async function fetchFilms(t, p) {
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=${t}&page=${p}`,
      configuration
    );
    const data = await response.json();
    const { films } = await data;
    setFilmsList([...filmsList, ...films]);
  }

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        500 &&
      debug
    ) {
      setIsloading(true);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchFilms(type, 1);
      setDebug(true);
    })();
  }, []);

  useEffect(() => {
    if (isLoading) {
      (async () => {
        await fetchFilms(type, page);
        setPage((current) => current + 1);
        setIsloading(false);
      })();
    }
  }, [isLoading]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <div className="pagination">
      {filmsList.map((el) => {
        return (
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={el.filmId}
            className="pagination__film"
          >
            <Link to={`/film/${el.filmId}`}>
              <div className="poster">
                <img src={el.posterUrlPreview} />
                <div
                  className="movie__rating"
                  style={{ backgroundColor: `${getRatingColor(el.rating)}` }}
                >
                  {el.rating}
                </div>
              </div>
            </Link>

            <div className="title">{el.nameRu}</div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Pagination;
