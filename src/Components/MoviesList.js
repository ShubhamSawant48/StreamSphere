import MovieCard from "./MovieCard";

const MoviesList = ({ title, data }) => {
  if (!data) return null;

  return (
    <div className="pb-5">
      <h1 className="font-bold text-3xl px-3 py-3">{title}</h1>

      <div className="overflow-x-scroll custom-scroll scroll-smooth">
        <div className="flex gap-8 p-3">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
