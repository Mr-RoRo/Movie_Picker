import { CiSearch } from "react-icons/ci";
import { useSearch } from "../store";
const SearchBar = () => {
  const setSearch = useSearch((s) => s.setSearch);
  return (
    <label className="input input-bordered flex items-center gap-2">
      <CiSearch />
      <input
        type="text"
        className="grow"
        placeholder="Search..."
        onKeyDown={(e) => {
          if (e.key === "Enter") setSearch(e.currentTarget.value);
        }}
      />
    </label>
  );
};

export default SearchBar;
