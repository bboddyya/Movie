import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getById, getStaff, getBoxOffice } from "../../redux/actions/actions";
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/md";
import "./SingleMovie.scss";

function SingleMovie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id));
    dispatch(getStaff(id));
    dispatch(getBoxOffice(id));
  }, []);

  const movie = useSelector((state) => state.movie.movieById.movie);
  const director = useSelector((state) => state.movie.staffData.director);
  const actors = useSelector((state) => state.movie.staffData.actors);
  const operator = useSelector((state) => state.movie.staffData.operator);
  const boxOffice = useSelector((state) => state.movie.boxOfficeData.boxOffice);

  console.log("boxOffice", boxOffice);

  return (
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
              <div className="single-movie__title-en">{movie.nameOriginal}</div>
              <div className="single-movie__favorites-buttons">
                <MdOutlineBookmarkBorder className="single-movie__delete icon" />
                <MdOutlineBookmark className="single-movie__favorites icon" />
              </div>
            </div>
            <div className="single-movie__rating">
              <div className="single-movie__rating-default">
                {movie.ratingKinopoisk}
              </div>
              <div className="single-movie__rating-user">7.3</div>
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
          {director.map((el) => {
            return (
              <div className="about__link" key={el.staffId}>
                {el.nameRu}
              </div>
            );
          })}
        </div>
        <div className="about__block">
          <div className="about__title">Год:</div>
          <div className="about__link">{movie.year}</div>
        </div>
        <div className="about__block">
          <div className="about__title">Страна:</div>
          {movie.countries.map((el) => {
            return <div className="about__link">{el.country}</div>;
          })}
        </div>
        <div className="about__block">
          <div className="about__title">Жанр:</div>
          {movie.genres.map((el) => {
            return <div className="about__link">{el.genre}</div>;
          })}
        </div>
        <div className="about__block">
          <div className="about__title">Бюджет:</div>
          {boxOffice.map((el) => {
            return (
              <div className="about__link">{`${
                el.symbol
              }${el.amount.toLocaleString()} `}</div>
            );
          })}
        </div>
        <div className="about__block">
          <div className="about__title">Время:</div>
          <div className="about__link"></div>
        </div>
        <div className="single-movie__discription"></div>
        <div className="single-movie__rating-selection"></div>
        <div className="single-movie__same-films"></div>
      </div>
    </div>
  );
}

export default SingleMovie;

//todo: переделать map с запятыми и span
