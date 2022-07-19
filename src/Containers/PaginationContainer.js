import Pagination250 from "../Components/Pagination/Pagination250";
import { getFull250 } from "../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function PaginationContainer() {
  const dispatch = useDispatch();
  const page = useSelector((state) => {
    return state.movie.pageForPagination;
  });

  useEffect(() => {
    dispatch(getFull250(1));
    dispatch(getFull250(2));
    dispatch(getFull250(3));
  }, []);

  useEffect(() => {
    dispatch(getFull250(page));
  }, [page]);

  return <Pagination250 />;
}

export default PaginationContainer;