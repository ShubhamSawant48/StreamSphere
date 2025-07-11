import Header from "./Header";
import LiveBg from "./LiveBg";
import MoviesList from "./MoviesList";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import LiveBgInfo from "./LiveBgInfo";
import { useSelector } from "react-redux";

const Main = () => {
  // useNowPlayingMovies();
  // usePopularMovies();
  // useTrendingMovies();
  // useUpcomingMovies();

  const storeMovies = useSelector((store) => store.movies);
  return (
    <div>
      <div>
        <LiveBgInfo />
        <LiveBg />
        <Header />
      </div>
      <div className="bg-black text-white">
        <div className="-mt-96 relative z-30">
          <MoviesList
            title="Now Playing Movies"
            data={storeMovies.nowPlayingMovies?.results}
          />
          <MoviesList
            title="Popular Movies"
            data={storeMovies.popularMovies?.results}
          />
          <MoviesList
            title="Trending Movies"
            data={storeMovies.trendingMovies?.results}
          />
          <MoviesList
            title="Upcoming Movies"
            data={storeMovies.upcomingMovies?.results}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
