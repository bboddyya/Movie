import {
  GET_250_MOVIES,
  GET_100_MOVIES,
  GET_AWAIT_MOVIES,
  GET_250_ISLOADING,
  GET_100_ISLOADING,
  GET_AWAIT_ISLOADING,
  GET_MOVIE_BY_ID,
  GET_MOVIE_BY_ID_ISLOADING,
  GET_BOX_OFFICE,
  GET_STAFF,
  GET_STAFF_ISLOADING,
  GET_BOX_OFFICE_ISLOADING,
} from "../types/types";

const initialState = {
  movies250: { movieList: [], isLoading: false },
  movies100: { movieList: [], isLoading: false },
  moviesAwait: { movieList: [], isLoading: false },
  movieById: { movie: [], isLoading: false },
  staffData: { persons: [], isLoading: false },
  boxOfficeData: { boxOffice: [], isLoading: false },
};

export const movieReducer = (state = initialState, action) => {
  const { movies250 } = state;
  const { movies100 } = state;
  const { moviesAwait } = state;
  const { movieById } = state;
  const { boxOfficeData } = state;
  const { staffData } = state;

  switch (action.type) {
    case GET_250_MOVIES:
      return {
        ...state,
        movies250: {
          movieList: [...action.data250],
          isLoading: false,
        },
      };
    case GET_250_ISLOADING:
      return {
        ...state,

        movies250: { ...movies250, isLoading: true },
      };

    case GET_100_MOVIES:
      return {
        ...state,
        movies100: {
          ...movies100,
          movieList: [...action.data100],
          isLoading: false,
        },
      };

    case GET_100_ISLOADING:
      return {
        ...state,

        movies100: { ...movies100, isLoading: true },
      };

    case GET_AWAIT_MOVIES:
      return {
        ...state,
        moviesAwait: {
          ...moviesAwait,
          movieList: [...action.dataAwait],
          isLoading: false,
        },
      };

    case GET_AWAIT_ISLOADING:
      return {
        ...state,

        moviesAwait: { ...moviesAwait, isLoading: true },
      };

    case GET_MOVIE_BY_ID:
      return {
        ...state,
        movieById: { movie: action.dataById, isLoading: false },
      };

    case GET_MOVIE_BY_ID_ISLOADING:
      return {
        ...state,
        movieById: { ...movieById, isLoading: true },
      };

    case GET_BOX_OFFICE:
      return {
        ...state,
        boxOfficeData: {
          ...boxOfficeData,
          boxOffice: action.dataBoxOffice,
          isLoading: false,
        },
      };

    case GET_BOX_OFFICE_ISLOADING:
      return {
        ...state,
        boxOfficeData: { ...boxOfficeData, isLoading: true },
      };

    case GET_STAFF:
      return {
        ...state,

        directorData: {
          ...staffData,
          persons: action.staffList,
          isLoading: false,
        },
      };

    case GET_STAFF_ISLOADING:
      return {
        ...state,
        staffData: { ...staffData, isLoading: true },
      };

    default:
      return state;
  }
};
