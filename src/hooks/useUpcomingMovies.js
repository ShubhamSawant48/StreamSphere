import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/moviesSlice";

const API_BASE_URL = "https://your-backend.onrender.com";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/upcoming`);
        const data = await res.json();
        dispatch(addUpcomingMovies(data.results));
      } catch (error) {
        console.error("Upcoming movies error:", error);
      }
    };

    fetchUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
