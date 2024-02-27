import InfiniteScroll from "react-infinite-scroll-component";
import { Genres, MovieAndTVshow, SortedItems } from "../hooks/types";
import useInfiniteGet from "../hooks/useInfiniteGet";
import { useSearch, useFilter } from "../store";
import Card from "./Card";
import SearchBar from "./SearchBar";

interface Props {
  discoverType: "tv" | "movie";
  sortedItems: SortedItems[];
  discoverGenres?: Genres[];
}

const Discover = ({ discoverGenres, discoverType, sortedItems }: Props) => {
  const search = useSearch((s) => s.search);
  const { releaseYear, scoreDown, scoreUp, genre, sortBy, submit } =
    useFilter();

  const {
    data: items,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteGet<MovieAndTVshow>(
    `discover/${discoverType}?${
      discoverType === "tv" ? "first_air_date_year" : "primary_release_year"
    }=${releaseYear}&vote_average.lte=${scoreDown}&vote_average.gte=${scoreUp}&with_genres=${genre}&sort_by=${sortBy}`,
    [discoverType, submit]
  );

  const {
    data: searchedItems,
    isLoading,
    hasNextPage: searchedItemsHasNextPage,
    fetchNextPage: searchedItemsNextPage,
  } = useInfiniteGet<MovieAndTVshow>(`search/${discoverType}?query=${search}`, [
    `searched${discoverType}`,
    search,
  ]);
  return (
    <div className="flex flex-col gap-5">
      <SearchBar genres={discoverGenres} sortedItems={sortedItems} />
      {isLoading ? (
        <span className="loading loading-infinity loading-lg self-center"></span>
      ) : (
        <InfiniteScroll
          dataLength={
            searchedItems?.pages[0].total_results
              ? searchedItems.pages.length || 1
              : items?.pages.length || 1
          }
          hasMore={
            searchedItems?.pages[0].total_results
              ? searchedItemsHasNextPage
              : hasNextPage
          }
          next={
            searchedItems?.pages[0].total_results
              ? searchedItemsNextPage
              : fetchNextPage
          }
          loader={
            <span className="loading loading-infinity loading-lg self-center"></span>
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-7 mt-3">
            {(searchedItems?.pages[0].total_results
              ? searchedItems
              : items
            )?.pages.map((item) => (
              <Card
                items={item.results}
                itemsGenres={discoverGenres}
                className="w-60 h-[18.5rem] mx-auto"
              />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Discover;
