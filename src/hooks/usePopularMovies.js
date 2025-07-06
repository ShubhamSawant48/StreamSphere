const { useDispatch } = require("react-redux");
const { TMDB_KEY } = require("../utils/constants");
const { useEffect } = require("react");

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popMov = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_KEY
    );
    const json = await data.json();

    dispatch(addPopularMovies(json));
  };

  useEffect(() => {
    !popMov && getPopularMovies();
  }, []);
};

export default usePopularMovies;
