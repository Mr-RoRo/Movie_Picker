import { CiSearch, CiFilter } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { useFilter, useSearch } from "../store";
import { useState } from "react";
import { Genres, SortedItems } from "../hooks/types";

interface Props {
  sortedItems: SortedItems[];
  genres?: Genres[];
}
const SearchBar = ({ sortedItems, genres }: Props) => {
  const filterFields = [
    { id: 1, name: "Release Year", placeholder: "Year..." },
    { id: 2, name: "score of more than input", placeholder: "Score..." },
    { id: 3, name: "score of less than input", placeholder: "Score..." },
    { id: 4, name: "Genre", inputType: "selectInput" },
    { id: 4, name: "Sort By", inputType: "selectInput" },
  ];

  const setSearch = useSearch((s) => s.setSearch);
  const [openFilter, setOpenFilter] = useState(false);
  const {
    releaseYear,
    setReleaseYear,
    setSubmit,
    setScoreDown,
    setScoreUp,
    scoreDown,
    scoreUp,
    sortBy,
    genre,
    setSortBy,
    setGenre,
  } = useFilter();
  return (
    <label className="input input-bordered flex items-center gap-2">
      <CiSearch size={24} />
      <input
        type="text"
        className="grow"
        placeholder="Search..."
        onKeyDown={(e) => {
          if (e.key === "Enter") setSearch(e.currentTarget.value);
        }}
      />
      <CiFilter
        size={24}
        className="cursor-pointer"
        onClick={() => setOpenFilter(true)}
      />
      <dialog className="modal z-20" open={openFilter}>
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-6 flex justify-between items-center">
            Filter Movies
            <IoClose
              className="cursor-pointer"
              size={25}
              onClick={() => setOpenFilter(false)}
            />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-3">
            {filterFields.map((fields) => (
              <div key={fields.id}>
                <label
                  htmlFor="year"
                  className="block mb-1 ml-1 text-neutral-content"
                >
                  {fields.name}
                </label>
                {fields.inputType === "selectInput" ? (
                  <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={(e) => {
                      fields.name === "Sort By" && setSortBy(e.target.value);
                      fields.name === "Genre" && setGenre(e.target.value);
                    }}
                  >
                    <option disabled selected>
                      {fields.name}
                    </option>
                    {fields.name === "Sort By" &&
                      sortedItems.map((item) => (
                        <option value={item.name} key={item.id}>
                          {item.label}
                        </option>
                      ))}
                    {fields.name === "Genre" &&
                      genres?.map((genre) => (
                        <option value={genre.id} key={genre.id}>
                          {genre.name}
                        </option>
                      ))}
                  </select>
                ) : (
                  <input
                    id="year"
                    type="text"
                    placeholder={fields.placeholder}
                    className="input input-bordered w-full"
                    onChange={(e) => {
                      fields.name === "Release Year" &&
                        setReleaseYear(e.target.value);
                      fields.name === "score of less than input" &&
                        setScoreDown(e.target.value);
                      fields.name === "score of more than input" &&
                        setScoreUp(e.target.value);
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => {
                setSubmit(
                  `Filtered year:${releaseYear} scoreUp:${scoreUp} scoreDown:${scoreDown} genre:${genre} sort by:${sortBy}`
                );
                setOpenFilter(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </label>
  );
};

export default SearchBar;
