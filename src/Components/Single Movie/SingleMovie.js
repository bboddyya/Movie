import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getById,
  getStaff,
  getBoxOffice,
  getSimilars,
} from "../../redux/actions/actions";
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";
import { getTime } from "../../utils/getTime";
import "./SingleMovie.scss";
import RatingSelection from "./RatingSelection.js/RatingSelection";
import { filmSLiderProperties } from "../../utils/filmsSliderProperties";
import FilmsSlider from "../Movie/FilmsSpinner/FilmsSlider";
import { Link, Element } from "react-scroll";
import Reviews from "./Reviews/Reviews";

function SingleMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
    dispatch(getStaff(id));
    dispatch(getBoxOffice(id));
    dispatch(getSimilars(id));
  }, [id]);

  const movie = useSelector((state) => state.movie.movieById.movie);
  const similarMovie = useSelector(
    (state) => state.movie.moviesSimilar.movieList
  );
  const director = useSelector((state) => state.movie.staffData.director);

  const boxOffice = useSelector((state) => state.movie.boxOfficeData.boxOffice);
  const ratingValue = useSelector((state) => state.ratingSelection.film.rating);

  return (
    <div className=".single-movie__wrapper ">
      <div className="single-movie">
        <div className="single-movie__logo">
          <img src={movie.logoUrl} />{" "}
        </div>
        <div className="single-movie__header">
          <div className="single-movie__poster">
            <img src={movie.posterUrl} />
          </div>
          <div className="single-movie__header-info">
            <div className="single-movie__title-rating">
              <div className="single-movie__title">
                <div className="single-movie__title-ru">{`${movie.nameRu} (${movie.year})`}</div>
                <div className="single-movie__title-en">
                  {movie.nameOriginal}
                </div>
                <div className="single-movie__favorites-buttons">
                  <MdOutlineBookmarkBorder className="single-movie__delete icon" />
                  <MdOutlineBookmark className="single-movie__favorites icon" />
                </div>
              </div>
              <div className="single-movie__rating">
                <div className="single-movie__rating-default">
                  {movie.ratingKinopoisk}
                </div>
                <Link
                  className="single-movie__rating-user"
                  to="test1"
                  smooth={true}
                  offset={-100}
                  duration={300}
                >
                  {!ratingValue ? "Оцените фильм" : ratingValue}
                </Link>
              </div>
            </div>
            <div className="single-movie__short-discription">
              {movie.description ?? movie.shortDescription}
            </div>
          </div>
        </div>
        <div className="single-movie__about">
          <h1 className="single-movie__about-title">О фильме</h1>
          <div className="about__block">
            <div className="about__title">Режиссер:</div>
            <div className="about__link">
              {director?.map((el, index, arr) => {
                if (index !== arr.length - 1) {
                  return <span key={el.staffId}>{`${el.nameRu}, `}</span>;
                }
                return <span>{el.nameRu}</span>;
              })}
            </div>
          </div>
          <div className="about__block">
            <div className="about__title">Год:</div>
            <div className="about__link">{movie.year}</div>
          </div>
          <div className="about__block">
            <div className="about__title">Страна:</div>
            <div className="about__link">
              {movie.countries?.map((el, index, arr) => {
                if (index !== arr.length - 1) {
                  return <span>{`${el.country}, `}</span>;
                }
                return <span>{el.country}</span>;
              })}
            </div>
          </div>
          <div className="about__block">
            <div className="about__title">Жанр:</div>
            <div className="about__link">
              {movie.genres?.map((el, index, arr) => {
                if (index !== arr.length - 1) {
                  return <span>{`${el.genre}, `}</span>;
                }
                return <span>{el.genre}</span>;
              })}
            </div>
          </div>
          <div className="about__block">
            <div className="about__title">Бюджет:</div>
            {boxOffice.map((el) => {
              return (
                <div className="about__link" key={Date.now()}>{`${
                  el.symbol
                }${el.amount.toLocaleString()} `}</div>
              );
            })}
          </div>
          {movie.filmLength && (
            <div className="about__block">
              <div className="about__title">Время: </div>
              <div className="about__link">{getTime(movie?.filmLength)}</div>
            </div>
          )}
        </div>
        <Element name="test1" className="element">
          <div className="single-movie__rating-selection">
            <h2>Оцените фильм</h2>
            <RatingSelection />
          </div>
        </Element>
      </div>
      <div className="single-movie__same-films">
        <FilmsSlider
          movies={similarMovie}
          filmSLiderProperties={{ ...filmSLiderProperties.moviesSimilar }}
        />
      </div>
      <div className="single-movie__reviews">
        <Reviews />
      </div>
    </div>
  );
}

export default SingleMovie;
