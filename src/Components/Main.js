import Header from "./Header";
import LiveBg from "./LiveBg";
import MoviesList from "./MoviesList";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import LiveBgInfo from "./LiveBgInfo";
import { useSelector } from "react-redux";

const Main = () => {
  // useMostPopularMovies();
  // useTopBoxOffice();
  // useTopRatedMovies();
  useNowPlayingMovies();

  const storeMovies = useSelector((store) => store.movies);
  return (
    <div>
      <div>
        <LiveBgInfo />
        <LiveBg />
        <Header />
      </div>
      <div className="bg-black h-auto text-white">
        <MoviesList
          title="Popular Movies"
          data={storeMovies.mostPopularMovies}
        />
        <MoviesList
          title="Top Box Office"
          data={storeMovies.topBoxOfficeMovies}
        />
        <MoviesList
          title="Top Rated Movies"
          data={storeMovies.topRatedMovies}
        />
      </div>
    </div>
  );
};

export default Main;
