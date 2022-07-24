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
import { configuration } from "../../api/configurationForApi";

export function getTop250(page) {
  return async (dispatch) => {
    dispatch({
      type: GET_250_ISLOADING,
    });
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`,
      configuration
    );
    const { films } = await response.json();
    dispatch({
      type: GET_250_MOVIES,
      data250: films,
    });
  };
}

export function getTop100(page) {
  return async (dispatch) => {
    dispatch({
      type: GET_100_ISLOADING,
    });
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`,
      configuration
    );
    const { films } = await response.json();

    dispatch({
      type: GET_100_MOVIES,
      data100: films,
    });
  };
}

export function getTopAwait(page) {
  return async (dispatch) => {
    dispatch({
      type: GET_AWAIT_ISLOADING,
    });
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=${page}`,
      configuration
    );
    const { films } = await response.json();

    dispatch({
      type: GET_AWAIT_MOVIES,
      dataAwait: films,
    });
  };
}

export function getById(id) {
  return async (dispatch) => {
    dispatch({
      type: GET_MOVIE_BY_ID_ISLOADING,
    });

    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id} `,
      configuration
    );
    const film = await response.json();

    dispatch({
      type: GET_MOVIE_BY_ID,
      dataById: film,
    });
  };
}

export function getBoxOffice(id) {
  return async (dispatch) => {
    dispatch({
      type: GET_BOX_OFFICE_ISLOADING,
    });
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/box_office`,
      configuration
    );
    const { items } = await response.json();
    dispatch({
      type: GET_BOX_OFFICE,
      dataBoxOffice: items,
    });
  };
}

export function getStaff(id) {
  return async (dispatch) => {
    dispatch({
      type: GET_STAFF_ISLOADING,
    });
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}`,
      configuration
    );
    const data = await response.json();
    dispatch({
      type: GET_STAFF,
      staffList: data,
    });
  };
}
