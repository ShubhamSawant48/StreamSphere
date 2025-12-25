import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/now-playing`);
        const data = await res.json();
        dispatch(addNowPlayingMovies(data.results));
      } catch (error) {
        console.error("Now playing movies error:", error);
      }
    };

    fetchNowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
