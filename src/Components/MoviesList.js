import MovieCard from "./MovieCard";

const MoviesList = ({ title, data }) => {
  if (!data) return;
  return (
    <div className="px-6">
      <h1 className="font-bold text-3xl p-3">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex gap-8 p-6">
          {data.map((movie) => (
            <MovieCard data={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
