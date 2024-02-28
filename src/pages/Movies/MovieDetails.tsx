import { useParams } from "react-router-dom";
import useGet from "../../hooks/useGet";
import { Genres, Movie, Reviews } from "../../hooks/types";
import { AsyncImage } from "loadable-image";
import { CiCalendarDate, CiStar } from "react-icons/ci";
import { PiTranslateLight } from "react-icons/pi";
import { GrAppsRounded } from "react-icons/gr";
import { FetchResponse } from "../../services/ApiClient";

const MovieDetails = () => {
  const { id: movieID } = useParams();
  const { data: MoviesGenres } = useGet<{ genres: Genres[] }>(
    "genre/movie/list",
    ["MoviesGenres"]
  );
  const { data: movie } = useGet<Movie>(`movie/${movieID}`, [
    `movie ${movieID} Details`,
  ]);
  const { data: movieReviews } = useGet<FetchResponse<Reviews>>(
    `movie/${movieID}/reviews`,
    [`Movies ${movieID} Reviews`]
  );
  return (
    <div className="flex flex-col gap-8 ">
      <div className="relative flex flex-col items-center">
        <AsyncImage
          src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path}
          loader={<div className="skeleton " />}
          className="w-full h-96 sm:h-[35rem] rounded-2xl"
        />
        <span className="bg-gradient-to-t from-base-100 w-full h-full absolute top-0" />
        <div className="absolute bottom-3 text-center">
          <h1 className="font-extrabold text-xl sm:text-3xl lg:text-4xl xl:text-5xl">
            {movie?.title}
          </h1>
          <p>{movie?.tagline}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[2fr,1.5fr] gap-4">
        <div className="flex flex-col gap-5">
          <div className="bg-neutral rounded-2xl p-8">
            <h3 className="text-zinc-400 mb-2">Description</h3>
            <p>{movie?.overview}</p>
          </div>
          <div className="bg-neutral rounded-2xl p-8">
            <h3 className="text-zinc-400 mb-5">Companies</h3>
            <div className="flex gap-5 justify-between">
              {movie?.production_companies.slice(0, 4).map((company) => (
                <AsyncImage
                  src={
                    "https://image.tmdb.org/t/p/original" + company.logo_path
                  }
                  key={company.id}
                  loader={<div className="skeleton " />}
                  className="size-16 rounded-xl"
                />
              ))}
            </div>
          </div>
          <div className="bg-neutral rounded-2xl p-8">
            <h3 className="text-zinc-400 mb-5">Reviews</h3>
            <div className="flex flex-col gap-5 justify-between">
              {movieReviews?.results.map((review) => (
                <div className="bg-base-100 p-5 rounded-2xl">
                  <div className="flex justify-between items-center mb-5">
                    <div>
                      <h2>{review.author}</h2>
                      <h3 className="text-sm text-zinc-400 ">
                        {review.created_at.split("T")[0]}
                      </h3>
                    </div>
                    <span className="badge badge-neutral">
                      {review.author_details.rating}
                    </span>
                  </div>
                  <p className="text-zinc-400">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-neutral rounded-2xl p-8 gap-5 max-h-[30rem]">
          <div>
            <h3 className="flex items-center gap-1 mb-2 text-zinc-400">
              <CiCalendarDate />
              Released Year
            </h3>
            {movie?.release_date}
          </div>
          <div>
            <h3 className="flex items-center gap-1 text-zinc-400">
              <PiTranslateLight />
              Available Languages
            </h3>
            {movie?.spoken_languages.map((language) => (
              <span className="badge badge-lg m-1 mt-3">
                {language.english_name}
              </span>
            ))}
          </div>
          <div>
            <h3 className="flex items-center gap-1 text-zinc-400">
              <CiStar />
              Ratings
            </h3>
            <span className="badge badge-lg m-1 mt-3">
              {Number(movie?.vote_average).toFixed(1)}
            </span>
          </div>
          <div>
            <h3 className="flex items-center gap-1 text-zinc-400">
              <GrAppsRounded /> Genres
            </h3>
            {movie?.genres
              .map((id) => MoviesGenres?.genres.find((gen) => gen.id === id.id))
              .filter((gen) => gen !== undefined)
              .map((gen) => (
                <div className="badge badge-lg m-1 mt-3">{gen?.name}</div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
