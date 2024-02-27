import { AsyncImage } from "loadable-image";
import { Genres, MovieAndTVshow } from "../hooks/types";

const Card = ({
  items,
  itemsGenres,
  className,
}: {
  items?: MovieAndTVshow[];
  itemsGenres?: Genres[];
  className?: string;
}) => {
  return items?.map((movie) => (
    <div
      className={` relative text-white  rounded-3xl overflow-hidden text-lg ${className}`}
    >
      <AsyncImage
        src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
        loader={<div className="skeleton " />}
        className="w-full h-full"
        style={{ objectFit: "fill" }}
      />
      <span className="bg-black opacity-25 w-full h-full absolute top-0" />
      <h1 className="absolute top-3 left-2 font-extrabold text-lg sm:text-xl lg:text-1xl xl:text-2xl">
        {movie.title || movie.name}
      </h1>

      <span className="badge badge-lg glass absolute bottom-2 left-2 font-semibold">
        {itemsGenres?.find((gen) => movie.genre_ids.includes(gen.id))?.name}
      </span>
      <span className="badge badge-lg glass absolute bottom-9 left-2 font-semibold">
        {Number(movie.vote_average).toFixed(1)}
      </span>
      <button className="btn glass absolute bottom-2.5 right-2">
        Show Details
      </button>
    </div>
  ));
};

export default Card;
