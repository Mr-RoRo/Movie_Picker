import Discover from "../../components/Discover";
import { Genres } from "../../hooks/types";
import useGet from "../../hooks/useGet";
import { sortedItemsTVshows } from "../../store";

const TVshows = () => {
  const { data: TVshowsGenres } = useGet<{ genres: Genres[] }>(
    "genre/tv/list",
    ["TVshowsGenres"]
  );
  return <Discover discoverType="tv" discoverGenres={TVshowsGenres?.genres} sortedItems={sortedItemsTVshows} />;
};

export default TVshows;
