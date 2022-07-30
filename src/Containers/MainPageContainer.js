import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTop100, getTop250, getTopAwait } from "../redux/actions/actions";
import MainPage from "../Components/MainPage/MainPage";

function MainPageContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTop250(1));
    dispatch(getTop100(1));
    dispatch(getTopAwait(1));
  }, []);

  return <MainPage />;
}

export default MainPageContainer;
