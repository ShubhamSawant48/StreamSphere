import { useDispatch } from "react-redux";
import { TMDB_KEY } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const NowPlyMov = useSelector((store) => store.movies.nowPlayingMovies);

  const getNPMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_KEY
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json));
  };

  useEffect(() => {
    !NowPlyMov && getNPMovies();
  });
};

export default useNowPlayingMovies;
