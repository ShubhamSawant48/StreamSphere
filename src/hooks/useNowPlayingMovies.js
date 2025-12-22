import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";

const API_BASE_URL = "https://your-backend.onrender.com";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/now-playing`);
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
