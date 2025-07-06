import { useDispatch, useSelector } from "react-redux";
import { TBO_URL, API_KEY } from "../utils/constants";
import { addTopBoxOfficeMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopBoxOffice = () => {
  const dispatch = useDispatch();
  const topBoxOfficeMovies = useSelector(
    (store) => store.movies.topBoxOfficeMovies
  );

  const getMovies = async () => {
    const data = await fetch(TBO_URL, API_KEY);
    const json = await data.json();

    dispatch(addTopBoxOfficeMovies(json));
  };

  useEffect(() => {
    !topBoxOfficeMovies && getMovies();
  }, []);
};

export default useTopBoxOffice;
